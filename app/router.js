import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  this.route('about', {path: "about-us/:about"});
  this.route('howwetrain', {path: "how-we-train/:howwetrain"});
  this.route('tipsandtrick', {path: "tips-tricks/:tipsandtrick"});
  this.route('course', {path: "courses/:course"}, function() {
    this.route('sub-category', { path: "/:sub_category_slug"}, function() {
        this.route('outline', { path: '/:course_slug' });
    });
  });
  this.route('page', {path: "/:page"});
});

export default Router;
