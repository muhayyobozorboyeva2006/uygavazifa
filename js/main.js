let card = document.getElementById("cards")
let form = document.getElementById("form")
let outermodel = document.getElementById("outer-model")
let cardbtn = document.getElementById("cardbtn")

cardbtn.addEventListener("click" , function(){
    outermodel.classList.remove("hidden")
})

outermodel.addEventListener("click", function () {
    cardbtn.classList.add("hidden")

})

form.addEventListener("click" , function(e){
    e.stopPropagation()
})

async function getData() {
   try{
       let res = await axios.get("https://69242f5d3ad095fb84730f49.mockapi.io/teachers")
       console.log(res.data);
       res.data.map((el) => {
        card.innerHTML += `
         <div
                        class="text-card-foreground flex flex-col gap-6 rounded-xl border p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white  border-gray-200 border-gray-200 group">
                        <div class="flex flex-col items-center text-center mb-4">
                         <span data-slot="avatar"
                                class="relative flex size-10 shrink-0 overflow-hidden rounded-full h-20 w-20 mb-3 ring-4 ring-blue-100 dark:ring-blue-900">
                                <img  class="aspect-square size-full" alt="Glenda Marvin-Corwin"
                                    src="${el.avatar}"></span>
                            <h3 class="text-[15px] text-black mb-1">${el.name}</h3>
                            <h1 class="items-center justify-center rounded-md border border-gray-200 px-2 py-0.5 text-xs bg-gray-300 mb-[10px]">Art</h1>
                            <div class="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-3"><span
                                    class="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round"
                                        class="lucide lucide-briefcase h-4 w-4" aria-hidden="true">
                                        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                        <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                                    </svg>${el.experience }y</span><span class="flex items-center gap-1"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="lucide lucide-users h-4 w-4" aria-hidden="true">
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                        <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                        <circle cx="9" cy="7" r="4"></circle>
                                    </svg>${el.age}y</span></div>
                            <div class="flex items-center gap-1 mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"
                                    class="lucide lucide-star h-4 w-4 fill-yellow-400 text-yellow-400" aria-hidden="true">
                                    <path
                                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
                                    </path>
                                </svg><span class="text-black">3.6</span></div>
                        </div>
                        <div class="space-y-2 mb-4">
                            <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-phone h-4 w-4 flex-shrink-0 text-blue-500"
                                    aria-hidden="true">
                                    <path
                                        d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384">
                                    </path>
                                </svg><span class="truncate">${el.createdAt}</span></div>
                            <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-mail h-4 w-4 flex-shrink-0 text-green-500"
                                    aria-hidden="true">
                                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                </svg><span class="truncate">${el.gmail }</span></div>
                            <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-send h-4 w-4 flex-shrink-0 text-blue-400"
                                    aria-hidden="true">
                                    <path
                                        d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z">
                                    </path>
                                    <path d="m21.854 2.147-10.94 10.939"></path>
                                </svg>
                                <h1 class="truncate">@${el.username}</h1>
                            </div>
                            <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-linkedin h-4 w-4 flex-shrink-0 text-blue-600" aria-hidden="true">
                                    <path
                                        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
                                    </path>
                                    <rect width="4" height="12" x="2" y="9"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                                <h1 class="truncate">linkedin.com/in/glenda-marvin-corwin</h1>
                            </div>
                        </div>

                        <div class=" flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity  duration-200">
                            <button
                                class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium  transition-all disabled:pointer-events-none
                                 disabled:opacity-50  outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive
                                  border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input
                                 dark:hover:bg-input/50 h-8 rounded-md px-3 has-[&gt;svg]:px-2.5 flex-1 gap-2"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-pencil h-4 w-4" aria-hidden="true">
                                    <path
                                        d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z">
                                    </path>
                                    <path d="m15 5 4 4"></path>
                                </svg>Edit</button>
                                <button data-slot="button"
                                class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50  outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
                                 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background dark:bg-input/30 dark:border-input h-8 rounded-md px-3  flex-1 gap-2 text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-trash2 lucide-trash-2 h-4 w-4"
                                    aria-hidden="true">
                                    <path d="M10 11v6"></path>
                                    <path d="M14 11v6"></path>
                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                    <path d="M3 6h18"></path>
                                    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                </svg>Delete</button></div>
                    </div>
        `
       })
       
   }catch(err){
    console.log(err);
    
   } 
}
getData();

async function addTeacher(teachersobj) {
    try{
        await axios.post("https://69242f5d3ad095fb84730f49.mockapi.io/teachers", teachersobj, outermodel.classList.add("hidden"))
        getData();
    }catch(err){
        console.log(err);
        
    }
}

form.addEventListener("submit" , function(e){
    e.preventDefault();
    let teachersobj = {};
    teachersobj.name = form[0].value;
    teachersobj.age = form[1].value;
    teachersobj.experience = form[2].value;
    teachersobj.avatar = form[3].value;
    teachersobj.profession = form[4].value;
    teachersobj.linkedin = form[5].value;
    teachersobj.rating = form[6].value;
    teachersobj.gender = form[7].checked;

    console.log(teachersobj);
    addTeacher()

})