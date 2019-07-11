import Component from '@ember/component';
import { map } from '@ember/object/computed';
import { A } from '@ember/array';

export default Component.extend({
  elementId: 'booking-datas',
  classNames: 'py-5',
  tagName: 'section',

  bookings: map('location.acf.details', function(detail) {
    return {
      date: get(detail, 'date'),
      locationTitle: get(detail, 'location.title'),
      price: get(detail, 'price')
    }
  }),

});
