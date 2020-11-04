import { fetchData } from '~/services/data'

// export const state = () => ({
//   items: []
// })

// export const getters = {
//   getItems: state => state.items
// }

// export const mutations = {
//   SET_ITEMS (state, items) {
//     state.items = items
//   },
//   TOGGLE_BUYED (state, index) {
//     state.items[index].buyed = !state.items[index].buyed
//   }
// }

// export const actions = {
//   async fetchItems ({ commit }) {
//     const items = await fetchData()
//     commit('SET_ITEMS', items)
//   },
//   toggleBuyed ({ commit }, index) {
//     commit('TOGGLE_BUYED', index)
//   }
// }

export const mutationTypes = {
  SET_ITEMS: 'setItems',
  TOGGLE_BUYED: 'toggleBuyed'
}

const itemsStore = {
  namespaced: true,
  state () {
    return {
      items: []
    }
  },
  getters: {
    getItems: state => state.items,
    getTotalPrice: state => state.items.filter(a => a.buyed).reduce((a, b) => a + b.price, 0)
  },
  mutations: {
    [mutationTypes.SET_ITEMS] (state, items) {
      state.items = items
    },
    [mutationTypes.TOGGLE_BUYED] (state, index) {
      state.items[index].buyed = !state.items[index].buyed
    }
  },
  actions: {
    async fetchItems ({ commit }) {
      const items = await fetchData()
      commit(mutationTypes.SET_ITEMS, items)
    },
    toggleBuyed ({ commit }, index) {
      commit(mutationTypes.TOGGLE_BUYED, index)
    }
  }
}

export default itemsStore
