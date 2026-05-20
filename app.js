// ===== DATA LAYERS =====

// Interests by gender
const interestsByGender = {
    male: ["Cars", "Bikes", "Tools", "Fishing", "Gaming", "Watches"],
    female: ["Cars", "Bikes", "Makeup", "Fashion", "Fitness", "Baking", "Gardening"]
};

// Emoji icons for interests
const interestIcons = {
    Cars: "🚗",
    Bikes: "🏍️",
    Tools: "🛠️",
    Fishing: "🎣",
    Gaming: "🎮",
    Watches: "⌚",
    Makeup: "💄",
    Fashion: "👗",
    Fitness: "🏋️‍♀️",
    Baking: "🧁",
    Gardening: "🌿"
};

// Brands by interest
const brandsByInterest = {
    Cars: [
        "Toyota",
        "Chevrolet",
        "Dodge",
        "Ford",
        "Volkswagen",
        "Honda",
        "Jeep",
        "Land Rover",
        "Nissan",
        "Subaru"
    ],
    Bikes: [
        "Yamaha",
        "Harley Davidson",
        "Honda",
        "Kawasaki",
        "BMW",
        "KTM",
        "Suzuki"
    ],
    Tools: ["Makita", "Bosch", "DeWalt", "Ryobi"],
    Fishing: ["Shimano", "Daiwa", "Penn"],
    Gaming: ["Razer", "Logitech", "Corsair"],
    Watches: ["Rolex", "Casio", "Omega"],
    Makeup: ["Dior", "MAC", "Fenty", "Revlon"],
    Fashion: ["Zara", "Gucci", "Prada"],
    Fitness: ["Nike", "Reebok", "Gymshark"],
    Baking: ["KitchenAid", "Wilton", "Cuisinart"],
    Gardening: ["Husqvarna", "Stihl", "Gardena"]
};

// Brand logos (you provide these PNGs in /logos/)
const brandLogos = {
    Toyota: "logos/toyota.png",
    Chevrolet: "logos/chevrolet.png",
    Dodge: "logos/dodge.png",
    Ford: "logos/ford.png",
    Volkswagen: "logos/vw.png",
    Honda: "logos/honda.png",
    Jeep: "logos/jeep.png",
    "Land Rover": "logos/landrover.png",
    Nissan: "logos/nissan.png",
    Subaru: "logos/subaru.png",

    Yamaha: "logos/yamaha.png",
    "Harley Davidson": "logos/harley.png",
    Kawasaki: "logos/kawasaki.png",
    BMW: "logos/bmw.png",
    KTM: "logos/ktm.png",
    Suzuki: "logos/suzuki.png",

    Makita: "logos/makita.png",
    Bosch: "logos/bosch.png",
    DeWalt: "logos/dewalt.png",
    Ryobi: "logos/ryobi.png",

    Shimano: "logos/shimano.png",
    Daiwa: "logos/daiwa.png",
    Penn: "logos/penn.png",

    Razer: "logos/razer.png",
    Logitech: "logos/logitech.png",
    Corsair: "logos/corsair.png",

    Rolex: "logos/rolex.png",
    Casio: "logos/casio.png",
    Omega: "logos/omega.png",

    Dior: "logos/dior.png",
    MAC: "logos/mac.png",
    Fenty: "logos/fenty.png",
    Revlon: "logos/revlon.png",

    Zara: "logos/zara.png",
    Gucci: "logos/gucci.png",
    Prada: "logos/prada.png",

    Nike: "logos/nike.png",
    Reebok: "logos/reebok.png",
    Gymshark: "logos/gymshark.png",

    KitchenAid: "logos/kitchenaid.png",
    Wilton: "logos/wilton.png",
    Cuisinart: "logos/cuisinart.png",

    Husqvarna: "logos/husqvarna.png",
    Stihl: "logos/stihl.png",
    Gardena: "logos/gardena.png"
};

// Models only for Cars & Bikes (big community stuff)
const modelsByBrand = {
    // Cars
    Toyota: [
        "Land Cruiser",
        "Hilux",
        "RAV4",
        "Fortuner",
        "Corolla 1972",
        "Supra",
        "AE86"
    ],
    Chevrolet: [
        "Camaro",
        "Corvette",
        "Silverado",
        "C10"
    ],
    Dodge: [
        "Charger",
        "Challenger",
        "Ram",
        "Viper"
    ],
    Ford: [
        "Mustang",
        "Ranger",
        "F-150",
        "Bronco"
    ],
    Volkswagen: [
        "Golf GTI",
        "Beetle",
        "Transporter",
        "Scirocco"
    ],
    Honda: [
        "Civic",
        "Integra",
        "S2000",
        "Type R"
    ],
    Jeep: [
        "Wrangler",
        "Cherokee XJ",
        "Gladiator"
    ],
    "Land Rover": [
        "Defender",
        "Discovery",
        "Range Rover"
    ],
    Nissan: [
        "Skyline R32",
        "Skyline R34",
        "350Z",
        "GTR"
    ],
    Subaru: [
        "Impreza WRX",
        "STI",
        "Forester"
    ],

    // Bikes
    Yamaha: [
        "R1",
        "R6",
        "MT-07",
        "MT-09",
        "Tenere 700"
    ],
    "Harley Davidson": [
        "Sportster",
        "Street Glide",
        "Fat Boy"
    ],
    Kawasaki: [
        "Ninja 400",
        "Ninja ZX-6R",
        "Z900",
        "Versys"
    ],
    BMW: [
        "S1000RR",
        "GS 1200",
        "F 850 GS"
    ],
    KTM: [
        "Duke 390",
        "Duke 790",
        "Adventure 890"
    ],
    Suzuki: [
        "GSX-R600",
        "GSX-R1000",
        "Hayabusa"
    ]
};

