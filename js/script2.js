// THIS IS FOR THE COUNTRIES IN THE HOUSES PAGE
document.addEventListener("DOMContentLoaded", function () {

    // Retrieve the selected continent from localStorage
    const selectedContinent = localStorage.getItem('selectedContinent');

    // Hide all continents initially
    const allContinents = document.querySelectorAll('.asian-countries, .europe-countries, .american-countries-cities');
    allContinents.forEach(continent => {
        continent.style.display = 'none';
    });

    // Show the relevant continent based on the selection
    if (selectedContinent === 'asia') {
        document.getElementById('asian-countries').style.display = 'block';
    } else if (selectedContinent === 'europe') {
        document.getElementById('europe-countries').style.display = 'block';
    } else if (selectedContinent === 'america') {
        document.getElementById('american-countries-cities').style.display = 'block';
    }
});



// THIS IS FOR THE COUNTRIES IN THE APARTMENTS PAGE
document.addEventListener("DOMContentLoaded", function () {

    // Retrieve the selected continent from localStorage
    const selectedContinent = localStorage.getItem('selectedContinent');

    // Hide all continents initially
    const allContinents = document.querySelectorAll('.apartment-asian-countries, .apartment-europe-countries, .apartment-american-countries-cities');
    allContinents.forEach(continent => {
        continent.style.display = 'none';
    });

    // Show the relevant continent based on the selection
    if (selectedContinent === 'asia') {
        document.getElementById('apartment-asian-countries').style.display = 'block';
    } else if (selectedContinent === 'europe') {
        document.getElementById('apartment-europe-countries').style.display = 'block';
    } else if (selectedContinent === 'america') {
        document.getElementById('apartment-american-countries-cities').style.display = 'block';
    }
});



