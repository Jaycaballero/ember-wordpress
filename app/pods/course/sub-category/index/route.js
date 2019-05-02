import Route from '@ember/routing/route';

export default Route.extend({
  setupController(controller, model) {
    const category = this.modelFor('course');
    controller.set('coursesOutline', model.courses);
    controller.set('category', category);
    controller.set('subCategory', model.subCategory);
    controller.set('testimonials', model.testimonials);
  }
});
