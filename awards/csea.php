<?php include('../header.php')?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Pankaj Jalote Best Teacher Award in CSE at IIT Kanpur, recognizing excellence in teaching within the Computer Science and Engineering Department.">
    <title>Pankaj Jalote Best Teacher Award in CSE | IIT Kanpur</title>
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="csea.css"> -->
</head>
<body>
    <main class="container">
        <div class="section">
            <h2 class="title_one">Pankaj Jalote Best Teacher <br> Award in CSE</h2>
            <div class="about-section">
                <h3 class="about-title">About the Award</h3>
                <div class="about-content collapsed">
                    <p class="about-text">
                        This award, as well as an award for the best software, are sponsored by Pankaj Jalote through a corpus. Pankaj Jalote, who got his BTech from IIT Kanpur in Electrical Engineering in 1980, spent most of his academic life as a faculty member in the Department of CSE, which he joined as Assistant Professor in 1989. In his over 16 years as faculty in CSE, he was also the Head of the department for four years, during which, with funds from Mr. NRN Murthy, he got the first CSE building (Kadim Diwan) built, and also established the first chair in the department. As he says, his IITK days have been very fruitful and also academically the most productive - his first four books were written while being a faculty at IIT Kanpur. Both his daughters, Sumedha and Sunanda, were also born while he was in IITK, and spent their childhood years on the campus.
                    </p>
                    <div class="extra-content">
                        <p class="about-text">
                            The faculty of the Department of Computer Science and Engineering at IIT Kanpur are deeply committed to excellence in teaching. They believe that teaching is at the core of a vibrant academic environment and plays a crucial role in shaping future leaders and innovators. The department faculty continually strive to enhance the quality of education through innovative teaching methods, rigorous coursework, and mentorship. They are dedicated to nurturing curiosity, critical thinking, and ethical practices among our students, aiming to prepare them not just for jobs, but for meaningful contributions to society.
                        </p>
                        <p class="about-text">
                            This award serves as an important motivation for faculty in the Department of Computer Science and Engineering to excel in teaching, as it recognizes the best teacher, selected through a voting process by the graduating batch students. Such acknowledgment encourages faculty members to dedicate more effort and heart to their teaching, fostering an environment where outstanding educators are celebrated and inspired. Ultimately, it helps promote a culture of pedagogical excellence within the department, benefitting current and future generations of students.
                        </p>
                    </div>
                </div>
                <div class="button-container nominate-section">
                    <button class="read-more-btn" onclick="toggleReadMore()">Read More</button>
                    <button class="nominate-button" onclick="window.open('https://dora.iitk.ac.in/awards/nominate/', '_blank')">
                        Nominate for Award
                    </button>
                </div>
            </div>
            
            <div class="title_two">Award Recipients</div>
            <div class="filter-box">
                <div class="filter-top"></div>
                <div class="filter-content">
                    <div class="search-bar">
                        <label for="search"><i class="fa fa-search"></i> Search Award Recipients:</label>
                        <input type="text" id="search" placeholder="Search by name or year...">
                    </div>
                    <div class="dropdown-filter"></div>
                    <div class="quick-buttons">
                        <label>Quick Year Selection:</label>
                        <div class="years">
                            <button class="year" data-year-range="all">All Years</button>
                            <button class="year" data-year-range="2020-2025">2025-2020</button>
                            <button class="year" data-year-range="2015-2019">2019-2015</button>
                            <button class="year" data-year-range="2010-2014">2014-2010</button>
                            <button class="year" data-year-range="2000-2009">2009-2000</button>
                        </div>
                    </div>
                    <div class="active-filters">
                        Active filters:
                        <span class="badge" id="active-filter-year"></span>
                        <span class="badge" id="active-filter-search"></span>
                        <button class="clear-all">Clear All</button>
                    </div>
                </div>
            </div>
            <div class="result-count">
                Showing <strong>24</strong> of <strong>24</strong> award recipients
            </div>
            <div class="award-scroll-wrapper">
                <div class="award-scroll" id="awards-grid"></div>
            </div>
        </div>
    </main>
    <script src="../assets/js/csea.js"></script>
</body>
</html>
<?php include('../footer.php')?>