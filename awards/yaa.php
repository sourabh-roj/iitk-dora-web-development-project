<?php include('../header.php')?>

<body>
    <main class="container">
        <div class="section">
            <h2 class="title_one">Young Alumni Award</h2>

            <div class="about-section">
                <div class="about-content">
                    <h3 class="about-title">About the Award</h3>
                    <p class="about-text">
                        Started in the year 2019, the Young Alumni Award, is conferred to those Alumni who are less than 40 years of age and have contributed significantly and achieved outstanding recognition in their career.
                        The Young Alumni Award (YAA) recognizes IIT Kanpur alumni under 40 years of age (as on 2nd November of the year of the award) who have made significant contributions and achieved remarkable recognition early in their careers, bringing pride to their alma mater.
                    </p>
                    <div class="button-container">
                        <a class="nominate-button" href="https://dora.iitk.ac.in/awards/nominate/" target="_blank" rel="noopener noreferrer">
                            Nominate for Award
                        </a>
                    </div>
                </div>
                <div class="info-section">
                    <h3>Evaluation Committee</h3>
                    <div class="committee-columns">
                        <ul class="committee-list">
                            <li>Director, IIT Kanpur as the Chairman</li>
                            <li>Dean of Resource and Alumni, IIT Kanpur as the Convener</li>
                            <li>Dean of Faculty Affairs, IIT Kanpur as a Member</li>
                            <li>President, Alumni Association, IIT Kanpur as a Member</li>
                        </ul>
                        <ul class="committee-list">
                            <li>Young IIT Kanpur Faculty (less than 40 years, alumnus) as a Member</li>
                            
                            <li>Two young Alumni (less than 40 years), nominated by the Director, IIT Kanpur as Members</li>
                            <li>Young IITK Faculty (less than 40 years, non-alumnus) as Member</li>
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
    <script src="../assets/JS/yaa.js"></script>
<?php include('../footer.php')?>