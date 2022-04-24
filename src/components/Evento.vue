<template>
  <div class="ficha">
    <div class="d-lg-flex">
      <div class="card border-0 me-lg-4 mb-lg-0 mb-4">
        <div class="backgroundEffect"></div>
        <div class="pic">
          <img class="" :src="evento.imageUrl" alt="" />
          <div class="date">
            <span class="day">{{ dia }}</span>
            <span class="month">{{ mes }}</span>
            <span class="year">{{ year }}</span>
          </div>
        </div>
        <div class="content">
          <p class="h-1 mt-4">{{ evento.nombre }}</p>
          <p class="text-muted mt-3">{{ evento.descripcion }}</p>
          <div
            class="d-flex align-items-center justify-content-between mt-3 pb-3"
          >
            <button class="btn btn-primary">Asistir</button>
            <div
              class="d-flex align-items-center justify-content-center foot"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//Utilidades
import { ref } from '@vue/reactivity';
import dayjs from 'dayjs';
export default {
  props: ['evento'],
  setup(props) {
    // -------- FECHAS -----------
    const fecha = dayjs(props.evento.fecha); //Recogemos la fecha del evento
    let date = fecha.format('MMMM D, YYYY'); //Formateamos fecha
    //Trabajo con fechas
    const dia = fecha.format('D'); //Sacamos día
    const mes = fecha.format('MMMM'); // Sacamos Mes
    const year = fecha.format('YYYY'); // Sacamos Año
    // ---------- ASISTIR ------------
    const asistir = ref(null);
    asistir.value = true;
    const toggleAsistir = () => {
      asistir.value = !asistir.value;
    };
    return { asistir, toggleAsistir, dia, mes, year };
  },
};
</script>

<style scoped>
.ficha {
  /*min-height: 100vh;*/
  padding: 20px 0;
  display: flex;
  flex-direction: row;
}

p {
  margin: 0px;
}

.card {
  width: 280px;
  height: 520px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background: #fff;
  transition: all 0.5s ease;
  cursor: pointer;
  user-select: none;
  z-index: 10;
  overflow: hidden;
}

.card .backgroundEffect {
  bottom: 0;
  height: 0px;
  width: 100%;
}

.card:hover {
  color: #fff;
  transform: scale(1.025);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 5px 10px;
}

.card:hover .backgroundEffect {
  bottom: 0;
  height: 320px;
  width: 100%;
  position: absolute;
  z-index: -1;
  background: #96bb7c;
  animation: popBackground 0.3s ease-in;
}

@keyframes popBackground {
  0% {
    height: 20px;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
  }

  50% {
    height: 80px;
    border-top-left-radius: 75%;
    border-top-right-radius: 75%;
  }

  75% {
    height: 160px;
    border-top-left-radius: 85%;
    border-top-right-radius: 85%;
  }

  100% {
    height: 320px;
    border-top-left-radius: 100%;
    border-top-right-radius: 100%;
  }
}

.card .pic {
  position: relative;
}

.card .pic img {
  width: 100%;
  height: 280px;
  object-fit: cover;
}

.card .date {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 70px;
  background-color: #96bb7c;
  color: white;
  position: absolute;
  bottom: 0px;
  transition: all ease;
}

.card .date .day {
  font-size: 14px;
  font-weight: 600;
}

.card .date .month,
.card .date .year {
  font-size: 10px;
}

.card .text-muted {
  font-size: 12px;
}

.card:hover .text-muted {
  color: #fff !important;
}

.card .content {
  padding: 0 20px;
}

.card .content .btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  background-color: #96bb7c;
  border-radius: 25px;
  font-size: 12px;
  border: none;
}

.card:hover .content .btn {
  background: #fff;
  color: #96bb7c;
  box-shadow: #0000001a 0px 3px 5px;
}

.card .content .btn .fas {
  font-size: 10px;
  padding-left: 5px;
}

.card .content .foot .admin {
  color: #96bb7c;
  font-size: 12px;
}

.card:hover .content .foot .admin {
  color: #fff;
}

.card .content .foot .icon {
  font-size: 12px;
}
</style>
