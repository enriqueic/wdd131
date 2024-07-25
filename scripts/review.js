document.addEventListener("DOMContentLoaded", () => {
    let reviewCount = localStorage.getItem("review-count");
    if (!reviewCount) {
        reviewCount = 0;
    }
    reviewCount++;
    localStorage.setItem("review-count", reviewCount);
    document.getElementById("review-count").textContent = reviewCount;
});