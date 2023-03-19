

type Indumentaria = {  
    marca:string,
    stock:number,
    talles:string[]
}

let pantalon:Indumentaria={ //esto permite que estructurar a partir del tipo "Indumentaria" para asegurar que tiene las mismas propiedades
    marca:"Levis",
    stock: 70,
    talles:["S", "M", "L"]
}

//pantalon.color="rojo" //a diferencia de JS, TS no permite agregar propiedades fuera de la declaración.