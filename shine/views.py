"""
Copyright 2013 Viable Industries, L.L.C., All rights reserved.
"""

"""
System Dependencies
"""
import logging
from flask import render_template


"""
Shine Dependencies
"""
from shine import shine, pages, cube


"""
Front page
"""
@shine.route('/')
def index():
    page = pages.get_or_404('index')
    return render_template('index.html', page=page, pages=pages)


"""
Other pages
"""
@shine.route('/<path:path>/')
def page(path):
    page = pages.get_or_404(path)
    template = page.meta.get('template', 'page.html')
    return render_template(template, page=page, pages=pages);


"""
URL Generator for pages
"""
@cube.register_generator
def page():
    for page in pages:
        yield {'path': page.path}
        
