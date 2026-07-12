document.addEventListener("DOMContentLoaded", () => {
    // Theme Toggle Logic
    const themeToggle = document.getElementById("themeToggle");
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "light") {
        document.body.classList.add("light-theme");
        if(themeToggle) themeToggle.textContent = "🌙";
    }

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("light-theme");
            let theme = "dark";
            if (document.body.classList.contains("light-theme")) {
                theme = "light";
                themeToggle.textContent = "🌙";
            } else {
                themeToggle.textContent = "☀️";
            }
            localStorage.setItem("theme", theme);
        });
    }

    // Pricing Toggle Logic
    const pricingToggle = document.getElementById("pricingToggle");
    const prices = document.querySelectorAll(".price");
    const billingPeriods = document.querySelectorAll(".billing-period");

    if (pricingToggle) {
        pricingToggle.addEventListener("change", () => {
            const isYearly = pricingToggle.checked;

            prices.forEach((price) => {
                const targetPrice = isYearly ? price.getAttribute("data-yearly") : price.getAttribute("data-monthly");
                price.textContent = `₹${targetPrice}`;
            });

            billingPeriods.forEach((period) => {
                if (period.textContent.includes("Month") || period.textContent.includes("Year")) {
                    period.textContent = isYearly ? "Per Year" : "Per Month";
                }
            });
        });
    }

    // Newsletter Form Logic
    const newsletterForm = document.getElementById("newsletter-form");
    const newsletterSuccess = document.getElementById("newsletter-success");

    if (newsletterForm) {
        newsletterForm.addEventListener("submit", (e) => {
            e.preventDefault();
            // Simulate an API call or just show success message immediately
            newsletterForm.style.display = "none";
            newsletterSuccess.style.display = "block";
        });
    }
});
