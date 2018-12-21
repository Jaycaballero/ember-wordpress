import Component from '@ember/component';
import { get, computed } from '@ember/object';
import { htmlSafe } from '@ember/string'

export default Component.extend({

  textContent: computed('_default_Template', function(){
    let texts = get(this, '_default_Template');
    let text = texts.firstObject.content;
    return htmlSafe(text);
  })

});
