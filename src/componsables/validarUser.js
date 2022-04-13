import { ref } from "vue";

const valida = (e) => {
  console.log("hola");
  console.log(this);
  const name = e.target.nombre.value;
  //Expresiones Regulares
  const emailReg =
    /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
  const nameReg = /^[A-ZÄËÏÖÜÁÉÍÓÚÂÊÎÔÛÀÈÌÒÙa-zäëïöÜáéíóúâêîôûàèìòù]+/;
  const passReg = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/; //La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. Puede tener otros símbolos.

  if (nombre.value.trim() == "" || nameReg.test(nombre)) {
    return false;
  }
  if (mail.value.trim() == "" || emailReg.test(mail)) {
    return false;
  }
  if (pass.value.trim() == "") {
    return false;
  }
  if (passReg.test(pass)) {
    errorPass.innerHTML =
      "La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula";
    return false;
  }
};

export default valida;
