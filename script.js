document.addEventListener('DOMContentLoaded', function() {
    const introText = document.querySelector('.introText');
    const phrases = [
        'Engineering Code, Crafting Art.',
        'Software Engineer & Machine Learning Enthusiast.',
        'Turning Ideas into Reality.'
    ];
    let index = 0;

    function changeText() {
        introText.textContent = phrases[index];
        index = (index + 1) % phrases.length;
        setTimeout(changeText, 3000);
    }

    changeText();
});
document.addEventListener('DOMContentLoaded', function () {
    const heading = document.querySelector('.introgreeting h1:nth-child(1)');
    heading.addEventListener('animationend', () => {
        heading.style.borderRight = 'none';
    });
});
function animateCounter(id, target) {
    let count = 0;
    const speed = 50;
    const increment = target / speed;
    const counter = document.getElementById(id);

    const updateCounter = () => {
        count += increment;
        if (count >= target) {
            counter.textContent = Math.floor(target) + 
                (id === "projects" ? " + Projects" : 
                 id === "hours" ? " + Hours Done" : 
                 " + Clients Served");
        } else {
            counter.textContent = Math.floor(count) + 
                (id === "projects" ? "+ Projects" : 
                 id === "hours" ? " + Hours Done" : 
                 " + Clients Served");
            requestAnimationFrame(updateCounter);
        }
    };

    updateCounter();
}

function observeCounter(id, target) {
    const counterElement = document.getElementById(id);

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(id, target);
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

    observer.observe(counterElement);
}

// Initialize the counters with observer
observeCounter("projects", 12);
observeCounter("hours", 700);
observeCounter("clients", 10);


