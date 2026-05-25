<?php
// Enable error reporting for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Get the current page name
$current_page = basename($_SERVER['PHP_SELF']);

// Map pages to their specific CSS files
$css_files = array(
    'teams.php' => '/assets/CSS/teams.css',
    'news.php' => '/assets/CSS/news.css',
    'df.php' => '/assets/CSS/df.css',
    'index.php' => '/assets/CSS/style.css',
    'notablealumni.php' => '/assets/CSS/notablealumni.css',
    'awards_honours.php' => '/assets/CSS/awards_honours.css',
    'career.php' => '/assets/CSS/career.css',
    'utpal.php' => '/assets/CSS/utpal.css',
    'spark.php' => '/assets/CSS/spark.css',
    'annualreport.php' => '/assets/CSS/annualreport.css',
    'newsletter.php' => '/assets/CSS/newsletter.css',
    'previousnews.php' => '/assets/CSS/previousnews.css',
    'facultyinitiative.php' => '/assets/CSS/facultyinitiative.css',
    'marshal-harjindar.php' => '/assets/CSS/marshal-harjindar.css',
    'batch-1993.php' => '/assets/CSS/batch-1993.css',
    'distinguished-series.php' => '/assets/CSS/distinguished.css',
    'subbarao.php' => '/assets/CSS/subbarao.css',
    'pd.php' => '/assets/CSS/pd.css',
    'shiksha-sopan.php' => '/assets/CSS/shiksha-sopan.css',
    'prayas.php' => '/assets/CSS/prayas.css',
    'rsk.php' => '/assets/CSS/rsk.css',
    'opportunity-school.php' => '/assets/CSS/opportunity-school.css',
    'oi.php' => '/assets/CSS/oi.css',
    'ShivaniCentre.php' => '/assets/CSS/ShivaniCentre.css',
    'c1.php' => '/assets/CSS/c1.css',
    'mehta-center.php' => '/assets/CSS/mehta-center.css',
    'ns.php' => '/assets/CSS/school-pages.css',
    'campus.php' => '/assets/CSS/school-pages.css',
    'daa.php' => '/assets/CSS/daa.css',
    'skd.php' => '/assets/CSS/skd.css',
    'ds.php' => '/assets/CSS/ds.css',
    'yaa.php' => '/assets/CSS/yaa.css',
    'csea.php' => '/assets/CSS/csea.css',
    'scholarship.php' => '/assets/CSS/scholarship.css',
    'scholarship-criteria.php' => '/assets/CSS/scholarship-criteria.css',
    'List-of-Recipients-2022-23.php' => '/assets/CSS/list-of-Recipients-2022-23.css',
    'List-of-Recipients-2021-22.php' => '/assets/CSS/list-of-Recipients-2022-23.css',
    'List-of-Recipients-2020-21.php' => '/assets/CSS/list-of-Recipients-2022-23.css',
    'ongoing-student-award.php' => '/assets/CSS/list-of-Recipients-2022-23.css',
    'awards_initiative.php' => '/assets/CSS/award_initiative.css',
    'academic-excellence-award-2022.php' => '/assets/CSS/list-of-Recipients-2022-23.css',
    'gangwaal.php' => '/assets/CSS/gangwaal.css',
    'gym.php' => '/assets/CSS/gym.css',
    'obituaries.php' => '/assets/CSS/obituaries.css',
    'institute_news.php' => '/assets/CSS/i_n.css' ,
    'reunion2023-24.php' => '/assets/CSS/reunion-2324.css' , 
    'reunion2223.php' => '/assets/CSS/reunion2223.css' , 
    'reunion2425.php' => '/assets/CSS/reunion2425.css',
    'alum-news.php' => '/assets/CSS/alum-news.css'


);

