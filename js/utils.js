function getConfigValue(key) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "config.json", false);
    xhr.send();
    const config = JSON.parse(xhr.responseText);
    return config[key];
  }
  

fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
      document.getElementById('navbar').innerHTML = data;
  })
  .catch(error => {
      console.error('Error:', error);
  });


  
fetch('footer.html')
.then(response => response.text())
.then(data => {
    document.getElementById('footer').innerHTML = data;
})
.catch(error => {
    console.error('Error:', error);
});

  
fetch('head.html')
.then(response => response.text())
.then(data => {
    document.getElementById('head').innerHTML = data;
})
.catch(error => {
    console.error('Error:', error);
});

