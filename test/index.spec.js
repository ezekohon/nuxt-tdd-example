import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils';
import index from '@/pages/index'
import ItemCard from '@/components/ItemCard'
import TotalCard from '@/components/TotalCard'
import flushPromises from 'flush-promises'
import { fetchData } from '~/services/data'
import Buefy from 'buefy'
import Vuex from 'vuex'
import VueRouter from 'vue-router';
import { items } from '../__mocks__/itemsStore'
import { routes } from '@/.nuxt/routes.json';
// import { createStore } from '../.nuxt/store.js'
// import NuxtLink from '@/.nuxt/components/nuxt-link.client.js';

// create an extended `Vue` constructor
const localVue = createLocalVue();

// install plugins as normal
localVue.use(Buefy);
localVue.use(Vuex)
// const store = new Vuex.Store(items)

const router = new VueRouter({ routes });
localVue.use(VueRouter);

let wrapper = null;

// const mockData = {
//     "items": {
//         "data": [
//             {
//                 title: 'Hamburguesa',
//                 price: 21,
//                 buyed: false
//             }
//         ]
//     }
// }

// jest.mock("axios", () => ({
//     get: () => Promise.resolve({
//         data: [{
//             "items": {
//                 "data": [
//                     {
//                         title: 'Hamburguesa',
//                         price: 21,
//                         buyed: false
//                     }
//                 ]
//             }
//         }]
//     })
// }));

// let store
// let items

// let items = {
//     namespaced: true,
//     state: {
//         items: [
//             {
//                 title: 'Hamburguesa',
//                 price: 21,
//                 buyed: false
//             }
//         ]
//     },
//     getters: {
//         getItems: state => state.items
//     },
//     actions: {
//         fetchItems: jest.fn()
//     }
// }

const store = new Vuex.Store({
    modules: {
        items,
    }
});

// const store = createStore()

beforeEach(() => {
    wrapper = mount(index, {
        stubs: {
            ItemCard: true,
            TotalCard: true,
            NuxtLink: RouterLinkStub
        },
        localVue,
        store,
        router
    });
})

afterEach(() => {
    wrapper.destroy();
})

describe('index', () => {

    // it('calls api succesfully', async () => {
    //     await flushPromises();
    //     expect(wrapper.vm.items.length).toBe(1);
    // })

    it('calls fetchItems action', () => {
        // console.log(store)
        // console.log('LOGGGGGGG', store._actions['items/fetchItems'][0]())
        expect(items.actions.fetchItems).toHaveBeenCalled()
    })

    it('renders ItemCard', async () => {

        expect(wrapper.findComponent(ItemCard).exists()).toBe(true)
    })

    it('renders TotalCard', () => {
        expect(wrapper.findComponent(TotalCard).exists()).toBe(true)
    })

    it('button redirects to buy page', async () => {
        // const spy = jest.spyOn(router, "push");
        // const button = wrapper.find('.button-buy')
        // console.log(button)
        // button.trigger('click')
        // console.log(button.props)
        // router.push('/buyf')
        // expect(spy).toHaveBeenCalledWith("/buy");
        // expect(button.props('to')).toBe('/buy')
        expect(wrapper.find('.button-buy').props().to).toBe('/buy')
    })
})