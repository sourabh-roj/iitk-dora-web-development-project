const awards =[
            { id: 1, name: "Shri Harsh Kumar", year: 2024, batch: "BT/ME/1973", position: "President & Co-Founder Niswart", image: "https://iitk.ac.in/dora/imag/profile/harsh-daa-24.jpg", profileUrl: "https://iitk.ac.in/dora/profile/mr-harsh-kumar" },
            { id: 2, name: "Shri Shashidhar Sinha", year: 2024, batch: "BT/CE/1979", position: "India IPG Mediabrands", image: "https://iitk.ac.in/dora/imag/profile/sashi-daa-24.jpg", profileUrl: "https://iitk.ac.in/dora/profile/mr-shashidhar-sinha" },
            { id: 3, name: "Dr. Ajay Bhushan Pandey", year: 2024, batch: "BT/EE/1983", position: "Chairperson National Financial Reporting Authority", image: "https://iitk.ac.in/dora/imag/profile/ajay-daa-24.jpeg", profileUrl: "https://iitk.ac.in/dora/profile/dr-ajay-bhushan-pandey" },
            { id: 4, name: "Mr. Ranjan Chopra", year: 2024, batch: "BT/EE/1983", position: "Chairman & Managing Director Team Computers", image: "https://iitk.ac.in/dora/imag/profile/ranjan-daa-24.jpeg", profileUrl: "https://iitk.ac.in/dora/profile/mr-ranjan-chopra" },
            { id: 5, name: "Prof. Sunil Agrawal", year: 2024, batch: "B.Tech/ME/1984", position: "Professor, Columbia University", image: "https://iitk.ac.in/dora/imag/profile/sunil-daa-24.jpeg", profileUrl: "https://iitk.ac.in/dora/profile/prof-sunil-agrawal" },
            { id: 6, name: "Mr. K. Krithivasan", year: 2024, batch: "MT/IME/1988", position: "CEO & MD, TCS", image: "https://iitk.ac.in/dora/imag/profile/krithivasan.jpg", profileUrl: "https://iitk.ac.in/dora/profile/mr-k-krithivasan" },
            { id: 7, name: "Prof. Mahan Mj", year: 2024, batch: "MSc5/MTH/1992", position: "Professor of Mathematics, T.I F.R Mumbai", image: "https://iitk.ac.in/dora/imag/profile/mahan.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Prof-Mahan-Mitra" },
            { id: 8, name: "Prof. Senthil Todadri", year: 2024, batch: "MSC5/PHY/1992", position: "Professor, Massachusetts Institute of Technology", image: "https://iitk.ac.in/dora/imag/profile/senthil-daa-24.jpg", profileUrl: "https://iitk.ac.in/dora/profile/prof-senthil-todadri" },
            { id: 9, name: "Mr. Rajat Dhawan", year: 2024, batch: "BT/CHE/1994", position: "India Chair & Senior Partner, McKinsey & Company Inc.", image: "https://iitk.ac.in/dora/imag/profile/Dhawan-news.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Mr-Rajat-Dhawan" },
            { id: 10, name: "Dr. Sumit Gulwani", year: 2024, batch: "BT/CSE/2000", position: "Distinguished Scientist and Vice President at Microsoft", image: "https://iitk.ac.in/dora/imag/profile/sumit-daa-24.jpg", profileUrl: "https://iitk.ac.in/dora/profile/dr-sumit-gulwani" },
            { id: 11, name: "Mr. Amit Kumar", year: 2024, batch: "BT/CE/2000", position: "Co Founder & CEO, NoBroker", image: "https://iitk.ac.in/dora/imag/profile/amit-kumar-24.jpg", profileUrl: "https://iitk.ac.in/dora/profile/mr-amit-kumar" },
            { id: 12, name: "Dr. Saurabh Kumar Tiwary", year: 2024, batch: "BT/EE/2001", position: "Vice President & General Manager, Cloud AI Google", image: "https://iitk.ac.in/dora/imag/profile/saurabh-daa-24.jpg", profileUrl: "https://iitk.ac.in/dora/profile/dr-saurabh-kumar-tiwary" },
            { id: 13, name: "Shri Soham Mazumdar", year: 2024, batch: "BT/CSE/2002", position: "Co-Founder & CEO WisdomAI", image: "https://iitk.ac.in/dora/imag/profile/soham-daa-24.jpeg", profileUrl: "https://iitk.ac.in/dora/profile/mr-soham-mazumdar" },
            { id: 14, name: "Prof. Atish Dabholkar", year: 2023, batch: "MSC5/PHY/1985", position: "Director, Assistant Director General, International Centre for Theoretical Physics, UNESCO", image: "https://iitk.ac.in/dora/imag/daa/2023/atish-23-daa.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Dr-Atish-Shripad-Dabholkar" },
            { id: 15, name: "Prof. Pankaj Jalote", year: 2023, batch: "BT/EE/1980", position: "Distinguished Professor (Founding Director 2008-2018), Indraprastha Institute of Information Technology, Delhi", image: "https://dora.iitk.ac.in/static/daa/pankaj-2022.png", profileUrl: "https://iitk.ac.in/dora/profile/prof-pankaj-jalote" },
            { id: 16, name: "Dr. Charu Chandra Aggarwal", year: 2023, batch: "BT/CSE/1993", position: "Distinguished Research Staff (DRSM) at the IBM T. J. Watson Research Center", image: "https://iitk.ac.in/dora/imag/profile/charu-aggarwal.jpg", profileUrl: "https://iitk.ac.in/dora/profile/dr-charu-c-aggarwal" },
            { id: 17, name: "Prof. Ashish Goel", year: 2023, batch: "BT/CSE/1994", position: "Professor at Stanford University", image: "https://dora.iitk.ac.in/static/daa/ashish.jpg", profileUrl: "https://iitk.ac.in/dora/profile/prof-ashish-goel" },
            { id: 18, name: "Mr. Anup Bagchi", year: 2023, batch: "BT/CHE/1990", position: "Managing Director CEO, ICICI Pru Life Insurance", image: "https://dora.iitk.ac.in/static/daa/anup-23.jpg", profileUrl: "https://iitk.ac.in/dora/profile/mr-anup-bagchi" },
            { id: 19, name: "Mr. Durga Shanker Mishra", year: 2023, batch: "BT/EE/1983", position: "Chief Secretary Uttar Pradesh", image: "https://dora.iitk.ac.in/static/daa/durga-2023.jpg", profileUrl: "https://iitk.ac.in/dora/profile/mr-durga-shankar-mishra" },
            { id: 20, name: "Mr. Prashant Jain", year: 2023, batch: "BT/ME/1989", position: "Former Chief Investment Ofcr/Exec Dir, HDFC Asset Management Co. Ltd.", image: "https://dora.iitk.ac.in/static/daa/daa-prashant-23.jpeg", profileUrl: "https://iitk.ac.in/dora/profile/mr-prashant-jain" },
            { id: 21, name: "Prof. Yashwant Gupta", year: 2023, batch: "BT/EE/1985", position: "Centre Director National Centre for Radio Astrophysics Tata Institute of Fundamental Research", image: "https://dora.iitk.ac.in/static/daa/yashwant-gupta.png", profileUrl: "https://iitk.ac.in/dora/profile/Prof-Yashwant-Gupta" },
            { id: 22, name: "Dr. Renu Mehra", year: 2023, batch: "BT/EE/1991", position: "Vice President, Engineering, Synopsys Inc.", image: "https://dora.iitk.ac.in/static/daa/mehrapre.png", profileUrl: "https://iitk.ac.in/dora/profile/Dr-Renu-Mehra" },
            { id: 23, name: "Mr. Rajnish Kumar", year: 2023, batch: "BT/CSE/2001", position: "Co-Founder & Group CPTO, ixigo (Le Travenues Technology Ltd)", image: "https://dora.iitk.ac.in/static/daa/rajnish-2022.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Mr-Rajnish-Kumar" },
            { id: 24, name: "Dr. Venkat Krishnamurthy", year: 2023, batch: "BT/CSE/1992", position: "President and co-founder of Alignable, Inc", image: "https://dora.iitk.ac.in/static/daa/daa-venkat-23.jpg", profileUrl: "https://iitk.ac.in/dora/profile/dr-venkat-krishnamurthy" },
            { id: 25, name: "Mr. Anil Bansal", year: 2023, batch: "BT/MME/1977", position: "President, Reality National Management, Inc.", image: "https://dora.iitk.ac.in/static/daa/anil-23.jpg", profileUrl: "https://iitk.ac.in/dora/profile/mr-anil-bansal" },
            { id: 26, name: "Mr. Deepak Dev Raj", year: 2022, batch: "BT/EE/1970", position: "Founder & MD, Raj Associated, New Jersey", image: "https://iitk.ac.in/dora/imag/profile/devraj1.png", profileUrl: "https://iitk.ac.in/dora/profile/Mr-Deepak-Devraj" },
            { id: 27, name: "Dr. Ruchir Puri", year: 2022, batch: "MT/EE/1990", position: "Chief Scientist, IBM Research, NY, USA", image: "https://iitk.ac.in/dora/imag/profile/puri.jpg", profileUrl: "https://iitk.ac.in/dora/profile/dr-ruchir-puri" },
            { id: 28, name: "Dr. Smita Agarwal Hashim", year: 2022, batch: "BT/EE/1986", position: "Vice President, Microsoft Inc., USA", image: "https://iitk.ac.in/dora/imag/profile/smita.png", profileUrl: "https://iitk.ac.in/dora/profile/dr-smita-agarwal-hashim" },
            { id: 29, name: "Mr. Rajendra Bhattarai", year: 2022, batch: "BT/CE/1976", position: "President, Clean Water Strategies University of Texas, Austin, USA", image: "https://iitk.ac.in/dora/imag/profile/rajendra-bhatt.jpg", profileUrl: "https://iitk.ac.in/dora/profile/mr-rajendra-bhattarai" },
            { id: 30, name: "Prof. Vivek Sarkar", year: 2022, batch: "BT/EE/1981", position: "Chair, School of Computer Science Stephen Fleming Chair for Telecommunications College of Computing, Georgia Institute of Technology, USA", image: "https://iitk.ac.in/dora/imag/profile/vivek-sarkar.jpg", profileUrl: "https://iitk.ac.in/dora/profile/prof-vivek-sarkar" },
            { id: 31, name: "Mr. Aloke Bajpai", year: 2022, batch: "MT/EE/2001", position: "Co-founder & Group CEO, ixigo", image: "https://iitk.ac.in/dora/imag/profile/Bajpai-1.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Mr-Aloke-Bajpai" },
            { id: 32, name: "Prof. Sanjay Ranka", year: 2022, batch: "BT/CSE/1985", position: "Distinguished Professor, Department of Computer Information Science and Engineering, University of Florida", image: "https://iitk.ac.in/dora/imag/profile/SanjayRanka-1.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Prof-Sanjay-Ranka" },
            { id: 33, name: "Mr. Ranodeb Roy", year: 2022, batch: "BT/CSE/1990", position: "Co-founder, CEO, and Chief Investment Officer RV Capital Management, Singapore", image: "https://iitk.ac.in/dora/imag/profile/rano-8thmay.jpg", profileUrl: "https://iitk.ac.in/dora/profile/mr-ranodeb-roy" },
            { id: 34, name: "Prof. Ratnesh Kumar", year: 2022, batch: "BT/EE/1987", position: "Barbara and James R. Palmer Professor, Department of Electrical and Computer Engineering at Iowa State University", image: "https://iitk.ac.in/dora/imag/profile/ratnesh-2022.jpg", profileUrl: "https://iitk.ac.in/dora/profile/prof-ratnesh-kumar" },
            { id: 35, name: "Dr. Anil K. Rajvanshi", year: 2022, batch: "BT/MT/ME/1972/1974", position: "Director, Trustee & Hon. Secretary, Nimbkar Agriculture Research Institute, Maharashtra", image: "https://iitk.ac.in/dora/imag/profile/anil.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Dr-Anil-K-Rajvanshi" },
            { id: 36, name: "Prof. Deepak Dhar", year: 2022, batch: "MSC2/PHY/1973", position: "Distinguished Professor Emeritus, IISER Pune", image: "https://iitk.ac.in/dora/imag/profile/deepak.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Prof-Deepak-Dhar" },
            { id: 37, name: "Mr. Rakesh Bhargava", year: 2021, batch: "BT/CHE/1973", position: "Former Chairman Fresenius Kabi Oncology Ltd.", image: "https://iitk.ac.in/dora/imag/daa/2021/Rakesh-Bhargava.jpg", profileUrl: "mr-rakesh-bhargava" },
            { id: 38, name: "Ms. Vartika Shukla", year: 2021, batch: "BT/CHE/1988", position: "Chairperson & Managing Director Engineers India Limited", image: "https://iitk.ac.in/dora/imag/daa/2021/varitka.jpg", profileUrl: "ms-vartika-shukla" },
            { id: 39, name: "Mr. Hemant Jalan", year: 2021, batch: "BT/CHE/1977", position: "Managing Director Indigo Paints Ltd.", image: "https://iitk.ac.in/dora/imag/daa/2021/Hemant.jpg", profileUrl: "mr-hemant-jalan" },
            { id: 40, name: "Shri Ashwini Kumar Vaishnaw", year: 2021, batch: "MT/IME/1994", position: "Cabinet Minister Ministry of Railways Govt. of India", image: "https://iitk.ac.in/dora/imag/daa/2021/Ashwini.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Mr-Ashwini-Vaishnaw" },
            { id: 41, name: "Mr. Mukesh Bansal", year: 2021, batch: "BT/CSE/1997", position: "CEO and Co-founder CureFit", image: "https://iitk.ac.in/dora/imag/daa/2021/Bansal.jpg", profileUrl: "mr-mukesh-bansal" },
            { id: 42, name: "Mr. Saurabh Chandra", year: 2021, batch: "BT/EE/1976", position: "Director & Chairman Multi Commodity Exchange of India Ltd.", image: "https://iitk.ac.in/dora/imag/daa/2021/Chandra.jpg", profileUrl: "mr-saurabh-chandra" },
            { id: 43, name: "Mr. Rahul Garg", year: 2021, batch: "BT/EE/2001", position: "Founder & CEO Moglix", image: "https://iitk.ac.in/dora/imag/daa/2021/Garg.jpg", profileUrl: "mr-rahul-garg" },
            { id: 44, name: "Prof. Rajesh Kumar Gupta", year: 2021, batch: "BT/EE/1984", position: "Professor and Qualcomm Endowed Chair Department of Computer Science and Engineering University of California, San Diego", image: "https://iitk.ac.in/dora/imag/daa/2021/Gupta.jpg", profileUrl: "prof-rajesh-kumar-gupta" },
            { id: 45, name: "Prof. Vijay Vittal", year: 2021, batch: "MT/EE/1979", position: "Regents Professor Arizona State University, USA", image: "https://iitk.ac.in/dora/imag/daa/2021/Vittal.jpg", profileUrl: "prof-vijay-vittal" },
            { id: 46, name: "Prof. Abhay Lalit Deshpande", year: 2021, batch: "MSC2/PHY/1987", position: "Department of Physics & Astronomy Stony Brook University, USA", image: "https://iitk.ac.in/dora/imag/daa/2021/Deshpande.jpg", profileUrl: "prof-abhay-lalit-deshpande" },
            { id: 47, name: "Dr. Dev Joneja", year: 2021, batch: "BT/ME/1984", position: "Chief Risk Officer, ExodusPoint Capital Management, LP", image: "https://iitk.ac.in/dora/imag/daa/2021/Joneja.jpg", profileUrl: "dr-dev-joneja" },
            { id: 48, name: "Prof. Deepak Divan", year: 2020, batch: "BT/EE/1975", position: "Director, Center for Distributed Energy Georgia Institute of Technology in Atlanta, GA, USA", image: "https://iitk.ac.in/dora/imag/daa/2020/deepak-divan.jpg", profileUrl: "Prof-Deepak-Divan.php" },
            { id: 49, name: "Prof. Ashok Gadgil", year: 2020, batch: "MSC2/PHY/1973", position: "Professor of Civil and Environmental Engineering at the University of California, Berkeley", image: "https://iitk.ac.in/dora/imag/daa/2020/Ashok-Gadgil.jpg", profileUrl: "Prof-Ashok-Gadgil.php" },
            { id: 50, name: "Prof. Rupak Majumdar", year: 2020, batch: "BT/CSE/1998", position: "Director, Max Planck Institute for Software Systems, Germany", image: "https://iitk.ac.in/dora/imag/daa/2020/rupak-majumdar.jpg", profileUrl: "Prof-Rupak-Majumdar.php" },
            { id: 51, name: "Prof. Meenakshi Narain", year: 2020, batch: "MSC2/PHY/1984", position: "Professor of Physics at Brown University, USA", image: "https://iitk.ac.in/dora/imag/daa/2020/meenakshi.jpg", profileUrl: "Prof-Meenakshi-Narain.php" },
            { id: 52, name: "Prof. C. Mauli Agrawal", year: 2020, batch: "BT/ME/1982", position: "Chancellor at the University of Missouri, Kansas City, USA", image: "https://iitk.ac.in/dora/imag/daa/2020/c-mauli-agrawal-.jpg", profileUrl: "Prof-C-Mauli-Agrawal.php" },
            { id: 53, name: "Prof. Mukul M. Sharma", year: 2020, batch: "BT/ChE/1980", position: "Professor at Department of Petroleum and Geosystems Engineering at the University of Texas at Austin, USA", image: "https://iitk.ac.in/dora/imag/daa/2020/mukul-sharma.jpg", profileUrl: "Prof-Mukul-M-Sharma.php" },
            { id: 54, name: "Air Marshal Raj Karan Singh Shera", year: 2020, batch: "MT/EE/1990", position: "Air Marshal, Air Officer Commanding in Chief Maintenance Command (retd.)", image: "https://iitk.ac.in/dora/imag/daa/2020/rks.jpg", profileUrl: "Air-Marshal-Raj.php" },
            { id: 55, name: "Mr. R. K. Mathur", year: 2020, batch: "BT/ME/1975", position: "First Lieutenant Governor of the Union Territory of Ladakh", image: "https://iitk.ac.in/dora/imag/daa/2020/rkm.jpg", profileUrl: "R-K-Mathur.php" },
            { id: 56, name: "Mr. Neelkanth Mishra", year: 2020, batch: "BT/CSE/1997", position: "The Indian Strategist and Co-head of Equity Strategy, Asia Pacific, for Credit Suisse", image: "https://iitk.ac.in/dora/imag/daa/2020/neelkanth-mishra.jpeg", profileUrl: "Neelkanth-Mishra.php" },
            { id: 57, name: "Mr. Gokul Rajaram", year: 2020, batch: "BT/CSE/1995", position: "Executive team at DoorDash", image: "https://iitk.ac.in/dora/imag/daa/2020/gokul-rajaram.jpg", profileUrl: "Gokul-Rajaram.php" },
            { id: 58, name: "Dr. Ashish Gupta", year: 2020, batch: "BT/CSE/1988", position: "Partner Emeritus at Prime Venture Partners Co-founder Helion Ventures", image: "https://iitk.ac.in/dora/imag/daa/2020/Ashish-Gupta.jpg", profileUrl: "Dr-Ashish-Gupta.php" },
            { id: 59, name: "Dr. Subrata Mitra", year: 2020, batch: "BT/CSE/1988", position: "Partner at Accel", image: "https://iitk.ac.in/dora/imag/daa/2020/subrata-mitra.png", profileUrl: "Dr-Subrata-Mitra.php" },
            { id: 60, name: "Mr. Rajiv Batra", year: 2020, batch: "BT/EE/1982", position: "Founder of Palo Alto Networks", image: "https://iitk.ac.in/dora/imag/daa/2020/rajiv-batra.jpeg", profileUrl: "Mr-Rajeev-Batra.php" },
            { id: 61, name: "Mr. Ranjan Tandon", year: 2020, batch: "BT/ME/1972", position: "Founder of Libra Advisors LLC", image: "https://iitk.ac.in/dora/imag/daa/2020/ranjan-tandon.png", profileUrl: "Mr-Ranjan-Tandon.php" },
            { id: 62, name: "Dr. Anand Jagannathan", year: 2020, batch: "BT/EE/1974", position: "Founder, CEO at Engage Social", image: "https://iitk.ac.in/dora/imag/daa/2020/anand-jagnnathan.jpg", profileUrl: "Dr-Anand-Jagannathan.php" },
            { id: 63, name: "Dr. Rajeev Gautam", year: 2020, batch: "BT/CHE/1974", position: "President & CEO (Retired), Honeywell Performance Materials and Technologies", image: "https://iitk.ac.in/dora/imag/daa/2020/rajeev-gautam.jpg", profileUrl: "Dr-Rajeev-Gautam.php" },
            { id: 64, name: "Mr. Ved Arya", year: 2020, batch: "BT/AE/1979", position: "Founder at Srijan, Founder at Buddha Fellowship Program, Founder at SRIJAN Infratech & Development Services (SIDS)", image: "https://iitk.ac.in/dora/imag/daa/2020/ved-arya.jpg", profileUrl: "Mr-Ved-Arya.php" },
            { id: 65, name: "Prof. Shankar Subramaniam", year: 2019, batch: "PhD/CHM/1982", position: "Chair and Professor of Bioengineering, University of California, San Diego", image: "imag/daa/2019/Shankar_Subramaniam.jpg", profileUrl: "https://iitk.ac.in/dora/profile/prof-shankar-subramaniam" },
            { id: 66, name: "Prof. Nitash P. Balsara", year: 2019, batch: "BT/CHE/1982", position: "Professor of Chemical and Biomolecular Engineering", image: "imag/daa/2019/Nitash Balsara.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Prof-Nitash-P-Balsara" },
            { id: 67, name: "Prof. Ajeet Rohatgi", year: 2019, batch: "BT/EE/1971", position: "Regents' Professor and a John H. Weitnauer, Jr. Chair in the College of Engineering at the Georgia Institute of Technology", image: "imag/daa/2019/Arun Seth.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Prof-Ajeet-Rohatgi" },
            { id: 68, name: "Prof. Rajesh Gopakumar", year: 2019, batch: "MSc/PHY/1992", position: "Centre Director, ICTS-TIFR", image: "imag/daa/2019/Rajesh Gopakumar.jpg", profileUrl: "https://iitk.ac.in/dora/profile/prof-rajesh-gopakumar" },
            { id: 69, name: "Dr. Ajay Kumar", year: 2019, batch: "BT/EE/1984", position: "Defence Secretary, Government of India", image: "imag/daa/2019/Ajay Kumar.jpg", profileUrl: "https://iitk.ac.in/dora/profile/dr-ajay-kumar" },
            { id: 70, name: "Mr. Dinesh Kumar Jain", year: 2019, batch: "BT/MT/ME/1981/1983", position: "Member, Lokpal of India", image: "imag/daa/2019/dinesh-kumar-jain.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Mr-Dinesh-Kumar-Jain" },
            { id: 71, name: "Dr. Arvind Krishna", year: 2019, batch: "BT/EE/1985", position: "Chairman and Chief Executive Officer of IBM", image: "imag/daa/2019/Arvind-Krishna.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Dr-Arvind-Krishna" },
            { id: 72, name: "Dr. Pravin Bhagwat", year: 2019, batch: "BT/CSE/1990", position: "Co-founder and Chairman of Sagacito Technologies", image: "imag/daa/2019/pravin-bhagat-en.jpg", profileUrl: "https://www.iitk.ac.in/dora/profile/dr-Pravin-Bhagwat" },
            { id: 73, name: "Dr. Krishnamurthy V. Subramanian", year: 2019, batch: "BT/EE/1994", position: "Chief Economic Advisor, Government of India", image: "imag/daa/2019/Krishnamurthy V Subramanian.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Prof-K-Subramanian" },
            { id: 74, name: "Mr. Ravindra Kumar Dhariwal", year: 2019, batch: "BT/CHE/1975", position: "Co-founder and Chairman of Sagacito Technologies", image: "imag/daa/2019/ravindra dhariwal.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Mr-Ravindra-Kumar-Dhariwal" },
            { id: 75, name: "Mr. Ajeet Singh", year: 2019, batch: "BT/CHE/1997", position: "Co-founder and Executive Chairman Thoughtspot", image: "imag/daa/2019/Ajeet Singh.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Mr-Ajeet-Singh" },
            { id: 76, name: "Mr. Arun Seth", year: 2019, batch: "BT/EE/1973", position: "Chairman and Co-founder, Global Groupware Solutions, Former Chairman British Telecom and Former Chairman Nasscom Foundation", image: "imag/daa/2019/Ajeet Rohatgi.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Mr-Arun-Seth" },
            { id: 77, name: "Prof. Vijay K. Dhir", year: 2018, batch: "MT/ME/1968", position: "Professor, UCLA", image: "imag/daa/2018/vijay-dhir.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Prof-Vijay-K-Dhir" },
            { id: 78, name: "Prof. Utpal Banerjee", year: 2018, batch: "MSc2/CHM/1979", position: "Professor, UCLA", image: "imag/daa/2018/utpal-banerjee.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Prof-Utpal-Banerjee" },
            { id: 79, name: "Mr. Tej Kohli", year: 2018, batch: "BT/EE/1980", position: "Chairman, Kohli Ventures", image: "imag/daa/2018/tej-kohli.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Tej-Kohli" },
            { id: 80, name: "Mr. Sanjiv Puri", year: 2018, batch: "BT/ME/1985", position: "Managing Director, ITC Ltd", image: "imag/daa/2018/Sanjiv-puri.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Mr-Sanjiv-Puri" },
            { id: 81, name: "Dr. Pramath Raj Sinha", year: 2018, batch: "BT/MME/1986", position: "Founder, Ashoka University", image: "imag/daa/2018/pramath.jpg", profileUrl: "" },
            { id: 82, name: "Mr. Pavan Nigam", year: 2018, batch: "BT/EE/1980", position: "Founding Partner, Inspovation Ventures", image: "imag/daa/2018/pavan-nigam.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Mr-Pavan-Nigam" },
            { id: 83, name: "Prof. G. Ravindra Kumar", year: 2018, batch: "PhD/PHY/1990", position: "Professor, TIFR", image: "imag/daa/2018/G-Ravindra-kumar.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Prof-G-Ravindra-Kumar" },
            { id: 84, name: "Mr. Avnish Bajaj", year: 2018, batch: "BT/CSE/1992", position: "Co-Founder, Matrix Partners", image: "imag/daa/2018/Avnish.png", profileUrl: "https://iitk.ac.in/dora/profile/Mr-Avnish-Bajaj" },
            { id: 85, name: "Prof. Ashvin Vishwanath", year: 2018, batch: "MSc5/PHY/1996", position: "Professor, Harvard University", image: "imag/daa/2018/Ashvin.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Prof-Ashvin-Vishwanath" },
            { id: 86, name: "Mr. Amit Agarwal", year: 2018, batch: "BT/CSE/1995", position: "Country Head, Amazon India", image: "imag/daa/2018/Amit-Agarwal.jpg", profileUrl: "https://iitk.ac.in/dora/profile/amit-agarwal" },
            { id: 87, name: "Prof. Rajeev Alur", year: 2017, batch: "BT/CSE/1987", position: "Zisman Family Professor Department of Computer and Information Science University of Pennsylvania", image: "imag/daa/2017/rajeev-alur.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Prof-Rajeev-Alur" },
            { id: 88, name: "Mr. Rahul Gautam", year: 2017, batch: "BT/CHE/1975", position: "MD, Sheela Foam", image: "imag/daa/2017/rahul-gautam.jpg", profileUrl: "https://iitk.ac.in/dora/profile/rahul-gautam" },
            { id: 89, name: "Prof. Sangram Mudali", year: 2017, batch: "BT/ME/85", position: "Director, NIST", image: "imag/daa/2017/sangram-mudali.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Prof-Sangram-Mudali" },
            { id: 90, name: "Ms. Anjali Joshi", year: 2017, batch: "BT/EE/1981", position: "Board Member Presistent System", image: "imag/daa/2017/anjali-joshi.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Ms-Anjali-Joshi" },
            { id: 91, name: "Prof. Anil K. Jain", year: 2017, batch: "BT/EE/1969", position: "Professor, Michigan University", image: "imag/daa/2017/anil-jain.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Prof-Anil-K-Jain" },
            { id: 92, name: "Mr. Arvind Pradhan", year: 2016, batch: "BT/ME/1974", position: "Chairman and Founder, Camaco LLC", image: "imag/daa/2016/arvind_pradhan.jpg", profileUrl: "https://www.iitk.ac.in/dora/profile/arvind-pradhan" },
            { id: 93, name: "Prof. Anurag Kumar", year: 2016, batch: "BT/EE/1977", position: "Director, IISc", image: "imag/daa/2016/anurag-kumar.jpg", profileUrl: "https://www.iitk.ac.in/dora/profile/prof-anurag-kumar" },
            { id: 94, name: "Mr. Prabhat Singh", year: 2016, batch: "BT/CE/1980", position: "CEO & MD, Petronet LNG", image: "imag/daa/2016/prabhat_singh.jpg", profileUrl: "https://www.iitk.ac.in/dora/profile/prabhat-singh" },
            { id: 95, name: "Mr. R. S. Sharma", year: 2016, batch: "MSC/MTH/1977", position: "Secretary, Deity", image: "imag/daa/2016/RS-Sharma.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Mr-Ram-Sewak-Sharma" },
            { id: 96, name: "Prof. S. K. Lele", year: 2016, batch: "BT/ME/1980", position: "Professor, Stanford University", image: "imag/daa/2016/sanjiv-k-c.jpg", profileUrl: "https://www.iitk.ac.in/dora/profile/Prof-Sanjiva-K-Lele" },
            { id: 97, name: "Mr. V. Agarwal", year: 2016, batch: "BT/EE/1966", position: "Founder & CMD, TA Ltd.", image: "imag/daa/2016/vishnu_Agarwal.jpg", profileUrl: "https://www.iitk.ac.in/dora/profile/vishnu_agarwal" },
            { id: 98, name: "Prof. U. B. Desai", year: 2016, batch: "BT/EE/1974", position: "Director, IIT Hyderabad", image: "imag/daa/2016/u_b_desai.jpg", profileUrl: "https://www.iitk.ac.in/dora/profile/Prof-Uday-B-Desai" },
            { id: 99, name: "Mr. Dheeraj Pandey", year: 2015, batch: "BT/CSE/1997", position: "CEO, Nutanix", image: "imag/daa/2015/dheeraj-pandey.jpg", profileUrl: "https://iitk.ac.in/dora/profile/dheeraj-pandey" },
            { id: 100, name: "Prof. Shiraz N. Minwalla", year: 2015, batch: "MSC/PHY/1995", position: "Professor, TIFR", image: "imag/daa/2015/SHIRAZ.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Prof-Shiraz-Naval-Minwalla" },
            { id: 101, name: "Prof. T. Venkatesan", year: 2015, batch: "MSC/PHY/1971", position: "Director, NUSNNI", image: "imag/daa/2015/THIRUMALAI.jpg", profileUrl: "https://iitk.ac.in/dora/profile/prof-thirumalai-venkatesan" },
            { id: 102, name: "Prof. Veena Sahajwalla", year: 2015, batch: "BT/MME/1986", position: "Scientia Professor, UNSW", image: "imag/daa/2015/veena.jpg", profileUrl: "https://iitk.ac.in/dora/profile/prof-veena-sahajwalla" },
            { id: 103, name: "Mr. Yadupati Singhania", year: 2015, batch: "BT/CE/1977", position: "MD, J. K. Cement ltd", image: "imag/daa/2015/yadupati.jpg", profileUrl: "https://iitk.ac.in/dora/profile/yadupati_singhania" },
            { id: 104, name: "Mr. Sudhir Prasad", year: 2015, batch: "BT/ME/1979", position: "IAS, Jharkhand Govt", image: "imag/daa/2015/Sudhir-Prasad.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Mr-Sudhir-Prasad" },
            { id: 105, name: "Prof. D. D. Sarma", year: 2014, batch: "MSC/PHY/1977", position: "Founder-Chairman, IACS", image: "imag/daa/2014/dipankar.jpg", profileUrl: "https://iitk.ac.in/dora/profile/prof-dipankar-das-sarma" },
            { id: 106, name: "Prof. Jayadev Misra", year: 2014, batch: "BT/EE/1969", position: "Professor, University of Texas", image: "imag/daa/2014/jayasev.jpg", profileUrl: "https://iitk.ac.in/dora/profile/prof-jayadev-misra" },
            { id: 107, name: "Prof. Vijay Kumar", year: 2014, batch: "BT/ME/1983", position: "Dean at the University of Pennsylvania School of Engineering and Applied Science", image: "imag/daa/2014/vijay.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Prof-Vijay-Kumar" },
            { id: 108, name: "Mr. Abhay Singhal", year: 2013, batch: "BT/EE/2001", position: "Co-founder, InMobi Inc", image: "imag/daa/2013/abhay.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Mr-Abhay-Singhal" },
            { id: 109, name: "Mr. Amit Gupta", year: 2013, batch: "BT/ME/2000", position: "VP, InMobi Inc.", image: "imag/daa/2013/amit-gupta.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Mr-Amit-Gupta" },
            { id: 110, name: "Mr. B. K. Shah", year: 2013, batch: "BT/MME/1974", position: "Exec. Director, AIA", image: "imag/daa/2013/bhadesh.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Mr-Bhadresh-K-Shah" },
            { id: 111, name: "Dr. K. K. Sharma", year: 2013, batch: "BT/CHE/1969", position: "MD, Lupin Limited", image: "imag/daa/2013/kk_sharma.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Dr-K-K-Sharma" },
            { id: 112, name: "Prof. Keshav Pingali", year: 2013, batch: "BT/EE/1978", position: "Professor, Uni. of Texas", image: "imag/daa/2013/keshav-pingali.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Prof-Keshav-Pingali" },
            { id: 113, name: "Prof. S. Nigam", year: 2013, batch: "MSC/PHY/1978", position: "Professor, Uni. of Maryland", image: "imag/daa/2013/sumant-nigam.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Prof-Sumant-Nigam" },
            { id: 114, name: "Mr. Naveen Tewari", year: 2013, batch: "BT/ME/2000", position: "Co-founder, InMobi Inc", image: "imag/daa/2013/naveen-tewari.jpg", profileUrl: "https://iitk.ac.in/dora/profile/naveen-tewari" },
            { id: 115, name: "Prof. Jayathi Y. Murthy", year: 2012, batch: "BT/ME/1979", position: "Dean, UCLA Engineering", image: "imag/daa/2012/jayathi.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Dr-Jayathi-Y-Murthy" },
            { id: 116, name: "Prof. R. Agarwal", year: 2012, batch: "BT/CHE/1975", position: "Winthrop E. Stone Distinguished Professor of Chemical Engineering at Purdue University", image: "imag/daa/2012/rakesh.jpg", profileUrl: "https://iitk.ac.in/dora/profile/prof-rakesh-agrawal" },
            { id: 117, name: "Mr. Sunil Singhal", year: 2012, batch: "BT/CHE/1971", position: "President, CST Pvt. Ltd.", image: "imag/daa/2012/sunil-singhal.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Sunil-Singhal" },
            { id: 118, name: "Mr. V. Chanchlani", year: 2012, batch: "MT/IME/1976", position: "Co-founder, Sigma Group", image: "imag/daa/2012/vasudev.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Mr-Vasu-Chanchlani" },
            { id: 119, name: "Mr. Gaurav Gupta", year: 2011, batch: "BT/EE/1987", position: "MD, KSRTC", image: "imag/daa/2011/gaurav.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Mr-Gaurav-Gupta" },
            { id: 120, name: "Dr. Mahesh Gupta", year: 2011, batch: "BT/ME/1975", position: "Chairman, Kent", image: "imag/daa/2011/mahesh.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Dr-Mahesh-Gupta" },
            { id: 121, name: "Mr. BVR M. Reddy", year: 2011, batch: "MT/ME/1974", position: "Founder, Cyient Ltd.", image: "imag/daa/2011/bvr_reddy.jpg", profileUrl: "https://iitk.ac.in/dora/profile/BVR-Mohan-Reddy" },
            { id: 122, name: "Dr. S. P. S. Chauhan", year: 2011, batch: "BT/CHE/1968", position: "Senior Program Director, BMI", image: "imag/daa/2011/satya.jpg", profileUrl: "" },
            { id: 123, name: "Prof. Y. K. Joshi", year: 2011, batch: "BT/ME/1979", position: "Professor, Georgia Tech", image: "imag/daa/2011/yogendra.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Prof-Yogendra-Kumar-Joshi" },
            { id: 124, name: "Prof. S. P. Trivedi", year: 2011, batch: "MSC/PHY/1985", position: "Professor, TIFR.", image: "imag/daa/2011/sandip.jpg", profileUrl: "https://iitk.ac.in/dora/profile/prof-sandip-p-trivedi" },
            { id: 125, name: "Mr. A. K. Chopra", year: 2010, batch: "BT/CHE/1976", position: "Chairman, PetroTel Inc", image: "imag/daa/2010/anil.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Prof-Vijay-K-Dhir" },
            { id: 126, name: "Dr. Anupam Khanna", year: 2010, batch: "BT/EE/1974", position: "CE & DG, NASSCOM", image: "imag/daa/2010/anupam.png", profileUrl: "" },
            { id: 127, name: "Prof. A. K. Ghosh", year: 2010, batch: "MSC/CHM/1981", position: "Professor, Purdue University", image: "imag/daa/2010/arun-ghosh.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Prof-Arun-K-Ghosh" },
            { id: 128, name: "Dr. Rathin Datta", year: 2010, batch: "BT/CHE/1970", position: "Co-founder, Vertec Biosolvents", image: "imag/daa/2010/ratin_dutta.jpg", profileUrl: "" },
            { id: 129, name: "Mr. Sudhakar Kesavan", year: 2010, batch: "BT/CHE/1976", position: "CEO, ICF International", image: "imag/daa/2010/sudhakar.jpg", profileUrl: "" },
            { id: 130, name: "Neera Tandon", year: 2010, batch: "BT/CHE/1981", position: "Co-Owner, Telcom Ventures", image: "imag/daa/2010/Neera-Tandon.jpg", profileUrl: "" },
            { id: 131, name: "Mr. Sudhir Vyas", year: 2010, batch: "BT/EE/1975", position: "Ex. Indian Ambassador", image: "imag/daa/2010/sudhir-vyas.jpg", profileUrl: "https://www.iitk.ac.in/dora/profile/sudhir-vyas" },
            { id: 132, name: "Prof. V. P. Aneja", year: 2010, batch: "BT/CHE/1971", position: "NC State University", image: "imag/daa/2010/vinay.jpg", profileUrl: "" },
            { id: 133, name: "Mr. Vishnu Varshney", year: 2010, batch: "BT/EE/1969", position: "MD & CEO, GVFL Ltd", image: "imag/daa/2010/vishnu.jpg", profileUrl: "" },
            { id: 134, name: "Mr. Muktesh Pant", year: 2010, batch: "BT/CHE/1976", position: "Founder, Micky and Vinita Pant Charitable Foundation", image: "imag/daa/2010/muktesh-pant.jpg", profileUrl: "https://www.iitk.ac.in/dora/profile/Mr-Muktesh-Pant" },
            { id: 135, name: "Prof. Jainendra K. Jain", year: 2010, batch: "MSC/PHY/1981", position: "Professor, Penn State", image: "imag/daa/2010/jainendra-jain.jpg", profileUrl: "https://iitk.ac.in/dora/profile/prof-jainendra-k-jain" },
            { id: 136, name: "Mr. David B.K. Thomas", year: 2010, batch: "BT/ME/1977", position: "Activist", image: "imag/daa/2010/david-thomas.jpg", profileUrl: "" },
            { id: 137, name: "Mr. Devendra Shukla", year: 2009, batch: "BT/CE/1967", position: "Founder, Innovative Tech. Solution", image: "imag/daa/2009/devendra.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Dr-Devendra-Shukla" },
            { id: 138, name: "Prof. S. Jadhav", year: 2009, batch: "BT/PhD/CSE/1989/1995", position: "Professor, RKMV University", image: "imag/daa/2009/shreesh.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Prof-Shreesh-Jadhav" },
            { id: 139, name: "Dr. D. Subbarao", year: 2009, batch: "MSC2/PHY/1972", position: "Ex. Governer, RBI", image: "imag/daa/2009/subbarao.jpg", profileUrl: "https://iitk.ac.in/dora/profile/duvvuri-subbarao" },
            { id: 140, name: "Mr. S. Srivastava", year: 2009, batch: "BT/ME/1977", position: "MD & CEO, Ishan International", image: "imag/daa/2009/shantanu.jpg", profileUrl: "" },
            { id: 141, name: "Prof. Arun Shukla", year: 2009, batch: "BT/ME/1976", position: "Professor, Univ. of Rhode Island", image: "imag/daa/2009/Arun-Shukla.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Prof-Arun-Shukla" },
            { id: 142, name: "Dr. Udai P. Singh", year: 2009, batch: "BT/CE/1972", position: "Secretary General, ACECC", image: "imag/daa/2009/uday-p-singh.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Dr-Udai-P-Singh" },
            { id: 143, name: "Mr. Manoj P. Singh", year: 2009, batch: "BT/EE/1974", position: "University Trustee at Carnegie Mellon University", image: "imag/daa/2009/Manoj-singh.jpg", profileUrl: "" },
            { id: 144, name: "Prof. Ashok Misra", year: 2008, batch: "BT/CHE/1968", position: "Chairman, Intellectual Ventures", image: "imag/daa/2008/ashok-misra.jpg", profileUrl: "" },
            { id: 145, name: "Dr. Ravi Sethi", year: 2008, batch: "BT/ME/1968", position: "Professor, University of Arizona", image: "imag/daa/2008/ravi-sethi.jpg", profileUrl: "" },
            { id: 146, name: "Dr. Jitendra Malik", year: 2008, batch: "BT/EE/1980", position: "Professor, University of California", image: "imag/daa/2008/jitendra-malik.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Prof-Jitendra-Malik" },
            { id: 147, name: "Dr. A. K. Chakraborty", year: 2008, batch: "BT/CHE/1983", position: "Professor, MIT", image: "imag/daa/2008/arup-chakraborty.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Prof-Arup-K-Chakraborty" },
            { id: 148, name: "Mr. Harsh Manglik", year: 2008, batch: "BT/ME/1970", position: "Professor, Carnegie Mellon University) Former Chairman & Geography Managing Director, Accenture-India", image: "imag/daa/2008/harsh-manglik.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Mr-Harsh-Manglik" },
            { id: 149, name: "Mr. Ashok Sinha", year: 2008, batch: "BT/EE/1973", position: "Independent Director, TCS Ltd.", image: "imag/daa/2008/ashok-sinha.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Mr-Ashok-Sinha" },
            { id: 150, name: "Prof. Ashutosh Sharma", year: 2007, batch: "BT/CHE/1982", position: "Secretary, Science & Tech", image: "imag/daa/2007/ashutosh-sharma.jpg", profileUrl: "https://iitk.ac.in/dora/profile/prof-ashutosh-sharma" },
            { id: 151, name: "Mr. Rajiv Chawla", year: 2007, batch: "BT/EE/1984", position: "Secretary, Horticulture Department", image: "imag/daa/2007/rajeev_chawla.jpg", profileUrl: "https://iitk.ac.in/dora/profile/rajiv-chawla" },
            { id: 152, name: "Dr. Rajiv Desai", year: 2007, batch: "BT/ME/1982", position: "CEO, 3Di", image: "imag/daa/2007/rajiv-desai.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Dr-Rajiv-Desai" },
            { id: 153, name: "Mr. N. K. Harihar Kale", year: 2007, batch: "MT/CSE/1976", position: "Founder, Kale Logistics", image: "imag/daa/2007/narendra-kale.jpg", profileUrl: "https://iitk.ac.in/dora/profile/narendra-kumar-harihar-kale" },
            { id: 154, name: "Mr. Ravindra Nath Akhoury", year: 2007, batch: "BT/EE/1968", position: "CEO, MacKay Shields", image: "imag/daa/2007/Ravi-Akhoury.jpg", profileUrl: "https://iitk.ac.in/dora/profile/ravindra-nath-akhoury" },
            { id: 155, name: "Prof. Umesh Mishra", year: 2006, batch: "BT/EE/1979", position: "Professor, University of California", image: "imag/daa/2006/Umesh-Mishra.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Prof-Umesh-K-Mishra" },
            { id: 156, name: "Mr. A. K. Bhushan", year: 2006, batch: "BT/EE/1965", position: "Chairman, Asquare", image: "imag/daa/2006/Abhay-K-Bhushan.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Abhay-K-Bhushan" },
            { id: 157, name: "Mr. Pawan Kumar", year: 2006, batch: "BT/CE/1969", position: "Mentor & Advisor, Angel Investor", image: "imag/daa/2006/Pawan-Kumar.jpg", profileUrl: "" },
            { id: 158, name: "Prof. Vijay Mahajan", year: 2006, batch: "BT/CHE/1970", position: "Professor, University of Texas", image: "imag/daa/2006/Vijay-Mahajan.jpg", profileUrl: "" },
            { id: 159, name: "Mr. Ambuj Goyal", year: 2006, batch: "BT/EE/1978", position: "CEO, Magine TV", image: "imag/daa/2006/Ambuj-Goyal.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Dr-Ambuj-Goyal" },
            { id: 160, name: "Late Prof. Rajiv Motwani", year: 2006, batch: "BT/CSE/1983", position: "Professor, Stanford University", image: "imag/daa/2006/Rajiv-Motwani.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Late-Prof-Rajeev-Motwani" },
            { id: 161, name: "Mr. Pradeep Jotwani", year: 2006, batch: "BT/ME/1975", position: "Board Member, Stanford University", image: "imag/daa/2006/Pradeep-Jotwani.jpg", profileUrl: "" },
            { id: 162, name: "Dr. P. K. Goenka", year: 2005, batch: "BT/ME/1975", position: "MD, Mahindra & Mahindra Ltd.", image: "imag/daa/2005/P-K-Goenka.jpg", profileUrl: "https://iitk.ac.in/dora/profile/dr-pawan-kumar-goenka" },
            { id: 163, name: "Dr. Ajay Kumar", year: 2005, batch: "PHD/AE/1974", position: "DRA, NASA Langley Research Center", image: "imag/daa/2005/Ajay-Kumar.jpg", profileUrl: "" },
            { id: 164, name: "Mr. Suresh Pandey", year: 2004, batch: "BT/MME/1965", position: "Former Director, Bokaro Steel Plant", image: "imag/daa/2004/Suresh-Pandey.jpg", profileUrl: "" },
            { id: 165, name: "Mr. A. Srivastava", year: 2004, batch: "BT/EE/1979", position: "President, EMC Corporation", image: "imag/daa/2004/Amitabh-Srivastava.png", profileUrl: "https://iitk.ac.in/dora/profile/amitabh-srivastava" },
            { id: 166, name: "Late Mr. S. K. Dubey", year: 2004, batch: "BT/CE/1994", position: "Former Dy. GM, NHAI", image: "imag/daa/2004/S-K-Dubey.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Mr-Satyendra-Kumar-Dubey" },
            { id: 167, name: "Dr. Nitin Saxena", year: 2003, batch: "BT/CSE/2002", position: "Professor, IIT Kanpur", image: "imag/daa/2003/Nitin-Saxena.jpg", profileUrl: "https://iitk.ac.in/dora/profile/prof-nitin-saxena" },
            { id: 168, name: "Dr. Neeraj Kayal", year: 2003, batch: "BT/CSE/2002", position: "Researcher, MSR", image: "imag/daa/2003/Neeraj-Kayal.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Dr-Neeraj-Kayal" },
            { id: 169, name: "Mr. M. A. Tambe", year: 2003, batch: "BT/EE/1980", position: "MD, Innomedia Tech.", image: "imag/daa/2003/Mohan-Tambe.png", profileUrl: "" },
            { id: 170, name: "Prof. Manindra Agrawal", year: 2003, batch: "BT/CSE/1986", position: "Professor, IIT Kanpur", image: "imag/daa/2003/Manindra-Agrawal.jpg", profileUrl: "https://iitk.ac.in/dora/profile/prof-manindra-agrawal" },
            { id: 171, name: "Dr. Sandip Tiwari", year: 2003, batch: "BT/EE/1976", position: "Professor, Cornell University", image: "imag/daa/2003/Sandip-Tiwari.jpg", profileUrl: "" },
            { id: 172, name: "Prof. K. VijayRaghavan", year: 2003, batch: "BT/CHE/1975", position: "Principal Scientific Adviser, GoI", image: "imag/daa/2003/K-VijayRaghavan.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Prof-K-VijayRaghavan" },
            { id: 173, name: "Mr. M. B. Lal", year: 2003, batch: "BT/CHE/1969", position: "Technical Member, P&NG", image: "imag/daa/2003/M-B-Lal.jpg", profileUrl: "" },
            { id: 174, name: "Dr. Mriganka Sur", year: 2002, batch: "BT/EE/1974", position: "Director, Simons Center", image: "imag/daa/2002/Mriganka-Sur.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Prof-Mriganka-Sur" },
            { id: 175, name: "Mr. Lalit K. Jalan", year: 2002, batch: "BT/EE/1979", position: "Group Director, Reliance", image: "imag/daa/2002/Lalit-Kumar-Jalan.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Mr-Lalit-Kumar-Jalan" },
            { id: 176, name: "Dr. Ajoy K. Bose", year: 2002, batch: "BT/EE/1971", position: "President, Atrenta Inc", image: "imag/daa/2002/Ajoy-Kumar-Bose.jpg", profileUrl: "" },
            { id: 177, name: "Mr. Deepak Bhagat", year: 2001, batch: "BT/EE/1973", position: "Vice President, SAP", image: "imag/daa/2001/Deepak-Bhagat.jpg", profileUrl: "https://iitk.ac.in/dora/profile/deepak-bhagat" },
            { id: 178, name: "Mr. J. S. Bindra", year: 2001, batch: "BT/CHE/1969", position: "MD & CEO, Caltex Australia Ltd.", image: "imag/daa/2001/J-S-Bindra.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Mr-Jagjeet-Singh-Bindra" },
            { id: 179, name: "Prof. Sartaj K. Sahani", year: 2001, batch: "BT/EE/1970", position: "Professor, University of Florida", image: "imag/daa/2001/Sartaj_Sahni.jpg", profileUrl: "" },
            { id: 180, name: "Dr. Rajendra Singh", year: 2001, batch: "BT/EE/1975", position: "Chairman, Telcom ventures", image: "imag/daa/2001/Rajendra-Singh.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Rajendra-Singh" },
            { id: 181, name: "Mr. Arvind K. Gupta", year: 2001, batch: "BT/EE/1975", position: "Toymaker & Science educator", image: "imag/daa/2001/Arvind-Kumar-Gupta.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Mr-Arvind-Kumar-Gupta" },
            { id: 182, name: "Dr. Pradeep S. Sindhu", year: 2001, batch: "BT/EE/1974", position: "Co-founder, Juniper Network", image: "imag/daa/2001/Pradeep-S-Sindhu.jpg", profileUrl: "https://iitk.ac.in/dora/profile/pradeep-sindhu" },
            { id: 183, name: "Mr. Rakesh Gangwal", year: 2000, batch: "BT/ME/1975", position: "Co-founder, Indigo", image: "imag/daa/2000/Rakesh-Gangwal.png", profileUrl: "https://iitk.ac.in/dora/profile/Mr-Rakesh-Gangwal" },
            { id: 184, name: "Mr. Som Mittal", year: 2000, batch: "BT/MME/1973", position: "Former Chairman, NASSCOM", image: "imag/daa/2000/Som-Mittal.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Mr-Som-Mittal" },
            { id: 185, name: "Prof. A. Jhunjhunwala", year: 2000, batch: "BT/EE/1975", position: "Professor, IIT Madras", image: "imag/daa/2000/Ashok-Jhunjhunwala.png", profileUrl: "https://iitk.ac.in/dora/profile/prof-ashok-jhunjhunwala" },
            { id: 186, name: "Prof. P. Balaram", year: 2000, batch: "MSC2/CHM/1969", position: "Professor, IISc", image: "imag/daa/2000/P-Balaram.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Prof-Padmanabhan-Balaram" },
            { id: 187, name: "Prof. Ashoke Sen", year: 1999, batch: "MSC2/PHY/1978", position: "Professor, Harish Chandra Research Institute", image: "imag/daa/1999/Ashoke-Sen.jpg", profileUrl: "https://iitk.ac.in/dora/profile/prof-ashoke-sen" },
            { id: 188, name: "Mr. S. Srivastava", year: 1999, batch: "BT/ME/1968", position: "Chairman, Computer Associates", image: "imag/daa/1999/Saurabh-Srivastava.png", profileUrl: "https://iitk.ac.in/dora/profile/Mr-Saurabh-Srivastava" },
            { id: 189, name: "Dr. Prabhakar Goel", year: 1999, batch: "BT/EE/1970", position: "Founder & CEO, Gateway Automation Software", image: "imag/daa/1999/Prabhakar-Goel.png", profileUrl: "https://iitk.ac.in/dora/profile/Dr-Prabhakar-Goel" },
            { id: 190, name: "Prof. Arvind", year: 1999, batch: "BT/EE/1969", position: "Professor, MIT", image: "imag/daa/1999/Arvind.jpg", profileUrl: "" },
            { id: 191, name: "Prof. S. Sivaram", year: 1998, batch: "MSC2/CHM/1967", position: "Professor, IISER", image: "imag/daa/1998/Swaminathan-Sivaram.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Dr-Swaminathan-Sivaram" },
            { id: 192, name: "Mr. N. R. Narayana Murthy", year: 1998, batch: "MT/EE/1969", position: "Co-founder, Infosys", image: "imag/daa/1998/N-R-Narayana-Murthy.jpg", profileUrl: "https://iitk.ac.in/dora/profile/sri-narayan-murthy" },
            { id: 193, name: "Prof. Jagdish Narayan", year: 1998, batch: "BT/MME/1969", position: "Professor, Carolina State University", image: "imag/daa/1998/Jagdish-Narayan.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Prof-Jagdish-Narayan" },
            { id: 194, name: "Late Mr. Umang Gupta", year: 1997, batch: "BT/CHE/1971", position: "former Chairman, Keynote Systems", image: "imag/daa/1997/Umang-Gupta.jpg", profileUrl: "https://iitk.ac.in/dora/profile/umang-gupta" },
            { id: 195, name: "Dr. Ashok K. Chandra", year: 1997, batch: "BT/EE/1969", position: "Former Director, IBM Almaden Research Center", image: "imag/daa/1997/Ashok-Kumar-Chandra.jpg", profileUrl: "" },
            { id: 196, name: "Prof. Rakesh K. Jain", year: 1994, batch: "BT/CHE/1972", position: "Professor, Harvard Medical School", image: "imag/daa/1994/Rakesh-K-Jain.jpg", profileUrl: "https://iitk.ac.in/dora/profile/prof-rakesh-k-jain" },
            { id: 197, name: "Dr. Uday Narayan Sinha", year: 1994, batch: "Scientist, CSIR NAL", position: "", image: "imag/daa/1994/uday_narayanan.jpg", profileUrl: "" },
            { id: 198, name: "Late Mr. Anil Agrawal", year: 1991, batch: "BT/ME/1970", position: "Former Director, Centre for Science & Environment", image: "imag/daa/1991/Late-Anil-Agrawal.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Mr-Anil-Kumar-Agarwal" },
            { id: 199, name: "Mr. S. K. Kaura", year: 1989, batch: "BT/EE/1966", position: "Founder, Samtel Group", image: "imag/daa/1989/Satish-Kumar-Kaura.jpg", profileUrl: "https://iitk.ac.in/dora/profile/Mr-Satish-Kumar-Kaura" }
        ];

        const awardsGrid = document.getElementById("awards-grid");
        const searchInput = document.getElementById("search");
        const resultCount = document.getElementById("result-count");
        const activeFilterYear = document.getElementById("active-filter-year");
        const activeFilterSearch = document.getElementById("active-filter-search");
        const activeFilters = document.querySelector(".active-filters");
        const clearAll = document.querySelector(".clear-all");
        let selectedYear = "all";
        let searchTerm = "";
        const baseUrl = "https://iitk.ac.in/dora/";

        function updateFilters() {
            awardsGrid.innerHTML = "";
            let filtered = awards;

            if (selectedYear !== "all") {
                filtered = filtered.filter(award => award.year.toString() === selectedYear);
            }

            if (searchTerm) {
                filtered = filtered.filter(award =>
                    award.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    award.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    award.batch.toLowerCase().includes(searchTerm.toLowerCase())
                );
            }

            filtered.sort((a, b) => b.year - a.year);

            resultCount.textContent = `${filtered.length} recipient${filtered.length !== 1 ? 's' : ''} found`;

            awardsGrid.classList.toggle("single-card", filtered.length === 1);

            activeFilterYear.innerHTML = selectedYear !== "all" ? `Year: ${selectedYear} <span class="remove" data-type="year" aria-label="Remove year filter">×</span>` : "";
            activeFilterSearch.innerHTML = searchTerm ? `Search: "${searchTerm}" <span class="remove" data-type="search" aria-label="Remove search filter">×</span>` : "";

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target.querySelector('img');
                        if (img && img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                        }
                        observer.unobserve(entry.target);
                    }
                });
            }, { rootMargin: '100px' });

            filtered.forEach(award => {
                const card = document.createElement("div");
                card.className = "award-item";
                card.innerHTML = `
                    <div class="profile-card">
                        <img data-src="${award.image?.startsWith('http') ? award.image : baseUrl + award.image}" alt="Portrait of ${award.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/300?text=No+Image'">
                        <div class="card-content">
                            <h3>${award.name}</h3>
                            ${award.batch !== "Unknown" ? `<span class="batch">${award.batch}</span>` : ""}
                            <span class="award-year">Awarded in ${award.year}</span>
                            <p>${award.position || "N/A"}</p>
                            ${award.profileUrl ? `<a href="${award.profileUrl.startsWith('http') ? award.profileUrl : baseUrl + 'profile/' + award.profileUrl}" target="_blank" aria-label="View ${award.name}'s profile">View Profile</a>` : '<div class="button-placeholder"></div>'}
                        </div>
                    </div>
                `;
                awardsGrid.appendChild(card);
                observer.observe(card);
            });
        }

        document.addEventListener("DOMContentLoaded", () => {
            const yearsContainer = document.querySelector('.years');
            const moreYearsContainer = document.querySelector('.more-years');
            const years = [...new Set(awards.map(award => award.year))].sort((a, b) => b - a);
            const recentYears = years.slice(0, 6);
            const olderYears = years.slice(6);

            yearsContainer.innerHTML = `
                <button class="year" data-year="all" aria-label="Show all years">All Years</button>
                ${recentYears.map(year => `<button class="year" data-year="${year}" aria-label="Filter by ${year}">${year}</button>`).join('')}
                ${olderYears.length > 0 ? `<button class="year" data-year="more" aria-label="Show more years" aria-expanded="false">More Years...</button>` : ''}
            `;
            moreYearsContainer.innerHTML = olderYears.map(year => `<button class="year" data-year="${year}" aria-label="Filter by ${year}">${year}</button>`).join('');

            const latestYear = awards.length ? Math.max(...awards.filter(award => award.year).map(award => award.year)).toString() : "all";
            selectedYear = latestYear;
            document.querySelector(`.year[data-year="${latestYear}"]`)?.classList.add("active");
            updateFilters();

            document.querySelectorAll('.year').forEach(button => {
                button.addEventListener("click", () => {
                    const year = button.getAttribute("data-year");
                    if (year === "more") {
                        const moreYears = document.querySelector('.more-years');
                        const isExpanded = !moreYears.classList.contains('hidden');
                        moreYears.classList.toggle('hidden');
                        button.setAttribute('aria-expanded', !isExpanded);
                    } else {
                        selectedYear = year;
                        document.querySelectorAll('.year').forEach(btn => btn.classList.remove('active'));
                        button.classList.add('active');
                        document.querySelector('.more-years').classList.add('hidden');
                        document.querySelector('.year[data-year="more"]')?.setAttribute('aria-expanded', 'false');
                        updateFilters();
                    }
                });
            });

            searchInput.addEventListener("input", () => {
                searchTerm = searchInput.value.trim();
                updateFilters();
            });

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
                        document.querySelector('.year[data-year="more"]')?.setAttribute('aria-expanded', 'false');
                    }
                    updateFilters();
                }
            });

            clearAll.addEventListener("click", () => {
                searchTerm = "";
                searchInput.value = "";
                selectedYear = "all";
                document.querySelectorAll('.year').forEach(btn => btn.classList.remove('active'));
                document.querySelector('.year[data-year="all"]').classList.add('active');
                document.querySelector('.more-years').classList.add('hidden');
                document.querySelector('.year[data-year="more"]')?.setAttribute('aria-expanded', 'false');
                updateFilters();
            });
        });