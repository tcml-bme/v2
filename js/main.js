

fetch("https://tcml-bme.github.io/v2/data/funding.json")
  .then(response => response.json())
  .then(data => {
    const items = document.getElementById("funding");
    const outerDiv = document.createElement("div");
    outerDiv.classList.add("row", "text-center", "text-lg-start");

    data.forEach(item => {
      const div = document.createElement("div");
      div.classList.add("col-lg-4", "col-md-4", "col-4", "text-center");
      div.innerHTML = `
        <a href="${item.website}" class="d-block mb-4 h-100">
          <img class="img-fluid funding-logos" src="/assets/logos/${item.logo}" alt="${item.name}">
        </a>
      `;
      outerDiv.appendChild(div);
    });

    items.appendChild(outerDiv);
  })
  .catch(error => console.error(error));

  
fetch("https://tcml-bme.github.io/v2/data/banners.json")
.then(response => response.json())
.then(data => {
  const items = document.getElementById("carousel-inner");

  data.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("carousel-item");

    const img = document.createElement("img");
    img.classList.add("d-block", "w-100");
    img.src = `/assets/banners/${item.image}`;

    div.appendChild(img);

    if (index == 0) {
      img.src = `https://tcml-bme.github.io/v2/assets/banners/mri_center_banner.png`;
      img.alt = "Welcome to the Technion Computational MRI Research Lab";
      div.classList.add("active");
    } else {
      const caption = document.createElement("p");
      caption.classList.add("text-center");
      caption.innerHTML = `<b>${item.date}</b>: ${marked.parse(item.text)}`;
      img.alt = item.text;
  
      div.appendChild(caption);
    }

    items.appendChild(div);
  });

  // items.appendChild(outerDiv);
})
.catch(error => console.error(error));



fetch('/research.html')
.then(response => response.text())
.then(data => {
    document.getElementById('research').innerHTML += data;
})
.catch(error => {
    console.error('Error:', error);
});
