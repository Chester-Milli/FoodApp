// alert("connected")

const email = document.getElementById("email")
const password = document.getElementById("password")

const url = "https://food-app-project-api.onrender.com"

const signInButton = document.getElementById("signin_btn")

const message = document.getElementById('message');






const loginUser = async ()=>{



    const response = await fetch(url+"/users/login",{
        method:"POST",
        headers:{
            "Content-Type":'application/json'
        },
        body:JSON.stringify({
            email:email.value,
            password:password.value
        })
    })

    const data =  await response.json()

    console.log(data)

    if(data.status !== "success"){

        message.style.color = "red"
        message.innerHTML = data.message
    }


    if(data.status === "success"){

        message.style.color = "green"
        message.innerHTML = data.message

    localStorage.setItem("token", data.user.token)


        setTimeout(() => {

            window.location.href = "/index.html"
            
        }, 1000);

    }

    

}

signInButton.addEventListener("click", (e)=>{

    e.preventDefault();

    e.target.innerHTML = "signing in..."


    setTimeout(() => {
        loginUser()
        .then(()=>{

            e.target.innerHTML = "Sign In"
        })
    }, 1000);

    
})


