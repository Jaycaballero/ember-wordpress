import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { get } from '@ember/object';

export default Route.extend({
  titleToken: function(model) {
    return model.courses.firstObject.title;
  },
  model({ course_slug }) {
    return RSVP.hash({
      courses: this.get('store').query('course', { slug: course_slug, published: 1 } ),
      crmLead: get(this, 'store').createRecord('crm-lead', {}),
    });
  },
  setupController(controller, model) {
    const subCategories = this.modelFor('course.sub-category');
    controller.set('course', model.courses.firstObject);
    controller.set('lead', model.crmLead);
    controller.set('subCategory', subCategories.subCategories.firstObject);
  },
  actions: {
    refreshModel() {
      this.refresh();
    }
  }
});
