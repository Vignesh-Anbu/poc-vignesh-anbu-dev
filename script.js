document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('surprise-form');
    const messageContainer = document.getElementById('message-container');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const nameInput = document.getElementById('name').value.trim();
        const ageInput = document.getElementById('age').value.trim();
        if (nameInput !== '' && ageInput !== '') {
            generateSurpriseMessage(nameInput, ageInput);
        }
    });

    function generateSurpriseMessage(name, age) {
        const messages = [
            `Hello ${name}, Happy ${age}th Birthday! Enjoy your special day! 🎉`,
            `Wishing you a fantastic year ahead, ${name}! Happy ${age}th Birthday! 🎂`,
            `May your birthday be filled with joy and laughter, ${name}! Happy ${age}th Birthday! 🎈`,
            `Sending you lots of love and happiness on your special day, ${name}! Happy ${age}th Birthday! 🎁`
        ];
        const randomIndex = Math.floor(Math.random() * messages.length);
        const message = messages[randomIndex];
        displayMessage(message);
    }

    function displayMessage(message) {
        messageContainer.innerHTML = `<p class="animated fadeIn">${message}</p>`;
        animateMessage();
    }

    function animateMessage() {
        messageContainer.classList.add('animated', 'bounceIn');
        setTimeout(function() {
            messageContainer.classList.remove('animated', 'bounceIn');
        }, 3000); // Remove animation class after 3 seconds
    }
});
