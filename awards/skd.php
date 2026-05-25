<?php include("..\header.php"); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Satyendra K. Dubey Memorial Award by IIT Kanpur, recognizing alumni for integrity and human values.">
    <title>Satyendra K. Dubey Memorial Award | IIT Kanpur</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="skd.css">
</head>
<body>
    <main class="container">
        <div class="section">
            <h2 class="title_one">Satyendra K. Dubey Memorial Award (SKDA)</h2>

            <div class="about-section">
                <div style="flex: 1;">
                    <div>
                        <h3 class="about-title">About the Award</h3>
                        <p class="about-text">
                            The Satyendra K. Dubey Memorial Award (SKDA), established in 2005 by IIT Kanpur, honors the memory of alumnus Mr. Satyendra K. Dubey (BT/CE/1994), who exemplified integrity and courage in his professional life. This prestigious award recognizes IIT alumni who demonstrate exceptional commitment to upholding human values and ethical standards. Conferred annually alongside the Distinguished Alumnus Awards, the SKDA celebrates individuals who inspire through their dedication to societal good.
                        </p>
                    </div>
                    <div class="eligibility-box">
                        <h3 class="eligibility-heading">Eligibility</h3>
                        <p class="eligibility-text">
                            Any alumnus/alumna of any IIT who has distinguished himself/herself by displaying the highest professional integrity in upholding human values.
                        </p>
                    </div>
                    <div class="button-container">
                        <a class="nominate-button" href="https://dora.iitk.ac.in/awards/nominate/" target="_blank" rel="noopener noreferrer">
                            Nominate for Award
                        </a>
                    </div>
                </div>
                <div class="info-section">
                    <h3>Evaluation Committee</h3>
                    <ul class="committee-list">
                        <li>Director, IIT Kanpur (Chairman)</li>
                        <li>Eminent Persons, Nominated by the Chairman, Board of Governors</li>
                        <li>Nominee from an IIT</li>
                        <li>Nominee from another IIT</li>
                        <li>Past Satyendra K. Dubey Memorial Awardee</li>
                        <li>Dean of Students' Affairs</li>
                        <li>Dean of Resources and Alumni</li>
                        <li>President, Students' Association</li>
                        <li>Secretary, Alumni Association (Member Secretary)</li>
                    </ul>
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
                            <button class="year" data-year="2023" aria-label="Filter by 2023">2023</button>
                            <button class="year" data-year="2022" aria-label="Filter by 2022">2022</button>
                            <button class="year" data-year="2021" aria-label="Filter by 2021">2021</button>
                            <button class="year" data-year="2020" aria-label="Filter by 2020">2020</button>
                            <button class="year" data-year="2019" aria-label="Filter by 2019">2019</button>
                            <button class="year" data-year="2018" aria-label="Filter by 2018">2018</button>
                            <button class="year" data-year="2017" aria-label="Filter by 2017">2017</button>
                            <button class="year" data-year="2016" aria-label="Filter by 2016">2016</button>
                            <button class="year" data-year="more" aria-label="Show more years">More Years...</button>
                        </div>
                        <div class="more-years hidden">
                            <button class="year" data-year="2015" aria-label="Filter by 2015">2015</button>
                            <button class="year" data-year="2014" aria-label="Filter by 2014">2014</button>
                            <button class="year" data-year="2013" aria-label="Filter by 2013">2013</button>
                            <button class="year" data-year="2012" aria-label="Filter by 2012">2012</button>
                            <button class="year" data-year="2011" aria-label="Filter by 2011">2011</button>
                            <button class="year" data-year="2010" aria-label="Filter by 2010">2010</button>
                            <button class="year" data-year="2009" aria-label="Filter by 2009">2009</button>
                            <button class="year" data-year="2008" aria-label="Filter by 2008">2008</button>
                            <button class="year" data-year="2007" aria-label="Filter by 2007">2007</button>
                            <button class="year" data-year="2006" aria-label="Filter by 2006">2006</button>
                            <button class="year" data-year="2005" aria-label="Filter by 2005">2005</button>
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
    <script src="\DORA\Internship\assets\js\skd.js"></script>
    <?php include("../footer.php"); ?>