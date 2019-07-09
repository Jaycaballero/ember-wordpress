import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { get } from '@ember/object';

export default Route.extend({
  model({sub_category_slug}) {
    return RSVP.hash({
      contactInfos: this.store.query('contactinfo', {per_page: 2, order: 'desc'}),
      ourLocations: this.store.query('ourlocation', {per_page: 99, order: 'asc'}),
      testimonials: this.store.query('clienttestimonial', {per_page: 1, order: 'asc', testimonialcategories: 20}),
      whyChoose: this.store.query('whychoose', {per_page: 4, order: 'asc'}),
      moreInformations: this.store.query('moreinformation', {per_page: 99, order: 'asc'}),
      subCategorySlug: sub_category_slug,
      crmLead: get(this, 'store').createRecord('crm-lead', {}),
    });
  },
  actions: {
    refreshModel() {
      this.refresh();
    }
  }
});
