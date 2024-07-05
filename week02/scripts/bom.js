const appendbutton = document.querySelector("button");
const favoritechapt0er = document.querySelector("#favchap")
const unorderedlist = document.querySelector("#list")

const newlist = document.createElement("li")
const deletebutton = document.createElement("button")
deletebutton.textContent="❌"

newlist.textContent=favoritechapter.value
newlist.append(deletebutton)

unorderedlist.append(newlist)