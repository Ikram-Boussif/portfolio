//select elements
let btn = document.querySelector("#mode");
let textBtn = document.querySelector("#themText");

// if(localStorage.getItem('theme')) {
//     if(localStorage.getItem('theme') == 'sombre') {
//         modeSombre();
//     }
// }

btn.addEventListener('click',()=>{
     if(document.body.classList.contains('dark')) {
    //passer au mode clair
     document.body.className = '';
     textBtn.textContent = 'Dark mode';
     localStorage.setItem('theme','clair');
     }
     else {
        //passer au mode sombre
        modeSombre();
     }
});
function modeSombre() {
    document.body.className='dark';
    textBtn.textContent = 'Light mode';
    localStorage.setItem('theme','sombre')
}
if(localStorage.getItem('theme') == 'sombre') {
   // document.body.className='dark';
   modeSombre();
}
