
const fromCurrency = document.getElementById("fromAmount");
const toCurrency = document.getElementById("toAmount");
const exchangeAmt = document.getElementById("amount");
const result = document.getElementById("result");
const form = document.forms["form"];


function currency(element){

    const url = 'https://free.currencyconverterapi.com/api/v5/currencies';

    fetch(url).then(response=>{
        return response.json();
    }).then(data=>{
        
        for(let currency in data.results){
            const option = document.createElement('option');
            option.value = currency;
            option.textContent= currency;
            element.appendChild(option);
        }
    
    });
}


fromCurrency.addEventListener('onload', currency(fromCurrency));
toCurrency.addEventListener('onload', currency(toCurrency));

form.addEventListener('submit',function(e){
    e.preventDefault();
      
    let query = `${fromCurrency.value}_${toCurrency.value}`;
      
    let url = `https://free.currencyconverterapi.com/api/v5/convert?q=${query}&compact=ultra`;

    fetch(url).then(response=>{
        return response.json();
    }).then(data=>{
        const calc = data[query];
        const amt = exchangeAmt.value * calc;
        
        result.textContent = (amt).toFixed(4);
    })


});

// This checks if the service worker api is valid on the web browser.
if(!navigator.serviceWorker){
    console.log("Service worker not supported");
  }
  
  // Service worker registration code
  navigator.serviceWorker.register('../sw.js').
  then(function(reg){
    console.log("Service worker registrtaion Successful");
  }).catch(function(error){
    console.log("Service worker registration unsuccessful", error);
  });