// register the service worker if available
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../sw.js').then(function (reg) {
        console.log('Successfully registered service worker', reg);
    }).catch(function (err) {
        console.warn('Error whilst registering service worker', err);
    });
}

window.addEventListener('online', function (e) {
    console.log("You are online");
    updateStatus('online');
}, false);

window.addEventListener('offline', function (e) {
    console.log("You are offline");
    updateStatus('offline');
}, false);

// check if the user is connected
if (navigator.onLine) {
    updateStatus('online');
    console.log("onStart: You are online");
} else {
    updateStatus('offline');
    console.log("onStart: You are offline");
}

function updateStatus(newStatus){
    var se=document.getElementById('status');
    if (newStatus==='online'){
        se.innerHTML= '<span style="color: green">'+ newStatus + '</span>';
    }else{
        se.innerHTML= '<span style="color: red  ">'+ newStatus + '</span>';
    }



}

