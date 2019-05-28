import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { get } from '@ember/object';

export default Route.extend({
  titleToken: function(model) {
    const subCategoryModel = this.modelFor('course.sub-category');
    const category = this.modelFor('course');
    const subCategory = category.firstObject.get('subCategories').findBy('slug', subCategoryModel.subCategorySlug);
    const course = subCategory.courses.findBy('slug', model.courseSlug);
    return course.title;
  },
  model({ course_slug }) {
    return RSVP.hash({
      courseSlug: course_slug,
      crmLead: get(this, 'store').createRecord('crm-lead', {}),
    });
  },
  setupController(controller, model) {
    const subCategoryModel = this.modelFor('course.sub-category');
    const category = this.modelFor('course');
    const subCategory = category.firstObject.get('subCategories').findBy('slug', subCategoryModel.subCategorySlug);
    const course = subCategory.courses.findBy('slug', model.courseSlug);
    controller.set('course', course);
    controller.set('lead', model.crmLead);
    controller.set('subCategory', subCategory);
  },
  actions: {
    refreshModel() {
      this.refresh();
    }
  }
});
