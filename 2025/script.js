document.addEventListener('DOMContentLoaded', () => {
    startCountdown(); // Lance le compteur automatique
});

function startCountdown() {
    let count = 10;
    let countdownElement = document.createElement('div');
    countdownElement.className = 'countdown';
    document.body.appendChild(countdownElement);

    let countdownInterval = setInterval(() => {
        countdownElement.innerText = count;
        count--;

        if (count < 0) {
            clearInterval(countdownInterval);
            displayNewYearAnimation();
        }
    }, 1000);
}

function displayNewYearAnimation() {
    let container = document.querySelector('.container');
    let h2 = document.querySelector('h2');

    // Transition vers "2025"
    container.classList.add('newyear'); // Applique la classe pour l'année 2025
    h2.innerText = 'Happy New Year'; // Met à jour le texte

    // Animation automatique de lumière sur le texte
    setTimeout(() => {
        h2.classList.add('active'); // Ajoute l'animation de couleur sans cliquer
    }, 500); // Début après 0.5 seconde pour s'assurer que l'animation s'active.

    // Suppression automatique après 3 secondes
    setTimeout(() => {
        document.querySelector('.countdown').remove(); // Supprimer le compteur
        document.querySelector('.container').remove(); // Supprimer le conteneur
        document.querySelector('h2').remove(); // Supprimer le texte "Happy New Year"
        showFinalMessage(); // Affiche le message final
    }, 6000);
}

function showFinalMessage() {
    let messageElement = document.createElement('div');
    messageElement.className = 'final-message';
    messageElement.innerText = 'Wishing You a Bright & Prosperous Year Ahead!';
    document.body.appendChild(messageElement);

    // Animation splendide pour le message final
    messageElement.style.opacity = 0;
    messageElement.style.transform = 'scale(0.8)';
    setTimeout(() => {
        messageElement.style.opacity = 1;
        messageElement.style.transform = 'scale(1)';
        messageElement.style.transition = 'all 1s ease-in-out';
    }, 100);
}

function showFinalMessage() {
    let messageElement = document.createElement('div');
    messageElement.className = 'final-message';
    messageElement.innerText = 'À tous ceux que j\'aime et qui m\'aiment, que 2025 soit une année de paix, de réussite et d\'amour. Que vos rêves s\'accomplissent et vos cœurs s\'illuminent de joie';
    document.body.appendChild(messageElement);

    // Animation splendide pour le message final
    messageElement.style.opacity = 0;
    messageElement.style.transform = 'scale(0.8)';
    setTimeout(() => {
        messageElement.style.opacity = 1;
        messageElement.style.transform = 'scale(1)';
        messageElement.style.transition = 'all 1s ease-in-out';

        // Ajoute le bouton juste en dessous du message final
        let buttonContainer = document.createElement('div');
        buttonContainer.className = 'whatsapp-button';
        buttonContainer.innerHTML = `<button id="whatsappButton">Souhaiter moi aussi</button>`;
        messageElement.appendChild(buttonContainer);

        // Ajoute l'action au bouton
        document.getElementById('whatsappButton').addEventListener('click', function() {
            const phoneNumber = '243975130019'; // Ton numéro de téléphone
            const message = 'Happy New Year! 🎉 Je te souhaite une année remplie de succès et de bonheur !';
            const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });
    }, 100);
}
