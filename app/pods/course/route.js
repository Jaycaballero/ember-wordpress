import Route from '@ember/routing/route';

export default Route.extend({
  titleToken: function(model) {
    return model.firstObject.title;
  },
  model({ course }) {
    return this.get('store').query('category', { slug: course, include: ['subCategories', 'courses']});
  }
});
