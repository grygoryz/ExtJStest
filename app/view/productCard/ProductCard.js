Ext.define('MyTestApp.view.productCard.ProductCard', {
    extend: 'Ext.form.Panel',
    xtype: 'widget.productCard',

    requires: [
        'MyTestApp.view.productCard.ProductCardController',
        'MyTestApp.view.productCard.ProductCardModel'
    ],

    controller: 'productCard',
    viewModel: {
        type: 'productCard'
    },

    width: 500,
    minHeight: 250,
    bodyPadding: 10,
    modal: true,
    floating: true,
    centered: true,

    bind: 'Карточка товара: {theProduct.name}',

    items: [{
        xtype: 'displayfield',
        fieldLabel: 'ID',
        name: 'id',
        bind: '{theProduct.id}'
    }, {
        xtype: 'displayfield',
        fieldLabel: 'Наименование',
        name: 'name',
        bind: '{theProduct.description}'
    }, {
        xtype: 'numberfield',
        fieldLabel: 'Цена',
        anchor: '100%',
        bind: '{theProduct.price}',
        minValue: 0
    }, {
        xtype: 'numberfield',
        fieldLabel: 'Кол-во',
        anchor: '100%',
        allowDecimals: false,
        bind: '{theProduct.count}',
        minValue: 0
    }],

    buttons: [{
        text: 'Сохранить',
        handler: 'onSaveButtonClick'
    }, {
        text: 'Отмена',
        handler: 'closeView'
    }]
});
