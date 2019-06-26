import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['bookingForm'],

  locationDetail: computed('lead.{bookingDateVenue,bookingLocation}', function() {
    return `${this.lead.get('bookingDateVenue')} (${this.lead.get('bookingLocation')})`;
  })
});
