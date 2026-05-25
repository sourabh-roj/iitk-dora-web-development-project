document.addEventListener("DOMContentLoaded", () => {
  // Get unique namespace for this header instance
  const headerContainer = document.querySelector(".iitk-header-container")
  if (!headerContainer) {
    console.error("Header container not found")
    return
  }

  const navbarToggler = headerContainer.querySelector(".navbar-toggler")
  const navbarCollapse = headerContainer.querySelector(".navbar-collapse")
  const dropdownToggles = headerContainer.querySelectorAll(".nav-item.dropdown > .nav-link.dropdown-toggle")
  const navLinks = headerContainer.querySelectorAll(".nav-link:not(.dropdown-toggle)")
  const navbar = headerContainer.querySelector(".navbar")

  if (!navbarToggler || !navbarCollapse || !navbar) {
    console.error("Required navbar elements not found")
    return
  }

  console.log("Found dropdown toggles:", dropdownToggles.length)
  console.log("Found nav links:", navLinks.length)

  // Track navbar state manually
  let isNavbarOpen = false
  let isToggling = false // Prevent multiple rapid toggles

  // Mobile detection
  const isMobile = () => {
    return window.innerWidth <= 768
  }

  // Close all dropdowns
  const closeAllDropdowns = () => {
    dropdownToggles.forEach((toggle) => {
      const parent = toggle.closest(".nav-item.dropdown")
      if (parent) {
        parent.classList.remove("show")
        const dropdownMenu = parent.querySelector(".dropdown-menu, .mega-menu")
        if (dropdownMenu) {
          dropdownMenu.classList.remove("show")
          dropdownMenu.style.display = "none"
        }
        toggle.setAttribute("aria-expanded", "false")
      }
    })
  }

  // Force close the mobile navbar
  const forceCloseMobileNavbar = () => {
    if (isToggling) return
    isToggling = true

    console.log("Force closing mobile navbar")

    // Update our state tracker
    isNavbarOpen = false

    // Remove Bootstrap classes
    navbarCollapse.classList.remove("show", "collapsing")
    navbarCollapse.classList.add("collapse")

    // Reset toggler
    navbarToggler.setAttribute("aria-expanded", "false")
    navbarToggler.classList.add("collapsed")

    // Close all dropdowns
    closeAllDropdowns()

    // Hide the collapse element
    navbarCollapse.style.display = "none"

    // Reset after animation
    setTimeout(() => {
      navbarCollapse.style.display = ""
      isToggling = false
    }, 300)

    console.log("Mobile navbar closed")
  }

  // Force open the mobile navbar
  const forceOpenMobileNavbar = () => {
    if (isToggling) return
    isToggling = true

    console.log("Force opening mobile navbar")

    // Update our state tracker
    isNavbarOpen = true

    // Add Bootstrap classes
    navbarCollapse.classList.add("show")
    navbarCollapse.classList.remove("collapse")

    // Set toggler
    navbarToggler.setAttribute("aria-expanded", "true")
    navbarToggler.classList.remove("collapsed")

    // Close all dropdowns when opening
    closeAllDropdowns()

    // Reset after animation
    setTimeout(() => {
      isToggling = false
    }, 300)

    console.log("Mobile navbar opened")
  }

  // Remove Bootstrap's data attributes to prevent conflicts
  navbarToggler.removeAttribute("data-bs-toggle")
  navbarToggler.removeAttribute("data-bs-target")

  // Handle navbar toggler click
  navbarToggler.addEventListener("click", (e) => {
    e.preventDefault()
    e.stopPropagation()
    e.stopImmediatePropagation()

    if (isToggling) {
      console.log("Already toggling, ignoring click")
      return
    }

    console.log("Toggler clicked, current state:", isNavbarOpen)

    if (isNavbarOpen) {
      forceCloseMobileNavbar()
    } else {
      forceOpenMobileNavbar()
    }
  })

  // Handle dropdown toggles
  dropdownToggles.forEach((toggle, index) => {
    const parent = toggle.closest(".nav-item.dropdown")
    if (!parent) return

    const dropdownMenu = parent.querySelector(".dropdown-menu, .mega-menu")
    if (!dropdownMenu) return

    console.log(`Setting up dropdown ${index}:`, toggle.textContent.trim())

    // Remove Bootstrap dropdown attributes to prevent conflicts
    toggle.removeAttribute("data-bs-toggle")

    // Desktop hover behavior
    if (!isMobile()) {
      parent.addEventListener("mouseenter", () => {
        if (window.innerWidth > 768) {
          closeAllDropdowns()
          parent.classList.add("show")
          dropdownMenu.classList.add("show")
          dropdownMenu.style.display = "block"
          toggle.setAttribute("aria-expanded", "true")
        }
      })

      parent.addEventListener("mouseleave", () => {
        if (window.innerWidth > 768) {
          parent.classList.remove("show")
          dropdownMenu.classList.remove("show")
          dropdownMenu.style.display = "none"
          toggle.setAttribute("aria-expanded", "false")
        }
      })
    }

    // Click behavior
    toggle.addEventListener("click", (e) => {
      e.preventDefault()
      e.stopPropagation()

      console.log("Dropdown clicked:", toggle.textContent.trim())

      // Only handle if mobile menu is open OR on desktop
      const shouldHandle = isMobile() ? isNavbarOpen : true

      if (shouldHandle) {
        const isCurrentlyOpen = parent.classList.contains("show")
        console.log("Dropdown currently open:", isCurrentlyOpen)

        // Close all other dropdowns first
        closeAllDropdowns()

        // Toggle current dropdown
        if (!isCurrentlyOpen) {
          parent.classList.add("show")
          dropdownMenu.classList.add("show")
          dropdownMenu.style.display = "block"
          toggle.setAttribute("aria-expanded", "true")

          // Apply mobile-specific styles
          if (isMobile()) {
            dropdownMenu.style.position = "static"
            dropdownMenu.style.transform = "none"
            dropdownMenu.style.left = "auto"
            dropdownMenu.style.top = "auto"
            dropdownMenu.style.width = "100%"
          }

          console.log("Opened dropdown:", toggle.textContent.trim())
        }
      }
    })
  })

  // Universal click handler for the entire header container
  headerContainer.addEventListener("click", (e) => {
    // Ignore clicks on the toggler itself
    if (e.target.closest(".navbar-toggler")) {
      return
    }

    console.log("Click detected on:", e.target.tagName, e.target.className, e.target.textContent?.trim())

    // Check if it's a dropdown item
    if (e.target.matches(".dropdown-item") || e.target.closest(".dropdown-item")) {
      console.log("Dropdown item clicked - closing mobile menu")
      if (isMobile() && isNavbarOpen) {
        setTimeout(() => forceCloseMobileNavbar(), 100) // Small delay to prevent conflicts
      }
      return
    }

    // Check if it's a regular nav link (not dropdown toggle)
    if (e.target.matches(".nav-link:not(.dropdown-toggle)") || e.target.closest(".nav-link:not(.dropdown-toggle)")) {
      console.log("Nav link clicked - closing mobile menu")
      if (isMobile() && isNavbarOpen) {
        setTimeout(() => forceCloseMobileNavbar(), 100) // Small delay to prevent conflicts
      }
      return
    }
  })

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (isMobile() && isNavbarOpen && !isToggling) {
      // Check if click is outside the navbar
      if (!e.target.closest(".navbar")) {
        console.log("Clicked outside navbar - closing mobile menu")
        forceCloseMobileNavbar()
      }
    }
  })

  // Close mobile menu on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isMobile() && isNavbarOpen && !isToggling) {
      console.log("Escape pressed - closing mobile menu")
      forceCloseMobileNavbar()
    }
  })

  // Handle window resize
  window.addEventListener("resize", () => {
    const currentlyMobile = window.innerWidth <= 768

    if (!currentlyMobile) {
      // Desktop mode - close mobile menu if open
      if (isNavbarOpen) {
        forceCloseMobileNavbar()
      }

      // Reset all dropdown styles for desktop
      dropdownToggles.forEach((toggle) => {
        const parent = toggle.closest(".nav-item.dropdown")
        if (parent) {
          parent.classList.remove("show")
          const dropdownMenu = parent.querySelector(".dropdown-menu, .mega-menu")
          if (dropdownMenu) {
            dropdownMenu.classList.remove("show")
            dropdownMenu.style.display = ""
            dropdownMenu.style.position = ""
            dropdownMenu.style.transform = ""
            dropdownMenu.style.left = ""
            dropdownMenu.style.top = ""
            dropdownMenu.style.width = ""
          }
          toggle.setAttribute("aria-expanded", "false")
        }
      })
    } else {
      // Mobile mode - ensure all dropdowns are closed
      closeAllDropdowns()
    }
  })

  // Sticky navbar functionality
  const sticky = navbar.offsetTop
  let isSticky = false

  const makeNavbarSticky = () => {
    const shouldBeSticky = window.pageYOffset > sticky

    if (shouldBeSticky && !isSticky) {
      navbar.classList.add("sticky")
      document.body.classList.add("navbar-sticky")
      isSticky = true
    } else if (!shouldBeSticky && isSticky) {
      navbar.classList.remove("sticky")
      document.body.classList.remove("navbar-sticky")
      isSticky = false
    }
  }

  // Throttled scroll handler
  let ticking = false
  const handleScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        makeNavbarSticky()
        ticking = false
      })
      ticking = true
    }
  }

  window.addEventListener("scroll", handleScroll, { passive: true })
  makeNavbarSticky()

  // Smooth scrolling for anchor links
  headerContainer.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href")

      if (!href || href === "#" || href.length <= 1) {
        return
      }

      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: "smooth" })
        if (isMobile() && isNavbarOpen) {
          forceCloseMobileNavbar()
        }
      }
    })
  })

  // Debug: Log all dropdown items found
  setTimeout(() => {
    const allDropdownItems = headerContainer.querySelectorAll(".dropdown-item")
    console.log("Found dropdown items:", allDropdownItems.length)
    allDropdownItems.forEach((item, index) => {
      console.log(`Dropdown item ${index}:`, item.textContent.trim())
    })
  }, 1000)

  console.log("Header initialized successfully")
  console.log("Mobile mode:", isMobile())
})
