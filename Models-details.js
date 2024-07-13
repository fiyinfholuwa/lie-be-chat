document.querySelectorAll('.photo-item').forEach(item => {
    item.addEventListener('click', event => {
        alert('Upgrade your account to view full-size photos!');
    });
});

// Photo gallery lightbox
document.querySelectorAll('.photo-item').forEach(item => {
    item.addEventListener('click', event => {
        if (item.querySelector('.overlay')) {
            Swal.fire({
                title: 'Upgrade Required',
                text: 'Please upgrade your account to view full-size photos!',
                icon: 'info',
                confirmButtonText: 'Upgrade Now'
            });
        } else {
            Swal.fire({
                imageUrl: item.querySelector('img').src,
                imageAlt: 'Full-size photo',
                showCloseButton: true,
                showConfirmButton: false
            });
        }
    });
});

// Interactive hover effects for recommended cards
document.querySelectorAll('.hover-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('.hover-overlay').style.opacity = '1';
    });
    card.addEventListener('mouseleave', () => {
        card.querySelector('.hover-overlay').style.opacity = '0';
    });
});

// Message and Wink button functionality
document.querySelector('.btn-message').addEventListener('click', () => {
    Swal.fire({
        title: 'Send a Message',
        input: 'textarea',
        inputPlaceholder: 'Type your message here...',
        showCancelButton: true,
        confirmButtonText: 'Send',
        showLoaderOnConfirm: true,
        preConfirm: (message) => {
            // Here you would typically send the message to your server
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 2000);
            });
        },
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('Sent!', 'Your message has been sent successfully.', 'success');
        }
    });
});

document.querySelector('.btn-wink').addEventListener('click', () => {
    Swal.fire({
        title: 'Wink Sent!',
        text: 'You\'ve sent a wink to Bowler.',
        icon: 'success',
        confirmButtonText: 'OK'
    });
});

// Virtual gift sending
document.querySelector('.fa-gift').addEventListener('click', () => {
    Swal.fire({
        title: 'Send a Virtual Gift',
        text: 'Choose a gift to send:',
        input: 'select',
        inputOptions: {
            flower: 'Flower',
            chocolate: 'Chocolate Box',
            teddy: 'Teddy Bear',
            ring: 'Ring'
        },
        showCancelButton: true,
        confirmButtonText: 'Send Gift',
        showLoaderOnConfirm: true,
        preConfirm: (gift) => {
            // Here you would typically process the gift sending on your server
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 2000);
            });
        },
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('Gift Sent!', 'Your virtual gift has been sent successfully.', 'success');
        }
    });
});

// Add Friend and Add Favorites functionality
document.querySelector('.btn-outline-primary').addEventListener('click', function() {
    this.classList.toggle('active');
    if (this.classList.contains('active')) {
        this.textContent = 'Friend Added';
        Swal.fire('Success!', 'You have added Bowler as a friend.', 'success');
    } else {
        this.textContent = 'Add Friend';
        Swal.fire('Removed', 'You have removed Bowler from your friends list.', 'info');
    }
});

document.querySelector('.btn-outline-secondary').addEventListener('click', function() {
    this.classList.toggle('active');
    if (this.classList.contains('active')) {
        this.textContent = 'In Favorites';
        Swal.fire('Success!', 'You have added Bowler to your favorites.', 'success');
    } else {
        this.textContent = 'Add Favorites';
        Swal.fire('Removed', 'You have removed Bowler from your favorites.', 'info');
    }
});

// Social sharing functionality
document.querySelectorAll('.social-icons i').forEach(icon => {
    icon.addEventListener('click', () => {
        const network = icon.className.split(' ')[1].split('-')[1];
        Swal.fire({
            title: 'Share Profile',
            text: `Sharing profile on ${network.charAt(0).toUpperCase() + network.slice(1)}`,
            icon: 'info',
            confirmButtonText: 'OK'
        });
    });
});


// Hit or Miss functionality
document.querySelector('.btn-hit').addEventListener('click', function() {
    handleHitOrMiss('hit');
});

document.querySelector('.btn-miss').addEventListener('click', function() {
    handleHitOrMiss('miss');
});

function handleHitOrMiss(action) {
    const profileName = document.querySelector('h2').textContent;
    let message, icon;

    if (action === 'hit') {
        message = `You've hit ${profileName}! If they hit you back, it's a match!`;
        icon = 'success';
    } else {
        message = `You've missed ${profileName}. They won't be shown to you again.`;
        icon = 'info';
    }

    Swal.fire({
        title: action === 'hit' ? 'It\'s a Hit!' : 'Missed',
        text: message,
        icon: icon,
        confirmButtonText: 'OK'
    }).then(() => {
        // Here you would typically send this action to your server
        console.log(`User ${action} the profile ${profileName}`);
        
        // For demo purposes, we'll disable the buttons after use
        document.querySelector('.btn-hit').disabled = true;
        document.querySelector('.btn-miss').disabled = true;
        
        if (action === 'hit') {
            checkForMatch(profileName);
        }
    });
}

function checkForMatch(profileName) {
    // This is where you'd typically check with your server if this is a mutual match
    // For demo purposes, we'll simulate a 50% chance of a match
    const isMatch = Math.random() < 0.5;

    if (isMatch) {
        setTimeout(() => {
            Swal.fire({
                title: 'It\'s a Match!',
                text: `You and ${profileName} have both hit each other!`,
                icon: 'success',
                confirmButtonText: 'Start Chatting'
            }).then(() => {
                console.log(`User matched with ${profileName}`);
                // Here you would typically open a chat window or redirect to a chat page
            });
        }, 1500);
    }
}

// Copy Link functionality
document.getElementById('copyLinkBtn').addEventListener('click', function() {
    const linkInput = document.getElementById('profileLink');
    linkInput.select();
    linkInput.setSelectionRange(0, 99999); 

    try {
        // Attempt to copy using the Clipboard API
        navigator.clipboard.writeText(linkInput.value).then(() => {
            showCopySuccess();
        }).catch(err => {
            // Fallback for older browsers
            document.execCommand('copy');
            showCopySuccess();
        });
    } catch (err) {
        console.error('Failed to copy: ', err);
        Swal.fire({
            title: 'Copy Failed',
            text: 'Unable to copy to clipboard. Please try again.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
});

function showCopySuccess() {
    const copyBtn = document.getElementById('copyLinkBtn');
    const originalText = copyBtn.textContent;
    copyBtn.textContent = 'Copied!';
    copyBtn.classList.add('btn-success');
    copyBtn.classList.remove('btn-primary');

    setTimeout(() => {
        copyBtn.textContent = originalText;
        copyBtn.classList.add('btn-primary');
        copyBtn.classList.remove('btn-success');
    }, 2000);

    Swal.fire({
        title: 'Link Copied!',
        text: 'The profile link has been copied to your clipboard.',
        icon: 'success',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
    });
}