const acor = document.querySelectorAll('.acor');

const bars = document.querySelector('.fa-bars');
const sidebar = document.querySelector('.sidebar');
const close = document.querySelector('.fa-xmark');

bars.addEventListener('click',()=>{
    sidebar.classList.toggle('showSidebar');
});

close.addEventListener('click',()=>{
    sidebar.classList.remove('showSidebar');
})

acor.forEach((acor) => {
    const acorButton = acor.querySelector('.acorButton');
    acorButton.addEventListener('click', () => {                        //tıkladığımda artı eksi iconlarının değişmesi
        acor.querySelector('.minusIcon').classList.toggle('active');
        acor.querySelector('.plusIcon').classList.toggle('active');
        acor.querySelector('.iç').classList.toggle('active');          //tıkladığımda text in açılıp kapanması.
    });
});

