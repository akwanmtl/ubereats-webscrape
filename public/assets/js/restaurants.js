const listDiv = document.getElementById("restaurants-list");

listDiv.innerHTML = "";
let restaurantsList = JSON.parse(localStorage.getItem("restaurants"));

restaurantsList.forEach(restaurant =>{
    let li = document.createElement("li");
    li.innerHTML = `<a href="${restaurant.url}" targer="_blank">${restaurant.name}</a>`;
    listDiv.appendChild(li);
})