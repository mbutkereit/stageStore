
window.cp.CustomerCollection = Backbone.Collection.extend({
model: window.cp.CustomerModel,
    url: '/customer',

    initialize: function(){
        this.fetch({
            success: this.fetchSuccess,
            error: this.fetchError
        });
    }



});
window.cp.CustomerCollection = new window.cp.CustomerCollection();
