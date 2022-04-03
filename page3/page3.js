const form = document.querySelector("form")
const select = document.querySelector("select")
const input = document.querySelector("input");
const section = document.querySelector("section")
const experience = document.querySelector("#experience")
const next = document.querySelector('#next')
const id = [];

//Getting skills
const url = "https://bootcamp-2022.devtest.ge/api/skills"
const res = axios.get(url)
    .then(res => {
        for (let i = 0; i < 8; i++) {
            id.push(res.data[i].title);
            let skill = res.data[i].title;
            const opt = document.createElement('option')
            opt.value = skill;
            opt.innerText = skill;
            select.appendChild(opt);
        }

    })
    //Getting skills


let skillSet = [];
let language = [];
let years = [];
let skills = []


form.addEventListener('submit', (e) => {
    e.preventDefault();


    //Taking inputs and putting them into an object 
    let skill = select.value;
    let years = input.value;
    let new_data = 0;
    if (language.indexOf(skill) === -1) {
        language.push(skill);
        new_data = id.indexOf(skill) + 1;
        let add = ({
            "id": new_data,
            "experience": parseInt(years)
        });
        skills.push(add);

        //Creating new box 
        const box = document.createElement('div')
        box.style.width = "29em"
        box.style.position = "relative"
        box.style.height = "60.33"
        box.style.color = "black"
        box.style.border = "1px solid #525557"
        box.style.margin = "auto"
        box.style.marginTop = "10px"
        box.innerText = `${skill}: Years of Experience ${years}`
        box.style.paddingLeft = "5px"
        box.style.paddingTop = "15px"
        box.style.paddingBottom = "15px"
        const btn = document.createElement('button');
        btn.style.float = "right";
        btn.style.height = "2em";
        btn.style.width = "2em";
        btn.style.textAlign = "center"
        btn.style.marginRight = "1.5em";
        btn.style.borderRadius = "50%"
        btn.style.border = "2px solid #EB3535";
        btn.innerHTML = `<b style="color: #EB3535;">&#8722;</b>`

        box.appendChild(btn);
        btn.addEventListener('click', function() {
            box.style.display = "none";
            const index = skills.indexOf(add);
            skill = language.indexOf(skill);
            language.splice(skill, 1)
            skills.splice(index, 1);
        })
        experience.appendChild(box)
            //Creating new box 

    }
    input.value = "";
})


next.addEventListener('click', function() {
    if (skills.length === 0) {
        alert("Please choose at least one skill");
        location.href = "../page3/page3.html"
    } else {
        localStorage.setItem("skills", JSON.stringify(skills));
    }

})