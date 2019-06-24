import Component from '@ember/component';
import { get, computed } from '@ember/object';
import { map } from '@ember/object/computed';
import { A } from '@ember/array';
import { copy } from '@ember/object/internals';

export default Component.extend({
  classNames: ['availabilityList'],

  _bookings: computed('locations.[]', 'location', function() {
    const location = this.get('location');
    if (location) {
      return copy(location.get('acf.details')).splice(0, 5);
    }

    return this.get('locations').reduce((bookings, location) => {
      bookings.pushObjects(location.get('acf.details'));
      return bookings;
    }, []).splice(0, 5);
  })
});
