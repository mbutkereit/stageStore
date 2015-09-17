window.cp.CustomerModel = Backbone.Model.extend({
  url: 'http://localhost:8000/customer',
  defaults:{
      shortname:'',
      title: '',
      production_url: '',
        quality_url: '',
        staging_url: ''
  }
});
