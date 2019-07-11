import Controller from '@ember/controller';
import { set } from '@ember/object';
import { task, timeout } from 'ember-concurrency';

export default Controller.extend({
  searchCourse: task(function* (text) {
    yield timeout(500);
    return this.get('store')
      .query('course', {q: text, include: 'categories,subCategories'})
      .then((courses) => {
        set(this, 'courses', courses);
      });
  }),
  actions: {
    selectCourse([course]) {
      const category = course.categories.firstObject;
      const subCategory = course.subCategories.firstObject;
      this.transitionToRoute('course.sub-category.outline', category.slug, subCategory.slug, course.slug);
    }
  }
});
