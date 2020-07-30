/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyTestApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'MyTestApp.view.main.MainController',
        'MyTestApp.view.main.MainModel',
        'MyTestApp.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',
    plugins: 'viewport',

    ui: 'navigation',

    headerPosition: 'top',

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            text: "Учет товаров"
        },
        items: [{
            xtype: 'button',
            text: 'Выйти',
            //margin: '10',
            handler: 'onClickButton'
        }]
    },

    tabBar: {
       // flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {}
    },

    items: [{
        title: 'Home',
        items: [{
            xtype: 'mainlist'
        }]
    }, {
        title: 'Users',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Groups',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Settings',
        bind: {
            html: '{loremIpsum}'
        }
    }]
});
