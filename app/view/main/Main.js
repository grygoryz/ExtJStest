Ext.define('MyTestApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'MyTestApp.view.main.MainController',
        'MyTestApp.view.products.Products'
    ],

    controller: 'main',
    plugins: 'viewport',

    ui: 'navigation',

    padding: '0 0 50',

    headerPosition: 'top',
    header: {
        layout: {
            align: 'stretch',
        },
        title: 'Учет товаров',
        items: [{
            xtype: 'button',
            text: 'Товары',
            margin: '0 15',
            handler: 'onAddTabClick'
        }, {
            xtype: 'button',
            text: 'Выйти',
            handler: 'onLogoutButtonClick',
        }, {
            xtype: 'tbspacer',
            flex: 4
        }]
    },

    listeners: {
        tabchange: 'onTabChange'
    },

    defaults: {
        bodyPadding: 20,
    }
});
