// nav bar//
const toggler = document.getElementById('toggler');
const navigation = document.getElementById('navigation');

toggler.addEventListener('click',function(){
    navigation.classList.toggle('nav_toggle');
    
});
const topNav = document.querySelector(".top_nav") //get reference

window.addEventListener('scroll', function () {
    topNav.classList.toggle('sticy', window.scrollY > 100);

});




// project section
window.addEventListener('scroll', function () {
 
               
    if (window.scrollY > 100) {
           //  for project
           const completeProject = document.getElementById('completeProject');
        let count1 = 0;
        const project = setInterval(fproject, .0);
        function fproject() {
            count1++;
            completeProject.innerHTML = count1;
            if (count1 == 200) {
                clearInterval(project);
                
            };
        };
        // for MailsSents
        const MailsSents = document.getElementById('MailsSents');
        let count2 = 0;
        const misles = setInterval(fmilsSents, .0);
        function fmilsSents() {
            count2++;
            MailsSents.innerHTML = count2;
            if (count2 == 700) {
                clearInterval(misles);
               
            };
        };
        // for coffe
        const CoffeeTakens = document.getElementById('CoffeeTakens');
        let count3 = 0;
        const coffe = setInterval(fcoffe, .0);
        function fcoffe() {
            count3++;
            CoffeeTakens.innerHTML = count3;
            if (count3 == 1000) {
                clearInterval(coffe);
               
            };
        };

        // for jokes
        const JokesTold = document.getElementById('JokesTold');
        let count4 = 0;
        const jokes = this.setInterval(fjokes, .0);
        function fjokes(){
            count4++;
            JokesTold.innerHTML = count4;
            if(count4 == 2000){
                clearInterval(jokes);
            }
        }
    }

});
