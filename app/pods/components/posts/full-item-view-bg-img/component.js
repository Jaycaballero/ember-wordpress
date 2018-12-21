import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';

export default Component.extend({
  attributeBindings: ['style'],
  style: computed('imageUrl', function(){
    return htmlSafe(`background-image: url(${this.get('imageUrl')})`)
  }),
  imageUrl: null
});
