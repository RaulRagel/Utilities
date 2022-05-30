
var listElement;
var defaultItems;

window.onload = function(){

    //get list
    listElement = document.querySelector("#filtered-list");

    //get default item list
    var nodeList = listElement.querySelectorAll("li");

    defaultItems = Array.from(nodeList).map(
        item => item.innerText
    );

    //add listener to the filter and link them to his lists
    document.querySelector("#filter").addEventListener('input', function(){
        
        var filter = document.querySelector("#filter").value;
        filterList(filter);
    }, false);
}

function filterList(filter){
    
    var filteredItems = defaultItems.filter(item => item.toUpperCase().includes(filter.toUpperCase()));
    
    //update list element with the filtered list
    updateList(filteredItems);
}

function updateList(filteredItems){

    listElement.innerHTML = '';

    filteredItems.forEach(function(item){

        var li = document.createElement("li");
        li.innerText = item;

        listElement.appendChild(li);
    })
}