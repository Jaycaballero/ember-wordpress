import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model({sub_category_slug}) {
    return RSVP.hash({
      contactInfos: this.store.query('contactinfo', {per_page: 2, order: 'desc'}),
      courseGroups: this.store.query('site-tag', {subCategorySlug: sub_category_slug, groups: 'course-group'}),
      crmLead: this.store.createRecord('crm-lead', {}),
      moreInformations: this.store.query('moreinformation', {per_page: 99, order: 'asc'}),
      ourLocations: this.store.query('ourlocation', {per_page: 99, order: 'asc'}),
      locations: this.store.query('bifrost-location', {limit: 3}),
      testimonials: this.store.query('clienttestimonial', {per_page: 1, order: 'asc', testimonialcategories: 20}),
      subCategorySlug: sub_category_slug,
      whyChoose: this.store.query('whychoose', {per_page: 4, order: 'asc'}),
    });
  },
  actions: {
    refreshModel() {
      this.refresh();
    }
  }
});
