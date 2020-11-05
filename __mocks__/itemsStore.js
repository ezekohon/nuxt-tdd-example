export const items = {
    namespaced: true,
    state: {
        items: [
            {
                title: 'Hamburguesa',
                price: 21,
                buyed: true
            },
            {
                title: 'Empanada',
                price: 42,
                buyed: true
            }
        ]
    },
    getters: {
        getItems: state => state.items,
        getTotalPrice: state => state.items.filter(a => a.buyed).reduce((a, b) => a + b.price, 0)
    },
    actions: {
        fetchItems: jest.fn()
    }
}