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
})