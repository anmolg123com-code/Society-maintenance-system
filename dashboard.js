document.addEventListener('DOMContentLoaded', function() {
    // Initialize charts
    initializeCharts();
    
    // Add event listeners for mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });
    }
    
    // Add event listeners for sidebar items
    const navLinks = document.querySelectorAll('.nav-links li');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Add event listeners for action buttons
    const actionButtons = document.querySelectorAll('.action-btn');
    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.querySelector('span').textContent;
            alert(`Performing action: ${action}`);
        });
    });
});

function initializeCharts() {
    // Maintenance Requests Chart
    const requestsCtx = document.getElementById('requestsChart').getContext('2d');
    const requestsChart = new Chart(requestsCtx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Maintenance Requests',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(184, 155, 94, 0.6)',
                    'rgba(154, 125, 77, 0.6)',
                    'rgba(247, 37, 133, 0.6)',
                    'rgba(184, 155, 94, 0.6)',
                    'rgba(154, 125, 77, 0.6)',
                    'rgba(247, 37, 133, 0.6)'
                ],
                borderColor: [
                    'rgba(184, 155, 94, 1)',
                    'rgba(154, 125, 77, 1)',
                    'rgba(247, 37, 133, 1)',
                    'rgba(184, 155, 94, 1)',
                    'rgba(154, 125, 77, 1)',
                    'rgba(247, 37, 133, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    
    // Monthly Expenses Chart
    const expensesCtx = document.getElementById('expensesChart').getContext('2d');
    const expensesChart = new Chart(expensesCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Expenses (in ₹)',
                data: [45000, 52000, 48000, 61000, 55000, 58000],
                fill: false,
                borderColor: 'rgb(184, 155, 94)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Function to update stats dynamically
function updateStats() {
    // This would typically fetch data from an API
    // For now, we'll simulate dynamic updates
    console.log("Updating dashboard stats...");
}

// Logout function
function logout() {
    if (confirm("Are you sure you want to log out?")) {
        // Add fade out effect before redirecting
        document.body.style.transition = "opacity 0.5s";
        document.body.style.opacity = "0";
        
        setTimeout(function() {
            window.location.href = 'splash.html';
        }, 500);
    }
}