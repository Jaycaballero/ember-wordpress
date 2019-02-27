import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    const {subCategory} = this.modelFor('course');
    // console.log(subCategory);
    //console.log(subCategory.findBy('slug', params.sub_category));
    return subCategory.findBy('slug', params.sub_category);
  },

  setupController(controller, model) {
    controller.set('subCategory', model);
  },
});
