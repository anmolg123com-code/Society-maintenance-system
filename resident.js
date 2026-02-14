document.addEventListener('DOMContentLoaded', function() {
    // Initialize resident charts
    initializeResidentCharts();
    
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

function initializeResidentCharts() {
    // Residents Expenses Chart
    const expensesCtx = document.getElementById('residentsExpensesChart').getContext('2d');
    const expensesChart = new Chart(expensesCtx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'My Monthly Expenses (₹)',
                data: [5000, 4500, 5200, 4800, 5100, 4900],
                backgroundColor: [
                    'rgba(67, 97, 238, 0.6)',
                    'rgba(76, 201, 240, 0.6)',
                    'rgba(247, 37, 133, 0.6)',
                    'rgba(67, 97, 238, 0.6)',
                    'rgba(76, 201, 240, 0.6)',
                    'rgba(247, 37, 133, 0.6)'
                ],
                borderColor: [
                    'rgba(67, 97, 238, 1)',
                    'rgba(76, 201, 240, 1)',
                    'rgba(247, 37, 133, 1)',
                    'rgba(67, 97, 238, 1)',
                    'rgba(76, 201, 240, 1)',
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
    
    // Announcements Chart
    const announcementsCtx = document.getElementById('announcementsChart').getContext('2d');
    const announcementsChart = new Chart(announcementsCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Society Announcements',
                data: [3, 5, 2, 4, 6, 5],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
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
    console.log("Updating resident dashboard stats...");
}

// Resident logout function
function residentLogout() {
    if (confirm("Are you sure you want to log out?")) {
        // Add fade out effect before redirecting
        document.body.style.transition = "opacity 0.5s";
        document.body.style.opacity = "0";
        
        setTimeout(function() {
            window.location.href = 'splash.html';
        }, 500);
    }
}