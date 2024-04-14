const menuIcon = document.getElementById('menu-icon');
    const sideMenu = document.getElementById('side-menu');
    const closeMenuButton = document.getElementById('close-button');

    menuIcon.addEventListener('click', function () {
        menuIcon.classList.toggle('active');
        sideMenu.classList.toggle('active');
    });

        closeMenuButton.addEventListener('click', function () {
            menuIcon.classList.remove('active');
            sideMenu.classList.remove('active');
        });


            document.addEventListener('DOMContentLoaded', function() {
                const menuIcon = document.getElementById("menu-icon");
                const sideMenu = document.getElementById("side-menu");
                const closeIcon = document.getElementById("close-icon");

                menuIcon.addEventListener('click', function() {
                    sideMenu.classList.add("active");
                });

                closeIcon.addEventListener('click', function() {
                    sideMenu.classList.remove("active");
                });
            });
