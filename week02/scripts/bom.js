console.log("hi");

const appendbutton = document.querySelector("#append");

console.log(appendbutton.textContent)

const favoritechapter = document.querySelector("#favchap");
const unorderedlist = document.querySelector("#list");
appendbutton.addEventListener('click', addScripture());

let deletebutton = document.createElement("button");
deletebutton.textContent="❌";

function addScripture(){
    if (favoritechapter.trim.value != null){
        let newlist = document.createElement("li");
        newlist.textContent=favoritechapter.value
        newlist.append(deletebutton);
        console.log("done");
    }
}

