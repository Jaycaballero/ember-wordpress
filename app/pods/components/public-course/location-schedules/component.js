import Component from '@ember/component';
import { map } from '@ember/object/computed';

export default Component.extend({
  elementId: 'booking-datas',
  classNames: 'py-5',
  tagName: 'section',

  bookings: map('location.acf.details', function(detail) {
    return {
      date: detail.date,
      locationTitle: detail.location.title,
      price: detail.price,
    }
  }),

});
