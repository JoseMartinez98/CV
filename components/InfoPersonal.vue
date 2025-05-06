<script setup>
import { ref } from 'vue';

const isFlipped = ref(false);

function toggleFlip() {
  isFlipped.value = !isFlipped.value;
}
</script>

<template>
  <div class="informacionPersonal">

    

    <h1 class="fade-in">Sobre mí:</h1>
    <p class="slide-in">💻 Tecnología y desarrollo</p>
    <p class="slide-in">👤 1 año de experiencia con proyectos para el ciclo superior y la empresa de prácticas.</p>
    <p class="slide-in">▶️ Programador Full Stack Junior. Interés en el desarrollo web, tanto backend como frontend. Adaptación, formación y desarrollo.</p>
    <p class="slide-in">🔎 Mi objetivo principal en un trabajo ahora mismo es encontrar una oportunidad, crecer y desarrollarme...</p>
    <p class="slide-in">✅ Conocimiento en Frameworks como: Laravel y Vue.</p>
    <p class="slide-in">✅ Lenguajes: PhP, Java, JavaScript, HTML, CSS, MySQL.</p>
    <p class="slide-in">✅ Uso de test unitarios, componentes, enrutamientos, APIs, diseño UX/UI...</p>

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
      <a href="src/assets/documents/CvJamg2025.pdf" download="CV_JAMG" class="btn-cv">Descargar CV</a>
      <a href="https://www.linkedin.com/in/josé-antonio-martínez-gonzález-0a7837215" class="btn-lk" target="_blank">LinkedIn</a>
      <a href="https://github.com/JoseMartinez98" download="CV_JAMG" class="btn-gb">GitHub</a>
    </div>
    
    <div class="projectCard" :class="{ flipped: isFlipped }" @click="toggleFlip">
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

  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

.informacionPersonal {
  margin-left: 10%;
  margin-right: 10%;
  font-family: 'Inter';
  max-width: 80%;
}

h1 {
  color: white;
  text-shadow: 4px 4px 6px rgba(8, 202, 255, 0.656);
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
  margin-left: 13%;
  max-width: 70%;
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
  margin-left: 17%;
  max-width: 60%;
  margin-top: 60px;
  border: solid 3px rgba(255, 255, 255, 0.664);
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.221);
  background-image: url(src/assets/images/click.png);
  perspective: 1000px;
  cursor: pointer;
}

.card-front{
  display: flex;
  justify-content: center;
  padding: 1%;
}
.card-inner {
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
  align-items: left;
  justify-content: center;
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
  gap: 16px;
  margin-top: 40px;
}
.btn-cv {
  margin: 40px;
  display: flex;
  padding: 10px 20px;
  background-color: #912f8c;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  width: 80px;
}

.btn-cv:hover {
  background-color: #61255d;
}
.btn-lk {
  margin: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #0e76a8 ;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  width: 80px;
}

.btn-lk:hover {
  background-color: #0b3d73;
}
.btn-gb {
  margin: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #242424;
  color: white;
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
    margin: 10px;
  }
}
</style>
