document.addEventListener("DOMContentLoaded", function() {

    // DOM Document Object Model
    const username = document.querySelector("#username")
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const password2 = document.getElementById("password2")

    
    const formElementi = document.querySelector(".form")

    console.log(formElementi) //debugger

    function showSuccess(input) {
        const valideynElementi = input.parentElement
        valideynElementi.classList.add("success")
    }

    // showSuccess(password)
    // showSuccess(email)

    // Dont Repeat Yourself

    //* DOM Document Object Model

    function showError(qutu, mesaj) {
        const valideynElement = qutu.parentElement
        valideynElement.classList.add("error")
        const smallTeqi = valideynElement.querySelector("small")
        smallTeqi.innerText = mesaj
    }

// Event Loop
    function checkEmail(elektronPoct) {
        const qayda = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        
        if(qayda.test(elektronPoct)) {
            showSuccess(elektronPoct)
        }
        else {
            showError(elektronPoct, "Elektron poct standartlara uygun deyil !")
        }

    }

    //* template literal (string literal) -> `` eyri dirnaga deyilir !

    function checkRequired(inputlar) {

        //* map, filter, find

        inputlar.forEach(birInput => {
            if(birInput.value.trim() === "") {
                showError(birInput, `${getFieldName(birInput)} sahesi bosh buraxila bilmez !`)
            }
            else {
                showSuccess(birInput)
            }
        })
    }

    function getFieldName(textBox) {
        //* console.log() -> debugger
        //* string metodlari
        //* "Samir".slice(1)
        return textBox.id.charAt(0).toUpperCase() +  textBox.id.slice(1)
    }

    function checkLength(input, min, max) {

        //* callback
        //* HOF

            if(input.value.length < min || input.value.length > max) {
                showError(input, `${getFieldName(input)} sahesi minimum ${min} ve maksimum ${max} simvoldan ibaret olmalidir`)
            }
            else {
                showSuccess(input)
            }
    }

    // refactor

    function comparePassword(p, cP) {
        if(p.value !== cP) {
            showError(cP, "Shifreler uygun deyil")
        }
    }

    comparePassword(password, password2)


    formElementi.addEventListener("submit", function(e) {
        e.preventDefault() //* Yenilenmenin qabagini alir


        checkRequired([username, email, password, password2])
        checkLength(username, 3, 10)
        checkLength(password, 6, 13)
        checkEmail(email)
        comparePassword(password, password2)

        //* checkLength([username, password], 3 ,10)
    })

})

function shifreniGoster() {
    var passwordSahesi = document.getElementById("password");
    if (passwordSahesi.type === "password") {
        passwordSahesi.type = "text";
    } else {
        passwordSahesi.type = "password";
    }
}

document.querySelector(".fa-eye").addEventListener("click", shifreniGoster)