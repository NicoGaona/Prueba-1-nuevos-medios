var elEncabezado = document.querySelector("header");
var elColor, campeon;

function preload() {
    campeon = loadJSON("https://raw.githubusercontent.com/NicoGaona/json/main/monos.json");
}

function setup() {
    var lasOpciones = [];
    Object.values(campeon).forEach((p) => {
  if(p.name){
     lasOpciones.push(p.img)
   }});
   console.log(lasOpciones);
      createElement("h1", "¿Podrías dibujar a esta leyenda?").parent(elEncabezado).id("title");
      createCanvas(windowWidth, windowHeight).position(0, 0).style("z-index", -1);
      createImg(random(lasOpciones),"holi").addClass("chiqui");
      background("#000000");
  }
