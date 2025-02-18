// Add any interactive effects here (optional)
document.querySelectorAll('.feature').forEach(feature => {
    feature.addEventListener('mouseenter', () => {
        feature.style.boxShadow = '0 8px 20px rgba(100, 255, 218, 0.3)';
    });
    feature.addEventListener('mouseleave', () => {
        feature.style.boxShadow = 'none';
    });
});
