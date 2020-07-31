Ext.define('MyTestApp.view.products.ProductsController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.products',

    onCountCellRender: function (value, meta) {
        if (value === 0) meta.style = "background-color:red;";
        return value;
    },

    onKeyPress: function (field, e) {
        if (e.getKey() === e.ENTER) {
            const store = field.up('grid').getStore();
            const values = field.up('form').getValues()

            store.clearFilter();
            this.applyFilters(values, store);
        }
    },

    applyFilters: function ({id, name}, store) {
        const filters = [];

        id && filters.push({
            property: 'id',
            value: id,
            exactMatch: true
        })

        name && filters.push({
            property: 'name',
            value: name,
            anyMatch: true
        })

        filters.length && store.addFilter(filters);
    }
});
