<?php
include '../header.php';
?>

<body>
     <?php include '../ssb.php'; ?>
    <div class="header-section">
    <div class="header-container">
        <h3 class="main-title">
            Notable Alumni
            <span class="main-title-underline"></span> </h3>
        <p class="main-description">
            IIT Kanpur's rising global stature is credited to its charismatic alumni whose
            stupendous achievements in myriad fields continue to make us proud.
        </p>
    </div>
</div>

    <div class="sticky-header" id="stickyHeader">
        <div class="sticky-container">
            <div class="sticky-content">
                <nav class="category-nav">
                    <button class="nav-btn active" data-category="all">All</button>
                    <button class="nav-btn" data-category="academic">Academic</button>
                    <button class="nav-btn" data-category="entrepreneurship">Entrepreneurship</button>
                    <button class="nav-btn" data-category="government">Government Services</button>
                    <button class="nav-btn" data-category="industry">Industry</button>
                </nav>

                <div class="search-container">
                    <input
                        type="text"
                        id="searchInput"
                        placeholder="Search alumni by name..."
                        class="search-input"
                    />
                    <button class="search-btn">
                        <svg class="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div class="alumni-section">
        <div class="alumni-container">
            <div class="alumni-grid" id="alumniGrid">
                <div class="alumni-card" data-category="academic" data-name="Prof. Amitabha Chattopadhyay">
                    <img src="images/placeholder_image.jpg" alt="Prof. Amitabha Chattopadhyay" class="alumni-image" onerror="this.onerror=null;this.src='../assets/imag/notable-alumni/A1.jpg';"/>
                    <h3 class="alumni-name">Prof. Amitabha Chattopadhyay</h3>
                    <p class="alumni-batch">(MSC2/CHM/1980)</p>
                </div>
                <div class="alumni-card" data-category="academic" data-name="Prof. Indranil Manna">
                    <img src="images/placeholder_image.jpg" alt="Prof. Indranil Manna" class="alumni-image" onerror="this.onerror=null;this.src='../assets/imag/notable-alumni/manna.jpg';"/>
                    <h3 class="alumni-name">Prof. Indranil Manna</h3>
                    <p class="alumni-batch">(MT/MME/1985)</p>
                </div>
                <div class="alumni-card" data-category="academic" data-name="Prof. Bidyut Baran Chaudhuri">
                    <img src="images/placeholder_image.jpg" alt="Prof. Bidyut Baran Chaudhuri" class="alumni-image" onerror="this.onerror=null;this.src='../assets/imag/notable-alumni/bidyut.jpg';"/>
                    <h3 class="alumni-name">Prof. Bidyut Baran Chaudhuri</h3>
                    <p class="alumni-batch">(PhD/EE/1980)</p>
                </div>
                <div class="alumni-card" data-category="academic" data-name="Prof. T.K. Chakraborty">
                    <img src="images/placeholder_image.jpg" alt="Prof. T.K. Chakraborty" class="alumni-image" onerror="this.onerror=null;this.src='../assets/imag/notable-alumni/tushar.jpg';"/>
                    <h3 class="alumni-name">Prof. T.K. Chakraborty</h3>
                    <p class="alumni-batch">MSC2/PhD/CHM/1979/1984</p>
                </div>
                <div class="alumni-card" data-category="academic" data-name="Prof. Yashwant Gupta">
                    <img src="images/placeholder_image.jpg" alt="Prof. Yashwant Gupta" class="alumni-image" onerror="this.onerror=null;this.src='../assets/imag/notable-alumni/yashwant.jpg';"/>
                    <h3 class="alumni-name">Prof. Yashwant Gupta</h3>
                    <p class="alumni-batch">(BT/EE/1985)</p>
                </div>
                <div class="alumni-card" data-category="academic" data-name="Prof. Jagdish Narayan">
                    <img src="images/placeholder_image.jpg" alt="Prof. Jagdish Narayan" class="alumni-image" onerror="this.onerror=null;this.src='../assets/imag/notable-alumni/jagdish.jpg';"/>
                    <h3 class="alumni-name">Prof. Jagdish Narayan</h3>
                    <p class="alumni-batch">(BT/MME/1969)</p>
                </div>
                <div class="alumni-card" data-category="academic" data-name="Prof. Sudeshna Sinha">
                    <img src="images/placeholder_image.jpg" alt="Prof. Sudeshna Sinha" class="alumni-image" onerror="this.onerror=null;this.src='../assets/imag/notable-alumni/sinha.jpg';"/>
                    <h3 class="alumni-name">Prof. Sudeshna Sinha</h3>
                    <p class="alumni-batch">(MSC5/CHM/1985)</p>
                </div>
                <div class="alumni-card" data-category="academic" data-name="Prof. Sandhya S. Visweswariah">
                    <img src="images/placeholder_image.jpg" alt="Prof. Sandhya S. Visweswariah" class="alumni-image" onerror="this.onerror=null;this.src='../assets/imag/notable-alumni/sandhya.jpg';"/>
                    <h3 class="alumni-name">Prof. Sandhya S. Visweswariah</h3>
                    <p class="alumni-batch">(MSC2/CHM/1980)</p>
                </div>
                <div class="alumni-card" data-category="academic" data-name="Prof. Mahan Mitra">
                    <img src="images/placeholder_image.jpg" alt="Prof. Mahan Mitra" class="alumni-image" onerror="this.onerror=null;this.src='../assets/imag/notable-alumni/A1.jpg';"/>
                    <h3 class="alumni-name">Prof. Mahan Mitra</h3>
                    <p class="alumni-batch">(MSc5/MTH/1992)</p>
                </div>
                <div class="alumni-card" data-category="academic" data-name="Dr. Anil K. Rajvanshi">
                    <img src="images/placeholder_image.jpg" alt="Dr. Anil K. Rajvanshi" class="alumni-image" onerror="this.onerror=null;this.src='../assets/imag/notable-alumni/A1.jpg';"/>
                    <h3 class="alumni-name">Dr. Anil K. Rajvanshi</h3>
                    <p class="alumni-batch">(BT/MT/ME/1972/1974)</p>
                </div>
                <div class="alumni-card" data-category="academic" data-name="Prof. Dinesh Bhardia">
                    <img src="images/placeholder_image.jpg" alt="Prof. Dinesh Bhardia" class="alumni-image" onerror="this.onerror=null;this.src='../assets/imag/notable-alumni/A1.jpg';"/>
                    <h3 class="alumni-name">Prof. Dinesh Bhardia</h3>
                    <p class="alumni-batch">(BT/EE/2010)</p>
                </div>
                <div class="alumni-card" data-category="academic" data-name="Prof. S. Ramasesha">
                    <img src="images/placeholder_image.jpg" alt="Prof. S. Ramasesha" class="alumni-image" onerror="this.onerror=null;this.src='../assets/imag/notable-alumni/A1.jpg';"/>
                    <h3 class="alumni-name">Prof. S. Ramasesha</h3>
                    <p class="alumni-batch">(MSc/PhD/CHM/1970/1977)</p>
                </div>
                <div class="alumni-card" data-category="academic" data-name="Prof. Mriganka Sur">
                    <img src="images/placeholder_image.jpg" alt="Prof. Mriganka Sur" class="alumni-image" onerror="this.onerror=null;this.src='../assets/imag/notable-alumni/A1.jpg';"/>
                    <h3 class="alumni-name">Prof. Mriganka Sur</h3>
                    <p class="alumni-batch">(BT/EE/1974)</p>
                </div>
                <div class="alumni-card" data-category="academic" data-name="Prof. Debarata Goswami">
                    <img src="images/placeholder_image.jpg" alt="Prof. Debarata Goswami" class="alumni-image" onerror="this.onerror=null;this.src='../assets/imag/notable-alumni/A1.jpgg';"/>
                    <h3 class="alumni-name">Prof. Debarata Goswami</h3>
                    <p class="alumni-batch">(MSC2/CHM/1988)</p>
                </div>
                <div class="alumni-card" data-category="academic" data-name="Yogesh Singh Chauhan">
                    <img src="images/placeholder_image.jpg" alt="Yogesh Singh Chauhan" class="alumni-image" onerror="this.onerror=null;this.src='../assets/imag/notable-alumni/A1.jpg';"/>
                    <h3 class="alumni-name">Yogesh Singh Chauhan</h3>
                    <p class="alumni-batch">(MT/EE/2003)</p>
                </div>
                <div class="alumni-card" data-category="academic" data-name="Dr. Nitin Gupta">
                    <img src="images/placeholder_image.jpg" alt="Dr. Nitin Gupta" class="alumni-image" onerror="this.onerror=null;this.src='../assets/imag/notable-alumni/A1.jpg';"/>
                    <h3 class="alumni-name">Dr. Nitin Gupta</h3>
                    <p class="alumni-batch">(BT/CSE/2004)</p>
                </div>
                <div class="alumni-card" data-category="academic" data-name="Dr Jayathi Y Murthy">
                    <img src="images/placeholder_image.jpg" alt="Dr Jayathi Y Murthy" class="alumni-image" onerror="this.onerror=null;this.src='../assets/imag/notable-alumni/sinha.jpg';"/>
                    <h3 class="alumni-name">Dr Jayathi Y Murthy</h3>
                    <p class="alumni-batch">(BT/ME/1979)</p>
                </div>
                <div class="alumni-card" data-category="academic" data-name="Prof. Mukul Mani Sharma">
                    <img src="images/placeholder_image.jpg" alt="Prof. Mukul Mani Sharma" class="alumni-image" onerror="this.onerror=null;this.src='../assets/imag/notable-alumni/sinha.jpg';"/>
                    <h3 class="alumni-name">Prof. Mukul Mani Sharma</h3>
                    <p class="alumni-batch">(BT/CHE/1980)</p>
                </div>
                <div class="alumni-card" data-category="academic" data-name="Prof. Anantha S. Ramakrishna">
                    <img src="images/placeholder_image.jpg" alt="Prof. Anantha S. Ramakrishna" class="alumni-image" onerror="this.onerror=null;this.src='../assets/imag/notable-alumni/tushar.jpg';"/>
                    <h3 class="alumni-name">Prof. Anantha S. Ramakrishna</h3>
                    <p class="alumni-batch">(MSC5/PHY/1995)</p>
                </div>
                <div class="alumni-card" data-category="academic" data-name="Prof. Pradyut Ghosh">
                    <img src="images/placeholder_image.jpg" alt="Prof. Pradyut Ghosh" class="alumni-image" onerror="this.onerror=null;this.src='../assets/imag/notable-alumni/sinha.jpg';"/>
                    <h3 class="alumni-name">Prof. Pradyut Ghosh</h3>
                    <p class="alumni-batch">(PHD/CHM/1998)</p>
                </div>

                <div class="alumni-card" data-category="entrepreneurship" data-name="Mr. Narayan Murthy">
                    <img src="images/mr_prabhat_singh.jpg" alt="Mr. Narayan Murthy" class="alumni-image" onerror="this.onerror=null;this.src='../assets/imag/notable-alumni/E1.jpg';"/>
                    <h3 class="alumni-name">Mr. Narayan Murthy</h3>
                    <p class="alumni-batch">(MT/EE/1969)</p>
                </div>
                <div class="alumni-card" data-category="entrepreneurship" data-name="Mr. Samir Cairae">
                    <img src="images/mr_samir_cairae.jpg" alt="Mr. Samir Cairae" class="alumni-image" onerror="this.onerror=null;this.src='../assets/imag/notable-alumni/tushar.jpg';"/>
                    <h3 class="alumni-name">Mr. Samir Cairae</h3>
                    <p class="alumni-batch">(BT/EE/1988)</p>
                </div>
                <div class="alumni-card" data-category="entrepreneurship" data-name="Dr. Pawan Kumar Goenka">
                    <img src="images/dr_pawan_kumar_goenka.jpg" alt="Dr. Pawan Kumar Goenka" class="alumni-image" onerror="this.onerror=null;this.src='../assets/imag/notable-alumni/tushar.jpg';"/>
                    <h3 class="alumni-name">Dr. Pawan Kumar Goenka</h3>
                    <p class="alumni-batch">(BT/ME/1975)</p>
                </div>
                <div class="alumni-card" data-category="entrepreneurship" data-name="Mr. Amit Agarwal">
                    <img src="images/mr_amit_agarwal.jpg" alt="Mr. Amit Agarwal" class="alumni-image" onerror="this.onerror=null;this.src='../assets/imag/notable-alumni/tushar.jpg';"/>
                    <h3 class="alumni-name">Mr. Amit Agarwal</h3>
                    <p class="alumni-batch">(BT/CSE/1995)</p>
                </div>

                <div class="alumni-card" data-category="government" data-name="Mr. Bhaskar Pramanik">
                    <img src="images/mr_bhaskar_pramanik.jpg" alt="Mr. Bhaskar Pramanik" class="alumni-image" onerror="this.onerror=null;this.src='../assets/imag/notable-alumni/sinha.jpg';"/>
                    <h3 class="alumni-name">Mr. Bhaskar Pramanik</h3>
                    <p class="alumni-batch">(BT/EE/1972)</p>
                </div>
                <div class="alumni-card" data-category="government" data-name="Dr. Mohit Uberoi">
                    <img src="images/dr_mohit_uberoi.jpg" alt="Dr. Mohit Uberoi" class="alumni-image" onerror="this.onerror=null;this.src='../assets/imag/notable-alumni/bidyut.jpg';"/>
                    <h3 class="alumni-name">Dr. Mohit Uberoi</h3>
                    <p class="alumni-batch">(BT/CHE/1986)</p>
                </div>
                <div class="alumni-card" data-category="government" data-name="Mr. Gautam Khanna">
                    <img src="images/mr_gautam_khanna.jpg" alt="Mr. Gautam Khanna" class="alumni-image" onerror="this.onerror=null;this.src='../assets/imag/notable-alumni/sinha.jpg';"/>
                    <h3 class="alumni-name">Mr. Gautam Khanna</h3>
                    <p class="alumni-batch">(BT/ME/1988)</p>
                </div>
                <div class="alumni-card" data-category="government" data-name="Mr. Ravindra Nath Akhoury">
                    <img src="images/mr_ravindra_nath_akhoury.jpg" alt="Mr. Ravindra Nath Akhoury" class="alumni-image" onerror="this.onerror=null;this.src='../assets/imag/notable-alumni/tushar.jpg';"/>
                    <h3 class="alumni-name">Mr. Ravindra Nath Akhoury</h3>
                    <p class="alumni-batch">(BT/EE/1968)</p>
                </div>

                <div class="alumni-card" data-category="industry" data-name="Mr. Deepak Bhagat">
                    <img src="images/mr_deepak_bhagat.jpg" alt="Mr. Deepak Bhagat" class="alumni-image" onerror="this.onerror=null;this.src='../assets/imag/notable-alumni/tushar.jpg';"/>
                    <h3 class="alumni-name">Mr. Deepak Bhagat</h3>
                    <p class="alumni-batch">(BT/EE/1973)</p>
                </div>
                <div class="alumni-card" data-category="industry" data-name="Mr. Amitabh Srivastava">
                    <img src="images/mr_amitabh_srivastava.jpg" alt="Mr. Amitabh Srivastava" class="alumni-image" onerror="this.onerror=null;this.src='../assets/imag/notable-alumni/tushar.jpg';"/>
                    <h3 class="alumni-name">Mr. Amitabh Srivastava</h3>
                    <p class="alumni-batch">(BT/EE/1975)</p>
                </div>
                <div class="alumni-card" data-category="industry" data-name="Mr. Harsh Manglik">
                    <img src="images/mr_harsh_manglik.jpg" alt="Mr. Harsh Manglik" class="alumni-image" onerror="this.onerror=null;this.src='../assets/imag/notable-alumni/tushar.jpg';"/>
                    <h3 class="alumni-name">Mr. Harsh Manglik</h3>
                    <p class="alumni-batch">(BT/ME/1970)</p>
                </div>
                <div class="alumni-card" data-category="industry" data-name="Mr. Som Mittal">
                    <img src="images/mr_som_mittal.jpg" alt="Mr. Som Mittal" class="alumni-image" onerror="this.onerror=null;this.src='../assets/imag/notable-alumni/tushar.jpg';"/>
                    <h3 class="alumni-name">Mr. Som Mittal</h3>
                    <p class="alumni-batch">(BT/ME/1973)</p>
                </div>
            </div>

            <div class="no-results" id="noResults" style="display: none;">
                <div class="no-results-text">
                    No alumni found matching your search criteria.
                </div>
            </div>
        </div>
    </div>
