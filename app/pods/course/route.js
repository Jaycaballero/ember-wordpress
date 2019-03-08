import Route from '@ember/routing/route';

export default Route.extend({
  model({ course }) {
    return this.get('store').queryRecord('category', { slug: course });
  }
});
