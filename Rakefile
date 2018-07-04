require 'html-proofer'

task :build do
  sh "bundle exec jekyll build"
end

task :serve do
  sh "bundle exec jekyll serve"
end

task :test do
	sh "bundle exec jekyll build"
	options = { :assume_extension => true, :ssl_venifypeer => false }
	HTMLProofer.check_directory("./_site", options).run
end
