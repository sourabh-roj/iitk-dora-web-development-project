const awards = [
    { id: 1, awardName: "Cadence Gold, Silver Medal", benefactor: "Cadence Design Systems (India) Pvt. Ltd.", criteria: "To be awarded to the best 2-year M.Tech graduating student of CSE or EE department. The thesis should involve either innovation or treatment of a new technology or substantial improvement upon an existing technology. The student should not have taken longer than two years to complete the program." },
    { id: 2, awardName: "Dr. Shankar Dayal Sharma Medal", benefactor: "Mrs. Vimala Sharma", criteria: "Best all-round M.Tech./MBA/M.Des./M.S. by Research/Ph.D./M.Sc.-PhD dual degree graduating student based on general proficiency including character and conduct and excellence in academic performance, extra-curricular activities, and social service." },
    { id: 3, awardName: "Motorola Gold Medal", benefactor: "Motorola India Ltd", criteria: "For outstanding all-round achievement among graduating students in 4-year/5-year programs of CSE and EE departments. The performance in the UG part as defined in the parent department template is to be considered for the 5-year program students. The students of 5-year program admitted in year y will be competing with those in 4-year program admitted in year y+1. Names to be recommended by the CSE and EE departments." },
    { id: 4, awardName: "Prof. Adidam Sri Ranga Sai Gold Medal", benefactor: "Family & Friends (Civil Engineering Department)", criteria: "To be awarded for outstanding academic performance in the area of Structural Engineering on the basis of CPI in the course work. For all graduating 2-year M.Tech students of Civil Engineering department. Name to be recommended by CE department based on the recommendations of a duly constituted committee." },
    { id: 5, awardName: "Prof. Adidam Sri Ranga Sai Memorial Medal for All Rounder Excellence in Civil Engineering", benefactor: "Mrs. J.J. Adidam", criteria: "The top 5 students according to the CPI will be eligible for consideration for the award. Minimum CPI will be 7.5." },
    { id: 6, awardName: "Prof. Bal Deva Upadhyaya Gold Medal", benefactor: "Prof. G.S Upadhyaya", criteria: "The best graduating student in M.Tech./M.S. by Research programs of the MSE department with thesis in the area of physical metallurgy/material processing. To be selected by the MSE department." },
    { id: 7, awardName: "Sangeeta Pradhan Memorial Medal", benefactor: "Mr. Anil Kumar Pradhan", criteria: "Outstanding all-round achievement among the graduating students of the M.Sc. (2-Year) program." },
    { id: 8, awardName: "Amit Saxena Memorial Award", benefactor: "Mr. K. B. Saxena", criteria: "The best 4th year UG student of EE department having the highest CPI in the courses related to electronics circuits. The performance in the UG part as defined in the EE department template is to be considered for the 5-year program students. Name to be recommended by the EE department." },
    { id: 9, awardName: "Dr. Sangeeta Goyal Memorial Award", benefactor: "Mr. Bimal Prakash Agarwal", criteria: "First year UG girl student having the highest JEE-AIR." },
    { id: 10, awardName: "O P Bajaj Memorial Award", benefactor: "Mrs. Saroj Bajaj", criteria: "The best 4th year UG student in the ME department having the highest CPI at the end of 3rd year. The performance in the UG part as defined in the ME department template at the end of 3rd year is to be considered for the 5-year program students. Name to be recommended by the ME department." },
    { id: 11, awardName: "Jayesh Memorial Award", benefactor: "Class of 1988", criteria: "The 4th year UG student or a group of students of the ME department having the best performance in a UG project. The UG project work must have been carried out over at least two regular ambientali to be eligible for the award. The UGPs should be UGP-2 and UGP-3 and not the extra credit courses (UGP-1 and UGP-4). Name(s) to be recommended by the ME department." },
    { id: 12, awardName: "N. Balakrishnan Award in Statistics", benefactor: "Dr. N. Balakrishnan", criteria: "For the best final year M.Sc. (2-year) Statistics student. Name to be recommended by the Mathematics and Statistics department." },
    { id: 13, awardName: "Prof. J. N. Kapur Prizes", benefactor: "Mathematical Sciences Trust Society New Delhi", criteria: "All M.Sc. (2 year), 4-year, and 5-year UG program students who secured at least one A-grade in Mathematics Department course and have a CPI greater than 7.5 are eligible for the prize. The Mathematics and Statistics department will constitute a committee to decide this prize. The committee may conduct a written test, use merit, and/or interview the candidates to select the prize winners." },
    { id: 14, awardName: "Prof. Vijay Mahajan Award", benefactor: "Prof. Vijay Mahajan", criteria: "Graduating MBA student with the highest CPI." },
    { id: 15, awardName: "Aviation Development Awards", benefactor: "President Aircraft Operators and Allied Services Association of India, Kolkata", criteria: "B.Tech/B.Tech-M.Tech dual degree AE 3rd year student." },
    { id: 16, awardName: "Dr. S.D. Bokil Memorial Prize", benefactor: "Civil Engineering Department IITK", criteria: "Graduating M.Tech student in Environmental Engineering and Management Programme with highest CPI in the graduating class. Only those graduating with a CPI of 8.0 or above would be eligible. (In case of a tie two prizes may be awarded and the Department of CE may provide the fund for the additional prize if required)." },
    { id: 17, awardName: "IEEE,PEDES' 96 Award", benefactor: "Prof. S.S.Murthy IIT Delhi on behalf of IEEE/ PEDES'96", criteria: "M.Tech- EE final year student. The head of EE department will recommend the name of one student for this award." },
    { id: 18, awardName: "Gold medal to best all rounder girl student of two years Master's Programme", benefactor: "Prof. P.K. Kalra", criteria: "Best all rounder graduating girl student of two year Master's programme." },
    { id: 19, awardName: "Bhagwani Devi Maheshwari Gold Medal", benefactor: "Prof. S.N. Maheshwari", criteria: "Graduating B.Tech/M.Sc(Intg.). Girl student with academic excellence, social awareness, leadership qualities and extracurricular involvement." },
    { id: 20, awardName: "Banco Foundation Prize", benefactor: "Banco Foundation", criteria: "The best academic performance in 4-year/5-year programs of the ME department. The performance in the UG part as defined in the ME department template is to be considered for 5-year program students. The students of 5-year program admitted in year y will be competing with those in 4-year program admitted in the year y+1." },
    { id: 21, awardName: "Shri Ratan Swarup Memorial Prize", benefactor: "Mr. Ratan Swaroop", criteria: "Best all rounder among students graduating in all 4 year/5-year programs. The students of 5-year program admitted in year y will be competing with those in 4-year program admitted in year y+1." },
    { id: 22, awardName: "Shri Shridhar Memorial Award", benefactor: "Mr. G.C. Srivastava", criteria: "All girl students admitted to the 1st year B.Tech/M.Sc(Intg.) programme through JEE." },
    { id: 23, awardName: "Ajay Agarwal Memorial Prize", benefactor: "Mr. R. C. Agarwal", criteria: "The best 4th year UG student of Chemical Engineering department having the highest CPI at the end of 3rd year. The performance in the UG part as defined in the Chemical Engineering department template at the end of 3rd year is to be considered for the 5-year program students. Name to be recommended by the Chemical Engineering department." },
    { id: 24, awardName: "Prof. M.G. Fontana Prize", benefactor: "Institute money (Account I)", criteria: "To be awarded to the best graduating student of MSE department in 4-year or 5-year program based on CPI. The performance in the UG part as defined in the MSE department template is to be considered for the 5-year program students. The awardee must have taken a course in corrosion. To be selected by the MSE department." },
    { id: 25, awardName: "Sri Binay Kumar Sinha Award", benefactor: "Mr. Suyash Sinha", criteria: "For the best UG project of any department that has industrial applicability and partially/completely solves a problem affecting the common people." },
    { id: 26, awardName: "Swastika Dwivedi Gargi Award", benefactor: "Mr. Kamlesh Dwivedi", criteria: "The best 4th year UG female student of any engineering department having the highest CPI at the end of 3rd year. The performance in the UG part as defined in the department template at the end of 3rd year is to be considered for the 5-year program students. Names to be recommended by the departments. Three awards." },
    { id: 27, awardName: "Kritika Dwivedi Maitreyi Award", benefactor: "Mr. Kamlesh Dwivedi", criteria: "The best 4th year UG female student of any engineering department having the highest CPI at the end of 3rd year. The performance in the UG part as defined in the department template at the end of 3rd year is to be considered for the 5-year program students. Names to be recommended by the departments. Three awards." },
    { id: 28, awardName: "Anamika Dwivedi Lilavati Award", benefactor: "Mr. Kamlesh Dwivedi", criteria: "The best 4th year UG female student of any engineering department having the highest CPI at the end of 3rd year. The performance in the UG part as defined in the department template at the end of 3rd year is to be considered for the 5-year program students. Names to be recommended by the departments. Three awards." },
    { id: 29, awardName: "Mehta M.Tech. Gold Medal", benefactor: "Dr. Gurmukh D. Mehta", criteria: "The award will be primarily based on the cumulative course performance of the graduating 2-year M.Tech student in Mechanical Engineering. A student should complete the academic requirements in 4 semesters, and have a CPI of at least 9.5. To be selected by the ME department." },
    { id: 30, awardName: "Best Software Award", benefactor: "Prof. Pankaj Jalote", criteria: "Graduating student or a group of students of any discipline. The software developed could be a part of a UG project or any other course project." },
    { id: 31, awardName: "Trilok Chandra Goel Memorial Gold Medal for Ecological Sustainability", benefactor: "Mr. Sudhanshu Goel", criteria: "All graduating students - Projects and published papers that contribute to economic growth with a sustainable future by helping conserve energy and/or water resources." },
    { id: 32, awardName: "Mrs. & Mr. S. N. Mittal Memorial Gold Medal", benefactor: "Prof. Ashok K. Mittal", criteria: "Best all rounder among graduating students in M.Tech or MBA programs of IME department. To be selected by the IME department." },
    { id: 33, awardName: "Prof Burton J Moyer Memorial Gold Medal", benefactor: "Dr. G.N. Rao", criteria: "To be awarded to a student of any science department in the MS program. The award is based on the highest CPI and the student must be graduating with the batch in the same year. Name to be recommended by the department." },
    { id: 34, awardName: "Prof. Putcha Venkateshwarlu Memorial Gold Medal", benefactor: "Dr. G.N. Rao", criteria: "To be awarded to a student of any department in the 4-year B.Tech and B.S. programs. The award is based on the highest CPI and the student must be graduating within the batch in the same year. If the student selected for this award is also selected for the President's Gold Medal, this award may be given to the next eligible student based on the highest CPI." },
    { id: 35, awardName: "Skylark Award", benefactor: "Class of 2008 (BSBE)", criteria: "To be awarded to any 3rd/4th year undergraduate, irrespective of his/her CPI, from any department can apply. Preference will be given to those who haven't earned any scholarship during their tenure at IITK. Any new initiative or logical implementation of existing initiative in any field, not limited to scientific, social, academic, entrepreneurial, artistic or sports, will be awarded." },
    { id: 36, awardName: "Suman Gupta Gold Medal", benefactor: "Prof. S.K. Gupta", criteria: "For the best graduating student of 4-year or 5-year program in the Mathematics & Statistics department based on the highest CPI. The performance in the UG part as defined in the mathematics department template is to be considered for 5-year program students. The students of 5-year program admitted in year y will be competing with those in 4 year program admitted in year y+1." },
    { id: 37, awardName: "Bhagavatula Project Award", benefactor: "Mr. Ravi S. Bhagavatula", criteria: "Best project work among all graduating 4-year/5-year program students in the Physics department. The project work must have been carried out over at least two regular semesters to be eligible for the award. To be selected by the Physics department." },
    { id: 38, awardName: "Dr. Elizabeth & Dr. Varkey Cherian Award", benefactor: "Mr. Cherian Mathew", criteria: "Best project with impact on the campus community. Nominations (maximum two per department) will be sought from the departments with UG programs. A selection committee appointed by SSPC will select the recipient. The award amount will be handed over to the student around the convocation time." },
    { id: 39, awardName: "Lalit Kishore Chaudhary Memorial Award", benefactor: "Mr. Khairati Lal Chaudhary", criteria: "All ME students with Best Research Paper in Peer Reviewed Scientific Journal." },
    { id: 40, awardName: "Bogineni Chenchu Rama Naidu Merit Award", benefactor: "Mr. Bogineni Chenchu Rama Naidu", criteria: "Final year with highest CPI, M.Tech students of MSP department." },
    { id: 41, awardName: "Kunwar Devendra Pratap Singh & Kunwarani Krishna Kumari Memorial Award", benefactor: "Mr. Anil Kumar Singh", criteria: "Best UG project by graduating 4-year/5-year program student of AE department. The UG project must have been carried out over at least two regular semesters to be eligible for the award. The students of 5-year program admitted in year y will be competing with those in 4-year program admitted in year y+1. To be selected by the AE department." },
    { id: 42, awardName: "Smt. Shailja Srivastava Memorial Award", benefactor: "Mr. Puneet Prakash", criteria: "Meritorious non-doctoral student entering in final year either IME or Maths & Stats. The award will be given to these departments in alternate years." },
    { id: 43, awardName: "Student Innovation Award", benefactor: "DORA & DORD, IIT Kanpur", criteria: "For the best innovative project in path breaking technology of global importance in any domain. Innovation which is of social relevance in any domain. The idea proposed can be a part of the UG Project/M.Tech./Ph.D./M.Des./MSR Individual Project under the guidance of a faculty member of IIT Kanpur. If it is a team project, the award money to be equally distributed. Award to be given for the graduating students. Two awards." },
    { id: 44, awardName: "Dr. Prateek Mishra Memorial Gold Medal", benefactor: "Dr. R. N Mishra (Family)", criteria: "Top student of the 4-year/5-year programs in EE department in the graduating class. The performance in the UG part as defined in the EE department template is to be considered for 5-year program students. The students of 5-year program admitted in year y will be competing with those in 4-year program admitted in year y+1." },
    { id: 45, awardName: "Late C. L. Jain Most Innovative B. Tech Project Award", benefactor: "Mr. Ajay Mohan Jain", criteria: "Most innovative B.Tech project. B.Tech graduating student." },
    { id: 46, awardName: "Bhagwan Das Sanghi Memorial Gold Medal", benefactor: "Family of Late BD Sanghi", criteria: "To the best graduating student in the 5-year program with BT/BS in any department and MS in Mathematics, subject to the CPI being a minimum of 8.0 in both UG and PG parts. Name to be recommended by department(s)." },
    { id: 47, awardName: "Ranjan Kumar Memorial Award", benefactor: "Friends Of Late Ranjan Kumar", criteria: "Best socially relevant project by any graduating student(s). The project work must have been carried out at IIT Kanpur (project done at other organizations during internships are not eligible). In case the best project was carried out by a group of students, the award amount shall be equally divided amongst all graduating students in the group. Any student or faculty of IIT Kanpur can nominate project(s) for this award." },
    { id: 48, awardName: "Smt. Shashi Pundir Memorial Medal", benefactor: "Prof. B.P. Pundir", criteria: "For the best graduating 2-year M.Tech or MS by Research student of the ME Department, whose thesis area/topic of research broadly encompasses thermal/fluid sciences and transport phenomenon. S/he should have a CPI of 8.0 or above. To be selected by the ME department." },
    { id: 49, awardName: "Dr. Vishwanath Bajpayi Memorial Gold Medal", benefactor: "Late Prof. V.N. Bajpai Mrs. Ila Bajpai", criteria: "Best thesis of the graduating M.Tech./MS by Research student of the Department of Earth Sciences. To be selected by the Earth Sciences department." },
    { id: 50, awardName: "Pratibha Eaton Award", benefactor: "Eaton Corporation", criteria: "Female students from AE, ME, EE, Energy Science & Engineering, System & Control Engineering pursuing a masters/dual degree. Students should be in their 1st year of the Master's degree or their 4th year in case of a dual degree student." },
    { id: 51, awardName: "L.P. Singh Power System Engineering Award", benefactor: "Dr. Kailash Nath Srivastava", criteria: "Based on research work carried out for M.Tech thesis to be evaluated by a Committee to be consisted by the Department of EE." },
    { id: 52, awardName: "Radhabhai Vasudev Navelkar Award", benefactor: "Mr. Vasudev Navelkar", criteria: "The award will be given to the graduating girl student in 2-year M.Tech program of CSE department with the highest CPI." },
    { id: 53, awardName: "Prof. R. K. Jain Award", benefactor: "Dr. Malai Subbhia Dr. G.P Youvaraj", criteria: "To be awarded to the 2-year M.Sc.-Mathematics program student based on the highest CPI. The student must be graduating with his/her batch on the convocation day. If the student selected for this award is also a recipient of the General Proficiency Medal, then this award may be given to the next student based on CPI." },
    { id: 54, awardName: "Raman Shannon Prize", benefactor: "Mr. B. Kashyapa", criteria: "To be given to Best interdisciplinary research in the areas of Photonics, Communications, and Signal Processing as evidenced by the B.Tech/M.Tech/M.S. project work of students in the EE department." },
    { id: 55, awardName: "Kanta Devi Malik Memorial Award", benefactor: "Mr. O P Malik", criteria: "To be given to a 4-year B.Tech girl student among the graduating batch with highest CPI in any discipline." },
    { id: 56, awardName: "Vibha Gold Medal", benefactor: "Mr. Amit Narayan", criteria: "To be awarded to a graduating female student who has performed the best UG B.Tech project. In case the project is carried out by a group of students, recommend the name of the most deserving girl student based on student's individual contribution. In case a female student does not apply then department may recommend the name of a male student. Individual departments recommend the name of the student." },
    { id: 57, awardName: "Shri Ghisa Lal Kamdar Memorial Award", benefactor: "Mrs. Usha Kamdar", criteria: "To be awarded to the best outgoing 4-year UG student in Chemical Engineering based on following parameters: Good academic standing (CPI > 8), Involvement in social and community services (or through socially relevant project) and/or Involvement in sports/leadership activities." },
    { id: 58, awardName: "O P K D Malik Prize", benefactor: "Mr. O P Malik", criteria: "To be awarded to a student of Class V from Opportunity School, IITK who secures highest marks in his class." },
    { id: 59, awardName: "Class of 1968 Creative Research Proposals Prize", benefactor: "1968 Batch", criteria: "To be awarded to 3rd/4th year UG students and 1st year PG students." },
    { id: 60, awardName: "Sushila and Kantilal Mehta Award", benefactor: "Prof. Shamshank K Mehta", criteria: "To be awarded to a faculty member of Department of Mathematics who motivated and encouraged the student to pursue pure mathematics through his/her teaching, research, and/or discussions with the students outside the classroom." },
    { id: 61, awardName: "Batra Gold Medal", benefactor: "1967 Batch Fund", criteria: "For the best graduating student of 4-year or 5-year program in the MSE department based on the highest CPI. The performance in the UG part as defined in the MSE department template is to be considered for 5-year program students. The students of 5-year program admitted in year y will be competing with those in 4-year program admitted in year y+1." },
    { id: 62, awardName: "Prof. Samares Kar Memorial Gold Medal", benefactor: "Dr. Rita Kar", criteria: "To be awarded to the best B.Tech project in EE." },
    { id: 63, awardName: "Dr. Rukumini Saraswat Gold Medal", benefactor: "Shri Vijay Saraswat", criteria: "To be awarded to the best all-arounder among female student graduating in all 4 year/5 year programs. The students 5 year program admitted in year y will be competing with those in 4 year program admitted in y+1." },
    { id: 64, awardName: "Smt. Tara Dube & Shri Raj Deva Dube Memorial Gold Medal", benefactor: "Prof. Ravindra Kumar Dube", criteria: "To be awarded every year to the best graduating student of 4-year/5-year programme in Chemical Engineering Department based on highest CPI. The performance in the UG part as defined in CHE template is to students of 5-year program admitted in year Y will be competing with those in 4-year programme admitted in year (Y+1)." },
    { id: 65, awardName: "Mahatma Chao Kok Sui Meritorious Award", benefactor: "Mrs. Karuna Sharma", criteria: "To be awarded to the graduating student in the Department of Chemistry BS 4 years/MS 5 years based on highest CPI (and qualified only if CPI 9.0 and above)." },
    { id: 66, awardName: "Silver Medals for Excellence in Education Sitaram Jindal Foundation", benefactor: "Sitaram Jindal Foundation", criteria: "To be awarded to the toppers of BSBE (B.Tech) and EE (M.Tech)." },
    { id: 67, awardName: "Chandra Prabha and Charan Dass Gupta Gold Medal", benefactor: "Prof. Anil K Gupta", criteria: "To be awarded to the female student of 4th year UG Engineering B.Tech (any department) with highest cumulative CPI." },
    { id: 68, awardName: "Dr. Vijay K Varma Talent Award", benefactor: "Dr. Vijay Varma", criteria: "To be awarded to graduating full time M.Tech student of EE department, have CPI 8.0 or greater, must have completed M.Tech thesis in signal processing and/or wireless communication." },
    { id: 69, awardName: "MAY award by Satyajeet Ghosh", benefactor: "Mr. Satyajeet Ghosh", criteria: "UG/PG students of Civil Engineering Department during their stay at IIT are eligible. Any student can receive this award and it is not limited to final year students. To be awarded during Convocation Ceremony. Once every five years the sponsor or their designated person can change the criteria for the award based on past results and monitoring of the established objectives. The stated objective of this award is to increase industry academia partnership and employment, increase number of patents filed which could be monetized, lastly solving real world engineering problems." },
    { id: 70, awardName: "Envirotech GD Agrawal Award", benefactor: "Mr. S.K. Gupta", criteria: "For the most innovative thesis in the field of Environmental Engineering for PG & PhD students (Civil Engineering Department)." },
    { id: 71, awardName: "Govind Swarup Memorial Award", benefactor: "Mr. Mahesh Swarup Agarwal", criteria: "Project Award for PG Students in Space Science and Astronomy Department (starting Convocation 2024)." },
    { id: 72, awardName: "Smt. Rani Devi Pathak and Shri Chandra Sen Pathak Memorial Medal", benefactor: "Prof. Anand Pathak", criteria: "2-year MSc. Physics program student based on the highest CPI (starting Convocation 2023)." },
    { id: 73, awardName: "Rajiv and Ritu Batra Student Award in Cyber Security", benefactor: "Rajiv Batra", criteria: "Award will be given to the students graduated from M.Tech or MS(Research) in the Cyber Security domain. The award will be given on the recommendations by CSE department and C3i Hub." },
    { id: 74, awardName: "Raghvendu Shukla Memorial Merit Award", benefactor: "Jayendu", criteria: "The award will be given to the graduating female student in the four-year UG program of Chemical Engineering department with the highest CPI." },
    { id: 75, awardName: "Devi Best Ph.D. Paper Award", benefactor: "Arvind Agarwal", criteria: "Regular Ph.D. female student in MSE Department." },
    { id: 76, awardName: "Devi Best M.Tech Thesis Award", benefactor: "Arvind Agarwal", criteria: "Regular M.Tech or Dual Degree B.Tech+ M.Tech female student in MSE Department." },
    { id: 77, awardName: "Dr. Chandrakanta Kesavan Best Research Thesis Award", benefactor: "Sudhakar Kesavan", criteria: "To be awarded to graduating full time Master's student of any department (Master's students, M.Tech or MS(R)). Students must have CPI 6.5 or greater and must have completed Master's thesis in the area of Energy Sustainability and Climate Solutions. They must have conducted his/her thesis work under the guidance of faculty members associated with Kesavan Center. Names will be recommended by Award selection committee of Chandrakanta Kesavan Center (CKEPCS)." },
    { id: 78, awardName: "Dr. Chandrakanta Kesavan Best Research Project Award", benefactor: "Sudhakar Kesavan", criteria: "Best socially relevant project by UG student(s) enrolled in four-year degree programme. They must have conducted his/her project work under the guidance of faculty members associated with Kesavan Center. In case the best project was carried out by a group of students, the award amount shall be equally divided amongst all graduating students in the group. Master's thesis of Dual degree students will not be applicable for this award. Names will be recommended by Award selection committee of Chandrakanta Kesavan Center (CKEPCS)." },
    { id: 79, awardName: "Karandikar Best Ph.D. Thesis Award", benefactor: "Ashish Karandikar", criteria: "Best Ph.D. thesis award for Ph.D. Students of Electrical Engineering Department." },
    { id: 80, awardName: "Manas Mandal Best PhD Thesis Award", benefactor: "Manas Mandal", criteria: "CSE Student with Best PhD Thesis." },
    { id: 81, awardName: "IITK Cadila Laboratories Award", benefactor: "Cadila Laboratories", criteria: "To be awarded to the staff members belonging to A, B, C & D groups who have exhibited exceptional and sustained commitment to duty and service to the institute beyond that is normally expected of them." },
    { id: 82, awardName: "IITK Himalayan Drug Co. Award", benefactor: "Himalaya Drug Co.", criteria: "To be awarded to the staff members belonging to A, B, C & D groups who have exhibited exceptional and sustained commitment to duty and service to the institute beyond that is normally expected of them." },
    { id: 83, awardName: "Dr. N. Satyamurty (Campus School Award)", benefactor: "Prof. N. Satyamurthy", criteria: "To be awarded to best performance in Sanskrit of Class V." },
    { id: 84, awardName: "Naren Memorial Prizes", benefactor: "Mrs. Janaki Jayanthi Adidam", criteria: "Best academic performance in Kg to Class V to be awarded every year on a perpetual basis." },
    { id: 85, awardName: "Prof. N C Mathur (Campus School)", benefactor: "Prof. N. C. Mathur", criteria: "Utilized for the upliftment in the field of Music, EVS & Library." },
    { id: 86, awardName: "Ram Rajendra Malhotra Educational Society (Campus School Award)", benefactor: "Ram Rajendra Malhotra Educational Society New Delhi", criteria: "To be awarded to two students one for cultural excellence and the other one for maximum scholastic improvement in the previous academic year." },
    { id: 87, awardName: "Chandra Mahesh Puraskar & Chandra Saroj Puraskar (Campus School Award)", benefactor: "Prof. Sarvesh Chandra", criteria: "The best all round performers amongst all the Campus School children every year." },
    { id: 88, awardName: "Shri Satyendra K Dubey Memorial Award", benefactor: "Family & Friends", criteria: "To be awarded to an alumnus of any IIT who has distinguished himself by displaying the highest professional integrity in upholding the human values." },
    { id: 89, awardName: "Basudeb Banerji Memorial Award", benefactor: "Prof. Amitabha Bandyopadhyay/Prof. Jonaki Sen", criteria: "To be awarded to the best student who has completed class 8 from Opportunity School, IITK every year." },
    { id: 90, awardName: "Ravindra Nath Lohani Memorial Award", benefactor: "Prof. Bharat Lohani", criteria: "To be awarded to 2 students of Opportunity School who obtain 1st and 2nd position respectively in class V." }
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
        <td><div class="awardName">${item.awardName}</div></td>
        <td><div class="benefactor">${item.benefactor}</div></td>
        <td><span class="criteria">${item.criteria}</span></td>
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
      item.awardName.toLowerCase().includes(searchTerm) ||
      item.benefactor.toLowerCase().includes(searchTerm) ||
      item.criteria.toLowerCase().includes(searchTerm)
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