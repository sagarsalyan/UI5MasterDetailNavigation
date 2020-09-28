sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("MasterDetails.Navigation.controller.Master", {
		onInit: function () {
			
// 		var that = this;
// 		// Create Model Instance of the oData service
// 		var oModel = new sap.ui.model.odata.v2.ODataModel("https://services.odata.org/v2/Northwind/Northwind.svc");
// 		sap.ui.getCore().setModel(oModel, "myModel");
		
// 		var myModel = sap.ui.getCore().getModel("myModel");
// 		this.myModel.read("/Employees", {
// 				async : false,
// 				success : function(oData, oResponse) {
// 					//busyDialog.close();
// 					var formmodel = new sap.ui.model.json.JSONModel(oData);
// 					that.getView().byId("ID_LIST_MASTER").setModel(formmodel,"MasterModel");
// 				},
// 				error:function(error){
// 				//	busyDialog.close();
// 					var errorMsg = JSON.parse(error.response.body);
// 					errorMsg = errorMsg.error.message.value;
// 					that.errMsg(errorMsg);
// 				}
// 			});
			
// 			var firstItem = this.getView().byId("ID_LIST_MASTER").getItems()[0];
// 			//debugger;
// 			var empIndex=firstItem.getBindingContext("MasterModel").getProperty().EmployeeID;
// //			var router = sap.ui.core.UIComponent.getRouterFor(this);
// //			router.navTo("detail",true);
// 			var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
// 			//var empIndex=evt.getParameters().listItem.getBindingContext("MasterModel").getObject().EmployeeID;
// 			oRouter.navTo("detail",{cpath:empIndex},true);
			
			
			
			
			
			
			
			
			
			var router = sap.ui.core.UIComponent.getRouterFor(this);
			router.attachRoutePatternMatched(this._handleRouteMatched,this);
		},
		
	_handleRouteMatched : function(oevnt)
	{
		if(oevnt.mParameters.name == "master"){
			this.oModel = sap.ui.getCore().getModel("empData");
			var busyDialog = new sap.m.BusyDialog();
			var that = this;
			that.getOwnerComponent().getModel().read("/Employees", {
				async : false,
				success : function(oData, oResponse) {
					busyDialog.close();
					var formmodel = new sap.ui.model.json.JSONModel(oData);
					that.getView().byId("ID_LIST_MASTER").setModel(formmodel,"MasterModel");
				},
				error:function(error){
					busyDialog.close();
					var errorMsg = JSON.parse(error.response.body);
					errorMsg = errorMsg.error.message.value;
					that.errMsg(errorMsg);
				}
			});
			
			var firstItem = this.getView().byId("ID_LIST_MASTER").getItems()[0];

			var empIndex=firstItem.getBindingContext("MasterModel").getProperty().EmployeeID;
//			var router = sap.ui.core.UIComponent.getRouterFor(this);
//			router.navTo("detail",true);
			var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
			//var empIndex=evt.getParameters().listItem.getBindingContext("MasterModel").getObject().EmployeeID;
			oRouter.navTo("detail",{cpath:empIndex},true);
		}
	}
	});
});