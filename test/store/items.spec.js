import itemsStore, { mutationTypes } from '@/store/items'

describe('getters', () => {
    const items = [
        {
            title: 'Hamburguesa',
            price: 21,
            buyed: true
        },
        {
            title: 'Hamburguesa',
            price: 21,
            buyed: true
        }
    ]

    const state = { items }

    it('gets items', () => {
        const actual = itemsStore.getters.getItems(state)
        expect(actual).toEqual(items)
    })

    it('gets total price', () => {
        const actual = itemsStore.getters.getTotalPrice(state)
        expect(actual).toEqual(items?.filter(a => a.buyed).reduce((a, b) => a + b.price, 0))
    })

})

describe('mutations', () => {
    it('SET_ITEMS sets state.items to items', () => {
        const items = [
            {
                title: 'Hamburguesa',
                price: 21,
                buyed: false
            },
            {
                title: 'Hamburguesa',
                price: 21,
                buyed: false
            }
        ]

        const state = {
            items: []
        }

        itemsStore.mutations[mutationTypes.SET_ITEMS](state, items)
        expect(state.items).toBe(items)
    })

    it('TOGGLE_BUYED toggles buyed property in items', () => {
        const index = 0;

        const state = {
            items: [
                {
                    title: 'Hamburguesa',
                    price: 21,
                    buyed: false
                }
            ]
        }

        itemsStore.mutations[mutationTypes.TOGGLE_BUYED](state, index)
        expect(state.items[index].buyed).toBe(true)
    })
})

describe('actions', () => {
    it('setItems calls mutation', async () => {
        const commit = jest.fn()
        await itemsStore.actions.fetchItems({ commit })
        expect(commit).toHaveBeenCalledWith(
            mutationTypes.SET_ITEMS, {})
    })

    it('toggleBuyed calls mutation', async () => {
        const commit = jest.fn()
        const index = 0
        await itemsStore.actions.toggleBuyed({ commit }, { index })
        expect(commit).toHaveBeenCalledWith(
            mutationTypes.TOGGLE_BUYED, { index: 0 })
    })

})