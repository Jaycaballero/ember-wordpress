import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  titleToken: function(model) {
    return model.postItem.firstObject.title;
  },
  model(params) {
    return RSVP.hash({
      pageTitle: this.store.query('page', {slug: 'tips-tricks'}),
      postItem: this.store.query('tipsandtrick', {slug: params.tipsandtrick}),
    });
  },

  setupController(controller, model) {
    controller.set('postItem', model.postItem);
    controller.set('pageTitle', model.pageTitle);
  },

});
