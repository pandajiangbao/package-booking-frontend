import Vue from 'vue'
import Vuex from 'vuex'
import { fly } from './main'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    packageOrderList: []
  },
  mutations: {
    getPackageOrderList (state, packageOrderList) {
      state.packageOrderList = packageOrderList
    }
  },
  actions: {
    getPackageOrderList ({ commit }) {
      fly.get('/package-orders').then((response) => {
        commit('getPackageOrderList', response.data)
      })
    },
    createPackageOrder ({ dispatch }, packageOrder) {
      return fly.post('/package-orders', packageOrder).then((response) => {
        dispatch('getPackageOrderList')
      })
        .catch((response) => {
          alert('保存出错')
        })
    },
    updatePackageOrder ({ dispatch }, packageOrder) {
      return fly.put(`/package-orders/${packageOrder.id}`, packageOrder).then((response) => {
        dispatch('getPackageOrderList')
      })
        .catch((response) => {
          alert('取件出错')
        })
    },
    setBookingTime ({ dispatch }, packageOrder) {
      return fly.patch('/package-orders', packageOrder).then((response) => {
        dispatch('getPackageOrderList')
      })
        .catch((response) => {
          alert('预约出错')
        })
    }
  }
})
