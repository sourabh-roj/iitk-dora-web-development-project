<?php include '../header.php' ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Details of Ongoing Scholarships at IIT Kanpur, provided by the Dean of Resources and Alumni (DoRA).">
    <title>Ongoing Scholarships | IIT Kanpur</title>
    <link rel="stylesheet" href="scholarship-criteria.css">
</head>
<body>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h2 class="card-title">Details of Ongoing Scholarships</h2>
            </div>
            <div class="card-content">
                <!-- Search Bar -->
                <div class="search-container">
                    <svg class="search-icon" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M10.5 3a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm-9 7.5a9 9 0 1118 0 9 9 0 01-18 0zm15.293 5.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414-1.414l4-4z" clip-rule="evenodd" />
                    </svg>
                    <input type="text" id="searchInput" class="search-input" placeholder="Search scholarships, donors, batch, or criteria...">
                </div>

                <!-- Results Count -->
                <div class="results-count" id="resultsCount"></div>

                <!-- Table -->
                <div class="table-container">
                    <table id="scholarshipTable">
                        <thead>
                            <tr>
                                <th class="sno">S.No</th>
                                <th>Scholarship Name</th>
                                <th>Donor</th>
                                <th>Batch</th>
                                <th class="criteria">Criteria</th>
                            </tr>
                        </thead>
                        <tbody id="scholarshipBody"></tbody>
                    </table>
                </div>

                <!-- No Results Message -->
                <div class="no-results" id="noResults" style="display: none;">
                    <div class="no-results-title">No scholarships found</div>
                    <div class="no-results-text">Try adjusting your search terms or clear the search to see all scholarships</div>
                </div>
            </div>
        </div>
    </div>
    <script src="../assets/js/scholarship-criteria.js"></script>
<?php include '../footer.php' ?>