// WhatsApp Contact Function
function contactWhatsApp(context) {
    const phoneNumber = '254792271569'; // Kenya country code + phone number

    const messages = {
        'General Inquiry': 'Hello! I am interested in CLAUDNET internet services. Please provide me with more information about your packages and services.',
        'Get in Touch': 'Hello! I am interested in CLAUDNET internet services. Please provide me with more information about your packages and services.',
        '8 MBPS': 'Hello! I am interested in the 8 MBPS internet package from CLAUDNET. Please provide me with more information about this plan and pricing.',
        'CCTV Installation': 'Hello! I am interested in CCTV installation from CLAUDNET. Please provide me with more information.',
        '10 MBPS': 'Hello! I am interested in the 10 MBPS internet package from CLAUDNET. Please provide me with more information about this plan and pricing.',
        '15 MBPS': 'Hello! I am interested in the 15 MBPS internet package from CLAUDNET. Please provide me with more information about this plan and pricing.',
        'WhatsApp Support': 'Hello! I need support with my CLAUDNET internet service. Please help me with my inquiry.',
        'Contact Us': 'Hello! I would like to get in touch with CLAUDNET. Please provide me with more information about your services.',
        '24/7 Support': 'Hello! I need immediate support with my CLAUDNET internet connection. Please assist me as soon as possible.',
        'Free Installation': 'Hello! I am interested in CLAUDNET internet services and would like to know more about your free installation offer.',
        'Customer Service': 'Hello! I have a question about my CLAUDNET internet service. Please help me with my inquiry.',
        'Benefits Inquiry': 'Hello! I saw your benefits section and would like to know more about joining CLAUDNET. Please provide me with more information.',
        'Package Comparison': 'Hello! I would like to compare your internet packages and need help choosing the right plan for my needs.',
        'New Customer': 'Hello! I am a new customer interested in CLAUDNET internet services. Please guide me through the signup process.',
        'Internet in Homa Bay': 'Hello! I am interested in CLAUDNET internet in Homa Bay. Please confirm coverage at my location and tell me about your packages.',
        'CCTV Installation in Kisii': 'Hello! I would like CCTV installation in Kisii. Please help me with a camera plan and a quote.',
        'CCTV Installation in Homa Bay': 'Hello! I would like CCTV installation in Homa Bay. Please help me with a camera plan and a quote.',
        'Kisii enquiry': 'Hello! I am in Kisii County and I am interested in CLAUDNET services. Please get back to me.',
        'Homa Bay enquiry': 'Hello! I am in Homa Bay County and I am interested in CLAUDNET services. Please get back to me.'
    };

    const message = messages[context] || `Hello! I am interested in CLAUDNET internet services regarding: ${context}. Please provide me with more information.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
}

window.contactWhatsApp = contactWhatsApp;

(function () {
    const nav = document.getElementById('nav');
    const menu = document.getElementById('navLinks');
    const toggle = document.getElementById('hamburger');
    const hero = document.getElementById('home') || document.querySelector('.page-hero');
    const contact = document.getElementById('contact') || document.querySelector('.cta-band');
    const cue = document.querySelector('.scroll-cue');
    const bar = document.getElementById('mobileBar');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const float = document.querySelector('.field-float');

    // Mobile menu
    function setMenu(open) {
        menu.classList.toggle('open', open);
        nav.classList.toggle('menu-open', open);
        toggle.setAttribute('aria-expanded', String(open));
        document.body.classList.toggle('menu-open', open);
    }

    toggle.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') setMenu(false);
    });
    window.matchMedia('(min-width: 821px)').addEventListener('change', e => {
        if (e.matches) setMenu(false);
    });

    // Scroll state: nav background, scroll cue, mobile action bar
    let contactInView = false;
    let ticking = false;

    function update() {
        const y = window.scrollY;
        nav.classList.toggle('scrolled', y > 24);
        if (cue) cue.classList.toggle('is-gone', y > 40);
        if (bar) bar.classList.toggle('show', y > (hero ? hero.offsetHeight * 0.6 : 400) && !contactInView);
        if (float && !reduceMotion) {
            const r = float.parentElement.getBoundingClientRect();
            if (r.bottom > -200 && r.top < window.innerHeight + 200) {
                const off = Math.max(-44, Math.min(44, (r.top + r.height / 2 - window.innerHeight / 2) * -0.09));
                float.style.transform = `translate3d(0, ${off.toFixed(1)}px, 0)`;
            }
        }
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(update);
        }
    }, { passive: true });

    // Reveal on scroll
    const targets = document.querySelectorAll('[data-reveal]');
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in');
                    if (entry.target.classList.contains('plan')) countUp(entry.target);
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
        targets.forEach(el => io.observe(el));

        if (contact) {
            new IntersectionObserver(([entry]) => {
                contactInView = entry.isIntersecting;
                update();
            }, { threshold: 0.2 }).observe(contact);
        }
    } else {
        targets.forEach(el => el.classList.add('in'));
    }

    update();

    // Packages: count speeds and prices up when a row comes into view
    function countUp(row) {
        if (reduceMotion) return;
        row.querySelectorAll('[data-count]').forEach(el => {
            const finalText = el.textContent;
            const target = parseInt(el.dataset.count, 10);
            const width = el.getBoundingClientRect().width;
            el.style.display = 'inline-block';
            el.style.minWidth = width + 'px';
            const duration = 1300;
            const start = performance.now() + 150;
            el.textContent = '0';
            (function tick(now) {
                const t = Math.min(Math.max((now - start) / duration, 0), 1);
                const eased = 1 - Math.pow(1 - t, 3);
                el.textContent = Math.round(target * eased).toLocaleString('en-US');
                if (t < 1) requestAnimationFrame(tick);
                else el.textContent = finalText;
            })(performance.now());
        });
    }

    // Packages: soft spotlight that follows the pointer across each row
    document.querySelectorAll('.plan').forEach(row => {
        row.addEventListener('pointermove', e => {
            const r = row.getBoundingClientRect();
            row.style.setProperty('--mx', (e.clientX - r.left) + 'px');
            row.style.setProperty('--my', (e.clientY - r.top) + 'px');
        });
    });

    // Copyright year
    const year = document.getElementById('currentYear');
    if (year) year.textContent = new Date().getFullYear();

})();
