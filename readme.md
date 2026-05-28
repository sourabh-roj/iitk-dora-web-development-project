# IIT Kanpur DoRA Web Development Project
dokeriitk.onrender.com/

## Project Overview
This project is the culmination of a two-month front-end web development internship at the Indian Institute of Technology Kanpur (IIT Kanpur), working specifically with the Office of Outreach Activities and the Development Office and Relations with Alumni (DoRA). The principal objective was to deliver maintainable, modular, and high-performance front-end solutions that seamlessly integrated with institutional branding and adhered to responsive design principles. 

## Team Members
* **Prathmesh Thakur**
* **Garv Nihore**
* **Sourabh Roj**
* *Mentorship*: Prof. Amey Karkare 
## Modules Developed

### 1. DoRA Homepage
* **Responsive Mega Menu**: Uses CSS Grid and Flexbox for seamless navigation across desktop and mobile devices.
* **Parallax Hero Section**: Responds to scroll events to create a subtle depth effect without relying heavily on JavaScript.
* **Alumni Events Slider**: Cycles through upcoming event cards using a custom image slider class.
* **News Ticker & Statistic Cards**: Displays live statistics using animated counter modules and a responsive grid layout.
* **Persistent Social Sidebar**: Ensures quick access to official social channels across all pages.

### 2. CSR & Corporate Philanthropy Page
* **Full-Viewport Hero Slideshow**: Features floating SVG shapes and smooth transitions mapped with CSS keyframes.
* **Five-Column Statistics Grid**: Showcases impact metrics aligned with institutional branding, optimized with responsive Tailwind classes.
* **Interactive Call-to-Action**: A centralized "Get in Touch" button tailored with custom hover states.

### 3. IITKONNECT Newsletter
* **Single-Page Application (SPA)**: Delivers a polished reading experience with a fixed top navigation bar and scroll-spy indicators.
* **Parallax Hero Banners**: Uses fixed background attachments and gradient overlays for readability.
* **Responsive Grids & Lightbox**: Adapts to varying viewport sizes and allows image enlargement upon click.
* **Print-Friendly Layout**: Hides non-essential UI elements when printing for a reader-friendly output.

### 4. Award Listing Pages
Implemented for Computer Science & Engineering Awards (CSEA), Distinguished Alumni Awards (DAA), Distinguished Services Awards (DSA), Satyendra K. Dubey Memorial Award (SKDA), and Young Alumni Awards (YAA).
* **Dynamic Filtering**: Applies text search and year/year-range filters dynamically to a massive array of entries.
* **Pagination & Infinite Scroll**: Pages with fewer than 50 entries use PHP-generated pagination, while larger sets utilize infinite scroll batch loading.
* **Profile Cards & Read-More Options**: Displays images, names, and badges, alongside collapsible biography sections powered by CSS height animations.

### 5. Team & Career Sections
* **Hierarchical Team Layout**: Positions the current Dean prominently, with previous Deans situated strategically to reflect leadership continuity.
* **Interactive Career Cards**: Engages users with color shifts and elevation effects during hover interactions.
* **Accessibility First**: Uses semantic HTML5 and ARIA labels to ensure screen-reader compatibility and keyboard navigation.

## Tech Stack
* **Frontend**: HTML5, CSS3, SCSS, Tailwind CSS, Vanilla JavaScript (ES6+).
* **Backend**: PHP 5.3 (modular templating using `header.php`, `footer.php`, `ssb.php`).
* **Development Environment**: XAMPP, Apache, MySQL / MariaDB.
* **Tools**: GitLab, BrowserStack, Lighthouse, ESLint, Stylelint, Jest.

## Key Technical Highlights
* **Modular PHP Architecture**: Centralized shared markup (headers, footers, sidebars) to reduce repetition and enable dynamic asset loading via a custom mapping function.
* **Library-Free Components**: Developed sliders, carousels, marquees, and counter animations relying exclusively on vanilla JavaScript, the Intersection Observer API, and CSS transforms to achieve smooth 60 fps rendering.
* **Performance Engineering**: Optimized pages by lazy loading offscreen elements, debouncing search inputs (at 300 ms), and throttling scroll handlers to prevent layout thrashing.
* **WCAG 2.1 AA Compliance**: Validated high-contrast color schemes, inclusive semantic hierarchies, and explicit keyboard navigation focus.

## Project Structure


iitk/
├── alumni/
│   ├── awards_honours.php
│   ├── notablealumni.php
│   └── utpal.php
├── assets/
│   ├── CSS/                # SCSS output, Tailwind components, and base styles
│   ├── imag/               # Static image assets (blogs, team, initiatives, newsletter, etc.)
│   └── JS/                 # Modular ES6 JavaScript files (csea.js, daa.js, header.js, etc.)
├── awards/
│   ├── csea.php            # Computer Science & Engineering Awards
│   ├── daa.php             # Distinguished Alumni Awards
│   ├── ds.php              # Distinguished Services Awards
│   ├── skd.php             # Satyendra K. Dubey Memorial Award
│   └── yaa.php             # Young Alumni Awards
├── imag/                   # Additional categorized institute/initiative images
├── initiatives/            
├── ne/                     
├── publications/           
├── career.php              # Career opportunities interface
├── csr.html / csr1.php     # CSR & Corporate Philanthropy entry points
├── Dockerfile              # Container configuration
├── footer.php              # Shared modular PHP footer
├── header.php              # Shared modular PHP header (includes asset loading logic)
├── index.php               # DoRA Homepage
├── pd.php
├── readme.md               # Repository documentation
├── ssb.php                 # Fixed vertical social sidebar template
└── teams.php               # Interactive DoRA Team layout