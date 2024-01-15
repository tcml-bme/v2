

fetch("data/funding.json")
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
          <img class="img-fluid funding-logos" src="assets/logos/${item.logo}" alt="">
        </a>
      `;
      outerDiv.appendChild(div);
    });

    items.appendChild(outerDiv);
  })
  .catch(error => console.error(error));


fetch("data/research.json")
  .then(response => response.json())
  .then(data => {
    const items = document.getElementById("research");
    const outerDiv = document.createElement("div");
    outerDiv.classList.add("row", "text-center", "text-lg-start");

    data.forEach((item, index) => {
      const imageDiv = document.createElement("div");
      const textDiv = document.createElement("div");
      const link = document.createElement("a");
      const img = document.createElement("img");
      const title = document.createElement("h3");
      const description = document.createElement("p");
      const viewProjectButton = document.createElement("a");

      imageDiv.classList.add("col-md-7", "my-4");

      link.href = `research/${item.assets}`;

      img.classList.add("img-fluid", "rounded", "mb-3", "mb-md-0");
      img.src = `assets/research/${item.assets}/${item.image}`;
      img.alt = "";

      title.textContent = item.title;

      description.textContent = item.description;

      viewProjectButton.classList.add("btn", "btn-primary");
      viewProjectButton.textContent = "View Project";
      viewProjectButton.href = `research/${item.assets}`;

      imageDiv.appendChild(link);
      link.appendChild(img);

      textDiv.classList.add("col-md-5", "my-4");
      textDiv.appendChild(title);
      textDiv.appendChild(description);
      textDiv.appendChild(viewProjectButton);

      if (index % 2 == 0) {
        outerDiv.appendChild(imageDiv);
        outerDiv.appendChild(textDiv);
      } else {
        outerDiv.appendChild(textDiv);
        outerDiv.appendChild(imageDiv);
      }
      
    });

    items.appendChild(outerDiv);
  })
  .catch(error => console.error(error));


  
fetch("data/banners.json")
.then(response => response.json())
.then(data => {
  const items = document.getElementById("carousel-inner");

  data.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("carousel-item");

    const img = document.createElement("img");
    img.classList.add("d-block", "w-100");
    img.src = `assets/banners/${item.image}`;

    div.appendChild(img);

    if (index == 0) {
      img.src = `assets/banners/mri_center_banner.png`;
      div.classList.add("active");
    } else {
      const caption = document.createElement("p");
      caption.classList.add("text-center");
      caption.innerHTML = `<b>${item.date}</b>: ${marked.parse(item.text)}`;
  
      div.appendChild(caption);
    }

    items.appendChild(div);
  });

  // items.appendChild(outerDiv);
})
.catch(error => console.error(error));

