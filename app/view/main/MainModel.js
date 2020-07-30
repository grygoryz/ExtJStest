/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('MyTestApp.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'MyTestApp',

        loremIpsum: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },

    formulas: {
        shit: function(get) {
            return get("name") + "123123"
        }
    }

    //TODO - add data, formulas and/or methods to support your view
});
