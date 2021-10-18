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
        this.id = null
        this.container = document.getElementsByClassName("cards-container")[0]
        this.newCard = null
        this.textContainer = null
        this.btnContainer = null
        this.text = document.getElementById("text").value
    }

    createCard(){
        this.newCard = this.createDiv()
        this.newCard.setAttribute("id", this.generateId())
        this.newCard.classList.add("card")
        this.getText()
        this.btns()
        this.container.appendChild(this.newCard)
    }

    getText(){
        this.textContainer = this.createDiv()
        this.textContainer.innerHTML = this.text
        this.newCard.appendChild(this.textContainer)
    }

    btns(){
        this.btnContainer = this.createDiv()
        this.btnContainer.appendChild(this.deleteBtn())
        this.newCard.appendChild(this.btnContainer)
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
        this.id = id
        return id
    }

    deleteBtn(){
        let btn = document.createElement("button")
        btn.addEventListener("click", ()=>{this.eraseToDo(this.newCard)})
        return btn
    }

    eraseToDo(todoCard){
        todoCard.remove()
    }


}