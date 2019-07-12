import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';

export default Component.extend({
  attributeBindings: ['style'],
  classNames: ['headerCard-title position-relative'],
  style: computed('color', function(){
    if (this.get('color')) {
      return htmlSafe(`background-color: ${this.get('color')}`);
    }
    return htmlSafe('background-color: #829399; border-right: solid 1px #fff;');
  }),
  color: null
});
