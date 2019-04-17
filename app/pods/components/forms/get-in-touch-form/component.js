import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  options: computed(function() {
    return ['How did you here about us?', 'Option 1', 'Option 2'];
  }),

  selected: 'How did you here about us?',

  actions: {
    chooseOption(sel) {
      this.set('selected', sel);
    }
  },

});
