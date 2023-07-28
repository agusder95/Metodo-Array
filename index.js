const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];


const impar = () => {
  console.log("Pizzas id impares:")
  pizzas.flatMap(item =>{
    if(item.id % 2 === 0){
      console.log(item.nombre)
    }
  })
}
impar()

const precioMenor = () =>{
  let alguna = false;
  pizzas.flatMap(item =>{
    if(item.precio < 600){
      console.log(`Pizza menor a $600 ${item.nombre}`)
      alguna = true;
    }
    if( !alguna){
      console.log("No hay pizzas menores a $600")
    }
  })
}
precioMenor()

const listaPizzas = () =>{
  pizzas.flatMap(item =>{
    console.log(`${item.nombre} : $${item.precio}`)
  })
}
listaPizzas()

const ingredientes = () =>{
  pizzas.flatMap(item=>{
    console.log(`${item.nombre}:`)
    for(let ing=0; ing<item.ingredientes.length; ing++){
      console.log(`----${item.ingredientes[ing]}`)
    }
  })
}
ingredientes()