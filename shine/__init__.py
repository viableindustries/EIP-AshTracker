"""
Copyright 2013 Viable Industries, L.L.C., All rights reserved.
"""

"""
System Dependencies
"""
import os, sys
from flask import Flask
from flask_frozen import Freezer
from flask.ext.flatpages import FlatPages


"""
Define our application variable
"""
shine = Flask(__name__)

pages = FlatPages(shine)
cube = Freezer(shine)


"""
Load our views to build our pages
"""
from shine import views