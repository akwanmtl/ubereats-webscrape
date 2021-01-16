const submitBtn = document.getElementById("address");

submitBtn.addEventListener("submit", (e) =>{
    e.preventDefault();

    const addressText = document.getElementById("address-text").value;
    const postObj = {
        address: addressText
    }
    document.getElementById('main').setAttribute('class','hide');
    document.getElementById('load').removeAttribute('class')
    fetch('/api/scrape', {
        method: "POST",
        headers: {
            "Accept" : "application/json",
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(postObj)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        localStorage.setItem('restaurants', JSON.stringify(data));
        window.location.replace("/restaurants");
    })
    
});