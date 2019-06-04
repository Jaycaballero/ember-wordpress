import Component from '@ember/component';
import { get } from '@ember/object';
import { A } from '@ember/array';

export default Component.extend({
  classNames: ['availabilityList'],
  courseDates: A([
    'Thu 13 Jun 2019',
    'Tue 16 Jul 2019',
    'Wed 21 Aug 2019',
    'Wed 18 Sep 2019',
    'Mon 21 Oct 2019',
    'Mon 18 Nov 2019',
    'Mon 16 Dec 2019',
  ]),
  actions: {
    book(date) {
      get(this, 'onToggleFormVisibility')(date);
    }
  }
});