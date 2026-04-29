document.addEventListener('DOMContentLoaded', () => {
    
    // Scroll Reveal (Aşağı kaydırdıkça belirme)
    const reveals = document.querySelectorAll('.reveal');
    
    const handleScroll = () => {
        reveals.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < window.innerHeight - 100) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // İlk yüklemede çalıştır

    console.log("TKDF Hazırlık Modu: Aktif.");
});
