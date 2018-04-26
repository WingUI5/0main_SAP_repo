sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("LinkListLinkList.controller.Main", {

		onInit: function(evt) {
			// set explored app's demo model on this sample
			var oModel = new JSONModel(jQuery.sap.getModulePath("LinkListLinkList", "/model/linksUT40.json"));
			this.getView().setModel(oModel);
			
			var oFurtherLinksModel = new JSONModel(jQuery.sap.getModulePath("LinkListLinkList", "/model/furtherLinks.json"));
			this.getView().setModel(oFurtherLinksModel, "furtherLinks");

		},
		
		onCollapseAllPress : function(evt) {
			var oTree;
			//Which button was pressed?
			var para = evt.getParameters();
			// Frage an Christoph: Wie war das nochmal mit der sauberen Lösung bei der ID?!
			if (para.id === "__xmlview0--collapseAll"){
				oTree = this.getView().byId("Links");
			}else{
				oTree = this.getView().byId("furtherLinks");
			}
			oTree.collapseAll();
		}

	});
});