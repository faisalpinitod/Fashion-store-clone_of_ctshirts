let data1=JSON.parse(localStorage.getItem("cart")) || []
let total=localStorage.getItem("total")|| 0;
displaycart(data1)
function displaycart(data){
total=0
document.querySelector("#cont").innerHTML=""
// document.querySelector("#main5").innerHTML=0

data.forEach((ele,i) => {
    
    let divu=document.createElement("div")
   

    
    let divx=document.createElement("div")

    let divy=document.createElement("div")

    let div3=document.createElement("div")
    div3.setAttribute("class","three")

    let div5=document.createElement("div")
    div5.setAttribute("class","five")

    let div4=document.createElement("div")
    div4.setAttribute("class","four")

    let size=document.createElement("p")
    size.innerText="Classic,   16 collar size (inch),35 sleeve length (inch),  Button cuff,Slim,   16 collar size (inch),   35 sleeve length (inch),   Button cuff"

    let quan=document.createElement("p")
    quan.innerText="Quantity:1"
  
    let hr1=document.createElement("hr")
   
    let div1=document.createElement("div")
    div1.setAttribute("class","imgp")

    let div2=document.createElement("div")
    div2.setAttribute("class","image")
   
  
    let price=document.createElement("p")
    price.innerText="$"+ele.price+".00"
    let price1=document.createElement("p")
    price1.innerText="$"+ele.price+".00"
    div5.append(quan,price1)
    let img=document.createElement("img")
    img.setAttribute("src",ele.img)
    div4.append(size,price)
    div3.append(div4,hr1,div5)
    div1.append(img,div3)

    let title=document.createElement("h3")
    title.innerText=ele.title


    let btn=document.createElement("button")
    btn.innerText="REMOVE"
    btn.addEventListener("click",function(){
        removefun(ele,i)
    })

    div2.append(title,btn)
    divx.append(div2,div1)

    let hr=document.createElement("hr")
    

    divu.append(divx,divy)

    document.querySelector("#cont").append(divu,hr)
    total+=Number(ele.price);
    localStorage.setItem("total",total)
    document.querySelector(".main5").innerHTML=`$ ${total}`
    document.querySelector("#pay").innerHTML=`$ ${total+20}`
    
});
}


function removefun(elem,i){
data1.splice(i,1)
displaycart(data1)
localStorage.setItem("cart",JSON.stringify(data1))

}


document.querySelector("#img").addEventListener("click",myfunc2)

async function myfunc2(){
    window.location=("index.html")}

    document.querySelector(".d-inline-block").addEventListener("click",login)

    function login(){
        window.location=("login.html")
    }
