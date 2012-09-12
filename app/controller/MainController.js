Ext.define('sencha-boilerplate.controller.MainController', {
	extend : 'Ext.app.Controller',
	
	requires : [
		'Ext.device.Geolocation',
		'Ext.Map',
		'Ext.MessageBox'
		],
		
	config : {
		models: ['Item'],
		stores: ['Items'],
		refs : {
			mainContainer: "maincontainer",
			
		},
		control: {
			mainContainer: {
				// Bubbled commands go here
				showDetailsCmd: "onShowDetailsCmd"
			},
			
			
		}
	},
	
	// Slide animations - useful for navigation
	slideLeftTransition: { type: 'slide', direction: 'left' },
    slideRightTransition: { type: 'slide', direction: 'right' },
    
    
    // Slide handlers
	activateDetails: function () {   
        this.getMainContainer().animateActiveItem(this.getItemDetail(), this.slideLeftTransition);
    },


    // Toolbar button handlers
    onShowDetailsCmd:function(ref){
    	this.queryDetail(ref);
    	this.activateDetails();
    },
    
    // Functions for finding details here
    queryDetail: function(itemRef) {
    	
    },
    
    launch: function () {
        this.callParent(arguments);
        
        // Remove below if Store is set to autoload
        Ext.getStore("Items").load();
    },
    init: function () {
    	this.callParent(arguments);
    }
    
}); 