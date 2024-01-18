function getConfigValue(key) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "config.json", false);
    xhr.send();
    const config = JSON.parse(xhr.responseText);
    return config[key];
  }
  

fetch('https://tcml-bme.github.io/v2/navbar.html')
  .then(response => response.text())
  .then(data => {
      document.getElementById('navbar').innerHTML = data;
  })
  .catch(error => {
      console.error('Error:', error);
  });


  
fetch('https://tcml-bme.github.io/v2/footer.html')
.then(response => response.text())
.then(data => {
    document.getElementById('footer').innerHTML = data;
})
.catch(error => {
    console.error('Error:', error);
});

  
fetch('https://tcml-bme.github.io/v2/head.html')
.then(response => response.text())
.then(data => {
    document.getElementById('head').innerHTML = data;
})
.catch(error => {
    console.error('Error:', error);
});


fetch("https://tcml-bme.github.io/v2/data/research.json")
.then(response => response.json())
.then(data => {
    const researchNavbar = document.getElementById("ul-research-navbar");

    data.forEach((item, index) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.classList.add("dropdown-item");
        a.href = `https://tcml-bme.github.io/v2/research/${item.assets}`;
        a.innerHTML = item.title;

        // <li><a class="dropdown-item" href="#">Action</a></li>
        li.appendChild(a);
        researchNavbar.appendChild(li);
    });

    // divider
    const liDivider = document.createElement("li");
    const hr = document.createElement("hr");
    hr.classList.add("dropdown-divider");
    liDivider.appendChild(hr);
    researchNavbar.appendChild(liDivider);

    // collaborators
    const liCollaborators = document.createElement("li");
    const aCollaborators = document.createElement("a");
    aCollaborators.classList.add("dropdown-item");
    aCollaborators.href = `https://tcml-bme.github.io/v2/collaborators.html`;
    aCollaborators.innerHTML = "Collaborators";
    liCollaborators.appendChild(aCollaborators);
    researchNavbar.appendChild(liCollaborators);

    // undergraduate projects
    const liUndergraduateProjects = document.createElement("li");
    const aUndergraduateProjects = document.createElement("a");
    aUndergraduateProjects.classList.add("dropdown-item");
    aUndergraduateProjects.href = `https://tcml-bme.github.io/v2/undergraduate.html`;
    aUndergraduateProjects.innerHTML = "Undergraduate Projects";
    liUndergraduateProjects.appendChild(aUndergraduateProjects);
    researchNavbar.appendChild(liUndergraduateProjects);

})
.catch(error => {
    console.error('Error:', error);
});
