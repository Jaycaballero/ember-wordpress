import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { get } from '@ember/object';

export default Route.extend({
  model({sub_category_slug}) {
    return RSVP.hash({
      testimonials: this.store.query('clienttestimonial', {per_page: 1, order: 'desc'}),
      subCategories: this.get('store').query('sub-category', { slug: sub_category_slug, include: ['courses'] }),
      crmLead: get(this, 'store').createRecord('crm-lead', {}),
    });
  },
  actions: {
    refreshModel() {
      this.refresh();
    }
  }
});
