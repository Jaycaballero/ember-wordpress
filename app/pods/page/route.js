import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';
import { get } from '@ember/object';

export default Route.extend({
  sectionTitle: service(),
  titleToken: function(model) {
    if (model.categories) {
      return 'Courses';
    }
    if (model.howWeTrain) {
      return 'How We Train';
    }
    if (model.tipsAndTricks) {
      return 'Tips & Tricks';
    }
    if (model.defaultTemplate.query.slug == 'contact-us') {
      return 'Contact Us';
    }
    if (model.defaultTemplate.query.slug == 'about-us') {
      return 'About Us';
    }
    return '';
  },
  model(params) {
   let rsvp;

   switch(params.page) {
     case 'how-we-train':
       rsvp = RSVP.hash({
         howWeTrain:this.store.query('howwetrain', {per_page: 99, order: 'asc'}),
         defaultTemplate: this.store.query('page', {slug: params.page}),
       });
       break;
     case 'courses':
       rsvp = RSVP.hash({
         categories: this.store.query('category', {'include': ['subCategories']}),
         defaultTemplate: this.store.query('page', {slug: params.page}),
       });
       break;
     case 'tips-tricks':
       rsvp = RSVP.hash({
         tipsAndTricks: this.store.query('tipsandtrick', {per_page: 4, order: 'desc'}),
         tipsAndTricksFeatured: this.store.query('tipsandtrick', {tipsandtrickscategories: 8, per_page: 1,}),
         tipsAndTricksCategories: this.store.query('tipsandtrickscategory', {}),
         defaultTemplate: this.store.query('page', {slug: params.page}),
       });
       break;
     case 'about-us':
       rsvp = RSVP.hash({
         otherPages: this.store.query('about', {per_page: 99, order: 'desc'}),
         testimonials: this.store.query('clienttestimonial', {per_page: 6, order: 'desc'}),
         testimonialsCarouselTitle: this.get('sectionTitle').request('types/clienttestimonials'),
         defaultTemplate: this.store.query('page', {slug: params.page}),
       });
       break;
     case 'contact-us':
       rsvp = RSVP.hash({
         crmLead: get(this, 'store').createRecord('crm-lead', {}),
         defaultTemplate: this.store.query('page', {slug: params.page}),
       });
       break;
     default:
       rsvp = RSVP.hash({
         defaultTemplate: this.store.query('page', {slug: params.page}),
       });
   }

   return rsvp;
  },

  setupController(controller, model){
    controller.setProperties(model);
  },

  actions: {
    refreshModel() {
      this.refresh();
    }
  }
});
