import Route from '@ember/routing/route';

export default Route.extend({
  model({ sub_category }) {
    return this.get('store').queryRecord('sub-category', { slug: sub_category });
  },

  setupController(controller, subCategory) {
   controller.set('subCategory', subCategory);
  }
});
