window.cp.CustomerModel = Backbone.Model.extend({
  url: '/customer',
  defaults:{
      shortname:'',
      title: '',
      production_url: '',
        quality_url: '',
        staging_url: ''
  }
});
