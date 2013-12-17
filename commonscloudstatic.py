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
        'type': 'NO3',
        "name": "Nitrate"
      },
      {
        'type': "NH-3",
        "name": "Ammonia"
      },
      {
        'type': "Sb",
        'name': "Antimony"
      },
      {
        'type': "As",
        "name": "Arsenic"
      },
      {
        'type': "Ba",
        "name": "Barium"
      },
      {
        'type': "Be",
        "name": "Beryllium"
      },
      {
        'type': "B",
        "name": "Boron"
      },
      {
        'type': "Cd",
        "name": "Cadmium"
      },
      {
        'type': "Co",
        "name": "Cobalt"
      },
      {
        'type': "Cr",
        "name": "Chromium"
      },
      {
        'type': "Cu",
        "name": "Copper"
      },
      {
        'type': "Cn",
        "name": "Cyanide"
      },
      {
        'type': "F",
        "name": "Flouride"
      },
      {
        'type': "GAP",
        "name": "Gross Alpha Particle"
      },
      {
        'type': "GBP",
        "name": "Gross Beta Particle"
      },
      {
        'type': "Pb",
        "name": "Lead"
      },
      {
        'type': "Mn",
        "name": "Manganese"
      },
      {
        'type': "Hg",
        "name": "Mercury"
      },
      {
        'type': "Mo",
        "name": "Molybdenum"
      },
      {
        'type': "N",
        "name": "Nitrate"
      },
      {
        'type': "Ni",
        "name": "Nickel"
      },
      {
        'type': "Ra",
        "name": "Radium"
      },
      {
        'type': "Se",
        "name": "Selenium"
      },
      {
        'type': "Ag",
        "name": "Silver"
      },
      {
        'type': "Sr",
        "name": "Strontium"
      },
      {
        'type': "Tl",
        "name": "Thalium"
      },
      {
        'type': "H-3",
        "name": "Tritium"
      },
      {
        'type': "U",
        "name": "Uranium"
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