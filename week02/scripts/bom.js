//Reference to the button
const button = document.querySelector('button');
//Reference to the ul
const unorderedlist = document.querySelector("#list");
//Referente to the input
let favoritechapter = document.querySelector("#favchap");


button.addEventListener('click', function(){
    if (favoritechapter.value.trim() !== ''){addScripture()}
})

function addScripture(){

    const deletebutton = document.createElement("button");
    deletebutton.textContent="❌";

    const newlist = document.createElement("li");
    newlist.textContent=favoritechapter.value;
    newlist.append(deletebutton);
    
    unorderedlist.append(newlist);

    favoritechapter.value = "";
    console.log("done");

    deletebutton.addEventListener("click", function(){
        unorderedlist.removeChild(newlist); 
        favoritechapter.focus()
    })
}