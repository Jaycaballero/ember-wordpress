import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  titleToken: function(model) {
    return model.postItem.firstObject.title;
  },
  model(params) {
    return RSVP.hash({
      pageTitle: this.store.query('page', {slug: 'how-we-train'}),
      postItem: this.store.query('howwetrain', {slug: params.howwetrain}),
    });
  },

  setupController(controller, model){
    controller.set('pageTitle', model.pageTitle);
    controller.set('postItem', model.postItem);
  }
});
