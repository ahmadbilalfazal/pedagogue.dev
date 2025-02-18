// Add any interactive effects here (optional)
document.querySelectorAll('.feature').forEach(feature => {
    feature.addEventListener('mouseenter', () => {
        feature.style.boxShadow = '0 8px 20px rgba(100, 255, 218, 0.3)';
    });
    feature.addEventListener('mouseleave', () => {
        feature.style.boxShadow = 'none';
    });
});

document.getElementById('notify-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert('Thanks for subscribing! We\'ll notify you when we launch.');
            form.reset();
        } else {
            alert('Oops! Something went wrong. Please try again.');
        }
    })
    .catch(error => {
        alert('Oops! Something went wrong. Please try again.');
    });
});
