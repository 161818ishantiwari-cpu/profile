console.log("Hello World!");
for(let i=0;i<5;i++){
    console.log("this is is iteration number " + i);
}

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    function updateThemeButton() {
        themeToggle.textContent = document.body.classList.contains("dark")
            ? "Switch to light mode"
            : "Switch to dark mode";
    }

    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark");
        updateThemeButton();
    });

    updateThemeButton();
}