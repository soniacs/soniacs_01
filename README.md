# My Website

It's built with a simple static site generator made with Flask, Frozen-Flask and Flask-Flatpages.

https://nicolas.perriault.net/code/2012/dead-easy-yet-powerful-static-website-generator-with-flask/

## Project Setup
	cd Sites/dev/soniacs
	virtualenv env
	env/bin/pip install Flask Frozen-Flask Flask-Flatpages

## Run Server
	chmod a+x build.py
	./build.py

## Generate Static Site
	./build.py build

## Executable Files Shebang
	#!env/bin/python