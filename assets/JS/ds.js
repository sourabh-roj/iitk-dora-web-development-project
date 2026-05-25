const awards = [
    { id: 1, name: "Dr. Rajeev Ranjan", year: 2024, batch: "BT/EE/1990", position: "Custom CPU Principal Hardware Engineer, Qualcomm Technologies", image: "https://iitk.ac.in/dora/imag/profile/rajeev-ranjan-4.jpeg", profileUrl: "https://iitk.ac.in/dora/profile/Dr-Rajeev-Ranjan" },
    { id: 2, name: "Shri Anurag Goel", year: 2024, batch: "BT/ME/1971", position: "Corporate Consultant for Innovation & Growth", image: "https://iitk.ac.in/dora/imag/profile/anuraj-daa-24.jpeg", profileUrl: "https://iitk.ac.in/dora/profile/mr-anurag-goel" },
    { id: 3, name: "Mr. Jai Shankar Sharma", year: 2023, batch: "BT/MME/1977", position: "Mentor, Bangalore Chapter, IIT Kanpur Alumni Association and Medical Research Centre, Mumbai, India", image: "https://dora.iitk.ac.in/static/daa/jai-sharma.jpeg", profileUrl: "https://iitk.ac.in/dora/profile/mr-jai-shankar-sharma" },
    { id: 4, name: "Mr. Gautam Khanna", year: 2023, batch: "BT/ME/1988", position: "CEO, P D Hinduja Hospital & MRC", image: "https://dora.iitk.ac.in/static/daa/gautam-2022.jpg", profileUrl: "https://iitk.ac.in/dora/profile/gautam-khanna" },
    { id: 5, name: "Mr. Srikant Sastri", year: 2022, batch: "BT/CHE/1983", position: "President, TiE Delhi/NCR", image: "https://iitk.ac.in/dora/imag/profile/srikant.jpg", profileUrl: "https://iitk.ac.in/dora/profile/mr-srikant-sastri" },
    { id: 6, name: "Mr. Rajiv Swarup", year: 2022, batch: "BT/EE/1973", position: "Founding President (Retd.), Shiv Nadar University", image: "https://iitk.ac.in/dora/imag/profile/rajeev-swarup.jpg", profileUrl: "https://iitk.ac.in/dora/profile/mr-rajiv-swarup" },
    { id: 7, name: "Mr. Pradeep Bhargava", year: 2021, batch: "BT/ME/1989", position: "COO & Co-founder, GladMinds", image: "https://iitk.ac.in/dora/imag/profile/Pradeep-daa.jpg", profileUrl: "https://iitk.ac.in/dora/profile/mr-pradeep-bhargava" },
    { id: 8, name: "Mr. Kushal Sacheti", year: 2021, batch: "MT/CHE/1972", position: "Founder & Chairman, Center for Curiosity", image: "https://www.iitk.ac.in/dora/imag/dsa/2021/Kushal.jpg", profileUrl: "https://www.iitk.ac.in/dora/mr-kushal-sacheti" },
    { id: 9, name: "Prof. Rajendra Bordia", year: 2020, batch: "BT/ME/1979", position: "Professor and Chair at Materials Science and Engineering, Clemson University, Clemson, SC", image: "https://www.iitk.ac.in/dora/imag/dsa/2020/raj-bordia.jpg", profileUrl: "https://www.iitk.ac.in/dora/Rajendra-Bordia.php" },
    { id: 10, name: "Prof. Shivendra Singh Panwar", year: 2020, batch: "BT/EE/1981", position: "Professor and Department Chair, Electrical & Computer Engineering & Director, CATT, NYU Tandon School of Engineering, New York, Brooklyn", image: "https://iitk.ac.in/dora/imag/dsa/2020/shivendra-panwar.jpg", profileUrl: "https://iitk.ac.in/dora/Shivendra-Singh.php" },
    { id: 11, name: "Mr. Rakesh Sharma", year: 2019, batch: "MT/NET/1978", position: "", image: "https://iitk.ac.in/dora/imag/dsa/2019/Rakesh%20Sharma.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Mr-Rakesh-Sharma" },
    { id: 12, name: "Dr. Ram B. Misra", year: 2019, batch: "BT/ME/1968", position: "Professor of Management and Information Systems in the School of Business at Montclair State University, Montclair, NJ, USA", image: "https://iitk.ac.in/dora/imag/profile/b-mishra.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Dr-Ram-B-Misra" },
];

