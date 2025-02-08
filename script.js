document.getElementById('menuButton').addEventListener('click', function(e) {
    e.preventDefault();
    var submenu = document.getElementById('submenu');
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
});
