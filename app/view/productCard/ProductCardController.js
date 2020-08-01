Ext.define('MyTestApp.view.productCard.ProductCardController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.productCard',

    onSaveButtonClick: function () {
        const viewModel = this.getViewModel()

        const prevData = viewModel.initialConfig.data.theProduct;
        const currData = viewModel.get('theProduct');

        if (prevData.price !== currData.price || prevData.count !== currData.count) this.applyChanges(currData);
        this.hideView()
    },

    applyChanges: function ({id, price, count}) {
        const store = Ext.getStore('products');
        const record = store.findRecord('id', id);

        record.set('count', count);
        record.set('price', price);

        this.fireViewEvent('updateGrid')
        Ext.Msg.alert("Сообщение о наличии сохраненных данных.", "Данные товара были изменены.");
    },

    hideView: function () {
        this.getView().hide();
    }
});