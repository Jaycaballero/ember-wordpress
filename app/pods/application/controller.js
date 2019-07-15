import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import moment from 'moment';

export default Controller.extend({
  cookies: service(),

  agreedToPolicy: computed(function() {
    let cookieService = this.get('cookies');
    return cookieService.exists('agreed_to_policy');
  }),
  showCookiePolicy: computed('agreedToPolicy', 'agreed', function() {
    if (this.get('agreed')) {
      return true;
    }
    return this.get('agreedToPolicy');
  }),
  actions: {
    setAgreedCookie() {
      let cookieService = this.get('cookies');
      let expiry = moment().add(5, 'y');

      cookieService.write('agreed_to_policy', 1, {expires: expiry.toDate()});

      this.set('agreed', true);
    }
  }
});
