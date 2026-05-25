// News data
const newsData = [
    // 2025
    {
      title: "Prof. Eshan Chattopadhyay is co-awarded the prestigious Gödel Prize",
      date: "June 2025",
      content:
        "Prof. Eshan Chattopadhyay (BT/CSE/2011), Associate Professor at Cornell University, was co-awarded the prestigious Gödel Prize for the year 2025 alongside his Ph.D. advisor, Prof. David Zuckerman, University of Texas at Austin. Their award-winning paper, “Explicit Two-Source Extractors and Resilient Functions,” marks a significant breakthrough in pseudo-randomness and explicit constructions, with far-reaching applications in complexity theory and cryptography.",
      image: "https://iitk.ac.in/dora/imag/profile/Chattopadhayay.jpg",
    },
    {
      title: "Ms. Bhawna Garg is appointed as Principal Secretary, Jails, Government of Punjab",
      date: "June 2025",
      content:
        "Ms. Bhawna Garg (BT/CHE/1998), IAS, was appointed as Principal Secretary, Jails, Government of Punjab. She will oversee 26 prisons housing over 37,000 inmates. Her focus will be on leveraging modern technologies, including AI-driven surveillance, to enhance prison management and transform correctional facilities into secure and rehabilitative spaces. Ms. Garg brings extensive administrative experience from her previous roles as Additional Secretary, Government of India, and Deputy Director General, UIDAI, Ministry of Electronics and Information Technology.",
      image: "https://iitk.ac.in/dora/imag/news/bhawana-garg-25.png",
    },
    {
      title: "Prof. Prakash Panangaden gets elected Fellow of the Royal Society, UK",
      date: "June 2025",
      content:
        "Prof. Prakash Panangaden (MSc5/PHY/1975), Professor Emeritus at McGill University and an esteemed alumnus of IIT Kanpur was elected as a Fellow of the Royal Society, UK; one of the most prestigious recognitions in the world of science for his pioneering work spanning machine learning theory, quantum information, probabilistic models, and reinforcement learning.",
      image: "https://iitk.ac.in/dora/imag/news/a-padma-shree.png",
    },
    {
      title: "Prof. Ashutosh Sharma gets conferred with Padma Shri",
      date: "June 2025",
      content:
        "Prof. Ashutosh Sharma was conferred with the Padma Shri 2025 for his distinguished service in the field of Nanosciences and Nanotechnology. Prof. Sharma, a visionary academician and alumnus of IITK (BT/CHE/1982), is the Institute Chair Professor & Founding Coordinator of DST Thematic Unit of Excellence on Soft Nanofabrication at IIT Kanpur since 2006.",
      image: "https://iitk.ac.in/dora/imag/news/a-padma-shree.png",
    },
    {
      title: "Prof. Abhay Karandikar’s Term Extends for one year as DST Secretary",
      date: "May 2025",
      content: "Our esteemed alumnus Prof. Abhay Karandikar, former Director of IIT Kanpur and Secretary at Department of Science and Technology, received a one-year extension as Secretary of the Department of Science and Technology (DST), Government of India. Under his leadership, the DST has achieved several key milestones, including the operationalisation of the Anusandhan National Research Foundation (ANRF), launch of the National Quantum Mission (NQM), upgradation of four Technology Innovation Hubs to Technology Translation Research Parks, and the strengthening of the RDI Fund and National Geospatial Mission.",
      image: "https://iitk.ac.in/dora/imag/news/abhay-2025.jpg",
    },
    {
      title: "Prof. Navrose receives Young Researcher Award",
      date: "May 2025",
      content: "Prof. Navrose Associate Professor Department of Aerospace Engineering IIT Kanpur has been honoured with the Young Researcher – R&D in HPC Applications award at the 8th edition of the Dr. APJ Abdul Kalam High Performance Computing (HPC) Awards 2025. His outstanding contributions to the field of high-performance computing reflect the institute’s legacy of academic and research excellence.",
      image: "https://iitk.ac.in/dora/imag/news/navrose-young-reserach-2025%20.png",
    },
    {
      title: "Dr. Pawan Goenka receives Padma Shri",
      date: "May 2025",
      content:
        "IITK Distinguished Alumnus Dr. Pawan Goenka (BT/ME/1975) Chairman, Indian National Space Promotion and Authorization centre (IN-SPACe) received the prestigious Padma Shri 2025. His professional experience includes working at General Motors R&D Centre, Detroit, U.S.A., for 14 years and at Mahindra & Mahindra Ltd. for 28 years. At Mahindra he led the development of the Scorpio SUV and built a strong R&D infrastructure and a robust product portfolio. He retired from M&M as MD & CEO on April 1, 2021. His remarkable achievements in the Space and Automotive industries have been honored with the prestigious Padma Shri Award.",
      image: "https://iitk.ac.in/dora/imag/news/pawan-goenka-2025.jpg",
    },
    {
      title: "Dr. Anil K Rajvanshi is honored with the Visionary Leadership Best Practices Recognition",
      date: "May 2025",
      content:
        "Dr. Anil K Rajvanshi, Ph.D., a distinguished alumnus was honored with the Visionary Leadership Best Practices Recognition 2025 by the Frost & Sullivan Institute. Dr. Rajvanshi’s pioneering work in sustainable energy and rural development exemplifies the power of innovation in addressing critical global challenges. His efforts toward renewable energy adoption and environmental sustainability, especially in rural communities, reflect the true spirit of impactful leadership.",
      image: "https://iitk.ac.in/dora/imag/news/anil-2025.jpg",
    },
    {
      title: "Mr. K. Ramakrishna Rao takes charge as Chief Secretary of Telangana",
      date: "April 2025",
      content:
        "Mr. K. Ramakrishna Rao (BT/CHE/1987), 1991 batch IAS, took charge as the Chief Secretary of Telangana. He has served as Special Chief Secretary of Finance - where he skillfully prepared 14 state budgets, including two vote-on-account budgets. Mr. Rao brings unparalleled expertise and dedication to his new role. He will also continue to hold full additional charge as Special Chief Secretary of Finance, ensuring continuity in fiscal leadership.",
      image: "https://iitk.ac.in/dora/imag/news/krinshna-rao.png",
    },
    {
      title: "Mr. Devendra Kumar gets appointed as the CIO of Michael Baker International",
      date: "May 2025",
      content:
        "Mr. Devendra Kumar (BT/CSE/1997) was appointed as the Chief Information Officer (CIO) of Michael Baker International. In this strategic leadership role, Mr. Kumar will oversee the company’s IT vision, drive digital transformation, and lead the adoption of cutting-edge technologies - including generative AI - to support business growth. His mandate also includes strengthening data security and compliance across the organization.",
      image: "https://iitk.ac.in/dora/imag/news/devendar-2025.png",
    },
    // 2024
    {
      title: "Ms. Abhilasha Tripathi Gets Honored with the 2024 FAI Award",
      date: "December 2024",
      content: "Ms. Abhilasha Tripathi (PhD/CE/2023), from the Environmental Engineering (Department of Civil Engineering), was honored with the 2024 FAI Award for Outstanding Doctoral Research in Fertilizer Usage.",
      image: "https://iitk.ac.in/dora/imag/news/abhilasha-24-1.jpg",
    },
    {
      title: "Dr. Ajay Kumar gets appointed as Director on Board, Sify Technologies",
      date: "June 2024",
      content: "Dr, Ajay Kumer (BT/EE/1984) has been appointed as the Director on Board of Sify Technologies. An Indian Administrative Service officer of the 1985 batch, Dr. Kumar last served as the Defense Secretary for the Government of India and has deep expertise in the technology and #policy domains.",
      image: "https://iitk.ac.in/dora/imag/news/ajay-24-1.jpg",
    },
    {
      title: "Mr. Rahul Garg Establishes DRG All-Rounder Award",
      date: "June 2024",
      content: "Mr. Rahul Garg (BT/EE/2001) established the DRG All-Rounder Award for B.Tech. students at the institute in memory of his late grandfather, Shri Deshraj Garg. The award will be given at the convocation ceremony along with cash reward and certificate starting in the year 2025 to a final year B.Tech. student from the Department of Electrical Engineering. Mr. Garg is the Founder & CEO of Moglix which is the largest B2B ecommerce unicorn of India and has global presence and has been listed in Fortune 40 Under 40 and Forbes Tycoons of Tomorrow.",
      image: "https://iitk.ac.in/dora/imag/news/rahul-garg-24.jpg",
    },
    {
      title: "Dr. Sharat Sinha gets appointed CEO of Airtel Business",
      date: "2024",
      content: "Dr. Sharat Sinha was appointed as the CEO of Airtel Business. A seasoned technology professional, Dr. Sinha has previously worked with Palo Alto Networks, Cisco, and VM Ware in various leadership roles.",
      image: "https://iitk.ac.in/dora/imag/news/sharat-sinha-24.jpg",
    },
    {
      title: "Prof. Raj Singh Gets Selected AAAS Fellow",
      date: "May 2024",
      content: "Prof. Raj Singh (BT/MME/1967) was elected as the American Association for the Advancement of Science (AAAS) Fellow. He has been honored for pioneering and game-changing scientific and technological contributions.",
      image: "https://iitk.ac.in/dora/imag/news/raj-news-24.png",
    },
    {
      title: "Mr. Sanjiv Puri gets appointed as the President of CII",
      date: "May 2024",
      content: "Mr. Sanjiv Puri (BT/ME/1985) was appointed as the President of the Confederation of Indian Industry (CII) for 2024-25. He is the Chairman & MD, heads ITC Ltd, a conglomerate with businesses in FMCG, hotels, paperboards & packaging, agribusiness, and IT.",
      image: "https://iitk.ac.in/dora/imag/news/sanjiv-puri.jpg",
    },
    {
      title: "Mr. Prakhar Bansal Establishes Prof. J.L. Bansal Best PhD Thesis Award",
      date: "April 2024",
      content: "Mr. Prakhar Bansal (BT/CHE/1994) and Mrs. Nidhi Bansal established Prof. J.L. Bansal Best PhD Thesis Award in Mathematics & Statistics at the Indian Institute of Technology, Kanpur. This award honors the exemplary contributions of Mr. Bansal's father, Prof. J.L. Bansal, to the field of mathematics and his distinguished career in academia.",
      image: "https://iitk.ac.in/dora/imag/news/prakhar-24.png",
    },
    {
      title: "IITK Alumnus Tops UPSC 2023",
      date: "April 2024",
      content: "IITK alumnus, Aditya Srivastava (BT/MT/EE/2018/2019) topped UPSC 2023 with AIR #1. He graduated in Electrical, Electronics and Communication Engineering from the institute in 2018 and M.Tech in 2019 respectively.",
      image: "https://iitk.ac.in/dora/imag/news/aditya-1.png",
    },
    {
      title: "Mr. Sandeep Kishore Jain gets appointed as the President of FISME",
      date: "April 2024",
      content: "Mr. Sandeep Kishore Jain (BT/ME/1988) was appointed as the President of the Federation of Indian Micro and Small & Medium Enterprises (FISME). Mr. Jain, an alumnus of Indian Institute of Technology, Kanpur, started his career with TVS Electronics & Tata Unisys and later set up SOLO Components Pvt Ltd, based in Gurgaon in 1991.",
      image: "https://iitk.ac.in/dora/imag/news/sandeep-1.png",
    },
    {
      title: "Mr. Ranjit Shahani Passes Away",
      date: "March 2024",
      content: "Mr. Ranjit Shahani, former Managing Director and Vice Chairman at Novartis India Ltd. Mr. Shahani, an alumnus of IITK was a distinguished figure in the realms of industry, commerce, and pharmaceuticals. His influence in India's pharmaceutical and healthcare domains was profound, marked by his leadership across diverse organizations.",
      image: "https://iitk.ac.in/dora/imag/news/ranjit-shaini-1.png",
    },
    
    {
      title: "Prof. Atish Dabholkar wins Distinguished Alumnus Award",
      date: "2023",
      content: "Mr. Ranjit Shahani, former Managing Director and Vice Chairman at Novartis India Ltd. Mr. Shahani, an alumnus of IITK was a distinguished figure in the realms of industry, commerce, and pharmaceuticals. His influence in India's pharmaceutical and healthcare domains was profound, marked by his leadership across diverse organizations.",
      image: "https://iitk.ac.in/dora/imag/news/ranjit-shaini-1.png",
    },
    //2023
    {
      title: "Mr. Srikant Sastri gets appointed as the Chairperson of the Geospatial Data Promotion & Development Committee",
      date: "December 2023",
      content:
        "Mr. Srikant Sastri, an alumnus of IITK got appointed as the Chairperson of the Geospatial Data Promotion & Development Committee. He currently serves as the Chairman of IIM Calcutta Innovation Park; Director of Foundation for Innovation.",
      image: "https://iitk.ac.in/dora/imag/institute-news/srikant-sastri-23.jpg",
    },
    {
      title: "Mr. Ashish Karandikar Donated Generously at the Dept. of Electrical Engineering, IIT Kanpur.",
      date: "December 2023",
      content: "Mr. Ashish Karandikar (BT/EE/1995), currently serving as the Vice President of Engineering at NVIDIA, USA, donated generously to his alma mater to establish three endowed programs at the Department of Electrical Engineering. This generous contribution will pave the way for newer avenues of growth for our faculty, researchers, and students of the Electrical Engineering Department alike.",
      image: "https://iitk.ac.in/dora/imag/institute-news/ashish-23.jpg",
    },
    {
      title: "Prof. Rajendra Bordia Appointed ACerS President.",
      date: "October 2023",
      content: "Prof. Rajendra Bordia was appointed as the President of the American Ceramic Society,organization that supports leading scientists, engineers, and educators from around the world in the discovery, manufacturing, and use of advanced ceramics and glasses. He will hold the presidency for one year.",
      image: "https://ceramics.org/wp-content/uploads/2024/07/MST23_Annual-Meeting-Raj-Bordia.jpg",
    },
    {
      title: "Prof. Keshav Pingali Receives ACM-IEEE CS Ken Kennedy Award.",
      date: "October 2023",
      content: "Prof. Keshav Pingali received the ACM-IEEE CS Ken Kennedy Award. The Ken Kennedy Award recognizes groundbreaking achievements in parallel and high-performance computing. Prof. Pingali, faculty at Department of Computer Science, University of Texas, Austin, is a W.A.'Tex' Moncrief Chair of Grid and Distributed Computing.",
      image: "https://iitk.ac.in/dora/imag/institute-news/pingali.jpg",
    },
    {
      title: "Mr. Farhan Ahmad appointed CFO at Enovix Corp.",
      date: "June 2023",
      content: "Mr. Farhan Ahmad has been appointed as the Chief Financial Officer at Enovix Corp. He earlier served as the Vice President, Investor Relations and Finance Strategy at Micron. He was responsible for strategic planning and cost competitiveness. He has also worked at Credit Suisse as an Equity Analyst covering semiconductors, capital equipment, and cleantech.",
      image: "https://iitk.ac.in/dora/imag/news/farhan-23.jpg",
    },
    {
      title: "Mr. Pankaj Gupta appointed as MD & CEO of Pramerica Life Insurance",
      date: "March 2023",
      content: "Mr. Pankaj Gupta was appointed as the MD & CEO of Pramerica Life Insurance. He earlier served at HDFC Life, where he was Group Head - Distribution Strategy & Alliances and was part of HDFC Life's top Leadership team. He has also held senior leadership roles at Citigroup, ICICI Bank, and TCS.",
      image: "https://iitk.ac.in/dora/imag/news/Pankaj-1.jpg",
    },
    {
      title: "Dr. Ajay Kumar joins IITK as Distinguished Visiting Faculty",
      date: "March 2023",
      content: "Dr. Ajay Kumar (BT/EE/1984) joined IIT Kanpur as Distinguished Visiting Professor jointly in the Department of Economic Sciences & Department of Industrial Management & Engineering. He is a former Defense Secretary and Distinguished Alumnus of IITK.",
      image: "https://iitk.ac.in/dora/imag/news/ajay-eco.jpg",
    },
    {
      title: "2023 Sloan Research Fellows",
      date: "Feb 2023",
      content: "Dr. Eshan Chattopadhyay (BT/CSE/2011) has been awarded the prestigious Sloan Research Fellowship 2023. He is an Assistant Professor in the Dept. of Computer Sciences at Cornell University. He is a theoretical computer scientist.",
      image: "https://iitk.ac.in/dora/imag/profile/Chattopadhayay.jpg",
    },
    {
      title: "Prof. Deepak Dhar gets award Padma Bhushan 2023",
      date: "January 2023",
      content: "Prof. Deepak Dhar was conferred with the prestigious Padma Bhushan 2023 award by the Govt. of India in the field of Science & Engineering. He is a theoretical physicist and a distinguished professor in the Physics department of IISER Pune.",
      image: "https://iitk.ac.in/dora/imag/profile/deepak.jpg",
    },
  ]

