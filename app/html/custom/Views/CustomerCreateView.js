window.cp.CreateViewClass = Backbone.View.extend({
  events:{
    'click #createCustomer':'sendForm'
  },
  renderTemplate: null,
  initialize:function(){
    this.renderTemplate = _.template($("script.templateCreateCustomer").html());
  },
  render:function(){
    this.$el.html(this.renderTemplate());
  },
  sendForm: function(){
    var model = new window.cp.CustomerModel({
       shortname: $('#shortname').val(),
      title: $('#title').val(),
      production_url: $('#production_url').val(),
        quality_url: $('#quality_url').val(),
        staging_url: $('#staging_url').val()
    });
     model.save({});
 window.cp.CustomerCollection.add(model);
 window.cp.routing.navigate('customer/'+model.get('shortname'),true);
  }
});
