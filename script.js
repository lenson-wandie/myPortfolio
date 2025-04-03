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