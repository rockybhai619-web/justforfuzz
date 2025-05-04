// List of random websites to redirect to
const websites = [
    'https://www.wikipedia.org',
    'https://www.youtube.com',
    'https://www.reddit.com',
    'https://www.github.com',
    'https://www.stackoverflow.com',
    'https://www.amazon.com',
    'https://www.nytimes.com',
    'https://www.bbc.com',
    'https://www.nationalgeographic.com',
    'https://www.ted.com',
    'https://www.duolingo.com',
    'https://www.khanacademy.org',
    'https://www.coursera.org',
    'https://www.codecademy.com',
    'https://www.udemy.com'
];

let countdown = 5;
let redirectTimer;
let isRedirecting = true;

// Function to get a random website from the list
function getRandomWebsite() {
    const randomIndex = Math.floor(Math.random() * websites.length);
    return websites[randomIndex];
}

// Function to update the countdown display
function updateCountdown() {
    document.getElementById('countdown').textContent = countdown;
}

// Function to redirect to a random website
function redirect() {
    const randomSite = getRandomWebsite();
    window.location.href = randomSite;
}

// Function to start the countdown
function startCountdown() {
    updateCountdown();
    redirectTimer = setInterval(() => {
        countdown--;
        updateCountdown();
        
        if (countdown <= 0 && isRedirecting) {
            clearInterval(redirectTimer);
            redirect();
        }
    }, 1000);
}

// Event listeners for buttons
document.getElementById('cancelBtn').addEventListener('click', () => {
    isRedirecting = false;
    clearInterval(redirectTimer);
    document.querySelector('p').textContent = 'Redirect canceled. You can safely close this page.';
    document.getElementById('cancelBtn').style.display = 'none';
    document.getElementById('goNowBtn').style.display = 'none';
});

document.getElementById('goNowBtn').addEventListener('click', () => {
    isRedirecting = true;
    clearInterval(redirectTimer);
    redirect();
});

// Start the countdown when the page loads
window.onload = startCountdown;