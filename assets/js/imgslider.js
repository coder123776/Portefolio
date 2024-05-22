// Functie om te controleren of een element in het zicht van de gebruiker komt
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  var bool = 0;
  
  // Event listener voor scrollen van de pagina
  window.addEventListener("scroll", function() {
    var myImg = document.getElementById("myimg");
    if (isElementInViewport(myImg)) {
        if (bool == 0){
            bool = 1;
            setTimeout(() => {
                myImg.style.marginLeft = "0";
            }, 800);
        }
    }
  });
  