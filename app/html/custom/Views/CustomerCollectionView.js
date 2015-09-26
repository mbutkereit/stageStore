window.cp.CollectionView = Backbone.View.extend({
    events:{
        'click li': 'selectElement',
        'click .remove': 'removeList'
    },
    currentActiveLi:null,
    collection: null,
    initialize: function(){
        _.bindAll(this,'buildList');
        this.collection = window.cp.CustomerCollection;
        this.listenTo(this.collection, "add", this.render);
    },
    render: function(){
        this.$el.html('');
        if(this.collection.size() != 0){
        this.$el.append(' ' +
            '<table class="table"> ' +
            '<caption>Optional table caption.</caption> ' +
            '<thead> ' +
            '<tr> ' +
            '<th>#</th> ' +
            '<th>First Name</th> ' +
            '<th>Last Name</th> ' +
            '<th>Username</th> ' +
            '</tr> ' +
            '</thead>' +
            '<tbody>');
        this.collection.each(this.buildList);
        this.$el.append('</tbody>'+
            '</table>');
        this.delegateEvents();
        }else{
            this.$el.html('Nothing to show');
        }
        return this;
    },
    buildList: function(model, index, [context]) {
        this.$el.append('<tr><th scope="row">'+model.get('shortname')+'</th>');
        this.$el.append('<td><a href="#customer/'+model.get('shortname')+'">'+model.get('title')+'</a></td>' );
        this.$el.append('<td><a href="#customer/'+model.get('shortname')+'">'+model.get('title')+'</a></td>' );
        if(model.get('id')){
        this.$el.append('<td><a class="btn btn-danger remove" href="' +
            '#customer/delete/' +
            model.get('id')+
            '">' +
            '<i class="icon-trash icon-white"></i>' +
            'Delete' +
            '</a>' +
            '</td>' );
        }
        this.$el.append('</tr>');
    },
    removeList: function(e){
            this.currentActiveLi = $(e.currentTarget);
    },
    selectElement: function(e){
        if($(e.currentTarget)!= this.currentActiveLi){
            this.currentActiveLi = $(e.currentTarget);
            $(e.currentTarget).addClass('active');
            $(e.currentTarget).append('<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>');
        }
    }
});
