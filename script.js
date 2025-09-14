// WhatsApp Contact Function
function contactWhatsApp(context) {
    const phoneNumber = '254746974915'; // Kenya country code + phone number
    let message = '';
    
    // Define specific messages based on context
    const messages = {
        'General Inquiry': 'Hello! I am interested in CLAUDNET internet services. Please provide me with more information about your packages and services.',
        '5 MBPS': 'Hello! I am interested in the 5 MBPS internet package from CLAUDNET. Please provide me with more information about this plan and pricing.',
        '10 MBPS': 'Hello! I am interested in the 10 MBPS internet package from CLAUDNET. Please provide me with more information about this plan and pricing.',
        '15 MBPS': 'Hello! I am interested in the 15 MBPS internet package from CLAUDNET. Please provide me with more information about this plan and pricing.',
        'WhatsApp Support': 'Hello! I need support with my CLAUDNET internet service. Please help me with my inquiry.',
        'Contact Us': 'Hello! I would like to get in touch with CLAUDNET. Please provide me with more information about your services.',
        '24/7 Support': 'Hello! I need immediate support with my CLAUDNET internet connection. Please assist me as soon as possible.',
        'Free Installation': 'Hello! I am interested in CLAUDNET internet services and would like to know more about your free installation offer.',
        'Customer Service': 'Hello! I have a question about my CLAUDNET internet service. Please help me with my inquiry.',
        'Benefits Inquiry': 'Hello! I saw your benefits section and would like to know more about joining CLAUDNET. Please provide me with more information.',
        'Package Comparison': 'Hello! I would like to compare your internet packages and need help choosing the right plan for my needs.',
        'New Customer': 'Hello! I am a new customer interested in CLAUDNET internet services. Please guide me through the signup process.'
    };
    
    // Get the appropriate message or use a default
    message = messages[context] || `Hello! I am interested in CLAUDNET internet services regarding: ${context}. Please provide me with more information.`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappURL, '_blank');
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Add hamburger menu functionality
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    hamburger.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu when clicking on nav links
    const navLinkElements = document.querySelectorAll('.nav-links a');
    navLinkElements.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Add smooth scrolling to all anchor links
    navLinkElements.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add scroll effect to navbar
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'linear-gradient(135deg, rgba(15, 23, 42, 0.98) 0%, rgba(30, 41, 59, 0.95) 50%, rgba(14, 165, 233, 0.9) 100%)';
            navbar.style.backdropFilter = 'blur(25px)';
            navbar.style.boxShadow = '0 4px 40px rgba(14, 165, 233, 0.4)';
            navbar.style.borderBottom = '2px solid rgba(14, 165, 233, 0.4)';
        } else {
            navbar.style.background = 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 50%, rgba(14, 165, 233, 0.8) 100%)';
            navbar.style.backdropFilter = 'blur(20px)';
            navbar.style.boxShadow = '0 4px 30px rgba(14, 165, 233, 0.3)';
            navbar.style.borderBottom = '2px solid rgba(14, 165, 233, 0.3)';
        }
    });
    
    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe package cards for animation
    const packageCards = document.querySelectorAll('.package-card');
    packageCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Observe benefit items for animation
    const benefitItems = document.querySelectorAll('.benefit-item');
    benefitItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
    
    // Add smooth typing effect to CLAUDNET title
    const typingText = document.getElementById('typingText');
    if (typingText) {
        const text = typingText.textContent;
        
        // Reset the text and add typing class
        typingText.textContent = '';
        typingText.classList.add('typing');
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                typingText.textContent += text.charAt(i);
                i++;
                // Vary the typing speed for more natural feel
                const delay = Math.random() * 50 + 100; // 100-150ms random delay
                setTimeout(typeWriter, delay);
            } else {
                // Remove typing class and add completed class after typing is complete
                setTimeout(() => {
                    typingText.classList.remove('typing');
                    typingText.classList.add('completed');
                }, 1500);
            }
        };
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 1000);
    }
    
    // Add parallax effect to floating elements
    const floatingElements = document.querySelectorAll('.element');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        floatingElements.forEach((element, index) => {
            const speed = 0.3 + (index * 0.1);
            element.style.transform = `translateY(${rate * speed}px) rotate(${scrolled * 0.1}deg)`;
        });
    });
    
    
    // Add click animation to buttons
    const buttons = document.querySelectorAll('.package-btn, .whatsapp-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .package-btn, .whatsapp-btn {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Update copyright year dynamically
function updateCopyrightYear() {
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        const currentYear = new Date().getFullYear();
        currentYearElement.textContent = currentYear;
    }
}

// Initialize copyright year on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCopyrightYear();
});

// Mobile menu toggle
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Add scroll to benefits functionality
function scrollToBenefits() {
    const benefitsSection = document.getElementById('benefits');
    if (benefitsSection) {
        const offsetTop = benefitsSection.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Add scroll to packages functionality
function scrollToPackages() {
    const packagesSection = document.getElementById('packages');
    if (packagesSection) {
        const offsetTop = packagesSection.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Make scroll functions globally available
window.scrollToBenefits = scrollToBenefits;
window.scrollToPackages = scrollToPackages;

// Add scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.onclick = scrollToTop;

// Style the scroll to top button
const scrollToTopStyle = document.createElement('style');
scrollToTopStyle.textContent = `
    .scroll-to-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(45deg, #0ea5e9, #14b8a6);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.2rem;
        box-shadow: 0 5px 15px rgba(14, 165, 233, 0.3);
        transition: all 0.3s ease;
        z-index: 1000;
        opacity: 0;
        visibility: hidden;
    }
    
    .scroll-to-top:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(14, 165, 233, 0.4);
    }
    
    .scroll-to-top.show {
        opacity: 1;
        visibility: visible;
    }
`;
document.head.appendChild(scrollToTopStyle);
document.body.appendChild(scrollToTopBtn);

// Show/hide scroll to top button based on scroll position
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});
