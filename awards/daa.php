<?php include('../header.php')?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Distinguished Alumni Award by IIT Kanpur, recognizing alumni for outstanding achievements in various fields.">
    <title>Distinguished Alumni Award | IIT Kanpur</title>
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="daa.css"> -->
</head>
<body>
    <main class="container">
        <div class="section">
            <h2 class="title_one">Distinguished Alumni Award</h2>
            <div class="about-section">
                <div style="flex: 1;">
                    <h3 class="about-title">About the Award</h3>
                    <p class="about-text">The Distinguished Alumni Award (DAA), started in 1989, is the highest award given by IIT Kanpur to its alumni in recognition of their outstanding achievements. Every year, the institute works with its alumni to honour individuals who have made a mark in their respective fields. They are selected for the award based on specific meritorious services on behalf of the quality and advancement of IITK, distinguished accomplishments in business and professional life and/or distinguished human service in community affairs.<br>
                    Nominations can be made for outstanding achievements in various pursuits under the following categories:
                    <ul><li>Academic Excellence</li>
                    <li>Professional Excellence</li>
                    <li>Entrepreneurship and Management</li>
                    <li>Any other activity pertaining to the service of Humanity at large.</li></ul>
                    </p>
                </div>
                <div class="info-section">
                    <h3>Evaluation Committee</h3>
                    <div class="committee-container">
                        <ul class="committee-list">
                            <li>Director, IIT Kanpur as the Chairman.</li>
                            <li>One Past Distinguished Alumni Awardee (Entrepreneurship Excellence) as a Member.</li>
                            <li>One Past Distinguished Alumni Awardee (Management Excellence) as a Member.</li>
                            <li>Faculty member, IIT Kanpur (non-alumnus) as a Member.</li>
                        </ul>
                        <ul class="committee-list">
                            <li>One Past Distinguished Alumni Awardee (Professional Excellence) as a Member.</li>
                            <li>One Past Distinguished Alumni Awardee (Academic Excellence) as a Member.</li>
                            <li>Dean of Students Affairs as Member.</li>
                            <li>Secretary, Alumni Association as Member Secretary.</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <!-- Nominate Button -->
            <div class="nominate-section">
                <a href="https://dora.iitk.ac.in/awards/nominate/" target="_blank" class="nominate-button">
                    Nominate for Award
                </a>
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
                        <div class="years"></div>
                        <div class="more-years hidden"></div>
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
    <script src="\DORA\Internship\assets\js\daa.js"></script>
</body>
</html>
<?php include('../footer.php')?>
