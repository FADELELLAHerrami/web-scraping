const feedDisplay = document.querySelector("#feed");


fetch('http://localhost:2493/results')
    .then(response => {return response.json()})
    .then(data => {
        data.forEach(element => {
            let articleItem = `<h3>${element.title}</h3><a href="${element.url}">For More</a>`;
            feedDisplay.insertAdjacentHTML("beforeend",articleItem);
        });
    }).catch((err)=>console.log(err));