import { mount, createLocalVue } from '@vue/test-utils';
import buy from '@/pages/buy'
import Vuex from 'vuex'
// import { items } from '../__mocks__/itemsStore'
// import { createStore } from '../.nuxt/store.js'
// import itemsStore from '../store/items.js';
import { items } from '../__mocks__/itemsStore'


let wrapper = null;

const localVue = createLocalVue();
localVue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        items,
    },
});

// const store = createStore()

beforeEach(() => {
    wrapper = mount(buy, {
        localVue,
        store,
    });
})

afterEach(() => {
    wrapper.destroy();
})

describe('buy', () => {
    it('renders total price', () => {
        expect(wrapper.find(".total-price").text()).toBe("0")
    })
})