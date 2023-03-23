import { personajesPrincipales, ordenAlfabetico,ordenadoAlreves, filtrarEspecies, filtrarGenero, calcular, convertir,cortar, traerBuscado } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
import data from './src/data/rickandmorty/rickandmorty.js';

//se trae data completa
const dataTotal= data.results;
//se trae contenedor 
const contenedorGeneral= document.getElementById('root');

//se crea función para ilustrar los resultados
const imprimir= (data) => {
  let template='';
  for(const species of data) {
    template += `
    <div class= 'contenedor'>
      <div class= 'contenedor-data'>
        <img class='imagenPersonaje' src=${species.image}
        <br>
      <p id= 'texto1'>${species.name}</p>
    </div>
    </div>`;
  }
  contenedorGeneral.innerHTML = template;
}

//se trae función que busca los personajes principales y se mandan a pantalla principal
const bloquePrincipales= personajesPrincipales(dataTotal);
imprimir(bloquePrincipales);

//se trae función de orden alfabetico y se le da evento DOM
const traerDocumento= document.getElementById("ordenAlfabetico");
traerDocumento.addEventListener("click", ()=>{
  const cambio= document.getElementById("ordenAlfabetico").value ;
  if(cambio === 'A - Z'){
    const ordenadosAlfabeticamente = ordenAlfabetico(dataTotal);
    imprimir(ordenadosAlfabeticamente)
  }else if(cambio === "Z - A"){
    const voltearImagenes= ordenadoAlreves(dataTotal);
    imprimir(voltearImagenes)
  }else if(cambio === ""){
    imprimir(bloquePrincipales);
  }
});

//se trae funcion de filtrar por especie y se le da evento DOM
const traerSelect= document.getElementById("especies");
traerSelect.addEventListener("click", ()=>{
  const cambio= document.getElementById("especies").value ;
  if(cambio === cambio){
    const resultadoFiltrado = filtrarEspecies(dataTotal, cambio)
    //console.log(resultadoFiltrado)
    imprimir(resultadoFiltrado)
  }else if(cambio === ""){
    imprimir(bloquePrincipales)
  }
});

//se traen funciones para lograr sacar la estadistica
const generoFemenino = filtrarGenero(dataTotal, "Female");
const generoMasculino= filtrarGenero(dataTotal, "Male");
const generoDesconocido= filtrarGenero(dataTotal, "unknown");
const generoSingenero= filtrarGenero(dataTotal, "Genderless");
//console.log(generoFemenino)
const porcentaje1=calcular(generoFemenino, dataTotal);
const porcentaje2=calcular(generoMasculino, dataTotal);
const porcentaje3=calcular(generoDesconocido, dataTotal);
const porcentaje4=calcular(generoSingenero, dataTotal);

const porcentaje1Array= convertir(porcentaje1);
const porcentaje2Array= convertir(porcentaje2);
const porcentaje3Array= convertir(porcentaje3);
const porcentaje4Array= convertir(porcentaje4);

const cortarPorcentaje1= cortar(porcentaje1Array);
const cortarPorcentaje2= cortar(porcentaje2Array);
const cortarPorcentaje3= cortar(porcentaje3Array);
const cortarPorcentaje4= cortar(porcentaje4Array);

//se crea función para mostrar en pantalla mediante literal templates
function mostrar(){
  contenedorGeneral.innerHTML=`
  <p> El género femenino alcanza un ${cortarPorcentaje1} %, del total de personajes</p>
  <p> El género masculino alcanza un ${cortarPorcentaje2} %, del total de personajes</p>
  <p> El género desconocido alcanza un ${cortarPorcentaje3} %, del total de personajes</p>
  <p> Los personajes sin género alcanzan un ${cortarPorcentaje4} %, del total de personajes</p> `
  return mostrar
}
document.getElementById('estadisticas').addEventListener('click', ()=>{
  const ctx = document.getElementById('myChart');
  // eslint-disable-next-line no-undef
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ["Femenino", "Masculino", "Desconocido", "Sin género"],
      datasets: [{
        label:"Cantidad de personajes por Género" , 
        data: [generoFemenino.length,generoMasculino.length,generoDesconocido.length,generoSingenero.length],
        borderWidth: 1,
        backgroundColor :[
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(201, 203, 207)',
        ],
        hoverOffset: 4
      }]}
  }) + mostrar()});


const buscador=document.getElementById('texto');

  
const filtrar= () =>{
  // console.log(buscador.value);
  const texto = buscador.value.toLowerCase();
  const pintar = traerBuscado(dataTotal, texto ) 
  imprimir(pintar)
}
    
buscador.addEventListener('keyup', filtrar)

document.getElementById('inicio').addEventListener('click', imprimir(bloquePrincipales))
//console.log(example, data);