// FOR THE HOUSETYPES PAGE FILTERING and THE FILTERING OF THE IMAGES IN THE HOUSEEXTERIOR PAGE
// Object containing paths to house images categorized by country and house type
const houseImages = {
    'Philippines': {
        'cabin': [
            {
                name: "Bamboo Bliss Cabin",
                description: "A seamless blend of modern comfort and traditional bamboo architecture, this cabin offers panoramic views of the verdant forest canopy from its expansive glass windows. Ideal for eco-conscious travelers seeking serenity.",
                path: "Images/Asia/HOUSES/Philippines/cabin/cabin1.jpg"
            },

            {
                name: "Heritage Hideaway",
                description: "Featuring traditional wooden elements with sleek, modern interiors, this cabin offers a cozy retreat with a touch of rustic charm. Perfect for those looking to escape the hustle and bustle of city life.",
                path: "Images/Asia/HOUSES/Philippines/cabin/cabin2.jpg"
            },

            {
                name: "Forest Fusion Lodge",
                description: " Combining sleek, contemporary design with traditional nipa hut elements, this cabin provides a unique living experience. Enjoy the tranquility of the forest from your private terrace.",
                path: "Images/Asia/HOUSES/Philippines/cabin/cabin3.jpg"
            },

            {
                name: "Modern Mahogany Retreat",
                description: "Nestled among towering mahogany trees, this cabin boasts a minimalist design enriched with native craftsmanship. A perfect spot to unwind and reconnect with nature.",
                path: "Images/Asia/HOUSES/Philippines/cabin/cabin4.jpg"
            },

            {
                name: "Rainforest Haven",
                description: "With its high ceilings and large windows, this cabin merges modern architecture with traditional wooden craftsmanship. Wake up to the soothing sounds of the rainforest.",
                path: "Images/Asia/HOUSES/Philippines/cabin/cabin5.jpg"
            },

            {
                name: "Treetop Tranquility",
                description: "Elevated among the trees, this cabin combines modern amenities with the traditional charm of Filipino design. Experience the ultimate forest getaway with breathtaking views.",
                path: "Images/Asia/HOUSES/Philippines/cabin/cabin6.jpg"
            },

            {
                name: "Eco Chic Cabin",
                description: "This stylish retreat features a blend of modern comforts and traditional materials, offering an eco-friendly escape in the heart of the forest. Enjoy stargazing from your private balcony.",
                path: "Images/Asia/HOUSES/Philippines/cabin/cabin7.jpg"
            },

            {
                name: "Serenity Sanctuary",
                description: "Fusing modern minimalist design with traditional touches, this cabin provides a peaceful haven. The open-plan living space seamlessly integrates with the surrounding forest.",
                path: "Images/Asia/HOUSES/Philippines/cabin/cabin8.jpg"
            }
        ],
        'cottage': [
            {
                name: "Whispering Pines Cottage",
                description: "Nestled amidst towering pine trees, this charming cottage offers a cozy, storybook atmosphere. Enjoy the serene surroundings from your flower-filled garden.",
                path: "Images/Asia/HOUSES/Philippines/cottage/cottage1.jpg"
            },

            {
                name: "Fairywood Haven",
                description: "With its stone facade and ivy-covered walls, this magical cottage provides a picturesque retreat. Overlook the lush landscape from your quaint, wooden porch.",
                path: "Images/Asia/HOUSES/Philippines/cottage/cottage2.jpg"
            },

            {
                name: "Enchanted Brook Cottage",
                description: "This dreamy hideaway features a rustic design with a fairytale twist, complete with a babbling brook running nearby. Perfect for nature lovers seeking enchantment.",
                path: "Images/Asia/HOUSES/Philippines/cottage/cottage3.jpg"
            },

            {
                name: "Mystic Meadows Cottage",
                description: "Surrounded by colorful wildflowers and rolling hills, this cottage evokes a sense of whimsy and wonder. The interior combines traditional charm with modern comforts.",
                path: "Images/Asia/HOUSES/Philippines/cottage/cottage4.jpg"
            },

            {
                name: "Woodland Wonder Cottage",
                description: "A cozy, timber-framed retreat set in a secluded forest, this cottage offers a fairytale escape with its charming architecture and serene setting.",
                path: "Images/Asia/HOUSES/Philippines/cottage/cottage5.jpg"
            },

            {
                name: "Hidden Hollow Cottage",
                description: "Tucked away in a peaceful valley, this delightful cottage boasts a fairy tale design with thatched roofs and blooming gardens, creating a perfect nature retreat.",
                path: "Images/Asia/HOUSES/Philippines/cottage/cottage6.jpg"
            },

            {
                name: "Dewdrop Dream Cottage",
                description: "With its stone pathways and blooming roses, this charming cottage offers a magical getaway. The quaint interiors and scenic views make it an idyllic escape.",
                path: "Images/Asia/HOUSES/Philippines/cottage/cottage7.jpg"
            },

            {
                name: "Elfin Glade Cottage",
                description: "Nestled in a lush glade, this enchanting cottage features whimsical design elements and serene surroundings. The perfect place to experience a fairytale come to life.",
                path: "Images/Asia/HOUSES/Philippines/cottage/cottage8.jpg"
            },
        ]
    },
    'Thailand': {
        'cabin': [
            {
                name: "Bamboo Grove Cabin",
                description: "Tucked away in a tranquil bamboo forest, this cabin offers a modern yet rustic retreat. The design seamlessly blends contemporary comfort with traditional Thai craftsmanship.",
                path: "Images/Asia/HOUSES/Thailand/cabin/cabin1.jpg"
            },

            {
                name: "Lotus Pond Cabin",
                description: "Overlooking a serene lotus pond, this cabin boasts minimalist architecture infused with traditional Thai elements. Perfect for those seeking peace and inspiration.",
                path: "Images/Asia/HOUSES/Thailand/cabin/cabin2.jpg"
            },

            {
                name: "Elephant Sanctuary Retreat",
                description: "Located near an elephant sanctuary, this cabin combines sleek modern design with natural wooden accents. Experience the beauty of nature and the majesty of elephants up close.",
                path: "Images/Asia/HOUSES/Thailand/cabin/cabin3.jpg"
            },

            {
                name: "Jungle Canopy Lodge",
                description: "Elevated high in the jungle canopy, this cabin provides a unique living experience with panoramic views of the lush forest. The interior blends modern elegance with traditional Thai decor.",
                path: "Images/Asia/HOUSES/Thailand/cabin/cabin4.jpg"
            },

            {
                name: "Riverfront Oasis",
                description: "This cabin offers breathtaking views of the river from its spacious terrace. The design incorporates modern amenities with traditional teak wood construction, creating a perfect riverside retreat.",
                path: "Images/Asia/HOUSES/Thailand/cabin/cabin5.jpg"
            },

            {
                name: "Mountain Serenity Cabin: ",
                description: "Nestled at the foot of a majestic mountain, this cabin features modern architecture with touches of Thai heritage. Ideal for adventure seekers and nature lovers.",
                path: "Images/Asia/HOUSES/Thailand/cabin/cabin6.jpg"
            },

            {
                name: "Island Bliss Bungalow",
                description: "Located on a secluded island, this cabin offers a perfect blend of modern luxury and traditional Thai charm. Enjoy the pristine beaches and lush surroundings.",
                path: "Images/Asia/HOUSES/Thailand/cabin/cabin7.jpg"
            },

            {
                name: "Tropical Hideaway",
                description: "Surrounded by exotic flora and fauna, this cabin combines contemporary style with traditional Thai elements. The open-plan living space seamlessly integrates with the natural environment.",
                path: "Images/Asia/HOUSES/Thailand/cabin/cabin8.jpg"
            }
        ],
        'cottage': [
            {
                name: "Lotus Blossom Cottage",
                description: "This enchanting cottage sits beside a tranquil lotus pond, blending traditional Thai architecture with modern amenities. Perfect for a serene escape.",
                path: "Images/Asia/HOUSES/Thailand/cottage/cottage1.jpg"
            },

            {
                name: "Elephant Path Cottage",
                description: "Located near a peaceful elephant sanctuary, this cottage offers a unique blend of rustic charm and contemporary comfort. Experience the gentle giants in their natural habitat.",
                path: "Images/Asia/HOUSES/Thailand/cottage/Cottage2.jpg"
            },

            {
                name: "Sunrise Serenity Cottage",
                description: "Overlooking lush rice paddies, this cottage captures the essence of Thai countryside living. With its traditional design and modern interiors, it's a perfect retreat.",
                path: "Images/Asia/HOUSES/Thailand/cottage/cottage3.jpg"
            },

            {
                name: "Bamboo Breeze Cottage",
                description: "Nestled among towering bamboo groves, this cottage offers a harmonious blend of nature and luxury. Enjoy the soothing rustle of bamboo leaves from your private veranda.",
                path: "Images/Asia/HOUSES/Thailand/cottage/cottage4.jpg"
            },

            {
                name: "Jungle Jewel Cottage",
                description: "Hidden within a vibrant jungle, this cottage combines traditional Thai elements with modern touches. An ideal hideaway for nature enthusiasts.",
                path: "Images/Asia/HOUSES/Thailand/cottage/cottage5.jpg"
            },

            {
                name: "River's Edge Cottage",
                description: "Situated along a serene riverbank, this cottage features a blend of Thai-style architecture and contemporary amenities. Perfect for a peaceful riverside retreat.",
                path: "Images/Asia/HOUSES/Thailand/cottage/cottage6.jpg"
            },

            {
                name: "Mountain Magic Cottage",
                description: "Located at the base of a majestic mountain, this cottage boasts panoramic views and a mix of traditional and modern design. Ideal for adventure seekers and dreamers.",
                path: "Images/Asia/HOUSES/Thailand/cottage/cottage7.jpg"
            },

            {
                name: "Island Oasis Cottage",
                description: "This secluded island cottage offers the perfect mix of traditional Thai charm and modern luxury. Enjoy pristine beaches and lush surroundings in ultimate tranquility.",
                path: "Images/Asia/HOUSES/Thailand/cottage/cottage8.jpg"
            }
        ]
    },
    'United Kingdom (Edinburgh)': {
        'cabin': [
            {
                name: "Highland Haven Cabin",
                description: "Tucked away in the rolling Scottish Highlands, this cabin blends modern comfort with traditional Scottish design. Think tartan blankets, a cozy fireplace, and a view of the misty mountains.",
                path: "Images/Europe/HOUSES/UK (Edinburgh)/cabin/cabin1.jpg"
            },

            {
                name: "Castle View Cabin",
                description: "Overlooking the historic Edinburgh Castle, this cabin offers a blend of rustic charm and modern amenities. Perfect for soaking up the rich history and culture of the city.",
                path: "Images/Europe/HOUSES/UK (Edinburgh)/cabin/cabin2.jpg"
            },

            {
                name: "Thistle Glen Retreat",
                description: "Nestled in a serene glen, this cabin features a blend of contemporary style and traditional Scottish elements. Enjoy the iconic thistle motifs and the tranquil surroundings.",
                path: "Images/Europe/HOUSES/UK (Edinburgh)/cabin/cabin3.jpg"
            },


            {
                name: "Lochside Lodge",
                description: "Situated by a picturesque loch, this cabin offers a perfect mix of modern luxury and Scottish tradition. The perfect spot for fishing, hiking, or simply enjoying the breathtaking views.",
                path: "Images/Europe/HOUSES/UK (Edinburgh)/cabin/cabin4.jpg"
            },


            {
                name: "Stirling Stone Cabin",
                description: "With its stone exterior and modern interiors, this cabin evokes the charm of traditional British cottages. A perfect getaway in the heart of Scotland's natural beauty.",
                path: "Images/Europe/HOUSES/UK (Edinburgh)/cabin/cabin5.jpg"
            },

            {
                name: "Royal Mile Cabin",
                description: "Located near Edinburgh's famous Royal Mile, this cabin combines modern comforts with historic charm. The ideal base for exploring the city's rich heritage and vibrant culture.",
                path: "Images/Europe/HOUSES/UK (Edinburgh)/cabin/cabin6.jpg"
            },

            {
                name: "Heather Moor Cabin",
                description: "Surrounded by heather-clad moorlands, this cabin blends modern design with traditional Scottish craftsmanship. Enjoy the serene beauty of the countryside.",
                path: "Images/Europe/HOUSES/UK (Edinburgh)/cabin/cabin7.jpg"
            },

            {
                name: "Caledonian Cottage Cabin",
                description: "This charming cabin, inspired by the classic British cottage, offers a blend of rustic charm and contemporary luxury. A perfect retreat with stunning views of the Scottish landscape.",
                path: "Images/Europe/HOUSES/UK (Edinburgh)/cabin/cabin8.jpg"
            }
        ],
        'cottage': [
            {
                name: "Royal Retreat Cottage",
                description: "This charming stone cottage is nestled in the heart of Edinburgh, offering a cozy interior with modern amenities. Its quaint garden and proximity to historic sites make it a perfect escape.",
                path: "Images/Europe/HOUSES/UK (Edinburgh)/cottage/cottage1.jpg"
            },

            {
                name: "Castle Crag Cottage",
                description: "Situated near the iconic Edinburgh Castle, this cottage blends traditional Scottish design with contemporary comforts. Enjoy stunning views and a touch of history right at your doorstep.",
                path: "Images/Europe/HOUSES/UK (Edinburgh)/cottage/cottage2.jpg"
            },

            {
                name: "Highland Hearth Cottage",
                description: "With its warm fireplace and tartan-decorated living room, this cottage offers a cozy atmosphere. It's the perfect spot to relax after a day exploring the Scottish countryside.",
                path: "Images/Europe/HOUSES/UK (Edinburgh)/cottage/cottage3.jpg"
            },

            {
                name: "Heather Glen Cottage",
                description: "Surrounded by vibrant heather and lush greenery, this picturesque cottage combines rustic charm with modern luxury. An ideal retreat for nature lovers.",
                path: "Images/Europe/HOUSES/UK (Edinburgh)/cottage/cottage4.jpg"
            },

            {
                name: "Thistle Thatch Cottage",
                description: "This traditional thatched-roof cottage exudes charm and character. Its quaint interior and blooming garden create a fairytale-like setting.",
                path: "Images/Europe/HOUSES/UK (Edinburgh)/cottage/cottage5.jpg"
            },

            {
                name: "Edinburgh Eden Cottage",
                description: "Nestled in a quiet, scenic area, this cottage offers a peaceful retreat with a mix of classic and contemporary design. Perfect for a relaxing getaway.",
                path: "Images/Europe/HOUSES/UK (Edinburgh)/cottage/cottage6.jpg"
            },

            {
                name: "Lochside Lullaby Cottage",
                description: "Overlooking a serene loch, this cottage provides a tranquil escape with stunning water views. The blend of modern amenities and traditional decor ensures a comfortable stay.",
                path: "Images/Europe/HOUSES/UK (Edinburgh)/cottage/cottage7.jpg"
            },

            {
                name: "Cobblestone Comfort Cottage",
                description: "Located on a charming cobblestone street, this cottage combines historic charm with modern convenience. A perfect blend of old-world elegance and contemporary style.",
                path: "Images/Europe/HOUSES/UK (Edinburgh)/cottage/cottage8.jpg"
            },

        ]
    },
    'Spain': {
        'cabin': [
            {
                name: "Sierra Serenity Cabin",
                description: "Nestled in the stunning Sierra Nevada mountains, this cabin combines rustic charm with modern amenities. Perfect for those looking to ski in winter or hike in summer.",
                path: "Images/Europe/HOUSES/Spain/cabin/cabin1.jpg"
            },

            {
                name: "Mediterranean Hideaway",
                description: "Located near the sparkling Mediterranean coast, this cabin offers a blend of traditional Spanish design with contemporary comfort. Enjoy sea breezes and sun-drenched days.",
                path: "Images/Europe/HOUSES/Spain/cabin/cabin2.jpg"
            },

            {
                name: "Pyrenean Retreat",
                description: "Set in the heart of the Pyrenees, this cabin boasts breathtaking mountain views and cozy interiors. Ideal for adventurers and nature lovers alike.",
                path: "Images/Europe/HOUSES/Spain/cabin/cabin3.jpg"
            },

            {
                name: "Andalusian Oasis",
                description: "This cabin, surrounded by the vibrant landscapes of Andalusia, merges modern luxury with traditional Spanish elements. The perfect spot for a tranquil getaway.",
                path: "Images/Europe/HOUSES/Spain/cabin/cabin3.jpg"
            },

            {
                name: "Catalan Countryside Cabin",
                description: "Situated in the rolling hills of Catalonia, this cabin offers a serene retreat with stunning countryside views. Combining rustic aesthetics with modern conveniences.",
                path: "Images/Europe/HOUSES/Spain/cabin/cabin4.jpg"
            },

            {
                name: "Basque Country Escape",
                description: "Located in the lush Basque region, this cabin combines traditional wooden architecture with modern touches. Perfect for exploring the rich culture and natural beauty of the area.",
                path: "Images/Europe/HOUSES/Spain/cabin/cabin6.jpg"
            },

            {
                name: "Galician Grove Cabin",
                description: "Nestled in the verdant forests of Galicia, this cabin offers a peaceful retreat with modern amenities and a touch of traditional charm. Ideal for those seeking solitude.",
                path: "Images/Europe/HOUSES/Spain/cabin/cabin7.jpg"
            },

            {
                name: "Valencian Vineyard Cabin",
                description: " Surrounded by picturesque vineyards in the Valencia region, this cabin blends modern design with rustic touches. Enjoy wine-tasting tours and scenic views.",
                path: "Images/Europe/HOUSES/Spain/cabin/cabin8.jpg"
            }
        ],
        'cottage': [
            {
                name: "Sierra Sunshine Cottage",
                description: "Nestled in the heart of the Sierra Nevada, this charming cottage blends rustic appeal with modern amenities. Perfect for winter skiing or summer hiking.",
                path: "Images/Europe/HOUSES/Spain/cottage/cottage1.jpg"
            },

            {
                name: "Mediterranean Dream",
                description: "Located near the picturesque Mediterranean coastline, this cottage combines traditional Spanish charm with contemporary comfort. Enjoy sun-drenched days and sea breezes.",
                path: "Images/Europe/HOUSES/Spain/cottage/cottage2.jpg"
            },

            {
                name: "Pyrenean Paradise",
                description: "Set amidst the majestic Pyrenees, this cozy cottage offers breathtaking mountain views and a warm, welcoming atmosphere. Ideal for adventurers and nature lovers.",
                path: "Images/Europe/HOUSES/Spain/cottage/cottage3.jpg"
            },

            {
                name: "Andalusian Gem",
                description: "Surrounded by the vibrant landscapes of Andalusia, this cottage merges traditional architecture with modern comforts. A tranquil retreat to unwind and rejuvenate.",
                path: "Images/Europe/HOUSES/Spain/cottage/cottage4.jpg"
            },

            {
                name: "Catalan Countryside Cottage",
                description: "Situated in the rolling hills of Catalonia, this cottage offers a serene escape with stunning countryside views and a blend of rustic and modern design.",
                path: "Images/Europe/HOUSES/Spain/cottage/cottage5.jpg"
            },

            {
                name: "Basque Bliss",
                description: "Located in the lush Basque region, this cottage combines traditional wooden elements with contemporary touches. Perfect for exploring the area's rich culture and natural beauty.",
                path: "Images/Europe/HOUSES/Spain/cottage/cottage6.jpg"
            },

            {
                name: "Galician Grove Cottage",
                description: "Nestled in the verdant forests of Galicia, this charming cottage provides a peaceful retreat with modern amenities and a touch of traditional charm.",
                path: "Images/Europe/HOUSES/Spain/cottage/cottage7.jpg"
            },

            {
                name: "Valencian Vineyard Cottage",
                description: "Surrounded by picturesque vineyards in the Valencia region, this cottage blends rustic charm with modern luxury. Enjoy wine-tasting tours and scenic views.",
                path: "Images/Europe/HOUSES/Spain/cottage/cottage8.jpg"
            }
        ]
    }
};

