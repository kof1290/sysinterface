import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  title: '这是个标题',
  itemnum: '12',
  allTime: 0, // 总共用时
  timer: '' // 定时器
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
