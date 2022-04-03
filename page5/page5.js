const devTalkAttend = document.querySelector('input[name=devtalk]')
const next = document.querySelector('#next')
let will_organize_devtalk;
const attendYes = document.querySelector("#devtalkYes")
const attendNo = document.querySelector("#devtalkNo")



//Adding and removing Inputs and Saving Their Values
attendYes.addEventListener('click', function() {
    const attend = document.querySelector('#attend').style.display = "block";
    localStorage.setItem("will_organize_devtalk", attendYes.value)
    document.querySelector('#speak').setAttribute('required', '')
})

attendNo.addEventListener('click', function() {
    const attend = document.querySelector('#attend').style.display = "none";
    localStorage.setItem("will_organize_devtalk", attendNo.value)

})



//Taking Values of devtalk topic and something special
next.addEventListener('click', function() {
    const speakAbout = document.querySelector('#speak')
    const smthSpecial = document.querySelector('#special')
    localStorage.setItem("devtalk_topic", speakAbout.value)
    localStorage.setItem("something_special", smthSpecial.value)

})