// Object to store the corresponding image containers for each country and house type
const imageContainers = {
    'Philippines': {
        'cabin': document.getElementById('philippines-cabin'),
        'cottage': document.getElementById('philippines-cottage'),
        'modern': document.getElementById('philippines-modern'),
        'victorian': document.getElementById('philippines-victorian'),
        'split-level': document.getElementById('philippines-split-level')
    },
    'Thailand': {
        'cabin': document.getElementById('thailand-cabin'),
        'cottage': document.getElementById('thailand-cottage'),
        'modern': document.getElementById('thailand-modern'),
        'victorian': document.getElementById('thailand-victorian'),
        'split-level': document.getElementById('thailand-split-level')
    },
    'United Kingdom (Edinburgh)': {
        'cabin': document.getElementById('uk-edinburgh-cabin'),
        'cottage': document.getElementById('uk-edinburgh-cottage'),
        'modern': document.getElementById('uk-edinburgh-modern'),
        'victorian': document.getElementById('uk-edinburgh-victorian'),
        'split-level': document.getElementById('uk-edinburgh-split-level')
    },
    'Spain': {
        'cabin': document.getElementById('spain-cabin'),
        'cottage': document.getElementById('spain-cottage'),
        'modern': document.getElementById('spain-modern'),
        'victorian': document.getElementById('spain-victorian'),
        'split-level': document.getElementById('spain-split-level')
    }
};