let selectedYear = Math.max(...awards.map(award => award.year)).toString();
let searchTerm = "";

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function updateFilters() {
    try {
        let filtered = awards;
        const searchInput = document.getElementById("search");
        const activeFilterYear = document.getElementById("active-filter-year");
        const activeFilterSearch = document.getElementById("active-filter-search");
        const awardsGrid = document.getElementById("awards-grid");
        const resultCount = document.getElementById("result-count");

        if (searchTerm) {
            filtered = filtered.filter(award =>
                award.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                award.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
                award.batch.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (selectedYear !== "all") {
            filtered = filtered.filter(award => award.year.toString() === selectedYear);
        } else {
            // Sort by year in descending order when showing all
            filtered.sort((a, b) => b.year - a.year);
        }

        awardsGrid.innerHTML = "";
        filtered.forEach(award => {
            const card = document.createElement("div");
            card.className = "award-item";
            card.innerHTML = `
                <div class="profile-card">
                    <img src="${award.image}" alt="Portrait of ${award.name}" loading="lazy">
                    <div class="card-content">
                        <h3>${award.name}</h3>
                        <span class="batch">${award.batch}</span>
                        <span class="award-year">Awarded in ${award.year}</span>
                        <p>${award.position || 'N/A'}</p>
                        ${award.profileUrl ? `<a href="${award.profileUrl}" target="_blank" aria-label="View ${award.name}'s profile">View Profile</a>` : '<div class="button-placeholder"></div>'}
                    </div>
                </div>
            `;
            awardsGrid.appendChild(card);
        });

        activeFilterYear.innerHTML = selectedYear !== "all" ? `Year: ${selectedYear} <span class="remove" data-type="year">×</span>` : "";
        activeFilterSearch.innerHTML = searchTerm ? `Search: "${searchTerm}" <span class="remove" data-type="search">×</span>` : "";

        resultCount.innerHTML = `Showing <strong>${filtered.length}</strong> of <strong>${awards.length}</strong> award recipients`;

        if (filtered.length === 0) {
            awardsGrid.innerHTML = `
                <div class="no-results">
                    <h3>${searchTerm ? "No matching awards found" : "No awards found"}</h3>
                    <p>${searchTerm ? `No results for "${searchTerm}". Try different search terms.` : "Try adjusting your filters."}</p>
                </div>
            `;
        }

        document.querySelectorAll(".remove").forEach(button => {
            button.addEventListener("click", () => {
                if (button.getAttribute("data-type") === "search") {
                    searchTerm = "";
                    searchInput.value = "";
                }
                if (button.getAttribute("data-type") === "year") {
                    selectedYear = "all";
                    document.querySelectorAll('.year').forEach(btn => btn.classList.remove('active'));
                    document.querySelector('.year[data-year="all"]').classList.add('active');
                }
                updateFilters();
            });
        });

        document.querySelector(".clear-all").addEventListener("click", () => {
            searchTerm = "";
            selectedYear = "all";
            searchInput.value = "";
            document.querySelectorAll('.year').forEach(btn => btn.classList.remove('active'));
            document.querySelector('.year[data-year="all"]').classList.add('active');
            updateFilters();
        });
    } catch (error) {
        console.error("Error updating filters:", error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search");

    searchInput.addEventListener("input", debounce(() => {
        searchTerm = searchInput.value;
        updateFilters();
    }, 300));

    document.querySelectorAll('.year').forEach(button => {
        button.addEventListener("click", () => {
            selectedYear = button.getAttribute("data-year");
            document.querySelectorAll('.year').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            updateFilters();
        });
    });

    const latestYear = Math.max(...awards.map(award => award.year)).toString();
    selectedYear = latestYear;
    document.querySelectorAll('.year').forEach(btn => {
        if (btn.getAttribute("data-year") === latestYear) {
            btn.classList.add('active');
        }
    });
    updateFilters();
});