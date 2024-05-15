//GET 
fetch("https://www.nodejs.sulla.hu/data")
.then(function (datas) {
    return datas.json();
})
.then(function(datas) {
    let container = document.getElementById("container");
    for (let i = 0; i < datas.length; i++) {
        let card = document.createElement("div");
        card.className = "card";
        card.style.width = "calc(33.33% - 20px)";
        card.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">Név: ${datas[i].name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Hostname: ${datas[i].hostname}</h6>
                <p class="card-text">Helyszín: ${datas[i].location}</p>
                <p class="card-text">Ár: ${datas[i].price} Ft</p>
                <p class="card-text">Minimum éjszakák: ${datas[i].minimum_nights}</p>
                <button type="button">Törlés</button>
                <button type="button">Részletek</button>
                <button type="button">Módosítás</button>
            </div>`;
        container.appendChild(card);
    }
})

//POST
function plusszSzallas() {
    const name =  document.getElementById("name").value;
    const price =  document.getElementById("price").value;
    const minimum_nights = document.getElementById("minimum_nights").value;
    const host_name =  document.getElementById("host_name").value;
    const location = document.getElementById("location").value;
    
    const ujszallas = {
      name: name,
      price: price,
      minimum_nights: minimum_nights,
      host_name: host_name,
      location: location
    };
    fetch("https://www.nodejs.sulla.hu/data/", {
      method: "POST",
      body: JSON.stringify(bodyForPost),
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(ujszallas),
  })
}