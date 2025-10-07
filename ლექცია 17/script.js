// DOM ელემენტების მიღება HTML-დან
const form = document.getElementById("todoForm")         // Todo ფორმის ელემენტი
const input = document.getElementById("taskInput")       // ტექსტის შეყვანის ველი
const list = document.getElementById("taskList")         // დავალებების სია
const filters = document.querySelector(".filters")      // ფილტრების კონტეინერი

/**
 * ფუნქცია რომელიც ინახავს დავალებების სიას localStorage-ში
 * ეს უზრუნველყოფს მონაცემების შენარჩუნებას გვერდის განახლების შემდეგ
 */
function saveDom() {
    localStorage.setItem("task_html", list.innerHTML)
}

/**
 * ფუნქცია რომელიც ტვირთავს შენახულ დავალებებს localStorage-დან
 * თუ არაფერია შენახული, ცარიელ სტრინგს აბრუნებს
 */
function loadDom() {
    list.innerHTML = localStorage.getItem("task_html") || ""
}

// გვერდის ჩატვირთვისას ტვირთავს შენახულ დავალებებს
loadDom()

// ფორმის submit ღონისძიების მსმენელი (ახალი დავალების დამატებისთვის)
form.addEventListener("submit" ,(e) => {
    e.preventDefault()  // ფორმის ნაგულისხმევი ქმედების თავიდან აცილება
    const text = input.value  // მომხმარებლის მიერ შეყვანილი ტექსტი
    if(!text) return  // თუ ტექსტი ცარიელია, ფუნქცია წყვეტს მუშაობას

    // ახალი li ელემენტის შექმნა დავალებისთვის
    const li = document.createElement("li")
    // CSS კლასების დამატება Tailwind CSS-ის გამოყენებით
    li.className = "flex gap-4 border p-4 rounded-md min-w-[264px] justify-between items-center task" 

    // დავალების HTML შიგთავსის შექმნა
    li.innerHTML = ` 
        <button  class="toggle" aria-label="Mark completed" name="check mark" > ✅ </button>
        <span class="text element title">${text}</span>
        <div class="flex gap-4">
            <button class="editBtn cursor-pointer" aria-label="Edit">✏️ </button>
            <button class="deleteBtn cursor-pointer" aria-label="Delete">🗑️ </button>
        </div>
    `
    list.appendChild(li)  // ახალი დავალების სიაში დამატება
    input.value = ""      // ინფუთის ველის გასუფთავება
    saveDom()             // ცვლილებების შენახვა localStorage-ში
})

// დავალებების სიის click ღონისძიების მსმენელი (Event Delegation-ის გამოყენებით)
list.addEventListener("click", (e) => {
    // უახლოესი li ელემენტის პოვნა task კლასით
    const li = e.target.closest("li.task")
    
    // დავალების წაშლის ღილაკზე დაწკაპუნება
    if(e.target.classList.contains("deleteBtn")) {
        li.remove()  // ელემენტის წაშლა DOM-დან
        saveDom()    // ცვლილებების შენახვა
    }
    
    // დავალების რედაქტირების ღილაკზე დაწკაპუნება
    if(e.target.classList.contains("editBtn")) {
        const span = li.querySelector(".title")  // დავალების ტექსტის ელემენტი
        // მომხმარებლისგან ახალი ტექსტის მოთხოვნა prompt-ის გამოყენებით
        const next = prompt("edit task:", span.textContent)
        // თუ მომხმარებელმა შეიყვანა ახალი ტექსტი და ის განსხვავებულია
        if (next !== null && next !== span.textContent) {
            console.log(next)
            span.textContent = next  // ტექსტის განახლება
            saveDom()                // ცვლილებების შენახვა
        }
    }

    // დავალების დასრულების ღილაკზე დაწკაპუნება
    if(e.target.classList.contains("toggle")) {
        // "completed" კლასის ჩართვა/გამორთვა
        li.classList.toggle("completed" , e.target.checked)
        saveDom()  // ცვლილებების შენახვა
    }
})


// ფილტრების ღილაკების click ღონისძიების მსმენელი
filters.addEventListener("click", (e) => {
    // უახლოესი button ელემენტის პოვნა data-filter ატრიბუტით
    const btn = e.target.closest("button[data-filter]")
    
    // ყველა ფილტრის ღილაკისთვის aria-pressed ატრიბუტის false-ზე დაყენება
    filters.querySelectorAll("button").forEach(b =>b.setAttribute("aria-pressed", "false"))
    // მიმდინარე ღილაკისთვის aria-pressed ატრიბუტის true-ზე დაყენება
    btn.setAttribute("aria-pressed", "true")
    
    // ფილტრის რეჟიმის მიღება data-filter ატრიბუტიდან
    const mode = btn.dataset.filter
    
    // ყველა დავალების გადარბენა და ფილტრის გამოყენება
    for (const li of list.children) {
        // ამოწმებს არის თუ არა დავალება დასრულებული
        const done = li.classList.contains("completed")
        
        // დავალების ჩვენების/დამალვის ლოგიკა ფილტრის მიხედვით:
        // - "all": ყველა დავალება ჩანს
        // - "active": მხოლოდ არადასრულებული დავალებები ჩანს
        // - "completed": მხოლოდ დასრულებული დავალებები ჩანს
        li.style.display = 
        mode === "all" ? "" : 
        mode === "active" ? (done ? "none" : ""):
        mode === "completed" ? (done ? "" : "none"): ""
    }
})