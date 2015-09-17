
window.cp.CustomerCollection = Backbone.Collection.extend({
model: window.cp.CustomerModel,
    url: 'http://localhost:8000/customer',

    initialize: function(){
        this.fetch({
            success: this.fetchSuccess,
            error: this.fetchError
        });
    }



});
window.cp.CustomerCollection = new window.cp.CustomerCollection();
