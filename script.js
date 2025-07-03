 // Création des roses flottantes
        function createRoses() {
            const container = document.getElementById('roses-container');
            const roseCount = 30;

            for (let i = 0; i < roseCount; i++) {
                const rose = document.createElement('div');
                rose.classList.add('rose');

                // Choisir aléatoirement entre 3 types de roses
                const roseType = Math.floor(Math.random() * 3) + 1;
                rose.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2017/01/10/03/06/rose-1968358_960_720.png')";

                // Position aléatoire
                const posX = Math.random() * 100;
                const posY = Math.random() * 100;
                const delay = Math.random() * 10;
                const duration = 5 + Math.random() * 10;

                rose.style.left = `${posX}vw`;
                rose.style.top = `${posY}vh`;
                rose.style.animationDelay = `${delay}s`;
                rose.style.animationDuration = `${duration}s`;

                container.appendChild(rose);
            }
        }

        // Compte à rebours pour le prochain anniversaire
        function updateCountdown() {
            // Supposons que l'anniversaire est le 15 août (peut être modifié)
            const now = new Date();
            let nextBirthday = new Date(now.getFullYear(), 7, 15); // Mois 7 = août

            // Si l'anniversaire est déjà passé cette année, prendre l'année prochaine
            if (now > nextBirthday) {
                nextBirthday = new Date(now.getFullYear() + 1, 7, 15);
            }

            const diff = nextBirthday - now;

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        }

        // Gestionnaire de musique
        function setupAudio() {
            const audio = document.getElementById('birthday-song');
            const playBtn = document.getElementById('play-btn');
            const pauseBtn = document.getElementById('pause-btn');

            playBtn.addEventListener('click', () => {
                audio.play();
            });

            pauseBtn.addEventListener('click', () => {
                audio.pause();
            });

            // Démarrer la musique automatiquement (mais avec interaction utilisateur requise)
            document.body.addEventListener('click', () => {
                audio.play().catch(e => console.log('La lecture automatique a été bloquée:', e));
            }, { once: true });
        }

        // Bouton surprise
        function setupSurpriseButton() {
            const btn = document.getElementById('surprise-btn');

            btn.addEventListener('click', () => {
                // Animation de confettis
                createConfetti();

                // Changer le texte du bouton
                btn.textContent = 'Surprise! 🎉';

                // Animation supplémentaire
                btn.classList.add('heartbeat');

                // Jouer un son de surprise (optionnel)
                const audio = new Audio('https://www.soundjay.com/human/sounds/applause-01.mp3');
                audio.play();
            });
        }

        // Création de confettis
        function createConfetti() {
            const container = document.getElementById('roses-container');
            const confettiCount = 100;

            for (let i = 0; i < confettiCount; i++) {
                const confetti = document.createElement('div');
                confetti.classList.add('rose');
                confetti.style.backgroundImage = 'none';
                confetti.style.backgroundColor = getRandomColor();
                confetti.style.width = '10px';
                confetti.style.height = '10px';
                confetti.style.borderRadius = '50%';

                const posX = Math.random() * 100;
                const delay = Math.random() * 3;
                const duration = 2 + Math.random() * 3;

                confetti.style.left = `${posX}vw`;
                confetti.style.top = '-10px';
                confetti.style.animation = `confettiFall ${duration}s linear ${delay}s forwards`;

                container.appendChild(confetti);

                // Supprimer le confetti après l'animation
                setTimeout(() => {
                    confetti.remove();
                }, (duration + delay) * 1000);
            }

            // Ajouter l'animation de confettis
            const style = document.createElement('style');
            style.innerHTML = `
        @keyframes confettiFall {
            0% { transform: translateY(0) rotate(0deg); opacity: 1; }
            100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
    `;
            document.head.appendChild(style);
        }

        function getRandomColor() {
            const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ff9900'];
            return colors[Math.floor(Math.random() * colors.length)];
        }

       // Compteur de visiteurs
let visitors = localStorage.getItem('visitors') || 0; // Récupérer le compteur depuis le stockage local
visitors++; // Incrémenter le compteur
localStorage.setItem('visitors', visitors); // Sauvegarder le nouveau compteur
document.getElementById('visitor-counter').textContent = `Nbre de visite : ${visitors}`; // Afficher le compteur