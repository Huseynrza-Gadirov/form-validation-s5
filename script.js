document.addEventListener("DOMContentLoaded", function() {

    // DOM Document Object Model
    const username = document.querySelector("#username")
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const password2 = document.getElementById("password2")

    
    const formElementi = document.querySelector(".form")

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
        // console.log() -> debugger
        return textBox.id.charAt(0).toUpperCase() +  textBox.id.slice(1)
    }

    function checkLength(inputlar, min, max) {
        inputlar.forEach(input)
            if(input.value.length < min && input.value.length > max) {
                showError(input, `${getFieldName(input)} sahesi minimum ${min} ve maksimum ${max} simvoldan ibaret olmalidir`)
            }
            else {
                showSuccess(input)
            }
    }

    checkLength([username, password], 3, 17)

    // for dovrunu isledir.

    checkRequired([username, email, password, password2])



    // showError(password, "Shifre minimum 3, maksimum 10 simvoldan ibaret olmalidir")
    // showError(password2, "Yazdigin shifreler uygun deyil")


    // showError(username, "Istifadeci adi yanlishdir")
    // showError(email, "Email standartlara uygun deyil")
})