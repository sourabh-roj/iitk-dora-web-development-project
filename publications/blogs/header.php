<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DoRA - Blogs</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <style>
    :root {
      --logo-size: 135px;
      --logo-size-shrink: 90px;
      --logo-border: 5px;
      --header-height: 135px;
      --header-height-shrink: 70px; 
    }

    body {
      margin: 0;
      background: #fff;
      font-family: sans-serif;
    }

    .header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: var(--header-height);
      display: flex;
      align-items: center;
      padding-left: calc(var(--logo-size) + 40px);
      color: #fff;
      z-index: 999;
      background:#002349;
      transition: background 0.4s, height 0.3s, padding-left 0.3s;
      border-bottom: 2px solid gold;
    }

    .header.scrolled {
      background: #002349;
      height: var(--header-height-shrink);
      padding-left: calc(var(--logo-size-shrink) + 40px);
    }

    .logo-circle {
      position: fixed;
      top: 10px;
      left: 20px;
      width: var(--logo-size);
      height: var(--logo-size);
      background: #002349;
      border: var(--logo-border) solid #002349;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      overflow: hidden;
      z-index: 1000;
      transition: width 0.3s, height 0.3s;
    }

    .logo-circle img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }

    .logo-circle.scrolled {
      width: var(--logo-size-shrink);
      height: var(--logo-size-shrink);
      background-color: #002349;
      border: var(--logo-border) solid #002349;
    }

    .header-title {
      font-size: 28px;
      color: white;
      letter-spacing: 1px;
      flex: 1;
      padding-left: 10px;
      transition: font-size 0.3s;
    }

    .header.scrolled .header-title {
      font-size: 18px;
      /* color: black; */
    }

    .nav-tabs {
      display: flex;
      gap: 20px;
      margin-left: auto;
      margin-right: 150px;
      align-items: center;
    }

    .nav-tab {
      color: #fff;
      text-decoration: none;
      font-size: 16px;
      font-weight: 500;
      padding: 8px 16px;
      border-radius: 4px;
      transition: all 0.3s;
      letter-spacing: 0.5px;
      position: relative;
    }

    .nav-tab:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-1px);
    }

    .nav-tab.active {
      background: rgba(255, 255, 255, 0.2);
      border-bottom: 2px solid #fff;
    }

    .header.scrolled .nav-tab {
      font-size: 14px;
      padding: 6px 12px;
    }

    .mobile-menu-toggle {
      display: none;
      background: none;
      border: none;
      color: #fff;
      font-size: 24px;
      cursor: pointer;
      margin-right: 20px;
    }

    @media (max-width: 768px) {
      .nav-tabs {
        position: fixed;
        top: var(--header-height);
        left: 0;
        width: 100%;
        background: #191919;
        flex-direction: column;
        gap: 0;
        padding: 20px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        transform: translateY(-100%);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s;
      }

      .nav-tabs.open {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
      }

      .header.scrolled .nav-tabs {
        top: var(--header-height-shrink);
      }

      .nav-tab {
        width: 100%;
        text-align: center;
        padding: 12px;
        margin: 5px 0;
        border-radius: 6px;
      }

      .mobile-menu-toggle {
        display: block;
      }

      .header-title {
        font-size: 20px;
      }

      .header.scrolled .header-title {
        font-size: 16px;
      }
    }

    .header-spacer {
      height: var(--header-height);
      transition: height 0.3s;
    }

    .header-spacer.scrolled {
      height: var(--header-height-shrink);
    }

    .content {
      padding: 32px;
      background: #fff;
    }

    .ssb-container {
      position: relative;
      z-index: 50;
    }
  </style>
</head>
<body>
  
  <header class="header" id="mainHeader"><strong>
    <div class="header-title">OFFICE OF DEAN OF RESOURCES & ALUMNI, IITK</div></strong>
    
    <nav class="nav-tabs" id="navTabs">
            <a href="blogs.php" class="nav-tab active">Blog</a>
      <a href="../../index.php" class="nav-tab ">DORA Home</a>
      <!-- <a href="#" class="nav-tab active">Blog</a> -->
    </nav>

    <button class="mobile-menu-toggle" id="mobileToggle">☰</button>
  </header>

  <div class="logo-circle" id="logoCircle">
    <img src="/DORA/Internship/publications/blogs/logo(3).png" alt="IITK Logo">
  </div>

  <div class="header-spacer" id="headerSpacer"></div>

  <script>
    const header = document.getElementById('mainHeader');
    const logoCircle = document.getElementById('logoCircle');
    const spacer = document.getElementById('headerSpacer');
    const mobileToggle = document.getElementById('mobileToggle');
    const navTabs = document.getElementById('navTabs');

    // Scroll functionality
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        header.classList.add('scrolled');
        logoCircle.classList.add('scrolled');
        spacer.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
        logoCircle.classList.remove('scrolled');
        spacer.classList.remove('scrolled');
      }
    });

    // Mobile menu toggle
    mobileToggle.addEventListener('click', () => {
      navTabs.classList.toggle('open');
    });

    // Tab functionality
    const tabs = document.querySelectorAll('.nav-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Close mobile menu if open
        navTabs.classList.remove('open');
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!header.contains(e.target)) {
        navTabs.classList.remove('open');
      }
    });
  </script>
</body>
</html>