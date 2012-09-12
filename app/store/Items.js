Ext.define("sencha-boilerplate.store.Items", {
	extend: "Ext.data.Store",
	
	requires: [
		'sencha-boilerplate.model.Item',
		'Ext.data.proxy.Ajax'
	]

    config: {
        model: 'sencha-boilerplate.model.Item',
        
        // Change below to true for autoloading of the Store
        //autoLoad: true,
        
        proxy: {
	    	type: 'ajax',
	    	url: 'ref/some-doc.json',
	    	reader: {
	    		type: 'json',
	    		rootProperty: 'some-item'
	    	}
		},
    }
	
});