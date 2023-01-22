

    fetch("https://wild-tan-beret.cyclic.app/products")   
    .then((res)=>res.json())
    .then((data)=>{
        
        cardsData=data
        console.log(data[0])
        renderProducts(data)
          
    })
 

    let container=document.querySelector("#container")
    console.log(container)
    
    function renderProducts(data){
        container.innerHTML=""
        data.forEach(function(ele){

            
                let card=document.createElement("div")
                card.setAttribute("id","card")

                let image = document.createElement("img")
                image.setAttribute("src",ele.img)

                let id = document.createElement("p")
                id.textContent="id:"+ele._id
                

                let title = document.createElement("p")
                title.textContent="title:"+ele.title
                title.setAttribute("id","title")


                let price = document.createElement("p")
                price.textContent="price:"+ele.price
                price.setAttribute("id","price")



                let Brand = document.createElement("p")
                Brand.textContent="brand:"+ele.brand
                Brand.setAttribute("id","brand")

                  
                let cartdiv1=document.createElement("div")
                cartdiv1.setAttribute("id","cartdiv1")
                
                let cartdiv2=document.createElement("div")
                cartdiv2.setAttribute("id","cartdiv2")
                
        
                
                cartdiv1.append(image)
                cartdiv2.append(id,title,Brand,price)
                card.append(cartdiv1,cartdiv2)
                document.querySelector("#container").append(card)


        })

    }





// -----------------------------------------------------------
    document.querySelector("form").addEventListener("submit",add)
    async function add(event){
        event.preventDefault()
        try{
            let title=document.querySelector("#title").value
            let price=document.querySelector("#price").value
            let img=document.querySelector("#img1").value
            let brand=document.querySelector("#brand").value
        
            let post_data={title,price,img,brand}
            console.log(post_data)


            let regURL="https://wild-tan-beret.cyclic.app/products/add"

            let response=await fetch(regURL,{
                method:"POST",
                body:JSON.stringify(post_data),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            let data=await response.json()
            console.log(data)

        }catch(err){
            console.log(err)
            console.log({"msg":"Something went wrong"})
        }
    }



    document.querySelector("#form1").addEventListener("submit",edit)
    async function edit(event){
        event.preventDefault()
        let method=document.querySelector("#method").value
        try{
            if(method=="edit"){
                let id=document.querySelector("#id").value
                let item=document.querySelector("#field").value
                let input=document.querySelector("#input").value
            
                let post_data={
                    [item]:input
                }
                console.log(post_data)


                let regURL=`https://wild-tan-beret.cyclic.app/products/update/${id}`

                let response=await fetch(regURL,{
                    method:"PATCH",
                    body:JSON.stringify(post_data),
                    headers:{
                        "Content-Type":"application/json"
                    }
                })
                let data=await response.json()
                console.log(data)
            }
            else if(method=="delete"){
                let id=document.querySelector("#id").value
             
  
                let regURL=`https://wild-tan-beret.cyclic.app/products/delete/${id}`

                let response=await fetch(regURL,{
                    method:"DELETE",
                    headers:{
                        "Content-Type":"application/json"
                    }
                })
                let data=await response.json()
                console.log(data)
                console.log("Product is deleted")
            }
        }
        catch(err){
            console.log(err)
            console.log({"msg":"Something went wrong"})
        }
    }




    document.querySelector("#mini-cart").addEventListener("click",login1)

    function login1(){
        window.location=("cart.html")
    }
    document.querySelector("#img").addEventListener("click",login5)

    function login5(){
        window.location=("product.html")
    }


 