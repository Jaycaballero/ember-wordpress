import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createLead(lead) {
      return lead.save()
        .then(() => {
          this.send('refreshModel');
        });
    }
  }
});
