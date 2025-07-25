const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');
const kelvin = document.getElementById('kelvin');

const bars = document.querySelector('.fa-bars');
const sidebar = document.querySelector('.sidebar');
const close = document.querySelector('.fa-xmark');

bars.addEventListener('click',()=>{
    sidebar.classList.toggle('showSidebar');
});

close.addEventListener('click',()=>{
    sidebar.classList.remove('showSidebar');
});

function calculateTemp(event){                             //Fonksiyon, event adlı parametre alır. Bu event, hangi input'a dokunulduğunu, ne yazıldığını yakalamaya yarar.

    const currentValue = Number(event.target.value);      // yazılan değeri sayıya çevirir.   

    switch(event.target.name){
        case 'celsius':
                kelvin.value = (currentValue + 273.32).toFixed(2);
                fahrenheit.value = (currentValue * 1.8 + 32).toFixed(2);
            break;
        case 'fahrenheit':
                celsius.value = ((currentValue - 32) / 1.8).toFixed(2);
                kelvin.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2);
            break;
        case 'kelvin':
                celsius.value = (currentValue - 273.32).toFixed(2);
                fahrenheit.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
            break;  
        default:
            break;  
    }
}

