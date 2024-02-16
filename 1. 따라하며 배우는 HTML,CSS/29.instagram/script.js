//Elements
const toggleThemeBtn = document.querySelector('.header_theme-button');

//Toggle theme button
toggleThemeBtn.addEventListener('click', () => { 

    //Toogle root class
    document.documentElement.classList.toggle('darkTheme'); 

});