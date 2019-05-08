import Route from '@ember/routing/route';

export default Route.extend({
  model({ course }) {
    return this.get('store').query('category', { slug: course, include: ['subCategories']});
  }
});
