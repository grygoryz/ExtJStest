Ext.define('MyTestApp.model.Product', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'id', type: 'int'},
        {name: 'name', type: 'string'},
        {name: 'description', type: 'string'},
        {name: 'price', type: 'float'},
        {name: 'count', type: 'int'}
    ]
});