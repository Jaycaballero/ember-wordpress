import Component from '@ember/component';
import { computed, get } from '@ember/object';
import { filter } from '@ember/object/computed';

export default Component.extend({
  locationDates: computed('selectedLocation', 'publicDates', function() {
    let selectedLocation = this.selectedLocation;
    if (this.selectedLocation) {
      return this.publicDates.filter(function(publicDate) {
        return publicDate.location.get('name') == selectedLocation.name;
      });
    }
    return this.publicDates;
  })
});
