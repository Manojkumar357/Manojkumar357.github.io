//Objects

let cart={}
const products=[
    {id:1,name:"Product1",price:25},
    {id:2,name:"Product2",price:100},
    {id:3,name:"Product3",price:50},
];

const showProducts=()=>{
    let str=""
    products.map((value)=>{
         str+=`${value.id}-${value.name}-${value.price}<br>`
    })
   return str;
}

function greet(){
    document.getElementById("root").innerHTML=showProducts()
}

const addToCart=(id)=>{
    cart={...cart,[id]:1}
}