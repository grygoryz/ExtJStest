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

        const tab = tabPanel.add({
            title: 'Товары',
            items: [{
                xtype: 'products'
            }]
        })

        tabPanel.items.length === 1 && tabPanel.setActiveTab(tab)
    },

    onTabChange: function (tabPanel, newContent) {
        newContent.down('grid').getView().refresh()
    }
});
