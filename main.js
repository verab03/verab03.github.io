let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #344E41;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #344E41;">BUSCANDO SOLUCIONES PARA MEJORAR.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
