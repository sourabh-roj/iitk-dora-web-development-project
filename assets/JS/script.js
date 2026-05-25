// NAVBAR TOGGLER (This is a standalone function, likely doesn't need DOMContentLoaded unless it's defined later)
// As it's not present in the provided JS, assuming it's elsewhere or handled by Bootstrap itself.


// Count-up animation function (DEFINED GLOBALLY - accessible anywhere)
// This function doesn't need to be in DOMContentLoaded as it's a utility definition.
function animateCountUp(el, target, duration = 2000) {
    let start = 0;
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        el.textContent = Math.floor(progress * (target - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            el.textContent = target.toLocaleString();
        }
    };
    window.requestAnimationFrame(step);
}


// SINGLE DOMContentLoaded BLOCK FOR ALL INITIALIZATIONS
document.addEventListener('DOMContentLoaded', function() {

    // --- SLIDER INITIALIZATION ---
    (function() { // Self-invoking function to encapsulate slider logic
        const slider = document.querySelector('.slider');
        const slides = document.querySelector('.slides');
        const images = document.querySelectorAll('.slides img');

        // Only proceed if critical slider elements exist
        if (!slider || !slides || images.length === 0) {
            console.warn("Slider elements not found. Skipping slider initialization.");
            return; // Exit this specific function if elements are missing
        }

        const slideCount = images.length;
        let currentIndex = 0;
        let autoSlideInterval;

        // Dots
        const dotsContainer = document.querySelector('.slider-dots');
        const dots = []; // Initialize dots as empty array

        if (dotsContainer) { // Only create dots if the container exists
            dotsContainer.innerHTML = '';
            for (let i = 0; i < slideCount; i++) {
                const dot = document.createElement('span');
                dot.classList.add('slider-dot');
                if (i === 0) dot.classList.add('active');
                dot.addEventListener('click', () => {
                    goToSlide(i);
                    restartAutoSlide();
                });
                dotsContainer.appendChild(dot);
                dots.push(dot); // Add to the local dots array
            }
        }

        function goToSlide(index) {
            currentIndex = (index + slideCount) % slideCount;
            slides.style.transform = `translateX(-${currentIndex * 100}%)`;
            dots.forEach(dot => dot.classList.remove('active'));
            if (dots[currentIndex]) { // Check if dot exists before adding class
                dots[currentIndex].classList.add('active');
            }
        }

        function nextSlide() {
            goToSlide(currentIndex + 1);
        }

        function startAutoSlide() {
            clearInterval(autoSlideInterval); // Clear any existing interval
            autoSlideInterval = setInterval(nextSlide, 3500);
        }

        function stopAutoSlide() {
            clearInterval(autoSlideInterval);
        }

        function restartAutoSlide() {
            stopAutoSlide();
            startAutoSlide();
        }

        // Initialize Slider
        goToSlide(0);
        startAutoSlide();

        // Pause on hover
        slider.addEventListener('mouseenter', stopAutoSlide);
        slider.addEventListener('mouseleave', startAutoSlide);

    })(); // End of Slider IIFE


    // --- NEWS SECTION INITIALIZATION ---
    (function() { // Self-invoking function to encapsulate news marquee logic
        const newsMarquee = document.querySelector('.news-marquee');
        const track = document.getElementById('newsMarqueeTrack');

        if (!newsMarquee || !track) {
            console.warn("News Marquee elements not found. Skipping news marquee initialization.");
            return; // Exit this specific function
        }

        const originalItems = Array.from(track.children);

        if (originalItems.length === 0) {
            console.warn("No news items found for the marquee. Please add some .news-item elements.");
            return; // Exit this specific function
        }

        // --- Dynamic Duplication ---
        originalItems.forEach(item => {
            track.appendChild(item.cloneNode(true));
        });

        // --- Calculate Dimensions ---
        // Ensuring this calculation is correct is vital.
        const firstItem = originalItems[0];
        const itemStyle = window.getComputedStyle(firstItem);
        const itemHeight = firstItem.offsetHeight + parseFloat(itemStyle.marginBottom);

        const scrollThreshold = itemHeight * originalItems.length;

        let scrollPos = 0;
        let animationFrameId;
        let isPaused = false;

        // --- Animation Function ---
        function animate() {
            if (!isPaused) {
                scrollPos += 0.5;

                if (scrollPos >= scrollThreshold) {
                    scrollPos = 0;
                }

                track.style.transform = `translateY(-${Math.round(scrollPos)}px)`;
            }
            animationFrameId = requestAnimationFrame(animate); // Keep requesting frames
        }

        // --- Event Listeners for Pause on Hover ---
        newsMarquee.addEventListener('mouseenter', () => {
            isPaused = true;
        });

        newsMarquee.addEventListener('mouseleave', () => {
            isPaused = false;
        });

        // Start the animation
        animate();

    })(); // End of News Section IIFE


    // --- COUNTER NUMBERS INITIALIZATION ---
    (function() { // Self-invoking function to encapsulate counter logic
        // Based on your HTML: <span class="stats-number countup" data-count="32000">0</span>
        // The selector should be '.stats-number.countup'
        const counterNumbers = document.querySelectorAll('.stats-number.countup');

        if (counterNumbers.length === 0) {
            console.warn("No counter number elements found with class 'stats-number countup'. Skipping counter animation.");
            return; // Exit this specific function
        }

        counterNumbers.forEach(el => {
            const target = parseInt(el.dataset.count); // Changed from .dataset.target to .dataset.count
            if (!isNaN(target)) {
                // Use Intersection Observer to animate when element comes into view
                const observer = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            animateCountUp(entry.target, target);
                            observer.unobserve(entry.target); // Stop observing once animated
                        }
                    });
                }, { threshold: 0.5 }); // Trigger when 50% of element is visible
                observer.observe(el);
            }
        });
    })(); // End of Counter Numbers IIFE

}); // END OF THE SINGLE DOMContentLoaded BLOCK