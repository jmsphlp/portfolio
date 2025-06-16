// Add parallax effect to header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrolled = window.pageYOffset;
    const parallax = scrolled * 0.5;
    header.style.transform = `translateY(${parallax}px)`;
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Add hover effects to skill tags
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 5px 15px rgba(102, 126, 234, 0.4)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.boxShadow = 'none';
    });
});

// Add click effect to profile image
document.querySelector('.profile-img').addEventListener('click', function() {
    this.style.transform = 'scale(1.1) rotate(10deg)';
    setTimeout(() => {
        this.style.transform = 'scale(1) rotate(0deg)';
    }, 200);
});

// Add typing effect to the title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing effect on page load
document.addEventListener('DOMContentLoaded', function() {
    const titleElement = document.querySelector('.title');
    const originalText = titleElement.textContent;
    
    // Add a subtle delay before starting the typing effect
    setTimeout(() => {
        typeWriter(titleElement, originalText, 80);
    }, 1000);
});

// Add smooth scroll behavior for better UX
document.documentElement.style.scrollBehavior = 'smooth';

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add interactive effects to experience and project items
document.querySelectorAll('.experience-item, .project-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.borderLeftWidth = '8px';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.borderLeftWidth = '5px';
    });
});

// Add click to copy email functionality
document.querySelector('a[href^="mailto:"]').addEventListener('click', function(e) {
    e.preventDefault();
    const email = this.textContent.replace('✉️ ', '');
    
    // Try to copy to clipboard
    if (navigator.clipboard) {
        navigator.clipboard.writeText(email).then(() => {
            // Show temporary feedback
            const originalText = this.textContent;
            this.textContent = '✅ Email copied!';
            this.style.color = '#4ecdc4';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.style.color = '';
            }, 2000);
        });
    } else {
        // Fallback: open email client
        window.location.href = this.getAttribute('href');
    }
});

// Add subtle animation to certification items
document.querySelectorAll('.cert-item').forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
    item.classList.add('fade-in-cert');
});

// CSS for certification animation (add to styles if needed)
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInCert {
        from {
            opacity: 0;
            transform: translateX(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    .fade-in-cert {
        animation: fadeInCert 0.6s ease-out forwards;
    }
`;
document.head.appendChild(style);