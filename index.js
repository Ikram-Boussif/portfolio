//select elements
let btn = document.querySelector("#mode");
//let textBtn = document.querySelector("#themText");
let iconTheme = document.querySelector("#iconTheme");
const cards = document.querySelectorAll('.experience-card');
const toggleBtnLg = document.getElementById('toggleLang');


cards.forEach(card => {
  const toggleBtn = card.querySelector('.toggle-btn');
  const cardBody = card.querySelector('.card-body');

  toggleBtn.addEventListener('click', () => {
    cardBody.classList.toggle('active');
    toggleBtn.textContent = cardBody.classList.contains('active') ? '−' : '+';
  });
});

let currentLang = 'en'; // default displayed language

function updateLanguageDisplay() {
  const elements = document.querySelectorAll('[data-lang]');
  elements.forEach(el => {
    el.classList.remove('visible');
    if (el.getAttribute('data-lang') === currentLang) {
      el.classList.add('visible');
    }
  });

// Update the button text
  toggleBtnLg.textContent = currentLang === 'en' ? 'FR' : 'EN';
}

function switchLanguage() {
  currentLang = currentLang === 'en' ? 'fr' : 'en';
  updateLanguageDisplay();
}

toggleBtnLg.addEventListener('click', switchLanguage);
updateLanguageDisplay(); // Call this once on page load

btn.addEventListener('click', () => {
  if (document.body.classList.contains('dark')) {
    //passer au mode clair
    document.body.className = '';
    // textBtn.textContent = 'Dark mode';
    localStorage.setItem('theme', 'clair');
    iconTheme.classList.remove("fa-sun");
    iconTheme.classList.add("fa-moon");
  }
  else {
    //passer au mode sombre
    modeSombre();
  }
});
function modeSombre() {
  document.body.className = 'dark';
  //textBtn.textContent = 'Light mode';
  iconTheme.classList.remove("fa-moon");
  iconTheme.classList.add("fa-sun");
  localStorage.setItem('theme', 'sombre')
}
if (localStorage.getItem('theme') == 'sombre') {
  // document.body.className='dark';
  modeSombre();
}
