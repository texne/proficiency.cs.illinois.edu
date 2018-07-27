# Illinois CS Proficiency Exam Website

[![Build Status](https://travis-ci.org/texne/proficiency.cs.illinois.edu.svg?branch=master)](https://travis-ci.org/texne/proficiency.cs.illinois.edu)

If you are maintaining course-specific information, please update the
appropriate file in `_includes`. See the example in `_includes/cs125.md` for an
example. Files are in
[Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
format with [Kramdown](https://kramdown.gettalong.org/) extensions.

Note that there is no need to file pull requests unless you want a review for some reason.
Feel free to just commit directly to master.

## Building Locally

To build and examine the site locally, you need [Ruby
installed](https://www.ruby-lang.org/en/documentation/installation/). We
suggest using the [`rubenv`](https://github.com/rbenv/rbenv) Ruby version
manager. Then run `bundle install` to install the project dependencies.

At that point you can run `bundle exec rake serve` to launch a local version of the
website on port 4000 or `bundle exec rake test` to test for dead links and other problems.
