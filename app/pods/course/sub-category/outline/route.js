import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model({ course_slug }) {
    return RSVP.hash({
      course: this.get('store').queryRecord('course', { slug: course_slug } )
    });
  },
  setupController(controller, model) {
    controller.set('course', model.course);
  },
});
