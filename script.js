/*const header = document.querySelector('header');
const barHeight = 50; // replace with your bar height

function onScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop >= barHeight) {
    header.style.position = 'fixed';
    header.style.top = '0';
    header.style.left = '0';
    header.style.width = '100%';
    header.style.zIndex = '1000';
    header.style.backgroundColor = '#your-bar-color'; // replace with your bar color
  } else {
    header.style.position = 'static';
    header.style.backgroundColor = 'transparent';
  }
}

window.addEventListener('scroll', onScroll);
onScroll(); // initial scroll position
*/

/*document.addEventListener('DOMContentLoaded', function() {
    var i = 1;
    var stop = 4; // Počet prvkov
    setInterval(function(){
        if (i > stop) {
            return;
        }
        var element = document.querySelector('#len' + i++);
        if (element) {
            element.classList.toggle('bounce');
        }
    }, 500);
});


  // Získame tlačidlo a navigačný panel
var toggleBtn = document.getElementById('toggleBtn');
var sidebar = document.getElementById('sidebar');

// Pridáme event listener pre kliknutie na tlačidlo
toggleBtn.addEventListener('click', function() {
    // Ak je navigačný panel skrytý, zobrazíme ho, inak ho skryjeme
    if (sidebar.style.left === '-250px') {
        sidebar.style.left = '0';
    } else {
        sidebar.style.left = '-250px';
    }
});
*/