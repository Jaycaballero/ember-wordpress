import Route from '@ember/routing/route';

export default Route.extend({
  setupController(controller, model) {
    const category = this.modelFor('course');
    controller.set('category', category);
  }
});
