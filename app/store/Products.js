Ext.define('MyTestApp.store.Products', {
    extend: 'Ext.data.Store',
    alias: 'store.products',
    storeId: 'products',

    model: 'MyTestApp.model.Product',

    data: [
        {id: 1, name: 'Notebook Lenovo', description: 'Ноутбук Lenovo IdeaPad 330-15IKB', price: 100, count: 2},
        {id: 2, name: 'Logitech Keyboard', description: 'Клавиатура Logitech Comfort K280E', price: 50, count: 9},
        {id: 3, name: 'Logitech Mouse', description: 'Мышь Logitech M90', price: 25, count: 0},
        {id: 4, name: 'Gaming mouse pad', description: 'Коврик для мыши A4Tech X7-200MP', price: 150, count: 5},
        {id: 5, name: 'Samsung smartphone', description: 'Смартфон Samsung Galaxy A51 64GB', price: 122, count: 3},
        {id: 6, name: 'Protective glass', description: 'Защитное стекло Samsung InterStep FSC', price: 10, count: 33},
    ]
});
