<?php include '../header.php' ?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="List of Scholarship Recipients for the Academic Year 2022-23 at IIT Kanpur, provided by the Dean of Resources and Alumni (DoRA).">
    <title>Scholarship Recipients 2022-23 | IIT Kanpur</title>
    <!-- <link rel="stylesheet" href="list-of-Recipients-2022-23.css"> -->
</head>
<body>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h2 class="card-title">Scholarship Recipients 2022-23</h2>
            </div>
            <div class="card-content">
                <!-- Search Bar -->
                <div class="search-container">
                    <svg class="search-icon" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M10.5 3a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm-9 7.5a9 9 0 1118 0 9 9 0 01-18 0zm15.293 5.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414-1.414l4-4z" clip-rule="evenodd" />
                    </svg>
                    <input type="text" id="searchInput" class="search-input" placeholder="Search recipients, departments, batch, or scholarship...">
                </div>

                <!-- Results Count -->
                <div class="results-count" id="resultsCount"></div>

                <!-- Table -->
                <div class="table-container">
                    <table id="recipientTable">
                        <thead>
                            <tr>
                                <th class="sno">S.No</th>
                                <th class="scholarshipName">scholarship Name</th>
                                <th class="donor">Donor</th>
                                <th class="recipient">recipient</th>
                                <th class="department">department</th>
                            </tr>
                        </thead>
                        <tbody id="recipientBody"></tbody>
                    </table>
                </div>

                <!-- No Results Message -->
                <div class="no-results" id="noResults" style="display: none;">
                    <div class="no-results-title">No recipients found</div>
                    <div class="no-results-text">Try adjusting your search terms or clear the search to see all recipients</div>
                </div>
            </div>
        </div>
    </div>
    <script src="../assets/js/list-of-Recipients-2022-23.js"></script>
<?php include '../footer.php' ?>
</body>
</html>