Ash Tracker
==========

The Environmental Integrity Project's Ash Tracker website


## Getting Started with Shine

Completing this tutorial assumes that you are running a Mac OS X, have access to Utilities > Terminal.app, and have installed XCode (Mac's Developer Tools). Without these components you'll need to manually install the latest version of Python, the Python Installer Package library or PIP, and VirtualENV.

### Cloning the repository

1. First we'll need to get the files from the Github repository, we'll need to open Terminal and type the following

    $ git clone git@github.com:viableindustries/ashtracker.git
    

### Setting up the site development enviornment

1. Setup a basic Python Virtual Enviornment

    $ virtualenv venv
    
2. Now that we have a Virtual Environment installed we can safely start the Shine application

    $ source venv/bin/activate
    
3. Now we are operating the Shine application within a Virtual Enviornment and we can setup the dependencies for Shine

    $ pip install -r requirements.txt

### Starting Shine

1. Now that we've got the files from Github, setup the Virtual Enviornment, and installed the necessary dependents, we can start the Shine application

    $ python shine.py 
    
2. At this point you can view the running application at http://127.0.0.1:36477