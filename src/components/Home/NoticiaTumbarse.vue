<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <article class="blog-card">
                    <div class="blog-card__background">
                        <div class="card__background--wrapper">
                            <div class="card__background--main" style="background-image: url('https://cdn.pixabay.com/photo/2020/05/10/20/48/dog-5155490_960_720.jpg');">
                                <div class="card__background--layer"></div>
                            </div>
                        </div>
                    </div>
                    <div class="blog-card__head">
                        <span class="date__box">
                            <span class="date__day">18</span>
                            <span class="date__month">MAY</span>
                        </span>
                    </div>
                    <div class="blog-card__info">
                        <h5>Cómo enseñar a nuestro perro a tumbarse en pocos pasos</h5>
                        <p>Para enseñar a nuestro perro a tumbarse, primero debemos haberle enseñado a sentarse, ya que es un paso fundamental para la realización de este ejercicio.</p>
                        <p>Le daremos a nuestro perro la orden de sentarse y cuando se haya sentado, cogeremos un premio con la mano y lo pondremos cerca de su boca pero sin que pueda cogerlo. Sin que se levante, iremos retirando el premio para que el se incline hacia delante, a la vez lo iremos bajando, para que también se incline hacia bajo. Con la otra mano le iremos dando de forma muy muy suave, unos pequeños toques en las patas delanteras, para que las estire hacia delante y se tumbe.</p>
                        <p>Mientras se esta tumbando le daremos la orden de tumbarse, una sola ver: «Túmbate» o «Échate» sera suficiente. Cuando se haya tumbado le daremos el premio y le felicitaremos por haber realizado bien su trabajo. Antes de repetir el ejercicio debemos pedirle que se levante por completo y comenzar desde el principio, darle la orden de sentarse y repetir el proceso.</p>
                        <p>Repetiremos el ejercicio tantas veces y semanas como sea necesario, hasta que se tumbe el solo con la orden correspondiente de «Túmbate». Cuando lo haga de forma correcta, haremos el mismo proceso que hicimos con la orden de sentarse, nos iremos alejando progresivamente sin dejar que se levante hasta que se lo indiquemos.</p>
                        <p>La correcta realización de este ejercicio nos llevara también varias semanas, hay que ser pacientes y constantes. Nunca debemos presionar a nuestro perro o estresarlo, no debemos obligarlo a hacer lo que no quiera hacer. Si un día decide que no quiere aprender, lo mejor es seguir con el entrenamiento otro día.</p>
                    </div>
                </article>
            </div>
        </div>
    </div>

    <!-- <section class="detail-page">
    <div class="container mt-5">
        
    </div>
    </section> -->
</template>
<script>
export default {
    
}
</script>

<style lang="scss" scoped> 
body {
  background: #eee;
}

.date__box {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ccc;
  border: 4px solid;
  font-weight: bold;
  padding: 5px 10px;
}
.date__box .date__day {
  font-size: 22px;
}

.blog-card {
  padding: 30px;
  position: relative;
}
.blog-card .date__box {
  opacity: 0;
  transform: scale(0.5);
  transition: 300ms ease-in-out;
}
.blog-card .blog-card__background,
.blog-card .card__background--layer {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.blog-card .blog-card__background {
  padding: 15px;
  background: white;
}
.blog-card .card__background--wrapper {
  height: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 60%);
  position: relative;
  overflow: hidden;
}
.blog-card .card__background--main {
  height: 100%;
  position: relative;
  transition: 300ms ease-in-out;
  background-repeat: no-repeat;
  background-size: cover;
}
.blog-card .card__background--layer {
  z-index: 0;
  opacity: 0;
  background: rgba(95, 75, 182, 0.5);
  transition: 300ms ease-in-out;
}
.blog-card .blog-card__head {
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.blog-card .blog-card__info {
    z-index: 10;
    background: white;
    opacity: 0.8;
    padding: 20px 15px;
    max-height: 20rem;
    overflow: auto;
}
.blog-card .blog-card__info h5 {
  transition: 300ms ease-in-out;
}
.blog-card:hover .date__box {
  opacity: 1;
  transform: scale(1);
}
.blog-card:hover .card__background--main {
  transform: scale(1.2) rotate(5deg);
}
.blog-card:hover .card__background--layer {
  opacity: 1;
}
.blog-card:hover .blog-card__info h5 {
  color: #5f4bb6;
}

</style>