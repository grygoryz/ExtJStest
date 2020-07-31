/**
 * This view is an example list of people.
 */
Ext.define('MyTestApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'MyTestApp.store.Products'
    ],

    title: 'Список товаров',

    store: {
        type: 'products'
    },


    columns: [
        { text: 'ID',  dataIndex: 'id' },
        { text: 'Имя', dataIndex: 'name', flex: 1},
        { text: 'Описание', dataIndex: 'description', flex: 1},
        { text: 'Цена', dataIndex: 'price'},
        { text: 'Кол-во', dataIndex: 'count', renderer: 'onCountCellRender'}
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
