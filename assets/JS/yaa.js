const awards = [
    { id: 1, name: "Prof. Aparna Singh", year: 2024, batch: "BT/MME/2007", position: "Associate Professor, IIT Bombay", image: "https://iitk.ac.in/dora/imag/profile/aparna-yaa-24.jpg", profileUrl: "https://iitk.ac.in/dora/profile/prof-aparna-singh" },
    { id: 2, name: "Dr. Abhishek Bhowmick", year: 2024, batch: "BT/CSE/2010", position: "Founder of Samooha", image: "https://iitk.ac.in/dora/imag/profile/abhishek-yaa-24.jpeg", profileUrl: "https://iitk.ac.in/dora/profile/dr-abhishek-bhowmick" },
    { id: 3, name: "Prof. Pulkit Agrawal", year: 2024, batch: "B.Tech/EE/2011", position: "Associate Professor, Department of Electrical Engineering and Computer Science, Massachusetts Institute of Technology, USA", image: "https://iitk.ac.in/dora/imag/profile/pulkit-yaa-24.jpeg", profileUrl: "https://iitk.ac.in/dora/profile/prof-pulkit-agrawal" },
    { id: 4, name: "Prof. Mohit Bansal", year: 2023, batch: "BT/CSE/2008", position: "John R. & Louise S. Parker Associate Professor, Computer Science Department, University of North Carolina at Chapel Hill", image: "https://dora.iitk.ac.in/static/yaa/mohit-bansal.png", profileUrl: "https://iitk.ac.in/dora/profile/dr-mohit-bansal" },
    { id: 5, name: "Dr. Pravesh K Kothari", year: 2023, batch: "BT/EE/2010", position: "Assistant Professor of Computer Science, Carnegie Mellon University", image: "https://dora.iitk.ac.in/static/yaa/pravesh.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Dr-Pravesh-K-Kothari" },
    { id: 6, name: "Prof. Deepak Pathak", year: 2022, batch: "BT/CSE/2014", position: "Senior Research Staff, Google AI, Bengaluru, India", image: "https://iitk.ac.in/dora/imag/profile/deepak-%20pathak.jpg", profileUrl: "https://iitk.ac.in/dora/profile/prof-deepak-pathak" },
    { id: 7, name: "Dr. Mohit Kumar Jolly", year: 2022, batch: "BT/MT/BSBE/2010/2012", position: "Assistant Professor, Center for Biosystems Science and Engineering, IISc Bengaluru, India", image: "https://iitk.ac.in/dora/imag/profile/mohit-jolly.jpg", profileUrl: "https://iitk.ac.in/dora/profile/dr-mohit-kumar-jolly" },
    { id: 8, name: "Dr. Prateek Jain", year: 2021, batch: "BT/CSE/2004", position: "Senior Research Staff, Google AI, Bengaluru, India", image: "https://iitk.ac.in/dora/imag/profile/jain-yaa.jpg", profileUrl: "https://iitk.ac.in/dora/profile/dr-prateek-jain" },
    { id: 9, name: "Mr. Varun Khaitan", year: 2021, batch: "BT/EE/2009", position: "COO & Co-founder, Urban Company", image: "https://www.iitk.ac.in/dora/imag/yaa/2021/Varun.jpg", profileUrl: "https://www.iitk.ac.in/dora/mr-varun-khaitan" },
    { id: 10, name: "Mr. Abhiraj Singh Bhal", year: 2020, batch: "BT/EE/2009", position: "Cofounder and CEO of Urban Company, formerly known as UrbanClap", image: "https://iitk.ac.in/dora/imag/yaa/2020/Abhiraj%20Bhal.jpg", profileUrl: "https://iitk.ac.in/dora/Abhiraj-Singh-Bhal.php" },
    { id: 11, name: "Dr. Barna Saha", year: 2020, batch: "MT/CSE/2006", position: "Assistant Professor, University of California Berkeley, Department of IEOR", image: "https://iitk.ac.in/dora/imag/yaa/2020/barna-saha.jpg", profileUrl: "https://iitk.ac.in/dora/Barna-Saha.php" },
    { id: 12, name: "Mr. Deepak Garg", year: 2019, batch: "BT/ME/2003", position: "Founder of Rivigo", image: "https://iitk.ac.in/dora/imag/profile/Deepak-%20Garg.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Mr-Deepak-Garg" },
    { id: 13, name: "Dr. Manu Prakash", year: 2019, batch: "BT/CSE/2002", position: "Professor of Bioengineering at Stanford University", image: "https://iitk.ac.in/dora/imag/profile/Manu-Latest.jpg", profileUrl: "https://iitk.ac.in/dora/profile/dr-manu-prakash" },
];

let selectedYear = Math.max(...awards.map(award => award.year)).toString();
let searchTerm = "";

document.addEventListener("DOMContentLoaded", () => {
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
                            <p>${award.position}</p>
                            <a href="${award.profileUrl}" target="_blank" aria-label="View ${award.name}'s profile">View Profile</a>
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