// Function to set selected country and house type in session storage
function setSelectedCountryAndHouseType(country, houseType) {
    sessionStorage.setItem('selectedCountry', country);
    sessionStorage.setItem('selectedHouseType', houseType);
}

// Function to filter house types based on the selected country
function filterHouseTypes() {
    const selectedCountry = sessionStorage.getItem('selectedCountry');

    // Select all house type sections
    const allHousetypes = document.querySelectorAll('.asian-housetypes > div, .europe-housetypes > div, .america-housetypes > div');

    allHousetypes.forEach(housetype => {
        const countryName = housetype.querySelector('h3').textContent.trim();

        // Show only the selected country's house types
        if (countryName === selectedCountry) {
            housetype.style.display = 'block'; // Show the selected country
        } else {
            housetype.style.display = 'none'; // Hide others
        }
    });

    // If no country is selected, hide all house types
    if (!selectedCountry) {
        allHousetypes.forEach(housetype => {
            housetype.style.display = 'none'; // Hide all
        });
    }
}

// Load the correct images on page load based on session storage
window.onload = function () {
    filterHouseTypes(); // Filter house types on load

    const selectedCountry = sessionStorage.getItem('selectedCountry');
    const selectedHouseType = sessionStorage.getItem('selectedHouseType');

    if (selectedCountry && selectedHouseType) {
        loadImages(selectedCountry, selectedHouseType);
    } else {
        console.error('No valid selection found in session storage.');
    }
};




