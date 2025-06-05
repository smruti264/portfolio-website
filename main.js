document.addEventListener('DOMContentLoaded', function() {
    console.log('3D Portfolio loaded');
    
   
    
    // Add animation to glass cards
    const cards = document.querySelectorAll('.glass-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.5s ease ${index * 0.1}s`;
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    });

    
});

document.addEventListener('DOMContentLoaded', function() {
    console.log('3D Portfolio loaded');
    
   
    
    // Add animation to glass cards
    const cards = document.querySelectorAll('.glass-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.5s ease ${index * 0.1}s`;
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    });
    
    // Animate skill bars on skills page
    if (document.querySelector('.skills-container')) {
        const skillBars = document.querySelectorAll('.skill-level');
        skillBars.forEach(bar => {
            // Reset width to 0 for animation
            const originalWidth = bar.style.width;
            bar.style.width = '0';
            
            // Animate after a short delay
            setTimeout(() => {
                bar.style.width = originalWidth;
            }, 500);
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    console.log('3D Portfolio loaded');
    
    
    
    // Add animation to glass cards
    const cards = document.querySelectorAll('.glass-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.5s ease ${index * 0.1}s`;
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    });
    
    // Social icons wave animation
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach((icon, i) => {
        icon.style.opacity = '0';
        icon.style.transform = 'translateY(20px)';
        icon.style.transition = `all 0.5s ease ${i * 0.1 + 0.3}s`;
        
        setTimeout(() => {
            icon.style.opacity = '1';
            icon.style.transform = 'translateY(0)';
        }, 100);
    });
});