// Scholarship data with 284 entries from provided HTML
const recipient = [
  { id: 1, scholarshipName: "Anil & Reshma Nigam Scholarship", donor: "Mr. Anil Nigam", recipient: "Ayush Agrawal", department: "AE/BT" },
  { id: 2, scholarshipName: "Anita and Santosh Mehra Scholarship", donor: "Mr. Santosh Mehra", recipient: "Aditya Agarwal", department: "EE/BTech" },
  { id: 3, scholarshipName: "Anita and Santosh Mehra Scholarship", donor: "Mr. Santosh Mehra", recipient: "Muskan", department: "EE/BT" },
  { id: 4, scholarshipName: "Anita and Santosh Mehra Scholarship", donor: "Mr. Santosh Mehra", recipient: "Donkena Manideep", department: "ee/BT" },
  { id: 5, scholarshipName: "Anita and Santosh Mehra Scholarship", donor: "Mr. Santosh Mehra", recipient: "Gautam Raghuvanshi", department: "EE/BT" },
  { id: 6, scholarshipName: "Anita and Santosh Mehra Scholarship", donor: "Mr. Santosh Mehra", recipient: "Shivam Gupta", department: "EE/BT" },
  { id: 7, scholarshipName: "Anurag Bartaria Scholarship", donor: "Mr. C.K. Bartaria", recipient: "Dheeraj Kumar Yadav", department: "MSE/BT" },
  { id: 8, scholarshipName: "Babu Ram Jain & Mrs. Shanti Jain Memorial Scholarship", donor: "Dr. Ashok Jain", recipient: "Devashish Yadav", department: "MTH/BS" },
  { id: 9, scholarshipName: "BGM Kumar Foundation Scholarship", donor: "Mr. Birendra Kumar", recipient: "Rashi Gupta", department: "ME/BT" },
  { id: 10, scholarshipName: "BGM Kumar Foundation Scholarship", donor: "Mr. Birendra Kumar", recipient: "Tsering Youdon", department: "MTH/BS" },
  { id: 11, scholarshipName: "BGM Kumar Foundation Scholarship", donor: "Mr. Birendra Kumar", recipient: "Nawang Spalzin", department: "EE/BT" },
  { id: 12, scholarshipName: "Bhagwan Das Kapoor and Smt. Padma Kapoor Memorial Scholarship", donor: "AIM FOR SEVA (Mr. Arun Kumar Kapoor )", recipient: "Arush Kumar Singh", department: "AE/BT" },
  { id: 13, scholarshipName: "Bimlavati & Nawal Kishore Kapur Scholarship", donor: "Mr. Deepak Kapur", recipient: "Soni Kumari", department: "CHE/BT" },
  { id: 14, scholarshipName: "Lt. Bishwanath Jha Scholarship", donor: "Mr. Nirmal Jha", recipient: "Parinay Chauhan", department: "CSE/BT" },
  { id: 15, scholarshipName: "Class of 1984 Scholarship", donor: "Class of 1984", recipient: "Rakesh Tetarwal", department: "CSE/BT" },
  { id: 16, scholarshipName: "Class of 1984 Scholarship", donor: "Class of 1984", recipient: "Satmeet Singh Saluja", department: "ECO/BS" },
  { id: 17, scholarshipName: "Class of 1984 Scholarship", donor: "Class of 1984", recipient: "Pranshu Mangal", department: "MTH/BS" },
  { id: 18, scholarshipName: "Class of 1984 Scholarship", donor: "Class of 1984", recipient: "Akula Venkatesh", department: "CSE/BT" },
  { id: 19, scholarshipName: "Dr. Hari Mohan & Pushpa Srivastava Scholarship", donor: "Mr. Amitabh Srivastava", recipient: "Raaghav Arya", department: "EE/BT" },
  { id: 20, scholarshipName: "Dr.K.C Saronwala memorial Scholarship", donor: "Mr. Anupam Saronwala", recipient: "Kalasariya Kamleshbhai Maganbhai", department: "MSE/Dual" },
  { id: 21, scholarshipName: "Dr. K P Gupta Scholarship", donor: "Mr. Shantanu Gupta", recipient: "Sudhanshu Kumar", department: "MSE/BT" },
  { id: 22, scholarshipName: "Dr. M. Anantaswamy and Mrs. Vijayalakshmi Rau Scholarship", donor: "Mr .Pradeep A Rau", recipient: "Mukund Soni", department: "MSE/Dual" },
  { id: 23, scholarshipName: "Dr. R.K.Singhal Memorial Scholarship", donor: "Prof. Sanjay Mittal", recipient: "Emaad Ahmed", department: "BSBE/BT" },
  { id: 24, scholarshipName: "Govinda & Indira Srikantiah Scholarship", donor: "Prof. G.Srikantiah", recipient: "Adarsh Shukla", department: "ME/BT" },
  { id: 25, scholarshipName: "Guru Ji Ghashit Ram Scholarship", donor: "Late Dr. Ranjit Singh", recipient: "Shikha Sharma", department: "AE/BT" },
  { id: 26, scholarshipName: "Guru Ji Ghashit Ram Scholarship", donor: "Late Dr. Ranjit Singh", recipient: "Havi Bohra", department: "MTH/BS" },
  { id: 27, scholarshipName: "Harish & Sushila Chandra Scholarship", donor: "Mr. Ashok K. Chandra", recipient: "Shivam Singhal", department: "EE/BT" },
  { id: 28, scholarshipName: "Indradhanush Scholarship", donor: "Mr. Rohit Verma", recipient: "Sanyukta Agarwal", department: "PHY/BS" },
  { id: 29, scholarshipName: "Indian Women's Association Bonn Scholarship", donor: "Indian Womens Association", recipient: "Aman Chahar", department: "ME/BT" },
  { id: 30, scholarshipName: "Indian Women's Association Bonn Scholarship", donor: "Indian Womens Association", recipient: "Mali Ashish Ramniwas", department: "ME/BT" },
  { id: 31, scholarshipName: "Indian Women's Association Bonn Scholarship", donor: "Indian Womens Association", recipient: "Manish Kannoujiya", department: "ME/BT" },
  { id: 32, scholarshipName: "Jayalakshmi Scholarship", donor: "Mr. Krishnan Venkatraman", recipient: "Apeksha Agrawal", department: "ECO/BS" },
  { id: 33, scholarshipName: "Khem Chandra Yadav Scholarships", donor: "Late Dr. Ranjit Singh", recipient: "Divyansh Garg", department: "CSE/BT" },
  { id: 34, scholarshipName: "Khem Chandra Yadav Scholarships", donor: "Late Dr. Ranjit Singh", recipient: "Priyanshu Yadav", department: "CSE/BT" },
  { id: 35, scholarshipName: "Khem Chand Memorial Scholarship", donor: "Mr. Sarwan Kumar", recipient: "Shubham Kumar", department: "EE/BTech" },
  { id: 36, scholarshipName: "Chaudhary Gurmukh Chand and Shrimati Gyanvati Kinra Scholarship", donor: "Dr. Vikram K Kinra", recipient: "Rohit Kumar", department: "ME/B.Tech" },
  { id: 37, scholarshipName: "Kunta Jha Scholarship", donor: "Mr. Saroj Jha", recipient: "Piyush Kumar", department: "EE/B.Tech" },
  { id: 38, scholarshipName: "Prof. M. M. Hasan Memorial Scholarship", donor: "Family & Friends of Prof. MM Hasan", recipient: "Dheeraj Saini", department: "EE/B.Tech" },
  { id: 39, scholarshipName: "Mahesh & Shashi Chandra Scholarship", donor: "Mr. Manish Chandra", recipient: "Rajeev Kumar", department: "CSE/B.Tech" },
  { id: 40, scholarshipName: "Mathur Brother's UG Scholarship", donor: "Mr. Atul K. Mathur", recipient: "Atharv Moghe", department: "CSE/B.Tech" },
  { id: 41, scholarshipName: "Neeraj Kapoor Memorial Scholarship", donor: "Mrs. Chhaya Rani Kapoor", recipient: "Nitin Jangir", department: "CE/B.Tech" },
  { id: 42, scholarshipName: "Mr. Nitish V. Thakor Scholarship", donor: "Mr. Nitish V Thakor", recipient: "Bakir Khan Shahzeeb", department: "BSBE/BT" },
  { id: 43, scholarshipName: "N.S. Rajaraman Scholarship", donor: "Mr. Rajmohan Rajaraman", recipient: "Jayesh Omprakash Lakade", department: "ECO/BS" },
  { id: 44, scholarshipName: "P D Murti Memorial Scholarship", donor: "Mr. Ram Mohan", recipient: "Anuj Kumar", department: "CSE/BT" },
  { id: 45, scholarshipName: "P D Murti Memorial Scholarship", donor: "Mr. Ram Mohan", recipient: "Abhishek Kumar", department: "CSE/BT" },
  { id: 46, scholarshipName: "P D Murti Memorial Scholarship", donor: "Mr. Ram Mohan", recipient: "Vetcha Pankaj Nath", department: "CSE/BT" },
  { id: 47, scholarshipName: "Prof. C.N.R. Rao Science Talent Scholarship", donor: "Prof. C.N.R. Rao", recipient: "Devdhar U Patil", department: "CHM/BS" },
  { id: 48, scholarshipName: "Prof. Girdhar Gopal Shukla Memorial Scholarship", donor: "Mr. Ashish Shukla,", recipient: "Anis Pakrashi", department: "STA/M.Sc" },
  { id: 49, scholarshipName: "Prof. Girdhar Gopal Shukla Memorial Scholarship", donor: "Mr. Ashish Shukla,", recipient: "Suchandra Sasmal", department: "STA/M.Sc" },
  { id: 50, scholarshipName: "Prof. Netar Lal Kapur Scholarship", donor: "Mr. Rajan N. Kapur", recipient: "Harsh Sachan", department: "CHE/BT" },
  { id: 51, scholarshipName: "Protima Ghosh Memorial Scholarship", donor: "Mr. Ranodeb Roy", recipient: "Shivam Goel", department: "ME/BT" },
  { id: 52, scholarshipName: "Neta Ji Balwan Singh Scholarship", donor: "Late Dr. Ranjit Singh", recipient: "Akshat Jain", department: "CHE/B.Tech" },
  { id: 53, scholarshipName: "Neta Ji Balwan Singh Scholarship", donor: "Late Dr. Ranjit Singh", recipient: "Vijay Kumar", department: "ECO/Dual Degree" },
  { id: 54, scholarshipName: "Nirmala & Ashok Keshri Scholarship", donor: "Mr. Piyush Keshri", recipient: "Harsh Mishra", department: "CE/B.Tech" },
  { id: 55, scholarshipName: "Nita Goyal & Ashish Gupta Scholarship", donor: "Ms. Nita Goel, Mr. Ashish Gupta", recipient: "Dilip Parmar", department: "MTH/B.S" },
  { id: 56, scholarshipName: "Nita Goyal & Ashish Gupta Scholarship", donor: "Ms. Nita Goel, Mr. Ashish Gupta", recipient: "Mohit Anand", department: "ME/B.Tech" },
  { id: 57, scholarshipName: "Nita Goyal & Ashish Gupta Scholarship", donor: "Ms. Nita Goel, Mr. Ashish Gupta", recipient: "Harsukh Singh Sagri", department: "EE/B.Tech" },
  { id: 58, scholarshipName: "Nita Goyal & Ashish Gupta Scholarship", donor: "Ms. Nita Goel, Mr. Ashish Gupta", recipient: "Rajendra Parmar", department: "AE-ECO/Dual Degree" },
  { id: 59, scholarshipName: "Pt. Balajee Govind Hardiker Scholarship", donor: "Mr. H.B.Hardiker", recipient: "Pradeep Kumar Bagri", department: "CHE/B.Tech" },
  { id: 60, scholarshipName: "Ram Rajendra Malhotra Educational Society Scholarship", donor: "Mr. H.B.Hardiker", recipient: "Ayush Sahu", department: "CHM/B.S" },
  { id: 61, scholarshipName: "Ram Rajendra Malhotra Educational Society Scholarship", donor: "Mr. H.B.Hardiker", recipient: "Karan", department: "CHM/B.S" },
  { id: 62, scholarshipName: "Ram Rajendra Malhotra Educational Society Scholarship", donor: "Mr. H.B.Hardiker", recipient: "Rahul Ahirwar", department: "EE/B.Tech" },
  { id: 63, scholarshipName: "Ramesh Chandra Yadav Scholarship", donor: "Late Dr. Ranjit Singh", recipient: "Kaushik Thakkar", department: "STA/M.Sc" },
  { id: 64, scholarshipName: "Ramesh Chandra Yadav Scholarship", donor: "Late Dr. Ranjit Singh", recipient: "Sukhendu Manna", department: "CHM/M.Sc" },
  { id: 65, scholarshipName: "S.C. Mehrotra's Scholarship", donor: "Mr. Subhash Chand Mehrotra", recipient: "Hemant Choudhary", department: "CE/B.Tech" },
  { id: 66, scholarshipName: "Sandeep & Vinita Agarwal Scholarship", donor: "Mr. Sandeep Agarwal", recipient: "Rohit Karwa", department: "SDS/B.S" },
  { id: 67, scholarshipName: "Sarpanch Salik Ram Katiyar Scholarship", donor: "Late Dr. Ranjit Singh", recipient: "Shreya Bhiwaniya", department: "ME/B.Tech" },
  { id: 68, scholarshipName: "Sarpanch Salik Ram Katiyar Scholarship", donor: "Late Dr. Ranjit Singh", recipient: "Abhimanyu Singh", department: "CHE/B.Tech" },
  { id: 69, scholarshipName: "Shiv Kumari Shukla Scholarship", donor: "Mr. Devendra Shukla", recipient: "Kanika Kukreja", department: "CHE/B.Tech" },
  { id: 70, scholarshipName: "Shiv Prakash & Dayawanti Sharma Memorial Scholarship", donor: "Mr. Satish Sharma", recipient: "Harbeer Gurjar", department: "CHE/B.Tech" },
  { id: 71, scholarshipName: "Bihari Lal & Nalini Srivastava Memorial Scholarship", donor: "Mr. Chandra Mohan Srivastava", recipient: "Jatin Kumar", department: "CE/B.Tech" },
  { id: 72, scholarshipName: "Shri. D P Shukla Scholarship", donor: "Mr. Devendra K. Shulka", recipient: "Himanshu", department: "ECO/B.S" },
  { id: 73, scholarshipName: "Shri Ranbir and Shrimati Maha devi Chauhan Scholarship", donor: "Mr. Satya P Chauhan", recipient: "Amit Kumar", department: "CHE/B.Tech" },
  { id: 74, scholarshipName: "Shri Shankar Lal & Smt Prema Devi Agarwal Memorial Scholarship", donor: "Mr. Sharwan Kumar Agarwal", recipient: "Mantavya Upadhyay", department: "EE/B.Tech" },
  { id: 75, scholarshipName: "Srimati Bhagwati Rameshwar Goyal Scholarship", donor: "Mr. Ashok Kumar Goyal", recipient: "Mane Shubhada Sanjay", department: "EE/B.Tech" },
  { id: 76, scholarshipName: "Shrimati Madhuri Dubey Scholarship", donor: "Mr. Ajay Dubey", recipient: "Umasankar Mondal", department: "CHM/M.Sc" },
  { id: 77, scholarshipName: "Shrimati Madhuri Dubey Scholarship", donor: "Mr. Ajay Dubey", recipient: "Arka Sinha", department: "CHM/M.Sc" },
  { id: 78, scholarshipName: "Sagnik Asis Ray Scholarship", donor: "Mr. Ashish Ray", recipient: "Sharmin Ansar", department: "BSBE/BT" },
  { id: 79, scholarshipName: "Sagnik Asis Ray Scholarship", donor: "Mr. Ashish Ray", recipient: "Shashank Katiyar", department: "BSBE/BT" },
  { id: 80, scholarshipName: "Steel Scholarship", donor: "Dr. B. Deo (MSE)", recipient: "Nikhil Murlidhar Karamchandani", department: "MSE/BT" },
  { id: 81, scholarshipName: "Sri Singhasan Singh Scholarship", donor: "Mr. Manoj. K", recipient: "Manan Kalavadia", department: "EE/BT" },
  { id: 82, scholarshipName: "Shri Kalp Nath Singh Scholarship", donor: "Mr. Manoj Singh", recipient: "Raghav Karan", department: "ME/BT" },
  { id: 83, scholarshipName: "Smt. Durga Devi Memorial Scholarship", donor: "Dr. S.K. Durga (Retired Prof.)", recipient: "Preeti", department: "CHM/M.Sc" },
  { id: 84, scholarshipName: "Smt. Dharam Vati Garg Scholarship", donor: "Mr. Avinash Agarwal", recipient: "Yatharth Goswami", department: "CSE/BT" },
  { id: 85, scholarshipName: "Yadupati Singhania Memorial Scholarship", donor: "J K Cement Ltd", recipient: "Vinod Kumar Farooliya", department: "CE/BT" },
  { id: 86, scholarshipName: "Yadupati Singhania Memorial Scholarship", donor: "J K Cement Ltd", recipient: "Kaushal Kumar Jha", department: "CE/BT" },
  { id: 87, scholarshipName: "Yadupati Singhania Memorial Scholarship", donor: "J K Cement Ltd", recipient: "Gaurav Sharma", department: "CE/BT" },
  { id: 88, scholarshipName: "Yadupati Singhania Memorial Scholarship", donor: "J K Cement Ltd", recipient: "Divyansh Patel", department: "CE/BT" },
  { id: 89, scholarshipName: "Yadupati Singhania Memorial Scholarship", donor: "J K Cement Ltd", recipient: "Chandan Singh Naruka", department: "CE/BT" },
  { id: 90, scholarshipName: "Yadupati Singhania Memorial Scholarship", donor: "J K Cement Ltd", recipient: "Ashish Gautam", department: "CE/BT" },
  { id: 91, scholarshipName: "Shanti Devi & Onkar Nath Maewal Memorial Scholarship", donor: "Mr. Akhilesh Maewal", recipient: "Jaya Gupta", department: "CSE/BT" },
  { id: 92, scholarshipName: "Shanti & Ramkishore Sahai Saxena Memorial Scholarship", donor: "Mr. Ashokand Madhu Saxena", recipient: "Dhruv Gupta", department: "CSE/BT" },
  { id: 93, scholarshipName: "Seema Jain Scholarship", donor: "Prof. Sudhir K Jain", recipient: "Khyati Jain", department: "CHM/M.Sc" },
  { id: 94, scholarshipName: "Romesh Chandra Memorial Scholarship", donor: "Mr. Tushar Deepak Chandra", recipient: "Kaustubh Verma", department: "CSE/BT" },
  { id: 95, scholarshipName: "Romesh Chandra Memorial Scholarship", donor: "Mr. Tushar Deepak Chandra", recipient: "Dravya Marwaha", department: "CSE/BT" },
  { id: 96, scholarshipName: "Ravi and Rohini Sakhuja MCM Scholarship", donor: "Ravinder Kumar Sakhuja", recipient: "Sahil Kenil Gala", department: "ME/BT" },
  { id: 97, scholarshipName: "Ravi and Rohini Sakhuja MCM Scholarship", donor: "Ravinder Kumar Sakhuja", recipient: "Ananya Agrawal", department: "ME/BT" },
  { id: 98, scholarshipName: "Ravi and Rohini Sakhuja MCM Scholarship", donor: "Ravinder Kumar Sakhuja", recipient: "Suryanshu Kumar Jaiswal", department: "ME/BT" },
  { id: 99, scholarshipName: "Ravi and Rohini Sakhuja MCM Scholarship", donor: "Ravinder Kumar Sakhuja", recipient: "Darsh Kumar", department: "ME/BT" },
  { id: 100, scholarshipName: "Sri. Raj Nath Singh Scholarship", donor: "M/s Freddie MAC Foundation U ( Mr. Manoj Singh )", recipient: "Pranab Pandey", department: "ME/BT" },
  { id: 101, scholarshipName: "Mona & Paramjit Singh Scholarship", donor: "Mr. Ajit Gill", recipient: "Saloni Das", department: "BSBE/BT" },
  { id: 102, scholarshipName: "Mona & Paramjit Singh Scholarship", donor: "Mr. Ajit Gill", recipient: "Sharmin Ansar", department: "BSBE/BT" },
  { id: 103, scholarshipName: "K.N. Saluja Scholarships", donor: "Mr. Hersh Saluja", recipient: "Chiranshu Kataria", department: "CE/BT" },
  { id: 104, scholarshipName: "K.N. Saluja Scholarships", donor: "Mr. Hersh Saluja", recipient: "Anmol Bansal", department: "CE/BT" },
  { id: 105, scholarshipName: "K.N. Saluja Scholarships", donor: "Mr. Hersh Saluja", recipient: "Aman Khilani", department: "CE/BT" },
  { id: 106, scholarshipName: "K.N. Saluja Scholarships", donor: "Mr. Hersh Saluja", recipient: "Abhay Shukla", department: "CE/BT" },
  { id: 107, scholarshipName: "K.N. Saluja Scholarships", donor: "Mr. Hersh Saluja", recipient: "Gauri", department: "CE/BT" },
  { id: 108, scholarshipName: "K.N. Saluja Scholarships", donor: "Mr. Hersh Saluja", recipient: "Ayush Prajapati", department: "CE/BT" },
  { id: 109, scholarshipName: "K.N. Saluja Scholarships", donor: "Mr. Hersh Saluja", recipient: "Aryash Pateriya", department: "CE/BT" },
  { id: 110, scholarshipName: "K.N. Saluja Scholarships", donor: "Mr. Hersh Saluja", recipient: "Abhinav Raj Singh", department: "CE/BT" },
  { id: 111, scholarshipName: "Rajendra Rathore Memorial Scholarship", donor: "Friends and family of Lt.Rajendra Rathore", recipient: "Arka Sinha", department: "CHM/M.Sc" },
  { id: 112, scholarshipName: "Dr. Prateek Mishra Memorial Scholarship", donor: "Family and Friends of Prateek Mishra", recipient: "Hamza Masood", department: "EE/BT" },
  { id: 113, scholarshipName: "Director's Scholarships", donor: "Group of donors through fundraising drive", recipient: "Swayamsidh Pradhan", department: "CSE/BT" },
  { id: 114, scholarshipName: "Shrimati Vidyawati Dubey Scholarship", donor: "Mr. Ajay Dubey", recipient: "Bhabani Sankar Dehury", department: "CHM/M.Sc" },
  { id: 115, scholarshipName: "Simran & Mandeep Kainth Memorial Scholarship", donor: "Dr. G.S.Kainth", recipient: "Soham Sen", department: "AE/B.Tech" },
  { id: 116, scholarshipName: "Director's Scholarships", donor: "Group of donors through fundraising drive", recipient: "Pallav Goyal", department: "CSE/BT" },
  { id: 117, scholarshipName: "Director's Scholarships", donor: "Group of donors through fundraising drive", recipient: "Mridul Gupta", department: "CSE/BT" },
  { id: 118, scholarshipName: "Director's Scholarships", donor: "Group of donors through fundraising drive", recipient: "Debraj Karmakar", department: "CSE/BT" },
  { id: 119, scholarshipName: "Director's Scholarships", donor: "Group of donors through fundraising drive", recipient: "Arush Upadhyaya", department: "CSE/BT" },
  { id: 120, scholarshipName: "Director's Scholarships", donor: "Group of donors through fundraising drive", recipient: "Apoorv Tandon", department: "CSE/BT" },
  { id: 121, scholarshipName: "Director's Scholarships", donor: "Group of donors through fundraising drive", recipient: "Ankit Kaushik", department: "CSE/BT" },
  { id: 122, scholarshipName: "Class of 1990 Scholarship", donor: "1990 Batch", recipient: "Sankalp Mittal", department: "CSE/BT" },
  { id: 123, scholarshipName: "Class of 1990 Scholarship", donor: "1990 Batch", recipient: "Pragati Agrawal", department: "CSE/BT" },
  { id: 124, scholarshipName: "Class of 1990 Scholarship", donor: "1990 Batch", recipient: "Naman Kumar Jaiswal", department: "CSE/BT" },
  { id: 125, scholarshipName: "Class of 1990 Scholarship", donor: "1990 Batch", recipient: "Harshit", department: "CSE/BT" },
  { id: 126, scholarshipName: "Bhagwan Das Sanghi Memorial Scholarship", donor: "Family of Late B.D. Sanghi", recipient: "Vrinda Sharma", department: "MTH/BS" },
  { id: 127, scholarshipName: "Baljit & Nirmal Dhindsa Scholarship", donor: "Mr. Ajit Gill", recipient: "Eeshwari J Sunkersett", department: "BSBE/BT" },
  { id: 128, scholarshipName: "Baljit & Nirmal Dhindsa Scholarship", donor: "Mr. Ajit Gill", recipient: "Jahnvi Singh", department: "BSBE/BT" },
  { id: 129, scholarshipName: "Arakere and Karen Vasudev Scholarship", donor: "Prof. Arakere Vasudev", recipient: "Pratyush Gupta", department: "CHE/BT" },
  { id: 130, scholarshipName: "Aedunuthula Prasad Memorial Scholarship", donor: "Mr. Rama Koteswar Rao Aedunuthula Smt. Sarojini Mattegunta", recipient: "Teki Sai Veerabhadra Nikhil", department: "CHM/BS" },
  { id: 131, scholarshipName: "Sengupta Grant Scholarship", donor: "Mr. Swapan Sengupta", recipient: "Saurabh Kumar Maurya", department: "CE/MT" },
  { id: 132, scholarshipName: "Sengupta Grant Scholarship", donor: "Mr. Swapan Sengupta", recipient: "Kailash Dangwal", department: "CE/MT" },
  { id: 133, scholarshipName: "Kedar Singh Rawat Memorial Scholarship", donor: "Dr. Shishpal S. Rawat", recipient: "Divyansh Chhabria", department: "CSE/BT" },
  { id: 134, scholarshipName: "Bachi Devi Rawat Memorial Scholarship", donor: "Dr. Shishpal S. Rawat", recipient: "Abhinav Mittal", department: "EE/BT" },
  { id: 135, scholarshipName: "Mallampati Bala Kishore Memorial Scholarship", donor: "Dr. Virajith Jalaparti", recipient: "Paras Sikarwar", department: "CSE/BT" },
  { id: 136, scholarshipName: "Smt.Savitridevi Memorial Scholarship", donor: "Mr.Sudhir Mittal", recipient: "Vidhi Jain", department: "CHE/BT" },
  { id: 137, scholarshipName: "Pawan Tewari Goldman Sachs Scholarships", donor: "Mr. Pawan Tewari", recipient: "Prerna Singh Chauhan", department: "CHE/BT" },
  { id: 138, scholarshipName: "Pawan Tewari Goldman Sachs Scholarships", donor: "Mr. Pawan Tewari", recipient: "Madhur Bansal", department: "SDS/BS" },
  { id: 139, scholarshipName: "Pawan Tewari Goldman Sachs Scholarships", donor: "Mr. Pawan Tewari", recipient: "Nikhil Gupta", department: "EE/BT" },
  { id: 140, scholarshipName: "Pawan Tewari Goldman Sachs Scholarships", donor: "Mr. Pawan Tewari", recipient: "Ananya Agrawal", department: "CSE/BT" },
  { id: 141, scholarshipName: "Smt. Jagat Kaur Memorial Scholarship", donor: "Mr. Rajiv singh", recipient: "Riya Saini", department: "CHE/B.Tech" },
  { id: 142, scholarshipName: "Smt. Neela Dutt Scholarship", donor: "Mr. Saibal Dutt", recipient: "Md Saif", department: "CHE/B.Tech" },
  { id: 143, scholarshipName: "Smt Padmavathy & Prof R Sankar Scholarship", donor: "Mr. Sri Ram Sankar", recipient: "Shapath Bhandari", department: "CHM/M.Sc" },
  { id: 144, scholarshipName: "Saraswati Singh Scholarship", donor: "Mr. Manoj K Singh", recipient: "Nitish Kumar", department: "EE/B.Tech" },
  { id: 145, scholarshipName: "Shri Bishamber Gupta and Smt. Anguri Gupta Scholarship", donor: "Mr. Satish Gupta", recipient: "Manan Kalavadia", department: "EE/B.Tech" },
  { id: 146, scholarshipName: "Shree Anand Swaroop Garg Scholarship", donor: "Mr. Ashutosh Garg", recipient: "Mohd Azam", department: "MTH/B.S" },
  { id: 147, scholarshipName: "Smt. Shanti Devi Garg Scholarship", donor: "Mr. Ashutosh Garg", recipient: "Anshika Singh", department: "MSE/B.Tech" },
  { id: 148, scholarshipName: "Shree Ramjee Lal Garg Scholarship", donor: "Mr. Ashutosh Garg", recipient: "Kunal Saini", department: "MSE/B.Tech" },
  { id: 149, scholarshipName: "Shri Jamuna Prasad & Smt. Basanti Gupta Scholarship", donor: "Mr. Maini R. Gupta", recipient: "Swati Patel", department: "MSE/B.Tech" },
  { id: 150, scholarshipName: "Shri R & R Chari Scholarship", donor: "Mr. Rangarajan VR", recipient: "Mohit Gupta", department: "CSE/B.Tech" },
  { id: 151, scholarshipName: "Sri Temasek @ IITK Scholarship", donor: "Dr. Murali Damodaran", recipient: "Prateek Kumar Pandey", department: "CHE/B.Tech" },
  { id: 152, scholarshipName: "Srikant Mishra Memorial Scholarship", donor: "Mr. Shrikant Mishra Dr. Sobi pandey", recipient: "Sanju Yadav", department: "PHY/M.Sc" },
  { id: 153, scholarshipName: "Sudarshan Kasturia Memorial Scholarship", donor: "Mr. Sanjay Kasturia/ Ms Anjali Joshi", recipient: "Akshan Agrawal", department: "ME-CSE/B.Tech" },
  { id: 154, scholarshipName: "Swami Sivananda Memorial Scholarship", donor: "Divine Life Society Garhwal Uttarakhand", recipient: "Kush Daga", department: "ECO/B.S" },
  { id: 155, scholarshipName: "Swami Sivananda Memorial Scholarship", donor: "Divine Life Society Garhwal Uttarakhand", recipient: "Sahil Singh", department: "ME/B.Tech" },
  { id: 156, scholarshipName: "Swami Sivananda Memorial Scholarship", donor: "Divine Life Society Garhwal Uttarakhand", recipient: "Devendra Jangir", department: "ME/B.Tech" },
  { id: 157, scholarshipName: "Swami Sivananda Memorial Scholarship", donor: "Divine Life Society Garhwal Uttarakhand", recipient: "Ujjawal Agarwal", department: "ME/B.Tech" },
  { id: 158, scholarshipName: "Swaminathan & Garg Scholarship", donor: "Mr. Sanjay Garg", recipient: "Ashish Kumar", department: "AE/B.Tech" },
  { id: 159, scholarshipName: "Tapan Kumar & Swapna bandopadhyay Scholarship", donor: "Mr. Subhajyoti Bandyopadhyay", recipient: "Navneet Singh", department: "ES/B.S" },
  { id: 160, scholarshipName: "Tarun Sondhi Memorial Scholarship", donor: "Mr. Vipin Sondhi", recipient: "Navnit Patel", department: "ME/B.Tech" },
  { id: 161, scholarshipName: "Vasudeo Laxman Sahasrabuddhe Vaidya Award Scholarship", donor: "Mrs. Veena Sahasrabuddhe Prof. H.V. Sahasrabuddhe", recipient: "Harsh Kumar Gautam", department: "CE/B.Tech" },
  { id: 162, scholarshipName: "Vasudeo Laxman Sahasrabuddhe Vaidya Award Scholarship", donor: "Mrs. Veena Sahasrabuddhe Prof. H.V. Sahasrabuddhe", recipient: "Ayush Pratap Singh Chauhan", department: "CHE/B.Tech" },
  { id: 163, scholarshipName: "Vimal Madan Memorial Scholarship", donor: "Ms. Suarhaa Monica Banerjee", recipient: "Abhishek Khandelwal", department: "CSE/B.Tech" },
  { id: 164, scholarshipName: "Sri Vinay Kumar Kapoor and Smt. Sudha Kapoor Memorial Scholarship", donor: "AIM FOR SEVA (Mr. Arun Kumar Kapoor)", recipient: "Vishrant Chirag Dave", department: "MSE/B.Tech" },
  { id: 165, scholarshipName: "Yashodha Yadav Scholarship", donor: "Late Dr. Ranjit Singh", recipient: "Dharamchand", department: "MSE/B.Tech" },
  { id: 166, scholarshipName: "Yashodha Yadav Scholarship", donor: "Late Dr. Ranjit Singh", recipient: "Bhavesh Shukla", department: "MSE/B.Tech" },
  { id: 167, scholarshipName: "Class of 1968 Scholarship", donor: "1968 Batch", recipient: "Lavudya Rajkumar", department: "ES/B.S" },
  { id: 168, scholarshipName: "Class of 1968 Scholarship", donor: "1968 Batch", recipient: "Pragati Singh", department: "MSE/B.Tech" },
  { id: 169, scholarshipName: "Class of 1968 Scholarship", donor: "1968 Batch", recipient: "Ramavath Kalyan", department: "ES/B.S" },
  { id: 170, scholarshipName: "Class of 1968 Scholarship", donor: "1968 Batch", recipient: "T Sai Kiran", department: "BSBE/B.Tech" },
  { id: 171, scholarshipName: "Class of 1968 Scholarship", donor: "1968 Batch", recipient: "Siddharth Pathak", department: "SDS/B.S" },
  { id: 172, scholarshipName: "Class of 1968 Scholarship", donor: "1968 Batch", recipient: "Stanzin Angmo", department: "CHM/B.S" },
  { id: 173, scholarshipName: "Class of 1968 Scholarship", donor: "1968 Batch", recipient: "Banoth Anand", department: "MTH/B.S" },
  { id: 174, scholarshipName: "Class of 1968 Scholarship", donor: "1968 Batch", recipient: "Dharavath Yswanth Akhil", department: "MSE/B.Tech" },
  { id: 175, scholarshipName: "Class of 1968 Scholarship", donor: "1968 Batch", recipient: "Mood Pavan", department: "MTH/B.S" },
  { id: 176, scholarshipName: "Class of 1968 Scholarship", donor: "1968 Batch", recipient: "Nenavath Chandu", department: "ES/B.S" },
  { id: 177, scholarshipName: "Class of 1968 Scholarship", donor: "1968 Batch", recipient: "Rathlavath Siddu", department: "MTH/B.S" },
  { id: 178, scholarshipName: "Class of 1968 Scholarship", donor: "1968 Batch", recipient: "Vemuri Nissy Mohan", department: "CHM/B.S" },
  { id: 179, scholarshipName: "Neelam and Anil Singh Scholarship", donor: "Mr. Atul Singh", recipient: "Saurabh Yadav", department: "CHE/B.Tech" },
  { id: 180, scholarshipName: "Batch of 1965 Scholarship", donor: "Batch of 1965", recipient: "Gokavarapu V V S S Manikanta", department: "CSE/BT" },
  { id: 181, scholarshipName: "Batch of 1965 Scholarship", donor: "Batch of 1965", recipient: "Prapti Himanshu Dagli", department: "CSE/BT" },
  { id: 182, scholarshipName: "Batch of 1965 Scholarship", donor: "Batch of 1965", recipient: "Varun Gangwar", department: "CHE/BT" },
  { id: 183, scholarshipName: "Batch of 1965 Scholarship", donor: "Batch of 1965", recipient: "Vansh Bansal", department: "CSE/BT" },
  { id: 184, scholarshipName: "Vishesh Panjabi Memorial Scholarship", donor: "Family and Friends", recipient: "Harsh Patel", department: "BSBE/BT" },
  { id: 185, scholarshipName: "Shri Nathmal Kanodia Memorial Scholarship", donor: "Mr. Mayank Kanodia", recipient: "Raju Singh", department: "CHE/BT" },
  { id: 186, scholarshipName: "Mrs. Nirmal Kumari Gaur Scholarship", donor: "Prof. Rita Pandey", recipient: "Bashaboyna Vasavi", department: "CSE/BT" },
  { id: 187, scholarshipName: "Bhawani Shankar Meena Memorial Scholarship", donor: "2000 batch", recipient: "Krishn Kumar Choudhary", department: "CE/BT" },
  { id: 188, scholarshipName: "Sandeep and Shruti Gupta Talent Scholarship", donor: "Mr.Sandeep Gupta", recipient: "Anjali", department: "ME/BT" },
  { id: 189, scholarshipName: "Shobha Memorial Scholarship", donor: "Dr.Ashok K Jain", recipient: "Lipi Jain", department: "CSE/BT" },
  { id: 190, scholarshipName: "Pramodini Agarwal Scholarship", donor: "Mr. Alok Agarwal", recipient: "Tulika Shukla", department: "ME/BT" },
  { id: 191, scholarshipName: "Neela Namjoshi Scholarship", donor: "Mr. Alok Agarwal", recipient: "Baishali Das", department: "AE/BT" },
  { id: 192, scholarshipName: "Prof. Sanjeev K Agarwal Scholarship", donor: "Alumni of IITK, family and friends", recipient: "Bommareddy Indra Sena Reddy", department: "CSE/B.Tech" },
  { id: 193, scholarshipName: "Prof. Sanjeev K Agarwal Scholarship", donor: "Alumni of IITK, family and friends", recipient: "Sandeep Kumar Bijarnia", department: "CSE/B.Tech" },
  { id: 194, scholarshipName: "Mrs. Ratna Kaushik and Dr. Bhooshan lal Scholarship", donor: "Mrs. Ratna Kaushik & Dr. Bhooshan lal", recipient: "Atul Kumar Bhongade", department: "EE/B.Tech" },
  { id: 195, scholarshipName: "Shri Ram Sahai Agarwal Scholarship", donor: "Mr. Alok Agarwal", recipient: "Anishka Raj", department: "ME/B.Tech" },
  { id: 196, scholarshipName: "B P Srivastava Scholarship", donor: "Dr. Ramesh Chandra Srivastava", recipient: "Jitu Mallick", department: "CHM/M.Sc" },
  { id: 197, scholarshipName: "Smt.Saroja Krishnan Scholarship", donor: "Shri Kannan Krishnan", recipient: "Monika Kumari", department: "CE/B.Tech" },
  { id: 198, scholarshipName: "Avijit Lal Memorial Scholarship", donor: "Family and Friends of Late Avijit Lal", recipient: "Mohd Asif Khan", department: "EE/BT" },
  { id: 199, scholarshipName: "Avijit Lal Memorial Scholarship", donor: "Family and Friends of Late Avijit Lal", recipient: "Maurya Aryan Swaminath", department: "CSE/BT" },
  { id: 200, scholarshipName: "Avijit Lal Memorial Scholarship", donor: "Family and Friends of Late Avijit Lal", recipient: "Jatin Chauhan", department: "EE/BT" },
  { id: 201, scholarshipName: "Class of 1973 Merit Cum Means Scholarship", donor: "1973 pass out batch", recipient: "Shubham Kumar", department: "AE/BT" },
  { id: 202, scholarshipName: "Class of 1973 Merit Cum Means Scholarship", donor: "1973 pass out batch", recipient: "Udit Narayan Pandey", department: "EE/BT" },
  { id: 203, scholarshipName: "Class of 1973 Merit Cum Means Scholarship", donor: "1973 pass out batch", recipient: "Sunny Kumar Bhagat", department: "CHE/BT" },
  { id: 204, scholarshipName: "Class of 1973 Merit Cum Means Scholarship", donor: "1973 pass out batch", recipient: "Love Kumar Varshney", department: "ME/BT" },
  { id: 205, scholarshipName: "Class of 1973 Merit Cum Means Scholarship", donor: "1973 pass out batch", recipient: "Ashish Ahuja", department: "BSBE/BT" },
  { id: 206, scholarshipName: "Combined Scholarship Scheme for UG Students", donor: "1971 Batch Fund 1974 Batch Fund 1975 Batch Fund 1978 Batch Fund 1985 Batch Fund", recipient: "Bhavya Garg", department: "BSBE/B.Tech" },
  { id: 207, scholarshipName: "M A Pai Undergraduate Scholarship", donor: "Mr. Vijay Vittal", recipient: "Ramdev Meghwal", department: "EE/BT" },
  { id: 208, scholarshipName: "Combined Scholarship Scheme for UG Students", donor: "1971 Batch Fund 1974 Batch Fund 1975 Batch Fund 1978 Batch Fund 1985 Batch Fund", recipient: "Dabbe Kunal Suresh", department: "ME/B.Tech" },
  { id: 209, scholarshipName: "Combined Scholarship Scheme for UG Students", donor: "1971 Batch Fund 1974 Batch Fund 1975 Batch Fund 1978 Batch Fund 1985 Batch Fund", recipient: "Darshan", department: "CE/B.Tech" },
  { id: 210, scholarshipName: "R K Gupta Scholarship", donor: "Mr. R K Gupta", recipient: "Kalika", department: "CSE/BT" },
  { id: 211, scholarshipName: "Combined Scholarship Scheme for UG Students", donor: "1971 Batch Fund 1974 Batch Fund 1975 Batch Fund 1978 Batch Fund 1985 Batch Fund", recipient: "Siddhant Lalpuria", department: "EE/B.Tech" },
  { id: 212, scholarshipName: "Gyanvati & Kamta Prasad Memorial Scholarship", donor: "Mr. Hemant Gupta", recipient: "Stanzin Yangdol", department: "MTH/BS" },
  { id: 213, scholarshipName: "Combined Scholarship Scheme for UG Students", donor: "1971 Batch Fund 1974 Batch Fund 1975 Batch Fund 1978 Batch Fund 1985 Batch Fund", recipient: "T M Abisanth", department: "EE/B.Tech" },
  { id: 214, scholarshipName: "Combined Scholarship Scheme for UG Students", donor: "1971 Batch Fund 1974 Batch Fund 1975 Batch Fund 1978 Batch Fund 1985 Batch Fund", recipient: "Tushar Sahu", department: "EE/B.Tech" },
  { id: 215, scholarshipName: "Combined Scholarship Scheme for UG Students", donor: "1971 Batch Fund 1974 Batch Fund 1975 Batch Fund 1978 Batch Fund 1985 Batch Fund", recipient: "Umang Garg", department: "CHE/B.Tech" },
  { id: 216, scholarshipName: "Smt. Shyam Lata Garg Scholarship", donor: "Mr. Ashutosh Garg", recipient: "Nikita Chauhan", department: "CSE/B.Tech" },
  { id: 217, scholarshipName: "Director's Scholarships", donor: "Group of donors through fundraising drive", recipient: "Nipun Nohria", department: "CSE/B.Tech" },
  { id: 218, scholarshipName: "Mahabala Rajaraman Scholarship", donor: "Mr. Ashok Shah", recipient: "Harsh Kumar Pandey", department: "EE/B.Tech" },
  { id: 219, scholarshipName: "Jasmine & Mohiuddin Merit Scholarship", donor: "Mr. Mohiuddin Golam", recipient: "Chirag Singhal", department: "MTH/M.Sc" },
  { id: 220, scholarshipName: "Smt.Saroja Krishnan Scholarship", donor: "Shri Kannan Krishnan", recipient: "Sneh Omer", department: "CHE/B.Tech" },
  { id: 221, scholarshipName: "Satish and Kamlesh Agarwal Scholarship, Houston Texas, USA", donor: "Mr. Satish Agarwal from Houston, Texas, USA", recipient: "Dnyaneshwar Ramesh Pawar", department: "CE/B.Tech" },
  { id: 222, scholarshipName: "Arish Ali Scholarship", donor: "Mr.Arish Ali", recipient: "VIDHI JAIN", department: "CHE/BT" },
  { id: 223, scholarshipName: "Ravi and Rohini Sakhuja Project Scholarships", donor: "Ravinder Kumar Sakhuja", recipient: "HEM KALPAK SHAH", department: "MSE/BT" },
  { id: 224, scholarshipName: "Pushpa Garg Scholarship", donor: "Mrs. Ewa and Atul Garg", recipient: "GORRE KARTHIK", department: "AE/BT" },
  { id: 225, scholarshipName: "Class of 1973 Merit Cum Means Scholarship", donor: "1973 pass out batch", recipient: "Goutam Das", department: "CSE/B.Tech" },
  { id: 226, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "Ajeet Meena", department: "CSE/BT" },
  { id: 227, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "Akanksha Yadav", department: "AE/BT" },
  { id: 228, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "surendra kumar ahirwar", department: "CSE/BT" },
  { id: 229, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "V PAVAN KUMAR", department: "ME/BT" },
  { id: 230, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "Yuvraj Singh Kharte", department: "PHY/BT" },
  { id: 231, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "Anju Kumari", department: "EE/BT" },
  { id: 232, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "Anmol Kumar Ahirwar", department: "CE/BT" },
  { id: 233, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "ATUL KUMAR", department: "ME/BT" },
  { id: 234, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "Karamveer Singh", department: "ME/BT" },
  { id: 235, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "Monika kumari", department: "ES/BT" },
  { id: 236, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "Sachin", department: "EE/BT" },
  { id: 237, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "SAMALA SAI PRASHAMSA", department: "CHM/BS" },
  { id: 238, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "Sandeep Parmar", department: "SDS/BT" },
  { id: 239, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "UDAY SINGH MEENA", department: "CHM/BS" },
  { id: 240, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "JANGA RAKESH KUMAR", department: "ME/BT" },
  { id: 241, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "Pintu Behera", department: "CHE/BT" },
  { id: 242, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "Sakshi Kishore Patil", department: "ECO/BS" },
  { id: 243, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "SAURAV KUMAR", department: "CE/BT" },
  { id: 244, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "VIKASH KUMAR", department: "CE/BT" },
  { id: 245, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "Aadya Umrao", department: "CE/BT" },
  { id: 246, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "Abhishek Pandey", department: "PHY/BT" },
  { id: 247, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "Aman Kashyap", department: "AE/BT" },
  { id: 248, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "Amanjit Singh", department: "AE/BT" },
  { id: 249, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "Anurag Mandal", department: "ES/BT" },
  { id: 250, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "BHUKYA SAGAR", department: "CHE/BT" },
  { id: 251, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "Dilip parmar", department: "MTH/BS" },
  { id: 252, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "Gaurav Kumar Meena", department: "ME/BT" },
  { id: 253, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "Gyanranjan Murmu", department: "MTH/BS" },
  { id: 254, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "Priyanshu Priyam", department: "CE/BT" },
  { id: 255, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "Ritik Kumar", department: "BSBE/BT" },
  { id: 256, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "YOGENDRA", department: "CHE/BT" },
  { id: 257, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "Digambar Singh", department: "CHE/BT" },
  { id: 258, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "Himanshu Yadav", department: "ME/BT" },
  { id: 259, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "Kunal Nayak", department: "MTH/BT" },
  { id: 260, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "Pooja Meena", department: "ES/BT" },
  { id: 261, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "Amisha Patel", department: "ME/BT" },
  { id: 262, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "Anu", department: "BSBE/BT" },
  { id: 263, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "Atul sambhaji waghmare", department: "AE/BT" },
  { id: 264, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "Baishali Das", department: "AE/BT" },
  { id: 265, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "Bhabani Sankar Dehury", department: "CHM/BT" },
  { id: 266, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "Himanshu kumar", department: "ES/BT" },
  { id: 267, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "Mohd Riyaaz", department: "MSE/BT" },
  { id: 268, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "Nidhi", department: "ME/BT" },
  { id: 269, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "Nitish Kumar", department: "EE/BT" },
  { id: 270, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "Praveen Kumar Swami", department: "EE/BT" },
  { id: 271, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "Saumya Saini", department: "EE/BT" },
  { id: 272, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "VISHAL SINGH", department: "CHM/BT" },
  { id: 273, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "Vishant Bhadana", department: "ES/BT" },
  { id: 274, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "Amit Kumar", department: "CHE/BT" },
  { id: 275, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "Ganesh kumar", department: "MSE/BT" },
  { id: 276, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "Manish Meena", department: "CSE/BT" },
  { id: 277, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "Vishnu gaur", department: "AE/BT" },
  { id: 278, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "Shashank C S", department: "PHY/BS" },
  { id: 279, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "Mukesh Nath", department: "ME/BT" },
  { id: 280, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "POOJA KUMARI", department: "MTH/BS" },
  { id: 281, scholarshipName: "Combined Scholarship Scheme for UG Students", donor: "1971 Batch Fund 1974 Batch Fund 1975 Batch Fund 1978 Batch Fund 1985 Batch Fund", recipient: "Tanishq Maheshwari", department: "CSE/B.Tech" },
  { id: 282, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "Ravi Vaishnav", department: "ECO/B.Tech" },
  { id: 283, scholarshipName: "PSB Prasad Memorial Scholarship", donor: "Ms. Rekha Rani Prasad", recipient: "Aneet Kumar", department: "PHY/M.Sc" },
  { id: 284, scholarshipName: "Sudhir Singhal Scholarship (formerly Shraman Foundation Scholarship)", donor: "Shraman Foundation", recipient: "Sheeshram choudhary", department: "EE/B.Tech" }
];

// Debounce function to limit the rate of function execution
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
    console.error("Table body not found");
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

  // Update results count
  const resultsCount = document.getElementById("resultsCount");
  const noResults = document.getElementById("noResults");
  if (resultsCount && noResults) {
    resultsCount.textContent = `${data.length} recipient${data.length !== 1 ? 's' : ''} found`;
    noResults.style.display = data.length === 0 ? 'block' : 'none';
  }
}

// Filter table based on search input
function filterTable() {
  const searchInput = document.getElementById("searchInput");
  if (!searchInput) {
    console.error("Search input not found");
    return;
  }
  const searchTerm = searchInput.value.toLowerCase();
  const filteredData = recipient.filter(
    (item) =>
      item.scholarshipName.toLowerCase().includes(searchTerm) ||
      item.donor.toLowerCase().includes(searchTerm) ||
      item.recipient.toLowerCase().includes(searchTerm) ||
      item.department.toLowerCase().includes(searchTerm)
  );
  renderTable(filteredData);
}

// Initialize table and search functionality on page load
document.addEventListener("DOMContentLoaded", () => {
  renderTable(recipient);
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", debounce(filterTable, 300));
  } else {
    console.error("Search input not found on DOM load");
  }
});