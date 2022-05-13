<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <article class="blog-card">
                    <div class="blog-card__background">
                        <div class="card__background--wrapper">
                            <div class="card__background--main" style="background-image: url('https://cdn.pixabay.com/photo/2020/12/08/06/20/dogs-5813526_960_720.jpg');">
                                <div class="card__background--layer"></div>
                            </div>
                        </div>
                    </div>
                    <div class="blog-card__head">
                        <span class="date__box">
                            <span class="date__day">13</span>
                            <span class="date__month">MAY</span>
                        </span>
                    </div>
                    <div class="blog-card__info">
                        <h5>Cómo enseñar a nuestro perro a sentarse de forma sencilla</h5>
                        <p>Una vez seguidas todas las pautas comentadas anteriormente y situados en un lugar tranquilo donde comenzar la sesión de entrenamiento, vamos a ver como enseñar a nuestro perro a sentarse.</p>
                        <p>No colocaremos delante de nuestro perro, con la mano izquierda lo sujetaremos por el collar suavemente, con la única intención de que no se vaya y permanezca a nuestro lado. Con la mano derecha presionaremos sobre su espalda, a la altura del culo, de forma que el pliegue sus patas traseras y se siente. Mientras realizamos presión con la mano derecha y el se sienta, le diremos con voz firme una sola vez la orden que queramos para ese ejercicio, por ejemplo «Siéntate» o «Sit».</p>
                        <p>Cuando se siente, le soltaremos y felicitaremos, le daremos un premio (galleta o trozo de salchicha) y acariciaremos un poco. Debemos repetir este ejercicio de forma constante hasta que nuestro perro se siente con solo escuchar la orden, cuando digamos «Sit» o «Siéntate» el debe hacerlo solo, sin necesidad de que le presionemos sobre la espalda con la mano derecha.</p>
                        <p>Con el paso de los días, el hará solo el ejercicio, es entonces hora de realizar el siguiente paso: Que se mantengan sentado hasta que te demos la orden de levantarse.</p>
                        <p>Realizaremos el ejercicio de sentado con la orden de «Sit» o «Siéntate» y cuando el perro se haya sentado, nos alejaremos poco a poco de el, sin darle la espalda. Cuando el se levante para ir hacia nosotros, le chistaremos con la orden de «No!» y le indicaremos que siente nuevamente.</p>
                        <p>Debemos repetir este paso hasta que se quede sentado y podamos alejarnos de el un par de metros, sin que el se levante. Lo haremos de forma progresiva, le pediremos que siente y nos alejaremos medio metro, le pediremos que venga con la orden de&nbsp; «Ven» o «Aquí» para se acerque a nosotros y le premiaremos, felicitaremos y acariciaremos. Cuando aprenda a hacer bien esto, repetiremos alejándonos un poco mas, como un metro. Cuando lo haga bien, nos alejaremos un metro y medio y así sucesivamente hasta que aprenda a quedarse sentado aunque nos alejemos cinco o diez metros.</p>
                        <p>La correcta realización de este ejercicio puede llevarnos varias semanas, sobre todo en razas un poco cabezotas cómo los perros Pitbull, hay que ser pacientes y perseverantes. Realizar los ejercicios con calma y si nuestro perro no aprende a hacerlo bien, no es por su culpa, sino porque seguramente no le estemos dando las instrucciones de forma correcta.</p>
                        
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