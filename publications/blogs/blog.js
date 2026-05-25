const blogPosts = [
  {
    id: 1,
    title: "Mr. Anil Bansal",
    author: "(BT/ME/1977)",
    date: "Feb. 12, 2024",
    excerpt:
      "Mr. Anil Bansal, an eminent alumnus, recipient of the Distinguished Alumnus Award 2023 and one of the top benefactors of IITK, is a serial entrepreneur currently serving as The President at First National Realty Management.",
    image: "/dora/internship/assets/imag/blogs_im/anil-bansal-24.jpg",
    category: "alumni-interview",
    link: "/DORA/Internship/publications/blogs/anil-bansal.php",
  },
  {
    id: 2,
    title: "Prof. Deepak Dhar",
    author: "(MSc.2/PHY/1973)",
    date: "May 1, 2023",
    excerpt:
      "Prof. Deepak Dhar, recipient of Padma Bhushan 2023 and IITK Distinguished Alumnus Award 2022, is a highly acclaimed theoretical physicist of India.",
    image: "/dora/internship/assets/imag/blogs_im/alum-interview.jpg",
    category: "alumni-interview",
  },
  {
    id: 3,
    title: "Mr. Sudhakar Kesavan",
    author: "(BT/CHE/1976)",
    date: "Sep 15, 2021",
    excerpt: "In an interview with the DoRA Office, Mr. Sudhakar Kesavan talks about his career growth",
    image: "/dora/internship/assets/imag/blogs_im/alum-interview1.jpg",
    category: "alumni-interview",
  },
  {
    id: 4,
    title: "Mr. Muktesh Pant",
    author: "(BT/CHE/1976)",
    date: "Apr 26, 2021",
    excerpt:
      "Mr. Muktesh Pant, born in the Kumaon hills of Nainital in 1954, is the son of a famous Hindi story and novel writer, Smt. Gaura Pant 'Shivani', and Shri Sukdeo Pant, a government servant.",
    image: "/dora/internship/assets/imag/blogs_im/alum-interview2.jpg",
    category: "alumni-interview",
  },
  {
    id: 5,
    title: "Dr. J. Dash",
    author: "(PHD/CHM/2003)",
    date: "January 21, 2021",
    excerpt:
      "Dr. Jyotirmayee Dash is a professor at the Department of Organic Chemistry at Indian Association for the Cultivation of Science, Jadavpur, Kolkata. She is the recipient of the prestigious Shanti Swarup Bhatnagar Prize 2020",
    image: "/dora/internship/assets/imag/blogs_im/ai.jpg",
    category: "alumni-interview",
  },
  {
    id: 6,
    title: "Mr. Anshul Roy",
    author: "(BT/BSBE/2020)",
    date: "November 20, 2023",
    excerpt:
      "IITK Alumnus and self-taught Visual Artist, Anshul Roy talks about his inspiring journey from science to art, the challenges that came and the efforts he took to overcome those.",
    image: "/dora/internship/assets/imag/blogs_im/anshul-f.png",
    category: "offbeat",
  },
  {
    id: 7,
    title: "Soumyadeep Mukherjee",
    author: "(PHD)",
    date: "October 10, 2022",
    excerpt:
      'Soumyadeep Mukherjee is a PhD student at IITK. His photo, A Year in the Sun, won the Astronomy Photographer of the Year competition in the "Our Sun" category, held by Royal Museums Greenwich. He is the first Indian to win an award in the competition.',
    image: "/dora/internship/assets/imag/blogs_im/of1.jpg",
    category: "offbeat",
  },
  {
    id: 8,
    title: "Mr. Dhruv Mittal",
    author: "(BT/MSE/2020)",
    date: "January 7, 2022",
    excerpt:
      "'I went to the Indian Institute of Technology, Kanpur'.'Oh my God'. I don't understand why you want to give this up and pursue music!, exclaimed the consular officer interviewing me for a F-1 visa at the US Embassy in New Delhi.",
    image: "/dora/internship/assets/imag/blogs_im/of2.jpg",
    category: "offbeat",
  },
  {
    id: 9,
    title: "Mr. Ranjan Kaul",
    author: "(BT/CE/1977)",
    date: "April 16, 2021",
    excerpt:
      "Art for me is about self-expression. At the same time, as a socially conscious artist, I like to depict thehuman condition, with all its banalities, compulsions and predicaments.",
    image: "/dora/internship/assets/imag/blogs_im/of3.jpg",
    category: "offbeat",
  },
  {
    id: 10,
    title: "Dr. Dev Joneja",
    author: "(BT/ME/1984)",
    date: "December, 2021",
    excerpt: "Dr. Dev Joneja on the motivation behind giving back to IITK.",
    image: "/dora/internship/assets/imag/blogs_im/dev.png",
    category: "giving-back",
    link: "/DORA/Internship/publications/blogs/dev-joneja.php",
  },
  {
    id: 11,
    title: "Ms. Martha Carreno",
    author: "",
    date: "November, 2023",
    excerpt: "Ms. Martha Carreno - Inauguration of Ranjit Singh Rozi Shiksha Kendra at IITK",
    image: "/dora/internship/assets/imag/blogs_im/givingback2.jpeg",
    category: "giving-back",
  },
  {
    id: 12,
    title: "Mr. Narayan Murthy",
    author: "(MT/EE/1969)",
    date: "October, 2023",
    excerpt: "Mr. NR Narayana Murthy, IITK alumnus, talks about why giving back is important.",
    image: "/dora/internship/assets/imag/blogs_im/givingback3.jpeg",
    category: "giving-back",
  },
  {
    id: 13,
    title: "Prof. Chandralekha Singh and Prof. Jeremy Levy",
    author: "",
    date: "September, 2021",
    excerpt:
      "Prof. Chandralekha Singh and Prof. Jeremy Levy talk about their motivation behind donating toward the construction of the New Opportunity School building at IIT Kanpur.",
    image: "/dora/internship/assets/imag/blogs_im/givingback1.jpg",
    category: "giving-back",
  },
  {
    id: 14,
    title: "Mr. Muktesh Pant",
    author: "(BT/CHE/1976)",
    date: "September, 2021",
    excerpt:
      "Mr. Muktesh Pant talks about the influence of his Mother on his life, setting up a Center in his Mother's name at IITK, and why giving back is important to him.",
    image: "/dora/internship/assets/imag/blogs_im/givingback5.png",
    category: "giving-back",
  },
  {
    id: 15,
    title: "Mr. Ranodeb Roy",
    author: "(BT/CSE/1990)",
    date: "August, 2021",
    excerpt: "Mr. Ranodeb Roy talks about his contributions to IIT Kanpur, and reasons for his generosity.",
    image: "/dora/internship/assets/imag/blogs_im/givingback4.jpeg",
    category: "giving-back",
  },
  {
    id: 16,
    title: "Mental Well-being & Covid-19",
    author: "Ms. Arpita Gupta",
    date: "October 28, 2020",
    excerpt:
      "In mid-March, I was due to finish my Ph.D. thesis and submit it by May-end. Instead, I found myself living in isolation at my home after the campus closed down.",
    image: "/dora/internship/assets/imag/blogs_im/covid&social.jpg",
    category: "mental-wellbeing",
  },
  {
    id: 17,
    title: "In Leisure Time",
    author: "(BT/EE/1985)",
    date: "August 10, 2020",
    excerpt:
      "Dr. Arvind Krishna shares with us his most preferred leisure activity - reading. He talks about his most favorite book and how it has influenced him.",
    image: "/dora/internship/assets/imag/blogs_im/leisure.jpg",
    category: "in-leisure-time",
  },
  {
    id: 18,
    title: "Inspiration",
    author: "Alumni Relations,OutreachCell,IITK",
    date: "August 10, 2020",
    excerpt:
      "This is an interview of Ms. Nisha Mehta, who overcame many obstacles in her life, and went on to achieve academic success, and became an inspiration to many others.",
    image: "/dora/internship/assets/imag/blogs_im/inspiration.jpg",
    category: "inspiration",
  },
  {
    id: 19,
    title: "Student Diary",
    author: "Sandipan Mitra and Neha Gupta(Year 19)",
    date: "September 16, 2020",
    excerpt:
      "It's 7:55 AM already, and I remembered I have a class at 8! Hurriedly, I woke up and switched on my laptop. It didn't take more than a minute to enter the meeting, and with the instructor beginning with",
    image: "/dora/internship/assets/imag/blogs_im/studentdiary.jpg",
    category: "student-diary",
  },
  {
    id: 20,
    title: "Mr. Amitabh Srivasta",
    author: "(BT/EE/1979)",
    date: "September 16, 2020",
    excerpt:
      "Outreach Cell, IIT Kanpur brings you the next edition of the Distinguished Alumni Interview Series. We interview people who have contributed exceptionally to the society after graduating from IIT Kanpur and bring their inspiring life stories to you.",
    image: "/dora/internship/assets/imag/blogs_im/da1.jpg",
    category: "distinguished-alumni",
  },
  {
    id: 21,
    title: "Distinguished Alumni 2",
    author: "Author 21",
    date: "September 3, 2025",
    excerpt:
      "This edition brings you the journey of Dr. Rathin Datta, Co-founder & Chairman at Vertec Biosolvents, Inc.",
    image: "/dora/internship/assets/imag/blogs_im/da2.jpg",
    category: "distinguished-alumni",
  },
  {
    id: 22,
    title: "Distinguished Alumni 3",
    author: "Author 22",
    date: "August 11, 2020",
    excerpt: "Outreach Cell, IIT Kanpur brings you the 3rd edition of the Distinguished Alumni Interview Series.",
    image: "/dora/internship/assets/imag/blogs_im/da3.png",
    category: "distinguished-alumni",
  },
  {
    id: 23,
    title: "Distinguished Alumni 4",
    author: "Author 23",
    date: "August 11, 2020",
    excerpt:
      "Outreach Cell, IIT Kanpur brings you the 2nd edition of the Distinguished Alumni Interview Series. We interview people who have contributed exceptionally to the society after graduating from IIT Kanpur and bring their inspiring life stories to you.",
    image: "/dora/internship/assets/imag/blogs_im/da4.png",
    category: "distinguished-alumni",
  },
  {
    id: 24,
    title: "Distinguished Alumni 5",
    author: "Author 24",
    date: "August 11, 2020",
    excerpt:
      "This edition brings you the journey of Prof. Viney Aneja, Professor and Co-Directors of graduate programs in the department of Marine, Earth and Atmospheric Sciences (MEAS), North Carolina State University, Raleigh, NC, USA go.ncsu.edu/airquality",
    image: "/dora/internship/assets/imag/blogs_im/da5.jpg",
    category: "distinguished-alumni",
  },
  {
    id: 25,
    title: "Distinguished Alumni 6",
    author: "Author 25",
    date: "August 11, 2020",
    excerpt:
      "This edition brings you the story of Mr.Udai Pratap Singh, who received the Distinguished Alumnus Award for Professional Excellence in 2009.",
    image: "/dora/internship/assets/imag/blogs_im/da6.png",
    category: "distinguished-alumni",
  },
  {
    id: 26,
    title: "Travelogue",
    author: "Prof. Sanjit Sengupta",
    date: "September 14, 2021",
    excerpt:
      "Prof. Sanjit Sengupta got his B. Tech. in Aeronautical Engineering from IITK in 1980. He is now a Professor of Marketing at San Francisco State University, USA. In his spare time he likes to write poems, short stories, and plays",
    image: "/dora/internship/assets/imag/blogs_im/travougue.jpg",
    category: "travelogue",
  },
  {
    id: 27,
    title: "Prof. Jayathi Y Murthy",
    author: "(BT/,ME/1979)",
    date: "September 3, 2021",
    excerpt:
      "Prof. Jayathi Y Murthy, a Distinguished Professor at UCLA, talks about the gender gap in IITK during her time, challenges faced by women in STEM, and experience of working in industry and academia.",
    image: "/dora/internship/assets/imag/blogs_im/doh.png",
    category: "destiny-her-own",
  },
  {
    id: 28,
    title: "Dr. Sudeshna Sinha",
    author: "(MSC5/CHM/1985)",
    date: "June 2, 2021",
    excerpt:
      "Dr. Sudeshna Sinha is a professor in the Department of Physics, and also serves as the Deputy Director at the Indian Institute of Science Education and Research (IISER), Mohali, India. She completed her five-year integrated master's in Chemistry at IIT Kanpur in 1985.",
    image: "/dora/internship/assets/imag/blogs_im/doh2.jpg",
    category: "destiny-her-own",
  },
  {
    id: 29,
    title: "Ms. Amrita Chowdhury",
    author: "(BT/MME/1992)",
    date: "May 28, 2025",
    excerpt:
      "Ms. Amrita Chowdhury, Co-founder of Gaia, is a business strategist, engineer, and an author. She talks about her fond memories of IITK, her switch from research to business school, gender gap, and much more.",
    image: "/dora/internship/assets/imag/blogs_im/doh3.png",
    category: "destiny-her-own",
  },
  {
    id: 30,
    title: "Dr. Sandhya S. Visweswariah",
    author: "(MSC2/CHM/1980)",
    date: "May 17, 2021",
    excerpt:
      "Dr. Visweswariah is a Professor in the Dept. of Molecular Reproduction, Devleopment and Genetics at IISc, Bangalore. She talks about her IITK days, choosing research as a career option, gender gap in STEM, and much more.",
    image: "/dora/internship/assets/imag/blogs_im/doh4.png",
    category: "destiny-her-own",
  },
  {
    id: 31,
    title: "Dr. Jyotirmayee Dash",
    author: "(PHD/CHM/2003)",
    date: "May 26, 2025",
    excerpt:
      "I had a passion for Science from a very young age. When I was in Higher Secondary, I found Chemistry very intriguing as it plays an important role in our daily life. Thus, I opted for Chemistry as my major subject during my BSc.",
    image: "/dora/internship/assets/imag/blogs_im/doh5.png",
    category: "destiny-her-own",
  },
  {
    id: 32,
    title: "Dr. Anil K. Rajvanshi",
    author: "(BT/MT/ME/1972/1974)",
    date: "July 20, 2021",
    excerpt:
      "Dr. Anil K. Rajvanshi reminisces about his seven years in IITK (1967 – 1974). In part -1 of the series, Dr. Rajvanshi gives a very vivid description of his first impressions of the Institute, talks about IBM 1620 in the Computer Centre, and the TV Centre that was run by Dr. M.M. Choudhari.",
    image: "/dora/internship/assets/imag/blogs_im/memories1.jpeg",
    category: "memories",
  },
  {
    id: 33,
    title: "Mr. Abhay Bhushan",
    author: "Batch 1960",
    date: "January 21, 2025",
    excerpt:
      "Mr. Abhay Bhushan, recipient of the IITK Distinguished Alumnus Award 2006, shares his most priceless treasure - photographs from his IITK days.",
    image: "/dora/internship/assets/imag/blogs_im/memories2.png",
    category: "memories",
  },
];