let filteredNews = [...newsData]
let selectedYear = ""
let searchQuery = ""

const extractYear = (dateStr) => {
  const match = dateStr.match(/\b\d{4}\b/)
  return match ? match[0] : "Unknown"
}

const years = [...new Set(newsData.map(item => extractYear(item.date)))].sort((a, b) => Number.parseInt(b) - Number.parseInt(a))

const searchInput = document.getElementById("searchInput")
const clearBtn = document.getElementById("clearBtn")
const searchResults = document.getElementById("searchResults")
const searchNotice = document.getElementById("searchNotice")
const yearList = document.getElementById("yearList")
const searchHeader = document.getElementById("searchHeader")
const newsArea = document.getElementById("newsArea")
const noResults = document.getElementById("noResults")

function init() {
  createYearButtons()
  selectedYear = years[0]
  updateDisplay()
  setupEventListeners()
}

function createYearButtons() {
  yearList.innerHTML = ""
  years.forEach((year) => {
    const button = document.createElement("button")
    button.className = "year-btn"
    button.textContent = year
    button.addEventListener("click", () => handleYearClick(year))
    yearList.appendChild(button)
  })
}

function setupEventListeners() {
  searchInput.addEventListener("input", handleSearch)
  clearBtn.addEventListener("click", clearSearch)
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      searchInput.blur()
    }
  })
}

