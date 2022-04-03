const submit = document.querySelector('button')
const token = "b6aa79f3-0e2f-4fef-b19a-d699b8c76e06"


//Storing everything in Data object
function allStorage() {

    let archive = {},
        keys = Object.keys(localStorage),
        i = keys.length;

    while (i--) {
        archive[keys[i]] = localStorage.getItem(keys[i]);
    }

    return archive;
}
let data = allStorage();

//Token
data.token = token;

//Skills
skills = localStorage.getItem('skills')

skills = JSON.parse(skills)

data.skills = skills;


//Covid
hadCovid = localStorage.getItem('had_covid')

hadCovid = JSON.parse(hadCovid)

data.had_covid = hadCovid;

//Vaccine 
vaccinated = localStorage.getItem('vaccinated')

vaccinated = JSON.parse(vaccinated)

data.vaccinated = vaccinated;

//Dev Talk
dev = localStorage.getItem('will_organize_devtalk')

dev = JSON.parse(dev)

data.will_organize_devtalk = dev;

//If phone value in local storage is ' ' set it to 111 in object "data"
if (localStorage.getItem('phone') === '') {
    data.phone = '111';
}

//if devtalk topic  in local storage is '' set it to 111 in object "data"
if (localStorage.getItem('devtalk_topic') === '') {
    data.devtalk_topic = '111'
}

//Vaccinated_At 
if (localStorage.getItem('vaccinated_at') === '') {
    data.vaccinated_at = "2021-08-25"
}

//Had_Covid_At 
if (localStorage.getItem('had_covid_at') === '') {
    data.had_covid_at = "2021-08-25"
}


//Sending Data and Clearing Local Storage
submit.addEventListener('click', function() {
    axios.post("https://bootcamp-2022.devtest.ge/api/application", data).then(promise => {
        if (promise.statusText === "Created");
        location.href = '../thanks/thanks.html'
        localStorage.clear();
    })

})