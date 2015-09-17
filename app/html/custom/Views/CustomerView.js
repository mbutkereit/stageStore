window.cp.DefaultViewClass =  Backbone.View.extend({
  initialize:function(){
  },
  render:function(){
    var template = _.template($("script.templateDefaultCustomer").html());
    this.$el.html(template(this.model.toJSON() ) );
    new QRCode(this.$("#qrcode-quality")[ 0 ], this.model.get('quality_url'));
    new QRCode(this.$("#qrcode-staging")[ 0 ], this.model.get('staging_url'));
    new QRCode(this.$("#qrcode-production")[ 0 ], this.model.get('production_url'));
  },
});
