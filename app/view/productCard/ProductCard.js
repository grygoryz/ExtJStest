Ext.define('MyTestApp.view.productCard.ProductCard', {
    extend: 'Ext.form.Panel',
    xtype: 'widget.productCard',

    controller: 'productCard',

    width: 500,
    minHeight: 250,
    bodyPadding: 10,
    modal: true,
    floating: true,
    centered: true,
    // layout: {
    //  to do
    // },

    bind: 'Карточка товара: {productInfo.name}',

    items: [{
        xtype: 'displayfield',
        fieldLabel: 'ID',
        name: 'id',
        bind: {
            value: '{productInfo.id}'
        }
    }, {
        xtype: 'displayfield',
        fieldLabel: 'Наименование',
        name: 'name',
        bind: {
            value: '{productInfo.description}'
        }
    }, {
        xtype: 'numberfield',
        fieldLabel: 'Цена',
        anchor: '100%',
        bind: {
            value: '{productInfo.price}'
        },
        minValue: 0
    }, {
        xtype: 'numberfield',
        fieldLabel: 'Кол-во',
        anchor: '100%',
        allowDecimals: false,
        bind: {
            value: '{productInfo.count}'
        },
        minValue: 0
    }],

    buttons: [{
        text: 'Сохранить',
        //formBind: true,
        handler: 'onSaveButtonClick'
    }, {
        text: 'Отмена',
        listeners: {
            click: 'closeView'
        }
    }]
});
