## Front-End Boilerplate ##

More details on how it works and the backstory can be found at: http://kps3.com/our-front-end-development-boilerplate/

Prerequisites: Node (http://nodejs.org/), Compass (gem install compass), and Grunt (npm install -g grunt-cli)

The gist of how we use the repo:

1. Open Terminal and navigate to the boilerplate repo on your machine.
2. Do a “git pull” to receive any updates/bug fixes that may have happened since you last used it.
3. Copy the files from the boilerplate directory and paste them into your new project directory.
4. If you’re good with the basics, simply run “npm install”.
5. If you’d like to add anything more custom, run “npm install [package-name] --save-dev”. This will install the module and add it to your package.json so others will get it.
6. Since we’re using both Grunt and Compass, there are two config files you can edit to your specifics needs: Gruntfile.js (grunt) and config.rb (compass).
7. Now that your settings are configured, navigate to your project directory in Terminal and type “grunt watch”. This will watch the directory for any changes. As files get saved and changes get made, Grunt will recompile all the styles, javascript, templates… basically all the magic.
