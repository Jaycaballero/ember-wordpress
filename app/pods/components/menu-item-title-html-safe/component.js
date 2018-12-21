import Component from '@ember/component';
import { get, computed } from '@ember/object';
import { htmlSafe } from '@ember/string';

export default Component.extend({
  convertedTitle: computed('_menu_Item_Title_Html_Safe', function () {
    let itemTitles = get(this, '_menu_Item_Title_Html_Safe');
    let itemTitle = itemTitles.title;
    return htmlSafe(itemTitle);
  })
});
