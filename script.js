(function() {
        const track = document.getElementById('sliderTrack');
        const prev = document.getElementById('prevBtn');
        const next = document.getElementById('nextBtn');
        if (!track || !prev || !next) return;

        const slides = Array.from(track.children);
        let currentIndex = 0;
        const totalSlides = slides.length;

        const updateSlide = () => {
            const width = track.parentElement.clientWidth;
            track.style.transform = `translateX(-${currentIndex * width}px)`;
        };

        next.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlide();
        });

        prev.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateSlide();
        });

        window.addEventListener('resize', updateSlide);
        updateSlide();
    })();
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });