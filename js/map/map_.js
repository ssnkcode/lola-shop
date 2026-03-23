function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `<i class="fas fa-sparkle"></i> ${message}`;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

function toggleTheme() {
    const body = document.body;
    const btn = document.querySelector('.theme-toggle');
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        btn.innerHTML = '<i class="fas fa-moon"></i> <span>Modo Oscuro</span>';
    } else {
        body.setAttribute('data-theme', 'dark');
        btn.innerHTML = '<i class="fas fa-sun"></i> <span>Modo Claro</span>';
    }
}