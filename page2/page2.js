const next = document.querySelector('#next')
const previous = document.querySelector('#previous')
const firstName = document.querySelector('#name')
const lastName = document.querySelector('#lastName')
const email = document.querySelector('#email')
const phone = document.querySelector('#phone')


//Saving inputs in input boxes
firstName.value = localStorage.getItem('first_name');
lastName.value = localStorage.getItem('last_name');
email.value = localStorage.getItem('email');
phone.value = localStorage.getItem('phone');


phone.onmouseenter = function() {
    phone.value = "+995"
}

phone.onmouseleave = function() {
    if (phone.value === "+995") {
        phone.value = "";
    }
}

//Saving values in local storage
next.addEventListener('click', function() {
    localStorage.setItem("first_name", firstName.value)
    localStorage.setItem("last_name", lastName.value)
    localStorage.setItem("email", email.value)
    localStorage.setItem("phone", phone.value)



    if (phone.value != 0) {
        if (phone.value.startsWith("+9955") === true && phone.value.length === 13) {
            document.querySelector('form').setAttribute('action', '../page3/page3.html')
        } else if (phone.value.startsWith("+9955") === false || phone.value.length != 13) {
            alert("Please Enter a Valid Phone Number✊🏻")
            document.querySelector('form').setAttribute('action', '../page2/page2.html')

        }
    }
    if (phone.value === '') {
        document.querySelector('form').setAttribute('action', '../page3/page3.html')

    }

})