document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementsByClassName("toggle-button")[0];
  
    const navbarLinks = document.getElementsByClassName("navbar-links")[0];
  
    toggleButton.addEventListener("click", () => {
      navbarLinks.classList.toggle("active");
    });

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
  
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view")
        } else {
          // entry.target.classList.remove('in-view');
        }
  
      })
    })
  
    const animatedElements = document.querySelectorAll(".animate");
  
    animatedElements.forEach((elem) => observer.observe(elem));

  });
  