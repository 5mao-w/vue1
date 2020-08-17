import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        num:10,
    },
    getters: {
        get(state){
          return    state.num*2
        }
    },
    mutations: {
        reduce(state,n=1){
            return state.num=state.num-n
        },
        add(state,n=1){
            return state.num=state.num+n
        }
    }
    ,
    actions: {
        async(state,n=10){
            setTimeout(()=>{
               return  state.commit('add',n)
            },100)
        }
    }
    ,
    modules: {}
})