// Function to determine which navigation section is active
function getActiveNavSection($current_page) {
    // News & Events pages
    $news_pages = array('news.php', 'previousnews.php', 'obituaries.php');
    
    // Initiatives pages
    $initiatives_pages = array(
        'facultyinitiative.php', 'distinguished-series.php', 'df.php',
        'scholarship.php', 'awards_initiative.php', 'oi.php',
        'gym.php', 'gangwaal.php', 'shiksha-sopan.php', 'prayas.php',
        'rsk.php', 'opportunity-school.php', 'ShivaniCentre.php',
        'c1.php', 'mehta-center.php', 'ns.php', 'campus.php'
    );
    
    // Awards pages
    $awards_pages = array('daa.php', 'skd.php', 'ds.php', 'yaa.php', 'csea.php');
    
    // Alumni pages
    $alumni_pages = array('notablealumni.php', 'awards_honours.php');
    
    // Publications pages
    $publications_pages = array(
        'newsletter.php', 'annualreport.php', 'spark.php',
        'utpal.php', 'subbarao.php', 'pd.php', 'marshal-harjindar.php',
        'batch-1993.php'
    );
    
    // CSR pages
    $csr_pages = array('csr1.php');
    
    // Check which section the current page belongs to
    if (in_array($current_page, $news_pages)) {
        return 'news-events';
    } elseif (in_array($current_page, $initiatives_pages)) {
        return 'initiatives';
    } elseif (in_array($current_page, $awards_pages)) {
        return 'awards';
    } elseif (in_array($current_page, $alumni_pages)) {
        return 'alumni';
    } elseif (in_array($current_page, $publications_pages)) {
        return 'publications';
    } elseif (in_array($current_page, $csr_pages)) {
        return 'csr';
    } elseif ($current_page === 'teams.php') {
        return 'team';
    } elseif ($current_page === 'career.php') {
        return 'career';
    } elseif ($current_page === 'index.php') {
        return 'home';
    }
    
    return '';
}

// Get the active navigation section
$active_section = getActiveNavSection($current_page);

// Function to check if a nav item should be active
function isNavActive($section, $active_section) {
    return $section === $active_section ? 'nav-link active' : 'nav-link';
}
?>
<!DOCTYPE html>
<html lang="en">
<?php include 'ssb.php' ?>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IITK Office of Resources and Alumni</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    
    <!-- Bootstrap Icons -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" rel="stylesheet">
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Common CSS for all pages -->
    <link rel="stylesheet" href="/assets/CSS/header.css">
    <link rel="stylesheet" href="/assets/CSS/footer.css">
    <link rel="stylesheet" href="/assets/CSS/ssb.css">
    
    <!-- Page-specific CSS -->
    <?php
    // Include the CSS file for the current page if it exists
    if (array_key_exists($current_page, $css_files)) {
        echo '<link rel="stylesheet" href="' . $css_files[$current_page] . '">';
    }
    ?>
