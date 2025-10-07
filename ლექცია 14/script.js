const input = document.getElementById("itemInput")
const addBtn = document.getElementById("addBtn")
const list = document.getElementById("itemList")

let items = ["TODO:1","TODO:2","TODO:3"]

renderItems()

// Create
addBtn.addEventListener("click" ,() => {
    const value = input.value
    console.log(value)
    if(value) {
        items.push(value)
        input.value = ""
        renderItems()
    }
})

// Read + render

function renderItems () {

    console.log(items)
    list.innerHTML = ""
     items.forEach((item, index) => {
        const li = document.createElement('div')
        li.innerHTML = `
            <span>${item}</span>
            <button onclick="editItem(${index})">Edit</button>
            <button onclick="deleteItem(${index})">Delete</button>
        `
        list.appendChild(li)
     })
}


// edit/ Update

function editItem (index) {
    console.log("item has been edited", index)

    const newValue = prompt("Edit item:", items[index])

    if(newValue){
        items[index] = newValue
        renderItems()
    }
}

// Delete


function deleteItem(index) {
    console.log("item has been deleted", index)
    items.splice(index, 1)
    renderItems()
}





