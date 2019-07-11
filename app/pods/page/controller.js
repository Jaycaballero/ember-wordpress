import Controller from '@ember/controller';
import { get, set } from '@ember/object';

export default Controller.extend({
  actions: {
    filter(category) {
      return get(this, 'store').query('tipsandtrick', {tipsandtrickscategories: category, per_page: 99, order: 'desc'})
        .then((data) => {
          set(this, 'tipsAndTricks', data);
        });
    },
    clearFilter() {
      return get(this, 'store').query('tipsandtrick', {per_page: 99, order: 'desc'})
        .then((data) => {
          set(this, 'tipsAndTricks', data);
        });
    },
    createLead(lead) {
      return lead.save()
        .then(() => {
          this.send('refreshModel');
        });
    }
  }
});
