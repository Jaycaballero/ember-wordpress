import Component from '@ember/component';
import { get, computed } from '@ember/object';
import { map } from '@ember/object/computed';
import { A } from '@ember/array';
import { copy } from '@ember/object/internals';

export default Component.extend({
  classNames: ['availabilityList'],

  classNames: ['availabilityList'],

  allBookings: computed('locations.[]', function() {
    return this.get('locations').reduce((bookings, location) => {
      const bookingList = location.get('acf.details').map((booking) => {
        booking.location = location;
        return booking;
      });
      bookings.pushObjects(bookingList);
      return bookings;
    }, []);
  }),

  bookings: computed('allBookings.[]', 'location', function() {
    const title = this.get('location.title');
    if (title) {
      return copy(this.get('allBookings').filterBy('location.title', this.get('location.title'))).splice(0, 5);
    }
    return copy(this.get('allBookings')).splice(0, 5);
  }),

  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
});
