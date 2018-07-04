# CS@Illinois Proficiency Exam Website

[![Build Status](https://travis-ci.org/texne/proficiency.cs.illinois.edu.svg?branch=master)](https://travis-ci.org/texne/proficiency.cs.illinois.edu)

If you are maintaining course-specific information, please update the
appropriate file in `_includes`.
<!--- -->
See the example in `_includes/cs125.md` for an example.
<!--- -->
Files are in
[Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
format with
[Kramdown](https://kramdown.gettalong.org/) extensions.

## Building Locally

To build and examine the site locally, you need [Ruby
installed](https://www.ruby-lang.org/en/documentation/installation/).
<!--- -->
We suggest using the [`rubenv`](https://github.com/rbenv/rbenv) Ruby version
manager.
<!--- -->
Then run `bundle install` to install the project dependencies.

At that point you can run `rake serve` to launch a local version of the
website on port 4000 or `rake test` to test for dead links and other problems.
