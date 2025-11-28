let cardslar = document.getElementById("cards")
let form = document.getElementById("form")
let outermodel = document.getElementById("outer-model")
let cardbtn = document.getElementById("cardbtn")
let selected = null;
let pagination = document.getElementById("pagination")
let page = 1
let sortName = document.getElementById("sortName")
let sortNamevalue = "default"
let search = document.getElementById("search")
let searchvalue = ""
let profession = document.getElementById("profession")
let professionvalue = "all"

search.addEventListener("input", function (e) {
    searchvalue = e.target.value;
    getdatalar(page, sortNamevalue, searchvalue, professionvalue);

})

profession.addEventListener("click", function (e) {
    professionvalue = e.target.value
    getdatalar(page, sortNamevalue, searchvalue, professionvalue);


})

sortName.addEventListener("click", function (e) {
    sortNamevalue = e.target.value
    getdatalar(page, sortNamevalue, searchvalue, professionvalue);
})

cardbtn.addEventListener("click", function () {
    outermodel.classList.remove("hidden")
    for (let el of form) {
        if (el.type === "checkbox") {
            el.checked = false
        } else {
            el.value = "";

        }
    }
})

outermodel.addEventListener("click", function () {
    outermodel.classList.add("hidden")
    selected = null;

})

form.addEventListener("click", function (e) {
    e.stopPropagation()
})
async function getdatalar(page, sortNamevalue, searchvalue, professionvalue){
try{
    let reslar = await axios.get(`https://69242f5d3ad095fb84730f49.mockapi.io/students?page=${page}&limit=10&${sortNamevalue === "default" ? "" : `&sortBy=name&order=${sortNamevalue}`}${searchvalue ? `&name=${searchvalue}` : ""}${professionvalue === "all" ? "" : `&filter=${professionvalue}`}`
    )
    let allres = await axios.get("https://69242f5d3ad095fb84730f49.mockapi.io/students")
    let allrestechers = allres.data
    let allprofession = allrestechers.map((el) => el.profession)
    let professions = [...new Set(allprofession)]
    professions.map((el) => {
        profession.innerHTML += `
     <option value="${el}">${el}</option>
    `
    })

    let pagea = Math.ceil(allres.data.length / 10)
    console.log(pagea);
    pagination.innerHTML = ""

    pagination.innerHTML += `
   <li  onClick = "changePage(${page - 1})"
            class="${page === 1 ? "hidden" : ""} flex items-center justify-center text-body  box-border rounded-[10px] rounded-[10px]   p-[5px] bg-gradient-to-r from-blue-500 to-purple-600 p-[10px]  text-[white]">Previous
    </li>
   `
    pagination.innerHTML += ` <h1> ${page}/${pagea}</h1>`


    pagination.innerHTML += `
                   <li onClick = "changePage(${page + 1})"
                    class="${page === pagea ? "hidden" : ""}  flex items-center justify-center text-body  box-border rounded-[10px]  bg-gradient-to-r from-blue-500 to-purple-600 p-[10px]  text-[white]">Next  </li>
   `
    console.log(reslar.data);
    reslar.data.map((el) => {
        cardslar.innerHTML += `
         <div class="text-card-foreground flex flex-col gap-6 rounded-xl border p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white  border-gray-200  group">
                            <div class="flex flex-col items-center text-center mb-4">
                                <a href="../packalar/students-teaders.html?studentsId=${el.id}" class="relative flex size-10 shrink-0 overflow-hidden rounded-full h-20 w-20 mb-3 ring-4 ring-purple-100 dark:ring-purple-900">
                                    <img class="aspect-square size-full" src="${el.avatar}" alt="rasm">
                                </a>
                                <h3 class="text-black mb-1">${el.name}</h3>
                                <div class="flex items-center gap-2 mb-3">
                                    <h1
                                        class="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 ">
                                        Grade 5</h1>
                                    <h1 class="text-black">19y</h1>
                                </div>
                                <div class="w-full space-y-2 mb-3">
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                class="lucide lucide-star h-4 w-4 fill-yellow-400 text-yellow-400" aria-hidden="true">
                                                <path
                                                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
                                                </path>
                                            </svg>
                                            <h1 class="text-sm text-black">2.1</h1>
                                        </div>
                                        <div class="flex items-center gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                class="lucide lucide-coins h-4 w-4 text-yellow-500" aria-hidden="true">
                                                <circle cx="8" cy="8" r="6"></circle>
                                                <path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path>
                                                <path d="M7 6h1v4"></path>
                                                <path d="m16.71 13.88.7.71-2.82 2.82"></path>
                                            </svg>
                                            <h1 class="text-sm text-black">${el.phon}</h1>
                                        </div>
                                    </div>



                                </div>
                            </div>
                            <div class="space-y-2 mb-4">
                                <div class="flex items-center gap-2 text-gray-600  text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round"
                                        class="lucide lucide-phone h-4 w-4 flex-shrink-0 text-blue-500" aria-hidden="true">
                                        <path
                                            d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384">
                                        </path>
                                    </svg>
                                    <h1 class="truncate">${el.createdAt}</h1>
                                </div>
                                <div class="flex items-center gap-2 text-gray-600  text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round"
                                        class="lucide lucide-mail h-4 w-4 flex-shrink-0 text-green-500" aria-hidden="true">
                                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                    </svg>
                                    <h1 class="truncate">Pete_Lebsack@yahoo.com</h1>
                                </div>
                                <div class="flex items-center gap-2 text-gray-600  text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round"
                                        class="lucide lucide-send h-4 w-4 flex-shrink-0 text-blue-400" aria-hidden="true">
                                        <path
                                            d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z">
                                        </path>
                                        <path d="m21.854 2.147-10.94 10.939"></path>
                                    </svg>
                                    <h1 class="truncate">@petelebsack</h1>
                                </div>
                                <div class="flex items-center gap-2 text-gray-600  text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round"
                                        class="lucide lucide-linkedin h-4 w-4 flex-shrink-0 text-blue-600" aria-hidden="true">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                        <rect width="4" height="12" x="2" y="9"></rect>
                                        <circle cx="4" cy="4" r="2"></circle>
                                    </svg>
                                    <h1>${el.linkedin}</h1>
                                </div>
                            </div>
                            <div onClick = "editTacher(${el.id})"
                             class="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                <button class="inline-flex items-center justify-center  text-sm font-medium  transition-all
                                                        border bg-background text-foreground  h-8 rounded-md px-3  flex-1 gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="lucide lucide-pencil h-4 w-4" aria-hidden="true">
                                        <path
                                            d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z">
                                        </path>
                                        <path d="m15 5 4 4"></path>
                                    </svg>Edit</button>
                                <button onClick = "deleteTacher(${el.id})"
                                 class=" inline-flex items-center justify-center  text-sm font-medium transition-all
                                                            border bg-background  h-8 rounded-md px-3  flex-1 gap-2 text-red-600 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="lucide lucide-trash2 lucide-trash-2 h-4 w-4" aria-hidden="true">
                                        <path d="M10 11v6"></path>
                                        <path d="M14 11v6"></path>
                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                        <path d="M3 6h18"></path>
                                        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                    </svg>Delete</button>
                            </div>
                        </div>

        `
    })
}catch(err){
    console.log(err);
    
}}
getdatalar(page, sortNamevalue, searchvalue, professionvalue);
function changePage(i) {
    getdatalar(i, sortNamevalue, searchvalue, professionvalue);

}


