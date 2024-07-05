// MESSAGE FUNCTIONALITIES
        const aboutMe = document.getElementById('aboutMe');
        const charCount = document.getElementById('charCount');

        aboutMe.addEventListener('input', function() {
            const remainingChars = 100 - this.value.length;
            charCount.textContent = remainingChars;
        });

// BACK BUTTON NAVIGATIONS
document.getElementsById('backButton').addEventListener('click', function() {
    window.location.href = 'Add-page.htm';
});