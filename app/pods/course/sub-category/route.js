import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model({subCategory}) {
    return RSVP.hash({
      testimonials: this.store.query('clienttestimonial', {per_page: 1, order: 'desc'}),
      subCategory: this.get('store').queryRecord('sub-category', { slug: subCategory })
    });
  }
});
