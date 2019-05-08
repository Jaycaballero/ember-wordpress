import Controller from '@ember/controller';
import { get, set } from '@ember/object';
import { task, timeout } from 'ember-concurrency';

export default Controller.extend({
  searchCourse: task(function* (text) {
    yield timeout(500);
    return this.get('store').query('course', {q: text, include: 'categories,subCategories'})
      .then((data) => {
        set(this, 'courses', data);
      });
  }),
  actions: {
    selectCourse(courses) {
      if (courses == null || courses.length < 1) {
        return;
      }
      const subCategory = courses.firstObject.subCategory.firstObject;
      const category = courses.firstObject.category.firstObject;
      this.transitionToRoute('course.sub-category', category.slug, subCategory.slug);
    }
  }
});
