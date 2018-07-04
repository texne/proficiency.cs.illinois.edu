abort('Please run this using `bundle exec rake`') unless ENV["BUNDLE_BIN_PATH"]
require 'html-proofer'

desc "Build the website"
task :build do
  sh "bundle exec jekyll build"
end

desc "Serve the website locally"
task :serve do
  sh "bundle exec jekyll serve"
end

desc "Test the website"
task :test => [:build] do
  options = {
    :check_external_hash => true,
    :check_html => true,
    :check_img_http => true,
    :check_opengraph => true,
    :enforce_https => true,
    :typhoeus => {
      :ssl_verifypeer => false,
    },
  }
  begin
    HTMLProofer.check_directory("_site", options).run
  rescue => msg
    puts "#{msg}"
  end
end

task :default => [:test]
