const inputField = document.getElementById('new-headline');
const updateButton = document.getElementById('update-btn');
const ctaHeadline = document.getElementById('cta-headline');

updatedButton.addEventListener('click', function() {
    const newText = inputField.value;
    if (newText.trim() !== "") {
        ctaHeadline.textContent = newText;
    }
});