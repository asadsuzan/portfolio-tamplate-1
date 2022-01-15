
const toggler = document.getElementById('toggler');
const navigation = document.getElementById('navigation');

toggler.addEventListener('click',function(){
    navigation.classList.toggle('nav_toggle');
    console.log(1);
})