</body>
    <script>
        // DOM elements
        const categoryButtons = document.querySelectorAll('.nav-btn');
        const searchInput = document.getElementById('searchInput');
        const alumniCards = document.querySelectorAll('.alumni-card');
        const noResults = document.getElementById('noResults');

        // State
        let currentCategory = 'all'; // Default to 'all' to show all alumni initially
        let searchTerm = '';

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            filterAndDisplayAlumni();
            setupEventListeners();
        });

        // Set up event listeners
        function setupEventListeners() {
            // Category button listeners
            categoryButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all buttons
                    categoryButtons.forEach(btn => btn.classList.remove('active'));

                    // Add active class to clicked button
                    this.classList.add('active');

                    // Update current category and filter
                    currentCategory = this.dataset.category;
                    filterAndDisplayAlumni();
                });
            });

            // Search input listener
            searchInput.addEventListener('input', function() {
                searchTerm = this.value.toLowerCase();
                filterAndDisplayAlumni();
            });
        }

        // Filter and display alumni cards
        function filterAndDisplayAlumni() {
            let visibleAlumniCount = 0;

            alumniCards.forEach(card => {
                const cardCategory = card.dataset.category;
                const cardName = card.dataset.name.toLowerCase();

                const matchesCategory = (currentCategory === 'all' || cardCategory === currentCategory);
                const matchesSearch = (searchTerm === '' || cardName.includes(searchTerm));

                if (matchesCategory && matchesSearch) {
                    card.style.display = 'block'; // Show the card
                    visibleAlumniCount++;
                } else {
                    card.style.display = 'none'; // Hide the card
                }
            });

            // Show/hide no results message
            if (visibleAlumniCount === 0) {
                noResults.style.display = 'block';
            } else {
                noResults.style.display = 'none';
            }
        }
    </script>

<?php include '../footer.php'; ?>