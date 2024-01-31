
fetch("https://tcml-bme.github.io/v2/data/people.json")
.then(response => response.json())
.then(data => {
  const items = document.getElementById("people");
  
  data.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("col-xl-4", "col-md-6", "mb-4", "people-column");

    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "border-0");

    const img = document.createElement("img");
    img.classList.add("card-img-top", "rounded-circle", "people-photos");
    img.src = `https://tcml-bme.github.io/v2/assets/people/${item.photo}`;

    const cardBodyDiv = document.createElement("div");
    cardBodyDiv.classList.add("card-body", "text-center");

    const nameHeader = document.createElement("h5");
    nameHeader.classList.add("card-title", "mb-0");
    nameHeader.textContent = item.name;

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("card-text", "text-black-50");
    titleDiv.textContent = item.title;

    cardDiv.appendChild(img); 
    cardBodyDiv.appendChild(nameHeader);
    cardBodyDiv.appendChild(titleDiv);

    if (item.links) {
      const linksDiv = document.createElement("div");
      linksDiv.classList.add("card-links");

      if (item.links.orcid) {
        const orcidLink = document.createElement("a");
        const orcidIcon = document.createElement("i");
  
        orcidIcon.classList.add("ai", "ai-orcid", "ai-2x");
        orcidLink.href = item.links.orcid;

        orcidLink.appendChild(orcidIcon);
        linksDiv.appendChild(orcidLink);  
      }

      if (item.links.google_scholar) {
        const googleScholarLink = document.createElement("a");
        const googleScholarIcon = document.createElement("i");
  
        googleScholarIcon.classList.add("ai", "ai-google-scholar", "ai-2x");
        googleScholarLink.href = item.links.google_scholar;

        googleScholarLink.appendChild(googleScholarIcon);
        linksDiv.appendChild(googleScholarLink);  
      }

      if (item.links.github) {
      // <i class="fa-brands fa-linkedin"></i>
        const githubLink = document.createElement("a");
        const githubIcon = document.createElement("i");

        githubIcon.classList.add("fa-brands", "fa-github", "fa-2x");
        githubLink.href = item.links.github;

        githubLink.appendChild(githubIcon);
        linksDiv.appendChild(githubLink);
      }

      if (item.links.linked_in) {
        // <i class="fa-brands fa-square-github"></i>
        const linkedInLink = document.createElement("a");
        const linkedInIcon = document.createElement("i");

        linkedInIcon.classList.add("fa-brands", "fa-linkedin", "fa-2x");
        linkedInLink.href = item.links.linked_in;

        linkedInLink.appendChild(linkedInIcon);
        linksDiv.appendChild(linkedInLink);
      }

      cardBodyDiv.appendChild(linksDiv);
    }





    cardDiv.appendChild(cardBodyDiv); 

    div.appendChild(cardDiv); 
    items.appendChild(div);
  });
})
.catch(error => console.error(error));


fetch("https://tcml-bme.github.io/v2/data/alumni.json")
.then(response => response.json())
.then(data => {
  const items = document.getElementById("alumni");
  
  data.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("col-xl-2", "col-md-6", "mb-4", "alumni-column"); // Changed to 'col-xl-2'

    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "border-0");

    const img = document.createElement("img");
    img.classList.add("card-img-top", "rounded-circle", "alumni-photos");
    img.src = `https://tcml-bme.github.io/v2/assets/people/${item.photo}`;

    const cardBodyDiv = document.createElement("div");
    cardBodyDiv.classList.add("card-body", "text-center");

    const nameHeader = document.createElement("h5");
    nameHeader.classList.add("card-title", "mb-0");
    nameHeader.textContent = `${item.name}, ${item.degree}`;

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("card-text", "text-muted", "small");
    titleDiv.textContent = item.position;

    cardDiv.appendChild(img); 
    cardBodyDiv.appendChild(nameHeader);
    cardBodyDiv.appendChild(titleDiv);

    cardDiv.appendChild(cardBodyDiv); 

    div.appendChild(cardDiv); 
    items.appendChild(div);
  });
})
.catch(error => console.error(error));