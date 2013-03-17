#!env/bin/python
import sys

from flask import Flask, render_template
from flask_flatpages import FlatPages
from flask_frozen import Freezer

DEBUG = True
FLATPAGES_AUTO_RELOAD = DEBUG
FLATPAGES_EXTENSION = '.md'

app = Flask(__name__)
app.config.from_object(__name__)
pages = FlatPages(app)
freezer = Freezer(app)

@app.route('/')
def index():
	return render_template('index.html', pages=pages)

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

if __name__ == '__main__':
	if len(sys.argv) > 1 and sys.argv[1] == "build":
		freezer.freeze()
	else:
		app.run(port=8000)