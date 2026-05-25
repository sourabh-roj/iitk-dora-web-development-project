<?php include '../header.php'?>
<body>
  <header class="iitknews-insti-header">
    <div class="iitknews-header-container">
      <h1>Institute News</h1>
    </div>
  </header>
  
  <div class="iitknews-main-container">
    <div class="iitknews-container">
      <aside class="iitknews-sidebar">
        <h2 class="iitknews-sidebar-title">Yearwise News</h2>
        <ul class="iitknews-sidebar-years" id="year-list"></ul>
      </aside>
      
      <main class="iitknews-main-content">
        <section id="news-list"></section>
      </main>
    </div>
  </div>

  <script>
    const newsData = [
      {
        year: 2025,
        html: `
          <div class="iitknews-news-block">
            <div class="iitknews-news-header">
              <h3>IIT Kanpur celebrates 58th Convocation ceremony</h3>
              <div class="iitknews-news-date">June 2025</div>
            </div>
            <p>The institute celebrated its 58th Convocation Ceremony on June 23, 2025, conferring degrees upon 2,848 students across a diverse range of disciplines. The ceremony was graced by Shri Sanjay Malhotra, RBI Governor and distinguished alumnus, as the Chief Guest. Top honors, including the President’s Gold Medal, were awarded to high-achieving students, while 21 scholars received Outstanding PhD Thesis Awards for their research excellence. The event was not just a celebration of academic accomplishments, but also a tribute to IIT Kanpur’s values of ethical leadership, innovation, and interdisciplinary excellence.</p>
            <div class="iitknews-news-images">
              <img src="https://www.iitk.ac.in/dora/imag/news/convocation-58.jpg" alt="Convocation 2025" class="iitknews-news-img">
              <img src="https://www.iitk.ac.in/dora/imag/news/convocation-58-1.jpg" alt="Convocation Stage" class="iitknews-news-img">
              <img src="https://www.iitk.ac.in/dora/imag/news/convocation-58-2.jpg" alt="Convocation Stage" class="iitknews-news-img">
              <img src="https://www.iitk.ac.in/dora/imag/news/convocation-58-3.jpg" alt="Convocation Stage" class="iitknews-news-img">
            </div>
          </div>
          
          <div class="iitknews-news-block">
            <div class="iitknews-news-header">
              <h3>Foxhog Ventures Commits ₹25 Cr CSR Investment to Support IIT Kanpur Startups</h3>
              <div class="iitknews-news-date">June 2025</div>
            </div>
            <p>Foxhog Ventures Corp, a US-based global venture capital firm, pledged INR 25 crore (USD 3.5 million) as part of its Corporate Social Responsibility (CSR) initiative to support startups incubated at IIT Kanpur’s Startup Incubation and Innovation Centre (SIIC). The investment focuses on aerospace, defence, agritech, and sustainability—critical sectors for India's growth.During his visit to IIT Kanpur, Foxhog CEO Mr. Tarun Poddar announced the creation of a dedicated CEO Fund to offer R&D grants to early-stage, socially-driven startups aligned with the firm’s impact vision. This strategic collaboration, soon to be formalised through an MoU, will see IIT Kanpur take the lead in evaluating and mentoring supported ventures. Prof. Deepu Philip and Mr. Piyush Mishra from SIIC welcomed the partnership, which is expected to accelerate innovation and scaling in high-impact industries.</p>
            <div class="iitknews-news-images">
              <img src="https://www.iitk.ac.in/dora/imag/news/foxhog.jpg" alt="Foxhog CSR" class="iitknews-news-img">
              <img src="https://www.iitk.ac.in/dora/imag/news/foxhog-1.jpg" alt="SIIC Foxhog" class="iitknews-news-img">
            </div>
          </div>
          
          <div class="iitknews-news-block">
            <div class="iitknews-news-header">
              <h3>Team Aerial Robotics IIT Kanpur wins 1st Place Globally at ICUAS 2025</h3>
              <div class="iitknews-news-date">May 2025</div>
            </div>
            <p>Team Aerial Robotics at IIT Kanpur, clinched 1st place worldwide at the International Conference on Unmanned Aircraft Systems (ICUAS) 2025 student competition. Representing IIT Kanpur and India, the team outperformed elite competitors from Hong Kong, Armenia, Poland, and South Korea. In the final round, their swarm of Crazyflie drones demonstrated precise ArUco marker detection and seamless communication under real-world constraints—a system that had earlier secured third place globally in simulation. This victory is a shining example of innovation, perseverance, and technical mastery, powered by the unwavering support and mentorship that defines our ecosystem.</p>
            <div class="iitknews-news-images">
              <img src="https://www.iitk.ac.in/dora/imag/news/aerial-robotics-2025.jpg" alt="Aerial Robotics" class="iitknews-news-img">
              <img src="https://www.iitk.ac.in/dora/imag/news/aerial-robotics-2025-1.jpg" alt="ICUAS Trophy" class="iitknews-news-img">
            </div>
          </div>
        `
      },
      {
        year: 2024,
        html: `
          <div class="iitknews-news-block">
            <div class="iitknews-news-header">
              <h3>IIT celebrates its 65th Foundation Day</h3>
              <div class="iitknews-news-date">November 2024</div>
            </div>
            <p>IIT Kanpur marked 65 Years of Innovation and Excellence, honoring Alumni and showcasing Defence Innovation. Hon’ble Defence Minister Shri Rajnath Singh Ji graced the occasion as the Chief Guest. The event showcased IIT Kanpur’s legacy in shaping national progress and advancing global knowledge, while recognizing the extraordinary contributions of its alumni, faculty, students, and staff in academia, industry, and society. The 65th Foundation Day felicitation ceremony began with a traditional Saraswati Vandana, followed by a warm welcome address by Prof. Manindra Agrawal, Director of IIT Kanpur. IIT Kanpur honored 18 distinguished alumni with prestigious awards that celebrated their impactful contributions and dedication.</p>
            <div class="iitknews-news-images">
              <img src="https://www.iitk.ac.in/dora/imag/news/iitkfoundation-65th-24.jpg" alt="Foundation Day" class="iitknews-news-img">
              <img src="https://www.iitk.ac.in/dora/imag/news/iitkfoundation-65th-24-1.jpg" alt="Foundation Day Event" class="iitknews-news-img">
              <img src="https://www.iitk.ac.in/dora/imag/news/iitkfoundation-65th-24-2.jpg" alt="Foundation Day Ceremony" class="iitknews-news-img">
              <img src="https://www.iitk.ac.in/dora/imag/news/iitkfoundation-65th-24-3.jpg" alt="Foundation Day Celebration" class="iitknews-news-img">
            </div>
          </div>
          
          <div class="iitknews-news-block">
            <div class="iitknews-news-header">
              <h3>IITK Delegation visit the USA</h3>
              <div class="iitknews-news-date">October 2024</div>
            </div>
            <p>IIT Karvaan held its third event in the USA; starting with the New Jersey where the alumni reconnected and built new bonds within the IITK community. The next stop was in Washington, D.C. where the energy continued to soar and strengthened bonds and the journey continued in Chicago filled with energy, laughter, and unforgettable moments. Seattle marked the next stop on our IIT Karvaan tour in the USA, and the energy was unmatched. The Bay Area event wrapped up the USA 2024 tour with an evening full of energy, camaraderie, and forward-thinking conversations.</p>
            <div class="iitknews-news-images">
              <img src="https://www.iitk.ac.in/dora/imag/news/usa-1.jpg" alt="delegates" class="iitknews-news-img">
              <img src="https://www.iitk.ac.in/dora/imag/news/usa-2.jpg" alt="delegate" class="iitknews-news-img">
              <img src="https://www.iitk.ac.in/dora/imag/news/usa-3.jpg" alt="delegate" class="iitknews-news-img">
              <img src="https://www.iitk.ac.in/dora/imag/news/usa-4.jpg" alt="delegate" class="iitknews-news-img">
              <img src="https://www.iitk.ac.in/dora/imag/news/usa-5.jpg" alt="delegate" class="iitknews-news-img">
              <img src="https://www.iitk.ac.in/dora/imag/news/usa-6.jpg" alt="delegate" class="iitknews-news-img">
            </div>
          </div>
          
          <div class="iitknews-news-block">
            <div class="iitknews-news-header">
              <h3>IITK celebrates Antaragni '24</h3>
              <div class="iitknews-news-date">October 2024</div>
            </div>
            <p>With around 4,000 participants and 15,000 spectators from all across the nation, Antaragni's euphoria was unmatched. The three day festival, themed as 'A Syncretic Jaunt', saw over 50 events and competition, along with electrifying performances by Bharg, Rahgir, Devesh Dixit, Javed Ali, and Badshah. Antargni this year also focused on a shift towards sustainability, with initiatives like no single-use plastics, reusing materials from previous years, and using biodegradable materials across the event.</p>
            <div class="iitknews-news-images">
              <img src="https://www.iitk.ac.in/dora/imag/news/antaragni-24-1.jpg" alt="Antragni '24" class="iitknews-news-img">
              <img src="https://www.iitk.ac.in/dora/imag/news/antaragni-24-2.jpg" alt="Antragni '24" class="iitknews-news-img">
              <img src="https://www.iitk.ac.in/dora/imag/news/antaragni-24-3.jpg" alt="Antragni '24" class="iitknews-news-img">
              <img src="https://www.iitk.ac.in/dora/imag/news/antaragni-24-4.jpg" alt="Antragni '24" class="iitknews-news-img">
              <img src="https://www.iitk.ac.in/dora/imag/news/antaragni-24-5.jpg" alt="Antragni '24" class="iitknews-news-img">
              <img src="https://www.iitk.ac.in/dora/imag/news/antaragni-24-6.jpg" alt="Antragni '24" class="iitknews-news-img">
            </div>
          </div>
        `
      },
      {
        year: 2023,
        html: `
          <div class="iitknews-news-block">
            <div class="iitknews-news-header">
              <h3>WISE Program: Inaugural Session</h3>
              <div class="iitknews-news-date">November 2023</div>
            </div>
            <p>The inaugural session of the W.IS.E. program (Women In Science & Engineering) was held on 27 Nov. 2023. Instituted by IITK Distinguished Alumna, Ms. Anjali Joshi, the program aims to create a platform that not only celebrates women's achievements but also provides the necessary tools and support for their continued success in sciences & engineering.
            Panel discussion was held on STEM education for girls: Encouraging young women to pursue science & engineering. Led by Dr. Urbi Chatterjee as the moderator, the panelist consisted of Ms. Sonam Srivastava, Founder, Wright Research; Ms. Riya Bhattacharya, Founder, RIO Money Ex-Leadership @NAVI; Dr. Ritika Gautam, Assistant Professor, IITK; Ms. Neha Verma as the keynote speaker, and Ms. Rashie Jain, Co-founder & CEO, Onco, as a special guest.</p>
            <div class="iitknews-news-images">
              <img src="https://www.iitk.ac.in/dora/imag/institute-news/wise.jpg"  class="iitknews-news-img">
              <img src="https://www.iitk.ac.in/dora/imag/institute-news/wise-5.jpg"  class="iitknews-news-img">
              <img src="https://www.iitk.ac.in/dora/imag/institute-news/wise-1.jpg"  class="iitknews-news-img">
              <img src="https://www.iitk.ac.in/dora/imag/institute-news/wise-2.jpg"  class="iitknews-news-img">
              <img src="https://www.iitk.ac.in/dora/imag/institute-news/wise-3.jpg"  class="iitknews-news-img">
              <img src="https://www.iitk.ac.in/dora/imag/institute-news/wise-4.jpg"  class="iitknews-news-img">
            </div>
          </div>
          
          <div class="iitknews-news-block">
            <div class="iitknews-news-header">
              <h3>Shri Durga Shanker visits RSK, IITK</h3>
              <div class="iitknews-news-date">November 2023</div>
            </div>
            <p>The Ranjit Singh Rozi Shiksha Kendra, IIT Kanpur, showcased a model of rural development in a unique ceremony in the presence of the Chief Guest Shri Durga Shankar Mishra, Hon. Chief Secretary of the Government of Uttar Pradesh, and special guest Mr. Raju Jalan, Vice Chairman of Council of Leather. The doctoral students from IIT Kanpur demonstrated teaching the students at remote rural schools through the Online Rural Education Initiative (OREI) platform.
            When the Chief Guest inquired about how the IIT Kanpur classes were benefiting them, the children responded enthusiastically, stating, "OREI classes make difficult concepts simple. The math classes are especially interesting, and we love them." He noted that OREI is a unique model supported by the Government of Uttar Pradesh and encouraged the RSK to expand its reach by connecting with more universities and aiming to reach 500 students by the following year. The Chief Guest also presided over the certificate distribution and award ceremony for Rozi Shiksha Kendra's skilling program. He emphasized that training in leather and garment industries is a wise choice, as they are also part of Kanpur district's ODOP (One District One Product) initiative.
            Professor Subramaniam Ganesh, Officiating Director, IIT Kanpur, shared information on the inception of RSK and its remarkable progress in just two years, presenting a model of rural development, suggesting the state government to adopt this model and facilitate its expansion on a larger scale.
            Prof. Sudhanshu Shekhar Singh, Prof. Ark Verma, Prof. Shikhar Misra Ph.D., Prof. Santosh Misra, Dr. Dr. Sandip Patil and Mr. Sandeep Saxena are also associated with OREI platform.</p>
            <div class="iitknews-news-images">
              <img src="https://www.iitk.ac.in/dora/imag/institute-news/rsk1.png" class="iitknews-news-img">
              <img src="https://www.iitk.ac.in/dora/imag/institute-news/rsk2.png" class="iitknews-news-img">
              <img src="https://www.iitk.ac.in/dora/imag/institute-news/rsk3.png" class="iitknews-news-img">
              <img src="https://www.iitk.ac.in/dora/imag/institute-news/rsk4.png" class="iitknews-news-img">
              <img src="https://www.iitk.ac.in/dora/imag/institute-news/rsk5.png" class="iitknews-news-img">
            </div>
          </div>
          
          <div class="iitknews-news-block">
            <div class="iitknews-news-header">
              <h3>MoU signing between Sutwala Family & IITK</h3>
              <div class="iitknews-news-date">September 2023</div>
            </div>
            <p>Mr. Gopal Sutwala and his family have donated Rs. 41 Lakhs to support treatment of patients from ‘Economically Weaker Section’ at the upcoming Yadupati Singhania Super Speciality Hospital of Gangwal School of Medical Sciences & Technology at IIT Kanpur. An MoU was signed between Sutwala family and IIT Kanpur to support the establishment of a bay within a general ward allocated for patients covered under different government health schemes at Gangwal School of Medical Sciences and Technology with a 500 bedded Yadupati Singhania super-speciality hospital at IIT Kanpur.
            The MoU was signed by Mr Gopal Sutwala and Prof. Kantesh Balani, Dean of Resources and Alumni, IIT Kanpur in the presence of Prof. S. Ganesh, Deputy Director, IIT Kanpur, Prof. Sandeep Verma, Professor-in-Charge, Gangwal School of Medical Sciences & Technology, and Mr Purshottam Sutwala, brother of Mr. Gopal Sutwala..</p>
            <div class="iitknews-news-images">
              <img src="https://www.iitk.ac.in/dora/imag/institute-news/sutwala-1.jpg" class="iitknews-news-img">
              <img src="https://www.iitk.ac.in/dora/imag/institute-news/sutwala-2.jpg" class="iitknews-news-img">
            </div>
          </div>
        `
      },
      {
        year: 2022,
        html: `
          <div class="iitknews-news-block">
            <div class="iitknews-news-header">
              <h3>IITK Faculty selected as the Fellows of Indian National Science Academy (INSA)</h3>
              <div class="iitknews-news-date">October 2022</div>
            </div>
            <p>
              Prof. S Ganesh (Dept of BSBE), Prof. Yogesh M. Joshi (Dept of Chemical Engineering), Prof. Javed Malik (Dept of Earth Sciences) and Prof. Arun Shukla (Dept of BSBE) have been elected as Fellows of the Indian National Science Academy (INSA).
            </p>
            <div class="iitknews-news-images">
              <img src="https://www.iitk.ac.in/dora/imag/iitkarvaan/insa.png" class="iitknews-news-img">
            </div>
          </div>
          
          <div class="iitknews-news-block">
            <div class="iitknews-news-header">
              <h3>Akshar - A Literature festival organized by Shivani Cent</h3>
              <div class="iitknews-news-date">October 2022</div>
            </div>
            <p>A three-day literature festival, Akshar, was organized by the Shivani Center to commemorate the centenary year celebration of the life and works of famous Hindi author, Smt. Gaura Pant (‘Shivani’). The event was graced by eminent literary and academic personalities such as, Dr. Mrinal Pande, Dr. Pushpesh Pant, Prof. Shambhunath Tiwari; by poets and performers such as, Shri Veeru Sankar, pankaj Chaturvedi, Dr. Naresh Saxen, et al.</p>
            <div class="iitknews-news-images">
              <img src="https://www.iitk.ac.in/dora/imag/iitkarvaan/Akshar1.jpeg" class="iitknews-news-img">
              <img src="https://www.iitk.ac.in/dora/imag/iitkarvaan/Akshar2.jpeg" class="iitknews-news-img">
            </div>
          </div>
          
          <div class="iitknews-news-block">
            <div class="iitknews-news-header">
              <h3>Portescap visits IIT Kanpur</h3>
              <div class="iitknews-news-date">September 2022</div>
            </div>
            <p>Portescap has been supporting Indian Institute of Technology, Kanpur for the last four years on different research initiatives, such as designing and developing a miniature rotary actuator based on flexinol SMA, an adaptive smart stick for sit-to-stand motion, an interactive cloud based diagnostic platform for oral cancer, etc. under #CSR funding.</p>
            <div class="iitknews-news-images">
              <img src="https://www.iitk.ac.in/dora/imag/iitkarvaan/portescap.jpeg" class="iitknews-news-img">
              <img src="https://www.iitk.ac.in/dora/imag/iitkarvaan/portescap-1.jpeg" class="iitknews-news-img">
            </div>
          </div>
        `
      }
    ];

    // Sidebar years
    const years = newsData.map(item => item.year);
    const yearList = document.getElementById('year-list');
    
    years.forEach((year, idx) => {
      const li = document.createElement('li');
      li.textContent = year;
      li.className = 'iitknews-sidebar-year' + (idx === 0 ? ' iitknews-active' : '');
      li.setAttribute('data-year', year);
      li.onclick = () => filterByYear(year);
      yearList.appendChild(li);
    });

    function filterByYear(year) {
      document.querySelectorAll('.iitknews-sidebar-year').forEach(li => {
        li.classList.toggle('iitknews-active', li.getAttribute('data-year') == year);
      });
      renderNews(year);
    }

    function renderNews(year = years[0]) {
      const newsList = document.getElementById('news-list');
      const news = newsData.find(n => n.year === year);
      newsList.innerHTML = news ? news.html : '<p class="iitknews-no-news">No news available for this year.</p>';
    }

    // Initial render
    renderNews(years[0]);
  </script>
</body>
<?php include '../footer.php' ?>
