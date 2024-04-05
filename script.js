document.addEventListener("DOMContentLoaded", function() {

    // DOM Document Object Model
    const username = document.querySelector("#username")
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const password2 = document.getElementById("password2")

    
    const formElementi = document.querySelector(".form")
   

    function showSuccess() {

    }

    // Dont Repeat Yourself 

    function showError(qutu, mesaj) {
        const valideynElement = qutu.parentElement
        valideynElement.classList.add("error")
        const smallTeqi = valideynElement.querySelector("small")
        smallTeqi.innerText = mesaj
    }

  

    // showError(username, "Istifadeci adi yanlishdir")
    // showError(email, "Email standartlara uygun deyil")
    
})

