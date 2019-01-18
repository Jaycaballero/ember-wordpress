import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(parameter) {
    return RSVP.hash({
      pageTitle: this.store.query('page', {slug: 'about-us'}),
      aboutFullItemView: this.store.query('about', {slug: parameter.about}),
    });
  },

  setupController(controller, model){
    controller.set('pageTitle', model.pageTitle);
    controller.set('aboutFullItemView', model.aboutFullItemView);
  }
});
