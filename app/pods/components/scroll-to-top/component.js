import Component from '@ember/component';

export default Component.extend({
  didRender() {
    window.scrollTo(0,0);
  }
});