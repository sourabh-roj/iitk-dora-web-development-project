const awards = [
    { id: 1, name: "Ajai Agarwal Memorial Prize", benefactor: "Mr. R.C. Agarwal", recipient: "Ayush Shakya", deptProgram: "BT/EE" },
    { id: 2, name: "Amit Saxena Memorial Award", benefactor: "Mr. K.B. Saxena", recipient: "Mayank Kyal", deptProgram: "BT/EE" },
    { id: 3, name: "Amit Saxena Memorial Award", benefactor: "Mr. K.B. Saxena", recipient: "Manan Agarwal", deptProgram: "BT/EE" },
    { id: 4, name: "Dr. R. C Srivastava Memorial Scholarship", benefactor: "Himalaya Institute Hospital Trust, Dr. Sheela Srivastava", recipient: "Ritwik Vashistha", deptProgram: "MSc2/STA" },
    { id: 5, name: "Dr. Sangeeta Goel Memorial Award", benefactor: "Mr. Bimal Prakash Agarwal", recipient: "Apoorva Gupta", deptProgram: "BT/CSE" },
    { id: 6, name: "Dr. V. Rajaraman Scholarship", benefactor: "Mr. Prabhu Goel", recipient: "Mohd Talib Siddiqui", deptProgram: "BT/CSE" },
    { id: 7, name: "Dr. V. Rajaraman Scholarship", benefactor: "Mr. Prabhu Goel", recipient: "Farzan Adil Byramji", deptProgram: "BT/CSE" },
    { id: 8, name: "O.P. Bajaj Memorial Award", benefactor: "Mrs. Saroj Bajaj", recipient: "Akshan Agrawal", deptProgram: "BT/ME" },
    { id: 9, name: "Swatika Dwivedi 'Gargi Award', Kritika Dwivedi 'Maitreyi Award', Annamika Dwivedi 'Lilavati Award'", benefactor: "Mr. Kamlesh Dwivedi", recipient: "Sakshi, Aayushi Chauhan, Nidhi Hegde", deptProgram: "BT/CSE, BT/MSE, BT/CSE" },
    { id: 10, name: "N. Balakrishnan Award in Statistics", benefactor: "Dr. N. Balakrishnan", recipient: "Arkonil Dhar", deptProgram: "MSC2/STAT" },
    { id: 11, name: "J.N. Kapur Prize", benefactor: "Mathematical Sciences Trust Society, New Delhi", recipient: "Kunwar Preet Singh, Chirag Singhal", deptProgram: "(BT/CSE), (MSc2/MTH)" },
    { id: 12, name: "P. K. Subbulakshmi Memorial Award", benefactor: "Prof. K.A. Padamanabhan", recipient: "Jhilik Sen, Ayantika Saha", deptProgram: "MT/MSE, MSc2/PHY" },
    { id: 13, name: "Lalit Narain Das Memorial Scholarship", benefactor: "Lt. Gen. B.N. Das", recipient: "Atin Vikram Singh", deptProgram: "BT/EE" },
    { id: 14, name: "Sridhar Memorial Prize", benefactor: "Mr. G.C. Srivastava", recipient: "Manan Agarwal", deptProgram: "BT/EE" }
];

// Debounce function to limit search frequency
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

// Render table with awards data
function renderTable(data) {
  const tbody = document.querySelector("#recipientTable tbody");
  if (!tbody) {
    console.error('Table body with ID "recipientTable" not found.');
    return;
  }
  tbody.innerHTML = "";
  data.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td class="sno">${item.id}</td>
        <td><div class="awardName">${item.name}</div></td>
        <td><div class="benefactor">${item.benefactor}</div></td>
        <td><div class="recipient">${item.recipient}</div></td>
        <td><span class="deptProgram">${item.deptProgram}</span></td>
    `;
    tbody.appendChild(row);
  });

  // Update results count and no results message
  const resultsCount = document.getElementById("resultsCount");
  const noResults = document.getElementById("noResults");
  if (resultsCount && noResults) {
    resultsCount.textContent = `${data.length} award${data.length !== 1 ? 's' : ''} found`;
    noResults.style.display = data.length === 0 ? 'block' : 'none';
  }
}

// Search function
function searchAwards() {
  const searchInput = document.getElementById("searchInput");
  if (!searchInput) {
    console.error('Search input element with ID "searchInput" not found.');
    return;
  }
  const searchTerm = searchInput.value.toLowerCase();
  const filteredData = awards.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm) ||
      item.benefactor.toLowerCase().includes(searchTerm) ||
      item.recipient.toLowerCase().includes(searchTerm) ||
      item.deptProgram.toLowerCase().includes(searchTerm)
  );
  renderTable(filteredData);
}

// Initialize table and search
document.addEventListener("DOMContentLoaded", () => {
  renderTable(awards); // Render full table initially
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", debounce(searchAwards, 500));
  } else {
    console.error('Search input element with ID "searchInput" not found.');
  }
});