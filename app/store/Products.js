Ext.define('MyTestApp.store.Products', {
    extend: 'Ext.data.Store',
    alias: 'store.products',

    model: 'MyTestApp.model.Product',

    data: [
        {id: 1, name: "Notebook Lenovo", description: "", price: 100, count: 2},
        {id: 2, name: "Keyboard OKLICK", description: "", price: 50, count: 9},
        {id: 3, name: "Network adapter", description: "", price: 25, count: 0},
        {id: 4, name: "Macbook", description: "", price: 150, count: 5},
        {id: 5, name: "Iphone X", description: "", price: 122, count: 3},
    ],

});
