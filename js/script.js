const addInput = document.querySelector("#addItem")
const addBtn = document.querySelector("#addBtn")
const list = document.querySelector("#list")

addBtn.addEventListener("click",(e) => {
    const div = document.createElement("div")
    const content = document.createElement("p")
    const removeBtn = document.createElement("button")

    //add o p com class list item
    div.classList.add("list-itens")
    content.textContent = addInput.value

    //add o botao com class remove
    removeBtn.classList.add("removeBtn")
    removeBtn.innerHTML = "Apagar"

    //usando o appendChild
    div.appendChild(content)
    div.appendChild(removeBtn)

    list.appendChild(div)
})


function clearBtn(button){

}
