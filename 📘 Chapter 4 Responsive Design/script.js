 function toggleMenu() {

            if (window.innerWidth > 600) {
                return;
            }

            const menu = document.getElementById("menu");
            const icon = document.querySelector(".menu-icon");

            if (menu.style.display === "block") {
                menu.style.display = "none";
                icon.textContent = "☰";
                icon.classList.remove("decorationX")
            } else {
                menu.style.display = "block";
                icon.classList.add("decorationX")
                icon.textContent = "✖"; // close icon
            }
        }