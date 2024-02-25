const addInput = document.querySelector("#addItem");
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#list");

let buttonGlobal;
let divGlobal;



addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  
  if(addInput.value === ""){
    alert("Digite uma tarefa válida")
  } else{
    const div = document.createElement("div");
    const content = document.createElement("p");
    const removeBtn = document.createElement("button");
  
    //add o p com class list item
    div.classList.add("list-itens");
    content.textContent = addInput.value;
  
    //add o botao com class remove
    removeBtn.classList.add("removeBtn");
    removeBtn.innerHTML = "Apagar";
  
    //usando o appendChild
    div.appendChild(content);
    div.appendChild(removeBtn);
  
    list.appendChild(div);
  
   
    addInput.value = "";

    removeBtn.addEventListener("click", () => {
      list.removeChild(div);
    });
  }
 


});
