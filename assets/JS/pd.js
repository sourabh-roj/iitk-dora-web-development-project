const deans = [
    {
        name: "Prof. Kantesh Balani",
        tenure: "March 2022 - June 2024",
        description: "Prof. Kantesh Balani is Yadupati Singhania Memorial Chair and a full professor in the Department of Materials Science and Engineering at IIT Kanpur.",
        image: "https://home.iitk.ac.in/~kbalani/img/index00.jpg"
    },
    {
        name: "Prof. Jayant Kumar Singh",
        tenure: "July 2019 - March 2022",
        description: "Prof. Jayant Kumar Singh is the HoD in Chemical Engineering department at IIT Kanpur.",
        image: "https://iitk.ac.in/dora/imag/Team/jks.jpg"
    },
    {
        name: "Prof. B. V. Phani",
        tenure: "June 2015 - June 2019",
        description: "Prof. B. V. Phani is a Professor in the Department of Industrial Management & Engineering, IIT Kanpur.",
        image: "https://www.iitk.ac.in/dora/imag/dean/b_v_phani.jpg"
    },
    {
        name: "Prof. Prabhat Munshi",
        tenure: "March 2013 - May 2015",
        description: "Prof. Prabhat Munshi is a Professor in the Department of Mechanical Engineering, IIT Kanpur.",
        image: "assets/imag/dean/prabhat-munshi.jpg"
    },
    {
        name: "Prof. Manindra Agrawal",
        tenure: "January 2011 - January 2013",
        description: "Prof. Manindra Agrawal is a Professor at the Department of Computer Science and Engineering, IIT Kanpur.",
        image: "assets/imag/dean/manindra.jpg"
    },
    {
        name: "Prof. Sanjeev K. Aggarwal",
        tenure: "January 2008 - January 2011",
        description: "Late Prof. Sanjeev K. Aggarwal was one of the highly-reputed professors of computer science at IIT Kanpur.",
        image: "assets/imag/dean/Aggarwal-BITS-Director_opt.jpg"
    },
    {
        name: "Prof. Sudhir K. Jain",
        tenure: "January 2005 - January 2008",
        description: "Prof. Sudhir K. Jain is an expert in earthquake engineering field and an ardent academic administrator.",
        image: "assets/imag/dean/skj.jpg"
    },
    {
        name: "Prof. Prem K. Kalra",
        tenure: "January 2002 - January 2005",
        description: "Prof. Prem Kumar Kalra is currently the President of Dayalbagh Educational Institute.",
        image: "assets/imag/dean/kalra.jpg"
    },
    {
        name: "Prof. Deepak Kunzru",
        tenure: "January 2000 - January 2002",
        description: "Prof. Deepak Kunzru is currently a Professor at the School of Engineering and Applied Science.",
        image: "assets/imag/dean/kunzru.jpg"
    },
    {
        name: "Prof. Sachidananda Tewari",
        tenure: "January 1997 - December 1999",
        description: "Late Prof. Sachidananda Tewari had served in the Institute as a faculty member in Electrical Engineering Department and had held many administrative positions.",
        image: "assets/imag/dean/sachi.jpg"
    },
    {
        name: "Prof. Ashok K. Mittal",
        tenure: "January 1994 - December 1996",
        description: "Prof. Ashok K. Mittal is a Program Director of CPMOM, Indian School of Business. He has published his research extensively.",
        image: "assets/imag/dean/akmittal.jpg"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const deansGrid = document.getElementById("deans-grid");

    deans.forEach((dean, index) => {
        const card = document.createElement("div");
        card.className = "dean-card";
        card.innerHTML = `
            <div class="dean-card-content">
                <div class="image-container">
                    <img src="${dean.image}" alt="${dean.name}" loading="lazy">
                </div>
                <div class="dean-info">
                    <h3>${dean.name}</h3>
                    <div class="tenure">
                        <svg fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fill-rule="evenodd"
                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        ${dean.tenure}
                    </div>
                    <p>${dean.description}</p>
                </div>
            </div>
            <div class="card-border"></div>
        `;
        deansGrid.appendChild(card);
    });
});