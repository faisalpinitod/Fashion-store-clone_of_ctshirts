document.querySelector("#submit").addEventListener("click",login)
let reg_data={}
async function login(event){
    event.preventDefault()
    try{
      
       
        let email=document.querySelector("#email").value
        let password=document.querySelector("#pass").value
        if(email=="user@admin" && password=="admin"){
            window.location="admin.html";
            return
        }
        reg_data={email,password}
        reg_data=JSON.stringify(reg_data)


        

        let regURL="https://wild-tan-beret.cyclic.app/users/login"

        let response= await fetch(regURL,{
            method:"POST",
            body:reg_data,
            headers:{
                "Content-Type":"application/json"
            }
        })
        
        let data=await response.json()
       
            window.location="index.html"
            alert("Login Successful")
            console.log("Loged In")
            console.log(data)
        
     

    }catch(err){
        console.log(err)
    }

     
}

document.querySelector("#sub").addEventListener("click",myfunc)

async function myfunc(){
    window.location=("sign_up.html")
}

document.querySelector("#img").addEventListener("click",myfunc2)

async function myfunc2(){
    window.location=("index.html")
}


