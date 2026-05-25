<?php include '../header.php' ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="List of Academic Excellence Awards for the Academic Year 2021-22 at IIT Kanpur, provided by the Dean of Resources and Alumni (DoRA).">
    <title>Academic Excellence Awards 2021-22 | IIT Kanpur</title>
    <!-- <link rel="stylesheet" href="list-of-Recipients-2022-23.css"> -->
</head>
<body>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h2 class="card-title">Academic Excellence Awards 2021-22</h2>
            </div>
            <div class="card-content">
                <!-- Table -->
                <div class="table-container">
                    <table id="recipientTable">
                        <thead>
                            <tr>
                                <th class="sno">S.No</th>
                                <th class="awardName">Name</th>
                                <th class="benefactor">Benefactor</th>
                                <th class="recipient">Recipient</th>
                                <th class="deptProgram">Dept/Program</th>
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
    <script src="../assets/js/academic-excellence-award-2022.js"></script>
<?php include '../footer.php' ?>
</body>
</html>