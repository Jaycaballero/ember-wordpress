import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default Route.extend({

  sectionTitle: service(),

  model(){
    return RSVP.hash({
      banners: this.store.query('banner', {categorybanners: 3, order: 'asc', per_page: 1}),
      services: this.store.query('service', {order: 'asc', per_page: 3}),
      brandingSection: this.store.query('brand', {categorybrands: 4, order: 'asc', per_page: 1}),
      ourBenefitsSection: this.store.query('ourbenefit', {order: 'asc', per_page: 9}),
      sectionTitle: this.get('sectionTitle').request('types/ourbenefits'),
      aboutUsSection: this.store.query('about', {order: 'asc', per_page: 3}),
    });
  },
  setupController(controller, model){
    controller.set('banners', model.banners);
    controller.set('services', model.services);
    controller.set('brandingSection', model.brandingSection);
    controller.set('ourBenefitsSection', model.ourBenefitsSection);
    controller.set('sectionTitle', model.sectionTitle);
    controller.set('aboutUsSection', model.aboutUsSection);
    controller.set('courses', {});
  }

});
