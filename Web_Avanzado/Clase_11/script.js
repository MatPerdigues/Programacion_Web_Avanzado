
//**************LOCAL STORAGE********************/

let total = 0
let zonatotal = document.querySelector(".total-a-pagar");

if(localStorage.getItem("totalCompra")==null){
    total=0;
} else {
    total = parseInt(localStorage.getItem("totalCompra"))
};



zonatotal.textContent = total;


const sumarProducto = ()=>{
    total += 200
    let lista = document.querySelector(".compra-previa");
    let item = document.createElement("li");
    item.innerText="producto $200";
    lista.appendChild(item);
    localStorage.setItem('totalCompra', total)
    zonatotal.textContent = total;
}