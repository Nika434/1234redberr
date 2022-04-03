const div = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
div.setAttribute('id', 'parent')
div.setAttribute('class', 'maincontainer')
div2.setAttribute('class', 'containerLeft')
div2.setAttribute('id', 'child1')
div3.setAttribute('class', 'containerRight')
div3.setAttribute('id', 'child2')
let a = 1;


/////////////////////////////////////////////////////////////წინასწარ ბოდიში


//Getting values from API 
const res = axios.get("https://bootcamp-2022.devtest.ge/api/applications?token=b6aa79f3-0e2f-4fef-b19a-d699b8c76e06").then(res => {
    for (let i = 0; i < res.data.length; i++) {
        box = document.createElement('button');
        box.style.backgroundColor = "#FE3B1F";
        box.style.width = "72em";
        box.style.height = "3em";
        box.innerText = i + 1;
        document.body.appendChild(box);
        box.style.margin = "auto";
        box.style.marginTop = "1em";
        box.style.display = "block";
        box.style.border = "none";
        box.style.color = "white";
        box.setAttribute('class', 'test');
        box.setAttribute('id', i + 1);
    };
    console.log(res);


    for (let i = 0; i < res.data.length; i++) {
        const elements = document.getElementsByClassName('test')

        elements[i].addEventListener('click', function() {
            const id = `${elements[i].id}`
            const afterButton = document.getElementById(id);
            div.style.display = "block"
            div.appendChild(div2)
            div.appendChild(div3)
            if (a != 0) {


                //Making Drop Down
                afterButton.after(div);
                //Making Drop Down


                //Personal Info 
                const personalInfo = document.createElement('div')
                personalInfo.style.width = "20em";
                personalInfo.style.padding = "10px";
                if (res.data[i].phone != "111") {
                    personalInfo.innerHTML = (
                        `<section> 
                       <h1 style="color: #FE3B1F; font-size: 20px; text-decoration: underline;  font-family: 'Montserrat', sans-serif;  ">Personal Info</h1>
                       <div id='test'><span><b>First Name:</b>    <i>${res.data[i].first_name}</i></span></div>
                       <div style="margin-top: 1em"><pre><b>Last Name:</b>    <i>${res.data[i].last_name}</div> 
                       <div style="margin-top: 1em"><pre><b>E mail</b>    <i>${res.data[i].email}</pre></div>
                       <div style="margin-top: 1em"><pre><b>Phone:</b>   <i>${res.data[i].phone}</pre></div>
                       </section>`
                    )
                    div2.appendChild(personalInfo)
                } else {
                    personalInfo.innerHTML = (
                        `<section> 
                       <h1 style="color: #FE3B1F; font-size: 20px; text-decoration: underline;  font-family: 'Montserrat', sans-serif;  ">Personal Info</h1>
                       <div id='test'><span><b>First Name:</b>    <i>${res.data[i].first_name}</i></span></div>
                       <div style="margin-top: 1em"><pre><b>Last Name:</b>    <i>${res.data[i].last_name}</div> 
                       <div style="margin-top: 1em"><pre><b>E mail</b>    <i>${res.data[i].email}</pre></div>
                       </section>`
                    )
                    div2.appendChild(personalInfo)
                }

                //Personal Info 


                //Work_Preference 
                const workPreference = document.createElement('div');
                workPreference.style.padding = "10px";

                if (res.data[i].work_preference === "from_home") {

                    workPreference.innerHTML = (
                        `
                        <h1 style="color: #FE3B1F; font-size: 20px; text-decoration: underline;  font-family: 'Montserrat', sans-serif;  ">Covid Situation</h1>
                        <h2 style="font-family: 'Montserrat'; font-size: 15px; ">How do you prefer to work?</h2>
                    <div style="margin-top: 1em"> <input type='radio' id="home" value='from_home' name="preference" checked> From Home </input></div>
                    <div> <input type='radio' id="sairme" value='from_sairme_office' name="preference" disabled> From Sairme Office </input></div>
                    <div> <input type='radio' id="hybrid" value='hybrid' name="preference" disabled> Hybrid </input></div>    
                      `
                    )
                    div2.appendChild(workPreference)

                }

                if (res.data[i].work_preference === "from_office") {

                    workPreference.innerHTML = (
                        `
                        <h1 style="color: #FE3B1F; font-size: 20px; text-decoration: underline;  font-family: 'Montserrat', sans-serif;  ">Covid Situation</h1>
                        <h2 style="font-family: 'Montserrat'; font-size: 15px; ">How do you prefer to work?</h2>
                        <div> <input type='radio' id="home" value='from_home' name="preference" disabled> From Home </input></div>
                    <div> <input type='radio' id="sairme" value='from_sairme_office' name="preference" checked> From Sairme Office </input></div>
                    <div> <input type='radio' id="hybrid" value='hybrid' name="preference" disabled> Hybrid </input></div>    
                      `
                    )
                    div2.appendChild(workPreference)

                }
                if (res.data[i].work_preference === "hybrid") {
                    workPreference.innerHTML = (
                        `
                        <h1 style="color: #FE3B1F; font-size: 20px; text-decoration: underline;  font-family: 'Montserrat', sans-serif;  ">Covid Situation</h1>
                        <h2 style="font-family: 'Montserrat'; font-size: 15px; ">How do you prefer to work?</h2>
                    <div> <input type='radio' id="home" value='from_home' name="preference" disabled> From Home </input></div>
                    <div> <input type='radio' id="sairme" value='from_sairme_office' name="preference" disabled> From Sairme Office </input></div>
                    <div> <input type='radio' id="hybrid" value='hybrid' name="preference" checked> Hybrid </input></div>    
                      `
                    )
                    div2.appendChild(workPreference)
                }
                //Work_Preference 

                //HadCovid? 
                const hadCovid = document.createElement('div');
                hadCovid.style.padding = "10px";


                if (res.data[i].had_covid === true) {
                    const hadCovid = document.createElement('div');

                    hadCovid.innerHTML = (
                        `
                        <h2 style="font-family: 'Montserrat'; font-size: 15px; ">Did you have Covid 19?</h2>
                        <div> <input type='radio' checked>Yes</input></div>
                        <div> <input type='radio' disabled>No</input></div>
                      `
                    )
                    hadCovid.style.padding = "10px";
                    const subHeading = document.createElement('h1');
                    subHeading.innerHTML = ` <h2 style="font-family: 'Montserrat'; font-size: 15px; margin-top: 1em; margin-left: 10px; ">When did you have Covid-19?</h2>`
                    const hadCovidAt = document.createElement('div');
                    hadCovidAt.style.marginLeft = "10px";
                    hadCovidAt.style.padding = "10px";
                    hadCovidAt.style.border = "1px solid #525557"
                    hadCovidAt.style.width = "15em"
                    hadCovidAt.style.overflowX = "auto";
                    hadCovidAt.innerHTML = ` <i>${res.data[i].had_covid_at}`
                    div2.appendChild(hadCovid)
                    div2.appendChild(subHeading)
                    div2.appendChild(hadCovidAt)
                }

                if (res.data[i].had_covid === false) {
                    const hadCovid = document.createElement('div');

                    hadCovid.innerHTML = (
                        `
                        <h2 style="font-family: 'Montserrat'; font-size: 15px  ">Did you have covid 19?</h2>
                        <div> <input type='radio' disabled>Yes</input></div>
                        <div> <input type='radio' checked>No</input></div>
                      `
                    )
                    hadCovid.style.padding = "10px";
                    div2.appendChild(hadCovid)
                }
                //HadCovid?

                //Vaccinated?
                const vaccinated = document.createElement('div');
                if (res.data[i].vaccinated === true) {
                    vaccinated.innerHTML = (
                        `
                        <h2 style="font-family: 'Montserrat'; font-size: 15px; margin-top: 1em;">Are you vaccinated?</h2>
                        <div> <input type='radio' checked>Yes</input></div>
                        <div> <input type='radio' disabled>No</input></div>
                      `
                    )
                    vaccinated.style.padding = "10px";

                    const vaccineAt = document.createElement('div');
                    vaccineAt.style.padding = "10px";
                    const subHeading1 = document.createElement('h1');
                    subHeading1.innerHTML = ` <h2 style="font-family: 'Montserrat'; font-size: 15px; margin-left: 10px; ">When did you get Covid-19 vaccine?</h2>`
                    vaccineAt.style.border = "1px solid #525557"
                    vaccineAt.style.width = "15em"
                    vaccineAt.style.marginLeft = "10px"
                    vaccineAt.style.overflowX = "auto";
                    vaccineAt.innerHTML = ` <i>${res.data[i].vaccinated_at}`
                    div2.appendChild(vaccinated)
                    div2.appendChild(subHeading1)
                    div2.appendChild(vaccineAt)
                }

                if (res.data[i].vaccinated === false) {
                    vaccinated.innerHTML = (
                        `
                        <h2 style="font-family: 'Montserrat'; font-size: 15px; margin-top: 2em;">Are you vaccinated?</h2>
                        <div> <input type='radio' disabled>Yes</input></div>
                        <div> <input type='radio'  checked>No</input></div>
                      `
                    )
                    vaccinated.style.padding = "10px";


                    div2.appendChild(vaccinated)
                }
                //Vaccinated?

                //Skills
                //const url = "https://bootcamp-2022.devtest.ge/api/skills"
                //const res2 = axios.get(url)
                //  .then(res2 => {
                //    for (let j = 0; j < res2.data.length; j++) {
                //      console.log(res2.data[j].title);
                //    id.push(res2.data[j].title);
                //}
                //})
                const id = ["HTML", "CSS", "PHP", "Lavarel", "React.JS", "Vue.JS", "Svelte", "Angular"];
                const subHeading3 = document.createElement('h2')
                subHeading3.innerHTML = ` <h1 style="color: #FE3B1F; font-size: 20px; text-decoration: underline; margin-left: 10px;">Skillset</h1>
                `
                div3.appendChild(subHeading3)
                for (let j = 0; j < res.data[i].skills.length; j++) {
                    let test = res.data[i].skills[j].id;
                    const language = id[test - 1];
                    const years = res.data[i].skills[j].experience;
                    const skills = document.createElement('div');
                    skills.innerHTML = (`<pre  style="margin-left: 10px;"> <i>${language}   Years of Experience: ${years}</pre>`)
                    skills.style.marginTop = "1.5em"
                    div3.appendChild(skills);
                }
                //skills

                //devTalk?
                const devTalk = document.createElement('div');
                devTalk.style.padding = "10px";
                if (res.data[i].will_organize_devtalk === true) {
                    devTalk.innerHTML = (`
                    <h1 style="color: #FE3B1F; font-size: 20px; text-decoration: underline;">Insights</h1>
                    <h2 style="font-family: 'Montserrat'; font-size: 15px; ">Would you attend Devtalks and maybe also organize your own?</h2>
                    <div style="margin-top: 2em"> <input type='radio' id="home" value='yes'  checked>Yes</input></div>
                    <div > <input type='radio' id="sairme" value='no'  disabled>No</input></div>
                    `)

                    const speak = document.createElement('div');
                    speak.style.padding = "10px";
                    const subHeading = document.createElement('div');
                    subHeading.innerHTML = ` <h2 style="font-family: 'Montserrat'; padding: 10px;  font-size: 15px; margin-top: 1em; ">What would you speak about at Devtalk?</h2>`
                    speak.style.border = "1px solid #525557"
                    speak.style.width = "23em"
                    speak.style.overflowX = "auto";
                    speak.style.marginLeft = "10px";
                    speak.innerHTML = `${res.data[i].devtalk_topic}`
                    div3.appendChild(devTalk)
                    div3.appendChild(subHeading);
                    div3.appendChild(speak)


                }


                if (res.data[i].will_organize_devtalk === false) {
                    devTalk.innerHTML = (`
                    <h1 style="color: #FE3B1F; font-size: 20px; text-decoration: underline;">Insights</h1>
                    <h2 style="font-family: 'Montserrat'; font-size: 15px; margin-top: 2em;  ">Would you attend Devtalks and maybe also organize your own?</h2>
                    <div> <input type='radio' id="home" value='yes'  disabled>Yes</input></div>
                    <div> <input type='radio' id="sairme" value='no'  checked>No</input></div>
        
                   `)
                    div3.appendChild(devTalk)

                }
                //devTalk?

                //SomethingSpecial
                const something_special = document.createElement('div');
                something_special.style.padding = "10px";
                const subHeading2 = document.createElement('div');
                subHeading2.setAttribute('id', 'head');
                subHeading2.innerHTML = ` <h2 style="font-family: 'Montserrat'; font-size: 15px; margin-top: 2em; margin-left: 10px;  ">Tell us something special</h2>`
                something_special.style.border = "1px solid #525557"
                something_special.style.width = "23em"
                something_special.style.overflowX = "auto";
                something_special.style.marginLeft = "10px";
                something_special.innerHTML = `${res.data[i].something_special}`
                something_special.setAttribute('class', 'info')
                div3.appendChild(subHeading2);
                div3.appendChild(something_special)
                    //SomethingSpecial?
                a = 0;

                //Closing DropDown Menu 
            } else if (a === 0) {
                const element = document.getElementById("child1");
                while (element.firstChild) {
                    element.removeChild(element.lastChild);
                }
                const element2 = document.getElementById("child2");
                while (element2.firstChild) {
                    element2.removeChild(element2.lastChild);
                }
                const parent = document.querySelector('#parent')
                document.body.removeChild(parent);
                a = 1;
            }

        })

    }
})