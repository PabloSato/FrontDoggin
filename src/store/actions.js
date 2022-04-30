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
      //Almacenamos el Token
      commit('setToken', response.token);
      //localStorage sirve para almacenar las credenciales
      //Almacenamos tanto el token como el ID de usuario
      localStorage.setItem('token', response.token);
      localStorage.setItem('userId', response.userId);
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
//Función LOGOUT
export const logOut = ({ commit }) => {
  commit('setToken', null);
  commit('setIdUsuario', null);
};
