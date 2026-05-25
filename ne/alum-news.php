<?php include'../header.php' ?>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alumni News</title>
    <!-- <link rel="stylesheet" href="alum-news.css"> -->
</head>
<body>
    <header class="header">
            <div class="header-content">
                <h1 class="main-title">Alumni News</h1>
                <div class="title-underline"></div>
            </div>
        </header>
    <div class="container">
        <div class="main-wrapper">
            <div class="content-container">
                <!-- Sidebar -->
                <aside class="sidebar">
                    <!-- Search Card -->
                    <div class="search-card card">
                        <div class="card-content">
                            <h3 class="card-title">Search Alumni</h3>
                            <div class="search-container">
                                <input type="text" id="searchInput" placeholder="Start typing to search..." class="search-input"/>
                                <button id="clearBtn" class="clear-btn" style="display: none;">Clear</button>
                            </div>
                            <p id="searchResults" class="search-results" style="display: none;"></p>
                        </div>
                    </div>

                    <!-- Year Filter Card -->
                    <div class="year-filter-card card">
                        <div class="card-content">
                            <h3 class="card-title">Filter by Year</h3>
                            <p id="searchNotice" class="search-notice" style="display: none;">
                                Showing results from all years
                            </p>
                            <div id="yearList" class="year-list"></div>
                        </div>
                    </div>
                </aside>

                <!-- Main Content -->
                <main class="main-content">
                    <div id="searchHeader" class="search-header" style="display: none;">
                        <h3 class="search-title"></h3>
                        <p class="search-description"></p>
                    </div>

                    <div id="newsArea" class="news-area">
                        <div id="noResults" class="no-results" style="display: none;">
                            <h3 class="no-results-title">No Results Found</h3>
                            <p class="no-results-text">Try adjusting your search criteria</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>

    </div>

    <script src="\DORA\Internship\assets\JS\a_n.js"></script>
<?php include'../footer.php' ?>
