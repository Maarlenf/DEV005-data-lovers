import {
  personajesPrincipales,
  ordenAlfabetico,
  ordenadoAlreves,
  filtrarEspecies,
  traerBuscado,
  filtrarGenero,
  calcular,
  convertir,
  cortar
} from "../src/data.js";

import { mockDataEqual, mockDataOrdened } from "./mockData.js";

const data = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    gender: "Male",
  },
  {
    id: 2,
    name: "Morty Smith",
    status: "Alive",
    species: "Human",
    gender: "Male",
  },
  {
    id: 3,
    name: "Summer Smith",
    status: "Alive",
    species: "Human",
    gender: "Female",
  },
  {
    id: 4,
    name: "Beth Smith",
    status: "Alive",
    species: "Human",
    gender: "Female",
  },
  {
    id: 5,
    name: "Jerry Smith",
    status: "Alive",
    species: "Human",
    gender: "Male",
  },
  {
    id: 6,
    name: "Abadango Cluster Princess",
    status: "Alive",
    species: "Alien",
    gender: "Female",
  },
  {
    id: 7,
    name: "Abradolf Lincler",
    status: "unknown",
    species: "Human",
    gender: "Male",
  },
  {
    id: 8,
    name: "Adjudicator Rick",
    status: "Dead",
    species: "Human",
    gender: "Male",
  },
  {
    id: 9,
    name: "Agency Director",
    status: "Dead",
    species: "Human",
    gender: "Male",
  },
];

describe("personajesPrincipales", () => {
  it("debería contener los id completos de los Personajes principales a raíz del name", () => {
    const resultados = [
      {
        id: 1,
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
        gender: "Male",
      },
      {
        id: 2,
        name: "Morty Smith",
        status: "Alive",
        species: "Human",
        gender: "Male",
      },
      {
        id: 4,
        name: "Beth Smith",
        status: "Alive",
        species: "Human",
        gender: "Female",
      },
      {
        id: 3,
        name: "Summer Smith",
        status: "Alive",
        species: "Human",
        gender: "Female",
      },
      {
        id: 5,
        name: "Jerry Smith",
        status: "Alive",
        species: "Human",
        gender: "Male",
      },
    ];
    expect(personajesPrincipales(data)).toEqual(resultados);
  });
});


describe("ordenAlfabetico", () => {
  it("rebería contener los id completos ordenados alfabeticamente desde la A", () => {
    const resultados = [
      {
        id: 6,
        name: "Abadango Cluster Princess",
        status: "Alive",
        species: "Alien",
        gender: "Female",
      },
      {
        id: 7,
        name: "Abradolf Lincler",
        status: "unknown",
        species: "Human",
        gender: "Male",
      },
      {
        id: 8,
        name: "Adjudicator Rick",
        status: "Dead",
        species: "Human",
        gender: "Male",
      },
      {
        id: 9,
        name: "Agency Director",
        status: "Dead",
        species: "Human",
        gender: "Male",
      },
      {
        id: 4,
        name: "Beth Smith",
        status: "Alive",
        species: "Human",
        gender: "Female",
      },
      {
        id: 5,
        name: "Jerry Smith",
        status: "Alive",
        species: "Human",
        gender: "Male",
      },
      {
        id: 2,
        name: "Morty Smith",
        status: "Alive",
        species: "Human",
        gender: "Male",
      },
      {
        id: 1,
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
        gender: "Male",
      },
      {
        id: 3,
        name: "Summer Smith",
        status: "Alive",
        species: "Human",
        gender: "Female",
      },
    ];
    expect(ordenAlfabetico(data)).toEqual(resultados);
  });

  it('Data ordened equal', ()=>{
    expect(ordenAlfabetico(mockDataEqual)).toEqual(mockDataOrdened)
  })
});

