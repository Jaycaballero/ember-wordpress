import Component from '@ember/component';
import { get, set } from '@ember/object';

export default Component.extend({
  actions: {
    selectLocation(location) {
      set(this, 'selectedLocation', location);
      get(this, 'onSelectLocation')(location);
    }
  }
});
