import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default Route.extend({

  sectionTitle: service(),

  model(params) {
    return RSVP.hash({
      defaultTemplate: this.store.query('page', {slug: params.page}),
      howWeTrain:this.store.query('howwetrain', {per_page: 99, order: 'asc'}),
      testimonials: this.store.query('clienttestimonial', {per_page: 6, order: 'desc'}),
      testimonialsCarouselTitle: this.get('sectionTitle').request('types/clienttestimonials'),
    });
  },
  setupController(controller, model){
    controller.set('defaultTemplate', model.defaultTemplate);
    controller.set('howWeTrain', model.howWeTrain);
    controller.set('testimonials', model.testimonials);
    controller.set('testimonialsCarouselTitle', model.testimonialsCarouselTitle);
  }
});
