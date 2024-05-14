//GET
fetch("https://www.nodejs.sulla.hu/data")
.then(function (datas) {
    return datas.json();
})
.then(function(datas) {
    for (let i = 0; i < datas.length; i++) {
        document.getElementById("container").innerHTML +=
        `<div class="card" style="width: 21rem;">
        <div class="card-body">
          <h5 class="card-title">Név: ${datas[i].name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Hostname: ${datas[i].hostname}</h6>
          <p class="card-text">Helyszín: ${datas[i].location}</p>
          <p class="card-text">Ár: ${datas[i].price} Ft</p>
          <p class="card-text">Minimum éjszakák: ${datas[i].minimum_nights}</p>
        <button type="button">Törlés</button>
        <button type="button">Részletek</button>
        <button type="button">Módosítás</button>
        </div>
      </div>`
    }
})