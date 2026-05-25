// Scholarship data with 198 entries
const scholarships = [
  { id: 1, scholarshipName: "Dr. Prateek Mishra Memorial Scholarship", donor: "Family and Friends of Prateek Mishra", recipient: "Anshumann", department: "EE/B.Tech" },
  { id: 2, scholarshipName: "Dr. Prateek Mishra Memorial Scholarship", donor: "Family and Friends of Prateek Mishra", recipient: "Mandar Bapat", department: "EE/B.Tech" },
  { id: 3, scholarshipName: "K.N. Saluja Scholarships", donor: "Mr. Hersh Saluja", recipient: "Shivansh Tripathi", department: "CE/B.Tech" },
  { id: 4, scholarshipName: "K.N. Saluja Scholarships", donor: "Mr. Hersh Saluja", recipient: "Abhay Pratap Singh", department: "CE/B.Tech" },
  { id: 5, scholarshipName: "K.N. Saluja Scholarships", donor: "Mr. Hersh Saluja", recipient: "Yash Vardhan Raizada", department: "CE/B.Tech" },
  { id: 6, scholarshipName: "K.N. Saluja Scholarships", donor: "Mr. Hersh Saluja", recipient: "Akshat Agrawal", department: "CE/B.Tech" },
  { id: 7, scholarshipName: "K.N. Saluja Scholarships", donor: "Mr. Hersh Saluja", recipient: "Pratyush Ranjan", department: "CE/B.Tech" },
  { id: 8, scholarshipName: "K.N. Saluja Scholarships", donor: "Mr. Hersh Saluja", recipient: "Jatin Kumar", department: "CE/B.Tech" },
  { id: 9, scholarshipName: "K.N. Saluja Scholarships", donor: "Mr. Hersh Saluja", recipient: "Sonali Gupta", department: "CE/B.Tech" },
  { id: 10, scholarshipName: "K.N. Saluja Scholarships", donor: "Mr. Hersh Saluja", recipient: "Darsh Kumar", department: "CE/B.Tech" },
  { id: 11, scholarshipName: "K.N. Saluja Scholarships", donor: "Mr. Hersh Saluja", recipient: "Varun Maghnani", department: "CE/B.Tech" },
  { id: 12, scholarshipName: "Smt. Dharam Vati Garg Scholarship", donor: "Mr. Avinash Agarwal", recipient: "Abhyuday Pandey", department: "CSE/B.Tech" },
  { id: 13, scholarshipName: "Smt. Dharam Vati Garg Scholarship", donor: "Mr. Avinash Agarwal", recipient: "Durgesh Rajendra Agrawal", department: "CSE/B.Tech" },
  { id: 14, scholarshipName: "Romesh Chandra Memorial Scholarship", donor: "Mr. Tushar Deepak Chandra", recipient: "Abhyuday Pandey", department: "CSE/B.Tech" },
  { id: 15, scholarshipName: "Romesh Chandra Memorial Scholarship", donor: "Mr. Tushar Deepak Chandra", recipient: "Durgesh Rajendra Agrawal", department: "CSE/B.Tech" },
  { id: 16, scholarshipName: "Jasmine & Mohiuddin Merit Scholarship", donor: "Mr. Mohiuddin Golam", recipient: "Dilshad Imon", department: "STAT/M.Sc" },
  { id: 17, scholarshipName: "Jasmine & Mohiuddin Merit Scholarship", donor: "Mr. Mohiuddin Golam", recipient: "Sanket Agrawal", department: "STAT/M.Sc" },
  { id: 18, scholarshipName: "Jasmine & Mohiuddin Merit Scholarship", donor: "Mr. Mohiuddin Golam", recipient: "Sayan Das", department: "STAT/M.Sc" },
  { id: 19, scholarshipName: "Class of 1990 Scholarship", donor: "1990 Batch", recipient: "Jasjot Singh", department: "CSE/B.Tech" },
  { id: 20, scholarshipName: "Class of 1990 Scholarship", donor: "1990 Batch", recipient: "Aditya Tanwar", department: "CSE/B.Tech" },
  { id: 21, scholarshipName: "Class of 1990 Scholarship", donor: "1990 Batch", recipient: "Harsh Jain", department: "CSE/B.Tech" },
  { id: 22, scholarshipName: "Class of 1990 Scholarship", donor: "1990 Batch", recipient: "Janhvi Rochwani", department: "CSE/B.Tech" },
  { id: 23, scholarshipName: "Yadupati Singhania Memorial Scholarship", donor: "J K Cement Ltd", recipient: "Ritik Raj", department: "CE/B.Tech" },
  { id: 24, scholarshipName: "Yadupati Singhania Memorial Scholarship", donor: "J K Cement Ltd", recipient: "Akhand Pratap Singh", department: "CE/B.Tech" },
  { id: 25, scholarshipName: "Yadupati Singhania Memorial Scholarship", donor: "J K Cement Ltd", recipient: "Nishithaarsh Umrao", department: "CE/B.Tech" },
  { id: 26, scholarshipName: "Yadupati Singhania Memorial Scholarship", donor: "J K Cement Ltd", recipient: "Gaurav Sharma", department: "CE/B.Tech" },
  { id: 27, scholarshipName: "Yadupati Singhania Memorial Scholarship", donor: "J K Cement Ltd", recipient: "Ashish Gautam", department: "CE/B.Tech" },
  { id: 28, scholarshipName: "Sandeep & Vinita Agarwal Scholarship", donor: "Mr. Sandeep Agarwal", recipient: "Shubham Kumar", department: "AE/B.Tech" },
  { id: 29, scholarshipName: "Shanti & Ramkishore Sahai Saxena Memorial Scholarship", donor: "Mr. Ashokand Madhu Saxena", recipient: "Aryan Sharma", department: "CSE/B.Tech" },
  { id: 30, scholarshipName: "Neelam and Anil Singh Scholarship", donor: "Mr. Atul Singh", recipient: "Anshul Mehta", department: "CHE/B.Tech" },
  { id: 31, scholarshipName: "Director's Scholarships", donor: "Group of donors through fundraising drive", recipient: "Gavish Garg", department: "CSE/B.Tech" },
  { id: 32, scholarshipName: "Director's Scholarships", donor: "Group of donors through fundraising drive", recipient: "Hitesh Anand", department: "CSE/B.Tech" },
  { id: 33, scholarshipName: "Director's Scholarships", donor: "Group of donors through fundraising drive", recipient: "Kunwar Preet Singh", department: "CSE/B.Tech" },
  { id: 34, scholarshipName: "Director's Scholarships", donor: "Group of donors through fundraising drive", recipient: "Mohit Gupta", department: "CSE/B.Tech" },
  { id: 35, scholarshipName: "Director's Scholarships", donor: "Group of donors through fundraising drive", recipient: "Harsh Trivedi", department: "CSE/B.Tech" },
  { id: 36, scholarshipName: "Director's Scholarships", donor: "Group of donors through fundraising drive", recipient: "Arpit Kumar Rai", department: "CSE/B.Tech" },
  { id: 37, scholarshipName: "Director's Scholarships", donor: "Group of donors through fundraising drive", recipient: "Akhil Jain", department: "CSE/B.Tech" },
  { id: 38, scholarshipName: "Director's Scholarships", donor: "Group of donors through fundraising drive", recipient: "Mannem Rishwan Reddy", department: "CSE/B.Tech" },
  { id: 39, scholarshipName: "Combined Scholarship Scheme for UG Students", donor: "1971 Batch Fund 1974 Batch Fund 1975 Batch Fund 1978 Batch Fund 1985 Batch Fund", recipient: "Akshat Garg", department: "CSE/B.Tech" },
  { id: 40, scholarshipName: "Combined Scholarship Scheme for UG Students", donor: "1971 Batch Fund 1974 Batch Fund 1975 Batch Fund 1978 Batch Fund 1985 Batch Fund", recipient: "Shivam Singhal", department: "EE/B.Tech" },
  { id: 41, scholarshipName: "Avijit Lal Memorial Scholarship", donor: "Family and Friends of Late Avijit Lal", recipient: "Kavya Jalan", department: "CSE/B.Tech" },
  { id: 42, scholarshipName: "Sandeep and Shruti Gupta Talent Scholarship", donor: "Mr. Sandeep Gupta", recipient: "Avantika", department: "PHY/Bs" },
  { id: 43, scholarshipName: "Baljit & Nirmal Dhindsa Scholarship", donor: "Mr. Ajit Gill", recipient: "Sharmin Ansar", department: "BSBE/B.Tech" },
  { id: 44, scholarshipName: "Baljit & Nirmal Dhindsa Scholarship", donor: "Mr. Ajit Gill", recipient: "Saloni Das", department: "BSBE/B.Tech" },
  { id: 45, scholarshipName: "Swami Sivananda Memorial Scholarship", donor: "Divine Life Society Garhwal Uttarakhand", recipient: "Adarsh Shukla", department: "ME/B.Tech" },
  { id: 46, scholarshipName: "Mathur Brother's UG Scholarship", donor: "Mr. Atul K. Mathur", recipient: "Kushal Gehlot", department: "CSE/B.Tech" },
  { id: 47, scholarshipName: "Prof. Girdhar Gopal Shukla Memorial Scholarship", donor: "Mr. Ashish Shukla", recipient: "Niladri Kal", department: "STAT/M.Sc" },
  { id: 48, scholarshipName: "R K Gupta Scholarship", donor: "Mr. R K Gupta", recipient: "Ashish Kumar Singh", department: "EE/B.Tech" },
  { id: 49, scholarshipName: "Rajendra Rathore Memorial Scholarship", donor: "Friends and family of Lt. Rajendra Rathore", recipient: "Srijan Bhattacharyya", department: "CHM/M.Sc" },
  { id: 50, scholarshipName: "Class of 1984 Scholarship", donor: "Class of 1984", recipient: "Abhishek Pardhi", department: "CSE/B.Tech" },
  { id: 51, scholarshipName: "Shri Ram Sahai Agarwal Scholarship", donor: "Mr. Alok Agarwal", recipient: "Raman Deep Kaur", department: "ES/BS" },
  { id: 52, scholarshipName: "Smt. Vidyawati Agarwal Scholarship", donor: "Mr. Alok Agarwal", recipient: "Ayushi Goyal", department: "CHE/B.Tech" },
  { id: 53, scholarshipName: "Neela Namjoshi Scholarship", donor: "Mr. Alok Agarwal", recipient: "Baishali Das", department: "AE/B.Tech" },
  { id: 54, scholarshipName: "Pramodini Agarwal Scholarship", donor: "Mr. Alok Agarwal", recipient: "Tulika Shukla", department: "ME/B.Tech" },
  { id: 55, scholarshipName: "Shri Bishamber Gupta and Smt. Anguri Gupta Scholarship", donor: "Mr. Satish Gupta", recipient: "Palashdeep Singh", department: "EE/B.Tech" },
  { id: 56, scholarshipName: "Shri R & R Chari Scholarship", donor: "Mr. Rangarajan VR", recipient: "Dravya Marwaha", department: "CSE/B.Tech" },
  { id: 57, scholarshipName: "Sudarshan Kasturia Memorial Scholarship", donor: "Mr. Sanjay Kasturia/ Ms Anjali Joshi", recipient: "Atharv Singh Patlan", department: "CSE/B.Tech" },
  { id: 58, scholarshipName: "Babu Ram Jain & Mrs. Shanti Jain Memorial Scholarship", donor: "Dr. Ashok Jain", recipient: "Mukul Jakhar", department: "ECO/BS" },
  { id: 59, scholarshipName: "Ravi and Rohini Sakhuja Project Scholarships", donor: "Ravinder Kumar Sakhuja", recipient: "Bhavy Gandhi", department: "ME/B.Tech" },
  { id: 60, scholarshipName: "Ravi and Rohini Sakhuja Project Scholarships", donor: "Ravinder Kumar Sakhuja", recipient: "Himanshu Mishra", department: "ME/B.Tech" },
  { id: 61, scholarshipName: "Ravi and Rohini Sakhuja Project Scholarships", donor: "Ravinder Kumar Sakhuja", recipient: "Love Kumar Varshney", department: "ME/B.Tech" },
  { id: 62, scholarshipName: "Ravi and Rohini Sakhuja Project Scholarships", donor: "Ravinder Kumar Sakhuja", recipient: "Shivam Goel", department: "ME/B.Tech" },
  { id: 63, scholarshipName: "Shobha Memorial Scholarship", donor: "Dr. Ashok K Jain", recipient: "Yashika", department: "CHE/B.Tech" },
  { id: 64, scholarshipName: "Harish & Sushila Chandra Scholarship", donor: "Mr. Ashok K. Chandra", recipient: "Udit Narayan Pandey", department: "EE/B.Tech" },
  { id: 65, scholarshipName: "Anita and Santosh Mehra Scholarship", donor: "Mr. Santosh Mehra", recipient: "Akash Gangwar", department: "EE/B.Tech" },
  { id: 66, scholarshipName: "Anita and Santosh Mehra Scholarship", donor: "Mr. Santosh Mehra", recipient: "Shubham Sourav", department: "EE/B.Tech" },
  { id: 67, scholarshipName: "Anita and Santosh Mehra Scholarship", donor: "Mr. Santosh Mehra", recipient: "Sakib Malik", department: "EE/B.Tech" },
  { id: 68, scholarshipName: "Anita and Santosh Mehra Scholarship", donor: "Mr. Santosh Mehra", recipient: "Shivam Kumar", department: "EE/B.Tech" },
  { id: 69, scholarshipName: "Anita and Santosh Mehra Scholarship", donor: "Mr. Santosh Mehra", recipient: "Sushil", department: "EE/B.Tech" },
  { id: 70, scholarshipName: "Bhagwan Das Kapoor and Smt. Padma Kapoor Memorial Scholarship", donor: "AIM FOR SEVA (Mr. Arun Kumar Kapoor )", recipient: "Sarthak Rout", department: "CSE/B.Tech" },
  { id: 71, scholarshipName: "Bhuwan & Indira Joshi Scholarship", donor: "Mr. Vinit Joshi", recipient: "Shivam Kumar", department: "EE/B.Tech" },
  { id: 72, scholarshipName: "Class of 1984 Scholarship", donor: "Class of 1984", recipient: "Rakesh Tetarwal", department: "CSE/B.Tech" },
  { id: 73, scholarshipName: "Class of 1984 Scholarship", donor: "Class of 1984", recipient: "Jaydeep Goyal", department: "EE/B.Tech" },
  { id: 74, scholarshipName: "Class of 1984 Scholarship", donor: "Class of 1984", recipient: "Rahil Jain", department: "EE/B.Tech" },
  { id: 75, scholarshipName: "Jayalakshmi Scholarship", donor: "Mr. Krishnan Venkatraman", recipient: "Saumya Singh", department: "AE/B.Tech" },
  { id: 76, scholarshipName: "Chaudhary Gurmukh Chand and Shrimati Gyanvati Kinra Scholarship", donor: "Dr. Vikram K Kinra", recipient: "Onkar Singh", department: "ME/B.Tech" },
  { id: 77, scholarshipName: "Mahabala Rajaraman Scholarship", donor: "Mr. Ashok Shah", recipient: "Dipesh Khandelwal", department: "CSE/B.Tech" },
  { id: 78, scholarshipName: "Prof. C.N.R. Rao Science Talent Scholarship", donor: "Prof. C.N.R. Rao", recipient: "Sachin Kumar Meena", department: "CHM/Dual" },
  { id: 79, scholarshipName: "Prof. Netar Lal Kapur Scholarship", donor: "Mr. Rajan N. Kapur", recipient: "Ankur", department: "CSE/B.Tech" },
  { id: 80, scholarshipName: "Protima Ghosh Memorial Scholarship", donor: "Mr. Ranodeb Roy", recipient: "Aman Verma", department: "EE/B.Tech" },
  { id: 81, scholarshipName: "Shiv Kumari Shukla Scholarship", donor: "Mr. Devendra Shukla", recipient: "Kanika Kukreja", department: "CHE/B.Tech" },
  { id: 82, scholarshipName: "Shiv Kumari Shukla Scholarship", donor: "Mr. Devendra Shukla", recipient: "Phalak Chinmayee Vikas", department: "EE/B.Tech" },
  { id: 83, scholarshipName: "Shiv Prakash & Dayawanti Sharma Memorial Scholarship", donor: "Mr. Satish Sharma", recipient: "Chittoor Murari", department: "EE/B.Tech" },
  { id: 84, scholarshipName: "Shri. D P Shukla Scholarship", donor: "Mr. Devendra K. Shulka", recipient: "Suman Singha", department: "EE/B.Tech" },
  { id: 85, scholarshipName: "Shri Ranbir and Shrimati Maha devi Chauhan Scholarship", donor: "Mr. Satya P Chauhan", recipient: "Kuldeep Singh", department: "CHE/B.Tech" },
  { id: 86, scholarshipName: "Simran & Mandeep Kainth Memorial Scholarship", donor: "Dr. G.S.Kainth", recipient: "Dilip Parmar", department: "MTH/BS" },
  { id: 87, scholarshipName: "Smt Padmavathy & Prof R Sankar Scholarship", donor: "Mr. Sri Ram Sankar", recipient: "Manoj Kumar Yadav", department: "PHY/M.Sc" },
  { id: 88, scholarshipName: "Smt. Shyam Lata Garg Scholarship", donor: "Mr. Ashutosh Garg", recipient: "Pooja Yadav", department: "EE/B.Tech" },
  { id: 89, scholarshipName: "Shri Jamuna Prasad & Smt. Basanti Gupta Scholarship", donor: "Mr. Maini R. Gupta", recipient: "Kuldeep Patel", department: "MSE/B.Tech" },
  { id: 90, scholarshipName: "Swaminathan & Garg Scholarship", donor: "Mr. Sanjay Garg", recipient: "Siddharth Porwal", department: "AE/B.Tech" },
  { id: 91, scholarshipName: "Tarun Sondhi Memorial Scholarship", donor: "Mr. Vipin Sondhi", recipient: "Rohit Lambora", department: "ME/Dual" },
  { id: 92, scholarshipName: "Class of 1968 Scholarship", donor: "1968 Batch", recipient: "Ankit Ahirwar", department: "EE/B.Tech" },
  { id: 93, scholarshipName: "Class of 1968 Scholarship", donor: "1968 Batch", recipient: "Aayushi Mishra", department: "ME/B.Tech" },
  { id: 94, scholarshipName: "Class of 1968 Scholarship", donor: "1968 Batch", recipient: "Akash Birthal", department: "ME/B.Tech" },
  { id: 95, scholarshipName: "Class of 1968 Scholarship", donor: "1968 Batch", recipient: "Aniket Shinde", department: "AE/B.Tech" },
  { id: 96, scholarshipName: "Class of 1968 Scholarship", donor: "1968 Batch", recipient: "Bhukya Sagar", department: "CHE/B.Tech" },
  { id: 97, scholarshipName: "Class of 1968 Scholarship", donor: "1968 Batch", recipient: "Bodhare Rachit Rajendra", department: "MSE/B.Tech" },
  { id: 98, scholarshipName: "Class of 1968 Scholarship", donor: "1968 Batch", recipient: "Keshav Ranjan", department: "MTH/BS" },
  { id: 99, scholarshipName: "Class of 1968 Scholarship", donor: "1968 Batch", recipient: "Lavesh Mangal", department: "MTH/BS" },
  { id: 100, scholarshipName: "Class of 1968 Scholarship", donor: "1968 Batch", recipient: "Modem Sai Charan", department: "CSE/B.Tech" },
  { id: 101, scholarshipName: "Class of 1968 Scholarship", donor: "1968 Batch", recipient: "Rinku", department: "MTH/BS" },
  { id: 102, scholarshipName: "Class of 1968 Scholarship", donor: "1968 Batch", recipient: "Sushma", department: "CE/B.Tech" },
  { id: 103, scholarshipName: "Class of 1968 Scholarship", donor: "1968 Batch", recipient: "Vaddepally Meenan", department: "CHM/BS" },
  { id: 104, scholarshipName: "Prof. Sanjeev K Agarwal Scholarship", donor: "Alumni of IITK, family and friends", recipient: "Sanjay Pander", department: "CSE/B.Tech" },
  { id: 105, scholarshipName: "Prof. Sanjeev K Agarwal Scholarship", donor: "Alumni of IITK, family and friends", recipient: "Alan Nair", department: "CSE/Dual" },
  { id: 106, scholarshipName: "Mrs. Ratna Kaushik and Dr. Bhooshan lal Scholarship", donor: "Mrs. Ratna Kaushik & Dr. Bhooshan lal", recipient: "Shashwat Jatav", department: "EE/B.Tech" },
  { id: 107, scholarshipName: "Smt.Saroja Krishnan Scholarship", donor: "Shri Kannan Krishnan", recipient: "Manisha Sharma", department: "CE/B.Tech" },
  { id: 108, scholarshipName: "Combined Scholarship Scheme for UG Students", donor: "1971 Batch Fund 1974 Batch Fund 1975 Batch Fund 1978 Batch Fund 1985 Batch Fund", recipient: "Goudesh Yallappa Kadakol", department: "EE/B.Tech" },
  { id: 109, scholarshipName: "Combined Scholarship Scheme for UG Students", donor: "1971 Batch Fund 1974 Batch Fund 1975 Batch Fund 1978 Batch Fund 1985 Batch Fund", recipient: "Rahangdale Prachi Sanjay", department: "AE/B.Tech" },
  { id: 110, scholarshipName: "Combined Scholarship Scheme for UG Students", donor: "1971 Batch Fund 1974 Batch Fund 1975 Batch Fund 1978 Batch Fund 1985 Batch Fund", recipient: "Vasanthapu Poojitha Lakshmi", department: "CSE/B.Tech" },
  { id: 111, scholarshipName: "Combined Scholarship Scheme for UG Students", donor: "1971 Batch Fund 1974 Batch Fund 1975 Batch Fund 1978 Batch Fund 1985 Batch Fund", recipient: "Harish Kumar", department: "CHE/B.Tech" },
  { id: 112, scholarshipName: "Combined Scholarship Scheme for UG Students", donor: "1971 Batch Fund 1974 Batch Fund 1975 Batch Fund 1978 Batch Fund 1985 Batch Fund", recipient: "Meet Solanki", department: "AE/B.Tech" },
  { id: 113, scholarshipName: "Combined Scholarship Scheme for UG Students", donor: "1971 Batch Fund 1974 Batch Fund 1975 Batch Fund 1978 Batch Fund 1985 Batch Fund", recipient: "Saubhagya Bawari", department: "CHM/BS" },
  { id: 114, scholarshipName: "Shrimati Madhuri Dubey Scholarship", donor: "Mr. Ajay Dubey", recipient: "Hasem Ansari", department: "CHM/M.Sc" },
  { id: 115, scholarshipName: "Shrimati Madhuri Dubey Scholarship", donor: "Mr. Ajay Dubey", recipient: "Gaurav Singh", department: "CHM/M.Sc" },
  { id: 116, scholarshipName: "Shree Anand Swaroop Garg Scholarship", donor: "Mr. Ashutosh Garg", recipient: "Shashank Shailabh", department: "EE/B.Tech" },
  { id: 117, scholarshipName: "Dr. M. Anantaswamy and Mrs. Vijayalakshmi Rau Scholarship", donor: "Mr. Pradeep A Rau", recipient: "Prashant Kumar", department: "EE/B.Tech" },
  { id: 118, scholarshipName: "Smt. Shanti Devi Garg Scholarship", donor: "Mr. Ashutosh Garg", recipient: "Meghna Jakhar", department: "EE/B.Tech" },
  { id: 119, scholarshipName: "BGM Kumar Foundation Scholarship", donor: "Mr. Birendra Kumar", recipient: "Jetti Ramya Chowdary", department: "MTH/Dual" },
  { id: 120, scholarshipName: "BGM Kumar Foundation Scholarship", donor: "Mr. Birendra Kumar", recipient: "Prachi Chaudhary", department: "CE/B.Tech" },
  { id: 121, scholarshipName: "BGM Kumar Foundation Scholarship", donor: "Mr. Birendra Kumar", recipient: "Sonali Gupta", department: "MSE/B.Tech" },
  { id: 122, scholarshipName: "Dr.K.C Saronwala memorial Scholarship", donor: "Mr. Anupam Saronwala", recipient: "Naman Jain", department: "MSE/B.Tech" },
  { id: 123, scholarshipName: "Nirmala & Ashok Keshri Scholarship", donor: "Mr. Piyush Keshri", recipient: "Subhradeep Samantray", department: "MSE/B.Tech" },
  { id: 124, scholarshipName: "PSB Prasad Memorial Scholarship", donor: "Ms. Rekha Rani Prasad", recipient: "Vivek Agrawal", department: "EE/Dual" },
  { id: 125, scholarshipName: "Srimati Bhagwati Rameshwar Goyal Scholarship", donor: "Mr. Ashok Kumar Goyal", recipient: "Nandini Goel", department: "BSBE/B.Tech" },
  { id: 126, scholarshipName: "Smt. Neela Dutt Scholarship", donor: "Mr. Saibal Dutt", recipient: "Saurabh Sharma", department: "ECO/Dual" },
  { id: 127, scholarshipName: "Swami Sivananda Memorial Scholarship", donor: "Divine Life Society Garhwal Uttarakhand", recipient: "Sachin", department: "AE/B.Tech" },
  { id: 128, scholarshipName: "Swami Sivananda Memorial Scholarship", donor: "Divine Life Society Garhwal Uttarakhand", recipient: "Tushar Goswamy", department: "AE/B.Tech" },
  { id: 129, scholarshipName: "Swami Sivananda Memorial Scholarship", donor: "Divine Life Society Garhwal Uttarakhand", recipient: "Yatish Goel", department: "CE/B.Tech" },
  { id: 130, scholarshipName: "B P Srivastava Scholarship", donor: "Dr. Ramesh Chandra Srivastava", recipient: "Vaibhav Sharma", department: "PHY/M.Sc" },
  { id: 131, scholarshipName: "Gyanvati & Kamta Prasad Memorial Scholarship", donor: "Mr. Hemant Gupta", recipient: "Aishwarya Srivastava", department: "EE/B.Tech" },
  { id: 132, scholarshipName: "Anil & Reshma Nigam Scholarship", donor: "Mr. Anil Nigam", recipient: "Rajendra Parmar", department: "AE/B.Tech" },
  { id: 133, scholarshipName: "Dr. Hari Mohan & Pushpa Srivastava Scholarship", donor: "Mr. Amitabh Srivastava", recipient: "Ahana Biswas", department: "EE/B.Tech" },
  { id: 134, scholarshipName: "Dr. K P Gupta Scholarship", donor: "Mr. Shantanu Gupta", recipient: "Shaurya Jain", department: "MSE/B.Tech" },
  { id: 135, scholarshipName: "Govinda & Indira Srikantiah Scholarship", donor: "Prof. G.Srikantiah", recipient: "Jeet Kumar Prajapati", department: "ME/B.Tech" },
  { id: 136, scholarshipName: "Guru Ji Ghashit Ram Scholarship", donor: "Late Dr. Ranjit Singh", recipient: "Ashish Kumar", department: "CHE/B.Tech" },
  { id: 137, scholarshipName: "Guru Ji Ghashit Ram Scholarship", donor: "Late Dr. Ranjit Singh", recipient: "Ved Vitthal Shukla", department: "AE/B.Tech" },
  { id: 138, scholarshipName: "Indradhanush Scholarship", donor: "Mr. Rohit Verma", recipient: "Danish Ahmad", department: "CHE/Double Major" },
  { id: 139, scholarshipName: "Khem Chandra Yadav Scholarships", donor: "Late Dr. Ranjit Singh", recipient: "Abhay Varshney", department: "ME/B.Tech" },
  { id: 140, scholarshipName: "Khem Chandra Yadav Scholarships", donor: "Late Dr. Ranjit Singh", recipient: "Bhaumik Bharatbhai Jadav", department: "BSBE/B.Tech" },
  { id: 141, scholarshipName: "Khem Chand Memorial Scholarship", donor: "Mr. Sarwan Kumar", recipient: "Jetti Naga Karthik", department: "MTH/BS" },
  { id: 142, scholarshipName: "Kunta Jha Scholarship", donor: "Mr. Saroj Jha", recipient: "Manvendra Singh", department: "ME/B.Tech" },
  { id: 143, scholarshipName: "Mahesh & Shashi Chandra Scholarship", donor: "Mr. Manish Chandra", recipient: "Vijay Kumar", department: "ECO/BS" },
  { id: 144, scholarshipName: "Neeraj Kapoor Memorial Scholarship", donor: "Mrs. Chhaya Rani Kapoor", recipient: "Mohit Chauhan", department: "CSE/B.Tech" },
  { id: 145, scholarshipName: "Neta Ji Balwan Singh Scholarship", donor: "Late Dr. Ranjit Singh", recipient: "Soumik Ghosh", department: "ME/Dual" },
  { id: 146, scholarshipName: "Neta Ji Balwan Singh Scholarship", donor: "Late Dr. Ranjit Singh", recipient: "Harsh Mishra", department: "CE/B.Tech" },
  { id: 147, scholarshipName: "Nita Goyal & Ashish Gupta Scholarship", donor: "Ms. Nita Goel, Mr. Ashish Gupta", recipient: "Shashi Raj", department: "CE/B.Tech" },
  { id: 148, scholarshipName: "Ramesh Chandra Yadav Scholarship", donor: "Late Dr. Ranjit Singh", recipient: "Ms. Annu", department: "CHM/M.Sc" },
  { id: 149, scholarshipName: "Ramesh Chandra Yadav Scholarship", donor: "Late Dr. Ranjit Singh", recipient: "Annu", department: "MTH/M.Sc" },
  { id: 150, scholarshipName: "Sarpanch Salik Ram Katiyar Scholarship", donor: "Late Dr. Ranjit Singh", recipient: "Diprasom Das", department: "BSBE/B.Tech" },
  { id: 151, scholarshipName: "Shri Shankar Lal & Smt Prema Devi Agarwal Memorial Scholarship", donor: "Mr. Sharwan Kumar Agarwal", recipient: "Rahul Sethi", department: "CHE/Dual" },
  { id: 152, scholarshipName: "Smt. Jagat Kaur Memorial Scholarship", donor: "Mr. Rajiv singh", recipient: "Kalasariya Kamleshbhai Maganbhai", department: "MSE/B.Tech" },
  { id: 153, scholarshipName: "Shree Ramjee Lal Garg Scholarship", donor: "Mr. Ashutosh Garg", recipient: "Prakarsh Agrawal", department: "CE/B.Tech" },
  { id: 154, scholarshipName: "Srikant Mishra Memorial Scholarship", donor: "Mr. Shrikant Mishra Dr. Sobi pandey", recipient: "Subrata Samanta", department: "PHY/M.Sc" },
  { id: 155, scholarshipName: "Tapan Kumar & Swapna bandopadhyay Scholarship", donor: "Mr. Subhajyoti Bandyopadhyay", recipient: "Ramjash Jangid", department: "EE/B.Tech" },
  { id: 156, scholarshipName: "Yashodha Yadav Scholarship", donor: "Late Dr. Ranjit Singh", recipient: "Ramesh Patel", department: "CE/B.Tech" },
  { id: 157, scholarshipName: "Yashodha Yadav Scholarship", donor: "Late Dr. Ranjit Singh", recipient: "Vivek", department: "ME/B.Tech" },
  { id: 158, scholarshipName: "Ram Rajendra Malhotra Educational Society Scholarship", donor: "Mr. H.B.Hardiker", recipient: "Atul Kumar", department: "ME/B.Tech" },
  { id: 159, scholarshipName: "Ram Rajendra Malhotra Educational Society Scholarship", donor: "Mr. H.B.Hardiker", recipient: "Himanshu Kumar", department: "ECO/BS" },
  { id: 160, scholarshipName: "Ram Rajendra Malhotra Educational Society Scholarship", donor: "Mr. H.B.Hardiker", recipient: "Jayesh Omprakash Lakade", department: "ECO/BS" },
  { id: 161, scholarshipName: "S.C. Mehrotra's Scholarship", donor: "Mr. Subhash Chand Mehrotra", recipient: "Vivek Singh Rajawat", department: "CE/B.Tech" },
  { id: 162, scholarshipName: "Prof. Girdhar Gopal Shukla Memorial Scholarship", donor: "Mr. Ashish Shukla", recipient: "Pawan Singh Mehta", department: "MTH/M.Sc" },
  { id: 163, scholarshipName: "Bimlavati & Nawal Kishore Kapur Scholarship", donor: "Mr. Deepak Kapur", recipient: "Anu", department: "BSBE/B.Tech" },
  { id: 164, scholarshipName: "Dr. R.K.Singhal Memorial Scholarship", donor: "Prof. Sanjay Mittal", recipient: "Akshay Jain", department: "BSBE/B.Tech" },
  { id: 165, scholarshipName: "Mr. Nitish V. Thakor Scholarship", donor: "Mr. Nitish V Thakor", recipient: "Subodh Kumar Kasaudhan", department: "BSBE/B.Tech" },
  { id: 166, scholarshipName: "N.S. Rajaraman Scholarship", donor: "Mr. Rajmohan Rajaraman", recipient: "Mohit Yadav", department: "ME/B.Tech" },
  { id: 167, scholarshipName: "P D Murti Memorial Scholarship", donor: "Mr. Ram Mohan", recipient: "Divyansh Garg", department: "CSE/B.Tech" },
  { id: 168, scholarshipName: "P D Murti Memorial Scholarship", donor: "Mr. Ram Mohan", recipient: "Tejesh Vaish", department: "CSE/B.Tech" },
  { id: 169, scholarshipName: "P D Murti Memorial Scholarship", donor: "Mr. Ram Mohan", recipient: "Aryan Kumar", department: "CSE/B.Tech" },
  { id: 170, scholarshipName: "Pt. Balajee Govind Hardiker Scholarship", donor: "Mr. H.B.Hardiker", recipient: "Tsering Youdon", department: "MTH/BS" },
  { id: 171, scholarshipName: "Vimal Madan Memorial Scholarship", donor: "Ms. Suarhaa Monica Banerjee", recipient: "Mohd Shadab", department: "CSE/B.Tech" },
  { id: 172, scholarshipName: "Vasudeo Laxman Sahasrabuddhe Vaidya Award Scholarship", donor: "Mrs. Veena Sahasrabuddhe Prof. H.V. Sahasrabuddhe", recipient: "Hinisha Bansal", department: "MTH/BS" },
  { id: 173, scholarshipName: "Vasudeo Laxman Sahasrabuddhe Vaidya Award Scholarship", donor: "Mrs. Veena Sahasrabuddhe Prof. H.V. Sahasrabuddhe", recipient: "Bibhor Kumar", department: "EE/B.Tech" },
  { id: 174, scholarshipName: "Indian Women's Association Bonn Scholarship", donor: "Indian Womens Association", recipient: "Aman Gautam", department: "ME/B.Tech" },
  { id: 175, scholarshipName: "Indian Women's Association Bonn Scholarship", donor: "Indian Womens Association", recipient: "Shreya Bhiwaniya", department: "ME/B.Tech" },
  { id: 176, scholarshipName: "Indian Women's Association Bonn Scholarship", donor: "Indian Womens Association", recipient: "Apoorv Rajput", department: "ME/B.Tech" },
  { id: 177, scholarshipName: "Anurag Bartaria Scholarship", donor: "Mr. C.K. Bartaria", recipient: "Ankit", department: "MSE/B.Tech" },
  { id: 178, scholarshipName: "Arakere and Karen Vasudev Scholarship", donor: "Prof. Arakere Vasudev", recipient: "Ayush Shakya", department: "CHE/B.Tech" },
  { id: 179, scholarshipName: "Sri Singhasan Singh Scholarship", donor: "Mr. Manoj. K", recipient: "Atin Vikram Singh", department: "EE/B.Tech" },
  { id: 180, scholarshipName: "Sagnik Asis Ray Scholarship", donor: "Mr. Ashish Ray", recipient: "Sanket Balkrishna Patil", department: "BSBE/B.Tech" },
  { id: 181, scholarshipName: "Pushpa Garg Scholarship", donor: "Mrs. Ewa and Atul Garg", recipient: "Adarsh K", department: "BSBE/B.Tech" },
  { id: 182, scholarshipName: "ACC Fellowship", donor: "ACC Ltd", recipient: "Uttkarsh Bhalika", department: "CHM/M.Sc" },
  { id: 183, scholarshipName: "Ravi and Rohini Sakhuja Project Scholarships", donor: "Ravinder Kumar Sakhuja", recipient: "Anchit Singh Bhagtana", department: "CSE/B.Tech" },
  { id: 184, scholarshipName: "Class of 1968 Scholarship", donor: "1968 Batch", recipient: "Swadha Pandey", department: "PHY/BS" },
  { id: 185, scholarshipName: "Class of 1968 Scholarship", donor: "1968 Batch", recipient: "Aakanksha Jain", department: "CHE/Phd" },
  { id: 186, scholarshipName: "Bhagwan Das Sanghi Memorial Scholarship", donor: "Family of Late B.D. Sanghi", recipient: "Nupur Jain", department: "MTH/BS" },
  { id: 187, scholarshipName: "Shanti Devi & Onkar Nath Maewal Memorial Scholarship", donor: "Mr. Akhilesh Maewal", recipient: "Sakshi", department: "CSE/B.Tech" },
  { id: 188, scholarshipName: "Shri Kalp Nath Singh Scholarship", donor: "Mr. Manoj Singh", recipient: "Akshan Agrawal", department: "ME/B.Tech" },
  { id: 189, scholarshipName: "Seema Jain Scholarship", donor: "Prof. Sudhir K Jain", recipient: "Pragati Ganatra", department: "CHM/M.Sc" },
  { id: 190, scholarshipName: "Smt. Durga Devi Memorial Scholarship", donor: "Dr. S.K. Durga (Retired Prof.)", recipient: "Nisha", department: "CHM/M.Sc" },
  { id: 191, scholarshipName: "Lalit Narain Das Memorial Scholarship", donor: "LT. Gen. B.N. Das", recipient: "Archana Gupta", department: "ME/Phd" },
  { id: 192, scholarshipName: "Aedunuthula Prasad Memorial Scholarship", donor: "Mr. Rama Koteswar Rao Aedunuthula Smt. Sarojini Mattegunta", recipient: "Lakshay Tyagi", department: "CHE/B.Tech" },
  { id: 193, scholarshipName: "Mona & Paramjit Singh Scholarship", donor: "Mr. Ajit Gill", recipient: "Sunamya Gupta", department: "BSBE/B.Tech" },
  { id: 194, scholarshipName: "Mona & Paramjit Singh Scholarship", donor: "Mr. Ajit Gill", recipient: "Divya Adil", department: "BSBE/B.Tech" },
  { id: 195, scholarshipName: "Bihari Lal & Nalini Srivastava Memorial Scholarship", donor: "Mr. Chandra Mohan Srivastava", recipient: "Deepak Kansal", department: "ECO/BS" },
  { id: 196, scholarshipName: "Sri Vinay Kumar Kapoor and Smt. Sudha Kapoor Memorial Scholarship", donor: "AIM FOR SEVA (Mr. Arun Kumar Kapoor)", recipient: "Sourabh Kulhari", department: "CSE/B.Tech" },
  { id: 197, scholarshipName: "M A Pai Undergraduate Scholarship", donor: "Mr. Vijay Vittal", recipient: "Rahul Meena", department: "EE/B.Tech" },
  { id: 198, scholarshipName: "Lt. Bishwanath Jha Scholarship", donor: "Mr. Nirmal Jha", recipient: "Himanshu Gautam Pandey", department: "AE/B.Tech" }
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