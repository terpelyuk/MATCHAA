 
    const products = [
        { id: 1,  name: "Любов До Матчі",        tagline: "Зелена насолода матча.",        price: "1000,00₴", rating: "4/5" },
        { id: 2,  name: "Органічний Чай Матча",   tagline: "Яскраві натуральні тони.",      price: "900,00₴",  rating: "4/5" },
        { id: 3,  name: "Матча Ванільна Хмара",   tagline: "Вершково-ванільний смак.",      price: "1150,00₴", rating: "4/5" },
        { id: 4,  name: "Матча Енерджі Буст",     tagline: "Бадьорість протягом дня.",      price: "150,00₴",  rating: "4/5" },
        { id: 5,  name: "Класична Церемонія",     tagline: "Традиційний японський смак.",   price: "1200,00₴", rating: "5/5" },
        { id: 6,  name: "Матча Лате Преміум",     tagline: "Ніжний вершковий напій.",       price: "850,00₴",  rating: "4/5" },
        { id: 7,  name: "Ранкова Свіжість",       tagline: "Заряд на цілий день.",          price: "780,00₴",  rating: "4/5" },
        { id: 8,  name: "Матча Детокс",           tagline: "Очищення та відновлення.",      price: "950,00₴",  rating: "5/5" },
        { id: 9,  name: "Холодний Матча Брю",     tagline: "Освіжаючий холодний напій.",    price: "620,00₴",  rating: "4/5" },
        { id: 10, name: "Матча Преміум Пудра",    tagline: "Найвищий сорт для справжніх.", price: "1400,00₴", rating: "5/5" },
    ];
    const productsOnScreen = 4;
    if (window.innerWidth < 368) {
        productsOnScreen = 1;
    }
    
    let currentIndex = 0;
    const maxIndex = products.length - productsOnScreen;
 
    const track = document.getElementById('carouselTrack');
    const prev  = document.getElementById('prevBtn');
    const next  = document.getElementById('nextBtn');
 
    function buildCards() {
        products.forEach(function (p) {
            const imgSrc = 'images/slider-products/product-' + p.id + '.png';
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <p class="product-card-name">${p.name}</p>
                <p class="product-card-tagline">${p.tagline}</p>
                <div class="product-card-img-wrap">
                    <img src="${imgSrc}" alt="${p.name}"
                         onerror="this.src='images/matcha.png'; this.style.maxHeight='160px'">
                </div>
                <div class="product-card-footer">
                    <span class="product-card-rating">
                        <span class="star-icon">&#9733;</span>
                        ${p.rating}
                    </span>
                    <span class="product-card-price">${p.price}</span>
                </div>`;
            track.appendChild(card);
        });
    }
 
    function updateCarousel() {
        const firstCard = track.querySelector('.product-card');
        const gap = parseInt(getComputedStyle(track).gap || 0);
        const cardWidth = firstCard.getBoundingClientRect().width + gap;
        track.style.transform = 'translateX(-' + currentIndex * cardWidth + 'px)';

        prev.disabled = currentIndex === 0;
        next.disabled = currentIndex >= maxIndex;
    }
 
    prev.addEventListener('click', function () {
        if (currentIndex > 0) { currentIndex--; updateCarousel(); }
    });
 
    next.addEventListener('click', function () {
        if (currentIndex < maxIndex) { currentIndex++; updateCarousel(); }
    });
 
    buildCards();
    updateCarousel();







    document.addEventListener("DOMContentLoaded", () => {

    const title = document.getElementById("matchaTitle");
    const text = title.textContent;

    title.textContent = "";

    [...text].forEach((letter, index) => {

        const span = document.createElement("span");

        span.textContent = letter;
        span.style.opacity = "0";
        span.style.transition = "0.3s";

        title.appendChild(span);

        setTimeout(() => {
            span.style.opacity = "1";
        }, index * 500);

    });

});







const badge = document.getElementById("mainBadge");

badge.addEventListener("mouseenter", () => {
    badge.style.transform = "rotate(180deg)";
});

badge.addEventListener("mouseleave", () => {
    badge.style.transform = "rotate(0deg)";
});





const features = document.querySelectorAll(".feature");

features.forEach(feature => {

    feature.addEventListener("mouseenter", () => {
        feature.style.transform = "scale(1.1)";
    });

    feature.addEventListener("mouseleave", () => {
        feature.style.transform = "scale(1)";
    });

});







// Плавна навігація по меню
const menuLinks = document.querySelectorAll('nav a');

menuLinks.forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if(targetSection){

            const headerHeight =
                document.querySelector('header').offsetHeight;

            const targetPosition =
                targetSection.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

        }

    });

});


















const sections = document.querySelectorAll("section[id], footer[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if(window.scrollY >= sectionTop &&
           window.scrollY < sectionTop + sectionHeight){

            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});
window.dispatchEvent(new Event("scroll"));











const burger = document.querySelector(".burger-menu");
const mobileMenu = document.querySelector(".mobile-menu");

if(burger && mobileMenu){

    burger.addEventListener("click", function(){

        mobileMenu.classList.toggle("active");

    });

}