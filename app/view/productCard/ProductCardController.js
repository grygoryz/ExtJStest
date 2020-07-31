Ext.define('MyTestApp.view.productCard.ProductCardController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.productCard',

    onSaveButtonClick: function () {
        const viewModel = this.getView().getViewModel()
        const {price: oldPrice, count: oldCount} = viewModel.initialConfig.data.productInfo
        const {count, price} = viewModel.config.data.productInfo;

        if (oldPrice === price && oldCount === count) return;

        Ext.Msg.alert("Сообщение о наличии сохраненных данных.", "Данные товара были изменены.")
    }


});