import { ref } from 'vue';
//Función LOGIN
export const login = async ({ commit }, usuario) => {
  const error = ref(null);
  try {
    const data = await fetch('http://localhost:3000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(usuario),
    });
    if (!data.ok) {
      throw Error('email/password incorrectos');
    } else {
      const response = await data.json(); //Esperamos la respuesta
      console.log('login');
      console.log(response);
      //Almacenamos el Token
      commit('setToken', response.token);
      commit('setIdUsuario', response.userId);
      if (response.role === 'CLIENTE') {
        commit('setId', response.idCliente);
      } else {
        commit('setId', response.idAdiestrador);
      }
      commit('setRol', response.role);
      //localStorage sirve para almacenar las credenciales
      //Almacenamos tanto el token como el ID de usuario
      localStorage.setItem('token', response.token);
      localStorage.setItem('userId', response.userId);
      localStorage.setItem('id', response.idCliente);
      localStorage.setItem('rol', response.role);
    }
  } catch (err) {
    console.log(err); //En caso de error, lo pintamos
    error.value = err.message;
  }
};
//Función LEER TOKEN
export const leerToken = ({ commit }) => {
  if (localStorage.getItem('token')) {
    commit('setToken', localStorage.getItem('token'));
  } else {
    commit('setToken', null);
  }
};
//Función LEER USERID
export const leerUserId = ({ commit }) => {
  if (localStorage.getItem('userId')) {
    commit('setIdUsuario', localStorage.getItem('userId'));
  } else {
    commit('setIdUsuario', null);
  }
};
//Función LEER ID
export const leerId = ({ commit }) => {
  if (localStorage.getItem('id')) {
    commit('setId', localStorage.getItem('id'));
  } else {
    commit('setId', null);
  }
};
//Función LEER ROL
export const leerRol = ({ commit }) => {
  if (localStorage.getItem('rol')) {
    commit('setRol', localStorage.getItem('rol'));
  } else {
    commit('setRol', null);
  }
};
//Función LOGOUT
export const logOut = ({ commit }) => {
  commit('setToken', null);
  commit('setIdUsuario', null);
  commit('setId', null);
  commit('setRol', null);
};