</head>
<body>
    <header class="iitk-header-container">
        <div class="main-header">
            <div class="container-fluid">
                <div class="header-content d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center">
                        <a href="/index.php">
                            <img src="/assets/imag/home/logo.png" alt="IITK Logo" class="logo me-3">
                        </a>
                        <div class="header-text">
                            <h1>Office of Resources and Alumni</h1>
                            <h2>Indian Institute of Technology Kanpur</h2>
                        </div>
                    </div>
                    <div class="header-links-right d-none d-md-flex">
                        <b><a href="https://www.iitk.ac.in/dora/iitkdf" target="_blank">IITKDF</a></b>
                        <b><a href="https://iitk.ac.in/dora/giveback/" target="_blank"><i class="bi bi-gift-fill me-1"></i> GiveBack</a></b>
                    </div>
                </div>
            </div>
        </div>
        
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
                <div class="navbar-content d-flex justify-content-between align-items-center">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <!-- Sticky Logo Brand (hidden by default, shown when sticky) -->
                    <a class="navbar-brand" href="/index.php">
                        <img src="/publications/blogs/logo(3).png" alt="IITK Logo" class="sticky-logo">
                    </a>
                    
                    <div class="collapse navbar-collapse" id="mainNavbar">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="<?php echo isNavActive('home', $active_section); ?>" aria-current="page" href="/index.php">Home</a>
                            </li>
                            
                            <li class="nav-item dropdown">
                                <a class="<?php echo isNavActive('news-events', $active_section); ?> dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">News & Events</a>
                                <ul class="dropdown-menu dropdown-menu-dark mega-menu news-events">
                                    <div class="row g-0">
                                        <div class="col-lg-6 mega-col">
                                            <li><h6 class="dropdown-header text-warning">Reunions</h6></li>
                                            <li><a class="dropdown-item" href="/DORA/Internship/ne/reunion2425.php">Reunion 2024-25</a></li>
                                            <li><a class="dropdown-item" href="/DORA/Internship/ne/reunion2023-24.php">Reunion 2023-24</a></li>
                                            <li><a class="dropdown-item" href="/DORA/Internship/ne/reunion2223.php">Reunion 2022-23</a></li>
                                        </div>
                                        
                                        <div class="col-lg-6 mega-col">
                                            <li><h6 class="dropdown-header text-warning">News</h6></li>
                                            <li><a class="dropdown-item" href="/DORA/Internship/ne/institute_news.php">Institute News</a></li>
                                            <li><a class="dropdown-item" href="/DORA/Internship/ne/alum-news.php">Alumni News</a></li>
                                            <li><a class="dropdown-item" href="/ne/obituaries.php">Obituaries</a></li>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            
                            <li class="nav-item dropdown">
                                <a class="<?php echo isNavActive('initiatives', $active_section); ?> dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Initiatives</a>
                                <ul class="dropdown-menu dropdown-menu-dark mega-menu initiatives">
                                    <div class="row g-0">
                                        <div class="col-lg-4 mega-col">
                                            <li><h6 class="dropdown-header text-warning">Academic</h6></li>
                                            <li><a class="dropdown-item" href="/initiatives/facultyinitiative.php">Faculty Initiatives</a></li>
                                            <li><a class="dropdown-item" href="/initiatives/distinguished-series.php">Distinguished Lecture Series</a></li>
                                            <li><a class="dropdown-item" href="/initiatives/df.php">Departmental Fund</a></li>
                                        </div>
                                        <div class="col-lg-4 mega-col">
                                            <li><h6 class="dropdown-header text-warning">Student Support</h6></li>
                                            <li><a class="dropdown-item" href="/initiatives/scholarship.php">Scholarships</a></li>
                                            <li><a class="dropdown-item" href="/initiatives/awards_initiative.php">Awards</a></li>
                                            <li><a class="dropdown-item" href="/initiatives/oi.php">Other Initiatives</a></li>
                                        </div>
                                        <div class="col-lg-4 mega-col">
                                            <li><h6 class="dropdown-header text-warning">Infrastructure</h6></li>
                                            <li><a class="dropdown-item" href="/initiatives/gym.php">Gym Upgrade & Expansion</a></li>
                                            <li><a class="dropdown-item" href="/initiatives/gangwaal.php">Gangwal School of Medical Sciences</a></li>
                                        </div>
                                    </div>
                                    <div class="row g-0">
                                        <div class="col-lg-4 mega-col">
                                            <li><h6 class="dropdown-header text-warning">Community Welfare</h6></li>
                                            <li><a class="dropdown-item" href="/initiatives/shiksha-sopan.php">Shiksha Sopan</a></li>
                                            <li><a class="dropdown-item" href="/initiatives/prayas.php">Prayas</a></li>
                                            <li><a class="dropdown-item" href="/initiatives/rsk.php">Rozi Shiksha Kendra</a></li>
                                            <li><a class="dropdown-item" href="/initiatives/opportunity-school.php">Opportunity School</a></li>
                                        </div>
                                        <div class="col-lg-4 mega-col">
                                            <li><h6 class="dropdown-header text-warning">Centres</h6></li>
                                            <li><a class="dropdown-item" href="/initiatives/ShivaniCentre.php">Shivani Centre for Languages</a></li>
                                            <li><a class="dropdown-item" href="/initiatives/c1.php">Kesavan Centre for Energy Policy</a></li>
                                            <li><a class="dropdown-item" href="/initiatives/mehta-center.php">Mehta Center for Engineering in Medicine</a></li>
                                        </div>
                                        <div class="col-lg-4 mega-col">
                                            <li><h6 class="dropdown-header text-warning">Educational</h6></li>
                                            <li><a class="dropdown-item" href="/initiatives/ns.php">Kislaya School</a></li>
                                            <li><a class="dropdown-item" href="/initiatives/campus.php">Campus School</a></li>
                                            <br>
                                            <li><h6 class="dropdown-header text-warning">Batch</h6></li>
                                            <li><a class="dropdown-item" href="#">View All</a></li>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            
                            <li class="nav-item dropdown">
                                <a class="<?php echo isNavActive('awards', $active_section); ?> dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Awards</a>
                                <ul class="dropdown-menu dropdown-menu-dark">
                                    <li><a class="dropdown-item" href="/awards/daa.php">DA Award</a></li>
                                    <li><a class="dropdown-item" href="/awards/skd.php">SKD Award</a></li>
                                    <li><a class="dropdown-item" href="/awards/ds.php">DS Award</a></li>
                                    <li><a class="dropdown-item" href="/awards/yaa.php">YA Award</a></li>
                                    <li><a class="dropdown-item" href="/awards/csea.php">CSE-PJBT Award</a></li>
                                </ul>
                            </li>
                            
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Brochures</a>
                                <ul class="dropdown-menu dropdown-menu-dark">
                                    <li><a class="dropdown-item" href="https://iitk.ac.in/dora/foundation-day-24.pdf" target="_blank">Foundation Day Brochure 2024</a></li>
                                    <li><a class="dropdown-item" href="https://iitk.ac.in/dora/foundationday-2023.pdf" target="_blank">Foundation Day Brochure 2023</a></li>
                                    <li><a class="dropdown-item" href="https://iitk.ac.in/dora/brochure-award-2022.pdf" target="_blank">Foundation Day Brochure 2022</a></li>
                                </ul>
                            </li>
                            
                            <li class="nav-item dropdown">
                                <a class="<?php echo isNavActive('alumni', $active_section); ?> dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Alumni</a>
                                <ul class="dropdown-menu dropdown-menu-dark">
                                    <li><a class="dropdown-item" href="https://iitkalumni.org/" target="_blank">Alumni Association</a></li>
                                    <li><a class="dropdown-item" href="/alumni/notablealumni.php">Notable Alumni</a></li>
                                    <li><a class="dropdown-item" href="/alumni/awards_honours.php">Recognition & Honors</a></li>
                                </ul>
                            </li>
                            
                            <li class="nav-item dropdown">
                                <a class="<?php echo isNavActive('csr', $active_section); ?> dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">CSR</a>
                                <ul class="dropdown-menu dropdown-menu-dark">
                                    <li><a class="dropdown-item" href="/csr1.php">CSR Initiatives</a></li>
                                    <li><a class="dropdown-item" href="https://iitk.ac.in/dora/csr-details.php">Forms</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="https://iitk.ac.in/dora/iitk-csr-project-catalogue.pdf">IITK CSR Project Catalogue</a></li>
                                    <li><a class="dropdown-item" href="https://iitk.ac.in/dora/csr-summit-brochure-2023-24.pdf">CSR Summit Brochure 2023-24</a></li>
                                </ul>
                            </li>
                            
                            <li class="nav-item dropdown">
                                <a class="<?php echo isNavActive('publications', $active_section); ?> dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Publications</a>
                                <ul class="dropdown-menu dropdown-menu-dark">
                                    <li><a class="dropdown-item" href="/publications/newsletter.php">Newsletter</a></li>
                                    <li><a class="dropdown-item" href="/publications/annualreport.php">Annual Report</a></li>
                                    <li><a class="dropdown-item" href="/publications/spark.php">Spark</a></li>
                                    <li><a class="dropdown-item" href="https://iitk.ac.in/dora/kritajna/kritajna.pdf" target="_blank">Kritajna</a></li>
                                    <li><a class="dropdown-item" href="https://iitk.ac.in/dora/kritajna/kritajna-2022.pdf" target="_blank">Kritajna-2022</a></li>
                                    <li><a class="dropdown-item" href="/publications/blogs/blogs.php">Blog</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="https://iitk.ac.in/dora/samanvay_brochure_V6.pdf" target="_blank">IITK Samanvay 2024</a></li>
                                </ul>
                            </li>
                            
                            <li class="nav-item">
                                <a class="<?php echo isNavActive('team', $active_section); ?>" href="/teams.php">Team</a>
                            </li>
                            
                            <li class="nav-item">
                                <a class="<?php echo isNavActive('career', $active_section); ?>" href="/career.php">Career</a>
                            </li>
                        </ul>
                        
                        <form class="d-flex" role="search" action="/search.php" method="get">
                            <div class="input-group">
                                <input class="form-control" type="search" placeholder="Search..." aria-label="Search" name="query">
                                <button class="btn btn-outline-light" type="submit">
                                    <i class="bi bi-search"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    
    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <script src="/assets/JS/header.js"></script>
    
    <!-- Ensure Home tab is active on index.php -->
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const currentPage = '<?php echo $current_page; ?>';
            if (currentPage === 'index.php') {
                const homeNav = document.querySelector('a[href="/index.php"]');
                if (homeNav) {
                    // Remove active class from all nav items
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.remove('active');
                    });
                    // Add active class to Home nav
                    homeNav.classList.add('active');
                }
            }
        });
    </script>
</body>
</html>
