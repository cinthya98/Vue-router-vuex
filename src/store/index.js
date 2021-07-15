import Vue from 'vue'
import Vuex from 'vuex'
import userStore from './users'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: "Cinthya Gorrostieta",
    count:0
  },
  actions:{
    RESET({commit}, numero){
      commit('CLEAR', numero);
    }
  },
  mutations: {
    INCREMENT(state){
      state.count++;

    },
    DECREMENT(state){
      state.count--;
    },
    CLEAR(state, numero){
      state.count=numero;
    },
    
  },
  getters: {
    title: state => state.title,
    calcular(state){
      return state.count% 2 === 0? 'Par': 'Impar';
}

  },
  modules: {
    users: userStore
  }

})
