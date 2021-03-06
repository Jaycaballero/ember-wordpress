import Component from '@ember/component';
import { get, set } from '@ember/object';
import { map } from '@ember/object/computed';
import { htmlSafe } from '@ember/string';
import moment from 'moment';

export default Component.extend({


  actions: {
    chooseCategory(cat) {
      this.set('selectedCategory', cat);
      get(this, 'filter')(cat.id);
    },
    clear() {
      set(this, 'isLoading', true);
      get(this, 'clearFilter')()
        .then(() => {
          set(this, 'selectedCategory', "");
        })
        .finally(() => {
          set(this, 'isLoading', false);
        });
    }
  },

  classNames: ['sub-page subpage-inner-content'],

  featuredPostContent: map('_tips_And_Tricks_Featured_Post', function(featuredItem){
    return{
      author: get(featuredItem, 'acf.author.display_name'),
      date: moment(get(featuredItem, 'date')),
      excerpt: htmlSafe(get(featuredItem, 'excerpt')),
      image: get(featuredItem, 'better_featured_image.source_url'),
      slug: get(featuredItem, 'slug'),
      title: htmlSafe(get(featuredItem, 'title')),
    }
  }),

  content: map('_tips_And_Tricks', function(contentItems){
    return{
      author: get(contentItems, 'acf.author.display_name'),
      date: moment(get(contentItems, 'date')),
      excerpt: htmlSafe(get(contentItems, 'excerpt')),
      image: get(contentItems, 'better_featured_image.source_url'),
      slug: get(contentItems, 'slug'),
      title: htmlSafe(get(contentItems, 'title')),
    }
  })

});
