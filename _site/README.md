# Ashtracker

## Not a developer

If you're not a developer you can use a third-party utility called Prose.io to manage all of the content within the Stormwater website. More instructions on this are available by contacting one of our staff at grow@viable.io


- *Templates* - Just regular HTML
- *Markdown* - Text Editing ... that's your content for pages
- *Jekyll* - Is for putting Markdown content with HTML page templates

Jekyll is built on top of Ruby ... but that really isn't all that important.


## Starting the site locally

### First Launch

The first time you wish to launch this process you'll need to make sure that Jekyll is install on your local development enviornment. If it is already installed you can skip down to "Starting the development enviornment"


1. To install Jekyll

    gem install jekyll

2. That's it.

If that doesn't work or if you're running an older version of Jekyll and Mac OS X won't let you update you may need to install Jekyll directly from http://rubygems.org/jekyll

    gem install --source http://rubygems.org jekyll


### Starting Jekyll for development

Running the command below will get your development enviornment running and accessible at http://127.0.0.1:4002

    jekyll serve --watch --port 4002 --baseurl /

From there you will be able to edit all of the files from this repository in the text editor of your choice to customize the site.