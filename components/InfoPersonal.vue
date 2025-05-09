<script setup>
import { ref } from 'vue';
import proyectoFP from '@/assets/images/proyectoFP.png';

const flippedStates = ref([false, false]); // una entrada por cada tarjeta

const githubFP = "https://github.com/JoseMartinez98/ProyectoFP";

function toggleFlip(index) {
  flippedStates.value[index] = !flippedStates.value[index];
}

</script>

<template>
  <div class="informacionPersonal">

    <div class="sobreMi">
    <img src="@/assets/images/yo.png" class="imgYo" alt="">
    <div class="texto">
      <h1 class="fade-in">Sobre mí:</h1>
      <p class="slide-in">💻 Tecnología y desarrollo</p>
      <p class="slide-in">👤 1 año de experiencia con proyectos para el ciclo superior y la empresa de prácticas.</p>
      <p class="slide-in">▶️ Programador Web Full Stack Junior. Adaptación, formación y desarrollo.</p>
      <p class="slide-in">🔎 Mi objetivo principal en un trabajo ahora mismo es encontrar una oportunidad, crecer y desarrollarme...</p>
      <p class="slide-in">✅ Conocimiento en Frameworks como: Laravel y Vue.</p>
      <p class="slide-in">✅ Lenguajes: PhP, Java, JavaScript, HTML, CSS, MySQL.</p>
      <p class="slide-in">✅ Uso de test unitarios, componentes, enrutamientos, APIs, diseño UX/UI...</p>
    </div>
    
     </div>
    <div class="logoHerramientas"> 
      <img class="icons" src="@/assets/images/919830.png" alt="">
      <img class="icons" src="@/assets/images/css.png" alt="">
      <img class="icons" src="@/assets/images/HTML5_logo_and_wordmark.svg.png" alt="">
      <img class="icons" src="@/assets/images/Laravel.svg.png" alt="">
      <img class="icons" src="@/assets/images/mysql.png" alt="">
      <img class="icons" src="@/assets/images/Unofficial_JavaScript_logo_2.svg.png" alt="">
      <img class="icons" src="@/assets/images/Vue.js_Logo_2.svg.png" alt="">
      <img class="icons" src="@/assets/images/logoimage.png" alt=""> 
    </div>
    <div class="conjuntoBotones">
      <a href="src/assets/documents/CvJamg2025.pdf" download="CV_JAMG" class="btn-cv">
        <i class="fas fa-file-download" style="margin-right: 8px;"></i>CV</a>
      <a href="https://www.linkedin.com/in/josé-antonio-martínez-gonzález-0a7837215" class="btn-lk" target="_blank">
        <i class="fab fa-linkedin" style="margin-right: 8px;"></i>LinkedIn</a>
      <a href="https://github.com/JoseMartinez98" download="CV_JAMG" class="btn-gb">
        <i class="fab fa-github" style="margin-right: 8px;"></i>GitHub</a>
    </div>
    <h1> PROYECTOS: </h1>
    <div class="projectCard" :class="{ flipped: flippedStates[0] }" @click="toggleFlip(0)">
    <div class="card-inner">
      <div class="card-front">
        <div class="responsive-iframe-container">
          <iframe src="https://www.youtube.com/embed/jkTsFFLCJc0?si=GCLqmlM2QPR6NuKS"
                  title="YouTube video player" allowfullscreen></iframe> 
        </div>   
      </div>
      <div class="card-back">
        <h1>SOBRE EL PROYECTO...</h1>
        <p>FRAMEWORKS: Laravel, Nuxt</p>
        <p>LENGUAJES: Javascript, HTML, CSS, PhP </p>
        <p>BASE DE DATOS: MySQL</p>
        <p>ADICIONAL: En el proyecto se hace el uso de APIs, EndPoints, test unitarios, operaciones con la base de datos mediante CRUD, uso tablas relacionales... </p>
      </div>
    </div>
  </div>
  
  <div class="projectCard" :class="{ flipped: flippedStates[1] }" @click="toggleFlip(1)">
    <div class="card-inner">
      <div class="card-front">
        <div class="responsive-iframe-container">
          <div class="img-container">
            <a :href="githubFP" target="_blank" rel="noopener noreferrer">
              <img class="imgFP" :src="proyectoFP" alt="Proyecto FP" />
              <div class="hover-overlay">
                <span class="hover-icon">↗</span>
              </div>
            </a>
          </div>
        </div>   
      </div>
      <div class="card-back">
        <h1>SOBRE EL PROYECTO...</h1>
        <p>LENGUAJES: Javascript, HTML, CSS, PhP </p>
        <p>BASE DE DATOS: MySQL</p>
        <p>ADICIONAL: El proyecto es el realizado mientras estudiaba y es algo sencillo, aunque se implementa logica como uso del CRUD. </p>
      </div>
    </div>
  </div>

  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

