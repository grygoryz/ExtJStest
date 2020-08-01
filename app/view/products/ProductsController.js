Ext.define('MyTestApp.view.products.ProductsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.products',

    requires: [
        'MyTestApp.view.productCard.ProductCard'
    ],

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

    onNameCellClick: function (...args) {
        const record = args[5];

        const card = Ext.create('MyTestApp.view.productCard.ProductCard', {
            viewModel: {
                data: {
                    theProduct: record.data
                }
            }
        });

        card.show();
    },

    applyFilters: function ({id, description}, store) {
        const filters = [];

        id && filters.push({
            property: 'id',
            value: id,
            exactMatch: true
        })

        description && filters.push({
            property: 'description',
            value: description,
            anyMatch: true
        })

        filters.length && store.addFilter(filters);
    }
});
