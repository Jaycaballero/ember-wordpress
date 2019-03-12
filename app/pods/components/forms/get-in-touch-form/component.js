import Component from '@ember/component';

export default Component.extend({

  options: ['How did you here about us?', 'Option 1', 'Option 2'],
  selected: 'How did you here about us?',

  actions: {
    chooseOption(sel) {
      this.set('selected', sel);
    }
  },

});
