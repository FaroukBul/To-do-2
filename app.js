document.addEventListener("DOMContentLoaded", () =>{
    let addBtn = document.getElementById("add-btn")
    addBtn.addEventListener("click", ()=>{
        let newTodo = new Todo
        newTodo.createCard()
    })
})

class Todo {

    constructor(){
        this.container = document.getElementsByClassName("cards-container")[0]
        this.newCard = null
        this.textContainer = null
        this.dateContainer = null
        this.btnContainer = null
        this.text = document.getElementById("text").value
        this.date = document.getElementById("set-date").value.toString()
    }

    createCard(){
        this.newCard = this.createDiv()
        this.textContainer = this.createDiv()
        this.dateContainer = this.createDiv()
        this.textContainer.innerHTML = this.text
        this.dateContainer.innerHTML = this.date
        this.newCard.appendChild(this.textContainer)
        this.newCard.appendChild(this.dateContainer)
        this.container.appendChild(this.newCard)
    }

    createDiv(){
        return document.createElement("div")
    }
}