function handleSearch() {
  searchQuery = searchInput.value.trim()
  if (searchQuery) {
    searchInput.classList.add("active")
    clearBtn.style.display = "block"
    selectedYear = ""
  } else {
    searchInput.classList.remove("active")
    clearBtn.style.display = "none"
    selectedYear = years[0]
  }
  updateDisplay()
}

function clearSearch() {
  searchQuery = ""
  searchInput.value = ""
  searchInput.classList.remove("active")
  clearBtn.style.display = "none"
  selectedYear = years[0]
  updateDisplay()
}

function handleYearClick(year) {
  if (searchQuery) return
  selectedYear = year
  searchQuery = ""
  searchInput.value = ""
  searchInput.classList.remove("active")
  clearBtn.style.display = "none"
  updateDisplay()
}

function updateDisplay() {
  updateSearchResults()
  updateYearButtons()
  updateSearchHeader()
  filterAndDisplayNews()
}

function updateSearchResults() {
  if (searchQuery) {
    const count = filteredNews.length
    searchResults.textContent = `${count} result${count !== 1 ? "s" : ""} found`
    searchResults.style.display = "block"
    searchNotice.style.display = "block"
  } else {
    searchResults.style.display = "none"
    searchNotice.style.display = "none"
  }
}

function updateYearButtons() {
  const buttons = yearList.querySelectorAll(".year-btn")
  buttons.forEach((button) => {
    const year = button.textContent
    const isActive = selectedYear === year && !searchQuery
    const isDisabled = !!searchQuery
    button.classList.toggle("active", isActive)
    button.disabled = isDisabled
  })
}

