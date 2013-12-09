# Ashtracker

## Not a developer

If you're not a developer you can use a third-party utility called Prose.io to manage all of the content within the Stormwater website. More instructions on this are available by contacting one of our staff at grow@viable.io


- *Templates* - Just regular HTML
- *Markdown* - Text Editing ... that's your content for pages
- *Jekyll* - Is for putting Markdown content with HTML page templates

Jekyll is built on top of Ruby ... but that really isn't all that important.


## Starting the site locally


### Starting CommonsCloudStatic for development

Running the command below will get your development enviornment running and accessible at http://127.0.0.1:4002

    source venv/bin/activate
    python commonscloudstatic.py

or if you want to rebuild the site

    python commonscloudstatic.py build

From there you will be able to edit all of the files from this repository in the text editor of your choice to customize the site.