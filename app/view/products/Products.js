Ext.define('MyTestApp.view.products.Products', {
    extend: 'Ext.grid.Panel',
    xtype: 'widget.products',

    requires: [
        'MyTestApp.store.Products'
    ],

    title: 'Список товаров',

    store: {
        type: 'products'
    },
    controller: 'products',

    tbar: {
        items: [{
            xtype: 'form',

            defaults: {
                xtype: 'textfield',
                emptyText: 'Введите фильтр',
                listeners: {
                    specialKey: 'onKeyPress'
                }
            },

            items: [{
                name: 'id',
                fieldLabel: 'ID',
                margin: '0 0 10',
            }, {
                name: 'name',
                fieldLabel: 'Описание'
            }]
        }]
    },

    columns: [
        {text: 'ID', dataIndex: 'id'},
        {text: 'Имя', dataIndex: 'name', flex: 1},
        {text: 'Описание', dataIndex: 'description', flex: 1},
        {text: 'Цена', dataIndex: 'price'},
        {text: 'Кол-во', dataIndex: 'count', renderer: 'onCountCellRender'}
    ],

    listeners: {
        //
    }
});
