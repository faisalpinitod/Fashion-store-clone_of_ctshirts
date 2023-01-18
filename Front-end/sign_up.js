document.querySelector("#submit").addEventListener("click",register)
let reg_data={}
async function register(event){
    event.preventDefault()
    try{
        let firstName=document.querySelector("#first").value
        let lastName=document.querySelector("#last").value
        let email=document.querySelector("#email").value
        let password=document.querySelector("#pass").value
        let phone=document.querySelector("#phone").value


        reg_data={firstName,lastName,email,password,phone}

        reg_data=JSON.stringify(reg_data)


            let regURL="http://localhost:8080/users/register"

        let response= await fetch(regURL,{
            method:"POST",
            body:reg_data,
            headers:{
                "Content-Type":"application/json"
            }
        })

        let data=await response.json()
        alert("Successful Registerd")
        console.log("Registerd")
        console.log(data) 

    }catch(err){
        console.log(err)
    }

    
}