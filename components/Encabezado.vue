<template>
    <div class="encabezado">
      <div>
        <h1 class="tituloEncabezado">JOSÉ ANTONIO MARTÍNEZ GONZÁLEZ</h1>
      </div>
      <p class="subtitulo">JUNIOR FULL STACK DEVELOPER</p>
      <div class="info">
        <i class="fas fa-phone">
            <a href="tel:+34691797404">+34 691 79 74 04</a>
        </i>

        <i class="fas fa-envelope">
            <a href="mailto:josesw98@gmail.com">josesw98@gmail.com</a>
        </i>

      </div>
    </div>
  </template>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
  
  .encabezado {
    font-family: 'Monoton';
    height: auto;
    padding: 2rem;
    text-align: center;
    background-image: url('src/assets/images/fondoEncabezado.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%);
    -webkit-mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%);
    -webkit-mask-composite: destination-in;
    mask-composite: intersect;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  
  .tituloEncabezado {
    font-size: clamp(2rem, 6vw, 4rem);
    margin-bottom: 0.5rem;
    color: #f5f5f5;
    text-shadow:
      0 0 5px rgb(113, 24, 123),
      0 0 10px rgb(113, 24, 123),
      0 0 20px rgb(113, 24, 123),
      0 0 30px rgb(113, 24, 123),
      0 0 40px rgb(113, 24, 123),
      0 0 55px rgb(113, 24, 123),
      0 0 75px rgb(113, 24, 123);
  }
  
  .subtitulo {
    font-family: 'Inter';
    font-weight: bold;
    font-size: clamp(1rem, 4vw, 2rem);
    color: #fff;
    letter-spacing: 5px;
    text-shadow:
      0 0 5px rgb(29, 125, 125),
      0 0 10px rgb(29, 125, 125),
      0 0 20px rgb(29, 125, 125),
      0 0 30px rgb(29, 125, 125),
      0 0 40px rgb(29, 125, 125),
      0 0 55px rgb(29, 125, 125),
      0 0 75px rgb(29, 125, 125);
    margin: 0;
  }
  
  .info {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    font-size: clamp(0.9rem, 3vw, 1.2rem);
    font-family: 'Inter';
    color: #f5f5f5;
    text-shadow:
      0 0 5px rgb(29, 125, 125),
      0 0 10px rgb(29, 125, 125),
      0 0 20px rgb(29, 125, 125),
      0 0 30px rgb(29, 125, 125),
      0 0 40px rgb(29, 125, 125),
      0 0 55px rgb(29, 125, 125),
      0 0 75px rgb(29, 125, 125);
  }
  a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

  
  @media (max-width: 480px) {
    .info i {
      display: block;
      text-align: center;
      margin: 0.5rem 0;
    }
  }
  </style>
  