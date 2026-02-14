document.addEventListener('DOMContentLoaded', function() {
    const residentForm = document.getElementById('ResidentForm');
    
    if (residentForm) {
        residentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const residentId = document.getElementById('residentId').value.trim();
            const password = document.getElementById('residentPassword').value.trim();
            
            // Simple validation
            if (!residentId) {
                showError('Please enter your Resident ID');
                return;
            }
            
            if (!password) {
                showError('Please enter your password');
                return;
            }
            
            if (password.length < 6) {
                showError('Password must be at least 6 characters long');
                return;
            }
            
            // Simulate login process
            showLoading();
            
            setTimeout(function() {
                // For demo purposes, accept any credentials
                hideLoading();
                
                // Show success message and redirect
                showSuccess('Resident login successful! Redirecting...');
                
                // Redirect to resident dashboard after a delay
                setTimeout(function() {
                    window.location.href = 'resident.html';
                }, 1500);
            }, 1500);
        });
        
        // Add input validation events
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('input', function() {
                clearError(this);
            });
        });
    }
    
    // Social login buttons
    const socialButtons = document.querySelectorAll('.social-btn');
    socialButtons.forEach(button => {
        button.addEventListener('click', function() {
            const platform = this.classList.contains('google') ? 'Google' : 'Facebook';
            alert(`Login with ${platform} clicked. This would connect to ${platform} OAuth in a real application.`);
        });
    });
    
    // Forgot password link
    const forgotPasswordLink = document.querySelector('.forgot-password');
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Forgot password functionality would be implemented here.');
        });
    }
});

function showError(message) {
    // Remove any existing error messages
    removeExistingErrors();
    
    // Create error element
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.cssText = `
        background: #fef6e6;
        color: #B89B5E;
        padding: 12px;
        border-radius: 8px;
        margin-bottom: 15px;
        border-left: 4px solid #B89B5E;
        font-size: 14px;
    `;
    errorDiv.textContent = message;
    
    // Insert after the subtitle
    const subtitle = document.querySelector('.subtitle');
    subtitle.parentNode.insertBefore(errorDiv, subtitle.nextSibling);
}

function removeExistingErrors() {
    const existingErrors = document.querySelectorAll('.error-message');
    existingErrors.forEach(error => error.remove());
}

function clearError(inputElement) {
    const parent = inputElement.parentElement;
    const error = parent.querySelector('.input-error');
    if (error) {
        error.remove();
    }
    
    // Also remove general error messages
    removeExistingErrors();
    
    // Remove error styling
    inputElement.style.borderColor = '';
}

function showLoading() {
    const loginBtn = document.querySelector('.login-btn');
    loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Logging in...';
    loginBtn.disabled = true;
}

function hideLoading() {
    const loginBtn = document.querySelector('.login-btn');
    loginBtn.innerHTML = 'Login as Resident';
    loginBtn.disabled = false;
}

function showSuccess(message) {
    // Remove any existing messages
    removeExistingErrors();
    
    // Create success element
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.style.cssText = `
        background: #fef6e6;
        color: #B89B5E;
        padding: 12px;
        border-radius: 8px;
        margin-bottom: 15px;
        border-left: 4px solid #B89B5E;
        font-size: 14px;
    `;
    successDiv.textContent = message;
    
    // Insert after the subtitle
    const subtitle = document.querySelector('.subtitle');
    subtitle.parentNode.insertBefore(successDiv, subtitle.nextSibling);
}