//permite descomprimir grandes bloques de información para ser utilzada en ciertas variables (desgolzar items de un arreglo o propiedades de un objeto)

let productos = [{
    producto:"remera",
    stock:20,
    precio:2000,
    talles:["M","XL"]
},

{
    producto:"pantalon",
    stock:5,
    precio:7000,
    talles:["XXL","S"]
}];

let [remera,pantalon] = productos;

