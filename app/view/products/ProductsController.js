Ext.define('MyTestApp.view.products.ProductsController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.products',

    onCountCellRender: function (value, meta) {
        if (value === 0) meta.style = "background-color:red;";
        return value;
    },
});
