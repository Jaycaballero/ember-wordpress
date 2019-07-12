import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';

export default Component.extend({
  attributeBindings: ['style'],
  classNames: ['headerCard-title position-relative'],
  style: computed('color', function(){
    return htmlSafe(`background-color: ${this.get('color')}`);
  }),
  color: null
});
