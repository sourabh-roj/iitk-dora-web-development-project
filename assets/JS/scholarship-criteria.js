const scholarshipData = [
    {
        id: 1,
        name: "Dr. V Rajaraman Scholarship",
        donor: "Mr. Prabhu Goel",
        batch: "BT/EE/1970",
        criteria: "To be awarded to 4th year B.Tech student in the Department of Computer Science and Engineering"
    },
    {
        id: 2,
        name: "Chaudhary Gurmukh Chand and Shrimati Gyanvati Kinra Scholarship",
        donor: "Dr. Vikram K Kinra",
        batch: "BT/ME/1967",
        criteria: "To be awarded to a 1st year UG student of ME department based on MCM-Donor criteria. If the scholarship holder changes the branch of study from ME to some other discipline, s/he will no longer be eligible for the scholarship. CPI of the scholarship holder must not fall below 6.5. If the CPI falls below 6.5, the scholarship may be awarded to the next deserving student in the same batch."
    },
    {
        id: 3,
        name: "ACC Fellowship",
        donor: "ACC Ltd",
        batch: "Non Alumnus",
        criteria: "2nd year M.Sc(Chm) students securing CPI 8.5 or more at the end of the first semester. 5th year M.Sc(Intg.)(Chm) students securing CPI 7 or more at the end of the 7th semester."
    },
    {
        id: 4,
        name: "Pt. Balajee Govind Hardiker Scholarship",
        donor: "Mr. H.B.Hardiker",
        batch: "Ex Employee",
        criteria: "To be awarded to a UG student in 4-year or 5-year program of any department based on lowest TFAI. Student should not be getting any other scholarship."
    },
    {
        id: 5,
        name: "Ram Rajendra Malhotra Educational Society Scholarship",
        donor: "Mr. H.B.Hardiker",
        batch: "Non Alumnus",
        criteria: "To be awarded to 1st year UG students of any department based on lowest TFAI. Student should not be getting any other scholarship. To be decided after MCM scholarships are finalized. Three scholarships."
    },
    {
        id: 6,
        name: "Indian Women's Association Bonn Scholarship",
        donor: "Indian Womens Association",
        batch: "Non Alumnus",
        criteria: "To be awarded to 2nd, 3rd and 4th year students. To be awarded to a 1st year UG student of ME department based on MCM-Donor criteria. If the scholarship holder changes the branch of study from ME to some other discipline, s/he will no longer be eligible for the scholarship. CPI of the scholarship holder must not fall below 6.5. If the CPI falls below 6.5, the scholarship may be awarded to the next deserving student in the same batch."
    },
    {
        id: 7,
        name: "Anil & Reshma Nigam Scholarship",
        donor: "Mr. Anil Nigam",
        batch: "BT/AE/1970",
        criteria: "To be awarded to a 3rd year UG student of the AE department in 4-year or 5-year program based on MCM-Donor criteria."
    },
    {
        id: 8,
        name: "Arakere and Karen Vasudev Scholarship",
        donor: "Prof. Arakere Vasudev",
        batch: "Former Faculty IITK",
        criteria: "To be awarded to a 3rd year UG student (in 4-yr or 5-yr program) of Chemical Engineering department based on the highest CPI at the end of first two years."
    },
    {
        id: 9,
        name: "Govinda & Indira Srikantiah Scholarship",
        donor: "Prof. G.Srikantiah",
        batch: "Non Alumnus",
        criteria: "To be awarded to a 3rd year UG student in 4-year or 5-year program of ME department based on MCM-Donor criteria. CPI at the end of 2nd year is to be used."
    },
    {
        id: 10,
        name: "P D Murti Memorial Scholarship",
        donor: "Mr. Ram Mohan",
        batch: "BT/AE/1970",
        criteria: "To be awarded to a 2nd year UG student of CSE department based on MCM-Donor criteria"
    },
    {
        id: 11,
        name: "Prof. Netar Lal Kapur Scholarship",
        donor: "Mr. Rajan N. Kapur",
        batch: "BT/CE/1975",
        criteria: "To be awarded to a 3rd year UG student in 4-year or 5-year program of any department based on MCM-Donor criteria. CPI at the end of 2nd year to be used."
    },
    {
        id: 12,
        name: "Anurag Bartaria Scholarship",
        donor: "Mr. C.K. Bartaria",
        batch: "Non Alumnus",
        criteria: "To be awarded to a UG student of any year in the MSE department in 4-year or 5-year program, who has the minimum TFAT among all eligible applicants, and who is not a recipient of any other scholarship."
    },
    {
        id: 13,
        name: "Simran & Mandeep Kainth Memorial Scholarship",
        donor: "Dr. G.S.Kainth",
        batch: "Former Faculty",
        criteria: "To be awarded to a 2nd year UG student in 4-year or 5-year program of any department based on MCM-Donor criteria. CPI at the end of 1st year to be used."
    },
    {
        id: 14,
        name: "Vasudeo Laxman Sahasrabuddhe Vaidya Award Scholarship",
        donor: "Mrs. Veena Sahasrabuddhe Prof. H.V. Sahasrabuddhe",
        batch: "Non Alumnus",
        criteria: "To be awarded to UG students in 4-year or 5-year program of any department based on MCM-Donor criteria. Minimum CPI for eligibility is 8.0. Two scholarships, one for 3rd year and one for 4th year students."
    },
    {
        id: 15,
        name: "Neeraj Kapoor Memorial Scholarship",
        donor: "Mrs. Chhaya Rani Kapoor",
        batch: "Non Alumnus",
        criteria: "To be awarded to a 4th year UG student in 4-year or 5-year program of CSE department based on MCM-Donor criteria. CPI at the end of 3rd year to be used."
    },
    {
        id: 16,
        name: "Nita Goyal & Ashish Gupta Scholarship",
        donor: "Ms. Nita Goel, Mr. Ashish Gupta",
        batch: "BT/CSE/1987, BT/CSE/1988",
        criteria: "To be awarded to UG students in 4-year or 5-year program of any department based on MCM-Donor criteria. Four scholarships."
    },
    {
        id: 17,
        name: "Dr. Hari Mohan & Pushpa Srivastava Scholarship",
        donor: "Mr. Amitabh Srivastava",
        batch: "BT/EE/1979",
        criteria: "To be awarded to a 3rd year UG student in 4-year or 5-year program of CSE or EE department based on MCM-Donor criteria. CPI at the end of 2nd year is to be used."
    },
    {
        id: 18,
        name: "Shri Kalp Nath Singh Scholarship",
        donor: "Mr. Manoj Singh",
        batch: "BT/ME/1984",
        criteria: "To be awarded to a 3rd year UG student in 4-year or 5-year program of ME department based on the highest CPI. Name to be recommended by Head, ME."
    },
    {
        id: 19,
        name: "Smt. Durga Devi Memorial Scholarship",
        donor: "Dr. S.K. Durga (Retired Prof.)",
        batch: "Non Alumnus",
        criteria: "To be awarded to a 2nd year UG girl student in 2-year M.Sc. program of chemistry department based on the highest CPI at the end of 1st year. Name to be recommended by Head, CHM."
    },
    {
        id: 20,
        name: "Sri Temasek @ IITK Scholarship",
        donor: "Dr. Murali Damodaran",
        batch: "BT/AE1981",
        criteria: "To be awarded to a UG student of any engineering department based on MCM-Donor criteria."
    },
    {
        id: 21,
        name: "Prof. C.N.R. Rao Science Talent Scholarship",
        donor: "Prof. C.N.R. Rao",
        batch: "Non Alumnus",
        criteria: "To be awarded to a UG student in 4-year or 5-year program of chemistry department based on MCM-Donor criteria."
    },
    {
        id: 22,
        name: "Romesh Chandra Memorial Scholarship",
        donor: "Mr. Tushar Deepak Chandra",
        batch: "BT/CHE/1988",
        criteria: "To be awarded to a 4th year UG student in 4-year or 5-year program of CSE department based on the highest CPI at the end of 3rd year."
    },
    {
        id: 23,
        name: "Shri Jamuna Prasad & Smt. Basanti Gupta Scholarship",
        donor: "Mr. Maini R. Gupta",
        batch: "BT/MME/1971",
        criteria: "To be awarded to any student in MME department"
    },
    {
        id: 24,
        name: "Shanti Devi & Onkar Nath Maewal Memorial Scholarship",
        donor: "Mr. Akhilesh Maewal",
        batch: "BT/ME/1970",
        criteria: "To be awarded to a 3rd year UG girl student of CSE department based on the highest CPI. No limit on TFAI."
    },
    {
        id: 25,
        name: "Smt. Jagat Kaur Memorial Scholarship",
        donor: "Mr. Rajiv singh",
        batch: "BT/ME/1988",
        criteria: "To be awarded to a UG student of any department based on MCM-Donor criteria."
    },
    {
        id: 26,
        name: "Dr. R.C. Srivastava Memorial Scholarship",
        donor: "Himalaya Institute Hospital Trust, Dr. Sheela Srivastava",
        batch: "Non Alumnus",
        criteria: "To be awarded to the best student of MSc( 2nd year) programme in Mathematics and Statistics department."
    },
    {
        id: 27,
        name: "Baljit & Nirmal Dhindsa Scholarship",
        donor: "Mr. Ajit Gill",
        batch: "BT/EE/1969",
        criteria: "One award to a 1st year UG student of BSBE department and one award to a 2nd year UG student of BSBE department based on the highest CPI. No limit on TFAI. Preference to be given to girl students. Names to be recommended by BSBE department. Two awards."
    },
    {
        id: 28,
        name: "Lalit Narain Das Memorial Scholarship",
        donor: "LT. Gen. B.N. Das",
        batch: "Non Alumnus",
        criteria: "To be awarded to B tech final year student of EE department based on CPI"
    },
    {
        id: 29,
        name: "N.S. Rajaraman Scholarship",
        donor: "Mr. Rajmohan Rajaraman",
        batch: "BT/CSE/1991",
        criteria: "To be awarded to a UG student of any department based on MCM-Donor criteria."
    },
    {
        id: 30,
        name: "Smt. Dharam Vati Garg Scholarship",
        donor: "Mr. Avinash Agarwal",
        batch: "BT/EE/1977",
        criteria: "To be awarded to a 4th year UG student in 4-year or 5-year program of any department based on the highest CPI. No limit on TFAI."
    },
    {
        id: 31,
        name: "Bhuwan & Indira Joshi Scholarship",
        donor: "Mr. Vinit Joshi",
        batch: "BT/EE/1977",
        criteria: "To be awarded to a UG student in 4-year or 5-year program of any department based on MCM-Donor criteria."
    },
    {
        id: 32,
        name: "K.N. Saluja Scholarships",
        donor: "Mr. Hersh Saluja",
        batch: "Non Alumnus",
        criteria: "To be awarded to UG students in 4-year or 5-year program of CE department based purely on merit. Eight scholarships, 2 each for 1st year, 2nd year, 3rd year, and 4th year batches. CPI at the end of previous year to be used. For the 1st year students, CPI at the end of 1st semester may be used."
    },
    {
        id: 33,
        name: "Sagnik Asis Ray Scholarship",
        donor: "Mr. Ashish Ray",
        batch: "BT/MME1981",
        criteria: "To be awarded to a 4th year UG student in 4-year or 5-year program of BSBE department based on MCM-Donor criteria. Preference to be given to a student working on cancer related project. Head, BSBE will recommend the name of the student."
    },
    {
        id: 34,
        name: "BGM Kumar Foundation Scholarship",
        donor: "Mr. Birendra Kumar",
        batch: "BT/ME/1976",
        criteria: "The following eligibility/selection criteria shall apply for awarding the three scholarships: An undergraduate (UG) student of any department or year is eligible, The Total Family Annual Income of the student from all sources shall be less than 1.5 lacs, A student who qualifies for free-tuition will NOT be eligible for these scholarships, and Preference shall to be given to girl students."
    },
    {
        id: 35,
        name: "Sri Singhasan Singh Scholarship",
        donor: "Mr. Manoj. K",
        batch: "BT/ME/1984",
        criteria: "To be awarded to a 3rd year UG student in 4-year or 5-year program of EE department based on the highest CPI. Name to be recommended by Head, EE."
    },
    {
        id: 36,
        name: "Shri Bishamber Gupta and Smt. Anguri Gupta Scholarship",
        donor: "Mr. Satish Gupta",
        batch: "BT/EE/1977",
        criteria: "To be awarded to a 3rd year UG student in 4-year or 5-year program of EE department based on MCM-Donor criteria."
    },
    {
        id: 37,
        name: "Protima Ghosh Memorial Scholarship",
        donor: "Mr. Ranodeb Roy",
        batch: "BT/CSE/1990",
        criteria: "To be awarded to a UG student of any department based on MCM-Donor criteria."
    },
    {
        id: 38,
        name: "Jasmine & Mohiuddin Merit Scholarship",
        donor: "Mr. Mohiuddin Golam",
        batch: "MSc2/Stat/1992",
        criteria: "To be awarded to a 2nd yearUG student in 2-year M.Sc. program of Mathematics and Statistics department based on CPI at the end of 1st year. Name to be recommended by the Mathematics and Statistics department."
    },
    {
        id: 39,
        name: "Bimlavati & Nawal Kishore Kap TSr Scholarship",
        donor: "Mr. Deepak Kapur",
        batch: "BT/EE/1971",
        criteria: "To be awarded to a 3rd year UG girl student in 4-year or 5-year program of BSBE or CSE department based on MCM-Donor criteria."
    },
    {
        id: 40,
        name: "Mona & Paramjit Singh Scholarship",
        donor: "Mr. Ajit Gill",
        batch: "BT/EE1969",
        criteria: "To be awarded to UG students in 4-year or 5-year program of the BSBE department based on the highest CPI. No limit on TFAI. Two scholarships, one for 3rd year student and one for 4th year student. Names to be recommended by Head, BSBE. Preference to be given to girl students."
    },
    {
        id: 41,
        name: "Mathur Brother's UG Scholarship",
        donor: "Mr. Atul K. Mathur",
        batch: "BT/AE/1984",
        criteria: "To be awarded to a 1st year UG student of any department based on JEE-AIR. The student should be of General Category and must have studied in non-English medium school."
    },
    {
        id: 42,
        name: "Harish & Sushila Chandra Scholarship",
        donor: "Mr. Ashok K. Chandra",
        batch: "BT/EE/1969",
        criteria: "To be awarded to a UG student in 4-year or 5-year program of EE or CSE department based on MCM-Donor criteria."
    },
    {
        id: 43,
        name: "Lt. Bishwanath Jha Scholarship",
        donor: "Mr. Nirmal Jha",
        batch: "BT/EE/1977",
        criteria: "To be awarded to a UG student in 4-year or 5-year program of any department based on MCM-Donor criteria."
    },
    {
        id: 44,
        name: "Shiv Kumari Shukla Scholarship",
        donor: "Mr. Devendra Shukla",
        batch: "BT/CE/1967",
        criteria: "To be awarded to a UG girl student in 4-year or 5-year program of any department based on MCM-Donor criteria."
    },
    {
        id: 45,
        name: "Dr. K P Gupta Scholarship",
        donor: "Mr. Shantanu Gupta",
        batch: "BT/EE/1986",
        criteria: "To be awarded to a 3rd year UG student in 4-year or 5-year program of MSE department based on MCM-Donor criteria. CPI at the end of 2nd year is to be used."
    },
    {
        id: 46,
        name: "Indradhanush Scholarship",
        donor: "Mr. Rohit Verma",
        batch: "BT/MME/1990",
        criteria: "To be awarded to a UG student in 4-year or 5-year program of any department based on MCM-Donor criteria and other activities e.g. sports, extra-curricular activities, cultural, debate/quiz, etc. * Please see file for more details."
    },
    {
        id: 47,
        name: "Mr. Nitish V. Thakor Scholarship",
        donor: "Mr. Nitish V Thakor",
        batch: "Non Alumnus",
        criteria: "To be awarded to a 1st year UG student in 4-year or 5-year program of BSBE department based on MCM-Donor criteria. SPI at the end of 1st semester to be used."
    },
    {
        id: 48,
        name: "Mahesh & Shashi Chandra Scholarship",
        donor: "Mr. Manish Chandra",
        batch: "BT/CSE/1987",
        criteria: "To be awarded to a UG student in 4-year or 5-year program of any department based on MCM-Donor criteria."
    },
    {
        id: 49,
        name: "Pushpa Garg Scholarship",
        donor: "Mrs. Ewa and Atul Garg",
        batch: "BT/EE/1979",
        criteria: "For the best incoming sports person. All 1st year UG students in 4-year or 5-year programs are eligible. The Chairman, Sports Committee will recommend the name to SSPC."
    },
    {
        id: 50,
        name: "Sudarshan Kasturia Memorial Scholarship",
        donor: "Mr. Sanjay Kasturia/ Ms Anjali Joshi",
        batch: "BT/EE/1981",
        criteria: "To be awarded to a UG student of any department based on academic excellence, demonstrated leadership in coordinating a team effort on a project beyond the basic curricular e.g. robotics, cultural act., community services, athletics, etc."
    },
    {
        id: 51,
        name: "Swaminathan & Garg Scholarship",
        donor: "Mr. Sanjay Garg",
        batch: "BT/AE/1980",
        criteria: "To be awarded to UG student in 4-year or 5-year program of any department based on MCM-Donor criteria. Four scholarships, one each for 1st, 2nd, 3rd, and 4th year students."
    },
    {
        id: 52,
        name: "Kunta Jha Scholarship",
        donor: "Mr. Saroj Jha",
        batch: "BT/CE/1986",
        criteria: "To be awarded to a UG student in 4-year or 5-year program of any department based on MCM-Donor criteria."
    },
    {
        id: 53,
        name: "Sri Vinay Kumar Kapoor and Smt. Sudha Kapoor Memorial Scholarship",
        donor: "AIM FOR SEVA (Mr. Arun Kumar Kapoor)",
        batch: "BT/ME/1967",
        criteria: "To be awarded to a UG student in 4-year or 5-year program of any department based on MCM-Donor criteria."
    },
    {
        id: 54,
        name: "Bhagwan Das Kapoor and Smt. Padma Kapoor Memorial Scholarship",
        donor: "AIM FOR SEVA (Mr. Arun Kumar Kapoor )",
        batch: "BT/ME/1967",
        criteria: "To be awarded to a UG student in 4-year or 5-year program of any department based on MCM-Donor criteria and involvement in community services."
    },
    {
        id: 55,
        name: "Seema Jain Scholarship",
        donor: "Prof. Sudhir K Jain",
        batch: "Non Alumnus",
        criteria: "To be awarded to a 2nd year UG girl student in 2-year M.Sc. program of chemistry department based on the highest CPI at the end of 1st year."
    },
    {
        id: 56,
        name: "Shri. D P Shukla Scholarship",
        donor: "Mr. Devendra K. Shulka",
        batch: "BT/CE/1967",
        criteria: "To be awarded to a UG student in 4-year or 5-year program of any department based on MCM-Donor criteria."
    },
    {
        id: 57,
        name: "Tapan Kumar & Swapna bandopadhyay Scholarship",
        donor: "Mr. Subhajyoti Bandyopadhyay",
        batch: "BT/EE/1991",
        criteria: "To be awarded to UG student in 4-year or 5-year program of any department based on MCM-Donor criteria."
    },
    {
        id: 58,
        name: "Aedunuthula Prasad Memorial Scholarship",
        donor: "Mr. Rama Koteswar Rao Aedunuthula Smt. Sarojini Mattegunta",
        batch: "Non Alumnus",
        criteria: "To be awarded to a 4th year UG student of the Chemical Engineering department in 4-year or 5-year program based on the highest CPI at the end of 6th semester."
    },
    {
        id: 59,
        name: "Sri. Raj Nath Singh Scholarship",
        donor: "M/s Freddie MAC Foundation U ( Mr. Manoj Singh )",
        batch: "BT/ME/1984",
        criteria: "To be awarded to a 4th year UG student in 4-year or 5-year program of ME department based on the highest CPI at the end of 3rd year."
    },
    {
        id: 60,
        name: "Khem Chandra Yadav Scholarships",
        donor: "Late Dr. Ranjit Singh",
        batch: "BT/MME/1965",
        criteria: "To be awarded to UG students in 4-year or 5-year program of any department based on MCM-Donor criteria. Two scholarships."
    },
    {
        id: 61,
        name: "Yashodha Yadav Scholarship",
        donor: "Late Dr. Ranjit Singh",
        batch: "BT/MME/1965",
        criteria: "To be awarded to a UG student in 4-year or 5-year program of any department based on MCM-Donor criteria."
    },
    {
        id: 62,
        name: "Neta Ji Balwan Singh Scholarship",
        donor: "Late Dr. Ranjit Singh",
        batch: "BT/MME/1965",
        criteria: "To be awarded to UG students in 4-year or 5-year program of any department based on MCM-Donor criteria. Two scholarships."
    },
    {
        id: 63,
        name: "Ramesh Chandra Yadav Scholarship",
        donor: "Late Dr. Ranjit Singh",
        batch: "BT/MME/1965",
        criteria: "To be awarded to UG students of 2-year M.Sc. program of any department based on MCM-Donor criteria. Two scholarships."
    },
    {
        id: 64,
        name: "Sarpanch Salik Ram Katiyar Scholarship",
        donor: "Late Dr. Ranjit Singh",
        batch: "BT/MME/1965",
        criteria: "To be awarded to UG students in 4-year or 5-year program of any department based on MCM-Donor criteria. Two scholarships."
    },
    {
        id: 65,
        name: "Guru Ji Ghashit Ram Scholarship",
        donor: "Late Dr. Ranjit Singh",
        batch: "BT/MME/1965",
        criteria: "To be awarded to a UG student in 4-year or 5-year program of any department based on MCM-Donor criteria. Two scholarships, one for 2nd year and one for 3rd year students based on past year performance."
    },
    {
        id: 66,
        name: "Prof. M. M. Hasan Memorial Scholarship",
        donor: "Family & Friends of Prof. MM Hasan",
        batch: "Family & Friends",
        criteria: "To be awarded to a 1st year UG student of EE department based on MCM-Donor criteria."
    },
    {
        id: 67,
        name: "Srikant Mishra Memorial Scholarship",
        donor: "Mr. Shrikant Mishra Dr. Sobi pandey",
        batch: "Family & Friends",
        criteria: "To be awarded to a UG student in 2-year M.Sc. program of Physics department based on MCM-Donor criteria."
    },
    {
        id: 68,
        name: "Shiv Prakash & Dayawanti Sharma Memorial Scholarship",
        donor: "Mr. Satish Sharma",
        batch: "BT/CHE/1966",
        criteria: "To be awarded to a UG student in 4-year or 5-year program of CHE, EE, or ME department based on MCM-Donor criteria."
    },
    {
        id: 69,
        name: "Shri Shankar Lal & Smt Prema Devi Agarwal Memorial Scholarship",
        donor: "Mr. Sharwan Kumar Agarwal",
        batch: "BT/EE/1967",
        criteria: "To be awarded to a UG student in 4-year or 5-year program of any department based on MCM-Donor criteria."
    },
    {
        id: 70,
        name: "Khem Chand Memorial Scholarship",
        donor: "Mr. Sarwan Kumar",
        batch: "BT/AE/1975",
        criteria: "To be awarded to a UG student in 4-year or 5-year program of any department based on MCM-Donor criteria."
    },
    {
        id: 71,
        name: "Dr. M. Anantaswamy and Mrs. Vijayalakshmi Rau Scholarship",
        donor: "Mr .Pradeep A Rau",
        batch: "BT/MME/1972",
        criteria: "To be awarded to a UG student in 4-year or 5-year program of any department based on MCM-Donor criteria."
    },
    {
        id: 72,
        name: "S.C. Mehrotra's Scholarship",
        donor: "Mr. Subhash Chand Mehrotra",
        batch: "Non Alumnus",
        criteria: "To be awarded to a 2nd year UG student of CE department based on MCM-Donor criteria."
    },
    {
        id: 73,
        name: "Tarun Sondhi Memorial Scholarship",
        donor: "Mr. Vipin Sondhi",
        batch: "BT/ME/1978",
        criteria: "To be awarded to a UG student in 4-year or 5-year program of any department based on MCM-Donor criteria. Preference to be given to UG students of ME department."
    },
    {
        id: 74,
        name: "Bihari Lal & Nalini Srivastava Memorial Scholarship",
        donor: "Mr. Chandra Mohan Srivastava",
        batch: "BT/CHE/1960",
        criteria: "To be awarded to a UG student in 4-year or 5-year program of any department based on MCM-Donor criteria."
    },
    {
        id: 75,
        name: "Anita and Santosh Mehra Scholarship",
        donor: "Mr. Santosh Mehra",
        batch: "BT/EE/1966",
        criteria: "To be awarded to a 3rd year UG student of the EE department in 4-year or 5-year program based on the highest CPI. No limit on TFAI."
    },
    {
        id: 76,
        name: "Shanti & Ramkishore Sahai Saxena Memorial Scholarship",
        donor: "Mr. Ashokand Madhu Saxena",
        batch: "BT/ME/1970",
        criteria: "To be awarded to a 1st year UG student of any department based on JEE-AIR."
    },
    {
        id: 77,
        name: "S YJakatdar Memorial Scholarship",
        donor: "Mr. Vidula S Jakatdar",
        batch: "BT/EE/1979",
        criteria: "To be awarded to final year UG students of ME based on recommendation of Head of the Department of ME.Preference should be given to a student specializing in Automotive Engineering."
    },
    {
        id: 78,
        name: "Saraswati Singh Scholarship",
        donor: "Mr. Manoj K Singh",
        batch: "BT/ME/1984",
        criteria: "To be awarded to a 4th year UG student in 4-year or 5-year program of EE department based on MCM-Donor criteria."
    },
    {
        id: 79,
        name: "Dr. R.K.Singhal Memorial Scholarship",
        donor: "Prof. Sanjay Mittal",
        batch: "BT/AE/1988",
        criteria: "To be awarded to a 3rd year UG student in 4-year or 5-year program of BSBE department based on MCM-Donor criteria."
    },
    {
        id: 80,
        name: "Bhagavatula Project Scholarship",
        donor: "Mr. Ravi S. Bhagavatula",
        batch: "Msc/Phy/1989",
        criteria: "Best projesct will be selected by the Physics Department(MSc student) at the end of the project course and sent to the SSPC committee for further action."
    },
    {
        id: 81,
        name: "Vimal Madan Memorial Scholarship",
        donor: "Ms. Suarhaa Monica Banerjee",
        batch: "Non Alumnus",
        criteria: "To be awarded to a UG student in 4-year or 5-year program of CSE department. The scholarship to be decided in the following order of priority: A physically handicapped student irrespective of gender or TFAI. A girl student based on the lowest TFAI. Any student based on MCM-Donor criteria if no student in either (1) or (2) above is available/ suitable. Name to be recommended by Head, CSE."
    },
    {
        id: 82,
        name: "Steel Scholarship",
        donor: "Dr. B. Deo (MSE)",
        batch: "Non Alumnus",
        criteria: "Steel Research Scholarship is for one student with the highest cumulative grade point average among graduating students who carried out a B.Tech. project on process metallurgy of steel making. If no candidate is found suitable in process metallurgy, then students working on physical metallurgy of steel, and mechanical metallurgy of steel with the highest cumulative grade point average among graduating students may be considered."
    },
    {
        id: 83,
        name: "Smt Padmavathy & Prof R Sankar Scholarship",
        donor: "Mr. Sri Ram Sankar",
        batch: "BT/CS/1983",
        criteria: "To be awarded to a 2nd year UG student in 2-year M.Sc. program of Chemistry, Mathematics & Statistics, or Physics department based on MCM-Donor criteria."
    },
    {
        id: 84,
        name: "Class of 1984 Scholarship",
        donor: "Class of 1984",
        batch: "Class of 1984",
        criteria: "To be awarded to UG students in 4-year or 5-year program based on MCM-Donor criteria and involvement in extra-curricular activities. Four scholarships, one each for each batch (i.e. 1st, 2nd, 3rd, and 4th year students). Students in the fifth year of 5-year programs are not eligible to receive the scholarship. To be decided by an SSPC appointed committee. Applicants may be interviewed, if needed. A student selected in any year continues to get the scholarship unless s/he fails to meet any of the MCM-Donor criteria, in which case the scholarship may be given to the next deserving student in the same batch."
    },
    {
        id: 85,
        name: "Babu Ram Jain & Mrs. Shanti Jain Memorial Scholarship",
        donor: "Dr. Ashok Jain",
        batch: "M.Tech/Civil/1971",
        criteria: "To be awarded to a 1st year UG student of any engineering department based on the lowest TFAI. The student should not be getting any other scholarship."
    },
    {
        id: 86,
        name: "Elizabeth and Dr. Verkey Cherian Scholarship",
        donor: "Mr. Cherian Mathew",
        batch: "BT/CSE/2008",
        criteria: "To be awarded for the best student project based on impact it had on the campus, during convocation."
    },
    {
        id: 87,
        name: "Prof. Girdhar Gopal Shukla Memorial Scholarship",
        donor: "Mr. Ashish Shukla",
        batch: "M.SC.5Year/Math/1997",
        criteria: "To be awarded to UG students in 2-year M.Sc. program of Mathematics and Statistics department based on MCM-Donor criteria. Two scholarships, one each for 1st and 2nd year students."
    },
    {
        id: 88,
        name: "Smt. Neela Dutt Scholarship",
        donor: "Mr. Saibal Dutt",
        batch: "BT/EE/1977",
        criteria: "To be awarded to a UG student in 4-year or 5-year program of any department based on MCM-Donor criteria."
    },
    {
        id: 89,
        name: "Shri R & R Chari Scholarship",
        donor: "Mr. Rangarajan VR",
        batch: "BT/EE/1990",
        criteria: "To be awarded to a UG student of any department based on MCM-Donor criteria."
    },
    {
        id: 90,
        name: "Dr.K.C Saronwala memorial Scholarship",
        donor: "Mr. Anupam Saronwala",
        batch: "BT/EE/1980",
        criteria: "To be awarded to a UG student in 4-year or 5-year program of any department based on MCM-Donor criteria."
    },
    {
        id: 91,
        name: "Shri Ranbir and Shrimati Maha devi Chauhan Scholarship",
        donor: "Mr. Satya P Chauhan",
        batch: "BT/CHE/1968",
        criteria: "To be awarded to a 3rd year or 4th year UG student in 4-year or 5-year program of CHE department based on MCM-Donor criteria. Name to be recommended by Head, CHE."
    },
    {
        id: 92,
        name: "Ram Parkash Chopra Memorial Scholarship",
        donor: "Mr. Ravi Chopra Mr. Sandeep Chopra",
        batch: "BT/MME/1985 BT/EE/1993",
        criteria: "To be awarded to all undergraduate students from each batch of engineering departments. Who are not receiving any other Scholarship MCM."
    },
    {
        id: 93,
        name: "Nirmala & Ashok Keshri Scholarship",
        donor: "Mr. Piyush Keshri",
        batch: "BT/EE/2009",
        criteria: "To be awarded to a 4th year UG student in 4-year or 5-year program of any department based on MCM-Donor criteria."
    },
    {
        id: 94,
        name: "Swami Sivananda Memorial Scholarship",
        donor: "Divine Life Society Garhwal Uttarakhand",
        batch: "Non Alumnus",
        criteria: "To be awarded to UG student in 4-year or 5-year program of any department based on MCM-Donor criteria. Four scholarships, one each for 1st, 2nd, 3rd, and 4th year students."
    },
    {
        id: 95,
        name: "Srimati Bhagwati Rameshwar Goyal Scholarship",
        donor: "Mr. Ashok Kumar Goyal",
        batch: "BT/ME/1972",
        criteria: "To be awarded to a 2nd year UG girl student in 4-year or 5-year program of BSBE or ME department based on MCM-Donor criteria. Minimum CPI of 7.5 is needed to be eligible."
    },
    {
        id: 96,
        name: "Sandeep & Vinita Agarwal Scholarship",
        donor: "Mr. Sandeep Agarwal",
        batch: "BT/CHE/1988",
        criteria: "To be awarded to a 1st year UG student in 4-year program of any department based on MCM-Donor criteria."
    },
    {
        id: 97,
        name: "Bhagwan Das Sanghi Memorial Scholarship",
        donor: "Family of Late B.D. Sanghi",
        batch: "",
        criteria: "To be awarded to a 2nd year UG girl student in the BS program of the Mathematics & Statistics department based on the highest CPI at the end of 1st year including summer. The scholarship to be decided after the branch changes have been carried out in the beginning of 3rd semester."
    },
    {
        id: 98,
        name: "Dr. Prateek Mishra Memorial Scholarship",
        donor: "Family and Friends of Prateek Mishra",
        batch: "BT/EE/2005",
        criteria: "To be awarded to a 2nd year UG student of EE department based on CPI at the end of 1st year."
    },
    {
        id: 99,
        name: "PSB Prasad Memorial Scholarship",
        donor: "Ms. Rekha Rani Prasad",
        batch: "Non Alumnus",
        criteria: "To be awarded to a UG student in 2-year M.Sc. program of Physics department OR a UG student in 4-year/5-year program of EE department based on MCM-Donor criteria."
    },
    {
        id: 100,
        name: "Smt. Shyam Lata Garg Scholarship",
        donor: "Mr. Ashutosh Garg",
        batch: "BT/ChE/1974",
        criteria: "To be awarded to the most-needy UG female student in 4-year or 5-year program of any department based on MCM norms if the student is in top 10% of class."
    },
    {
        id: 101,
        name: "Smt. Shanti Devi Garg Scholarship",
        donor: "Mr. Ashutosh Garg",
        batch: "BT/ChE/1974",
        criteria: "To be awarded to the most-needy UG female student in 4-year or 5-year program of any department based on MCM norms if the student is in top 25% of class."
    },
    {
        id: 102,
        name: "Shree Anand Swaroop Garg Scholarship",
        donor: "Mr. Ashutosh Garg",
        batch: "BT/ChE/1974",
        criteria: "To be awarded to the most-needy UG male student in 4-year or 5-year program of any department based on MCM norms if the student is in top 15% of class."
    },
    {
        id: 103,
        name: "Shree Ramjee Lal Garg Scholarship",
        donor: "Mr. Ashutosh Garg",
        batch: "BT/ChE/1974",
        criteria: "To be awarded to the most-needy UG male student in 4-year or 5-year program of any department based on MCM norms if the student is in top 50% of class."
    },
    {
        id: 104,
        name: "Shrimati Madhuri Dubey Scholarship",
        donor: "Mr. Ajay Dubey",
        batch: "BT/CHE/1980",
        criteria: "To be awarded to any UG or PG student of any department based on MCM-Donor criteria. Two scholarships."
    },
    {
        id: 105,
        name: "Shrimati Vidyawati Dubey Scholarship",
        donor: "Mr. Ajay Dubey",
        batch: "BT/CHE/1980",
        criteria: "To be awarded to any UG or PG student of any department based on MCM-Donor criteria."
    },
    {
        id: 106,
        name: "Mahabala Rajaraman Scholarship",
        donor: "Mr. Ashok Shah",
        batch: "BT/EE/1970",
        criteria: "To be awarded to a 3rd year UG student in 4-year or 5-year program of CSE or EE department based on MCM-Donor criteria."
    },
    {
        id: 107,
        name: "Jayalakshmi Scholarship",
        donor: "Mr. Krishnan Venkatraman",
        batch: "BT/EE/1975",
        criteria: "To be awarded to any UG female student of any department based on MCM-Donor criteria."
    },
    {
        id: 108,
        name: "Gyanvati & Kamta Prasad Memorial Scholarship",
        donor: "Mr. Hemant Gupta",
        batch: "BT/EE/1980",
        criteria: "To be awarded to 1st year B.Tech student female from any discipline or program based on MCM-donor criteria."
    },
    {
        id: 109,
        name: "Sengupta Grant Scholarship",
        donor: "Mr. Swapan Sengupta",
        batch: "MT/CE/2015",
        criteria: "The grant shall be for Rs. 3,500/- per month (for 10 months) for supporting contingency expenses for equipment, books, and miscellaneous items for carrying out research based on the following criteria/conditions: M.Tech. students of Civil Engineering Department with specialization in Structural Engineering are eligible. The scholarship will be given to a student at the start of 2nd year of his/her M. Tech. program. The student must fulfill MCM criteria of IIT Kanpur. For selection, means-centric MCM ranking procedure is to be used."
    },
    {
        id: 110,
        name: "B P Srivastava Scholarship",
        donor: "Dr. Ramesh Chandra Srivastava",
        batch: "Retired faculty",
        criteria: "To be awarded to any B.Tech/BS/M.Sc (2nd year) student satisfying the MCM donor criteria."
    },
    {
        id: 111,
        name: "Director's Scholarships",
        donor: "Group of donors through fundraising drive",
        batch: "",
        criteria: "To be awarded to any UG student from any discipline or program whose parental income is less than 1 lakh."
    },
    {
        id: 112,
        name: "Smt.Saroja Krishnan Scholarship",
        donor: "Shri Kannan Krishnan",
        batch: "",
        criteria: "To be awarded to first year UG girl student from an economically backward family, based on MCM donor criteria."
    },
    {
        id: 113,
        name: "Class of 1990 Scholarship",
        donor: "1990 Batch",
        batch: "",
        criteria: "to be awarded to A)1st year UG student of any discipline or program, parental income Rs.5 lakh or more, based on MCM criteria. B) 1st year UG student of any discipline or program, parental income above 1 lakh but below 5 lakhs, based on means through out of his/her four year academic tenure. C)1 year UG student any discipline or program, parental income less than 1 lakh, based on means through out of his/her four year academic tenure. D)1st year UG female student any discipline or program, any parental income, based on MCM criteria."
    },
    {
        id: 114,
        name: "R K Gupta Scholarship",
        donor: "Mr. R K Gupta",
        batch: "",
        criteria: "To be awarded to first year UG student of any discipline based on annual family income above 5 lakhs. If the selected student fails to maintain his/her academic performance (as per the institute norms) at the end of 1st,2nd and/or 3rd years, the scholarship will be re-awarded to a 1st year student for the next four years subject to that student maintaining academic standards as per institute norms."
    },
    {
        id: 115,
        name: "Combined Scholarship Scheme for UG Students",
        donor: "1971 Batch Fund 1974 Batch Fund 1975 Batch Fund 1978 Batch Fund 1985 Batch Fund",
        batch: "",
        criteria: "Annual family income criteria to be considered between 1-9 Lakhs."
    },
    {
        id: 116,
        name: "1966 Batch Opportunity School Scholarship",
        donor: "1966 Batch",
        batch: "",
        criteria: ""
    },
    {
        id: 117,
        name: "M A Pai Undergraduate Scholarship",
        donor: "Mr. Vijay Vittal",
        batch: "",
        criteria: "To be awarded to UG student of EE department with power option based on MCM donor criteria."
    },
    {
        id: 118,
        name: "Shri Ram Sahai Agarwal Scholarship",
        donor: "Mr. Alok Agarwal",
        batch: "BT/EE/1979",
        criteria: "To be awarded to UG girl student of any discipline or program based on MCM criteria."
    },
    {
        id: 119,
        name: "Smt. Vidyawati Agarwal Scholarship",
        donor: "Mr. Alok Agarwal",
        batch: "BT/EE/1979",
        criteria: "To be awarded to UG girl student of any discipline or program based on MCM criteria."
    },
    {
        id: 120,
        name: "Smt Tara Ghate's Scholarship",
        donor: "Mr. Alok Agarwal",
        batch: "BT/EE/1979",
        criteria: "To be awarded to UG girl student of any discipline or program based on MCM criteria."
    },
    {
        id: 121,
        name: "Prof. Sanjeev K Agarwal Scholarship",
        donor: "Alumni of IITK, family and friends",
        batch: "",
        criteria: "To be awarded to students in all years of Btech program of CSE. For student in 3rd semester and above."
    },
    {
        id: 122,
        name: "Mrs. Ratna Kaushik and Dr. Bhooshan lal Scholarship",
        donor: "Mrs. Ratna Kaushik & Dr. Bhooshan lal",
        batch: "",
        criteria: "To be awarded to UG 1st year student preferably B. Tech (parental income less than 1 lakh) based on MCM donor criteria."
    },
    {
        id: 123,
        name: "Class of 1968 Scholarship",
        donor: "1968 Batch",
        batch: "",
        criteria: "The scholarships will be given to UG students from any discipline across all 4 years based on means, whose total annual family income is between Rs. 1.0 Lakhs to Rs. 9.0 Lakhs. Eligible students will be ranked as per total annual parental income, and students with the least total annual parental income (amongst the category of students whose total annual parental income is between Rs. 1.0 Lakhs to Rs. 9.0 Lakhs, will be awarded the scholarship."
    },
    {
        id: 124,
        name: "Neelam and Anil Singh Scholarship",
        donor: "Mr. Atul Singh",
        batch: "",
        criteria: "To be awarded to one UG student in CSE or CE department in his first or second year of study based on MCM criteria. This scholarship is meant only for 1st and 2nd year UG student for only one year and not for all the four consecutive years. Each year one new student will be selected based on eligibility criteria."
    },
    {
        id: 125,
        name: "Rajendra Rathore Memorial Scholarship",
        donor: "Friends and family of Lt.Rajendra Rathore",
        batch: "",
        criteria: "To be awarded to 2nd year MSc student of the Chemistry department graduating their 1st year, based on CPI and financial need."
    },
    {
        id: 126,
        name: "Neela Namjoshi Scholarship",
        donor: "Mr. Alok Agarwal",
        batch: "BT/EE/1979",
        criteria: "To be awarded to UG girl student of any discipline or program based on CPI and MCM criteria."
    },
    {
        id: 127,
        name: "Pramodini Agarwal Scholarship",
        donor: "Mr. Alok Agarwal",
        batch: "BT/EE/1979",
        criteria: "To be awarded to UG girl student of any discipline or program based on CPI and MCM criteria."
    },
    {
        id: 128,
        name: "Class of 1973 Merit Cum Means Scholarship",
        donor: "1973 pass out batch",
        batch: "",
        criteria: "To be awarded to UG students in 4 year or 5 year program of any Department based on MCM donor criteria."
    },
    {
        id: 129,
        name: "Avijit Lal Memorial Scholarship",
        donor: "Family and Friends of Late Avijit Lal",
        batch: "",
        criteria: "To be awarded to a 1st year B.Tech student(fresh entrant) based on AIR score and family income less than Rs 6 lakhs."
    },
    {
        id: 130,
        name: "Ravi and Rohini Sakhuja Project Scholarships",
        donor: "Ravinder Kumar Sakhuja",
        batch: "BT/ME/1966",
        criteria: "2 nos awarded to 2nd year and 2 nos. for 3rd year ME students based on CPI of previous year.(min CPI 7.0)"
    },
    {
        id: 131,
        name: "Shobha Memorial Scholarship",
        donor: "Dr.Ashok K Jain",
        batch: "(M.Tech/PhD/Civil/1971/78)",
        criteria: "To be awarded to one female undergraduate student, based on merit and family income. The student should be with lowest family income and also she should not receive any other scholarship or any other assistantship in the institute."
    },
    {
        id: 132,
        name: "Yadupati Singhania Memorial Scholarship",
        donor: "J K Cement Ltd",
        batch: "",
        criteria: "1. Five scholarships of Rs.1,00,000/- may be instituted for 1st year B.Tech student(Fresh Entrant) of Civil Engineering Department based on AIR score. 2. The scholarship of Rs.1,00,000/- granted to the student in the First year may be continued in the Second year subject to the student maintaining a CPI of 7.5 and good conduct. In case this student ceases to be eligible, the scholarship may be awarded to the needy student in the same batch based on family income with minimum CPI requirement. 3. The scholarship of Rs.1,00,000/- granted to the student in the Second year may be continued in the third year subject to the student maintaining a CPI of 7.5 and good conduct. In case this student ceases to be eligible, the scholarship may be awarded to the needy student in the same batch based on family income with minimum CPI requirement. 4. The scholarship of Rs.1,00,000/- granted to the student in the Third year may be continued in the fourth-year subject to the student maintaining a CPI of 7.5 and good conduct. In case this student ceases to be eligible, the scholarship may be awarded to the needy student in the same batch based on family income with minimum CPI requirement."
    },
    {
        id: 133,
        name: "Sandeep and Shruti Gupta Talent Scholarship",
        donor: "Mr.Sandeep Gupta",
        batch: "(M.Tech/ME/1999)",
        criteria: "To be awarded to one female student of 1st year UG Engineering, based on JEE AIR. The family income of the student should be between 5 lakhs to 10 lakhs and also she should not receive any other scholarship or additional funding."
    },
    {
        id: 134,
        name: "Tower Research Scholarship",
        donor: "",
        batch: "",
        criteria: "To be awarded to two students from CSE Department on the basis of HOD's recommendations."
    },
    {
        id: 135,
        name: "Arish Ali Scholarship",
        donor: "Mr.Arish Ali",
        batch: "BT/EE/1996",
        criteria: "Open to UG students of all departments to make it more competitive. (BTech/BS/Dual Degree).To be awarded to the students who have ideas for development with innovation and leading potentially to a business with innovative content, any 3rd and 4th year UG student, or a group of UG students doing a UGP/BTP project are eligible for consideration."
    },
    {
        id: 136,
        name: "Smt.Savitridevi Memorial Scholarship",
        donor: "Mr.Sudhir Mittal",
        batch: "BT/CHE/1970",
        criteria: "1) To be awarded to a Second Year Female UG Student (B Tech/BS) of any department having highest CPI in First year, and family income less than Rs 6 lacs. 2) The Scholarship of Rs 50,000/- granted to the student in the Second year may be continued till the end of her B Tech/BS program subject to the student maintaining a minimum CPI of 6.5 and good conduct. In case the student ceases to be eligible, the scholarship may be awarded to a new female student as per 1 above."
    },
    {
        id: 137,
        name: "Vishesh Panjabi Memorial Scholarship",
        donor: "Family and Friends",
        batch: "",
        criteria: "To be awarded to UG (B.Tech) student of Any Engineering department with family income less than 1 Lakh rupees and CPI 6.5. To the student who is involved in any community service is desirable."
    },
    {
        id: 138,
        name: "Bhawani Shankar Meena Memorial Scholarship",
        donor: "2000 batch",
        batch: "",
        criteria: "1)To be awarded to Second year UG (B.Tech) student of Civil engineering department with family income less than 1 Lakh rupees and CPI 6.5 2) The scholarship granted to the student in the Second year may be continued in the third year subject to the student maintaining a CPI of 6.5 and good conduct. In case this student ceases to be eligible, the scholarship may be awarded to the needy student in the same batch based on family income with minimum CPI requirement. 3).The scholarship granted to the student in the Third year may be continued in the Fourth-year subject to the student maintaining a CPI of 6.5 and good conduct. In case this student ceases to be eligible, the scholarship may be awarded to the needy student in the same batch based on family income with minimum CPI requirement."
    },
    {
        id: 139,
        name: "Shri Nathmal Kanodia Memorial Scholarship",
        donor: "Mr. Mayank Kanodia",
        batch: "(BT/CE/2001)",
        criteria: "To be awarded to any UG student (BT/BS Program) in their 2nd year or 3rd year. Open to all departments & Minimum CPI: 8.Criteria for family income will be followed as per the Donor-MCM norms of the Institute."
    },
    {
        id: 140,
        name: "Mrs. Nirmal Kumari Gaur Scholarship",
        donor: "Prof. Rita Pandey",
        batch: "(PhD/HSS/1985)",
        criteria: "1st year female student of UG Program (BT/BS) based on AIR and family income. Criteria for family income will be followed as per the Donor-MCM norms of the Institute."
    },
    {
        id: 141,
        name: "Bachi Devi Rawat Memorial Scholarship",
        donor: "Dr. Shishpal S. Rawat",
        batch: "(BT/EE/1979)",
        criteria: "1st year UG students of BT/BS Program, any department based on AIR and family income. Same student continues to get the scholarship for 4 years of the UG program provided he/she maintains minimum CPI 6 or else the scholarship may be given to the next deserving student in the same batch. Bachi Devi Rawat Memorial Scholarship of Rs. 2 lakhs for students with family income Rs. 5 to 9 lakhs."
    },
    {
        id: 142,
        name: "Bright Minds Scholarships",
        donor: "Lokvir Kapoor",
        batch: "(BT/ME/1987)",
        criteria: "Students who figure in Top 100 of all India rankings of JEE Advanced joining IITK from academic year 2021-22. Students from B.Tech/B.S. Program & will be open to all departments. The selected students will be given the scholarship for all 4 years of UG Program provided they maintain a minimum CPI of 8.0. The scholarship covers the full tuition fees, hostel and mess fees, books, medical insurance and other living fees."
    },
    {
        id: 143,
        name: "Satish and Kamlesh Agarwal Scholarship, Houston Texas, USA",
        donor: "Mr. Satish Agarwal from Houston, Texas, USA",
        batch: "Non-alumnus",
        criteria: "Undergraduate students of B.Tech program, from any department and any year will be eligible. The scholarship will be awarded to needy students with annual family income up to Rs. 6 lakhs."
    },
    {
        id: 144,
        name: "Mallampati Bala Kishore Memorial Scholarship",
        donor: "Dr. Virajith Jalaparti",
        batch: "(BT/CSE/2009)",
        criteria: "To be awarded to any 2nd year UG student (B.Tech/BS Program) with family income up to Rs. 9 lakh and with minimum CPI 8."
    },
    {
        id: 145,
        name: "Batch of 1965 Scholarship",
        donor: "Batch of 1965",
        batch: "Batch of 1965",
        criteria: "To be awarded to UG students of 4-year B. Tech program based on merit cum means (CPI above 6.5 and family income till 9 lacs) and participation in extracurricular activities. *One scholarship of Rs 100,000 be earmarked for each year (i.e., 1st, 2nd, 3rd, and 4th year students). A student selected in any year continues to get the scholarship unless he/she fails to meet any of criteria. * At any given time not more than one scholarship to be awarded in the same engineering discipline viz., Aeronautical, Chemical, Civil, Electrical, Mechanical and Metallurgical. * The Scholarship granted to the student in the first year will be based on merit cum means (AIR score and family income till 6.5 lacs). It may be continued till the end of his B. Tech program subject to the student maintaining a minimum CPI of 6.5 and good conduct. * In case a student ceases to be eligible, the scholarship may be awarded to the next deserving student in the same batch."
    },
    {
        id: 146,
        name: "Pawan Tewari Goldman Sachs Scholarships",
        donor: "Mr. Pawan Tewari",
        batch: "BT/EE/1988",
        criteria: "4-year BT/BS students of IIT Kanpur of all departments will be eligible. At least 4 scholarships will be earmarked for female students. Scholarships will be given from their 2nd year and will continue up to their 4th year provided they fulfil the minimum CPI of 6 according to MCM (Merit cum means) norms of the institute. Any subsequent amendments to the MCM norms by the Institute will be considered accordingly. If any of the student recipients fails to fulfil the CPI criteria of 6.0 in their 3rd and 4th year according to the MCM norms of the institute, then the scholarship will be awarded to the next eligible student of the same batch."
    },
    {
        id: 147,
        name: "Kedar Singh Rawat Memorial Scholarship",
        donor: "Dr. Shishpal S. Rawat",
        batch: "(BT/EE/1979)",
        criteria: "1st year UG students of BT/BS Program, any department based on AIR and family income. Same student continues to get the scholarship for 4 years of the UG program provided he/she maintains minimum CPI 6 or else the scholarship may be given to the next deserving student in the same batch. Kedar Singh Rawat Memorial Scholarship of Rs. 1 lakh for students with family income Rs 1 to 5 lakhs."
    },
    {
        id: 148,
        name: "Ravi and Rohini Sakhuja MCM Scholarship",
        donor: "Ravinder Kumar Sakhuja",
        batch: "(BT/ME/1966)",
        criteria: "To be awarded to the students who have ideas for development with innovation for potentially leading to a business with innovative content"
    },
    {
        id: 149,
        name: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)",
        donor: "Shraman Foundation",
        batch: "//",
        criteria: "Students who are already receiving full scholarships available through various government schemes, private organizations and donor-sponsored scholarships will not be eligible for the support from Shraman Foundation."
    },
    {
        id: 150,
        name: "Yuva Scholarship",
        donor: "Yuva Unstoppable",
        batch: "//",
        criteria: "TFAI: 1to 5LPA Percentage in 12th Class > 80%"
    },
    {
        id: 151,
        name: "Shri Mohan Shetye Excellence Scholarship",
        donor: "Dr. Tara Behrend",
        batch: "//",
        criteria: "1. An all-rounder B.Tech. student of the Mechanical Engineering Department. 2. 2nd year student with minimum 8.0 CPI 3. Total Annual Family income between Rs.5-9 Lakhs"
    },
    {
        id: 152,
        name: "Kashinath Jagdish Prashad Shakuntala Mittal Memorial Scholarship",
        donor: "Mr. P. K. Mittal",
        batch: "B.Tech/ME/1970",
        criteria: "BT/BS students of any department with a CPI of 6 in the first year, with a total family income of up to Rs 5 Lacs. First preference will be given to female students. Only Students who don't have received any other scholarship, will be eligible to get this scholarship."
    },
    {
        id: 153,
        name: "Karandikar Student Scholarship",
        donor: "Mr. Ashish Karandikar",
        batch: "B.Tech/EE/1995",
        criteria: "UG students from Electrical Engineering departments would be eligible for application Students with a total family income of less than 8 lacs per annum"
    },
    {
        id: 154,
        name: "Madan Mohan Singhal Memorial Scholarship",
        donor: "Mr. Arun Singhal",
        batch: "BT/CHE/1997",
        criteria: "2nd year UG students of B.Tech./BS Program from any department based on CPI & Family income. Same student continues to get the scholarship for the rest of the UG Program provided he/she maintains minimum CPI 6 or else the scholarship may be given to the next deserving student in the same batch Family income up to 9 lakhs."
    },
    {
        id: 155,
        name: "Satish and Kamlesh Agarwal CSE Scholarship, Houston, Texas, USA",
        donor: "Mr. Satish Agrawal",
        batch: "//",
        criteria: "Undergraduate students of 2nd, 3rd, and 4th year of B.Tech. program at the Department of Computer Science & Engineering will be eligible. The scholarship will be awarded to students with annual family income up to Rs. 9 lakhs. A minimum CPI of 6.0 will be considered for application and final selection will be based on CPI."
    },
    {
        id: 156,
        name: "Pritam Lal Shakuntla Rawal Memorial Scholarship",
        donor: "Mr. Rakesh Rawal",
        batch: "BT/ME/1978",
        criteria: "Any UG students, preference to Mechanical Engineering students. Students in 1st year can apply. The student will receive support for 4 years, consecutively, provided the recipients demonstrate progress in their grades each year. Scholarship will be offered to students with a total family income between Rs. 6 Lacs to 9 Laos."
    },
    {
        id: 157,
        name: "Trilok Chandra Mittal Memorial Scholarship",
        donor: "Mr. Sudhir Mohan Mittal",
        batch: "B.Tech/CHE/1970",
        criteria: "1. At the end of the first year, a female UG student of any department with CPI minimum of 7.5 in the first year is eligible, 2. Total family income of student must be below Rs. 8 Lacs. 2. Students who have not received any other scholarship. 3. Amount of each scholarship will be Rs. 50000/-per year."
    },
    {
        id: 158,
        name: "Dilip Nigam Memorial Scholarship",
        donor: "",
        batch: "B.Tech/EE/1976",
        criteria: "1st Year, UG students of any department would be eligible to apply for the scholarship. Students with a total family income of up to 9 lacs/year to receive the scholarship. The selected student will receive support for 4 consecutive years. To retain the scholarship throughout their UG, students must maintain a CPI of 6."
    }
];

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

