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
        this.textContainer.classList.add("text-container")
        this.done()
        this.newCard.appendChild(this.textContainer)
    }

    btns(){
        this.btnContainer = this.createDiv()
        this.btnContainer.appendChild(this.deleteBtn())
        this.btnContainer.classList.add("btn-container")
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

    done(){
        this.textContainer.addEventListener("click", ()=>{
            this.changeColors(this.newCard)
        })
    }

    deleteBtn(){
        let btn = document.createElement("button")
        btn.innerHTML = "done"
        btn.addEventListener("click", ()=>{this.eraseToDo(this.newCard)})
        btn.classList.add("delete-btn")
        return btn
    }

    changeColors(toDo){
        if(toDo.classList.contains("done")){
            toDo.classList.remove("done")
        } else {
            toDo.classList.add("done")
        }
    }

    eraseToDo(todoCard){
        todoCard.remove()
    }


}