describe("ordenadoAlreves", () => {
  it("debería contener los id completos ordenados alfabeticamente desde la Z", () => {
    const resultados = [
      {
        id: 3,
        name: "Summer Smith",
        status: "Alive",
        species: "Human",
        gender: "Female",
      },
      {
        id: 1,
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
        gender: "Male",
      },
      {
        id: 2,
        name: "Morty Smith",
        status: "Alive",
        species: "Human",
        gender: "Male",
      },
      {
        id: 5,
        name: "Jerry Smith",
        status: "Alive",
        species: "Human",
        gender: "Male",
      },
      {
        id: 4,
        name: "Beth Smith",
        status: "Alive",
        species: "Human",
        gender: "Female",
      },
      {
        id: 9,
        name: "Agency Director",
        status: "Dead",
        species: "Human",
        gender: "Male",
      },
      {
        id: 8,
        name: "Adjudicator Rick",
        status: "Dead",
        species: "Human",
        gender: "Male",
      },
      {
        id: 7,
        name: "Abradolf Lincler",
        status: "unknown",
        species: "Human",
        gender: "Male",
      },
      {
        id: 6,
        name: "Abadango Cluster Princess",
        status: "Alive",
        species: "Alien",
        gender: "Female",
      },
    ];
    expect(ordenadoAlreves(data)).toEqual(resultados);
  });
});

describe("filtrarEspecies", () => {
  it("debería traer la especie según busqueda de cada personaje con su objeto completo", () => {
    const resultados = [
      {
        id: 3,
        name: "Summer Smith",
        status: "Alive",
        species: "Human",
        gender: "Female",
      },
      {
        id: 4,
        name: "Beth Smith",
        status: "Alive",
        species: "Human",
        gender: "Female",
      },
      {
        id: 5,
        name: "Jerry Smith",
        status: "Alive",
        species: "Human",
        gender: "Male",
      },
      {
        id: 6,
        name: "Abadango Cluster Princess",
        status: "Alive",
        species: "Alien",
        gender: "Female",
      },
    ];
    expect(filtrarEspecies(resultados, "Human")).toEqual([
      {
        id: 3,
        name: "Summer Smith",
        status: "Alive",
        species: "Human",
        gender: "Female",
      },
      {
        id: 4,
        name: "Beth Smith",
        status: "Alive",
        species: "Human",
        gender: "Female",
      },
      {
        id: 5,
        name: "Jerry Smith",
        status: "Alive",
        species: "Human",
        gender: "Male",
      },
    ]);
  });
});

describe("traerBuscado", () => {
  it("debería traer el id completo con la letra que coincida", () => {
    const trae = [
      {
        id: 1,
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
        gender: "Male",
      },
    ];
    const resultado = [
      {
        id: 1,
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
        gender: "Male",
      },
    ];
    expect(traerBuscado(trae, "rick")).toEqual(resultado);
  });
});

describe(filtrarGenero, () => {
  it("debería traer el id completo según la busqueda de gender", () => {
    const respuesta = [
      {
        gender: "Female",
        id: 3,
        name: "Summer Smith",
        status: "Alive",
        species: "Human",
      },
      {
        gender: "Female",
        id: 4,
        name: "Beth Smith",
        status: "Alive",
        species: "Human",
      },
      {
        gender: "Female",
        id: 6,
        name: "Abadango Cluster Princess",
        status: "Alive",
        species: "Alien",
      },
    ];
    expect(filtrarGenero(data, "Female")).toEqual(respuesta);
  });
});

describe("calcular" ,() =>{
  it("debería traer el porcentaje según gender", () =>{
    expect(calcular("Female",data)).toEqual(66.66666666666666)
  });
});

const sacarCalculo = calcular("Female", data);
const arrays= convertir(sacarCalculo);

describe("convertir", () =>{
  it("debería convertir el porcentaje en Array", () =>{
    expect(convertir(sacarCalculo)).toEqual([['6'],['6'],['.'],['6'],['6'],['6'],['6'],['6'],['6'],['6'],['6'],['6'],['6'],['6'],['6'],['6'],['6']])
  });
});

describe("cortar", () =>{
  it("debería cortar Array y juntar", () =>{
    expect(cortar(arrays)).toEqual('66.66')
  })
})