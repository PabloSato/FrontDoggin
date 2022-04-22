import { ref } from 'vue';

const validarUser = user => {
  //Expresiones Regulares
  const emailReg =
    /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
  const passReg = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/; //La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. Puede tener otros símbolos.

  const name = user.nombre;
  const pass = user.password;
  const mail = user.email;

  var validacion = true;
  var mensajesValidacion = [];
  if (name && pass && mail) {
    if (name.trim() == '') {
      validacion = false;
      mensajesValidacion.push('Nombre de formato no permitido');
    }
    if (mail.trim() == '' || !emailReg.test(mail)) {
      validacion = false;
      mensajesValidacion.push('Email de formato no permitido');
    }
    if (pass.trim() == '' || !passReg.test(pass)) {
      validacion = false;
      mensajesValidacion.push(
        'La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula'
      );
    }
  } else {
    validacion = false;
    mensajesValidacion.push('Debe de rellenar todos los campos del formulario');
  }

  return { validacion, mensajesValidacion };
};

export default validarUser;
