sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("sap.ui.demo.wt.controller.App", {

		onOpenDialog: function () {
			this.getOwnerComponent().helloDialog.open(this.getView());
		},
	
		onOpenTestPage: function (evt) {
			
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			/*
			var parameter = {
			        dino: "xxx",
			        revno: "yyy",
			        uruntipi: "zzz",
			        bindingContext: evt.getSource().getBindingContext()
			    };
			*/    
			debugger;
			oRouter.navTo("test",{myparameter: "Test"});
			
		} 
	});

});
