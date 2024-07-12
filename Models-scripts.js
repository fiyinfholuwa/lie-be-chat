document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('Models.html')) {
        setupModelCards();
    } else if (window.location.pathname.includes('Models-details.html')) {
        loadModelDetail();
    }
});

function setupModelCards() {
    const cards = document.querySelectorAll('.hover-card');
    
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const modelId = this.getAttribute('data-model-id');
            window.location.href = `Models-details.html?id=${modelId}`;
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
    // Replace this with actual data fetching from your backend
    // This is just a mock function returning hardcoded data
    return {
        id: modelId,
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
    };
}

function populateModelDetails(model) {
    document.querySelector('.user-profile-photo').src = model.image;
    document.querySelector('h2').textContent = model.name;
    document.querySelector('h2 + p').textContent = `${model.gender}, ${model.age}, ${model.country}, ${model.city}`;
    
    // Populate the tables
    document.querySelector('table:nth-of-type(1) td:nth-of-type(1)').textContent = model.age;
    document.querySelector('table:nth-of-type(1) td:nth-of-type(2)').textContent = model.ethnicity;
    document.querySelector('table:nth-of-type(1) td:nth-of-type(3)').textContent = model.sexuality;
    document.querySelector('table:nth-of-type(1) td:nth-of-type(4)').textContent = model.gender;

    document.querySelector('table:nth-of-type(2) td:nth-of-type(1)').textContent = model.eyes;
    document.querySelector('table:nth-of-type(2) td:nth-of-type(2)').textContent = model.hair;
    document.querySelector('table:nth-of-type(2) td:nth-of-type(3)').textContent = model.body;
    document.querySelector('table:nth-of-type(2) td:nth-of-type(4)').textContent = model.hairLength;

    document.querySelector('table:nth-of-type(3) td:nth-of-type(1)').textContent = model.drinking;
    document.querySelector('table:nth-of-type(3) td:nth-of-type(2)').textContent = model.smoking;
}