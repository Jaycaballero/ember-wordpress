import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(params) {
    return RSVP.hash({
      category: this.store.query('category', {slug: params.course}),
      subCategory: this.store.query('sub-category', {slug: params.course}),
      //subCategory: this.findBy('slug', {params.subCategory});
    });
  },

  setupController(controller, model) {
    controller.set('category', model.category);
    controller.set('subCategory', model.subCategory);
  },

});
