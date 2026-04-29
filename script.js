// Sayfa yüklendiğinde çalıştır
document.addEventListener('DOMContentLoaded', () => {

    // Kaydırma sırasında elemanları gösteren fonksiyon
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150; // Eleman ne kadar yaklaştığında görünsün

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }
        }
    }

    // İlk yüklemede ve kaydırma yapıldığında kontrol et
    window.addEventListener("scroll", reveal);
    reveal(); // Sayfa açıldığında görünür olanları hemen aktif et

    console.log("TKDF Web Arayüzü Başarıyla Yüklendi!");
});