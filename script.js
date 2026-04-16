function openWhatsapp() {
    const phone = "919384050357";
    const message = "Hello, I would like to know more about your products.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}

document.getElementById("whatsappBtn").addEventListener("click", function(e){
    e.preventDefault();
    openWhatsapp();
});

document.getElementById("floatingWhatsapp").addEventListener("click", function(e){
    e.preventDefault();
    openWhatsapp();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        const target = document.querySelector(this.getAttribute("href"));
        if(target){
            e.preventDefault();
            target.scrollIntoView({
                behavior:"smooth"
            });
        }
    });
});