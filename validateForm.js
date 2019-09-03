const init = () => {
    let name = document.querySelector('#name')
    name.addEventListener('invalid', validateName)
    let email = document.querySelector('#email')
    email.addEventListener('invalid', validateEmail)
    let mgs = document.querySelector('#mgs')
    mgs.addEventListener('invalid', validateMgs)
}

const validateName = (event) => {
    let par = document.querySelector('#info')
    if ( ! event.target.validity.valid ) {
        par.innerHTML = '*Name field should only be alphabets and have at least 4 letters e.g. Tony'
        par.style.display = 'block'
    }
}

const validateEmail = (event) => {
    let par = document.querySelector('#info1')
    if ( ! event.target.validity.valid ) {
        par.innerHTML = '* Email field should only be in email format e.g. tony@example.com'
        par.style.display = 'block'
    }
}

const validateMgs = (event) => {
    let par = document.querySelector('#info2')
    if ( ! event.target.validity.valid ) {
        par.innerHTML = '* Message field should have at least 20 characters'
        par.style.display = 'block'
    }
}

const validate = () => {

}
