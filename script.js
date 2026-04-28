document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();

    // Sticky Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Reveal Animations on Scroll
    const revealElements = document.querySelectorAll('.reveal, .reveal-stagger');
    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(el => revealOnScroll.observe(el));

    // Cursor Glow Effect (Desktop Only)
    const cursorGlow = document.getElementById('cursor-glow');
    if (window.innerWidth > 1024) {
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            cursorGlow.style.left = `${x}px`;
            cursorGlow.style.top = `${y}px`;
        });
    }

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-links a');
    
    const toggleMenu = () => {
        menuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
    };

    menuToggle.addEventListener('click', toggleMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggleMenu();
        });
    });

    // Copy Email to Clipboard
    const copyBtn = document.querySelector('.copy-email-btn');
    const emailText = 'maitryasontakke1@gmail.com';
    const feedback = document.querySelector('.copy-feedback');

    if (copyBtn) {
        copyBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            navigator.clipboard.writeText(emailText).then(() => {
                feedback.classList.add('active');
                setTimeout(() => {
                    feedback.classList.remove('active');
                }, 2000);
            });
        });
    }
});
