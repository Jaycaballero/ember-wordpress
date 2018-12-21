import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(parameter) {
    console.log(parameter.about);
    return RSVP.hash({
      aboutChildPages: this.store.query('about', {slug: parameter.about}),
    });
  },

  setupController(controller, model){
    controller.set('aboutChildPages', model.aboutChildPages);
  }
});
