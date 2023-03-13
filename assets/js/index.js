function rewriteUrl() {
    var currentUrl = window.location.href = 'https://patryk-1998.github.io/index.html';
    var newUrl = currentUrl.replace('.html', 'https://patryk-1998.github.io'); 
    window.history.replaceState({}, null, newUrl); 
  }
  