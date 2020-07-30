Ext.define('MyTestApp.Application', {
    extend: 'Ext.app.Application',

    name: 'MyTestApp',

    requires: [
        'MyTestApp.view.login.Login'
    ],

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    stores: [
        // add global / shared stores here
    ],

    launch: function () {
        Ext.create({
            xtype: 'login'
        })
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
