<?php include '../header.php' ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="List of Student Awards for the Academic Year 2021-22 at IIT Kanpur, provided by the Dean of Resources and Alumni (DoRA).">
    <title>Student Awards 2021-22 | IIT Kanpur</title>
    <link rel="stylesheet" href="list-of-Recipients-2022-23.css">
</head>
<body>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h2 class="card-title">Student Awards 2021-22</h2>
            </div>
            <div class="card-content">
                <!-- Search Bar -->
                <div class="search-container">
                    <svg class="search-icon" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M10.5 3a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm-9 7.5a9 9 0 1118 0 9 9 0 01-18 0zm15.293 5.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414-1.414l4-4z" clip-rule="evenodd" />
                    </svg>
                    <input type="text" id="searchInput" class="search-input" placeholder="Search awards, benefactors, or criteria...">
                </div>

                <!-- Results Count -->
                <div class="results-count" id="resultsCount"></div>

                <!-- Table -->
                <div class="table-container">
                    <table id="recipientTable">
                        <thead>
                            <tr>
                                <th class="sno">S.No</th>
                                <th class="awardName">Award Name</th>
                                <th class="benefactor">Benefactor</th>
                                <th class="criteria">Criteria</th>
                            </tr>
                        </thead>
                        <tbody id="recipientBody"></tbody>
                    </table>
                </div>

                <!-- No Results Message -->
                <div class="no-results" id="noResults" style="display: none;">
                    <div class="no-results-title">No awards found</div>
                    <div class="no-results-text">Try adjusting your search terms or clear the search to see all awards</div>
                </div>
            </div>
        </div>
    </div>
    <script src="../assets/js/ongoing-student-award.js"></script>
<?php include '../footer.php' ?>
</body>
</html>