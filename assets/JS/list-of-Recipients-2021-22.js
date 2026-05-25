// Scholarship data with 218 entries
const scholarships = [
  { id: 1, scholarshipName: "Chaudhary Gurmukh Chand and Shrimati Gyanvati Kinra Scholarship", donor: "Dr. Vikram K Kinra", recipient: "Onkar Singh", department: "ME/B.Tech" },
  { id: 2, scholarshipName: "ACC Fellowship", donor: "ACC Ltd", recipient: "Shapath Bhandari", department: "CHM/M.Sc" },
  { id: 3, scholarshipName: "ACC Fellowship", donor: "ACC Ltd", recipient: "Bhabani Sankar Dehury", department: "CHM/M.Sc" },
  { id: 4, scholarshipName: "Pt. Balajee Govind Hardiker Scholarship", donor: "Mr. H.B.Hardiker", recipient: "Harish Kumar", department: "CHE/B.Tech" },
  { id: 5, scholarshipName: "Ram Rajendra Malhotra Educational Society Scholarship", donor: "Mr. H.B.Hardiker", recipient: "Naveen Meenia", department: "CHE/B.Tech" },
  { id: 6, scholarshipName: "Ram Rajendra Malhotra Educational Society Scholarship", donor: "Mr. H.B.Hardiker", recipient: "Rajendra Kumar", department: "ECO/B.S." },
  { id: 7, scholarshipName: "Ram Rajendra Malhotra Educational Society Scholarship", donor: "Mr. H.B.Hardiker", recipient: "Sandeep Parmar", department: "SDS/B.S." },
  { id: 8, scholarshipName: "Ram Rajendra Malhotra Educational Society Scholarship", donor: "Mr. H.B.Hardiker", recipient: "Satish Kumar", department: "EE/B.Tech" },
  { id: 9, scholarshipName: "Indian Women's Association Bonn Scholarship", donor: "Indian Womens Association", recipient: "Shakshi", department: "ME/B.Tech" },
  { id: 10, scholarshipName: "Indian Women's Association Bonn Scholarship", donor: "Indian Womens Association", recipient: "Atul Kumar", department: "ME/B.Tech" },
  { id: 11, scholarshipName: "Indian Women's Association Bonn Scholarship", donor: "Indian Womens Association", recipient: "Abhishek Bharti", department: "ME/B.Tech" },
  { id: 12, scholarshipName: "Anil & Reshma Nigam Scholarship", donor: "Mr. Anil Nigam", recipient: "Akhil", department: "AE/B.Tech" },
  { id: 13, scholarshipName: "Arakere and Karen Vasudev Scholarship", donor: "Prof. Arakere Vasudev", recipient: "Samanvay Lakhotia", department: "CHE/B.Tech" },
  { id: 14, scholarshipName: "Govinda & Indira Srikantiah Scholarship", donor: "Prof. G.Srikantiah", recipient: "Rashi Gupta", department: "ME/B.Tech" },
  { id: 15, scholarshipName: "P D Murti Memorial Scholarship", donor: "Mr. Ram Mohan", recipient: "Kavya Jalan", department: "CSE/B.Tech" },
  { id: 16, scholarshipName: "P D Murti Memorial Scholarship", donor: "Mr. Ram Mohan", recipient: "Raaghav Arya", department: "EE/B.Tech" },
  { id: 17, scholarshipName: "P D Murti Memorial Scholarship", donor: "Mr. Ram Mohan", recipient: "Sheetal Gupta", department: "EE/B.Tech" },
  { id: 18, scholarshipName: "Prof. Netar Lal Kapur Scholarship", donor: "Mr. Rajan N. Kapur", recipient: "Jatin Kumar", department: "CE/B.Tech" },
  { id: 19, scholarshipName: "Anurag Bartaria Scholarship", donor: "Mr. C.K. Bartaria", recipient: "Anuj Kumar Gautam", department: "MSE/B.Tech" },
  { id: 20, scholarshipName: "Simran & Mandeep Kainth Memorial Scholarship", donor: "Dr. G.S.Kainth", recipient: "Apeksha Agrawal", department: "ECO/B.S." },
  { id: 21, scholarshipName: "Vasudeo Laxman Sahasrabuddhe Vaidya Award Scholarship", donor: "Mrs. Veena Sahasrabuddhe Prof. H.V. Sahasrabuddhe", recipient: "Anil", department: "ME/B.Tech" },
  { id: 22, scholarshipName: "Vasudeo Laxman Sahasrabuddhe Vaidya Award Scholarship", donor: "Mrs. Veena Sahasrabuddhe Prof. H.V. Sahasrabuddhe", recipient: "Ravi Vaishnav", department: "ECO/B.S." },
  { id: 23, scholarshipName: "Neeraj Kapoor Memorial Scholarship", donor: "Mrs. Chhaya Rani Kapoor", recipient: "Dipesh Khandelwal", department: "CSE/B.Tech" },
  { id: 24, scholarshipName: "Nita Goyal & Ashish Gupta Scholarship", donor: "Ms. Nita Goel, Mr. Ashish Gupta", recipient: "Net Ram Jatav", department: "CE/B.Tech" },
  { id: 25, scholarshipName: "Nita Goyal & Ashish Gupta Scholarship", donor: "Ms. Nita Goel, Mr. Ashish Gupta", recipient: "Abhishek Yadav", department: "EE/B.Tech" },
  { id: 26, scholarshipName: "Nita Goyal & Ashish Gupta Scholarship", donor: "Ms. Nita Goel, Mr. Ashish Gupta", recipient: "Dilip Parmar", department: "MTH/B.S." },
  { id: 27, scholarshipName: "Nita Goyal & Ashish Gupta Scholarship", donor: "Ms. Nita Goel, Mr. Ashish Gupta", recipient: "Sangh Priya Gautam", department: "ME/B.Tech" },
  { id: 28, scholarshipName: "Dr. Hari Mohan & Pushpa Srivastava Scholarship", donor: "Mr. Amitabh Srivastava", recipient: "Nikita Chauhan", department: "CSE/B.Tech" },
  { id: 29, scholarshipName: "Shri Kalp Nath Singh Scholarship", donor: "Mr. Manoj Singh", recipient: "Chaitanya Sahni", department: "ME/B.Tech" },
  { id: 30, scholarshipName: "Smt. Durga Devi Memorial Scholarship", donor: "Dr. S.K. Durga (Retired Prof.)", recipient: "Purnima Singh", department: "CHM/M.Sc" },
  { id: 31, scholarshipName: "Sri Temasek @ IITK Scholarship", donor: "Dr. Murali Damodaran", recipient: "Rohit Kumar", department: "CE/B.Tech" },
  { id: 32, scholarshipName: "Prof. C.N.R. Rao Science Talent Scholarship", donor: "Prof. C.N.R. Rao", recipient: "Kartik Saini", department: "CHM/B.S." },
  { id: 33, scholarshipName: "Romesh Chandra Memorial Scholarship", donor: "Mr. Tushar Deepak Chandra", recipient: "Farzan Adil Byramji", department: "CSE/B.Tech" },
  { id: 34, scholarshipName: "Romesh Chandra Memorial Scholarship", donor: "Mr. Tushar Deepak Chandra", recipient: "Mohd Talib Siddiqui", department: "CSE/B.Tech" },
  { id: 35, scholarshipName: "Shri Jamuna Prasad & Smt. Basanti Gupta Scholarship", donor: "Mr. Maini R. Gupta", recipient: "Kalasariya Kamleshbhai Maganbhai", department: "MSE/Dual" },
  { id: 36, scholarshipName: "Shanti Devi & Onkar Nath Maewal Memorial Scholarship", donor: "Mr. Akhilesh Maewal", recipient: "Aditi Goyal", department: "CSE/B.Tech" },
  { id: 37, scholarshipName: "Shanti Devi & Onkar Nath Maewal Memorial Scholarship", donor: "Mr. Akhilesh Maewal", recipient: "Deeksha Vijay", department: "CSE/B.Tech" },
  { id: 38, scholarshipName: "Smt. Jagat Kaur Memorial Scholarship", donor: "Mr. Rajiv singh", recipient: "Avishek Bharti", department: "CE/B.Tech" },
  { id: 39, scholarshipName: "Baljit & Nirmal Dhindsa Scholarship", donor: "Mr. Ajit Gill", recipient: "Nandini Goel", department: "BSBE/B.Tech" },
  { id: 40, scholarshipName: "Baljit & Nirmal Dhindsa Scholarship", donor: "Mr. Ajit Gill", recipient: "Priyanshi Dwivedi", department: "BSBE/B.Tech" },
  { id: 41, scholarshipName: "N.S. Rajaraman Scholarship", donor: "Mr. Rajmohan Rajaraman", recipient: "Saurav Suman", department: "PHY/B.S." },
  { id: 42, scholarshipName: "Smt. Dharam Vati Garg Scholarship", donor: "Mr. Avinash Agarwal", recipient: "Farzan Adil Byramji", department: "CSE/B.Tech" },
  { id: 43, scholarshipName: "Smt. Dharam Vati Garg Scholarship", donor: "Mr. Avinash Agarwal", recipient: "Mohd Talib Siddiqui", department: "CSE/B.Tech" },
  { id: 44, scholarshipName: "Bhuwan & Indira Joshi Scholarship", donor: "Mr. Vinit Joshi", recipient: "Deepak Kansal", department: "ECO/B.S." },
  { id: 45, scholarshipName: "K.N. Saluja Scholarships", donor: "Mr. Hersh Saluja", recipient: "Yash Vardhan Raizada", department: "CE/B.Tech" },
  { id: 46, scholarshipName: "K.N. Saluja Scholarships", donor: "Mr. Hersh Saluja", recipient: "Mridul Jain", department: "CE/B.Tech" },
  { id: 47, scholarshipName: "K.N. Saluja Scholarships", donor: "Mr. Hersh Saluja", recipient: "Aryash Pateriya", department: "CE/B.Tech" },
  { id: 48, scholarshipName: "K.N. Saluja Scholarships", donor: "Mr. Hersh Saluja", recipient: "Amit Kumar Yadav", department: "CE/B.Tech" },
  { id: 49, scholarshipName: "K.N. Saluja Scholarships", donor: "Mr. Hersh Saluja", recipient: "Varun Maghnani", department: "CE/B.Tech" },
  { id: 50, scholarshipName: "K.N. Saluja Scholarships", donor: "Mr. Hersh Saluja", recipient: "Divyansh Gupta", department: "CE/B.Tech" },
  { id: 51, scholarshipName: "K.N. Saluja Scholarships", donor: "Mr. Hersh Saluja", recipient: "Kushagra Bhatnagar", department: "CE/B.Tech." },
  { id: 52, scholarshipName: "K.N. Saluja Scholarships", donor: "Mr. Hersh Saluja", recipient: "Rounak Sharma", department: "CE/B.Tech." },
  { id: 53, scholarshipName: "K.N. Saluja Scholarships", donor: "Mr. Hersh Saluja", recipient: "Shobhit Sharma", department: "CE/B.Tech." },
  { id: 54, scholarshipName: "BGM Kumar Foundation Scholarship", donor: "Mr. Birendra Kumar", recipient: "Tsering Youdon", department: "MTH/B.S." },
  { id: 55, scholarshipName: "BGM Kumar Foundation Scholarship", donor: "Mr. Birendra Kumar", recipient: "Vivek Singh Rajawat", department: "CE/B.Tech" },
  { id: 56, scholarshipName: "BGM Kumar Foundation Scholarship", donor: "Mr. Birendra Kumar", recipient: "Mukul Jakhar", department: "ECO/B.S." },
  { id: 57, scholarshipName: "Sri Singhasan Singh Scholarship", donor: "Mr. Manoj. K", recipient: "Prakhar Maheshwari", department: "EE/B.Tech" },
  { id: 58, scholarshipName: "Shri Bishamber Gupta and Smt. Anguri Gupta Scholarship", donor: "Mr. Satish Gupta", recipient: "Udit Narayan Pandey", department: "EE/B.Tech" },
  { id: 59, scholarshipName: "Protima Ghosh Memorial Scholarship", donor: "Mr. Ranodeb Roy", recipient: "Prashant Kumar", department: "EE/B.Tech" },
  { id: 60, scholarshipName: "Jasmine & Mohiuddin Merit Scholarship", donor: "Mr. Mohiuddin Golam", recipient: "Ritwik Vashistha", department: "STA/M.Sc" },
  { id: 61, scholarshipName: "Bimlavati & Nawal Kishore Kapur Scholarship", donor: "Mr. Deepak Kapur", recipient: "Akanksha Gautam", department: "BSBE/B.Tech" },
  { id: 62, scholarshipName: "Mona & Paramjit Singh Scholarship", donor: "Mr. Ajit Gill", recipient: "Divya Adil", department: "BSBE/B.Tech" },
  { id: 63, scholarshipName: "Mona & Paramjit Singh Scholarship", donor: "Mr. Ajit Gill", recipient: "Khushboo Sachdeva", department: "BSBE/B.Tech" },
  { id: 64, scholarshipName: "Mathur Brother's UG Scholarship", donor: "Mr. Atul K. Mathur", recipient: "Abhishek Pandey", department: "PHY/B.S." },
  { id: 65, scholarshipName: "Harish & Sushila Chandra Scholarship", donor: "Mr. Ashok K. Chandra", recipient: "Priyanshu Yadav", department: "CSE/B.Tech" },
  { id: 66, scholarshipName: "Lt. Bishwanath Jha Scholarship", donor: "Mr. Nirmal Jha", recipient: "Vijay Kumar", department: "ECO/Dual" },
  { id: 67, scholarshipName: "Shiv Kumari Shukla Scholarship", donor: "Mr. Devendra Shukla", recipient: "Prachi Chaudhary", department: "CE/B.Tech" },
  { id: 68, scholarshipName: "Dr. K P Gupta Scholarship", donor: "Mr. Shantanu Gupta", recipient: "Pragati Singh", department: "MSE/B.Tech" },
  { id: 69, scholarshipName: "Indradhanush Scholarship", donor: "Mr. Rohit Verma", recipient: "Vivek Agrawal", department: "EE/Dual" },
  { id: 70, scholarshipName: "Mr. Nitish V. Thakor Scholarship", donor: "Mr. Nitish V Thakor", recipient: "Patel Fenil Jayeshkumar", department: "BSBE/B.Tech" },
  { id: 71, scholarshipName: "Mahesh & Shashi Chandra Scholarship", donor: "Mr. Manish Chandra", recipient: "Abhishek Kumar", department: "EE/B.Tech" },
  { id: 72, scholarshipName: "Sudarshan Kasturia Memorial Scholarship", donor: "Mr. Sanjay Kasturia/ Ms Anjali Joshi", recipient: "Prateek Yadav", department: "ME/Dual" },
  { id: 73, scholarshipName: "Swaminathan & Garg Scholarship", donor: "Mr. Sanjay Garg", recipient: "Gaurav Kumar Chauhan", department: "AE/B.Tech" },
  { id: 74, scholarshipName: "Kunta Jha Scholarship", donor: "Mr. Saroj Jha", recipient: "Mohit Kumar", department: "ME/B.Tech" },
  { id: 75, scholarshipName: "Sri Vinay Kumar Kapoor and Smt. Sudha Kapoor Memorial Scholarship", donor: "AIM FOR SEVA (Mr. Arun Kumar Kapoor)", recipient: "Vikram Singh", department: "CE/Dual" },
  { id: 76, scholarshipName: "Bhagwan Das Kapoor and Smt. Padma Kapoor Memorial Scholarship", donor: "AIM FOR SEVA (Mr. Arun Kumar Kapoor )", recipient: "Saurabh Sharma", department: "ECO/Dual" },
  { id: 77, scholarshipName: "Seema Jain Scholarship", donor: "Prof. Sudhir K Jain", recipient: "Surbhi Sihag", department: "CHM/M.Sc" },
  { id: 78, scholarshipName: "Shri. D P Shukla Scholarship", donor: "Mr. Devendra K. Shulka", recipient: "Harsh Sachan", department: "CHE/B.Tech" },
  { id: 79, scholarshipName: "Tapan Kumar & Swapna bandopadhyay Scholarship", donor: "Mr. Subhajyoti Bandyopadhyay", recipient: "Yeginati Vinay Teja", department: "CSE/B.Tech" },
  { id: 80, scholarshipName: "Aedunuthula Prasad Memorial Scholarship", donor: "Mr. Rama Koteswar Rao Aedunuthula Smt. Sarojini Mattegunta", recipient: "Ayush Shakya", department: "CHE/B.Tech" },
  { id: 81, scholarshipName: "Khem Chandra Yadav Scholarships", donor: "Late Dr. Ranjit Singh", recipient: "Suman Kumar", department: "CE/B.Tech" },
  { id: 82, scholarshipName: "Khem Chandra Yadav Scholarships", donor: "Late Dr. Ranjit Singh", recipient: "Bhaumik Bharatbhai Jadav", department: "BSBE/B.Tech" },
  { id: 83, scholarshipName: "Yashodha Yadav Scholarship", donor: "Late Dr. Ranjit Singh", recipient: "Jetti Naga Karthik", department: "MTH/B.S." },
  { id: 84, scholarshipName: "Yashodha Yadav Scholarship", donor: "Late Dr. Ranjit Singh", recipient: "Ramavath Kalyan", department: "ES/B.S." },
  { id: 85, scholarshipName: "Neta Ji Balwan Singh Scholarship", donor: "Late Dr. Ranjit Singh", recipient: "Shashi Raj", department: "CE/B.Tech" },
  { id: 86, scholarshipName: "Neta Ji Balwan Singh Scholarship", donor: "Late Dr. Ranjit Singh", recipient: "Dheeraj Bana", department: "CE/B.Tech" },
  { id: 87, scholarshipName: "Ramesh Chandra Yadav Scholarship", donor: "Late Dr. Ranjit Singh", recipient: "Abhishek Khandelwal", department: "MTH/M.Sc" },
  { id: 88, scholarshipName: "Ramesh Chandra Yadav Scholarship", donor: "Late Dr. Ranjit Singh", recipient: "Arvind Rajbhar", department: "PHY/M.Sc" },
  { id: 89, scholarshipName: "Sarpanch Salik Ram Katiyar Scholarship", donor: "Late Dr. Ranjit Singh", recipient: "Mohit Anand", department: "ME/B.Tech" },
  { id: 90, scholarshipName: "Sarpanch Salik Ram Katiyar Scholarship", donor: "Late Dr. Ranjit Singh", recipient: "Nitin Jangir", department: "CE/B.Tech" },
  { id: 91, scholarshipName: "Guru Ji Ghashit Ram Scholarship", donor: "Late Dr. Ranjit Singh", recipient: "Aditya Agarwal", department: "EE/B.Tech" },
  { id: 92, scholarshipName: "Guru Ji Ghashit Ram Scholarship", donor: "Late Dr. Ranjit Singh", recipient: "Afraz Jamal", department: "BSBE/B.Tech" },
  { id: 93, scholarshipName: "Prof. M. M. Hasan Memorial Scholarship", donor: "Family & Friends of Prof. MM Hasan", recipient: "Bachhav Aryan Kishor", department: "EE/B.Tech" },
  { id: 94, scholarshipName: "Srikant Mishra Memorial Scholarship", donor: "Mr. Shrikant Mishra Dr. Sobi pandey", recipient: "Haridarshan Kumar", department: "MTH/M.Sc" },
  { id: 95, scholarshipName: "Shiv Prakash & Dayawanti Sharma Memorial Scholarship", donor: "Mr. Satish Sharma", recipient: "Love Kumar Varshney", department: "ME/B.Tech" },
  { id: 96, scholarshipName: "Khem Chand Memorial Scholarship", donor: "Mr. Sarwan Kumar", recipient: "Kanika Kukreja", department: "CHE/B.Tech" },
  { id: 97, scholarshipName: "Dr. M. Anantaswamy and Mrs. Vijayalakshmi Rau Scholarship", donor: "Mr .Pradeep A Rau", recipient: "Ved Vitthal Shukla", department: "AE/B.Tech" },
  { id: 98, scholarshipName: "S.C. Mehrotra's Scholarship", donor: "Mr. Subhash Chand Mehrotra", recipient: "Astik Yadav", department: "CE/B.Tech" },
  { id: 99, scholarshipName: "Tarun Sondhi Memorial Scholarship", donor: "Mr. Vipin Sondhi", recipient: "Himanshu Mishra", department: "ME/B.Tech" },
  { id: 100, scholarshipName: "Bihari Lal & Nalini Srivastava Memorial Scholarship", donor: "Mr. Chandra Mohan Srivastava", recipient: "Manoj Kumar", department: "EE/B.Tech" },
  { id: 101, scholarshipName: "Anita and Santosh Mehra Scholarship", donor: "Mr. Santosh Mehra", recipient: "Aman Verma", department: "EE/B.Tech" },
  { id: 102, scholarshipName: "Anita and Santosh Mehra Scholarship", donor: "Mr. Santosh Mehra", recipient: "Chittoor Murari", department: "EE/B.Tech" },
  { id: 103, scholarshipName: "Anita and Santosh Mehra Scholarship", donor: "Mr. Santosh Mehra", recipient: "Shubham Soni", department: "EE/B.Tech" },
  { id: 104, scholarshipName: "Anita and Santosh Mehra Scholarship", donor: "Mr. Santosh Mehra", recipient: "Shivam Singhal", department: "EE/B.Tech" },
  { id: 105, scholarshipName: "Anita and Santosh Mehra Scholarship", donor: "Mr. Santosh Mehra", recipient: "Sushil", department: "EE/Dual" },
  { id: 106, scholarshipName: "Shanti & Ramkishore Sahai Saxena Memorial Scholarship", donor: "Mr. Ashokand Madhu Saxena", recipient: "Talin Gupta", department: "CSE/B.Tech" },
  { id: 107, scholarshipName: "Saraswati Singh Scholarship", donor: "Mr. Manoj K Singh", recipient: "Ahana Biswas", department: "EE/Dual" },
  { id: 108, scholarshipName: "Dr. R.K.Singhal Memorial Scholarship", donor: "Prof. Sanjay Mittal", recipient: "Subodh Kumar Kasaudhan", department: "BSBE/B.Tech" },
  { id: 109, scholarshipName: "Vimal Madan Memorial Scholarship", donor: "Ms. Suarhaa Monica Banerjee", recipient: "Divyansh Garg", department: "CSE/B.Tech" },
  { id: 110, scholarshipName: "Smt Padmavathy & Prof R Sankar Scholarship", donor: "Mr. Sri Ram Sankar", recipient: "Cyrus Taneja", department: "CHM/M.Sc" },
  { id: 111, scholarshipName: "Class of 1984 Scholarship", donor: "Class of 1984", recipient: "Rahil Jain", department: "EE/B.Tech" },
  { id: 112, scholarshipName: "Class of 1984 Scholarship", donor: "Class of 1984", recipient: "Rakesh Tetarwal", department: "CSE/B.Tech" },
  { id: 113, scholarshipName: "Class of 1984 Scholarship", donor: "Class of 1984", recipient: "Satmeet Singh Saluja", department: "ECO/B.S." },
  { id: 114, scholarshipName: "Class of 1984 Scholarship", donor: "Class of 1984", recipient: "Pranshu Mangal", department: "MTH/B.S." },
  { id: 115, scholarshipName: "Babu Ram Jain & Mrs. Shanti Jain Memorial Scholarship", donor: "Dr. Ashok Jain", recipient: "Umesh Tayde", department: "ME/B.Tech" },
  { id: 116, scholarshipName: "Prof. Girdhar Gopal Shukla Memorial Scholarship", donor: "Mr. Ashish Shukla,", recipient: "Vishakha Nama", department: "MTH/M.Sc" },
  { id: 117, scholarshipName: "Prof. Girdhar Gopal Shukla Memorial Scholarship", donor: "Mr. Ashish Shukla,", recipient: "Rajarshi Paul", department: "STAT/M.Sc" },
  { id: 118, scholarshipName: "Smt. Neela Dutt Scholarship", donor: "Mr. Saibal Dutt", recipient: "Harsh Mishra", department: "CE/B.Tech" },
  { id: 119, scholarshipName: "Shri R & R Chari Scholarship", donor: "Mr. Rangarajan VR", recipient: "Dravya Marwaha", department: "CSE/B.Tech" },
  { id: 120, scholarshipName: "Dr.K.C Saronwala memorial Scholarship", donor: "Mr. Anupam Saronwala", recipient: "Lavesh Mangal", department: "MTH/B.S." },
  { id: 121, scholarshipName: "Shri Ranbir and Shrimati Maha devi Chauhan Scholarship", donor: "Mr. Satya P Chauhan", recipient: "Ashish Kumar", department: "CHE/B.Tech" },
  { id: 122, scholarshipName: "Nirmala & Ashok Keshri Scholarship", donor: "Mr. Piyush Keshri", recipient: "Rajendra Parmar", department: "AE/Dual" },
  { id: 123, scholarshipName: "Swami Sivananda Memorial Scholarship", donor: "Divine Life Society Garhwal Uttarakhand", recipient: "Sachin", department: "AE/B.Tech" },
  { id: 124, scholarshipName: "Swami Sivananda Memorial Scholarship", donor: "Divine Life Society Garhwal Uttarakhand", recipient: "Harsh Patel", department: "BSBE/B.Tech" },
  { id: 125, scholarshipName: "Swami Sivananda Memorial Scholarship", donor: "Divine Life Society Garhwal Uttarakhand", recipient: "Satender Kumar Yadav", department: "EE/B.Tech" },
  { id: 126, scholarshipName: "Swami Sivananda Memorial Scholarship", donor: "Divine Life Society Garhwal Uttarakhand", recipient: "Kuldeep Kumar", department: "EE/B.Tech" },
  { id: 127, scholarshipName: "Srimati Bhagwati Rameshwar Goyal Scholarship", donor: "Mr. Ashok Kumar Goyal", recipient: "Amisha Patel", department: "ME/B.Tech" },
  { id: 128, scholarshipName: "Sandeep & Vinita Agarwal Scholarship", donor: "Mr. Sandeep Agarwal", recipient: "Mukesh Nath", department: "ME/B.Tech" },
  { id: 129, scholarshipName: "Bhagwan Das Sanghi Memorial Scholarship", donor: "Family of Late B.D. Sanghi", recipient: "Shubhangi Gupta", department: "MTH/B.S." },
  { id: 130, scholarshipName: "Dr. Prateek Mishra Memorial Scholarship", donor: "Family and Friends of Prateek Mishra", recipient: "Aayush Kumar", department: "EE/B.Tech" },
  { id: 131, scholarshipName: "Dr. Prateek Mishra Memorial Scholarship", donor: "Family and Friends of Prateek Mishra", recipient: "S Pradeep", department: "EE/B.Tech" },
  { id: 132, scholarshipName: "Dr. Prateek Mishra Memorial Scholarship", donor: "Family and Friends of Prateek Mishra", recipient: "Shashwat Gupta", department: "EE/B.Tech" },
  { id: 133, scholarshipName: "PSB Prasad Memorial Scholarship", donor: "Ms. Rekha Rani Prasad", recipient: "Manoj Kumar Dutta", department: "PHY/M.Sc" },
  { id: 134, scholarshipName: "Smt. Shyam Lata Garg Scholarship", donor: "Mr. Ashutosh Garg", recipient: "Kajal Deep", department: "CSE/B.Tech" },
  { id: 135, scholarshipName: "Smt. Shanti Devi Garg Scholarship", donor: "Mr. Ashutosh Garg", recipient: "Sanyukta Agarwal", department: "PHY/B.S." },
  { id: 136, scholarshipName: "Shree Anand Swaroop Garg Scholarship", donor: "Mr. Ashutosh Garg", recipient: "Shashi Kumar", department: "PHY/B.S." },
  { id: 137, scholarshipName: "Shree Ramjee Lal Garg Scholarship", donor: "Mr. Ashutosh Garg", recipient: "Vaibhav Sukhdev Dhoke", department: "PHY/Dual" },
  { id: 138, scholarshipName: "Shrimati Madhuri Dubey Scholarship", donor: "Mr. Ajay Dubey", recipient: "Hardik Soni", department: "CHM/M.Sc" },
  { id: 139, scholarshipName: "Shrimati Madhuri Dubey Scholarship", donor: "Mr. Ajay Dubey", recipient: "Pooran Kumar", department: "CHM/M.Sc" },
  { id: 140, scholarshipName: "Shrimati Vidyawati Dubey Scholarship", donor: "Mr. Ajay Dubey", recipient: "Santosh Kumari", department: "CHM/M.Sc" },
  { id: 141, scholarshipName: "Mahabala Rajaraman Scholarship", donor: "Mr. Ashok Shah", recipient: "Sanjay Pander", department: "CSE/B.Tech" },
  { id: 142, scholarshipName: "Jayalakshmi Scholarship", donor: "Mr. Krishnan Venkatraman", recipient: "Kushangi Mittal", department: "ME/B.Tech" },
  { id: 143, scholarshipName: "Gyanvati & Kamta Prasad Memorial Scholarship", donor: "Mr. Hemant Gupta", recipient: "Swati Kumari", department: "CE/B.Tech" },
  { id: 144, scholarshipName: "B P Srivastava Scholarship", donor: "Dr. Ramesh Chandra Srivastava", recipient: "Ritika Agrawal", department: "STAT/M.Sc" },
  { id: 145, scholarshipName: "Director's Scholarships", donor: "Group of donors through fundraising drive", recipient: "Antriksh Gupta", department: "CSE/B.Tech" },
  { id: 146, scholarshipName: "Director's Scholarships", donor: "Group of donors through fundraising drive", recipient: "Pratham Sahu", department: "CSE/B.Tech" },
  { id: 147, scholarshipName: "Director's Scholarships", donor: "Group of donors through fundraising drive", recipient: "Rajat Gattani", department: "CSE/B.Tech" },
  { id: 148, scholarshipName: "Director's Scholarships", donor: "Group of donors through fundraising drive", recipient: "Harsh Bihany", department: "CSE/B.Tech" },
  { id: 149, scholarshipName: "Director's Scholarships", donor: "Group of donors through fundraising drive", recipient: "Swastik Singhal", department: "CSE/B.Tech" },
  { id: 150, scholarshipName: "Director's Scholarships", donor: "Group of donors through fundraising drive", recipient: "Abhinav Garg", department: "CSE/B.Tech" },
  { id: 151, scholarshipName: "Director's Scholarships", donor: "Group of donors through fundraising drive", recipient: "Nitesh Kaushal", department: "CSE/B.Tech" },
  { id: 152, scholarshipName: "Director's Scholarships", donor: "Group of donors through fundraising drive", recipient: "Udhav Varma", department: "CSE/B.Tech" },
  { id: 153, scholarshipName: "Smt.Saroja Krishnan Scholarship", donor: "Shri Kannan Krishnan", recipient: "Manisha Sharma", department: "CE/B.Tech" },
  { id: 154, scholarshipName: "Class of 1990 Scholarship", donor: "1990 Batch", recipient: "Goutam Das", department: "CSE/B.Tech" },
  { id: 155, scholarshipName: "Class of 1990 Scholarship", donor: "1990 Batch", recipient: "Monil Lodha", department: "CSE/B.Tech" },
  { id: 156, scholarshipName: "Class of 1990 Scholarship", donor: "1990 Batch", recipient: "Siddharth Kalra", department: "CSE/B.Tech" },
  { id: 157, scholarshipName: "Class of 1990 Scholarship", donor: "1990 Batch", recipient: "Mansi Sodhani", department: "CSE/B.Tech" },
  { id: 158, scholarshipName: "R K Gupta Scholarship", donor: "Mr. R K Gupta", recipient: "Kalika", department: "CSE/B.Tech" },
  { id: 159, scholarshipName: "Combined Scholarship Scheme for UG Students", donor: "1971 Batch Fund 1974 Batch Fund 1975 Batch Fund 1978 Batch Fund 1985 Batch Fund ", recipient: "Aman Chahar", department: "ME/B.Tech" },
  { id: 160, scholarshipName: "Combined Scholarship Scheme for UG Students", donor: "1971 Batch Fund 1974 Batch Fund 1975 Batch Fund 1978 Batch Fund 1985 Batch Fund ", recipient: "Jivnani Harshal Prakash", department: "CHE/B.Tech" },
  { id: 161, scholarshipName: "Combined Scholarship Scheme for UG Students", donor: "1971 Batch Fund 1974 Batch Fund 1975 Batch Fund 1978 Batch Fund 1985 Batch Fund ", recipient: "Khushi Kumari", department: "CSE/B.Tech" },
  { id: 162, scholarshipName: "Combined Scholarship Scheme for UG Students", donor: "1971 Batch Fund 1974 Batch Fund 1975 Batch Fund 1978 Batch Fund 1985 Batch Fund ", recipient: "Kumar Harsh Mohan", department: "CSE/B.Tech" },
  { id: 163, scholarshipName: "Combined Scholarship Scheme for UG Students", donor: "1971 Batch Fund 1974 Batch Fund 1975 Batch Fund 1978 Batch Fund 1985 Batch Fund ", recipient: "Rahul Singh", department: "EE/B.Tech" },
  { id: 164, scholarshipName: "Combined Scholarship Scheme for UG Students", donor: "1971 Batch Fund 1974 Batch Fund 1975 Batch Fund 1978 Batch Fund 1985 Batch Fund ", recipient: "Sneh Omer", department: "CHE/B.Tech" },
  { id: 165, scholarshipName: "M A Pai Undergraduate Scholarship", donor: "Mr. Vijay Vittal", recipient: "Hritik Daune", department: "EE/B.Tech" },
  { id: 166, scholarshipName: "Smt. Vidyawati Agarwal Scholarship", donor: "Mr. Alok Agarwal", recipient: "Ayushi Goyal", department: "CHE/B.Tech" },
  { id: 167, scholarshipName: "Smt Tara Ghate's Scholarship", donor: "Mr. Alok Agarwal", recipient: "Yuvraj Garg", department: "CSE/B.Tech" },
  { id: 168, scholarshipName: "Prof. Sanjeev K Agarwal Scholarship", donor: "Alumni of IITK, family and friends", recipient: "Sandeep Kumar Bijarnia", department: "CSE/B.Tech" },
  { id: 169, scholarshipName: "Prof. Sanjeev K Agarwal Scholarship", donor: "Alumni of IITK, family and friends", recipient: "Alan Nair", department: "CSE/Dual" },
  { id: 170, scholarshipName: "Mrs. Ratna Kaushik and Dr. Bhooshan lal Scholarship", donor: "Mrs. Ratna Kaushik & Dr. Bhooshan lal", recipient: "Shashwat Jatav", department: "EE/B.Tech" },
  { id: 171, scholarshipName: "Neelam and Anil Singh Scholarship", donor: "Mr. Atul Singh", recipient: "Avinash Yadav", department: "CHE/B.Tech" },
  { id: 172, scholarshipName: "Rajendra Rathore Memorial Scholarship", donor: "Friends and family of Lt.Rajendra Rathore", recipient: "Arnab Maji", department: "CHM/M.Sc" },
  { id: 173, scholarshipName: "Neela Namjoshi Scholarship", donor: "Mr. Alok Agarwal", recipient: "Baishali Das", department: "AE/B.Tech" },
  { id: 174, scholarshipName: "Pramodini Agarwal Scholarship", donor: "Mr. Alok Agarwal", recipient: "Tulika Shukla", department: "ME/B.Tech" },
  { id: 175, scholarshipName: "Class of 1973 Merit Cum Means Scholarship", donor: "1973 pass out batch", recipient: "Ankur", department: "CSE/B.Tech" },
  { id: 176, scholarshipName: "Class of 1973 Merit Cum Means Scholarship", donor: "1973 pass out batch", recipient: "Pankaj", department: "CSE/B.Tech" },
  { id: 177, scholarshipName: "Class of 1973 Merit Cum Means Scholarship", donor: "1973 pass out batch", recipient: "Sourabh Kulhari", department: "CSE/B.Tech" },
  { id: 178, scholarshipName: "Class of 1973 Merit Cum Means Scholarship", donor: "1973 pass out batch", recipient: "Tilak Agarwal", department: "CHE/B.Tech" },
  { id: 179, scholarshipName: "Class of 1973 Merit Cum Means Scholarship", donor: "1973 pass out batch", recipient: "Ashish Ahuja", department: "BSBE/B.Tech" },
  { id: 180, scholarshipName: "Class of 1973 Merit Cum Means Scholarship", donor: "1973 pass out batch", recipient: "Shivam Goel", department: "ME/B.Tech" },
  { id: 181, scholarshipName: "Avijit Lal Memorial Scholarship", donor: "Family and Friends of Late Avijit Lal ", recipient: "Jatin Chauhan", department: "EE/B.Tech" },
  { id: 182, scholarshipName: "Avijit Lal Memorial Scholarship", donor: "Family and Friends of Late Avijit Lal ", recipient: "Maurya Aryan Swaminath", department: "CSE/B.Tech" },
  { id: 183, scholarshipName: "Shobha Memorial Scholarship", donor: "Dr.Ashok K Jain", recipient: "Saumya Singh", department: "AE/B.Tech" },
  { id: 184, scholarshipName: "Sandeep and Shruti Gupta Talent Scholarship", donor: "Mr.Sandeep Gupta", recipient: "Ruchit Rungta", department: "MSE/B.Tech" },
  { id: 185, scholarshipName: "Arish Ali Scholarship", donor: "Mr.Arish Ali ", recipient: "Ashish Kumar", department: "CHE/B.Tech" },
  { id: 186, scholarshipName: "Smt.Savitridevi Memorial Scholarship", donor: "Mr.Sudhir Mittal", recipient: "Vidhi Jain", department: "CHE/B.Tech" },
  { id: 187, scholarshipName: "Vishesh Panjabi Memorial Scholarship", donor: "Family and Friends", recipient: "Shubham Kumar", department: "AE/B.Tech" },
  { id: 188, scholarshipName: "Bhawani Shankar Meena Memorial Scholarship", donor: "2000 batch", recipient: "Chandan Singh Naruka", department: "CE/B.Tech" },
  { id: 189, scholarshipName: "Shri Nathmal Kanodia Memorial Scholarship", donor: "Mr. Mayank Kanodia", recipient: "Vishrant Chirag Dave", department: "MSE/B.Tech" },
  { id: 190, scholarshipName: "Mrs. Nirmal Kumari Gaur Scholarship", donor: "Prof. Rita Pandey", recipient: "Prerna Singh Chauhan", department: "CHE/B.Tech" },
  { id: 191, scholarshipName: "Bachi Devi Rawat Memorial Scholarship", donor: "Dr. Shishpal S. Rawat", recipient: "Abhinav Mittal", department: "EE/B.Tech" },
  { id: 192, scholarshipName: "Satish and Kamlesh Agarwal Scholarship, Houston Texas, USA", donor: " Mr. Satish Agarwal from Houston, Texas, USA", recipient: "Meghna Jakhar", department: "EE/B.Tech" },
  { id: 193, scholarshipName: "Mallampati Bala Kishore Memorial Scholarship", donor: " Dr. Virajith Jalaparti", recipient: "Mohit Gupta", department: "CSE/B.Tech" },
  { id: 194, scholarshipName: "Batch of 1965 Scholarship", donor: "Batch of 1965", recipient: "Bhavesh Jain", department: "EE/B.Tech" },
  { id: 195, scholarshipName: "Batch of 1965 Scholarship", donor: "Batch of 1965", recipient: "Vansh Bansal", department: "CSE/B.Tech" },
  { id: 196, scholarshipName: "Batch of 1965 Scholarship", donor: "Batch of 1965", recipient: "Varun Gangwar", department: "CHE/B.Tech" },
  { id: 197, scholarshipName: "Batch of 1965 Scholarship", donor: "Batch of 1965", recipient: "Prapti Himanshu Dagli", department: "CSE/B.Tech" },
  { id: 198, scholarshipName: "Pawan Tewari Goldman Sachs Scholarships", donor: "Mr. Pawan Tewari", recipient: "Ananya Agrawal", department: "CSE/B.Tech" },
  { id: 199, scholarshipName: "Pawan Tewari Goldman Sachs Scholarships", donor: "Mr. Pawan Tewari", recipient: "Nikhil Gupta", department: "EE/B.Tech" },
  { id: 200, scholarshipName: "Kedar Singh Rawat Memorial Scholarship", donor: "Dr. Shishpal S. Rawat", recipient: "Divyansh Chhabriya", department: "CSE/B.Tech" },
  { id: 201, scholarshipName: "Shri Ram Sahai Agarwal Scholarship", donor: "Mr. Alok Agarwal", recipient: "Raman Deep Kaur", department: "PHY/B.S." },
  { id: 202, scholarshipName: "Yadupati Singhania Memorial Scholarship", donor: "J K Cement Ltd", recipient: "Akhand Pratap Singh", department: "CE/B.Tech" },
  { id: 203, scholarshipName: "Yadupati Singhania Memorial Scholarship", donor: "J K Cement Ltd", recipient: "Kaushal Kumar Jha", department: "CE/B.Tech" },
  { id: 204, scholarshipName: "Yadupati Singhania Memorial Scholarship", donor: "J K Cement Ltd", recipient: "Gaurav Sharma", department: "CE/B.Tech" },
  { id: 205, scholarshipName: "Yadupati Singhania Memorial Scholarship", donor: "J K Cement Ltd", recipient: "Ashish Gautam", department: "CE/B.Tech" },
  { id: 206, scholarshipName: "Shri Shankar Lal & Smt Prema Devi Agarwal Memorial Scholarship", donor: "Mr. Sharwan Kumar Agarwal", recipient: "Kuldeep Patel", department: "MSE/B.Tech" },
  { id: 207, scholarshipName: "Ravi and Rohini Sakhuja MCM Scholarship", donor: "Ravinder Kumar Sakhuja", recipient: "Parinay Chauhan", department: "ME/B.Tech" },
  { id: 208, scholarshipName: "Ravi and Rohini Sakhuja MCM Scholarship", donor: "Ravinder Kumar Sakhuja", recipient: "Yash Gupta", department: "ME/B.Tech" },
  { id: 209, scholarshipName: "Ravi and Rohini Sakhuja MCM Scholarship", donor: "Ravinder Kumar Sakhuja", recipient: "Pranab Pandey", department: "ME/B.Tech" },
  { id: 210, scholarshipName: "Ravi and Rohini Sakhuja MCM Scholarship", donor: "Ravinder Kumar Sakhuja", recipient: "Anmol Pabla", department: "ME/B.Tech" },
  { id: 211, scholarshipName: "Ravi and Rohini Sakhuja Project Scholarships", donor: "Ravinder Kumar Sakhuja", recipient: "Ayush Saxena", department: "EE/B.Tech" },
  { id: 212, scholarshipName: "Ravi and Rohini Sakhuja Project Scholarships", donor: "Ravinder Kumar Sakhuja", recipient: "Yash Vardhan Raizada", department: "CE/B.Tech" },
  { id: 213, scholarshipName: "Sri. Raj Nath Singh Scholarship", donor: "M/s Freddie MAC Foundation U ( Mr. Manoj Singh )", recipient: "Akshan Agrawal", department: "ME/B.Tech" },
  { id: 214, scholarshipName: "Pushpa Garg Scholarship", donor: "Mrs. Ewa and Atul Garg", recipient: "Roy Shivam", department: "ME/B.Tech" },
  { id: 215, scholarshipName: "Dr. R.C. Srivastava Memorial Scholarship", donor: "Himalaya Institute Hospital Trust, Dr. Sheela Srivastava", recipient: "Ritwik Vashistha", department: "STA/MSc(2 yr)" },
  { id: 216, scholarshipName: "Dr. V Rajaraman Scholarship", donor: "Mr. Prabhu Goel", recipient: "Farzan Adil Byramji", department: "CSE/B.Tech" },
  { id: 217, scholarshipName: "Dr. V Rajaraman Scholarship", donor: "Mr. Prabhu Goel", recipient: "Mohd Talib Siddiqui", department: "CSE/B.Tech" },
  { id: 218, scholarshipName: "Lalit Narain Das Memorial Scholarship", donor: "LT. Gen. B.N. Das", recipient: "Atin Vikram Singh", department: "EE/B.Tech" }
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

// Render table with scholarship data
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
        <td><div class="scholarshipName">${item.scholarshipName}</div></td>
        <td><div class="donor">${item.donor}</div></td>
        <td><span class="recipient">${item.recipient}</span></td>
        <td><span class="department">${item.department}</span></td>
    `;
    tbody.appendChild(row);
  });

  // Update results count and no results message
  const resultsCount = document.getElementById("resultsCount");
  const noResults = document.getElementById("noResults");
  if (resultsCount && noResults) {
    resultsCount.textContent = `${data.length} recipient${data.length !== 1 ? 's' : ''} found`;
    noResults.style.display = data.length === 0 ? 'block' : 'none';
  }
}

// Search function
function searchScholarships() {
  const searchInput = document.getElementById("searchInput");
  if (!searchInput) {
    console.error('Search input element with ID "searchInput" not found.');
    return;
  }
  const searchTerm = searchInput.value.toLowerCase();
  const filteredData = scholarships.filter(
    (item) =>
      item.scholarshipName.toLowerCase().includes(searchTerm) ||
      item.donor.toLowerCase().includes(searchTerm) ||
      item.recipient.toLowerCase().includes(searchTerm) ||
      item.department.toLowerCase().includes(searchTerm)
  );
  renderTable(filteredData);
}

// Initialize table and search
document.addEventListener("DOMContentLoaded", () => {
  renderTable(scholarships); // Render full table initially
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", debounce(searchScholarships, 500));
  } else {
    console.error('Search input element with ID "searchInput" not found.');
  }
});