const next = document.querySelector("#next")
const previous = document.querySelector("#previous")
const covidyes = document.querySelector('#covidYes')
const covidno = document.querySelector('#covidNo')
const vaccinatedno = document.querySelector('#vaccineNo')
const vaccinatedyes = document.querySelector('#vaccineYes')

//Saving Inputs For Changes
if (localStorage.getItem('had_covid') === "true") {
    covidyes.checked = true;
    document.querySelector('#covidDate').style.display = "block"
    document.querySelector('#covidAt').value = localStorage.getItem('had_covid_at')


} else if (localStorage.getItem('had_covid') === "false") covidno.checked = true;

if (localStorage.getItem('work_preference') === "from_home") {
    document.querySelector('input[value=from_home]').checked = true;
} else if (localStorage.getItem('work_preference') === "from_office") {
    document.querySelector('input[value=from_office]').checked = true;
} else if (localStorage.getItem('work_preference') === "hybrid") document.querySelector('input[value=hybrid]').checked = true;

if (localStorage.getItem('vaccinated') === "true") {
    vaccinatedyes.checked = true;
    document.querySelector('#vaccineDate').style.display = "block"
    document.querySelector('#vaccineAt').value = localStorage.getItem('vaccinated_at')

} else if (localStorage.getItem('vaccinated') === "false") vaccinatedno.checked = true;

//Saving Inputs For Changes



//Adding and Removing Date Input
covidyes.addEventListener('click', function() {
    const contactDate = document.querySelector('#covidDate').style.display = "block";
    document.querySelector('#covidDate').setAttribute('required', '')
    let radios2 = document.getElementsByName('contact');
    covidno.addEventListener('click', function() {
        const contactDate = document.querySelector('#covidDate').style.display = "none";
        document.querySelector('#covidDate').removeAttribute('required', '')

    })

})


vaccinatedyes.addEventListener('click', function() {
        const vaccineDate = document.querySelector('#vaccineDate').style.display = "block"
        document.querySelector('#vaccineDate').setAttribute('required', '')
        vaccinatedno.addEventListener('click', function() {
            const vaccineDate = document.querySelector('#vaccineDate').style.display = "none";
            document.querySelector('#covidDate').removeAttribute('required', '')

        })

    })
    //Adding and Removing Date Input


previous.addEventListener('click', function() {
    location.href = '../page3/page3.html';

})

//Taking out values
next.addEventListener('click', function() {

        let radios1 = document.getElementsByName('contact');
        for (let radio of radios1) {
            if (radio.checked) {
                let hadCovid = radio.value;
                localStorage.setItem("had_covid", hadCovid)

            }
        }
        let radios2 = document.getElementsByName('vaccine');
        for (let radio of radios2) {
            if (radio.checked) {
                let vaccine = radio.value;
                localStorage.setItem("vaccinated", vaccine)

            }
        }
        let radios3 = document.getElementsByName('type');
        for (let radio of radios3) {
            if (radio.checked) {
                let workType = radio.value;
                localStorage.setItem("work_preference", workType)

            }
        }
        const hadCovidAt = document.querySelector('#covidAt')
        localStorage.setItem("had_covid_at", hadCovidAt.value)

        const vaccineAt = document.querySelector('#vaccineAt')
        localStorage.setItem("vaccinated_at", vaccineAt.value)

    })
    //Taking out values