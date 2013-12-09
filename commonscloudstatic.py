"""
Copyright 2013 Viable Industries, L.L.C., All rights reserved.
"""

"""
System Dependencies
"""
import os, sys, itertools, logging
from flask import Flask, render_template
from flask_frozen import Freezer
from flask.ext.flatpages import FlatPages


"""
Define our application variable
"""
commonscloudstatic = Flask(__name__, template_folder='_templates')

"""
Load our configuration
"""
commonscloudstatic.config.from_object('constants')


pages = FlatPages(commonscloudstatic)
cube = Freezer(commonscloudstatic)


"""
Front page
"""
@commonscloudstatic.route('/')
def index():
    page = pages.get_or_404('index')
    return render_template('index.html', page=page, pages=pages)


"""
Other pages
"""
@commonscloudstatic.route('/<path:path>/')
def page(path):
    page = pages.get_or_404(path)
    template = page.meta.get('template', 'page.html')

    pollutants = []

    all_pollutants = [
      {
        'type': 'NO3'
      },
      {
        'type': "NH-3"
      },
      {
        'type': "Sb"
      },
      {
        'type': "As"
      },
      {
        'type': "Ba"
      },
      {
        'type': "Be"
      },
      {
        'type': "B"
      },
      {
        'type': "Cd"
      },
      {
        'type': "Co"
      },
      {
        'type': "Cr"
      },
      {
        'type': "Cu"
      },
      {
        'type': "Cn"
      },
      {
        'type': "F"
      },
      {
        'type': "GAP"
      },
      {
        'type': "GBP"
      },
      {
        'type': "Pb"
      },
      {
        'type': "Mn"
      },
      {
        'type': "Hg"
      },
      {
        'type': "Mo"
      },
      {
        'type': "Ni"
      },
      {
        'type': "Ra"
      },
      {
        'type': "Se"
      },
      {
        'type': "Ag"
      },
      {
        'type': "Sr"
      },
      {
        'type': "Tl"
      },
      {
        'type': "H-3"
      },
      {
        'type': "U"
      }
    ]
        
    # if page['template'] == 'well.html' or page['template'] == 'facility.html':
    if page['template'] == 'well.html' or page['template'] == 'facility.html':
      print 'Processing page: ' + page['permalink']
      if page['pollutants']:
        not_tracked_pollutants = page['pollutants']
        for pollutant in all_pollutants:
          for not_tracked_pollutant in not_tracked_pollutants:
            if 'type' in not_tracked_pollutant:
              if pollutant['type'] == not_tracked_pollutant['type']:
                if 'tracking' not in pollutant:
                  not_tracked_pollutant['exceedence'] = 'exceeded'
                pollutant.update(not_tracked_pollutant)
          pollutants.append(pollutant)
    else: 
      pollutants = all_pollutants

    return render_template(template, page=page, pages=pages, pollutants=pollutants);


"""
URL Generator for pages
"""
@cube.register_generator
def page():
    for page in pages:
      yield {'path': page['permalink']}

"""
Check to ensure that the application is loaded through
a virtual enviornment. If it is not, prompt the user
to either install a virtual enviornment or activate
the one with the applciation.
"""
if __name__ == "__main__":
    if "VIRTUAL_ENV" not in os.environ:
        print("""
        Your Virtual Environment or virtualenv has not been activated.

        To use this application, please activate it by executing:
        
          source venv/bin/activate
          
        If the problem persists, ensure that virtualenv is installed:
        
          pip install virtualenv
          
        and that all other requirements have been satisfied.
        """)
    elif len(sys.argv) > 1 and sys.argv[1] == "build":
        cube.freeze()
    else:
        commonscloudstatic.run(port=commonscloudstatic.config['PORT'])