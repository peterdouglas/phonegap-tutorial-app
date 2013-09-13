var HomeView = function(store) {

	this.initialize = function() {
		// define a div wrapper for the view. The div wrapper is used to attach events.
		this.el = $('<div/>');
		this.el.on('keyup', '.search-key', this.findByName);
	};
	
	 this.findByName: function() {
        var self = this;
        this.store.findByName($('.search-key').val(), function(employees) {
	        $('.employee-list').html(HomeView.LiTemplate(employees));
	        if(self.iscroll) {
		        console.log('Refresh iScroll');
		        self.iscroll.refresh();
	        }else{
		        console.log('New iScroll');
		        self.iscroll = new iScroll($('.scroll', self.el)[0], {hScrollbar: false, vScrollbar: false});
	        }
        });
        },
        
	  this.renderHomeView: function() {
	   $('body').html(this.homeTp1());
	   $('.search-key').on('keyup', $.proxy(this.findByName, this));
    },
    
	this.initialize();	
}

HomeView.template = Handlebars.compile($("#home-tp1").html());
HomeView.liTemplate = Handlebars.compile($("#employee-li-tp1").html());
