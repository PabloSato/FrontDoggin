<template>
  <div v-if="adiestrador">
    <h1>{{ evento.nombre }}</h1>
    <h3>{{ adiestrador.nombre }}</h3>
    <p>{{ evento.descripcion }}</p>
    <img :src="evento.imageUrl" alt="imagen del evento" />
    <div class="date">
      <span class="day">{{ dia }}</span>
      <span class="month">{{ mes }}</span>
      <span class="year">{{ year }}</span>
    </div>
    <button
      v-if="!usuarioRegistrado"
      class="btn btn-primary"
      @click="registrarse"
    >
      Asistir
    </button>
    <button v-if="usuarioRegistrado" class="btn btn-danger" @click="cancelar">
      Cancelar
    </button>
    <p>{{ feedbackAccion }}</p>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import getAdiestrador from '@/composables/Adiestrador/getAdiestrador';
import { ref } from '@vue/reactivity';
export default {
  props: ['evento', 'usuarioReg'],
  setup(props) {
    // -------- FECHAS -----------
    const fecha = dayjs(props.evento.fecha); //Recogemos la fecha del evento
    // const date = fecha.format('MMMM D, YYYY'); //Formateamos fecha
    //Trabajo con fechas
    const dia = fecha.format('D'); //Sacamos día
    const mes = fecha.format('MMMM'); // Sacamos Mes
    const year = fecha.format('YYYY'); // Sacamos Año

    const usuarioRegistrado = ref(null);
    usuarioRegistrado.value = props.usuarioReg;
    const feedbackAccion = ref(null);

    const { adiestrador, error, load } = getAdiestrador(
      props.evento.idAdiestrador
    );
    load();
    const registrarse = async () => {
      const token = localStorage.getItem('token');
      try {
        let data = await fetch(
          'http://localhost:3000/clientes/626d63f2df1240a122095f7b/eventos',
          {
            method: 'put',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ idEvento: props.evento._id }),
          }
        );
        if (!data.ok) throw Error('error al registrarse');
        usuarioRegistrado.value = true;
        feedbackAccion.value = 'Usuario registrado con &eacute;xito';
      } catch (err) {
        error.value = err.message;
        console.log(error.value);
        feedbackAccion.value = err.message;
      }
    };

    const cancelar = async () => {
      const token = localStorage.getItem('token');
      try {
        let data = await fetch(
          `http://localhost:3000/clientes/626d63f2df1240a122095f7b/eventos/${props.evento._id}`,
          {
            method: 'delete',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!data.ok) throw Error('error al cancelar');
        usuarioRegistrado.value = false;
        feedbackAccion.value = 'Asistencia al evento cancelada';
      } catch (err) {
        error.value = err.message;
        console.log(error.value);
        feedbackAccion.value = err.message;
      }
    };
    return {
      adiestrador,
      dia,
      mes,
      year,
      registrarse,
      cancelar,
      usuarioRegistrado,
      feedbackAccion,
    };
  },
};
</script>
<style></style>
