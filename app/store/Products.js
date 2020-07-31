Ext.define('MyTestApp.store.Products', {
    extend: 'Ext.data.Store',
    alias: 'store.products',

    model: 'MyTestApp.model.Product',

    data: [
        {id: 1, name: 'Ноутбук Lenovo', description: 'Ноутбук Lenovo IdeaPad 330-15IKB подойдёт для просмотра HD-видео, интернет-сёрфинга, трёхмерного моделирования и даже игр. Он снабжён мощным процессором Intel Core i3 и дискретной видеокартой.', price: 100, count: 2},
        {id: 2, name: 'Клавиатура Logitech Comfort K280E', description: 'Logitech Comfort K280E – удобная клавиатура с проводным подключением, которую можно использовать дома или в офисе.', price: 50, count: 9},
        {id: 3, name: 'Мышь Logitech M90', description: 'Для случаев, когда вы хотите получить отличное соотношение цены и качества в сочетании с надежным и удобным управлением при работе за компьютером.', price: 25, count: 0},
        {id: 4, name: 'Игровой коврик A4Tech X7-200MP', description: 'A4Tech X7-200MP – игровой коврик, который подойдёт как для оптических, так и для лазерных мышей. Он устойчив к износу, поэтому геймер сможет долго им пользоваться.', price: 150, count: 5},
        {id: 5, name: 'Смартфон Samsung Galaxy A51 64GB', description: 'Смартфон Samsung Galaxy A51 стильно выглядит и предоставляет широкие возможности для общения и развлечений. Его 6,5-дюймовый экран, занимающий практически всю лицевую панель, обеспечивает эффект полного погружения в игры и видеоконтент и позволяет продуктивно работать в многозадачном режиме. Матрица, изготовленная по технологии Super AMOLED, передаёт цвета с безупречной реалистичностью.', price: 122, count: 3},
        {id: 6, name: 'Защитное стекло Samsung InterStep FSC', description: 'Стекло InterStep FSC предназначено для защиты экрана смартфона Samsung Galaxy A51 от повреждений. Аксессуар легко фиксируется на дисплее, а благодаря особому клеевому слою не оставляет следов после удаления.', price: 10, count: 33},
    ]
});
