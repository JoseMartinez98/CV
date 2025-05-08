<script setup>
import { onMounted, ref } from 'vue'

let index = 0
let slides
let total

function showSlide(i) {
  index = (i + total) % total
  slides.style.transform = `translateX(${-600 * index}px)`
}

function nextSlide() {
  showSlide(index + 1)
}

function prevSlide() {
  showSlide(index - 1)
}

onMounted(() => {
  slides = document.getElementById('slideContainer')
  total = slides.children.length
  setInterval(nextSlide, 5000)
})
</script>

<template>
    <div class="footer">
        <div class="titulo">
        <h1> FORMACIÓN: </h1>
        </div>
        <div class="slider">
            <div class="slides" id="slideContainer">
                <img src="/images/1.jpg" alt="Imagen 1">
                <img src="/images/2.jpg" alt="Imagen 2">
                <img src="/images/3.jpg" alt="Imagen 3">
                <img src="/images/4.jpg" alt="Imagen 4">
                <img src="/images/5.jpg" alt="Imagen 5">
                <img src="/images/6.jpg" alt="Imagen 6">
                <img src="/images/7.jpg" alt="Imagen 7">
                <img src="/images/8.jpg" alt="Imagen 8">
                <img src="/images/9.jpg" alt="Imagen 9">

            </div>
            <div class="controls">
                <button @click="prevSlide()">⟨</button>
                <button @click="nextSlide()">⟩</button>
            </div>
        </div>
        <div class="footer"></div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
.titulo{
    max-width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 40px;
}
h1 {
  color: white;
  text-shadow: 4px 4px 6px rgba(8, 202, 255, 0.656);
  
}
.footer{
    width: 100%;
    height: auto;
    background-color: rgba(0, 0, 0, 0.612);
    background: linear-gradient(to top, rgba(1, 1, 1, 0.912), transparent);
}
.slider {
      position: relative;
      width: 600px;
      height: 400px;
      margin: auto;
      overflow: hidden;
      z-index: 1;
    }

    .slides {
      display: flex;
      width: 100%;
      height: 100%;
      transition: transform 0.5s ease-in-out;
    }

    .slides img {
      width: 600px;
      height: 400px;
      object-fit: cover;
    }

    .controls {
      position: absolute;
      top: 50%;
      width: 100%;
      display: flex;
      justify-content: space-between;
      transform: translateY(-50%);
    }

    .controls button {
      background-color: rgba(0,0,0,0.5);
      color: white;
      border: none;
      padding: 10px;
      cursor: pointer;
    }
</style>