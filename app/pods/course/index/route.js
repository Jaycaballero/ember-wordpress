import Route from '@ember/routing/route';
import { isArray } from '@ember/array';

export default Route.extend({
  setupController(controller) {
    const category = isArray(this.modelFor('course'))
      ? this.modelFor('course').firstObject
      : this.modelFor('course');
    controller.set('category', category);
  }
});