.informacionPersonal {
  margin: 0 auto;
  font-family: 'Inter';
  max-width: 80%;
  align-items: center;
  justify-content: center;
}
.sobreMi{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.imgYo{
  height: 300px;
  width: auto;
  border-radius: 50px;
}
.texto{
  margin-bottom: 60px;
}

h1 {
  color: white;
  text-shadow: 4px 4px 6px rgba(8, 202, 255, 0.656);
  margin-bottom: 40px;
}

.slide-in {
  animation: slideInLeft 0.8s ease forwards;
  color: rgb(0, 221, 255);
  font-weight: bold;
  opacity: 0;
  margin-bottom: 10px;
}
.slide-in:nth-child(2) { animation-delay: 0.1s; }
.slide-in:nth-child(3) { animation-delay: 0.2s; }
.slide-in:nth-child(4) { animation-delay: 0.3s; }
.slide-in:nth-child(5) { animation-delay: 0.4s; }
.slide-in:nth-child(6) { animation-delay: 0.5s; }
.slide-in:nth-child(7) { animation-delay: 0.6s; }
.slide-in:nth-child(8) { animation-delay: 0.7s; }


@keyframes slideInLeft {
  0% { opacity: 0; transform: translateX(-100px); }
  100% { opacity: 1; transform: translateX(0); }
}

.fade-in {
  animation: fadeIn 1s ease forwards;
  opacity: 0;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.logoHerramientas {
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  gap: 16px;
  justify-content: center;
  justify-content: space-between;
}

.icons {
  width: 60px;
  height: 60px;
  animation: entrarYRotar 2s ease-out forwards, girar 5s linear infinite;
  transform-style: preserve-3d;
}

@keyframes entrarYRotar {
  0% {
    transform: translateX(100vw) rotateY(0deg);
    opacity: 0;
  }
  100% {
    transform: translateX(0) rotateY(360deg);
    opacity: 1;
  }
}

.projectCard {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2%;
  max-width: 60%;
  margin: 60px auto 0 auto;
  border: solid 3px rgba(255, 255, 255, 0.664);
  border-radius: 20px;
  background-color: rgba(255, 1, 238, 0.272);
  background-image: url('/images/click.png');
  perspective: 1000px;
  cursor: pointer;
}
.img-container {
  position: relative;
  display: inline-block;
  overflow: hidden;
}
.imgFP{
  width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
}
.hover-overlay {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease;
}

.hover-icon {
  font-size: 2rem;
  color: white;
}

.img-container a:hover .hover-overlay {
  opacity: 1;
}

.card-front{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1%;
}
.card-inner {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 560px;
  height: 450px;
  aspect-ratio: 16 / 9;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.projectCard.flipped .card-inner {
  transform: rotateY(180deg);
}

.card-front, .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 12px;
  padding: 20px;
}
.card-back {
  background-color: #1a1a1a;
  color: #f5f5f5;
    text-shadow:
      0 0 5px rgb(113, 24, 123),
      0 0 10px rgb(113, 24, 123),
      0 0 20px rgb(113, 24, 123),
      0 0 30px rgb(113, 24, 123),
      0 0 40px rgb(113, 24, 123),
      0 0 55px rgb(113, 24, 123),
      0 0 75px rgb(113, 24, 123);
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 2% ;
  overflow-y: auto;
  max-width: 600px;
  max-height: 400px;
}


.flip-arrow {
  color: white;
  font-size: 24px;
  position: absolute;
  bottom: 10px;
  right: 10px;
}
.conjuntoBotones{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
  margin-top: 40px;
}
.btn-cv {
  width: 60px;
  height: 20px;
  margin: 40px;
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
  background-color: #912f8c;
  color: white;
  border: 3px solid #61255d;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  width: 80px;
}

.btn-cv:hover {
  background-color: #61255d;
}
.btn-lk {
  width: 60px;
  height: 20px;
  margin: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #0e76a8 ;
  color: white;
  border: 3px solid #0b3d73;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  width: 80px;
}

.btn-lk:hover {
  background-color: #0b3d73;
}
.btn-gb {
  width: 60px;
  height: 20px;
  margin: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #242424;
  color: white;
  border: 3px solid black;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  width: 80px;
}


.btn-gb:hover {
  background-color: #000000;
}

.responsive-iframe-container {
  position: relative;
  width: 100%;
  max-width: 560px;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 12px;
}

.responsive-iframe-container iframe {
  width: 100%;
  height: 100%;
  border: 0;
}

@media (max-width: 768px) {

  .sobreMi{
    display: block;
    margin: 10px auto 0 auto;
  }
  .imgYo {
    display: block;
    height: 150px;
    width: auto;
    margin: 0 auto 40px auto;
}
  .informacionPersonal {
    margin-left: 5%;
    margin-right: 5%;
  }

  .icons {
    width: 50px;
    height: 50px;
  }

  h1 {
    font-size: 1.5rem;
  }

  .slide-in {
    font-size: 0.95rem;
  }

  .projectCard {
    padding: 2px;
    border-width: 2px;
    min-width: 300px;
  }
  .card-back{
    max-width: 254px;
    margin: 2px;
    max-height: 400px;
  }
  .card-front{
    max-width: 254px;
    margin: 2px;
    max-height: 400px;
  }
  .conjuntoBotones {
    flex-direction: column;
    align-items: center;
    margin: 5px;
  }
  .btn-lk .btn-cv .btn-gb{
    margin: 5px;
  }
}
</style>
