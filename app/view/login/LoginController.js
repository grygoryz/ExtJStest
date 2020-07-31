Ext.define('MyTestApp.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function (loginButton) {
        const form = loginButton.up('window').down('form').getForm();
        const {username, password} = form.getValues();

        this.getView().destroy();

        Ext.create({
            xtype: 'app-main'
        })

        // if (username === 'admin' && password === 'padmin') {
        //     this.getView().destroy();
        //
        //     Ext.create({
        //         xtype: 'app-main'
        //     })
        // } else {
        //     form.reset();
        //     Ext.Msg.alert("Ошибка авторизации", "Введен неверный логин или пароль.")
        // }
    },

});