document.addEventListener('DOMContentLoaded', () => {

    // --- Parallax Effect for Hero ---
    const heroBg = document.querySelector('.parallax-img');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        if (heroBg && scrollPosition < window.innerHeight) {
            heroBg.style.transform = `translateY(${scrollPosition * 0.4}px) scale(1.1)`;
        }
    });

    // --- 3D Tilt Effect for Bento Cards ---
    const cards = document.querySelectorAll('[data-tilt]');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -5; // Max rotation deg
            const rotateY = ((x - centerX) / centerX) * 5;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });

    // --- Scroll Reveal Animation ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply to headers and cards
    const revealElements = document.querySelectorAll('.bento-item, .service-card, .section-header');
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });

    // --- Mobile Menu Toggle ---
    const mobileBtn = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            if (navLinks.style.display === 'flex') {
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'rgba(5,5,5,0.95)';
                navLinks.style.padding = '2rem';
                navLinks.style.backdropFilter = 'blur(10px)';
            }
        });
    }

    // --- Gallery Logic (Global for inline events) ---
    function changeImage(src) {
        const mainImg = document.querySelector('.active-img');
        const thumbnails = document.querySelectorAll('.thumb');

        // Update main image
        if (mainImg) mainImg.src = src;

        // Update active class on thumbnails
        thumbnails.forEach(thumb => {
            if (thumb.src === src) {
                thumb.classList.add('active');
            } else {
                thumb.classList.remove('active');
            }
        });
    }

    // --- Dynamic Details Page Logic ---
    // This DOMContentLoaded listener is nested inside the main one, which is fine.
    // It will execute when the outer DOMContentLoaded fires.
    // --- Dynamic Details Page Logic ---
    // Check if we are on the details page
    if (window.location.pathname.includes('details.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const carId = urlParams.get('id') || 'bugatti-chiron'; // Default to Bugatti

        loadCarDetails(carId);
    }

    async function loadCarDetails(id) {
        let car;
        try {
            const response = await fetch('/api/cars');
            const data = await response.json();
            if (data.success && data.cars[id]) {
                car = data.cars[id];
            } else {
                document.getElementById('car-name').innerText = "Car Not Found";
                return;
            }
        } catch (err) {
            console.error("Error fetching car details:", err);
            document.getElementById('car-name').innerText = "Error Loading Car";
            return;
        }

        // Populate Text
        document.getElementById('car-name').innerText = car.name;
        document.getElementById('car-sub').innerText = car.tagline.toUpperCase();
        document.getElementById('car-price').innerText = car.price;
        document.getElementById('car-desc').innerText = car.description;

        // Populate Images
        const mainImg = document.getElementById('main-img');
        const thumbs = [
            document.getElementById('thumb-1'),
            document.getElementById('thumb-2'),
            document.getElementById('thumb-3'),
            document.getElementById('thumb-4')
        ];

        // Set Main Image
        mainImg.src = car.images.main;

        // Set Thumbs (using available images in order)
        const imgKeys = ['main', 'side', 'interior', 'rear'];
        thumbs.forEach((thumb, index) => {
            if (imgKeys[index]) {
                thumb.src = car.images[imgKeys[index]];
                // Reset active state
                if (index === 0) thumb.classList.add('active');
                else thumb.classList.remove('active');
            }
        });

        // Populate Specs
        const specsContainer = document.getElementById('specs-container');
        specsContainer.innerHTML = ''; // Clear existing

        for (const [label, value] of Object.entries(car.specs)) {
            const specDiv = document.createElement('div');
            specDiv.className = 'spec-item';
            specDiv.innerHTML = `
            <span>${label}</span>
            <h4>${value}</h4>
        `;
            specsContainer.appendChild(specDiv);
        }
    }
    // --- Product Gallery Logic ---
    const mainImage = document.getElementById('mainImage');
    const thumbs = document.querySelectorAll('.thumb');

    if (mainImage && thumbs.length > 0) {
        thumbs.forEach(thumb => {
            thumb.addEventListener('click', function () {
                // Update main image source
                mainImage.style.opacity = '0';
                setTimeout(() => {
                    mainImage.src = this.src;
                    mainImage.style.opacity = '1';
                }, 200);

                // Update active class
                thumbs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }

    // --- Authentication State Management ---
    function checkAuthState() {
        // Select logic for 'Sign In' button variant
        // It might be an <a> tag now
        const navBtn = document.querySelector('.navbar .btn-primary');
        const mobileNavBtn = document.querySelector('.nav-links .btn-primary'); // Handle mobile if duplicated

        const userStr = localStorage.getItem('user');

        if (userStr) {
            const user = JSON.parse(userStr);
            // User is logged in
            if (navBtn) {
                navBtn.textContent = 'Profile';
                navBtn.href = 'profile.html';
                navBtn.classList.remove('btn-primary'); // Optional: Change style
                navBtn.classList.add('btn-secondary'); // Example: Use secondary style

                // Add logout logic if needed, or handle it in profile.html
            }
        } else {
            // User is logged out
            if (navBtn) {
                navBtn.textContent = 'Sign In';
                navBtn.href = 'signin.html';
                navBtn.classList.add('btn-primary');
                navBtn.classList.remove('btn-secondary');
            }
        }
    }

    // --- Pre-fill Contact Form Subject ---
    if (window.location.pathname.includes('contact.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const subject = urlParams.get('subject');

        if (subject === 'test-drive') {
            const subjectSelect = document.querySelector('select');
            if (subjectSelect) {
                // Find the option that contains 'Test Drive'
                for (let i = 0; i < subjectSelect.options.length; i++) {
                    if (subjectSelect.options[i].text.includes('Test Drive')) {
                        subjectSelect.selectedIndex = i;
                        break;
                    }
                }
            }
        }
    }

    // Run auth check
    checkAuthState();

    // --- Contact Form Handling ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Gather data
            const formData = {
                name: contactForm.querySelector('input[placeholder="Jane"]').value + ' ' + contactForm.querySelector('input[placeholder="Doe"]').value,
                email: contactForm.querySelector('input[type="email"]').value,
                subject: contactForm.querySelector('select').value,
                message: contactForm.querySelector('textarea').value
            };

            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });
                const data = await response.json();

                if (data.success) {
                    alert(data.message);
                    contactForm.reset();
                } else {
                    alert('Error: ' + data.message);
                }
            } catch (error) {
                console.error('Error submitting contact form:', error);
                alert('Something went wrong. Please try again.');
            }
        });
    }

    // --- Booking Form Handling ---
    // Note: This element exists on details.html
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Gather data
            const carName = document.getElementById('car-name').innerText;
            const formData = {
                name: bookingForm.querySelector('input[type="text"]').value,
                email: bookingForm.querySelector('input[type="email"]').value,
                carModel: carName
            };

            try {
                const response = await fetch('/api/book', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });
                const data = await response.json();

                if (data.success) {
                    alert(data.message);
                    bookingForm.reset();
                } else {
                    alert('Error: ' + data.message);
                }
            } catch (error) {
                console.error('Error submitting booking:', error);
                alert('Something went wrong. Please try again.');
            }
        });
    }

});
