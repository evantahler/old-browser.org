# [old-browser.org](http://old-browser.org)

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/evantahler/old-browser.org/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

We are looking for traslations help!
If you are able, please fork this repo and create a pull request to add your language.  

Each language is in a locale folder ([/en-us for example](https://github.com/evantahler/old-browser.org/blob/gh-pages/en-us/index.html)).  All that is required is that you provide localized strings in YML document.

## How do I build the site?

OldBrowser.org is a static site hosted by [GitHub pages](http://pages.github.com/).  We use [Jekyll](http://jekyllrb.com/) to build the site and test it locally.  Here's a quick guide:

- [fork the project](https://help.github.com/articles/fork-a-repo/)
- install [Ruby](http://www.ruby-lang.org/) (comes with OSX)
- [git](http://git-scm.com/) clone this project
- [install](http://gembundler.com/) bundler
- install the gems this project needs with `bundle install`
- run jekyll `(bundle exec) jekyll serve --watch` which will run this site locally on port 4000.
- send your change in a [pull request](https://help.github.com/articles/using-pull-requests/), and once they are merged, your changes will be up on the site!

Thanks!
