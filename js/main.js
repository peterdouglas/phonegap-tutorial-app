var app = {

    findByName: function() {
        var self = this;
        this.store.findByName($('.search-key').val(), function(employees) {
	        $('.employee-list').html(self.employeeLiTp1(employees));
	        
        });
        },

    initialize: function() {
    var self = this;
    	this.homeTp1 = Handlebars.compile($("#home-tp1").html());
    	this.employeeLiTp1 = Handlebars.compile($("#employee-li-tp1").html());
        this.store = new MemoryStore(function() {
	        self.renderHomeView();
        });
      
    },
    
    showAlert: function (message, title) {
	    if (navigator.notification) {
		    navigator.notification.alert(message, null, title, 'OK');
	    } else {
		    alert(title ? (title + ":" + message) : message);
	    }
    },
    
    renderHomeView: function() {
	   $('body').html(this.homeTp1());
	   $('.search-key').on('keyup', $.proxy(this.findByName, this));
    },

};

app.initialize();