function renderTable(data) {
    const tbody = document.getElementById("scholarshipBody");
    const resultsCount = document.getElementById("resultsCount");
    const noResults = document.getElementById("noResults");

    tbody.innerHTML = "";
    if (data.length === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
        data.forEach((scholarship, index) => {
            const row = document.createElement("tr");
            row.className = "group";
            row.innerHTML = `
                <td class="sno">${index + 1}</td>
                <td><div class="scholarship-name">${scholarship.name}</div></td>
                <td><div class="donor">${scholarship.donor}</div></td>
                <td><span class="batch">${scholarship.batch}</span></td>
                <td><div class="criteria">${scholarship.criteria}</div></td>
            `;
            tbody.appendChild(row);
        });
    }

    resultsCount.textContent = `Showing ${data.length} of ${scholarshipData.length} scholarships`;
}

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");

    function filterData() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredData = searchTerm
            ? scholarshipData.filter(
                  (scholarship) =>
                      scholarship.name.toLowerCase().includes(searchTerm) ||
                      scholarship.donor.toLowerCase().includes(searchTerm) ||
                      scholarship.batch.toLowerCase().includes(searchTerm) ||
                      scholarship.criteria.toLowerCase().includes(searchTerm)
              )
            : scholarshipData;
        renderTable(filteredData);
    }

    searchInput.addEventListener("input", debounce(filterData, 300));
    renderTable(scholarshipData);
});