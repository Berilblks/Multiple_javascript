const acor = document.querySelectorAll('.acor');

acor.forEach((acor) => {
    const acorButton = acor.querySelector('.acorButton');
    acorButton.addEventListener('click', () => {                        //tıkladığımda artı eksş iconlarının değişmesi
        acor.querySelector('.minusIcon').classList.toggle('active');
        acor.querySelector('.plusIcon').classList.toggle('active');
        acor.querySelector('.iç').classList.toggle('active');          //tıkladığımda text in açılıp kapanması.
    });
});

