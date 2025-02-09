document.getElementById('menuButton').addEventListener('click', function(e) {
    e.preventDefault();
    var submenu = document.getElementById('submenu');
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
});

// Cierra el menú si se hace clic fuera de él
document.addEventListener('click', function(e) {
    var menu = document.querySelector('.menu');
    if (!menu.contains(e.target)) {
        document.getElementById('submenu').style.display = 'none';
    }
});
