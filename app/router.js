import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('page', {path: "/:page"}, function(){
    this.route('howwetrain', {path: "/:howwetrain"});
  })
});

export default Router;
