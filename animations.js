document.addEventListener('DOMContentLoaded', function() {
    // Declare AOS, $, gsap, and ScrollTrigger
    const AOS = window.AOS;
    const $ = window.jQuery;
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;

    // Initialize AOS with custom settings
    if (AOS) {
        AOS.init({
            duration: 800,
            easing: 'ease-out',
            once: false,
            mirror: true,
            offset: 50,
            delay: 100,
            disable: 'mobile'
        });
    }
    
    // Theme toggle functionality
    const themeSwitch = document.getElementById('theme-switch');
    if (themeSwitch) {
        themeSwitch.addEventListener('change', function() {
            document.body.classList.toggle('light-theme');
        });
    }
    
    // Animate stat counters
    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length > 0) {
        const animateStats = () => {
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-count'));
                const duration = 2000; // 2 seconds
                const step = target / (duration / 16); // 60fps
                let current = 0;
                
                const updateCounter = () => {
                    current += step;
                    if (current < target) {
                        stat.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        stat.textContent = target;
                    }
                };
                
                updateCounter();
            });
        };
        
        // Use Intersection Observer to trigger animation when visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    observer.disconnect();
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(document.querySelector('.stats-container'));
    }
    
    // Initialize slick carousel for slideshows
    if ($ && typeof $.fn.slick !== 'undefined') {
        $('.cars-slideshow').slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            fade: true,
            cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
            prevArrow: '<button class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
            nextArrow: '<button class="slick-next"><i class="fas fa-chevron-right"></i></button>'
        });
        
        $('.community-slideshow').slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 6000,
            fade: true,
            cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
            prevArrow: '<button class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
            nextArrow: '<button class="slick-next"><i class="fas fa-chevron-right"></i></button>'
        });
    }
    
    // GSAP animations for enhanced effects
    if (gsap && ScrollTrigger) {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);
        
        // Animate header elements
        gsap.from('.header-content h1', {
            y: -50,
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out'
        });
        
        gsap.from('.header-content .subtitle', {
            y: 30,
            opacity: 0,
            duration: 1.2,
            delay: 0.3,
            ease: 'power3.out'
        });
        
        gsap.from('.btn-container', {
            y: 30,
            opacity: 0,
            duration: 1.2,
            delay: 0.6,
            ease: 'power3.out'
        });
        
        // Animate sections on scroll
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            gsap.from(section, {
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            });
        });
        
        // Animate staff cards
        const staffCards = document.querySelectorAll('.staff-card');
        if (staffCards.length > 0) {
            staffCards.forEach((card, index) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 90%',
                        toggleActions: 'play none none none'
                    },
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: 'power3.out'
                });
            });
        }
        
        // Animate achievements in wall of fame
        const achievements = document.querySelectorAll('.achievement');
        if (achievements.length > 0) {
            achievements.forEach((achievement, index) => {
                const direction = index % 2 === 0 ? -50 : 50;
                gsap.from(achievement, {
                    scrollTrigger: {
                        trigger: achievement,
                        start: 'top 90%',
                        toggleActions: 'play none none none'
                    },
                    x: direction,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power3.out'
                });
            });
        }
    }
    
    // Fix for staff owner card visibility
    const ownerCard = document.querySelector('.owner-card');
    if (ownerCard) {
        ownerCard.style.display = 'flex';
        ownerCard.style.flexDirection = 'column';
        ownerCard.style.alignItems = 'center';
        ownerCard.style.justifyContent = 'center';
        ownerCard.style.visibility = 'visible';
        ownerCard.style.opacity = '1';
        ownerCard.style.zIndex = '5';
    }
    
    // Fix for community support section visibility
    const communitySupport = document.querySelector('.ems-staff');
    if (communitySupport) {
        communitySupport.style.display = 'block';
        communitySupport.style.visibility = 'visible';
        communitySupport.style.opacity = '1';
        communitySupport.style.overflow = 'visible';
    }
    
    // Create animated background particles for wall of fame
    const bgAnimation = document.getElementById('bgAnimation');
    if (bgAnimation) {
        for (let i = 0; i < 25; i++) {
            const particle = document.createElement('div');
            particle.classList.add('bg-particle');
            particle.style.width = `${Math.random() * 15 + 5}px`;
            particle.style.height = particle.style.width;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.animationDuration = `${Math.random() * 15 + 10}s`;
            particle.style.animationDelay = `${Math.random() * 5}s`;
            bgAnimation.appendChild(particle);
        }
    }
    
    // Add GTA-style neon glow to buttons and titles
    const buttons = document.querySelectorAll('.btn, .nav-btn');
    buttons.forEach(button => {
        button.classList.add('glow');
    });
    
    const titles = document.querySelectorAll('.section-title, .slide-title, .tier-label');
    titles.forEach(title => {
        title.classList.add('neon-text');
    });
    
    // Add parallax effect to background images
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');
        
        parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-speed') || 0.5;
            element.style.backgroundPositionY = `${scrollPosition * speed}px`;
        });
    });
    
    // Add GIF background fallback
    const body = document.querySelector('body');
    const gifBackground = new Image();
    gifBackground.src = 'img/gif/paradise.gif';
    
    gifBackground.onerror = function() {
        body.style.backgroundImage = 'url("img/banner.jpg")';
    };
    
    // Add cursor trail effect
    const cursorTrail = document.createElement('div');
    cursorTrail.classList.add('cursor-trail');
    document.body.appendChild(cursorTrail);
    
    document.addEventListener('mousemove', function(e) {
        const trail = document.createElement('div');
        trail.classList.add('trail-particle');
        trail.style.left = e.pageX + 'px';
        trail.style.top = e.pageY + 'px';
        trail.style.backgroundColor = 'rgba(255, 215, 0, 0.5)';
        cursorTrail.appendChild(trail);
        
        setTimeout(() => {
            trail.remove();
        }, 1000);
    });
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});
