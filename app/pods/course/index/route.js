import Route from '@ember/routing/route';

export default Route.extend({
  setupController(controller) {
    const categories = this.modelFor('course');
    controller.set('category', categories.firstObject);
  }
});
