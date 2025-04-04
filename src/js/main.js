// Main JavaScript file for Paradise Roleplay Pakistan

document.addEventListener("DOMContentLoaded", () => {
  // Initialize slideshows if they exist
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

// Import jQuery (if not already included) or declare $
if (typeof jQuery == "undefined") {
  var script = document.createElement("script")
  script.src = "https://code.jquery.com/jquery-3.6.0.min.js"
  script.type = "text/javascript"
  document.getElementsByTagName("head")[0].appendChild(script)

  // Optional: Add a delay to ensure jQuery is loaded before Slick initializes
  script.onload = () => {
    var $ = jQuery // Declare $ after jQuery is loaded
    $(document).ready(() => {
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
    })
  }
}

