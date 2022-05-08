<template>
  <div class="contCard">
    <div class="contCardPrim">
      <h2>Adiestradores</h2>
      <p>Lista de adiestradores</p>
      <lista-adiestradores />
    </div>
  </div>
</template>

<script>
//Componentes
import ListaAdiestradores from '../components/Adiestrador/ListaAdiestradores.vue';
export default {
  components: { ListaAdiestradores },
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
.contCard {
  background: #5f4bb6;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
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


@media screen and (min-width: 750px) {
// .subContForm{
//   display: flex;
//   width: 90%;
//   max-width: 1024px;

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

  padding-top: 20px;
  width: 90%;
  max-width: 1024px;
}
}
</style>
