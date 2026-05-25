const awards = [
    { id: 1, name: "Prof. Debadatta Mishra", year: 2025, yearRange: "2020-2025", profile: "https://www.cse.iitk.ac.in/users/deba/", image: "https://www.cse.iitk.ac.in/users/deba/deba.jpg" },
    { id: 2, name: "Prof. Surender Baswana", year: 2024, yearRange: "2020-2025", profile: "https://iitk.ac.in/new/dr-surender-baswana", image: "https://iitk.ac.in/dora/imag/cseawards/Surendra_Baswana.png" },
    { id: 3, name: "Prof. Mainak Chaudhuri", year: 2023, yearRange: "2020-2025", profile: "https://iitk.ac.in/new/dr-mainak-chaudhuri", image: "https://iitk.ac.in/dora/imag/cseawards/Mainak_Chaudhuri.jpg" },
    { id: 4, name: "Prof. Piyush Rai", year: 2022, yearRange: "2020-2025", profile: "https://www.iitk.ac.in/new/piyush-rai", image: "https://iitk.ac.in/dora/imag/cseawards/Piyush_Rai.png" },
    { id: 5, name: "Prof. Mainak Chaudhuri", year: 2021, yearRange: "2020-2025", profile: "https://iitk.ac.in/new/dr-mainak-chaudhuri", image: "https://iitk.ac.in/dora/imag/cseawards/Mainak_Chaudhuri.jpg" },
    { id: 6, name: "Late Prof. Pramod Subramanyan", year: 2020, yearRange: "2020-2025", profile: "https://www.iitk.ac.in/new/prof-pramod-subramanyan", image: "https://iitk.ac.in/dora/imag/cseawards/Pramod_Subramanyan.png" },
    { id: 7, name: "Prof. Mainak Chaudhuri", year: 2019, yearRange: "2015-2019", profile: "https://iitk.ac.in/new/dr-mainak-chaudhuri", image: "https://iitk.ac.in/dora/imag/cseawards/Mainak_Chaudhuri.jpg" },
    { id: 8, name: "Prof. Surender Baswana", year: 2018, yearRange: "2015-2019", profile: "https://iitk.ac.in/new/dr-surender-baswana", image: "https://iitk.ac.in/dora/imag/cseawards/Surendra_Baswana.png" },
    { id: 9, name: "Prof. Surender Baswana", year: 2017, yearRange: "2015-2019", profile: "https://iitk.ac.in/new/dr-surender-baswana", image: "https://iitk.ac.in/dora/imag/cseawards/Surendra_Baswana.png" },
    { id: 10, name: "Prof. Sumit Ganguly", year: 2016, yearRange: "2015-2019", profile: "https://www.iitk.ac.in/new/dr-sumit-ganguly", image: "https://iitk.ac.in/dora/imag/cseawards/Sumit_Ganguly.png" },
    { id: 11, name: "Prof. Surender Baswana", year: 2015, yearRange: "2015-2019", profile: "https://iitk.ac.in/new/dr-surender-baswana", image: "https://iitk.ac.in/dora/imag/cseawards/Surendra_Baswana.png" },
    { id: 12, name: "Prof. Satyadev Nandakumar", year: 2014, yearRange: "2010-2014", profile: "https://iitk.ac.in/new/dr-satyadev-nandakumar", image: "https://iitk.ac.in/dora/imag/cseawards/Satyadev_Nandakumar.png" },
    { id: 13, name: "Prof. Surender Baswana", year: 2013, yearRange: "2010-2014", profile: "https://iitk.ac.in/new/dr-surender-baswana", image: "https://iitk.ac.in/dora/imag/cseawards/Surendra_Baswana.png" },
    { id: 14, name: "Prof. Surender Baswana", year: 2012, yearRange: "2010-2014", profile: "https://iitk.ac.in/new/dr-surender-baswana", image: "https://iitk.ac.in/dora/imag/cseawards/Surendra_Baswana.png" },
    { id: 15, name: "Prof. Surender Baswana", year: 2011, yearRange: "2010-2014", profile: "https://iitk.ac.in/new/dr-surender-baswana", image: "https://iitk.ac.in/dora/imag/cseawards/Surendra_Baswana.png" },
    { id: 16, name: "Prof. Surender Baswana", year: 2010, yearRange: "2010-2014", profile: "https://iitk.ac.in/new/dr-surender-baswana", image: "https://iitk.ac.in/dora/imag/cseawards/Surendra_Baswana.png" },
    { id: 17, name: "Prof. Surender Baswana", year: 2009, yearRange: "2000-2009", profile: "https://iitk.ac.in/new/dr-surender-baswana", image: "https://iitk.ac.in/dora/imag/cseawards/Surendra_Baswana.png" },
    { id: 18, name: "Prof. Manindra Agrawal", year: 2008, yearRange: "2000-2009", profile: "https://iitk.ac.in/new/manindra-agrawal", image: "https://iitk.ac.in/dora/imag/cseawards/Manindra_Agrawal.png" },
    { id: 19, name: "Prof. Rajat Moona", year: 2007, yearRange: "2000-2009", profile: "https://www.iitk.ac.in/new/dr-rajat-moona", image: "https://iitk.ac.in/dora/imag/cseawards/Rajat_Moona.jpg" },
    { id: 20, name: "Prof. Rajat Moona", year: 2003, yearRange: "2000-2009", profile: "https://www.iitk.ac.in/new/dr-rajat-moona", image: "https://iitk.ac.in/dora/imag/cseawards/Rajat_Moona.jpg" },
    { id: 21, name: "Prof. Deepak Gupta", year: 2003, yearRange: "2000-2009", profile: "https://www.iitk.ac.in/new/dr-deepak-gupta", image: "https://iitk.ac.in/dora/imag/cseawards/images.jpeg" },
    { id: 22, name: "Prof. Manindra Agrawal", year: 2002, yearRange: "2000-2009", profile: "https://iitk.ac.in/new/manindra-agrawal", image: "https://iitk.ac.in/dora/imag/cseawards/Manindra_Agrawal.png" },
    { id: 23, name: "Prof. Harish Karnick", year: 2001, yearRange: "2000-2009", profile: "https://iitk.ac.in/new/dr-harish-karnick", image: "https://iitk.ac.in/dora/imag/cseawards/Harish_Karnick.png" },
    { id: 24, name: "Prof. Sumit Ganguly", year: 2000, yearRange: "2000-2009", profile: "https://www.iitk.ac.in/new/dr-sumit-ganguly", image: "https://iitk.ac.in/dora/imag/cseawards/Sumit_Ganguly.png" },
];

