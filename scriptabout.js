
        document.addEventListener("DOMContentLoaded", function() {
            const cards = document.querySelectorAll('.zigzag-card-about');
            cards.forEach(card => {
                card.classList.add('card-animate'); // Add the animation class to each card
            });
        });
