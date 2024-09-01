document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(() => {
      const dots = document.querySelectorAll(".scroll-indicator a");
      const sections = document.querySelectorAll("section");
      
      const removeActiveClass = () => {
        dots.forEach((dot) => {
          dot.classList.remove("active");
        });
      };
      
      const addActiveClass = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let currentDot = document.querySelector(
              `.scroll-indicator a[href='#${entry.target.id}']`
            );
            removeActiveClass();
            currentDot.classList.add("active");
          }
        });
      };
      
      const options = {
        threshold: window.innerWidth <= 768 ? 0.3 : 0.8,
        rootMargin: '0px'
      };
      
      const observer = new IntersectionObserver(addActiveClass, options);
      
      sections.forEach((section) => {
        observer.observe(section);
      });
      
      const scrollIndicator = document.querySelector(".scroll-indicator");
      const scrollIndicatorArrow = document.querySelector(".scroll-indicator .arrow");
      
      scrollIndicatorArrow.addEventListener("click", () => {
        scrollIndicator.classList.toggle("active");
      });
  
      // Recalculate on resize
      window.addEventListener('resize', () => {
        observer.disconnect();
        options.threshold = window.innerWidth <= 768 ? 0.3 : 0.8;
        sections.forEach((section) => {
          observer.observe(section);
        });
      });
  
    }, window.innerWidth <= 768 ? 1000 : 500); // Longer delay for mobile
  });