import Route from '@ember/routing/route';
import { isArray } from '@ember/array';

export default Route.extend({
  titleToken: function(model) {
    return isArray(model)
      ? model.firstObject.title
      : model.title;
  },
  model({ course }) {
    if (this.modelFor('page')) {
      return this.modelFor('page').categories.findBy('slug', course);
    }
    return this.get('store').query('category', { slug: course, include: ['subCategories', 'courses']});
  }
});
