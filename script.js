// Konfiguracja mapy Google
function initMap() {
    // Współrzędne (np. Warszawa)
    const location = { lat: 52.2297, lng: 21.0122 };
    
    const darkMapStyle = [
        { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
        {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
        },
        {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#38414e" }],
        },
        {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#212a37" }],
        },
        {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#9ca5b3" }],
        },
        {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#17263c" }],
        },
    ];

    try {
        const mapElement = document.getElementById("map");
        
        if (mapElement) {
            const map = new google.maps.Map(mapElement, {
                zoom: 14,
                center: location,
                styles: darkMapStyle,
                disableDefaultUI: true,
                zoomControl: true
            });

            new google.maps.Marker({
                position: location,
                map: map,
                title: "THE YARD"
            });
        }
    } catch (error) {
        console.log("Oczekiwanie na klucz API Maps.");
    }
}

const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li a');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
});


navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navLinks.classList.remove('active');
    });
});


window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = "1rem 5%";
        navbar.style.background = "rgba(15, 15, 15, 1)";
    } else {
        navbar.style.padding = "1.5rem 5%";
        navbar.style.background = "rgba(15, 15, 15, 0.95)";
    }
});