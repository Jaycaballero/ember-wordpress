import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model({ course_slug }) {
    return RSVP.hash({
      courses: this.get('store').query('course', { slug: course_slug } ),
    });
  },
  setupController(controller, model) {
    const subCategories = this.modelFor('course.sub-category');
    controller.set('course', model.courses.firstObject);
    controller.set('subCategory', subCategories.subCategories.firstObject);
  },
});
