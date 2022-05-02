const validarFormMail = mail => {
  const asunto = mail.asunto;
  const mensaje = mail.mensaje;

  let validacion = true;
  let mensajesValidacion = [];
  if (asunto && mensaje) {
    if (asunto.trim() == '') {
      validacion = false;
      mensajesValidacion.push('Es Obligatorio incluir un Asunto');
    }
    if (mensaje.trim() == '') {
      validacion = false;
      mensajesValidacion.push('Es Obligatorio incluir un Mensaje');
    }
  } else {
    validacion = false;
    mensajesValidacion.push('Debe de incluir Asunto y Mensaje');
  }

  return { validacion, mensajesValidacion };
};

export default validarFormMail;
