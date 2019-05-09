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
      const subCategory = course.subCategory.firstObject;
      const category = course.category.firstObject;
      this.transitionToRoute('course.sub-category', category.slug, subCategory.slug);
    }
  }
});
