import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
  titleToken: 'Public SQL Course',

  model(params) {
    return hash({
      categories: this.store.query('category', {'include': ['courses','subCategories'], 'published': 1}),
      locations: this.store.query('location', {per_page: 99, order: 'asc'}),
      pages: this.store.query('page', {per_page: 99, order: 'asc', slug: 'public-sql-course'}),
      defaultTemplate: this.store.query('page', {slug: params.page}),
    });
  },

  setupController(controller, model) {
    controller.setProperties(model);
    controller.set('selectedLocation', model.locations.get('firstObject'));
  }
});
