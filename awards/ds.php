<?php include('../header.php') ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Distinguished Services Award by IIT Kanpur, recognizing alumni for exemplary service and support to the institute.">
    <title>Distinguished Services Award | IIT Kanpur</title>
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="ds.css"> -->
</head>
<body>
    <main class="container">
        <div class="section">
            <h2 class="title_one">Distinguished Services Award</h2>

            <div class="about-section">
                <div style="flex: 1;">
                    <h3 class="about-title">About the Award</h3>
                    <p class="about-text">
                        Started in the year 2019, Distinguished Services Award (DSA), recognizes the hard work and dedication of Alumni in doing exemplary service by becoming the goodwill ambassadors in various fields and augment and support the Institute’s effort in various ways like facilitating project collaborations, academic collaborations, student workshops, summer projects etc.
                    </p>
                    <div class="button-container">
                        <a class="nominate-button" href="https://dora.iitk.ac.in/awards/nominate/" target="_blank" rel="noopener noreferrer">
                            Nominate for Award
                        </a>
                    </div>
                </div>
                <div class="info-section">
                    <h3>Evaluation Committee</h3>
                    <div class="committee-container">
                        <ul class="committee-list">
                            <li>Director, IIT Kanpur as the Chairman.</li>
                            <li>Dean of Resources and Alumni, IIT Kanpur as the Convenor.</li>
                            <li>Two Distinguished Alumni (nominated by the Director) as Members.</li>
                        </ul>
                        <ul class="committee-list">
                            <li>Faculty member (Non-Alumnus) as a Member.</li>
                            <li>Faculty member (Alumnus) as a Member.</li>
                            <li>President, Alumni Association, IIT Kanpur as a Member.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="title_two">Award Recipients</div>

            <div class="filter-box">
                <div class="filter-top"></div>

                <div class="filter-content">
                    <div class="search-bar">
                        <label for="search" aria-label="Search Award Recipients"><i class="fa fa-search"></i> Search Award Recipients:</label>
                        <input type="text" id="search" placeholder="Search by name, position, or batch..." aria-label="Enter search term">
                    </div>

                    <div class="dropdown-filter"></div>

                    <div class="quick-buttons">
                        <label aria-label="Quick Year Selection">Quick Year Selection:</label>
                        <div class="years">
                            <button class="year" data-year="all" aria-label="Show all years">All Years</button>
                            <button class="year" data-year="2024" aria-label="Filter by 2024">2024</button>
                            <button class="year" data-year="2023" aria-label="Filter by 2023">2023</button>
                            <button class="year" data-year="2022" aria-label="Filter by 2022">2022</button>
                            <button class="year" data-year="2021" aria-label="Filter by 2021">2021</button>
                            <button class="year" data-year="2020" aria-label="Filter by 2020">2020</button>
                            <button class="year" data-year="2019" aria-label="Filter by 2019">2019</button>
                        </div>
                    </div>

                    <div class="active-filters">
                        Active filters:
                        <span class="badge" id="active-filter-year"></span>
                        <span class="badge" id="active-filter-search"></span>
                        <button class="clear-all" aria-label="Clear all filters">Clear All</button>
                    </div>
                </div>
            </div>

            <div class="result-count" id="result-count"></div>

            <div class="award-scroll-wrapper">
                <div class="award-scroll" id="awards-grid"></div>
            </div>
        </div>
    </main>
    <script src="\DORA\Internship\assets\js\ds.js"></script>
    <?php include('..\footer.php') ?>