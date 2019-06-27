import Component from '@ember/component';
import { computed, get, set } from '@ember/object';
import { A } from '@ember/array';
import { copy } from 'ember-copy';
import moment from 'moment';

export default Component.extend({
  classNames: ['availabilityList'],

  allBookings: computed('locations.[]', function() {
    let reduced = this.get('locations').reduce((bookings, location) => {
      const bookingList = location.get('acf.details').map((booking) => {
        booking.location = location;
        return booking;
      });
      bookings.pushObjects(bookingList);
      return bookings;
    }, []);
    return reduced.sort(function(booking1, booking2) {
      const date1 = moment(booking1.date, 'DD MMM YYYY');
      const date2 = moment(booking2.date, 'DD MMM YYYY');
      if (date1.isAfter(date2)) {
        return 1;
      } else if (date1.isBefore(date2)) {
        return -1;
      }

      return 0;
    });
  }),

  bookings: computed('allBookings.[]', 'location', 'mapLocation', function() {
    const title = (this.get('mapLocation')) ? this.get('mapLocation.title') : this.get('location.title');
    if (title) {
      return copy(this.get('allBookings').filterBy('location.title', title)).splice(0, 5);
    }
    return copy(this.get('allBookings')).splice(0, 5);
  }),

  months: A([
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
  ]),

  location: computed('mapLocation', function() {
    if (this.get('mapLocation')) {
      return this.get('mapLocation');
    }
  }),

  actions: {
    setLocation(location) {
      set(this, 'mapLocation', location);
      get(this, 'onSetLocation')(location);
    }
  }
});
