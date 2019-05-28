import Route from '@ember/routing/route';

export default Route.extend({
  titleToken: function(model) {
    const category = this.modelFor('course');
    const subCategory = category.firstObject.get('subCategories').findBy('slug', model.subCategorySlug);
    return subCategory.title + ' Training';
  },
  setupController(controller, model) {
    const category = this.modelFor('course');
    const subCategory = category.firstObject.get('subCategories').findBy('slug', model.subCategorySlug);
    controller.set('coursesOutline', model.courses);
    controller.set('lead', model.crmLead);
    controller.set('category', category.firstObject);
    controller.set('subCategory', subCategory);
    controller.set('testimonials', model.testimonials);
  }
});
