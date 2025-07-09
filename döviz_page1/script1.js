const secFirst = document.getElementById('secFirst');
const secsecond = document.getElementById('secsecond');
const number = document.getElementById('number');
const equal = document.getElementById('equal');
const exchangeRate = document.getElementById('exchangeRate');

updateRate();           // sayfa yüklendiğinde otomatik olarak gösterir.

function updateRate() {
    fetch(
        `https://v6.exchangerate-api.com/v6/7894106f1ac1f61e7cf4ee02/latest/${secFirst.value}`
    )
        .then((res) => res.json())            //API'den gelen cevap JSON formatına dönüştürür.
        .then((data) => {                     //JSON verisini alır.
            console.log(data);
            const rate = data.conversion_rates[secsecond.value];     // APIden gelen verilerden hedefi seçer.

            exchangeRate.textContent = `1 ${secFirst.value} = ${rate} ${secsecond.value}`;   // seçilen ikidöviz arasındaki kuru gösterir.
            equal.textContent = (number.value * rate).toFixed(2);
        });
}

secFirst.addEventListener('change', updateRate);   // ilk döviz türünü değiştirildiğinde updaterate tekrar çağrılır.
secsecond.addEventListener('change', updateRate);  // ikinci döviz türünü değiştirldiğinde güncellenir.
number.addEventListener('input', updateRate);      // miktar değiştirildiğinde tekrar hesaplanır.



