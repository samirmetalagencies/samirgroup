document.getElementById("catalogueBtn").addEventListener("click", function() {
    window.open("https://drive.google.com/file/d/1DBaTebbTqqjZhnFlC67KEnmZ0jTaUbaT/view?usp=drivesdk", "_blank");
});

document.getElementById("whatsappBtn").addEventListener("click", function(){

var phone = "+919384050357";

var message = "Hello, I would like to know more about your products.";

var whatsappApp = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

window.location.href = whatsappApp;

});