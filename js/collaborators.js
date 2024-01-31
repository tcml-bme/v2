
fetch("https://tcml-bme.github.io/v2/data/collaborators.json")
.then(response => response.json())
.then(data => {
  const items = document.getElementById("collaborators");
  data.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("col-lg-6", "mb-4");
    div.innerHTML = `
    <div class="card h-100 border-0">
      <a href="${item.link}"><img class="card-img-top" src="https://tcml-bme.github.io/v2/assets/logos/${item.image}" alt=""></a>
      <div class="card-body">
        <h4 class="card-title">
          <a href="${item.link}">${item.name}</a>
        </h4>
        <p class="card-text">
          ${marked.parse(item.description)}
        </p>

      </div>
    </div>
    `;
    items.appendChild(div);
  });
})
.catch(error => console.error(error));
