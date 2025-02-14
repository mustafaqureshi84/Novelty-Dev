// Load Navbar
fetch('src/js/navbar.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('navbar-placeholder').innerHTML = html;
  })
  .catch(error => console.error('Error loading navbar:', error));

// Load Footer
fetch('src/js/footer.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('footer-placeholder').innerHTML = html;
  })
  .catch(error => console.error('Error loading footer:', error));
