window.cp = {};
window.cp.Router = Backbone.Router.extend({
    routes:{
        'customer/create':'customerCreateAction',
        'customer/:id':'customerShowAction',
        'customer/delete/:id':'customerDeleteAction',
        '':'customerOverviewAction',
        'home':'customerOverviewAction'
    },
    customerOverviewAction: function(){
        var collectionView= new window.cp.CollectionView();
        collectionView.render();
        $('#mainContent').html(collectionView.$el);
    },
    customerCreateAction: function(){

        var createView= new window.cp.CreateViewClass();
        createView.render();
        $('#mainContent').html(createView.$el);
    },
    customerShowAction: function(id){
        var modelElement = window.cp.CustomerCollection.findWhere({ shortname: id })
        if(modelElement){
            var defaultView= new window.cp.DefaultViewClass ({
                model: modelElement
            });
            defaultView.render();
            $('#mainContent').html(defaultView.$el);}
        else {
            this.navigate('/',true)
        }
    },
    customerDeleteAction: function (id) {
        var modelElement = window.cp.CustomerCollection.findWhere({ id: id })
        if(modelElement){
          modelElement.destroy();
            alert("Remove succesfully");
            this.navigate('/',true);
        }
        else {
                alert("Remove fail");
            this.navigate('/',true);
            }

    }
});

window.cp.routing = new window.cp.Router();
