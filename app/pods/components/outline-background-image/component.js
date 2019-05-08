import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';

export default Component.extend({
  attributeBindings: ['style'],
  style: computed('imageUrl', function(){
    return htmlSafe(`background: linear-gradient( rgba(0, 95, 139, 0.8), rgba(0, 95, 139, 0.8) ), url(${this.get('imageUrl')});`)
  }),
  imageUrl: null
});
