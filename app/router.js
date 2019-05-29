import EmberRouter from '@ember/routing/router';
import { inject as service } from '@ember/service';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
  headData: service(),

  setTitle(title) {
    this.get('headData').set('title', title);
  }
});

Router.map(function() {
  this.route('about', {path: "about-us/:about"});
  this.route('howwetrain', {path: "how-we-train/:howwetrain"});
  this.route('tipsandtrick', {path: "tips-tricks/:tipsandtrick"});
  this.route('course', {path: "courses/:course"}, function() {
    this.route('sub-category', { path: "/:sub_category_slug"}, function() {
      this.route('outline', { path: '/:course_slug' }, function() {
      });
      this.route('public', { path: '/:public-sql-course' }, function(){});
    });
  });
  this.route('page', {path: "/:page"});
});

export default Router;
