// alert("connected")

const email = document.getElementById("email")
const phoneNumber = document.getElementById('phoneNumber')
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirm-password")
const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")

// Error message declaration
const firstnameMessage = document.getElementById('firstName-message')
const lastNameMessage = document.getElementById('lastName-message')
const emailMessage = document.getElementById('email-message')
const phoneNumberMessage = document.getElementById('phoneNumber-message')
const passwordMessage = document.getElementById('password-message')
const confirmPasswordMessage = document.getElementById('confirmPasword-message')
const checkUserEmail = document.getElementById('checkUser-email')
const accountSuccess = document.getElementById('account-success')

const url = "https://food-app-project-api.onrender.com"

const signUpButton = document.getElementById("sign-up-btn")





const signupUser = async ()=>{


    
    //Password Confirmation
    if(confirmPassword.value !== password.value){

        confirmPasswordMessage.innerHTML = 'Please confirm your password'
        confirmPasswordMessage.style.color = 'red'

        return

    }else{
    confirmPasswordMessage.innerHTML = ''
    confirmPasswordMessage.style.color = ''
}


    const response = await fetch(url+"/users/signup",{
        method:"POST",
        headers:{
            "Content-Type":'application/json'
        },
        body:JSON.stringify({
            email:email.value,
            password:password.value,
            firstName:firstName.value,
            lastName:lastName.value,
            phoneNumber:phoneNumber.value
            
        })
    })

    const data =  await response.json()

    console.log(data)




    if(data.status !== 'success'){

        if(data.message === 'Email Already In Use'){
            checkUserEmail.innerText = data.message
            checkUserEmail.style.color = 'red';
        }else{
            checkUserEmail.style.display = 'none'
            checkUserEmail.style.color = ''
        }

        
        if(data.message === "First Name is Required"){

            firstnameMessage.innerHTML = data.message
            firstnameMessage.style.color = 'red'

        }else{
        firstnameMessage.innerHTML = ''
        firstnameMessage.style.color = ''
    }

        if(data.message === "Last Name is Required"){

            lastNameMessage.innerHTML = data.message
            lastNameMessage.style.color = 'red'

        }else{
        lastNameMessage.innerHTML = ''
        lastNameMessage.style.color = ''
    }

        
        if(data.message === "Email is Required"){

            emailMessage.innerHTML = data.message
            emailMessage.style.color = 'red'

        }else{
        emailMessage.innerHTML = ''
        emailMessage.style.color = ''
    }
    
        
        if(data.message === "Phone Number is Required"){

            phoneNumberMessage.innerHTML = data.message
            phoneNumberMessage.style.color = 'red'

        }else{
        phoneNumberMessage.innerHTML = ''
        phoneNumberMessage.style.color = ''
    }
    
        
        if(data.message === "Password is Required"){

            passwordMessage.innerHTML = data.message
            passwordMessage.style.color = 'red'

        }else{
        passwordMessage.innerHTML = ''
        passwordMessage.style.color = ''
    }
    
}
    

if(data.status === 'success'){

    localStorage.setItem("name", firstName.value);

    //Account-creation success message

        accountSuccess.style.color = "green"
        accountSuccess.innerHTML = "Sign Up Sucessful"
        


    localStorage.setItem("token", data.user.token)


        setTimeout(() => {

            window.location.href = "/login.html"
            
        }, 1000);

}

    }

    


signUpButton.addEventListener("click", (e)=>{

    e.preventDefault();

    e.target.innerHTML = "signing in..."


    setTimeout(() => {
        signupUser()
        .then(()=>{

            e.target.innerHTML = "Sign In"
        })
    }, 1000);

    
})