function updateSearchHeader() {
  if (searchQuery) {
    const count = filteredNews.length
    searchHeader.querySelector(".search-title").textContent = `Search Results for "${searchQuery}"`
    searchHeader.querySelector(".search-description").textContent =
      `Found ${count} result${count !== 1 ? "s" : ""} across all years`
    searchHeader.style.display = "block"
  } else {
    searchHeader.style.display = "none"
  }
}

function filterAndDisplayNews() {
  if (searchQuery) {
    filteredNews = newsData.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.content.toLowerCase().includes(searchQuery.toLowerCase()),
    )
  } else if (selectedYear) {
    filteredNews = newsData.filter((item) => extractYear(item.date) === selectedYear)
  } else {
    filteredNews = [...newsData]
  }

  if (filteredNews.length === 0) {
    showNoResults()
  } else {
    displayNews()
  }
}

function showNoResults() {
  newsArea.innerHTML = ""
  const noResultsDiv = document.createElement("div")
  noResultsDiv.className = "no-results"
  if (searchQuery) {
    noResultsDiv.innerHTML = `
      <h3 class="no-results-title">No results found for "${searchQuery}"</h3>
      <p class="no-results-text">Try different keywords</p>
    `
  } else {
    noResultsDiv.innerHTML = `
      <h3 class="no-results-title">No Results Found</h3>
      <p class="no-results-text">Try adjusting your search criteria</p>
    `
  }
  newsArea.appendChild(noResultsDiv)
}

