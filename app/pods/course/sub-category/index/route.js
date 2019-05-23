import Route from '@ember/routing/route';

export default Route.extend({
  titleToken: function(model) {
    return model.subCategories.firstObject.title + ' Training';
  },
  setupController(controller, model) {
    const category = this.modelFor('course');
    controller.set('coursesOutline', model.courses);
    controller.set('lead', model.crmLead);
    controller.set('category', category.firstObject);
    controller.set('subCategory', model.subCategories.firstObject);
    controller.set('testimonials', model.testimonials);
  }
});
