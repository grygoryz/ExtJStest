Ext.define('MyTestApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    requires: [
        'MyTestApp.view.products.Products'
    ],

    onLogoutButtonClick: function () {
        this.getView().destroy();

        Ext.create({
            xtype: 'login'
        })
    },

    onAddTabClick: function (button) {
        const tabPanel = button.up('tabpanel');
        tabPanel.add({
            title: 'Товары',
            items: [{
                xtype: 'products'
            }]
        })
    }
});
