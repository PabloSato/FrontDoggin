const validarFormEventos = evento => {
  const nombre = evento.nombre;
  const descrip = evento.descripcion;
  const maxAforo = evento.maxAforo;
  const date = evento.fecha;

  let validacion = true;
  let mensajesValidacion = [];
  if (nombre && descrip && maxAforo) {
    if (nombre.trim() == '') {
      validacion = false;
      mensajesValidacion.push('Es obligatorio darle un nombre al evento');
    }
    if (descrip.trim() == '') {
      validacion = false;
      mensajesValidacion.push(
        'Es obligatorio incluir una breve descripción del evento'
      );
    }
    if (maxAforo == null || maxAforo < 1) {
      validacion = false;
      mensajesValidacion.push('Debe de indicar un aforo máximo');
    }
    if (date == null) {
      validacion = false;
      mensajesValidacion.push(
        'Debe de indicar una fecha correcta para el evento'
      );
    }
  } else {
    validacion = false;
    mensajesValidacion.push(
      'Debe rellenar los campos nombre, descripción y aforo como mínimo'
    );
  }
  return { validacion, mensajesValidacion };
};
export default validarFormEventos;
