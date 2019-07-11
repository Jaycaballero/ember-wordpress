import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';

export default Component.extend({
  attributeBindings: ['style'],
  style: computed('imageUrl', function(){
    return htmlSafe(`background: linear-gradient( rgba(0, 95, 139, 0.5), rgba(0, 95, 139, 0.5) ),
    url(${this.get('imageUrl')}); background-size: cover; background-position: center center`);
  }),
  imageUrl: null
});