// HOUSE EXTERIOR FUNCTIONS
function loadImages(country, houseType) {
    const container = imageContainers[country][houseType];
    console.log(`Loading images for ${country} - ${houseType}`);

    container.innerHTML = ''; // Clear previous content

    const images = houseImages[country][houseType];
    console.log(images); // Check if images are loaded
    if (images && images.length > 0) {
        const ul = document.createElement('ul');
        images.forEach(imageData => {
            const li = document.createElement('li');

            const img = document.createElement('img');
            img.src = imageData.path;
            img.alt = `${imageData.name} in ${country}`;

            const details = document.createElement('div');
            details.className = `house-details ${country}-details`;

            const p = document.createElement('p');
            p.innerHTML = `<span>${imageData.name}:</span> ${imageData.description}`;

            details.appendChild(p);
            li.appendChild(img);
            li.appendChild(details);
            ul.appendChild(li);
        });
        container.appendChild(ul);
    }

    hideAllOtherCountriesAndHouseTypes(country, houseType);
}

document.addEventListener('DOMContentLoaded', () => {
    loadImages('Philippines', 'cabin');
    loadImages('Philippines', 'cottage');
    loadImages('Thailand', 'cabin');
    loadImages('Thailand', 'cottage');
    loadImages('United Kingdom (Edinburgh)', 'cabin');
    loadImages('United Kingdom (Edinburgh)', 'cottage');
    loadImages('Spain', 'cabin');
    loadImages('Spain', 'cottage');
});













// Function to hide all countries and house types except the selected one
function hideAllOtherCountriesAndHouseTypes(country, houseType) {
    const allHouseTypeContainers = document.querySelectorAll('.house-image-container');

    // Hide all containers initially
    allHouseTypeContainers.forEach(container => {
        container.style.display = 'none';
    });

    // Show only the matching container for the selected country and house type
    const matchingContainer = imageContainers[country][houseType];
    if (matchingContainer) {
        matchingContainer.style.display = 'block';
    }

    // Hide all country headings
    const allCountryHeadings = document.querySelectorAll('.country-heading');
    allCountryHeadings.forEach(heading => {
        heading.style.display = 'none'; // Hide all other country headings
    });

    // Show the selected country heading only
    const selectedHeading = Array.from(allCountryHeadings).find(heading => heading.textContent.trim() === country);
    if (selectedHeading) {
        selectedHeading.style.display = 'block';
    }
}