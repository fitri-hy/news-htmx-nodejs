document.addEventListener("DOMContentLoaded", () => {
    
	// Dark Mode
	const htmlTag = document.documentElement;
    const chk = document.getElementById("chk");
    const ball = document.getElementById("ball");

    function setTheme(isDark) {
        if (isDark) {
            htmlTag.classList.add("dark");
            localStorage.setItem("theme", "dark");
            ball.classList.add("translate-x-6");
        } else {
            htmlTag.classList.remove("dark");
            localStorage.setItem("theme", "light");
            ball.classList.remove("translate-x-6");
        }
    }

    const isDark = localStorage.getItem("theme") === "dark";
    chk.checked = isDark;
    setTheme(isDark);

    chk.addEventListener("change", () => {
        setTheme(chk.checked);
    });
	
	// Menu Active
	const currentPath = new URL(window.location.href).pathname.replace(/\/$/, "");
    document.querySelectorAll(".nav-link").forEach(link => {
        const linkPath = new URL(link.href).pathname.replace(/\/$/, "");
        
        if (currentPath === linkPath) {
            link.classList.add("font-semibold");
        }
    });
});