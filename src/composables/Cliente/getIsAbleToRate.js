import { ref } from "vue";
import getEventosCliente from "./getEventosCliente";

const getIsAbleToRate = (idCliente, idAdiestrador) =>{

  const isAbleToRate = ref(null);

  const searchEventos = async () => {
    if (!idCliente || !idAdiestrador) return;
    const { eventosCliente, error, loadEventosCliente } = getEventosCliente(idCliente);
    await loadEventosCliente();

    eventosCliente.value.forEach(evento => {
        if (evento.idAdiestrador === idAdiestrador) {
          isAbleToRate.value = true;
        }
    })
  }
  
  return {isAbleToRate, searchEventos}

}

export default getIsAbleToRate;