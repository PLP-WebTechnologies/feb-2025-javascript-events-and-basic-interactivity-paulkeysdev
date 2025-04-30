document.addEventListener('DOMContentLoaded', () => {
    // Button click action
    const button = document.getElementById('actionButton');
    button.addEventListener('click', () => {
        button.textContent = 'You clicked me!';
        button.style.backgroundColor = '#28a745';
    });

    // form validation
    const emailInput = document.getElementById('email');
    const emailFeedback = document.getElementById('emailFeedback');
    emailInput.addEventListener('input', () => {
        const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
        emailFeedback.textContent = validEmail ? '✅ Valid email' : '❌ Invalid email';
    });

    const passwordInput = document.getElementById('password');
    const passwordFeedback = document.getElementById('passwordFeedback');
    passwordInput.addEventListener('input', () => {
        passwordFeedback.textContent = passwordInput.value.length >= 8 
            ? '✅ Password is valid' 
            : '❌ Password must be at least 8 characters';
    });

    // Image hover effect 
    const images = document.querySelectorAll('#imageGallery img');
    images.forEach(img => {
        img.addEventListener('dblclick', () => {
            alert('You double-clicked on an image!');
        });
    });
});
