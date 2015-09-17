window.cp.CollectionView = Backbone.View.extend({
	events:{
	'click li': 'selectElement'
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
        this.$el.append('<ul>');
    this.collection.each(this.buildList);
this.$el.append('</ul>');
},
buildList: function(model, index, [context]) {
   this.$el.append('<li><a href="#customer/'+model.get('shortname')+'">'+model.get('title')+'</li></a>' );
},
selectElement: function(e){
if($(e.currentTarget)!= this.currentActiveLi){
this.currentActiveLi = $(e.currentTarget);
$(e.currentTarget).addClass('active');
$(e.currentTarget).append('<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>');
}
}
});