function displayNews() {
  const groupedNews = {}
  filteredNews.forEach((item) => {
    const year = extractYear(item.date)
    if (!groupedNews[year]) groupedNews[year] = []
    groupedNews[year].push(item)
  })

  const sortedYears = Object.keys(groupedNews).sort((a, b) => Number.parseInt(b) - Number.parseInt(a))
  newsArea.innerHTML = ""

  sortedYears.forEach((year) => {
    const yearSection = document.createElement("div")
    yearSection.className = "year-section"

    const yearHeader = document.createElement("div")
    yearHeader.className = "year-header"
    yearHeader.innerHTML = `
      <h2 class="year-title">${year}</h2>
      <div class="year-line"></div>
    `
    yearSection.appendChild(yearHeader)

    const newsGrid = document.createElement("div")
    newsGrid.className = "news-grid"

    groupedNews[year].forEach((item) => {
      const newsCard = createNewsCard(item)
      newsGrid.appendChild(newsCard)
    })

    yearSection.appendChild(newsGrid)
    newsArea.appendChild(yearSection)
  })
}

function createNewsCard(item) {
  const card = document.createElement("div")
  card.className = "news-card"
  card.innerHTML = `
    <div class="news-card-content">
      <div class="news-image-container">
        <img src="${item.image || "https://via.placeholder.com/128x128"}" 
             alt="Alumni" 
             class="news-image"
             onerror="this.src='https://via.placeholder.com/128x128'">
      </div>
      <div class="news-content">
        <h3 class="news-title">${item.title}</h3>
        <div class="news-date">${item.date}</div>
        <p class="news-description">${item.content}</p>
      </div>
    </div>
  `
  return card
}

document.addEventListener("DOMContentLoaded", init)
