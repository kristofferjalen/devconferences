
window.onload = () => {
    let now = Date.now();
    [...document.querySelectorAll('[data-from]')]
        .filter(c => new Date(c.getAttribute('data-from')) < now)
        .forEach(c => c.style.display = "none");
}
