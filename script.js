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

document.addEventListener("DOMContentLoaded", function () {
    const openButtons = document.querySelectorAll(".open-btn");
    const closeButtons = document.querySelectorAll(".close");
    const modals = document.querySelectorAll(".modal");

    // Abrir modal
    openButtons.forEach(button => {
        button.addEventListener("click", function () {
            const modalId = this.getAttribute("data-modal");
            document.getElementById(modalId).style.display = "flex";
        });
    });

    // Cerrar modal
    closeButtons.forEach(button => {
        button.addEventListener("click", function () {
            const modalId = this.getAttribute("data-modal");
            document.getElementById(modalId).style.display = "none";
        });
    });

    // Cerrar modal al hacer clic fuera de él
    window.addEventListener("click", function (e) {
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    });
});
