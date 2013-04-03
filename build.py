#!env/bin/python
import sys

from flask import Flask, render_template
from flask_flatpages import FlatPages
from flask_frozen import Freezer
from flask.ext.assets import Environment, Bundle

DEBUG = True
FLATPAGES_AUTO_RELOAD = DEBUG
FLATPAGES_EXTENSION = '.md'

app = Flask(__name__)
app.config.from_object(__name__)
pages = FlatPages(app)
freezer = Freezer(app)
assets = Environment(app)

# ASSETS
css = Bundle('less/main.less',
	filters = 'less, yui_css', output = 'css/main.css')
main_js = Bundle('js/raphael-min.js', 'js/main.js',
	filters = 'yui_js', output = 'js/main-min.js')
home_js = Bundle('js/main-min.js','js/waypoints.min.js', 'js/jquery.leanModal.min.js', 'js/jquery.fittext-ck.js', 'js/home.js',
	filters = 'yui_js', output = 'js/home-min.js')
contact_js = Bundle('js/main-min.js','js/contact.js',
	filters = 'yui_js', output = 'js/contact-min.js')

assets.register('css', css)
assets.register('main_js', main_js)
assets.register('home_js', home_js)
assets.register('contact_js', contact_js)

# ROUTES
@app.route('/')
def index():
	projects = (p for p in pages if 'published' in p.meta and p.path.startswith('projects'))
	projects_sorted = sorted(projects, reverse=True, key=lambda p: p.meta['published'])
	return render_template('index.html', 
		projects = projects_sorted)

@app.route('/notes/')
def notes():
	return render_template('notes.html', pages=pages)

@app.route('/contact/')
def contact():
	return render_template('contact.html', pages=pages)

@app.route('/<path:path>/')
def page(path):
	page = pages.get_or_404(path)
	if path.startswith('contact'):
		template = page.meta.get('template', 'email-submit.html')
	elif path.startswith('notes'):
		template = page.meta.get('template', 'note.html')
	return render_template(template, page=page)

# RUN AND BUILD
@freezer.register_generator
def email_sent():
	yield '/contact/email-not-sent/'
	yield '/contact/email-sent/'

if __name__ == '__main__':
	if len(sys.argv) > 1 and sys.argv[1] == "build":
		freezer.freeze()
	else:
		app.run(port=8000)