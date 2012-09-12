Ext.define("sencha-boilerplate.view.Main", {
    extend: 'Ext.Container',
    alias: "widget.maincontainer",
	xtype: "maincontainer",
    layout: 'fit',
    
    requires: [
        'Ext.TitleBar',
        'Ext.Button'
    ],
    
    // Initialize items below
    initialize: function(){
    	this.callParent(arguments);
    	
    	var homeScreen = {
    		xtype: "container",
    		defaults: {
    			styleHtmlContent: true,
    		},
    		layout: {
    			align: 'center',
            	type: "vbox",
    		},
    		
    		// Add item vars to homeScreen below
    		items: [
    			{xtype: "label", html: "Welcome!  App info will go here <hr />"},
    			
    		]
    	};
    	
    	this.add([homeScreen]);
    	
    	
    },
    
    config: {
    }
});