async function editTacher(id) {
    outermodel.classList.remove("hidden")
    selected = id;
    try {
        let res = await axios.get(`https://69242f5d3ad095fb84730f49.mockapi.io/students/${id}`)
        console.log(res.data);
        form[0].value = res.data.name
        form[1].value = res.data.createdAt
        form[2].value = res.data.avatar
        form[3].value = res.data.age
        form[4].value = res.data.experience
        form[5].value = res.data.profession
        form[6].value = res.data.rating
        form[7].value = res.data.gmail
        form[8].value = res.data.user
        form[9].value = res.data.phone
        form[10].value = res.data.linkedin
        form[11].checked = res.data.gender


    } catch (err) {
        console.log(err);
    }
}


async function addTeacher(teachersobj) {
    try {
        if (selected) {
            await axios.put(`https://69242f5d3ad095fb84730f49.mockapi.io/students/${selected}`, teachersobj)


        } else {
            await axios.post("https://69242f5d3ad095fb84730f49.mockapi.io/students", teachersobj)

        }
        outermodel.classList.add("hidden")
        selected = null;
        getdatalar(page, sortNamevalue, searchvalue, professionvalue);
    } catch (err) {
        console.log(err);

    }
}


form.addEventListener("submit", function (e) {
    e.preventDefault();
    let teachersobj = {};
    teachersobj.name = form[0].value;
    teachersobj.createdAt = form[1].value;
    teachersobj.avatar = form[2].value;
    teachersobj.age = form[3].value;
    teachersobj.experience = form[4].value;
    teachersobj.profession = form[5].value;
    teachersobj.linkedin = form[6].value;
    teachersobj.rating = form[7].value;
    teachersobj.gmail = form[8].value;
    teachersobj.user = form[9].value;
    teachersobj.phone = form[10].value;
    teachersobj.gender = form[11].checked;

    console.log(teachersobj);
    addTeacher(teachersobj)
    selected = null;

})
async function deleteTacher(id) {
    try {
        await axios.delete(`https://69242f5d3ad095fb84730f49.mockapi.io/students/${id}`)
        getdatalar(page, sortNamevalue, searchvalue, professionvalue)
    } catch (err) {
        console.log(err);
    }
}