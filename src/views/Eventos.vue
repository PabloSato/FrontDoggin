<template>
  <div class="contCard">
    <div class="contCardPrim">
      <h2>Eventos</h2>
      <!-- <p>Lista de eventos</p> -->
      <div class="backdrop" v-if="eventoSeleccionado" @click="ocultarEvento"></div>
      <div class="detalles" v-if="eventoSeleccionado">
        <detalle-evento :evento="eventoSeleccionado" :cliente="cliente" :adiestrador="adiestrador"/>
      </div>
      <div class="lista-eventos">
        <lista-eventos :idOrganizador="idOrganizador" :key="idOrganizador" :cliente="cliente" :adiestrador="adiestrador" @eventoSeleccionado="mostrarEvento"/>
      </div>  
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { watch } from 'vue';
//Componentes
import DetalleEvento from '@/components/Evento/DetalleEvento.vue';
//Composables
import ListaEventos from '@/components/Evento/ListaEventos.vue';
import getCliente from '@/composables/Cliente/getCliente';
import useEmitter from '@/composables/Tools/emitter';
import getAdiestrador from '@/composables/Adiestrador/getAdiestrador';

export default {
  components: { ListaEventos, DetalleEvento },
  props: ['idOrganizador'],
  setup() {
    const emitter = useEmitter();
    const eventoSeleccionado = ref(null);
    const mostrarEvento = evento => {
      eventoSeleccionado.value = evento;
    };
    const ocultarEvento = () => {
      eventoSeleccionado.value = null;
    };

    const rolUsuario = localStorage.getItem('rol');
    const idCliente =
      rolUsuario === 'CLIENTE' ? localStorage.getItem('id') : null;
    const idAdiestrador =
      rolUsuario === 'ADIESTRADOR' ? localStorage.getItem('id') : null;

    const { cliente, loadCliente } = getCliente(idCliente);
    loadCliente();

    const { adiestrador, loadAdiestrador } = getAdiestrador(idAdiestrador);
    loadAdiestrador();

    emitter.on('clienteActualizado', () => {
      loadCliente();
    });
    return {
      mostrarEvento,
      eventoSeleccionado,
      ocultarEvento,
      cliente,
      adiestrador,
    };
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
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


.contCard {
  background: #5f4bb6;
  text-align: center;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-content: center;
  padding-top: 20px;
  width: 100%;
  min-height: 90vh;
}
.contCardPrim{
  background-color: #5f4bb6;
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  place-items: center;
  line-height: 1.5;
  // padding: 30px;
  // box-shadow: 0 20px 30px rgba(0, 0, 0, 0.185);
  
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
  // padding: 10px 10px 10px 10px;
  min-height: 100%;
}

/* .contenedor {
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  width: 100vw;
  min-height: 90vh;
}
.lista-adiestradores {
  padding: 0 auto;
  max-width: 100%;
}
.titulos {
  display: flex;
  flex-direction: column;
  align-items: center;
} */



// anteriores
.contenedor {
  display: flex;
  flex-direction: column;
  // padding-top: 20px;
  width: 100vw;
  min-height: 90vh;
}
.lista-eventos {
  padding: 0 auto;
  width: 100%;
}
.titulos {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.backdrop {
  z-index: 100;
  background: black;
  opacity: .8;
  width: 100vw;
  height: 484vw;
  position: fixed;
  top: -30%;
}

/* css del modal */
.detalles {
  /* background: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
  text-align: center;
  z-index: 150;
  position:fixed;
  height: 90vh;
  width: 100%;
  margin: 0;
  /* border: 2px solid black; */
}

@media screen and (min-width: 750px) {
.subContForm{
  min-height: 85vh;
  }
//     img {
//     width: 660px;
      
//     button {
//       width: 10rem;

//   }
//   }
// }
// .botonesRow{
//   display: flex;
//   flex-direction: row;
// }
// .container-text{
// width:490px; 
// }
.contCard {

  // padding-top: 20px;
  width: 90%;
  max-width: 1024px;

}
//anteriores
.detalles {

  width: 50%;
  left: 25%;
  height: auto;
  // transform: translate(-5%, 25%);
}


}
</style>
