document.querySelector("#submit").addEventListener("click",login)
let reg_data={}
async function login(event){
    event.preventDefault()
    try{
      
       
        let email=document.querySelector("#email").value
        let password=document.querySelector("#pass").value
       
        reg_data={email,password}
        reg_data=JSON.stringify(reg_data)


        

        let regURL="http://localhost:8080/users/login"

        let response= await fetch(regURL,{
            method:"POST",
            body:reg_data,
            headers:{
                "Content-Type":"application/json"
            }
        })

        let data=await response.json()
        alert("Login Successful")
        console.log("Loged In")
        console.log(data)

    }catch(err){
        console.log(err)
    }

     
}