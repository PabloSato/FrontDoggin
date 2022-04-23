import { createStore } from 'vuex';

export default createStore({
  state: {
    //login
    token: null,
    userId: null,
  },
  getters: {},
  //mutation modifica el state
  mutations: {
    //login
    setToken(state, payload) {
      state.token = payload;
    },
    setIdUsuario(state, payload) {
      state.userId = payload;
    },
  },

  actions: {
    //los COMMIT nos sirven para llamar a las mutaciones
    //login
    async login({ commit }, usuario) {
      try {
        const res = await fetch('http://localhost:3000/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(usuario),
        });
        const resDB = await res.json();
        //almacenamos el token
        commit('setToken', resDB.token);

        //localStorge sirve para almacenar las credenciales y que no sean volatiles
        //almacenamos token y le pasamos el token
        localStorage.setItem('token', resDB.token);
        localStorage.setItem('userId', resDB.userId);
      } catch (error) {
        console.log(error);
      }
    },
    leerToken({ commit }) {
      if (localStorage.getItem('token')) {
        commit('setToken', localStorage.getItem('token'));
      } else {
        commit('setToken', null);
      }
    },
    leerUserId({ commit }) {
      if (localStorage.getItem('userId')) {
        commit('setIdusuario', localStorage.getItem('userId'));
      } else {
        commit('setIdUsuario', null);
      }
    },
    logOut({ commit }) {
      commit('setToke', null);
      commit('setIdUsuario', null);
    },
  },
  modules: {},
});
