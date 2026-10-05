const darkButton = document.getElementById("dark-btn");

darkButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkButton.textContent = "Light Mode";
    } else {
        darkButton.textContent = "Dark Mode";
    }
});