document.addEventListener('DOMContentLoaded', function() {
    setupAllCards();
    
    if (window.location.pathname.includes('Models-details.html')) {
        loadModelDetail();
    }
});

function setupAllCards() {
    const cards = document.querySelectorAll('.hover-card, .card'); // Select all cards
    
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const modelId = this.getAttribute('data-model-id') || this.getAttribute('data-card-id');
            if (modelId) {
                window.location.href = `Models-details.html?id=${modelId}`;
            }
        });
    });
}

function loadModelDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const modelId = urlParams.get('id');

    if (modelId) {
        const modelDetails = getModelDetails(modelId);
        populateModelDetails(modelDetails);
    }
}

function getModelDetails(modelId) {
    // In a real application, this would fetch data from your backend
    // For now, we'll use a mock database
    const mockDatabase = [
        {
            id: "1",
            name: "Bowie",
            age: 31,
            city: "New York",
            country: "United States",
            ethnicity: "Hispanic",
            sexuality: "Other",
            gender: "Female",
            eyes: "Hazel",
            hair: "Brown",
            body: "Big and lovely",
            hairLength: "Short",
            drinking: "Rarely",
            smoking: "Rarely",
            image: "./images/model1.jpg"
        },
        // Add more model data here...
    ];

    return mockDatabase.find(model => model.id === modelId) || null;
}

function populateModelDetails(model) {
    if (!model) return;

    // Update profile photo and name
    const profilePhoto = document.querySelector('.user-profile-photo');
    if (profilePhoto) profilePhoto.src = model.image;

    const nameElement = document.querySelector('h2');
    if (nameElement) nameElement.textContent = model.name;

    const infoElement = document.querySelector('h2 + p');
    if (infoElement) infoElement.textContent = `${model.gender}, ${model.age}, ${model.country}, ${model.city}`;
    
    // Populate the tables
    const tables = document.querySelectorAll('table');
    if (tables.length >= 3) {
        populateTable(tables[0], [model.age, model.ethnicity, model.sexuality, model.gender]);
        populateTable(tables[1], [model.eyes, model.hair, model.body, model.hairLength]);
        populateTable(tables[2], [model.drinking, model.smoking]);
    }
}

function populateTable(table, values) {
    const cells = table.querySelectorAll('td');
    values.forEach((value, index) => {
        if (cells[index]) cells[index].textContent = value;
    });
}

// Function to populate cards on any page
function populateCards(containerSelector, cardTemplate) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    // In a real application, you would fetch this data from your backend
    const mockDatabase = [
        // ... your model data here ...
    ];

    mockDatabase.forEach(model => {
        const cardHTML = cardTemplate(model);
        container.innerHTML += cardHTML;
    });

    // Setup click listeners for the new cards
    setupAllCards();
}

// Example card template function
function cardTemplate(model) {
    return `
        <div class="col-md-4 mb-4">
            <div class="card hover-card" data-model-id="${model.id}">
                <img src="${model.image}" class="card-img-top" alt="${model.name}">
                <div class="card-body">
                    <h5 class="card-title">${model.name}</h5>
                    <p class="card-text">${model.city}, ${model.age}</p>
                </div>
            </div>
        </div>
    `;
}