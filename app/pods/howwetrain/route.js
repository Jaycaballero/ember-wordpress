import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(params) {
    return RSVP.hash({
      postItem: this.store.query('howwetrain', {slug: params.howwetrain}),
      pageTitle: this.store.query('page', {slug: 'how-we-train'}),
    });
  },

  setupController(controller, model){
    controller.set('postItem', model.postItem);
    controller.set('pageTitle', model.pageTitle);
  }

});
