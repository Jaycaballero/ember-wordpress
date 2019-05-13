import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model({ course_slug }) {
    return RSVP.hash({
      courses: this.get('store').query('course', { slug: course_slug, include: ['relatedCourses'] } )
    });
  },
  setupController(controller, model) {
    controller.set('course', model.courses.firstObject);
  },
});
