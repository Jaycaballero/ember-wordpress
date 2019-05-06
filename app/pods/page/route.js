import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default Route.extend({

 sectionTitle: service(),
  
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
         categories: this.store.query('category', {}),
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
         testimonials: this.store.query('clienttestimonial', {per_page: 6, order: 'desc'}),
         testimonialsCarouselTitle: this.get('sectionTitle').request('types/clienttestimonials'),
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
   if (model.categories) {
     controller.set('categories', model.categories);
   }
   if (model.defaultTemplate) {
     controller.set('defaultTemplate', model.defaultTemplate);
   }
   if (model.howWeTrain) {
     controller.set('howWeTrain', model.howWeTrain);
   }
   if (model.testimonials) {
     controller.set('testimonials', model.testimonials);
   }
   if (model.testimonialsCarouselTitle) {
     controller.set('testimonialsCarouselTitle', model.testimonialsCarouselTitle);
   }
   if (model.tipsAndTricks) {
     controller.set('tipsAndTricks', model.tipsAndTricks);
   }
   if (model.tipsAndTricksFeatured) {
     controller.set('tipsAndTricksFeatured', model.tipsAndTricksFeatured);
   }
   if (model.tipsAndTricksCategories) {
     controller.set('tipsAndTricksCategories', model.tipsAndTricksCategories);
   }
 }
});
