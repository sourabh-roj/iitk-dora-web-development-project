const awards = [
    { id: 1, name: "Mr. Ashok Kamath", year: 2023, batch: "MSc/MATH/1981 (IIT Bombay)", position: "Chairman, Akshara Foundation", image: "https://dora.iitk.ac.in/static/sda/Ashok_kamath.jpg", profileUrl: "https://iitk.ac.in/dora/ashok-kamath.php" },
    { id: 2, name: "Mr. Somay Vinayak Munde, IPS", year: 2023, batch: "BT/CHE/2013 (IIT Bombay)", position: "Superintendent of Police, Latur District, Government of India", image: "https://dora.iitk.ac.in/static/sda/somuya-23.jpg", profileUrl: "https://iitk.ac.in/dora/somay-vinayak-munde.php" },
    { id: 3, name: "Ms. Neha Verma", year: 2022, batch: "BT/CHE/1998", position: "Director, Energy & Environment Management Division, Ministry of Steel, Govt. of India", image: "https://iitk.ac.in/dora/imag/profile/neha.jpg", profileUrl: "https://iitk.ac.in/dora/profile/ms-neha-verma" },
    { id: 4, name: "Mr. Karnal Singh", year: 2021, batch: "MT/CSE/1981", position: "IPS Officer (Retd.), Government of India", image: "https://iitk.ac.in/dora/imag/skda/2021/karnal.jpg", profileUrl: "https://iitk.ac.in/dora/mr-karnal-singh" },
    { id: 5, name: "Mr. Kumar Ravi", year: 2020, batch: "BT/EE/2001", position: "District Magistrate, Patna", image: "https://iitk.ac.in/dora/imag/skda/2020/kumar_Ravi.jpg", profileUrl: "https://iitk.ac.in/dora/Kumar-Ravi.php" },
    { id: 6, name: "Mr. Vikas Vaibhav", year: 2019, batch: "BT/ME/2001", position: "IPS Officer, DIG, Eastern Range Bhagalpur, Bihar", image: "https://iitk.ac.in/dora/imag/skda/2019/Vikas Vaibhav.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Mr-Vikas-Vaibhav" },
    { id: 7, name: "Dr. Raju N. Swamy", year: 2018, batch: "Unknown", position: "Chairman (IAS Officer), Coconut Development Board, Kochi", image: "https://iitk.ac.in/dora/imag/skda/2018/raju.jpg", profileUrl: "https://iitk.ac.in/dora/raju-narayana-swamy.php" },
    { id: 8, name: "Mr. Vikas Kumar", year: 2017, batch: "BT/CE/1997", position: "IAS Officer", image: "https://iitk.ac.in/dora/imag/skda/2017/vikas-kumarbk.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Mr-Vikas-Kumar" },
    { id: 9, name: "Dr. K. M. Abraham", year: 2016, batch: "MT/IME/1989", position: "Addl. Chief Secretary, Kerala Government", image: "https://iitk.ac.in/dora/imag/skda/2016/Abraham.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Dr-K-M-Abraham" },
    { id: 10, name: "Mr. Kuldip Narayan", year: 2015, batch: "BT/ME/2000", position: "IAS Officer", image: "https://iitk.ac.in/dora/imag/skda/2015/kuldip.jpg", profileUrl: "https://iitk.ac.in/dora/profile/kuldip-narayan" },
    { id: 11, name: "Prof. Trilochan Sastry", year: 2013, batch: "Unknown", position: "Professor, IIM Bangalore", image: "https://iitk.ac.in/dora/imag/skda/2013/trilochan-sastry.jpg", profileUrl: "" },
    { id: 12, name: "Mr. Rahul Sharma", year: 2012, batch: "BT/EE/1987", position: "Lawyer and Ex-IPS Officer", image: "https://iitk.ac.in/dora/imag/skda/2012/rahul.jpg", profileUrl: "https://iitk.ac.in/dora/profile/rahul_sharma" },
    { id: 13, name: "Mr. Sanjeeb K. Patjoshi", year: 2011, batch: "MT/EE/1988", position: "MD, KMF and IPS Officer", image: "https://iitk.ac.in/dora/imag/skda/2011/Sanjeeb-Kumar-Patjoshi.jpg", profileUrl: "" },
    { id: 14, name: "Mr. Shailesh R. Gandhi", year: 2010, batch: "Unknown", position: "RTI Activist", image: "https://iitk.ac.in/dora/imag/skda/2010/shalesh-profile.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Mr-Shailesh-R-Gandhi" },
    { id: 15, name: "Mr. Vijay Saluja", year: 2009, batch: "Unknown", position: "Ex-Chief Engineer, Delhi Municipal Council", image: "https://iitk.ac.in/dora/imag/skda/2009/vijay_saluja.jpg", profileUrl: "" },
    { id: 16, name: "Late Mr. Lalit Kumar Chaudhary", year: 2009, batch: "BT/ME/1986", position: "Former Director, Fairfield Atlas Ltd.", image: "https://iitk.ac.in/dora/imag/skda/2009/lalit_kishore_chaudhary.jpg", profileUrl: "" },
    { id: 17, name: "Mr. Anubrotto Kumar Roy", year: 2008, batch: "Unknown", position: "Director, Hazards Centre", image: "https://iitk.ac.in/dora/imag/skda/2008/Anubrotto-Kumar-Roy.jpg", profileUrl: "" },
    { id: 18, name: "Prof. Ganesh P. Bagaria", year: 2006, batch: "BT/MT/EE/1982/1985", position: "Professor", image: "https://iitk.ac.in/dora/imag/skda/2006/Ganesh-P-Bagaria.jpg", profileUrl: "" },
    { id: 19, name: "Mr. Arvind Kejriwal", year: 2005, batch: "Unknown", position: "CM, Delhi and Ex-IRS Officer", image: "https://iitk.ac.in/dora/imag/skda/2005/arvind.jpg", profileUrl: "" },
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
                    <img src="${award.image}" alt="Portrait of ${award.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/300?text=No+Image'">
                    <div class="card-content">
                        <h3>${award.name}</h3>
                        ${award.batch !== "Unknown" ? `<span class="batch">${award.batch}</span>` : ""}
                        <span class="award-year">Awarded in ${award.year}</span>
                        <p>${award.position || "N/A"}</p>
                        ${award.profileUrl ? `<a href="${award.profileUrl}" target="_blank" aria-label="View ${award.name}'s profile">View Profile</a>` : '<div class="button-placeholder"></div>'}
                    </div>
                </div>
            `;
            awardsGrid.appendChild(card);
        });

        activeFilterYear.innerHTML = selectedYear !== "all" ? `Year: ${selectedYear} <span class="remove" data-type="year" aria-label="Remove year filter">×</span>` : "";
        activeFilterSearch.innerHTML = searchTerm ? `Search: "${searchTerm}" <span class="remove" data-type="search" aria-label="Remove search filter">×</span>` : "";

        resultCount.innerHTML = `Showing <strong>${filtered.length}</strong> of <strong>${awards.length}</strong> award recipients`;

        if (filtered.length === 0) {
            awardsGrid.innerHTML = `
                <div class="no-results">
                    <h3>${searchTerm ? "No matching awards found" : "No awards found"}</h3>
                    <p>${searchTerm ? `No results for "${searchTerm}". Try different search terms.` : "Try adjusting your filters."}</p>
                </div>
            `;
        }
    } catch (error) {
        console.error("Error updating filters:", error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search");
    const activeFilters = document.querySelector(".active-filters");

    // Attach search input listener
    searchInput.addEventListener("input", debounce(() => {
        searchTerm = searchInput.value;
        updateFilters();
    }, 300));

    // Attach year button listeners
    document.querySelectorAll('.year').forEach(button => {
        button.addEventListener("click", () => {
            const year = button.getAttribute("data-year");
            if (year === "more") {
                document.querySelector('.more-years').classList.toggle('hidden');
            } else {
                selectedYear = year;
                document.querySelectorAll('.year').forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                updateFilters();
            }
        });
    });

    // Attach event listener for remove buttons using event delegation
    activeFilters.addEventListener("click", (event) => {
        if (event.target.classList.contains("remove")) {
            const filterType = event.target.getAttribute("data-type");
            if (filterType === "search") {
                searchTerm = "";
                searchInput.value = "";
            } else if (filterType === "year") {
                selectedYear = "all";
                document.querySelectorAll('.year').forEach(btn => btn.classList.remove('active'));
                document.querySelector('.year[data-year="all"]').classList.add('active');
                document.querySelector('.more-years').classList.add('hidden');
            }
            updateFilters();
        }
    });

    // Attach clear-all button listener
    document.querySelector(".clear-all").addEventListener("click", () => {
        searchTerm = "";
        selectedYear = "all";
        searchInput.value = "";
        document.querySelectorAll('.year').forEach(btn => btn.classList.remove('active'));
        document.querySelector('.year[data-year="all"]').classList.add('active');
        document.querySelector('.more-years').classList.add('hidden');
        updateFilters();
    });

    // Initialize with latest year
    const latestYear = Math.max(...awards.map(award => award.year)).toString();
    selectedYear = latestYear;
    document.querySelectorAll('.year').forEach(btn => {
        if (btn.getAttribute("data-year") === latestYear) {
            btn.classList.add('active');
        }
    });
    updateFilters();
});