import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(parameter) {
    return RSVP.hash({
      aboutFullItemView: this.store.query('about', {slug: parameter.about}),
      pageTitle: this.store.query('page', {slug: 'about-us'}),
    });
  },

  setupController(controller, model){
    controller.set('aboutFullItemView', model.aboutFullItemView);
    controller.set('pageTitle', model.pageTitle);
  }
});
