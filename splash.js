document.addEventListener('DOMContentLoaded', function() {
    // Automatically redirect to login page after animation completes
    setTimeout(function() {
        // Add fade out effect before redirecting
        document.body.style.animation = 'fadeOut 0.8s forwards';
        
        setTimeout(function() {
            window.location.href = 'login.html';
        }, 800);
    }, 5000); // Wait for 5 seconds to allow animations to complete
    
    // Add fadeOut animation to CSS dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    // Additional animation enhancement for letters
    function animateLetters() {
        const logoText = document.querySelector('.animated-logo');
        if (logoText) {
            const text = logoText.textContent;
            logoText.innerHTML = '';
            
            for (let i = 0; i < text.length; i++) {
                const charSpan = document.createElement('span');
                charSpan.textContent = text[i];
                charSpan.style.display = 'inline-block';
                charSpan.style.opacity = '0';
                charSpan.style.animation = `letterPop 0.5s ease-out ${0.2 + (i * 0.1)}s forwards`;
                logoText.appendChild(charSpan);
            }
        }
    }
    
    // Add letter animation styles
    const letterStyle = document.createElement('style');
    letterStyle.textContent = `
        @keyframes letterPop {
            0% { 
                opacity: 0; 
                transform: translateY(20px) scale(0.5); 
            }
            70% { 
                transform: translateY(-5px) scale(1.1); 
            }
            100% { 
                opacity: 1; 
                transform: translateY(0) scale(1); 
            }
        }
    `;
    document.head.appendChild(letterStyle);
    
    // Call the function after a short delay
    setTimeout(animateLetters, 500);
});