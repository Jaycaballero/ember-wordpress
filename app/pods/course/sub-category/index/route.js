import Route from '@ember/routing/route';
import { isArray } from '@ember/array';

export default Route.extend({
  titleToken: function(model) {
    const category = isArray(this.modelFor('course'))
      ? this.modelFor('course').firstObject
      : this.modelFor('course');
    const subCategory = category.get('subCategories').findBy('slug', model.subCategorySlug);
    return subCategory.title + ' Training';
  },
  setupController(controller, model) {
    const category = isArray(this.modelFor('course'))
      ? this.modelFor('course').firstObject
      : this.modelFor('course');
    const subCategory = category.get('subCategories').findBy('slug', model.subCategorySlug);
    controller.set('coursesOutline', model.courses);
    controller.set('lead', model.crmLead);
    controller.set('category', category);
    controller.set('subCategory', subCategory);
    controller.set('testimonials', model.testimonials);
  }
});
