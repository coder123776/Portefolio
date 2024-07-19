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

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Voorkom standaard form submit

    // Verkrijg de waarden van de invoervelden
    var name = document.getElementById('name').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    // Combineer de waarden in een enkele string
    var bodyContent = "Naam: " + name + "\nOnderwerp: " + subject + "\nBericht: " + message;

    // Zet de gecombineerde string in het verborgen body inputveld
    document.getElementById('body').value = bodyContent;

    // Verstuur het formulier
    this.submit();
});
