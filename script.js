function openMap(type) {
  const address = encodeURIComponent("123 Main St, Tulsa, OK");
  if (type === "apple") {
    window.open(`https://maps.apple.com/?q=${address}`);
  } else if (type === "google") {
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`);
  } else if (type === "waze") {
    window.open(`https://www.waze.com/ul?ll=${address}`);
  }
} // <--- Add this closing brace!

document.addEventListener("DOMContentLoaded", function() {
  const backToTopBtn = document.getElementById("backToTopBtn");
  
  // Make sure the button exists before adding event listeners
  if (backToTopBtn) {
    window.addEventListener("scroll", function() {
      if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    });
    
    backToTopBtn.addEventListener("click", function() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  } else {
    console.error("Back to top button not found in the document");
  }
});
