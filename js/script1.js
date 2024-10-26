// TRANSLATOR
// Define translations for different languages
const translations = {
    en: {
        home: "Home",
        houses: "Houses",
        apartments: "Apartments",
        about: "About",
        location: "Location",
        contact: "Contact"
    },
    tl: {
        home: "Bahay",
        houses: "Mga Bahay",
        apartments: "Mga Apartment",
        about: "Tungkol",
        location: "Lokasyon",
        contact: "Makipag-ugnay"
    },
    jp: {
        home: "ホーム",
        houses: "家",
        apartments: "アパート",
        about: "約",
        location: "ロケーション",
        contact: "連絡先"
    },
    kr: {
        home: "홈",
        houses: "집",
        apartments: "아파트",
        about: "소개",
        location: "위치",
        contact: "연락처"
    },
    ar: {
        home: "الصفحة الرئيسية",
        houses: "منازل",
        apartments: "شقق",
        about: "حول",
        location: "موقع",
        contact: "اتصل"
    },
    th: {
        home: "หน้าหลัก",
        houses: "บ้าน",
        apartments: "อพาร์ทเมนท์",
        about: "เกี่ยวกับ",
        location: "ที่ตั้ง",
        contact: "ติดต่อ"
    },
    fr: {
        home: "Accueil",
        houses: "Maisons",
        apartments: "Appartements",
        about: "À propos",
        location: "Emplacement",
        contact: "Contact"
    },
    es: {
        home: "Inicio",
        houses: "Casas",
        apartments: "Apartamentos",
        about: "Acerca de",
        location: "Ubicación",
        contact: "Contacto"
    },
    it: {
        home: "Home",
        houses: "Case",
        apartments: "Appartamenti",
        about: "Chi siamo",
        location: "Posizione",
        contact: "Contatto"
    },
    "en-gb": {
        home: "Home",
        houses: "Houses",
        apartments: "Flats",
        about: "About",
        location: "Location",
        contact: "Contact"
    },
    "en-us": {
        home: "Home",
        houses: "Houses",
        apartments: "Apartments",
        about: "About",
        location: "Location",
        contact: "Contact"
    },
    "fr-ca": {
        home: "Accueil",
        houses: "Maisons",
        apartments: "Appartements",
        about: "À propos",
        location: "Emplacement",
        contact: "Contact"
    }
};

// Function to change language
function changeLanguage(lang) {
    // Get all elements that need to be translated
    const elementsToTranslate = document.querySelectorAll("[data-translate]");

    // Loop through each element and update its content
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute("data-translate");
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Set default language on page load
document.addEventListener("DOMContentLoaded", () => {
    changeLanguage('en'); // Set default language to English
});



// SCROLL BUTTON FOR THE BACK TO TOP
// Get the button
const backToTopButton = document.getElementById('back-to-top');

// Show the button when the user scrolls down 
window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Scroll to the top of the document smoothly
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}



// BUTTON FOR THE BACK TO PREVIOUS PAGE
function goBack() {
    window.history.back(); // Goes back to the previous page
}



// HAMBURGER MENU
const menuToggle = document.getElementById('menu-toggle');
const hamburger = document.querySelector('.hamburger');

menuToggle.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menuToggle.classList.toggle('active');
});




// FOR HOUSE LINKING
// CONTENTS ARE SHOWN BASED ON THE RELATIVITY OF THE INFORMATION
// THIS IS FOR THE CONTINENTS
function selectContinent(continent) {

    // Save the selected continent in localStorage
    localStorage.setItem('selectedContinent', continent);

    // Redirect to the second page
    window.location.href = 'house2.htm';
}



// FOR APARTMENT LINKING
// CONTENTS ARE SHOWN BASED ON THE RELATIVITY OF THE INFORMATION
// THIS IS FOR THE CONTINENTS
function selectContinent(continent) {

    // Save the selected continent in localStorage
    localStorage.setItem('selectedContinent', continent);

    // Redirect to the second page
    window.location.href = 'house2.htm';
}




