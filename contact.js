// Contact Form Handler

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                collection: document.getElementById('collection').value,
                message: document.getElementById('message').value
            };
            
            // In production, this would send to a backend API
            // For now, we'll show a success message and reset
            
            // Create success message
            const successMessage = document.createElement('div');
            successMessage.className = 'form-success';
            successMessage.innerHTML = `
                <p><strong>Thank you for your message.</strong></p>
                <p>We'll respond to ${formData.email} within 24–48 hours.</p>
            `;
            successMessage.style.cssText = `
                padding: 24px;
                background-color: #1F3A2E;
                color: #FAF8F5;
                text-align: center;
                margin: 24px 0;
                border-left: 3px solid #D6C08D;
            `;
            
            // Insert success message
            contactForm.insertAdjacentElement('beforebegin', successMessage);
            
            // Reset form
            contactForm.reset();
            
            // Scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Remove success message after 5 seconds
            setTimeout(() => {
                successMessage.style.opacity = '0';
                successMessage.style.transition = 'opacity 0.5s ease';
                setTimeout(() => successMessage.remove(), 500);
            }, 5000);
            
            // Log form data (in production, send to backend)
            console.log('Form submitted:', formData);
        });
    }
});
