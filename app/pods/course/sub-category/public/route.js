import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return RSVP.hash({
      publicSqlCourse:this.store.query('page', {per_page: 99, order: 'asc', slug: 'public-sql-course'})
    });
  },

  setupController(controller, model){
    controller.setProperties(model);
  },
});
