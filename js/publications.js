
fetch("data/journal.json")
  .then(response => response.json())
  .then(data => {
    const items = document.getElementById("journal");
    let currentYear = null;

    data.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("journal-item", "my-4");
        const year = item.date.substr(-4);
        var yearAsNumber = Number(year)

        if (yearAsNumber < 2016) {

        } else if (year !== currentYear) {
          currentYear = year;
          const h2 = document.createElement("h3");
          h2.id = year;
          h2.textContent = currentYear;
          items.appendChild(h2);
      } 

      const authorList = item.authors.join(", ");
      div.innerHTML = `
        ${authorList}.
        <a href="https://doi.org/${item.DOI}"><b>${item.title}</b></a>, 
        <i>${item.journal}</i>. ${item.misc}. ${item.date}.     
          `;
  
          items.appendChild(div);

      });

      document.getElementById("2016").textContent = "2016 and earlier";

  })
  .catch(error => console.error(error));


  
fetch("data/conference.json")
.then(response => response.json())
.then(data => {
  const items = document.getElementById("conference");
  let currentYear = null;

  data.forEach(item => {
      const div = document.createElement("div");
      div.classList.add("journal-item", "my-4");
      const year = item.date.substr(-4);
      var yearAsNumber = Number(year)

      if (yearAsNumber < 2016) {

      } else if (year !== currentYear) {
        currentYear = year;
        const h2 = document.createElement("h3");
        h2.id = year;
        h2.textContent = currentYear;
        items.appendChild(h2);
    } 

    const authorList = item.authors.join(", ");
    div.innerHTML = `
      ${authorList}.
      <b>${item.title}</b>.
      ${item.conference},
      held in ${item.location},
      ${item.date}.
      `;

        items.appendChild(div);

    });

    document.getElementById("2016").textContent = "2016 and earlier";
})
.catch(error => console.error(error));



fetch("data/abstracts.json")
.then(response => response.json())
.then(data => {
  const items = document.getElementById("abstracts");
  let currentYear = null;

  data.forEach(item => {
      const div = document.createElement("div");
      div.classList.add("journal-item", "my-4");
      const year = item.date.substr(-4);
      var yearAsNumber = Number(year)

      if (yearAsNumber < 2016) {

      } else if (year !== currentYear) {
        currentYear = year;
        const h2 = document.createElement("h3");
        h2.id = year;
        h2.textContent = currentYear;
        items.appendChild(h2);
    } 

    const authorList = item.authors.join(", ");
    div.innerHTML = `
      ${authorList}.
      <b>${item.title}</b>.
      ${item.conference},
      held in ${item.location},
      ${item.date}.
      `;

        items.appendChild(div);

    });

    document.getElementById("2016").textContent = "2016 and earlier";
})
.catch(error => console.error(error));