// Function to parse different date formats and return a Date object
function parseDate(dateString) {
  const cleanDate = dateString.trim();
  let parsedDate = new Date(cleanDate);

  if (isNaN(parsedDate)) {
    const monthAbbrevs = {
      Jan: "January",
      Feb: "February",
      Mar: "March",
      Apr: "April",
      May: "May",
      Jun: "June",
      Jul: "July",
      Aug: "August",
      Sep: "September",
      Oct: "October",
      Nov: "November",
      Dec: "December",
    };

    let modifiedDate = cleanDate;
    Object.keys(monthAbbrevs).forEach((abbrev) => {
      modifiedDate = modifiedDate.replace(abbrev + ".", monthAbbrevs[abbrev]);
      modifiedDate = modifiedDate.replace(abbrev, monthAbbrevs[abbrev]);
    });

    parsedDate = new Date(modifiedDate);
  }

  if (isNaN(parsedDate)) {
    const yearMatch = cleanDate.match(/\d{4}/);
    if (yearMatch) {
      parsedDate = new Date(yearMatch[0], 0, 1);
    } else {
      parsedDate = new Date(2020, 0, 1);
    }
  }

  return parsedDate;
}

const recentPost = blogPosts[0];
const blogPostsContainer = document.querySelector(".blog-posts");
const sidebarLinks = document.querySelectorAll(".sidebar-link");
const recentPostContainer = document.querySelector(".recent-post-container");

