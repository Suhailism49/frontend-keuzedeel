// Simpele Portfolio JavaScript
// Suhail Ismaili

// 1. SMOOTH SCROLL VOOR NAVIGATIE
document.addEventListener('DOMContentLoaded', function() {
    
    // Navigatie links
    const navLinks = document.querySelectorAll('.nav-list a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 70; // 70px voor navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 2. VAARDIGHEDEN ANIMATIE
    function animateSkills() {
        const skillLevels = document.querySelectorAll('.skill-level');
        
        skillLevels.forEach(skill => {
            const level = skill.getAttribute('data-level');
            skill.style.width = level + '%';
        });
    }
    
    // 3. SCROLL OBSERVER VOOR VAARDIGHEDEN
    const skillsSection = document.querySelector('#vaardigheden');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    if (skillsSection) {
        observer.observe(skillsSection);
    }
    
    // 4. CONTACT FORMULIER
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Haal form data op
            const formData = new FormData(this);
            const naam = formData.get('naam');
            const email = formData.get('email');
            const bericht = formData.get('bericht');
            
            // Simpele validatie
            if (naam.length < 2) {
                alert('Vul een geldige naam in');
                return;
            }
            
            if (!email.includes('@')) {
                alert('Vul een geldig email adres in');
                return;
            }
            
            if (bericht.length < 10) {
                alert('Schrijf een langer bericht');
                return;
            }
            
            // Toon succesbericht
            alert(`Bedankt ${naam}! Je bericht is verzonden.`);
            
            // Reset formulier
            this.reset();
        });
    }
    
    // 5. ACTIEVE NAVIGATIE
    function updateActiveNav() {
        const sections = document.querySelectorAll('section, header');
        const navLinks = document.querySelectorAll('.nav-list a');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.style.background = '';
            if (link.getAttribute('href') === '#' + current) {
                link.style.background = '#555';
            }
        });
    }
    
    // Luister naar scroll
    window.addEventListener('scroll', updateActiveNav);
    
    // 6. PROJECT HOVER EFFECTEN
    const projectItems = document.querySelectorAll('.project-item');
    
    projectItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
    });
    
    console.log('Portfolio geladen! 🚀');
});