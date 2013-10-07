"""
Copyright 2013 Viable Industries, L.L.C., All rights reserved.
"""

"""
System Dependencies
"""
import os, sys
from shine import shine, cube
from shine import constants as CONFIG


"""
Load our configuration
"""
shine.config.from_object('shine.constants')


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
        shine.run(port=CONFIG.PORT)