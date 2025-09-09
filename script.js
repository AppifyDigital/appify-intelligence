// Particle System
function createParticleSystem() {
    const particleContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random positioning and timing
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (6 + Math.random() * 4) + 's';
        
        // Random size variation
        const size = 1 + Math.random() * 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Random opacity
        particle.style.opacity = 0.3 + Math.random() * 0.7;
        
        particleContainer.appendChild(particle);
    }
}

// Enhanced Loader Animation with Word Switching
document.addEventListener('DOMContentLoaded', function() {
    // Initialize particle system
    createParticleSystem();
    
    const loader = document.getElementById('loader');
    const aiText = document.querySelector('.ai-text');
    const expandedText = document.querySelector('.expanded-text');
    const typeAppify = document.querySelector('.type-appify');
    const typeIntelligence = document.querySelector('.type-intelligence');
    
    function startLoader() {
        // Show AI for 2 seconds
        setTimeout(() => {
            // Fade out AI
            aiText.classList.add('fade-out');
            
            // Show expanded text
            setTimeout(() => {
                expandedText.classList.add('show');
                
                // Start typing "ppify"
                setTimeout(() => {
                    typeAppify.classList.add('animate');
                }, 300);
                
                // Start typing "ntelligence" 
                setTimeout(() => {
                    typeIntelligence.classList.add('animate');
                }, 800);
                
                // Hide loader after all animations
                setTimeout(() => {
                    loader.classList.add('fade-out');
                    setTimeout(() => {
                        loader.remove();
                    }, 800);
                }, 4000);
            }, 800);
        }, 2000);
    }
    
    startLoader();
});

// Navigation Toggle for Mobile
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
});

// Enhanced Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrolled = window.scrollY > 100;
    
    if (scrolled) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.neural-network, .floating-elements');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Contact form handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const formElements = contactForm.elements;
        
        // Simple validation
        let isValid = true;
        for (let element of formElements) {
            if (element.hasAttribute('required') && !element.value.trim()) {
                isValid = false;
                element.style.borderColor = '#ef4444';
                break;
            } else {
                element.style.borderColor = '#e5e7eb';
            }
        }
        
        if (isValid) {
            // Simulate form submission
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.textContent = 'Message Sent!';
                submitBtn.style.background = '#10b981';
                
                // Reset form
                setTimeout(() => {
                    contactForm.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                    
                    // Add success particle effect
                    createSuccessEffect(submitBtn);
                }, 2000);
            }, 1000);
        }
    });
}

// Enhanced Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) scale(1)';
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Advanced cursor trail effect
let cursor = { x: 0, y: 0 };
let trail = [];

document.addEventListener('mousemove', (e) => {
    cursor.x = e.clientX;
    cursor.y = e.clientY;
});

function createCursorTrail() {
    if (window.innerWidth > 768) { // Only on desktop
        trail.push({ x: cursor.x, y: cursor.y });
        
        if (trail.length > 10) {
            trail.shift();
        }
        
        const trailContainer = document.querySelector('.cursor-trail');
        if (!trailContainer) {
            const container = document.createElement('div');
            container.className = 'cursor-trail';
            container.style.cssText = 'position:fixed;top:0;left:0;pointer-events:none;z-index:9999;';
            document.body.appendChild(container);
        }
    }
    
    requestAnimationFrame(createCursorTrail);
}

createCursorTrail();

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.service-card, .expertise-card, .product-card, .why-choose-item');
    
    animatedElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px) scale(0.95)';
        element.style.transition = `opacity 0.8s ease ${index * 0.1}s, transform 0.8s ease ${index * 0.1}s`;
        observer.observe(element);
    });
});

// Tilt effect for service cards
document.addEventListener('DOMContentLoaded', function() {
    const tiltElements = document.querySelectorAll('[data-tilt]');
    
    tiltElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / centerY * -10;
            const rotateY = (x - centerX) / centerX * 10;
            
            element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
        });
    });
});

