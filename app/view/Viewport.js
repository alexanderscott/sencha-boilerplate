Ext.define('sencha-boilerplate.view.Viewport', {
	extend: 'Ext.Container',
	xtype: 'my-viewport',
	
	requires: [
	],
	
	config: {
	    layout: {
	        type: 'card',
	        animation: {
	            type: 'slide',
	            direction: 'left'
	        }
	    },
	    fullscreen: true,
	    
	    // Add views to items var below
	    items: [{xtype: 'maincontainer'}]
	}
});