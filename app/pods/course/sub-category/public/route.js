import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';
import { get } from '@ember/object';

export default Route.extend({
  model(params) {
    let rsvp;
    return RSVP.hash({
      publicSqlCourse:this.store.query('page', {per_page: 99, order: 'asc', slug: 'public-sql-course'})
    });
  },

  setupController(controller, model){
    controller.setProperties(model);
  },
});
