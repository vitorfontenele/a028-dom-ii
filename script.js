let container = document.getElementById("container");

function adicionaItem(event){
    let novoItem = document.createElement("article");
    novoItem.classList.add("item");
    novoItem.setAttribute("onclick", "removeItem(event)");
    container.appendChild(novoItem);
}

function removeItem(event){
    container.removeChild(event.target);
}