// Enhanced Neural network animation
document.addEventListener('DOMContentLoaded', function() {
    const nodes = document.querySelectorAll('.neural-network .node');
    const neuralNetwork = document.querySelector('.neural-network');
    
    // Add interactive hover effects
    if (neuralNetwork) {
        neuralNetwork.addEventListener('mouseenter', () => {
            nodes.forEach(node => {
                node.style.animationDuration = '1s';
            });
        });
        
        neuralNetwork.addEventListener('mouseleave', () => {
            nodes.forEach(node => {
                node.style.animationDuration = '3s';
            });
        });
    }
    
    // Dynamic connection lines
    function createConnectionLines() {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.style.position = 'absolute';
        svg.style.top = '0';
        svg.style.left = '0';
        svg.style.width = '100%';
        svg.style.height = '100%';
        svg.style.pointerEvents = 'none';
        svg.style.opacity = '0.3';
        
        neuralNetwork.appendChild(svg);
        
        // Create animated lines between nodes
        setInterval(() => {
            if (svg.children.length > 20) {
                svg.removeChild(svg.firstChild);
            }
            
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            const startNode = nodes[Math.floor(Math.random() * nodes.length)];
            const endNode = nodes[Math.floor(Math.random() * nodes.length)];
            
            if (startNode !== endNode) {
                const startRect = startNode.getBoundingClientRect();
                const endRect = endNode.getBoundingClientRect();
                const parentRect = neuralNetwork.getBoundingClientRect();
                
                line.setAttribute('x1', startRect.left - parentRect.left + startRect.width/2);
                line.setAttribute('y1', startRect.top - parentRect.top + startRect.height/2);
                line.setAttribute('x2', endRect.left - parentRect.left + endRect.width/2);
                line.setAttribute('y2', endRect.top - parentRect.top + endRect.height/2);
                line.setAttribute('stroke', '#ffb300');
                line.setAttribute('stroke-width', '1');
                line.style.opacity = '0';
                line.style.transition = 'opacity 0.5s ease';
                
                svg.appendChild(line);
                
                setTimeout(() => {
                    line.style.opacity = '0.6';
                    setTimeout(() => {
                        line.style.opacity = '0';
                    }, 1000);
                }, 100);
            }
        }, 2000);
    }
    
    if (neuralNetwork && window.innerWidth > 768) {
        createConnectionLines();
    }
});

// Advanced Performance and UX optimizations
document.addEventListener('DOMContentLoaded', function() {
    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Preload critical resources
    const preloadLinks = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap'
    ];
    
    preloadLinks.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = href;
        document.head.appendChild(link);
    });
    
    // Smooth reveal for sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 1s ease, transform 1s ease';
    });
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => sectionObserver.observe(section));
});

// Advanced text reveal animation
function initTextReveal() {
    const textElements = document.querySelectorAll('.hero-title, .section-title');
    
    textElements.forEach(element => {
        const text = element.textContent;
        element.innerHTML = '';
        
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.opacity = '0';
            span.style.transform = 'translateY(50px)';
            span.style.transition = `opacity 0.6s ease ${index * 0.02}s, transform 0.6s ease ${index * 0.02}s`;
            element.appendChild(span);
        });
        
        // Trigger animation when element is in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.querySelectorAll('span').forEach(span => {
                        span.style.opacity = '1';
                        span.style.transform = 'translateY(0)';
                    });
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(element);
    });
}

// Initialize text reveal after loader
setTimeout(initTextReveal, 4000);

// Advanced scroll-triggered animations
window.addEventListener('scroll', () => {
    const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    
    // Update CSS custom property for scroll-based animations
    document.documentElement.style.setProperty('--scroll-percent', scrollPercent);
    
    // Parallax background movement
    const animatedBg = document.querySelector('.animated-bg');
    if (animatedBg) {
        const translateY = scrollPercent * 100;
        animatedBg.style.transform = `translateY(${translateY * 0.5}px)`;
    }
});

// Initialize enhanced particle interactions
function enhanceParticles() {
    const particles = document.querySelectorAll('.particle');
    
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        particles.forEach((particle, index) => {
            const speed = (index % 3 + 1) * 0.5;
            const xOffset = (mouseX - 0.5) * 100 * speed;
            const yOffset = (mouseY - 0.5) * 100 * speed;
            
            particle.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    });
}

// Initialize after DOM is ready
document.addEventListener('DOMContentLoaded', enhanceParticles);

// Success particle effect for form submission
function createSuccessEffect(element) {
    const rect = element.getBoundingClientRect();
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 6px;
            height: 6px;
            background: #ffb300;
            border-radius: 50%;
            pointer-events: none;
            z-index: 10000;
            left: ${rect.left + rect.width/2}px;
            top: ${rect.top + rect.height/2}px;
        `;
        
        document.body.appendChild(particle);
        
        const angle = (i / 20) * Math.PI * 2;
        const velocity = 100 + Math.random() * 100;
        const lifetime = 1000 + Math.random() * 1000;
        
        particle.animate([
            {
                transform: 'translate(0, 0) scale(1)',
                opacity: 1
            },
            {
                transform: `translate(${Math.cos(angle) * velocity}px, ${Math.sin(angle) * velocity}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: lifetime,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }).onfinish = () => particle.remove();
    }
}

// Add mobile menu styles dynamically
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            top: 70px;
            left: -100%;
            width: 100%;
            height: calc(100vh - 70px);
            background: rgba(27, 27, 24, 0.98);
            backdrop-filter: blur(10px);
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            padding: 2rem 0;
            transition: left 0.3s ease;
            border-top: 1px solid var(--border-color);
        }
        
        .nav-menu.active {
            left: 0;
        }
        
        .nav-menu li {
            margin: 1rem 0;
        }
        
        .nav-menu a {
            font-size: 1.25rem;
            font-weight: 600;
            color: var(--text-secondary);
        }
        
        .nav-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .nav-toggle.active span:nth-child(2) {
            opacity: 0;
        }
        
        .nav-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    }
`;
document.head.appendChild(style);