document.addEventListener("DOMContentLoaded", function() {
    // Example data structure of card details
    const cardDetails = [
        { id: 1, name: "Roadblock", age: 28, city: "New York", status: "GOLD" },
        { id: 2, name: "Another Roadblock", age: 32, city: "Los Angeles", status: "SILVER" },
        // Add more card details as needed
    ];

    // Function to handle card clicks
    function handleCardClick(event) {
        const cardId = event.currentTarget.dataset.cardId; // Get card ID from clicked card
        const details = cardDetails.find(card => card.id === parseInt(cardId)); // Find details based on ID

        if (details) {
            // Update profile details section with the clicked card's details
            const profileDetails = document.getElementById("profile-details");
            profileDetails.innerHTML = `
                <h2>${details.name} <span class="text-success">●</span></h2>
                <p>Age: ${details.age}</p>
                <p>City: ${details.city}</p>
                <p>Status: <span class="badge bg-warning text-dark">${details.status}</span></p>
            `;
        }
    }

    // Attach click event listener to each profile card
    const profileCards = document.querySelectorAll(".hover-card");
    profileCards.forEach(card => {
        card.addEventListener("click", handleCardClick);
    });
});