// ===== STATE =====

let currentGender = null;
let currentInterest = null;
let currentBrand = null;
let currentModel = null;

// ===== DOM ELEMENTS =====

const interestSection = document.getElementById("interest-section");
const interestOptions = document.getElementById("interest-options");

const brandSection = document.getElementById("brand-section");
const brandOptions = document.getElementById("brand-options"); // container for brand cards

const modelSection = document.getElementById("model-section");
const modelOptions = document.getElementById("model-options");

const generateSection = document.getElementById("generate-section");
const outputSection = document.getElementById("output-section");
const passwordList = document.getElementById("password-list");
const generateBtn = document.getElementById("generate-btn");

// ===== GENDER SELECTION (ICON BUTTONS) =====

document.querySelectorAll(".gender-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        currentGender = btn.dataset.gender;
        currentInterest = null;
        currentBrand = null;
        currentModel = null;

        outputSection.style.display = "none";
        generateSection.style.display = "none";
        brandSection.style.display = "none";
        modelSection.style.display = "none";

        loadInterests(currentGender);
    });
});

// ===== LOAD INTERESTS =====

function loadInterests(gender) {
    interestSection.style.display = "block";
    interestOptions.innerHTML = "";

    const list = interestsByGender[gender] || [];

    list.forEach(interest => {
        const btn = document.createElement("button");
        btn.className = "interest-btn";
        btn.innerHTML = `${interestIcons[interest] || ""}<br>${interest}`;
        btn.onclick = () => onInterestSelected(interest);
        interestOptions.appendChild(btn);
    });
}

function onInterestSelected(interest) {
    currentInterest = interest;
    currentBrand = null;
    currentModel = null;

    outputSection.style.display = "none";
    generateSection.style.display = "none";
    modelSection.style.display = "none";

    loadBrands(interest);
}

// ===== LOAD BRANDS (AS LOGO CARDS) =====

function loadBrands(interest) {
    const brands = brandsByInterest[interest] || [];
    brandOptions.innerHTML = "";

    if (brands.length === 0) {
        brandSection.style.display = "none";
        return;
    }

    brandSection.style.display = "block";

    brands.forEach(brand => {
        const card = document.createElement("div");
        card.className = "brand-card";
        card.dataset.brand = brand;

        const imgSrc = brandLogos[brand] || "";
        const imgHtml = imgSrc ? `<img src="${imgSrc}" alt="${brand} logo">` : "";

        card.innerHTML = `
            ${imgHtml}
            <div class="brand-name">${brand}</div>
        `;

        card.onclick = () => onBrandSelected(brand);
        brandOptions.appendChild(card);
    });
}

function onBrandSelected(brand) {
    currentBrand = brand;
    currentModel = null;
    outputSection.style.display = "none";

    const isVehicleInterest = currentInterest === "Cars" || currentInterest === "Bikes";
    const hasModels = !!modelsByBrand[brand];

    if (isVehicleInterest && hasModels) {
        loadModels(brand);
    } else {
        modelSection.style.display = "none";
        generateSection.style.display = "block";
    }
}

// ===== LOAD MODELS (ONLY FOR CARS & BIKES) =====

function loadModels(brand) {
    const models = modelsByBrand[brand] || [];
    modelOptions.innerHTML = "";

    if (models.length === 0) {
        modelSection.style.display = "none";
        generateSection.style.display = "block";
        return;
    }

    modelSection.style.display = "block";

    models.forEach(model => {
        const btn = document.createElement("button");
        btn.className = "interest-btn"; // reuse styling
        btn.textContent = model;
        btn.onclick = () => {
            currentModel = model;
            generateSection.style.display = "block";
            outputSection.style.display = "none";
        };
        modelOptions.appendChild(btn);
    });
}

// ===== GENERATE PASSWORDS =====

generateBtn.addEventListener("click", () => {
    const baseWord = currentModel || currentBrand;

    if (!baseWord) {
        alert("Please select a brand (and model if available) first.");
        return;
    }

    passwordList.innerHTML = "";
    outputSection.style.display = "block";

    for (let i = 0; i < 8; i++) {
        const password = generatePassword(baseWord);
        addPasswordCard(password);
    }
});

// Password generator using base word (brand or model)
function generatePassword(baseWord) {
    const specials = "!@#$%^&*";
    const numbers = Math.floor(100 + Math.random() * 900);
    const special = specials[Math.floor(Math.random() * specials.length)];

    const leet = baseWord
        .replace(/a/gi, "@")
        .replace(/e/gi, "3")
        .replace(/i/gi, "1")
        .replace(/o/gi, "0")
        .replace(/s/gi, "$")
        .replace(/l/gi, "1");

    return leet.replace(/\s+/g, "") + special + numbers + "!";
}

// ===== UI: PASSWORD CARDS & COPY =====

function addPasswordCard(password) {
    const div = document.createElement("div");
    div.className = "password-card";

    div.innerHTML = `
        <span>${password}</span>
        <span class="copy-btn" onclick="copyPassword('${password}')">▣</span>
    `;

    passwordList.appendChild(div);
}

function copyPassword(text) {
    navigator.clipboard.writeText(text);
    alert("Password copied");
}
