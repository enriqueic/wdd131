const appendbutton = document.querySelector("#append");
const favoritechapter = document.querySelector("#favchap")
const unorderedlist = document.querySelector("#list")

const newlist = document.createElement("li")
const deletebutton = document.createElement("button")
deletebutton.textContent="❌"

newlist.textContent=favoritechapter.value
newlist.append(deletebutton)

appendbutton.addEventListener("click", function(){unorderedlist.append(newlist); console.log("done")});

console.log("hi");