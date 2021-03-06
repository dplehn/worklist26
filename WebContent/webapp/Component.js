sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/demo/wt/controller/HelloDialog",
    "sap/ui/demo/wt/libs/moment",
    "sap/ui/demo/wt/libs/lodash",
    "sap/ui/demo/wt/libs/utils"
], function (UIComponent, JSONModel, HelloDialog,momentjs,lodashjs,utilsjs) {
	"use strict";

	return UIComponent.extend("sap.ui.demo.wt.Component", {

		metadata: {
			manifest: "json"
		},

		init: function () {

		    var day = moment().add(18,'days');
		    var dayEN = day.format("dddd");
		    var myday = day.daysInMonth();

		    console.log(day,day,dayEN,myday);


            var array = [1];
            var other = _.concat(array, 2, [3], [[4]]);

            console.log(other);

            mydebug("hallo");



			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);

			// set data model
			var oData = {
				recipient: {
					name: "World"
				}
			};
			var oData2 = {
					recipient: {
						name: "Plehn"
					}
				};			
			
			var oModel = new JSONModel(oData);
			this.setModel(oModel);

			var oModel2 = new JSONModel(oData2);
			this.setModel(oModel2,"myModel");

			// set dialog
			this.helloDialog = new HelloDialog();

			// create the views based on the url/hash
			this.getRouter().initialize();
		}
	});

});