// Debug: Log initial DOM elements
console.log("Initial blogPostsContainer:", blogPostsContainer ? "Found" : "Not found");
console.log("Initial sidebarLinks count:", sidebarLinks.length);
sidebarLinks.forEach((link, index) => {
  console.log(`Sidebar link ${index + 1}:`, link.getAttribute("data-category"));
});

function renderRecentPost(post) {
  recentPostContainer.innerHTML = `
        <div class="recent-post-card">
            <div class="recent-post-image">
                <img src="${post.image}" alt="${post.title}" class="recent-post-img" loading="lazy">
            </div>
            <div class="recent-post-content">
                <h3>${post.title}</h3>
                <div class="recent-post-meta">
                    <p class="author">${post.author}</p>
                    <p class="date">${post.date}</p>
                </div>
                <p class="recent-post-excerpt">${post.excerpt}</p>
                <a href="${post.link || "#"}" class="recent-post-read-more">Read More</a>
            </div>
        </div>
    `;

  const card = document.querySelector(".recent-post-card");
  if (card) {
    card.classList.add("visible");
  }
}

function renderBlogPosts(category = "all") {
  blogPostsContainer.innerHTML = "";

  // Normalize category for matching
  const normalizedCategory = category.toLowerCase().trim();
  let filteredPosts = normalizedCategory === "all" ? blogPosts : blogPosts.filter((post) => post.category.toLowerCase().trim() === normalizedCategory);

  if (normalizedCategory === "all") {
    filteredPosts = [...filteredPosts].sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return dateB - dateA;
    });
  }

  if (filteredPosts.length === 0) {
    const noPosts = document.createElement("div");
    noPosts.className = "no-posts visible";
    noPosts.textContent = "No posts found for this category.";
    blogPostsContainer.appendChild(noPosts);
  } else {
    filteredPosts.forEach((post) => {
      const postEl = document.createElement("div");
      postEl.className = "blog-post visible";
      postEl.setAttribute("data-category", post.category.toLowerCase().trim());
      postEl.innerHTML = `
                <div class="blog-post-image">
                    <img src="${post.image}" alt="${post.title}" class="blog-post-img loaded" loading="lazy">
                </div>
                <div class="blog-post-content">
                    <h3 class="blog-post-title">${post.title}</h3>
                    <div class="blog-post-meta">
                        <p class="author">${post.author}</p>
                        <p class="date">${post.date}</p>
                    </div>
                    <p class="blog-post-excerpt">${post.excerpt}</p>
                    <a href="${post.link || "#"}" class="blog-post-read-more">Read More</a>
                </div>
            `;
      blogPostsContainer.appendChild(postEl);
    });
  }
  console.log(`Rendered posts for category: ${normalizedCategory}, count: ${filteredPosts.length}`);
}

