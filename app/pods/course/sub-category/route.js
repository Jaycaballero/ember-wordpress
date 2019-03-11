import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model({ sub_category }) {
    return RSVP.hash({
      testimonials: this.store.query('clienttestimonial', {per_page: 1, order: 'desc'}),
      subCategory: this.get('store').queryRecord('sub-category', { slug: sub_category })
    });
  },

  setupController(controller, model, subCategory) {
    const category = this.modelFor('course');
    controller.set('category', category);
    controller.set('subCategory', model.subCategory);
    controller.set('testimonials', model.testimonials);
  }
});
