// Interests based on gender
const interests = {
    male: ["Cars", "Tools", "Fishing", "Gaming", "Watches"],
    female: ["Makeup", "Fashion", "Fitness", "Baking", "Gardening"]
};

// Brands based on interest
const brands = {
    Cars: ["Toyota", "BMW", "Ford", "Honda"],
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

// DOM Elements
const genderSection = document.getElementById("gender-section");
const interestSection = document.getElementById("interest-section");
const interestOptions = document.getElementById("interest-options");
const brandSection = document.getElementById("brand-section");
const brandSelect = document.getElementById("brand-select");
const generateSection = document.getElementById("generate-section");
const outputSection = document.getElementById("output-section");
const passwordList = document.getElementById("password-list");

// Gender selection
document.querySelectorAll("input[name='gender']").forEach(radio => {
    radio.addEventListener("change", () => {
        const gender = radio.value;

        // Show interest section
        interestSection.style.display = "block";
        interestOptions.innerHTML = "";

        // Create interest buttons
        interests[gender].forEach(item => {
            const btn = document.createElement("button");
            btn.className = "interest-btn";
            btn.textContent = item;

            btn.onclick = () => loadBrands(item);

            interestOptions.appendChild(btn);
        });
    });
});

// Load brands based on interest
function loadBrands(interest) {
    brandSection.style.display = "block";
    generateSection.style.display = "none";
    outputSection.style.display = "none";

    brandSelect.innerHTML = "";

    brands[interest].forEach(brand => {
        const option = document.createElement("option");
        option.value = brand;
        option.textContent = brand;
        brandSelect.appendChild(option);
    });

    generateSection.style.display = "block";
}

// Generate passwords
document.getElementById("generate-btn").addEventListener("click", () => {
    const brand = brandSelect.value;
    passwordList.innerHTML = "";
    outputSection.style.display = "block";

    for (let i = 0; i < 8; i++) {
        const password = generatePassword(brand);
        addPasswordCard(password);
    }
});

// Password generator
function generatePassword(brand) {
    const specials = "!@#$%^&*";
    const numbers = Math.floor(100 + Math.random() * 900);
    const special = specials[Math.floor(Math.random() * specials.length)];

    const leet = brand
        .replace(/a/gi, "@")
        .replace(/e/gi, "3")
        .replace(/i/gi, "1")
        .replace(/o/gi, "0")
        .replace(/s/gi, "$");

    return leet + special + numbers + "!";
}

// Add password card to UI
function addPasswordCard(password) {
    const div = document.createElement("div");
    div.className = "password-card";

    div.innerHTML = `
        <span>${password}</span>
        <span class="copy-btn" onclick="copyPassword('${password}')">📋</span>
    `;

    passwordList.appendChild(div);
}

// Copy to clipboard
function copyPassword(text) {
    navigator.clipboard.writeText(text);
    alert("Password copied");
}
