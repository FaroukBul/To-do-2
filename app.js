let ids = []
document.addEventListener("DOMContentLoaded", () =>{
    let addBtn = document.getElementById("add-btn")
    addBtn.addEventListener("click", ()=>{
        let newTodo = new Todo
        newTodo.createCard()
    })

})

class Todo {

    constructor(){
        this.ids = ids
        this.container = document.getElementsByClassName("cards-container")[0]
        this.newCard = null
        this.textContainer = null
        this.btnContainer = null
        this.text = document.getElementById("text").value
    }

    createCard(){
        this.newCard = this.createDiv()
        this.textContainer = this.createDiv()
        this.textContainer.innerHTML = this.text
        this.newCard.classList.add("card")
        this.newCard.setAttribute("id", this.generateId())
        this.newCard.appendChild(this.textContainer)
        this.container.appendChild(this.newCard)
    }

    createDiv(){
        return document.createElement("div")
    }

    generateId(){
        let id = 0
        if (this.ids.length > 0){
            id = this.ids[this.ids.length - 1] + 1
        }
        this.ids.push(id)
        return id
    }
}