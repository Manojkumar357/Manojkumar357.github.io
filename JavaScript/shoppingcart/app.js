//Objects

let cart={}
const products=[
    {id:1,name:"Apples",price:25},
    {id:2,name:"Bananas",price:100},
    {id:3,name:"Oranges",price:50},
];

const showProducts=()=>{
    let str=""
    products.map((value)=>{
         str+=`<div style="color:blue;">${value.id}-${value.name}-Rs.${value.price}</div>
         <button class="but">Add to cart</button><br>`
    })
   return str;
}

function greet(){
    document.getElementById("r").innerHTML=showProducts()

}
function greet1(){
        document.getElementById("s").innerHTML=addToCart()
}

const addToCart=()=>{
    
    products.map(value=>{
        cart[value.id]={...value};
    })
    let  str="<h3>Your Cart: </h3>"
    for(let key in cart){
        const item=cart[key];
        str+=`${item.name}-Rs.${item.price}<br>`
    }
    return str;
}
