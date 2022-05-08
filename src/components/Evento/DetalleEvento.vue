<template>
  <div  class="contModal" v-if="adiestradorEvento">
    <div class="subContModal">
      <h2>{{ evento.nombre }}</h2>
      <h3>{{ adiestradorEvento.nombre }}</h3>
      <img :src="evento.imageUrl" alt="imagen del evento" />
      <p>{{ evento.descripcion }}</p>
      <h9>{{ dia }} {{ mes }} {{ year }}</h9>
      <p class="alertaForm">{{ feedbackAccion }}</p>
      <button v-if="cliente && !registrado" @click="registrarse">Asistir</button>
      <button class="alter" v-if="cliente && registrado" @click="cancelar"> Cancelar </button>
      <button class="alter" v-if="adiestrador && owner" @click="eliminar"> Cancelar </button>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import getAdiestrador from '@/composables/Adiestrador/getAdiestrador';
import registrarCliente from '@/composables/Cliente/registrarCliente';
import cancelarAsistencia from '@/composables/Cliente/cancelarAsistencia';
import eliminarEvento from '@/composables/Evento/deleteEvento';
import { ref } from '@vue/runtime-core';
import useEmitter from '@/composables/Tools/emitter';
export default {
  props: ['evento', 'cliente', 'adiestrador'],
  setup(props) {
    const emitter = useEmitter();
    // -------- FECHAS -----------
    const fecha = dayjs(props.evento.fecha); //Recogemos la fecha del evento
    // const date = fecha.format('MMMM D, YYYY'); //Formateamos fecha
    //Trabajo con fechas
    const dia = fecha.format('D'); //Sacamos día
    const mes = fecha.format('MMMM'); // Sacamos Mes
    const year = fecha.format('YYYY'); // Sacamos Añ

    const detallesAdiestrador = getAdiestrador(props.evento.idAdiestrador);
    detallesAdiestrador.loadAdiestrador();
    const adiestradorEvento = ref(detallesAdiestrador.adiestrador);

    const feedbackAccion = ref(null);

    // ------- ASISTENCIA -------
    const registrado = ref(null);
    let idCliente = null;
    if (props.cliente) {
      registrado.value = !!props.cliente.eventos.find(
        e => props.evento._id === e._id
      );
      idCliente = props.cliente._id;
    }

    const { registrarse } = registrarCliente(
      idCliente,
      props.evento._id,
      feedbackAccion
    );

    const { cancelar } = cancelarAsistencia(
      idCliente,
      props.evento._id,
      feedbackAccion
    );

    // ------- GESTION -------
    const owner = ref(null);
    let idAdiestrador = null;
    if (props.adiestrador) {
      owner.value = !!props.adiestrador.eventos.find(
        e => props.evento._id === e._id
      );
      idAdiestrador = props.adiestrador._id;
    }

    const { eliminar } = eliminarEvento(
      idAdiestrador,
      props.evento._id,
      feedbackAccion
    );

    // eventlisteners
    emitter.on('clienteActualizado', idEvento => {
      if (idEvento === props.evento._id) {
        registrado.value = !registrado.value;
      }
    });

    return {
      adiestradorEvento,
      dia,
      mes,
      year,
      registrarse,
      cancelar,
      registrado,
      feedbackAccion,
      eliminar,
      owner,
    };
  },
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

h2{
  font-size: 2.3rem;
  color: #dfe6ee;
  font-weight: 500;
  margin-bottom: 15px;
}
p{
  font-size: 1rem;
  color: #dfe6ee;
  font-weight: 100;
  margin-bottom: 5px;

}

.alertaForm{
  font-size: 1rem;
  color: #FF5733;
  font-weight: 500;
  margin-bottom: 5px;
}

}.contModal{
  width: 100%;
  display: flex;
  justify-content: center;

}
.subContModal{
  background-color: #5f4bb6;
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  place-items: center;
  line-height: 1.5;
  padding: 30px;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.185);
  
  img {
    width: 100%;
    max-height: 200px;
    object-fit: cover;
    object-position: center;
    border-radius: 10px;
  }

  input,
  button,
  textarea {
    width: 100%;
    border: none;
    padding: 14px;
    border-radius: 3px;
  }

  input,
  textarea {
    border: 2px solid #DADDEC;
    margin: 5px 0 10px;
    font-size: 1rem;
    color: #656880;
  }

  button {
    background:#9ab7d7;
    display: block;
    color: #5f4bb6;
    font-size: 1rem;
    margin: 5px 5px 10px;
  }

  button:hover {
    box-shadow: 0 5px 20px #89caff94;
    transition: box-shadow 0.3s ease-in-out;

  }
}
.botonesRow{
  display: flex;
  flex-direction: column;
}
.alter {
  background: #170f11 !important;
} 
.alter:hover {
    box-shadow: 0 5px 20px #170f11 !important;
    transition: box-shadow 0.3s ease-in-out !important;
  }

.container-text{
  text-align: center;
  padding: 10px 10px 10px 10px;
  min-height: 100%;
}


@media screen and (min-width: 750px) {
.subContModal{
  display: flex;
  width: 90%;
  max-width: 1024px;

    img {
    // width: 660px;
      
    button {
      width: 10rem;

  }
  }
}
.botonesRow{
  display: flex;
  flex-direction: row;
}
.container-text{
width:490px; 
}

}
</style>
