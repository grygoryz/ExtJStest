Ext.define('MyTestApp.view.productCard.ProductCardController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.productCard',

    onSaveButtonClick: function () {
        const viewModel = this.getViewModel()

        const prevData = viewModel.initialConfig.data.theProduct;
        const currData = viewModel.get('theProduct');

        if (prevData.price === currData.price && prevData.count === currData.count) {
            this.hideView()
        } else {
            this.applyChanges(currData);
        }
    },

    applyChanges: function ({id, description, name, price, count}) {
        const store = Ext.getStore('products');
        const Product = store.getModel();

        const editedProduct = new Product({id, description, name, price, count});
        store.insert(store.find('id', id), editedProduct);

        Ext.Msg.alert("Сообщение о наличии сохраненных данных.", "Данные товара были изменены.");
        this.hideView()
    },

    hideView: function () {
        this.getView().hide();
    }
});