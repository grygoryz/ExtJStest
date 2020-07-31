Ext.define('MyTestApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onLogoutButtonClick: function () {
        this.getView().destroy();

        Ext.create({
            xtype: 'login'
        })
    },

    onCountCellRender: function (value, meta) {
        if (value === 0) meta.style = "background-color:red;";

        return value;
    },

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
        //
        }
    }
});
