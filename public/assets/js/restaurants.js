const listDiv = document.getElementById("restaurants-list");

listDiv.innerHTML = "";
let restaurantsList = JSON.parse(localStorage.getItem("restaurants"));

restaurantsList.forEach((restaurant,index) =>{
    let colour = '';
    if(index %2 == 0) colour = 'list-group-item-light';
    else colour = 'list-group-item-secondary';
    let li = `<a href="${restaurant.url}" target="_blank" class="list-group-item list-group-item-action col-sm-4 ${colour}">${restaurant.name}</a>`;
    listDiv.innerHTML += li;
})