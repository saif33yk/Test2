// Import CSS
import "../css/main.css"

// Initialize slideshows if they exist
document.addEventListener("DOMContentLoaded", () => {
  // Check if jQuery is loaded
  if (typeof jQuery === "undefined") {
    // Load jQuery if not available
    const script = document.createElement("script")
    script.src = "https://code.jquery.com/jquery-3.6.0.min.js"
    script.onload = () => {
      // After jQuery is loaded, set it to the window
      window.jQuery = jQuery
      window.$ = jQuery

      // Load Slick after jQuery
      const slickScript = document.createElement("script")
      slickScript.src = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"
      slickScript.onload = initSliders
      document.head.appendChild(slickScript)
    }
    document.head.appendChild(script)
  } else {
    initSliders()
  }

  // Animate stats numbers
  const animateStats = () => {
    document.querySelectorAll(".stat-item").forEach((item) => {
      if (!item.classList.contains("animated")) {
        item.classList.add("animated")
        const numberElement = item.querySelector(".stat-number")
        const targetValue = Number.parseInt(numberElement.textContent.replace(/,/g, ""))
        const duration = 1500
        const increment = targetValue / (duration / 16)
        let currentValue = 0

        const animate = () => {
          currentValue += increment
          if (currentValue >= targetValue) {
            currentValue = targetValue
            numberElement.textContent = Math.floor(currentValue).toLocaleString()
            return
          }

          numberElement.textContent = Math.floor(currentValue).toLocaleString()
          requestAnimationFrame(animate)
        }

        animate()
      }
    })
  }

  // Intersection Observer for animations
  const observeElements = (elements, callback) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback(entry.target)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    elements.forEach((element) => {
      observer.observe(element)
    })
  }

  // Observe stats for animation
  if (document.querySelector(".stats-container")) {
    observeElements([document.querySelector(".stats-container")], animateStats)
  }

  // Observe feature cards for animation
  if (document.querySelectorAll(".feature-card").length) {
    observeElements(document.querySelectorAll(".feature-card"), (element) => {
      element.style.opacity = "1"
    })
  }

  // Observe gang cards for animation
  if (document.querySelectorAll(".gang-card").length) {
    observeElements(document.querySelectorAll(".gang-card"), (element) => {
      element.style.opacity = "1"
      element.style.transform = "translateY(0)"
    })
  }

  // Add smooth scrolling to all links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href")
      if (href !== "#" && document.querySelector(href)) {
        e.preventDefault()
        document.querySelector(href).scrollIntoView({
          behavior: "smooth",
        })
      }
    })
  })
})

// Initialize sliders function
function initSliders() {
  if (document.querySelector(".cars-slideshow")) {
    $(".cars-slideshow").slick({
      dots: true,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: true,
      cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    })
  }

  if (document.querySelector(".community-slideshow")) {
    $(".community-slideshow").slick({
      dots: true,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 6000,
      arrows: true,
      cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    })
  }
}