let selectedYearRange = "2020-2025";
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
    let filtered = awards;
    const searchInput = document.getElementById("search");
    const activeFilterYear = document.getElementById("active-filter-year");
    const activeFilterSearch = document.getElementById("active-filter-search");
    const awardsGrid = document.getElementById("awards-grid");
    const resultCount = document.querySelector(".result-count");

    if (searchTerm) {
        filtered = filtered.filter(award =>
            award.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    if (selectedYearRange !== "all") {
        filtered = filtered.filter(award => award.yearRange === selectedYearRange);
    } else {
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
                    <span class="award-year">Award Year - ${award.year}</span>
                    <a href="${award.profile}" target="_blank" aria-label="View ${award.name}'s profile">View Profile</a>
                </div>
            </div>
        `;
        awardsGrid.appendChild(card);
    });

    activeFilterYear.innerHTML = selectedYearRange !== "all" ? `Year Range: ${selectedYearRange} <span class="remove" data-type="year">×</span>` : "";
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
                selectedYearRange = "all";
                document.querySelectorAll('.year').forEach(btn => btn.classList.remove('active'));
                document.querySelector('.year[data-year-range="all"]').classList.add('active');
            }
            updateFilters();
        });
    });

    document.querySelector(".clear-all").addEventListener("click", () => {
        searchTerm = "";
        selectedYearRange = "all";
        searchInput.value = "";
        document.querySelectorAll('.year').forEach(btn => btn.classList.remove('active'));
        document.querySelector('.year[data-year-range="all"]').classList.add('active');
        updateFilters();
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search");
    const readMoreBtn = document.querySelector(".read-more-btn");
    const aboutContent = document.querySelector(".about-content");
    const extraContent = document.querySelector(".extra-content");

    readMoreBtn.addEventListener("click", () => {
        aboutContent.classList.toggle("collapsed");
        if (!aboutContent.classList.contains("collapsed")) {
            extraContent.style.animation = 'fadeInDown 0.5s ease-out forwards';
        }
        readMoreBtn.textContent = aboutContent.classList.contains("collapsed") ? "Read More" : "Read Less";
    });

    searchInput.addEventListener("input", debounce(() => {
        searchTerm = searchInput.value;
        updateFilters();
    }, 300));

    document.querySelectorAll('.year').forEach(button => {
        button.addEventListener("click", () => {
            selectedYearRange = button.getAttribute("data-year-range");
            document.querySelectorAll('.year').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            updateFilters();
        });
    });

    selectedYearRange = "2020-2025";
    document.querySelectorAll('.year').forEach(btn => {
        if (btn.getAttribute("data-year-range") === selectedYearRange) {
            btn.classList.add('active');
        }
    });
    updateFilters();
});