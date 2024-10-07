document.querySelectorAll('.clickable-arcade input').forEach(img => {
    img.onclick = () => {
        document.querySelector('.form').style.display = 'block';
        document.body.classList.add('body-background');
    }
});