// Scroll to the first post of the selected category with extra padding
function scrollToTopPost(category) {
  requestAnimationFrame(() => {
    const normalizedCategory = category.toLowerCase().trim();
    let targetElement;
    if (normalizedCategory === "all") {
      targetElement = document.querySelector(".blog-post");
    } else {
      targetElement = document.querySelector(`.blog-post[data-category="${normalizedCategory}"]`);
    }

    if (!targetElement) {
      targetElement = document.querySelector(".no-posts");
    }

    if (!targetElement) {
      targetElement = document.querySelector(".blog-posts");
    }

    if (targetElement) {
      console.log(`Scrolling to ${targetElement.className} for category: ${normalizedCategory}`);
      const header = document.querySelector(".header");
      const headerOffset = header.classList.contains("scrolled") ? 70 : 135;
      const paddingOffset = 70; // Additional padding for space below header
      const sectionTop = targetElement.getBoundingClientRect().top + window.scrollY - headerOffset - paddingOffset;

      try {
        window.scrollTo({
          top: sectionTop,
          behavior: "smooth",
        });
        console.log(`Scrolled to position: ${sectionTop} (headerOffset: ${headerOffset}, paddingOffset: ${paddingOffset})`);
      }
      catch{
        console.log("window.scrollTo failed, trying scrollIntoView");
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      console.log(`No target post or .no-posts found for category: ${normalizedCategory}`);
    }
  });
}

sidebarLinks.forEach((link, index) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const category = this.getAttribute("data-category");
    console.log(`Sidebar link ${index + 1} clicked, category: ${category}`);

    sidebarLinks.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");

    renderBlogPosts(category);
    scrollToTopPost(category);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded, initializing page");
  window.scrollTo(0, 0);
  renderRecentPost(recentPost);
  renderBlogPosts();

  const allLink = document.querySelector('[data-category="all"]');
  if (allLink) {
    allLink.classList.add("active");
  } else {
    console.log("Could not find 'All' category link");
  }
});