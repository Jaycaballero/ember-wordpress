import Controller from '@ember/controller';
import { filter } from '@ember/object/computed'

export default Controller.extend({
  ungroupedCourses: filter('subCategory.courses', function (course) {
    return !course.courseGroups.length;
  }),
  actions: {
    createLead(lead) {
      return lead.save()
        .then(() => {
          this.send('refreshModel');
        });
    }
  }
});
