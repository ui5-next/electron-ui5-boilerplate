sap.ui.define([
  './BaseController',
  'sap/ui/model/json/JSONModel',
  'sap/ui/Device',
  'ui5/admin/model/formatter'
], function(BaseController, JSONModel, Device, formatter) {

  return BaseController.extend("ui5.admin.controller.Home", {
    formatter: formatter,

    onInit: function() {
      var oViewModel = new JSONModel({
        isPhone : Device.system.phone
      });
      this.setModel(oViewModel, "view");
      Device.media.attachHandler(function(oDevice) {
        this.getModel("view").setProperty("/isPhone", oDevice.name === "Phone");
      }.bind(this));
    }
  });
});