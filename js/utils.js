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
