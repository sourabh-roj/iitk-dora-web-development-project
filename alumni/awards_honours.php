<?php
include '../header.php'; // Include your site's header, which now handles the <head> and <body> opening tags and CSS 
?>

<body>
    <?php include '../ssb.php'; ?>
    <div class="awards-page-header">
        <div class="inner-content"> <!-- Added inner-content div for better control of content width -->
            <h1 class="awards-title">Alumni Awards and Honours <span class="awards-title-underline"></span></h1>
            <div class="search-input-wrapper">
                <input type="text" id="awardSearch" class="search-bar" placeholder="Search by name or award...">
                <!-- Font Awesome search icon -->
                <i class="fas fa-search search-icon"></i>
            </div>
        </div>
    </div>

    <div class="container">
        <!-- LEFT COLUMN: FELLOWSHIPS -->
        <div class="column fellowship-column">
            <div class="section-title">Fellowships</div>

            <!-- Members, National Academy of Sciences, USA -->
            <div class="accordion">
                <input type="checkbox" id="fellowship1">
                <label for="fellowship1">Members, National Academy of Sciences, USA</label>
                <div class="accordion-content">
                    <ul>
                        <li>2018 - <a href="utpal.php">Prof. Utpal Banerjee</a> (MSC2/CHM/1979)</li>
                        <li>2016 - <a href="#">Prof. Arup K. Chakraborty</a> (BT/CHE/1983)</li>
                        <li>2015 - <a href="#">Prof. Manindra Agrawal</a> (BT/PhD/CSE/1986/1991)</li>
                        <li>2015 - <a href="#">Prof. Jitendra Malik</a> (BT/EE/1980)</li>
                        <li>2014 - <a href="#">Prof. K. VijayRaghavan</a> (BT/MT/CHE/1975/1977)</li>
                        <li>2009 - <a href="#">Prof. Rakesh K. Jain</a> (BT/CHE/1972)</li>
                    </ul>
                </div>
            </div>

            <!-- Fellows, Alexander Von Humboldt Foundation -->
            <div class="accordion">
                <input type="checkbox" id="fellowship2">
                <label for="fellowship2">Fellows, Alexander Von Humboldt Foundation</label>
                <div class="accordion-content">
                    <ul>
                        <li>2012 - <a href="#">Prof. Jayant K. Singh</a> (BT/CHE/1997)</li>
                    </ul>
                </div>
            </div>

            <!-- National J. C. Bose Fellowship -->
            <div class="accordion">
                <input type="checkbox" id="fellowship3">
                <label for="fellowship3">National J. C. Bose Fellowship</label>
                <div class="accordion-content">
                    <ul>
                        <li>2023 - <a href="#">Prof. Nitin Saxena</a> (BT/PhD/CSE/2002/2007)</li>
                        <li>2013 - <a href="#">Prof. Sanjay Mittal</a> (BT/AE/1988)</li>
                        <li>2013 - <a href="#">Prof. Debashish Chowdhury</a> (PhD/PHY/1984)</li>
                        <li>2012 - <a href="#">Prof. Anand K. Bachhaawat</a> (MSc2/CHM/1980)</li>
                        <li>2012 - <a href="#">Prof. Indranil Manna</a> (MT/MME/1985)</li>
                        <li>2011 - <a href="#">Prof. Anurag Kumar</a> (BT/EE/1977)</li>
                        <li>2010 - <a href="#">Prof. Bidyut Baran Chaudhuri</a> (PhD/EE/1980)</li>
                        <li>2010 - <a href="#">Prof. Ashok Jhunjhunwala</a> (BT/EE/1975)</li>
                        <li>2010 - <a href="#">Prof. Uday Babulal Desai</a> (BT/EE/1974)</li>
                        <li>2008 - <a href="#">Prof. T. K. Chakraborty</a> (MSC2/PhD/CHM/1979/1984)</li>
                        <li>2008 - <a href="#">Prof. Amitabha Chattopadhyay</a> (MSC2/CHM/1980)</li>
                        <li>2007 - <a href="#">Prof. Raghavan Varadarajan</a> (MSc5/CHM/1982)</li>
                        <li>2007 - <a href="#">Prof. Shridhar R. Gadre</a> (PhD/CHM/1977)</li>
                        <li>2007 - <a href="#">Prof. Deepak Dhar</a> (MSC2/PHY/1973)</li>
                        <li>2006 - <a href="#">Prof. Manindra Agrawal</a> (BT/PhD/CSE/1986/1991)</li>
                        <li>2006 - <a href="#">Prof. Ashutosh Sharma</a> (BT/CHE/1982)</li>
                        <li>2006 - <a href="#">Prof. K. VijayRaghavan</a> (BT/MT/CHE/1975/1977)</li>
                        <li>2006 - <a href="#">Prof. Dipankar Das Sarma</a> (MSC5/PHY/1977)</li>
                        <li>2006 - <a href="#">Prof. Arup Kumar Raychaudhuri</a> (MSc2/PHY/1975)</li>
                        <li>2006 - <a href="#">Prof. Eluvathingal D. Jemmis</a> (MSC2/CHM/1973)</li>
                        <li>1997 - <a href="#">Prof. Spenta R. Wadia</a> (MSC2/PHY/1973)</li>
                    </ul>
                </div>
            </div>

            <!-- Fellows, Indian Academy of Science (IASc) -->
            <div class="accordion">
                <input type="checkbox" id="fellowship4">
                <label for="fellowship4">Fellows, Indian Academy of Science (IASc)</label>
                <div class="accordion-content">
                    <ul>
                        <li>2021 - <a href="#">Prof. Nitin Saxena</a> (BT/PhD/CSE/2002/2007)</li>
                        <li>2013 - <a href="#">Prof. Gopal Balasubramanian</a> (MSc2/PHY/1993)</li>
                        <li>2012 - <a href="#">Prof. Ranjan K. Mallik</a> (BT/EE/1987)</li>
                        <li>2010 - <a href="#">Prof. Anurag Kumar</a> (BT/EE/1977)</li>
                        <li>2008 - <a href="#">Prof. Indranil Manna</a> (MT/MME/1985)</li>
                        <li>2007 - <a href="#">Prof. Sanjay Mittal</a> (BT/AE/1988)</li>
                        <li>2007 - <a href="#">Prof. Yashwant Gupta</a> (BT/EE/1985)</li>
                        <li>2004 - <a href="#">Prof. Manindra Agrawal</a> (BT/PhD/CSE/1986/1991)</li>
                        <li>2004 - <a href="#">Prof. Gattamraju Ravindra Kumar</a> (PhD/PHY/1990)</li>
                        <li>2004 - <a href="#">Prof. Debashish Chowdhury</a> (PhD/PHY/1984)</li>
                        <li>2004 - <a href="#">Prof. Anand K. Bachhaawat</a> (MSc2/CHM/1980)</li>
                        <li>2003 - <a href="#">Prof. T. K. Chakraborty</a> (MSC2/PhD/CHM/1979/1984)</li>
                        <li>2003 - <a href="#">Prof. Tarun Kant</a> (MT/CE/1969)</li>
                        <li>1999 - <a href="#">Prof. Ashutosh Sharma</a> (BT/CHE/1982)</li>
                        <li>1999 - <a href="#">Prof. Amitabha Chattopadhyay</a> (MSC2/CHM/1980)</li>
                        <li>1997 - <a href="#">Dr. Shahid Jameel</a> (MSC2/CHM/1979)</li>
                        <li>1997 - <a href="#">Prof. K. VijayRaghavan</a> (BT/MT/CHE/1975/1977)</li>
                        <li>1997 - <a href="#">Prof. A. K. Mallik</a> (PhD/ME/1973)</li>
                        <li>1993 - <a href="#">Prof. Dipankar Das Sarma</a> (MSC5/PHY/1977)</li>
                        <li>1993 - <a href="#">Arup Kumar Raychaudhuri</a> (MSc2/PHY/1975)</li>
                        <li>1993 - <a href="#">Prof. Suresh K. Bhatia</a> (BT/CHE/1974)</li>
                        <li>1992 - <a href="#">Prof. Shridhar R. Gadre</a> (PhD/CHM/1977)</li>
                        <li>1992 - <a href="#">Prof. Eluvathingal D. Jemmis</a> (MSC2/CHM/1973)</li>
                        <li>1992 - <a href="#">Prof. Spenta R. Wadia</a> (MSC2/PHY/1973)</li>
                        <li>1991 - <a href="#">Prof. Ashoke Sen</a> (MSC2/PHY/1978)</li>
                        <li>1991 - <a href="#">Prof. H. Ila</a> (PhD/CHM/1968)</li>
                        <li>1990 - <a href="#">Prof. Deepak Dhar</a> (MSC2/PHY/1973)</li>
                        <li>1987 - <a href="#">Prof. Santosh K. Gupta</a> (BT/CHE/1968)</li>
                    </ul>
                </div>
            </div>

            <!-- Fellows, Indian National Science Academy (INSA) -->
            <div class="accordion">
                <input type="checkbox" id="fellowship5">
                <label for="fellowship5">Fellows, Indian National Science Academy (INSA)</label>
                <div class="accordion-content">
                    <ul>
                        <li>2023 - <a href="#">Prof. Nitin Saxena</a> (BT/PhD/CSE/2002/2007)</li>
                        <li>2016 - <a href="#">Prof. Gopal Balasubramanian</a> (MSc2/PHY/1993)</li>
                        <li>2011 - <a href="#">Prof. Sanjay Mittal</a> (BT/AE/1988)</li>
                        <li>2011 - <a href="#">Prof. Ranjan K. Mallik</a> (BT/EE/1987)</li>
                        <li>2011 - <a href="#">Prof. Indranil Manna</a> (MT/MME/1985)</li>
                        <li>2011 - <a href="#">Prof. Debashish Chowdhury</a> (PhD/PHY/1984)</li>
                        <li>2011 - <a href="#">Prof. Anand K. Bachhaawat</a> (MSc2/CHM/1980)</li>
                        <li>2008 - <a href="#">Prof. Gattamraju Ravindra Kumar</a> (PhD/PHY/1990)</li>
                        <li>2008 - <a href="#">Prof. Manindra Agrawal</a> (BT/PhD/CSE/1986/1991)</li>
                        <li>2007 - <a href="#">Prof. T. K. Chakraborty</a> (MSC2/PhD/CHM/1979/1984)</li>
                        <li>2006 - <a href="#">Prof. Bidyut Baran Chaudhuri</a> (PhD/EE/1980)</li>
                        <li>2006 - <a href="#">Prof. Anurag Kumar</a> (BT/EE/1977)</li>
                        <li>2005 - <a href="#">Prof. Amitabha Chattopadhyay</a> (MSC2/CHM/1980)</li>
                        <li>2004 - <a href="#">Prof. Ashutosh Sharma</a> (BT/CHE/1982)</li>
                        <li>2004 - <a href="#">Dr. Shahid Jameel</a> (MSC2/CHM/1979)</li>
                        <li>2002 - <a href="#">Prof. H. Ila</a> (PhD/CHM/1968)</li>
                        <li>2001 - <a href="#">Prof. Dipankar Das Sarma</a> (MSC5/PHY/1977)</li>
                        <li>2001 - <a href="#">Prof. A. K. Mallik</a> (PhD/ME/1973)</li>
                        <li>2000 - <a href="#">Arup Kumar Raychaudhuri</a> (MSc2/PHY/1975)</li>
                        <li>1999 - <a href="#">Prof. Ashok Jhunjhunwala</a> (BT/EE/1975)</li>
                        <li>1998 - <a href="#">Prof. Tarun Kant</a> (MT/CE/1969)</li>
                        <li>1996 - <a href="#">Prof. Ashok Sen</a> (MSC2/PHY/1978)</li>
                        <li>1996 - <a href="#">Prof. Shridhar R. Gadre</a> (PhD/CHM/1977)</li>
                        <li>1995 - <a href="#">Prof. Deepak Dhar</a> (MSC2/PHY/1973)</li>
                        <li>1983 - <a href="#">Prof. Umesh Chandra Agarwala</a> (BT/CHE/1972)</li>
                    </ul>
                </div>
            </div>

            <!-- Members, National Academy of Engineering, USA -->
            <div class="accordion">
                <input type="checkbox" id="fellowship6">
                <label for="fellowship6">Members, National Academy of Engineering, USA</label>
                <div class="accordion-content">
                    <ul>
                        <li>2024 - <a href="#">Prof. Raj Narain Singh</a> (BT/MME/1967)</li>
                        <li>2021 - <a href="#">Dr Murthy V.V.S. Yalla</a> (MT/EE/1983)</li>
                        <li>2020 - <a href="#">Dr Jayathi Y Murthy</a> (BT/ME/1979)</li>
                        <li>2020 - <a href="#">Dr Pawan K Goenka</a> (BT/ME/1975)</li>
                        <li>2020 - <a href="#">Dr Rajeev Gautam</a> (BT/ME/1974)</li>
                        <li>2018 - <a href="#">Prof. Mukul Mani Sharma</a> (BT/CHE/1980)</li>
                        <li>2018 - <a href="#">Prof. Ashok Jhunjhunwala</a> (BT/EE/1975)</li>
                        <li>2018 - <a href="#">Prof. Jayadev Misra</a> (BT/EE/1969)</li>
                        <li>2017 - <a href="#">Prof. Arindam Bose</a> (BT/CHE/1975)</li>
                        <li>2017 - <a href="#">Prof. Jagdish Narayan</a> (BT/MME/1969)</li>
                        <li>2016 - <a href="#">Prof. Anil K. Jain</a> (BT/EE/1969)</li>
                        <li>2015 - <a href="#">Prof. Deepakraj M. Divan</a> (BT/EE/1975)</li>
                        <li>2013 - <a href="#">Prof. Vijay Kumar</a> (BT/ME/1983)</li>
                        <li>2013 - <a href="#">Dr. Pradeep Sindhu</a> (BT/EE/1974)</li>
                        <li>2013 - <a href="#">Prof. Ashok Gadgil</a> (MSC2/PHY/1973)</li>
                        <li>2012 - <a href="#">Dr. Pradeep P.</a> (BT/MME/1975)</li>
                        <li>2011 - <a href="#">Prof. Jitendra Malik</a> (BT/EE/1980)</li>
                        <li>2010 - <a href="#">Mr. N. R. Narayana Murthy</a> (MT/EE/1969)</li>
                        <li>2009 - <a href="#">Prof. Umesh Mishra</a> (BT/EE/1979)</li>
                        <li>2008 - <a href="#">Prof. Arvind</a> (BT/EE/1969)</li>
                        <li>2006 - <a href="#">Prof. Vijay Dhir</a> (MT/ME/1968)</li>
                        <li>2004 - <a href="#">Prof. Arup Chakraborty</a> (BT/CHE/1983)</li>
                        <li>2004 - <a href="#">Prof. Rakesh K. Jain</a> (BT/CHE/1972)</li>
                        <li>2002 - <a href="#">Prof. Rakesh Agrawal</a> (BT/CHE/1975)</li>
                    </ul>
                </div>
            </div>

            <!-- Fellow, Royal Society, U.K. -->
            <div class="accordion">
                <input type="checkbox" id="fellowship7">
                <label for="fellowship7">Fellow, Royal Society, U.K.</label>
                <div class="accordion-content">
                    <ul>
                        <li>2021 - <a href="#">Prof. Thirumalai Venkatesan</a> (MSC2/PHY/1971)</li>
                    </ul>
                </div>
            </div>

            <!-- Fellow, Canadian Academy of Engineering -->
            <div class="accordion">
                <input type="checkbox" id="fellowship8">
                <label for="fellowship8">Fellow, Canadian Academy of Engineering</label>
                <div class="accordion-content">
                    <ul>
                        <li>2021 - <a href="#">Prof. Rajiv K. Varma</a> (BT/PhD/EE/1980/1988)</li>
                    </ul>
                </div>
            </div>

            <!-- National Science Foundation Faculty Early Career Development Award -->
            <div class="accordion">
                <input type="checkbox" id="fellowship9">
                <label for="fellowship9">National Science Foundation Faculty Early Career Development Award</label>
                <div class="accordion-content">
                    <ul>
                        <li>2021 - <a href="#">Dr. Snigdha Chaturvedi</a> (BT/CSE/2009)</li>
                        <li>2021 - <a href="#">Dr. Eshan Chattopadhyay</a> (BT/CSE/2011)</li>
                        <li>2021 - <a href="#">Dr. Pravesh K. Kothari</a> (BT/EE/2010)</li>
                    </ul>
                </div>
            </div>

            <!-- Associate Fellow of the Indian National Science Academy (INSA) -->
            <div class="accordion">
                <input type="checkbox" id="fellowship10">
                <label for="fellowship10">Associate Fellow of the Indian National Science Academy (INSA)</label>
                <div class="accordion-content">
                    <ul>
                        <li>2023 - <a href="#">Dr. Rahul Mnagal</a> (BT/CHE/2010)</li>
                    </ul>
                </div>
            </div>

            <!-- S. Ramachandran National Bioscience Award -->
            <div class="accordion">
                <input type="checkbox" id="fellowship11">
                <label for="fellowship11">S. Ramachandran National Bioscience Award</label>
                <div class="accordion-content">
                    <ul>
                        <li>2023 - <a href="#">Prof. Nitin Gupta</a> (BT/CS/2004)</li>
                    </ul>
                </div>
            </div>

            <!-- White House National Medal for Technology and Innovation -->
            <div class="accordion">
                <input type="checkbox" id="fellowship12">
                <label for="fellowship12">White House National Medal for Technology and Innovation</label>
                <div class="accordion-content">
                    <ul>
                        <li>2023 - <a href="#">Prof. Ashok Gadgil</a> (MSC2/PHY/1973)</li>
                    </ul>
                </div>
            </div>

            <!-- ACM-IEEE CS Ken Kennedy Award -->
            <div class="accordion">
                <input type="checkbox" id="fellowship13">
                <label for="fellowship13">ACM-IEEE CS Ken Kennedy Award</label>
                <div class="accordion-content">
                    <ul>
                        <li>2023 - <a href="#">Prof. Keshav Pingali</a> (BT/EE/78)</li>
                    </ul>
                </div>
            </div>

            <!-- Fellows, National Academy of Inventors -->
            <div class="accordion">
                <input type="checkbox" id="fellowship14">
                <label for="fellowship14">Fellows, National Academy of Inventors</label>
                <div class="accordion-content">
                    <ul>
                        <li>2021 - <a href="#">Dr. Ashutosh Tiwari</a> (PhD/PHY/2000)</li>
                        <li>2016 - <a href="#">Prof. Anil K. Jain</a> (BT/EE/1969)</li>
                        <li>2013 - <a href="#">Prof. Jitendra Malik</a> (BT/EE/1980)</li>
                        <li>2013 - <a href="#">Dr. Pradip Sindhu</a> (BT/EE/1974)</li>
                        <li>2013 - <a href="#">Prof. Ashok Gadgil</a> (MSC2/PHY/1973)</li>
                        <li>2013 - <a href="#">Prof. Vijay Kumar</a> (BT/ME/1983)</li>
                        <li>2012 - <a href="#">Dr. P. Pradip</a> (BT/MME/1975)</li>
                        <li>2010 - <a href="#">Mr. N.R. Narayana Murthy</a> (MT/EE/1969)</li>
                        <li>2009 - <a href="#">Prof. Umesh K. Mishra</a> (BT/EE/1979)</li>
                        <li>2008 - <a href="#">Prof. Arvind</a> (BT/EE/1969)</li>
                        <li>2006 - <a href="#">Prof. Vijay K. Dhir</a> (MT/ME/1968)</li>
                        <li>2004 - <a href="#">Prof. Arup K. Chakraborty</a> (BT/CHE/1983)</li>
                        <li>2004 - <a href="#">Prof. Vijay Vittal</a> (MTech/EE/1979)</li>
                        <li>2004 - <a href="#">Prof. Rakesh K. Jain</a> (BT/CHE/1972)</li>
                        <li>2002 - <a href="#">Prof. Rakesh Agrawal</a> (BT/CHE/1975)</li>
                        <li>2015 - <a href="#">Prof. Raj Narain Singh</a> (BT/MME/1967)</li>
                    </ul>
                </div>
            </div>

            <!-- Forbes 30 Under 30 list -->
            <div class="accordion">
                <input type="checkbox" id="fellowship15">
                <label for="fellowship15">Forbes 30 Under 30 list</label>
                <div class="accordion-content">
                    <ul>
                        <li>2020 - <a href="#">Eshan Sadasivan</a> (MDes/PhD/2015/2021)</li>
                        <li>2020 - <a href="#">Mr. Aditya Prasad</a> (BT/MSE/2014)</li>
                        <li>2020 - <a href="#">Gaurav Kunwar</a> (BT/ME/2014)</li>
                        <li><a href="#">Mr. Harsh Pokharna</a> (BT/ME/2014)</li>
                    </ul>
                </div>
            </div>

            <!-- Fellows, National Academy of Engineering, USA (Duplicate in original data, included for completeness) -->
            <div class="accordion">
                <input type="checkbox" id="fellowship16">
                <label for="fellowship16">Fellows, National Academy of Engineering, USA</label>
                <div class="accordion-content">
                    <ul>
                        <li>2024 - <a href="#">Prof. Raj Narain Singh</a> (BT/MME/1967)</li>
                        <li>2017 - <a href="#">Prof. Susmita Bose</a> (MSC2/CHM/1992)</li>
                        <li>2017 - <a href="#">Prof. Vijayakumar Bhagavatula</a> (BT/MT/EE/1975/1977)</li>
                        <li>2017 - <a href="#">Prof. Prabir K. Dutta</a> (MSC2/CHM/1975)</li>
                        <li>2017 - <a href="#">Prof. Rakesh K Jain</a> (BT/CHE/1972)</li>
                        <li>2015 - <a href="#">Dr. C. Mauli Agrawal</a> (BT/ME/1982)</li>
                        <li>2015 - <a href="#">Prof. Umesh K. Mishra</a> (BT/EE/1979)</li>
                        <li>2015 - <a href="#">Prof. Anil K. Jain</a> (BT/EE/1969)</li>
                        <li>2014 - <a href="#">Jagdish Narayan</a> (BT/MME/1969)</li>
                        <li>2013 - <a href="#">Rakesh Agrawal</a> (BT/CHE/1975)</li>
                    </ul>
                </div>
            </div>

            <!-- TWAS Fellows -->
            <div class="accordion">
                <input type="checkbox" id="fellowship17">
                <label for="fellowship17">TWAS Fellows</label>
                <div class="accordion-content">
                    <ul>
                        <li>2019 - <a href="#">Prof. Kapil Hari Paranjape</a> (MSc5/MTH/1992)</li>
                        <li>2019 - <a href="#">Prof. Anil K. Jain</a> (BT/EE/1969)</li>
                        <li>2018 - <a href="#">Prof. Shiraz N. Minwalla</a> (MSC5/PHY/1995)</li>
                        <li>2018 - <a href="#">Prof. Sudeshna Sinha</a> (MSC5/CHM/1985)</li>
                        <li>2018 - <a href="#">Prof. Amitabha Chattopadhyay</a> (MSC2/CHM/1980)</li>
                        <li>2018 - <a href="#">Prof. Sandhya S. Visweswariah</a> (MSC2/CHM/1980)</li>
                        <li>2016 - <a href="#">Prof. Sandip P. Trivedi</a> (MSC2/PHY/1985)</li>
                        <li>2016 - <a href="#">Prof. Arnab Rai Choudhuri</a> (MSC2/PHY/1980)</li>
                        <li>2015 - <a href="#">Prof. Indranil Manna</a> (MT/MME/1985)</li>
                        <li>2013 - <a href="#">Prof. Ranjan K. Mallik</a> (BT/EE/1987)</li>
                        <li>2013 - <a href="#">Prof. Anurag Kumar</a> (BT/EE/1977)</li>
                        <li>2012 - <a href="#">Prof. Manindra Agrawal</a> (BT/PhD/CSE/1986/1991)</li>
                        <li>2011 - <a href="#">Prof. Bidyut Baran Chaudhuri</a> (PhD/EE/1980)</li>
                        <li>2011 - <a href="#">Prof. S. Ramasesha</a> (PhD/CHM/1977)</li>
                        <li>2010 - <a href="#">Prof. Ashutosh Sharma</a> (BT/CHE/1982)</li>
                        <li>2010 - <a href="#">Prof. K. VijayRaghavan</a> (BT/MT/CHE/1975/1977)</li>
                        <li>2007 - <a href="#">Prof. Dipankar Das Sarma</a> (MSC5/PHY/1977)</li>
                        <li>2007 - <a href="#">Prof. Mriganka Sur</a> (BT/EE/1974)</li>
                        <li>2006 - <a href="#">Prof. Spenta R. Wadia</a> (MSC2/PHY/1973)</li>
                        <li>2004 - <a href="#">Prof. Eluvathingal D. Jemmis</a> (MSC2/CHM/1973)</li>
                    </ul>
                </div>
            </div>

            <!-- Fellows, National Academy of Sciences (NASI) -->
            <div class="accordion">
                <input type="checkbox" id="fellowship18">
                <label for="fellowship18">Fellows, National Academy of Sciences (NASI)</label>
                <div class="accordion-content">
                    <ul>
                        <li>2015 - <a href="#">Prof. Jitendra Malik</a> (BT/EE/1980)</li>
                        <li>2013 - <a href="#">Prof. Gopal Balasubramanian</a> (MSc2/PHY/1993)</li>
                        <li>2012 - <a href="#">Prof. Sanjay Mittal</a> (BT/AE/1988)</li>
                        <li>2008 - <a href="#">Prof. Debashish Chowdhury</a> (PhD/PHY/1984)</li>
                        <li>2007 - <a href="#">Prof. Ranjan K. Mallik</a> (BT/EE/1987)</li>
                        <li>2007 - <a href="#">Prof. Manindra Agrawal</a> (BT/PhD/CSE/1986/1991)</li>
                        <li>2007 - <a href="#">Prof. Yashwant Gupta</a> (BT/EE/1985)</li>
                        <li>2007 - <a href="#">Prof. Anand K. Bachhaawat</a> (MSc2/CHM/1980)</li>
                        <li>2006 - <a href="#">Prof. Ashutosh Sharma</a> (BT/CHE/1982)</li>
                        <li>2000 - <a href="#">Prof. T. K. Chakraborty</a> (MSC2/PhD/CHM/1979/1984)</li>
                        <li>2000 - <a href="#">Prof. Dipankar Das Sarma</a> (MSC5/PHY/1977)</li>
                        <li>2000 - <a href="#">Prof. Spenta R. Wadia</a> (MSC2/PHY/1973)</li>
                        <li>1998 - <a href="#">Prof. Amitabha Chattopadhyay</a> (MSC2/CHM/1980)</li>
                        <li>1996 - <a href="#">Dr. Shahid Jameel</a> (MSC2/CHM/1979)</li>
                        <li>1994 - <a href="#">Prof. Peeyush Chandra</a> (MSC2/PhD/MTH/1971/1976)</li>
                    </ul>
                </div>
            </div>

            <!-- Member, Optical Society of India -->
            <div class="accordion">
                <input type="checkbox" id="fellowship19">
                <label for="fellowship19">Member, Optical Society of India</label>
                <div class="accordion-content">
                    <ul>
                        <li>2011 - <a href="#">Prof. Debabrata Goswami</a> (MSC2/CHM/1988)</li>
                    </ul>
                </div>
            </div>

            <!-- Fellows, Institute of Electrical and Electronics Engineers (IEEE), USA -->
            <div class="accordion">
                <input type="checkbox" id="fellowship20">
                <label for="fellowship20">Fellows, Institute of Electrical and Electronics Engineers (IEEE), USA</label>
                <div class="accordion-content">
                    <ul>
                        <li>2021 - <a href="#">Prof. Yogesh Singh Chauhan</a> (MT/EE/2003)</li>
                        <li>2016 - <a href="#">Prof. Sri Niwas Singh</a> (MT/PhD/EE/1989/1995)</li>
                    </ul>
                </div>
            </div>

            <!-- Fellows, American Society of Mechanical Engineers (ASME) -->
            <div class="accordion">
                <input type="checkbox" id="fellowship21">
                <label for="fellowship21">Fellows, American Society of Mechanical Engineers (ASME)</label>
                <div class="accordion-content">
                    <ul>
                        <li>2009 - <a href="#">Prof. N Sri Namachchivaya</a> (BT/CE/1979)</li>
                        <li>2000 - <a href="#">Prof. Yogendra Kumar Joshi</a> (BT/ME/1979)</li>
                        <li>1991 - <a href="#">Prof. Rajit Gadh</a> (BT/ME/1984)</li>
                    </ul>
                </div>
            </div>

            <!-- Sloan Fellowship -->
            <div class="accordion">
                <input type="checkbox" id="fellowship22">
                <label for="fellowship22">Sloan Fellowship</label>
                <div class="accordion-content">
                    <ul>
                        <li>2023 - <a href="#">Dr. Debanjan Chowdhury</a> (MSC5/PHY/2010)</li>
                        <li>2020 - <a href="#">Dr. Monika Raj</a> (Phd/Chm/2009)</li>
                        <li>2017 - <a href="#">Dr. Ambuj Tewari</a> (BT/CSE/2002)</li>
                        <li>1996 - <a href="#">Prof. Mahan Mitra</a> (MSC5/MTH/1992)</li>
                    </ul>
                </div>
            </div>

            <!-- The Wellcome Trust/DBT India Alliance Fellow -->
            <div class="accordion">
                <input type="checkbox" id="fellowship23">
                <label for="fellowship23">The Wellcome Trust/DBT India Alliance Fellow</label>
                <div class="accordion-content">
                    <ul>
                        <li>2015 - <a href="#">Dr. S. G. Srivatsan</a> (PhD/CHM/2003)</li>
                        <li>2015 - <a href="#">Dr. Nitin Gupta</a> (BT/CSE/2004)</li>
                    </ul>
                </div>
            </div>

            <!-- The Wellcome Trust Fellow -->
            <div class="accordion">
                <input type="checkbox" id="fellowship24">
                <label for="fellowship24">The Wellcome Trust Fellow</label>
                <div class="accordion-content">
                    <ul>
                        <li>2004 - <a href="#">Prof. Debabrata Goswami</a> (MSC2/CHM/1988)</li>
                        <li>2002 - <a href="#">Prof. Amitabha Chattopadhyay</a> (MSC2/CHM/1980)</li>
                        <li>2000 - <a href="#">Raghavan Varadarajan</a> (MSc5/CHM/1982)</li>
                    </ul>
                </div>
            </div>

            <!-- Fellows, American Academy of Arts and Sciences -->
            <div class="accordion">
                <input type="checkbox" id="fellowship25">
                <label for="fellowship25">Fellows, American Academy of Arts and Sciences</label>
                <div class="accordion-content">
                    <ul>
                        <li>2013 - <a href="#">Prof. Rakesh Agrawal</a> (BT/CHE/1975)</li>
                        <li>2013 - <a href="#">Prof. Jitendra Malik</a> (BT/EE/1980)</li>
                        <li>2007 - <a href="#">Prof. Arup K. Chakraborty</a> (BT/CHE/1983)</li>
                        <li>2003 - <a href="#">Prof. Mriganka Sur</a> (BT/EE/1974)</li>
                    </ul>
                </div>
            </div>

            <!-- MacArthur Fellowship -->
            <div class="accordion">
                <input type="checkbox" id="fellowship26">
                <label for="fellowship26">MacArthur Fellowship</label>
                <div class="accordion-content">
                    <ul>
                        <li>2016 - <a href="#">Dr. Manu Prakash</a> (BT/CSE/2002)</li>
                    </ul>
                </div>
            </div>

            <!-- Royal Academy of Engineering Fellowship -->
            <div class="accordion">
                <input type="checkbox" id="fellowship27">
                <label for="fellowship27">Royal Academy of Engineering Fellowship</label>
                <div class="accordion-content">
                    <ul>
                        <li>2016 - <a href="#">Dr. Dinesh Chandra Verma</a> (BT/CSE/1987)</li>
                    </ul>
                </div>
            </div>

            <!-- Jefferson Science Fellowship, USA -->
            <div class="accordion">
                <input type="checkbox" id="fellowship28">
                <label for="fellowship28">Jefferson Science Fellowship, USA</label>
                <div class="accordion-content">
                    <ul>
                        <li>2016 - <a href="#">Dr. Dinesh Chandra Verma</a> (BT/CSE/1987)</li>
                    </ul>
                </div>
            </div>

            <!-- Member, National Academy of Medicine, USA -->
            <div class="accordion">
                <input type="checkbox" id="fellowship29">
                <label for="fellowship29">Member, National Academy of Medicine, USA</label>
                <div class="accordion-content">
                    <ul>
                        <li>2017 - <a href="#">Prof. Arup K. Chakraborty</a> (BT/CHE/1983)</li>
                        <li>2011 - <a href="#">Prof. Mriganka Sur</a> (BT/EE/1974)</li>
                        <li>2003 - <a href="#">Prof. Rakesh K. Jain</a> (BT/CHE/1972)</li>
                    </ul>
                </div>
            </div>

            <!-- Fortune India 40 Under 40 list -->
            <div class="accordion">
                <input type="checkbox" id="fellowship30">
                <label for="fellowship30">Fortune India 40 Under 40 list</label>
                <div class="accordion-content">
                    <ul>
                        <li>2021 - <a href="#">Mr. Pankaj Agarwal</a> (BT/EE/2004)</li>
                    </ul>
                </div>
            </div>

            <!-- Fellow, American Astronautical Society -->
            <div class="accordion">
                <input type="checkbox" id="fellowship31">
                <label for="fellowship31">Fellow, American Astronautical Society</label>
                <div class="accordion-content">
                    <ul>
                        <li>2020 - <a href="#">Prof. Kamesh Subbarao</a> (BT/AE/1993)</li>
                    </ul>
                </div>
            </div>

            <!-- SERB- STAR Awards -->
            <div class="accordion">
                <input type="checkbox" id="fellowship32">
                <label for="fellowship32">SERB- STAR Awards</label>
                <div class="accordion-content">
                    <ul>
                        <li>2021 - <a href="#">Prof. Santanu Mukherjee</a> (MSC2/CHM/2002)</li>
                        <li>2021 - <a href="#">Prof. R. Boomi Shankar</a> (PhD/CHM/2004)</li>
                        <li>2021 - <a href="#">Prof. Pinaki Prasad Bhattacharjee</a> (MT/PhD/MME/2002/2007)</li>
                        <li>2019 - <a href="#">Prof. Animangsu Ghatak</a> (MT/CHE/1998)</li>
                        <li>2019 - <a href="#">Prof. Jayant Kumar Singh</a> (BT/CHE/1997)</li>
                        <li>2021 - <a href="#">Prof. Abhishek Dey</a> (MSC2/CHM/2001)</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- RIGHT COLUMN: CAREER AWARDS CONTAINER -->
        <div class="column career-awards-main-column">
            <div class="section-title">Career Awards</div>
            <div class="career-awards-sub-columns">
                <div class="career-awards-sub-column">
                    <!-- First set of Career Awards accordions (approximately half) -->
                    <!-- Humboldt Research Award -->
                    <div class="accordion">
                        <input type="checkbox" id="career1">
                        <label for="career1">Humboldt Research Award</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2010 - <a href="#">Prof. Manindra Agrawal</a> (BT/PhD/CSE/1986/1991)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Mitsuyoshi Tanaka Dissertation Award -->
                    <div class="accordion">
                        <input type="checkbox" id="career2">
                        <label for="career2">Mitsuyoshi Tanaka Dissertation Award</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2016 - <a href="#">Dr. Vartak Adish Adeep</a> (MSC5/PHY/2008)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- National Geoscience Award for Excellence -->
                    <div class="accordion">
                        <input type="checkbox" id="career3">
                        <label for="career3">National Geoscience Award for Excellence</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2016 - <a href="#">Prof. Ashok Kumar Singhvi</a> (PhD/PHY/1976)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Gandhian Young Technological Innovation (GYTI) Award -->
                    <div class="accordion">
                        <input type="checkbox" id="career4">
                        <label for="career4">Gandhian Young Technological Innovation (GYTI) Award</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2017 - <a href="#">Mr. Sachin NP</a> (MDes/2016)</li>
                                <li>2016 - <a href="#">Dr. Manisha B. Padwal</a> (PhD/AE/2015)</li>
                                <li>2016 - <a href="#">Dr. Abhishek Kumar Jha</a> (PhD/EE/2016)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Young Mechanical Engineer of the Year Award by ASME -->
                    <div class="accordion">
                        <input type="checkbox" id="career5">
                        <label for="career5">Young Mechanical Engineer of the Year Award by ASME</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2016 - <a href="#">Dr. Naveen Vetcha</a> (MT/ME/2007)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- National Medal of Science -->
                    <div class="accordion">
                        <input type="checkbox" id="career6">
                        <label for="career6">National Medal of Science</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2015 - <a href="#">Prof. Rakesh K. Jain</a> (BT/CHE/1972)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Oliver E. Buckley Prize -->
                    <div class="accordion">
                        <input type="checkbox" id="career7">
                        <label for="career7">Oliver E. Buckley Prize</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2002 - <a href="#">Prof. Jainendra K. Jain</a> (MSC2/PHY/1981)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- J and E Hall Gold Medal -->
                    <div class="accordion">
                        <input type="checkbox" id="career8">
                        <label for="career8">J and E Hall Gold Medal</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2003 - <a href="#">Prof. Rakesh Agrawal</a> (BT/CHE/1975)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Industrial Research Institute Achievement Award -->
                    <div class="accordion">
                        <input type="checkbox" id="career9">
                        <label for="career9">Industrial Research Institute Achievement Award</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2007 - <a href="#">Prof. Rakesh Agrawal</a> (BT/CHE/1975)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- National Medal of Technology and Innovation -->
                    <div class="accordion">
                        <input type="checkbox" id="career10">
                        <label for="career10">National Medal of Technology and Innovation</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2011 - <a href="#">Prof. Rakesh Agrawal</a> (BT/CHE/1975)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Hoover Medal (American Engineering Prize) -->
                    <div class="accordion">
                        <input type="checkbox" id="career11">
                        <label for="career11">Hoover Medal (American Engineering Prize)</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2012 - <a href="#">Mr. N. R. Narayan Murthy</a> (MT/EE/1969)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Order of the British Empire -->
                    <div class="accordion">
                        <input type="checkbox" id="career12">
                        <label for="career12">Order of the British Empire</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2007 - <a href="#">Mr. N. R. Narayan Murthy</a> (MT/EE/1969)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Philanthropist of the Year (The Asian Awards) -->
                    <div class="accordion">
                        <input type="checkbox" id="career13">
                        <label for="career13">Philanthropist of the Year (The Asian Awards)</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2013 - <a href="#">Mr. N. R. Narayan Murthy</a> (MT/EE/1969)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Officer of the Legion of Honor -->
                    <div class="accordion">
                        <input type="checkbox" id="career14">
                        <label for="career14">Officer of the Legion of Honor</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2008 - <a href="#">Mr. N. R. Narayan Murthy</a> (MT/EE/1969)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Ernst & Young World Entrepreneur Of The Year -->
                    <div class="accordion">
                        <input type="checkbox" id="career15">
                        <label for="career15">Ernst & Young World Entrepreneur Of The Year</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2003 - <a href="#">Mr. N. R. Narayan Murthy</a> (MT/EE/1969)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- AIMA Public Service Excellence Award -->
                    <div class="accordion">
                        <input type="checkbox" id="career16">
                        <label for="career16">AIMA Public Service Excellence Award</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2003 - <a href="#">Late. Mr. Satyendra Dubey</a> (BT/CE/1994)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Transparency International's Annual integrity Award -->
                    <div class="accordion">
                        <input type="checkbox" id="career17">
                        <label for="career17">Transparency International's Annual integrity Award</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2004 - <a href="#">Late. Mr. Satyendra Dubey</a> (BT/CE/1994)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- SiliconIndia Leadership Award for Academics -->
                    <div class="accordion">
                        <input type="checkbox" id="career18">
                        <label for="career18">SiliconIndia Leadership Award for Academics</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2007 - <a href="#">Prof. Jitendra Malik</a> (BT/EE/1980)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- The King-Sun Fu Prize -->
                    <div class="accordion">
                        <input type="checkbox" id="career19">
                        <label for="career19">The King-Sun Fu Prize</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2014 - <a href="#">Prof. Jitendra Malik</a> (BT/EE/1980)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Millennium Medal -->
                    <div class="accordion">
                        <input type="checkbox" id="career20">
                        <label for="career20">Millennium Medal</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2010 - <a href="#">Prof. Ashok Jhunjhunwala</a> (BT/EE/1975)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Bernard Low Humanitarian Award -->
                    <div class="accordion">
                        <input type="checkbox" id="career21">
                        <label for="career21">Bernard Low Humanitarian Award</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2009 - <a href="#">Prof. Ashok Jhunjhunwala</a> (BT/EE/1975)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Dr.Vikram Sarabhai Research Award -->
                    <div class="accordion">
                        <input type="checkbox" id="career22">
                        <label for="career22">Dr.Vikram Sarabhai Research Award</label>
                        <div class="accordion-content">
                            <ul>
                                <li>1997 - <a href="#">Prof. Ashok Jhunjhunwala</a> (BT/EE/1975)</li>
                                <li>2007 - <a href="#">Prof. Ranjan K. Mallik</a> (BT/EE/1987)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Prime Minister’s Award for Excellence in Public Administration -->
                    <div class="accordion">
                        <input type="checkbox" id="career23">
                        <label for="career23">Prime Minister’s Award for Excellence in Public Administration</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2008 - <a href="#">Mr. Ram Sewak Sharma</a> (MSC2/MTH/1977)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Jamnalal Bajaj Award -->
                    <div class="accordion">
                        <input type="checkbox" id="career24">
                        <label for="career24">Jamnalal Bajaj Award</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2001 - <a href="#">Dr. Anil K. Rajvanshi</a> (BT/MT/ME/1972/1974)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Paul Baran (Marconi) Young Scholar Award -->
                    <div class="accordion">
                        <input type="checkbox" id="career25">
                        <label for="career25">Paul Baran (Marconi) Young Scholar Award</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2016 - <a href="#">Dr. Dinesh Bharadia</a> (BT/EE/2010)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- National Bioscience Award -->
                    <div class="accordion">
                        <input type="checkbox" id="career26">
                        <label for="career26">National Bioscience Award</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2016 - <a href="#">Dr. Sanjib Senapati</a> (PhD/CHM/2001)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Fellow, Indian National Academy of Engineering -->
                    <div class="accordion">
                        <input type="checkbox" id="career27">
                        <label for="career27">Fellow, Indian National Academy of Engineering</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2021 - <a href="#">Prof. Yogesh Singh Chauhan</a> (MT/EE/2003)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Herdhillia Award -->
                    <div class="accordion">
                        <input type="checkbox" id="career28">
                        <label for="career28">Herdhillia Award</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2021 - <a href="#">Prof. Jayant Kumar Singh</a> (BT/CHE/1997)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- INSA Teacher Award -->
                    <div class="accordion">
                        <input type="checkbox" id="career29">
                        <label for="career29">INSA Teacher Award</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2021 - <a href="#">Prof. Parasar Mohanty</a> (PhD/MTH/2001)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="career-awards-sub-column">
                    <!-- Second set of Career Awards accordions (approximately half) -->
                    <!-- Young Scientist Platinum Jubilee Award, National Academy of Sciences (NASI), India -->
                    <div class="accordion">
                        <input type="checkbox" id="career30">
                        <label for="career30">Young Scientist Platinum Jubilee Award, National Academy of Sciences (NASI), India</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2021 - <a href="#">Dr. Raghvendra Chaudhary</a> (PhD/EE/2014)</li>
                                <li>2021 - <a href="#">Dr. Punita Kumari</a> (PHD/BSBE/2019)</li>
                                <li>2021 - <a href="#">Dr. Punita Kumari</a> (PhD/BSBE/2019)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Fellow of the IEEE, USA -->
                    <div class="accordion">
                        <input type="checkbox" id="career31">
                        <label for="career31">Fellow of the IEEE, USA</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2021 - <a href="#">Dr. Achintya K. Bhowmik</a> (BT/ME/1996)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Fellow of National Academy of Sciences, India -->
                    <div class="accordion">
                        <input type="checkbox" id="career32">
                        <label for="career32">Fellow of National Academy of Sciences, India</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2021 - <a href="#">Prof. S. A. Ramakrishnan</a> (MSC5/PHY/1995)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- National Science Foundation Faculty Early Career Development Award -->
                    <div class="accordion">
                        <input type="checkbox" id="career33">
                        <label for="career33">National Science Foundation Faculty Early Career Development Award</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2021 - <a href="#">Dr. Eshan Chattopadhyay</a> (BT/CSE/2011)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Faculty Early Career Development (CAREER) Award from the National Science Foundation (NSF) -->
                    <div class="accordion">
                        <input type="checkbox" id="career34">
                        <label for="career34">Faculty Early Career Development (CAREER) Award from the National Science Foundation (NSF)</label>
                        <div class="accordion-content">
                            <ul>
                                <li><a href="#">Dr. Snigdha Chaturvedi</a> (BT/CSE/2009)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Padma Shri -->
                    <div class="accordion">
                        <input type="checkbox" id="career35">
                        <label for="career35">Padma Shri</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2022 - <a href="#">Dr. Anil K. Rajvanshi</a> (BT/MT/ME/1972/1974)</li>
                                <li>2021 - <a href="#">Prof.H.C.Verma</a> (MSC2/PHD/1977/1981)</li>
                                <li>2017 - <a href="#">Dr. B. V. R. Mohan Reddy</a> (MT/ME/1974)</li>
                                <li>2015 - <a href="#">Dr. Saurabh Srivastava</a> (BT/ME/1968)</li>
                                <li>2014 - <a href="#">Prof. Eluvathingal D. Jemmis</a> (MSC2/CHM/1973)</li>
                                <li>2013 - <a href="#">Prof. K. VijayRaghavan</a> (BT/MT/CHE/1975/1977)</li>
                                <li>2013 - <a href="#">Prof. Manindra Agrawal</a> (BT/PhD/CSE/1986/1991)</li>
                                <li>2013 - <a href="#">Prof. S. G. Dhande</a> (PhD/ME/1975)</li>
                                <li>2006 - <a href="#">Dr. Swaminathan Sivaram</a> (MSC2/CHM/1967)</li>
                                <li>2004 - <a href="#">Mr. Satish kumar kaura</a> (BT/EE/1966)</li>
                                <li>2002 - <a href="#">Prof. Padmanabhan Balaram</a> (MSC2/CHM/1969)</li>
                                <li>2002 - <a href="#">Prof. Ashok Jhunjhunwala</a> (BT/EE/1975)</li>
                                <li>2001 - <a href="#">Prof. Ashok Sen</a> (MSC2/PHY/1978)</li>
                                <li>2000 - <a href="#">Mr. N. R. Narayan Murthy</a> (MT/EE/1969)</li>
                                <li>1986 - <a href="#">Mr. Anil Kumar Agarwal</a> (ME)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Padma Bhushan -->
                    <div class="accordion">
                        <input type="checkbox" id="career36">
                        <label for="career36">Padma Bhushan</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2023 - <a href="#">Prof. Deepak Dhar</a> (MSC2/PHY/1973)</li>
                                <li>2014 - <a href="#">Prof. Padmanabhan Balaram</a> (MSC2/CHM/1969)</li>
                                <li>2013 - <a href="#">Prof. Ashok Sen</a> (MSC2/PHY/1978)</li>
                                <li>2000 - <a href="#">Mr. Anil Kumar Agarwal</a> (BT/ME/1970)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Padma Vibhushan -->
                    <div class="accordion">
                        <input type="checkbox" id="career37">
                        <label for="career37">Padma Vibhushan</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2008 - <a href="#">Mr. N. R. Narayan Murthy</a> (MT/EE/1969)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Fulkerson Prize -->
                    <div class="accordion">
                        <input type="checkbox" id="career38">
                        <label for="career38">Fulkerson Prize</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2006 - <a href="#">Prof. Manindra Agrawal</a> (BT/PhD/CSE/1986/1991)</li>
                                <li>2006 - <a href="#">Dr. Neeraj Kayal</a> (BT/PhD/CSE/2002/2007)</li>
                                <li>2006 - <a href="#">Dr. Nitin Saxena</a> (BT/PhD/CSE/2002/2007)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Gödel Prize -->
                    <div class="accordion">
                        <input type="checkbox" id="career39">
                        <label for="career39">Gödel Prize</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2006 - <a href="#">Prof. Manindra Agrawal</a> (BT/PhD/CSE/1986/1991)</li>
                                <li>2006 - <a href="#">Dr. Neeraj Kayal</a> (BT/PhD/CSE/2002/2007)</li>
                                <li>2006 - <a href="#">Dr. Nitin Saxena</a> (BT/PhD/CSE/2002/2007)</li>
                                <li>2001 - <a href="#">Late. Dr. Rajeev Motwani</a> (BT/CSE/1983)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- TWAS Prize -->
                    <div class="accordion">
                        <input type="checkbox" id="career40">
                        <label for="career40">TWAS Prize</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2016 - <a href="#">Prof. Amitabha Chattopadhyay</a> (MSC2/CHM/1980)</li>
                                <li>2016 - <a href="#">Prof. Shiraz Naval Minwalla</a> (MSC5/PHY/1995)</li>
                                <li>2015 - <a href="#">Prof. Sandip P. Trivedi</a> (MSC2/PHY/1985)</li>
                                <li>2013 - <a href="#">Prof. Rajesh Gopakumar</a> (MSC5/PHY/1992)</li>
                                <li>2013 - <a href="#">Prof. Indranil Manna</a> (MT/MME/1985)</li>
                                <li>2010 - <a href="#">Prof. Manindra Agrawal</a> (BT/PhD/CSE/1986/1991)</li>
                                <li>2010 - <a href="#">Mr. Arvind Kumar Gupta</a> (BT/EE/1975)</li>
                                <li>2008 - <a href="#">Prof. Ashutosh Sharma</a> (BT/CHE/1982)</li>
                                <li>2006 - <a href="#">Prof. Dipankar Das Sarma</a> (MSC5/PHY/1977)</li>
                                <li>2004 - <a href="#">Prof. Spenta R. Wadia</a> (MSC2/PHY/1973)</li>
                                <li>2003 - <a href="#">Prof. Eluvathingal D. Jemmis</a> (MSC2/CHM/1973)</li>
                                <li>2002 - <a href="#">Prof. Deepak Dhar</a> (MSC2/PHY/1973)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Shanti Swaroop Bhatnagar Prize -->
                    <div class="accordion">
                        <input type="checkbox" id="career41">
                        <label for="career41">Shanti Swaroop Bhatnagar Prize</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2023 - <a href="#">Dr. Neeraj Kayal</a> (BT/PhD/CSE/2002/2007)</li>
                                <li>2023 - <a href="#">Dr. Dipti Ranjan Sahoo</a> (MT/PhD/CE/2004/2008)</li>
                                <li>2020 - <a href="#">Dr. Jyotirmayee Dash</a> (PHD/CHM/2003)</li>
                                <li>2018 - <a href="#">Dr. Nitin Saxena</a> (BT/PhD/CSE/2002/2007)</li>
                                <li>2018 - <a href="#">Prof. Amit Agrawal</a> (BT/ME/1996)</li>
                                <li>2018 - <a href="#">Dr. Amit Kumar</a> (BT/CSE/1997)</li>
                                <li>2018 - <a href="#">Dr. Amit Kumar</a> (BT/CSE/1997)</li>
                                <li>2016 - <a href="#">Prof. Anantha S. Ramakrishna</a> (MSC5/PHY/1995)</li>
                                <li>2015 - <a href="#">Prof. Pradyut Ghosh</a> (PHD/CHM/1998)</li>
                                <li>2011 - <a href="#">Prof. Mahan Mitra</a> (MSC5/MTH/1992)</li>
                                <li>2011 - <a href="#">Prof. Sirshendu De</a> (BT/MT/PhD/CHE/1990/1993/1997)</li>
                                <li>2010 - <a href="#">Prof. Manindra Agrawal</a> (BT/PhD/CSE/1986/1991)</li>
                                <li>2009 - <a href="#">Prof. Rajesh Gopakumar</a> (MSC5/PHY/1992)</li>
                                <li>2008 - <a href="#">Prof. Ranjan K. Mallik</a> (BT/EE/1987)</li>
                                <li>2006 - <a href="#">Prof. Sanjay Mittal</a> (BT/AE/1988)</li>
                                <li>2006 - <a href="#">Dr. Atish Shripad Dabholkar</a></li>
                                <li>2002 - <a href="#">Prof. T. K. Chakraborty</a> (MSC2/PhD/CHM/1979/1984)</li>
                                <li>2002 - <a href="#">Prof. Ashutosh Sharma</a> (BT/CHE/1982)</li>
                                <li>2002 - <a href="#">Dr. Dipendra Prasad</a> (MSC2/MTH/1985)</li>
                                <li>2001 - <a href="#">Prof. Amitabha Chattopadhyay</a> (MSC2/CHM/1980)</li>
                                <li>2001 - <a href="#">Dr. Uday Maitra</a> (MSC2/CHM/1979)</li>
                                <li>2000 - <a href="#">Dr. Sourav Pal</a> (MSc2/CHM/1977)</li>
                                <li>1998 - <a href="#">Prof. Ashok Jhunjhunwala</a> (BT/EE/1975)</li>
                                <li>1998 - <a href="#">Dr.Trivandrum Ramakrishnan Ramadas</a></li>
                                <li>1996 - <a href="#">Dr. Shahid Jameel</a> (MSC2/CHM/1979)</li>
                                <li>1996 - <a href="#">Dr. Narayanan Chandrakumar</a> (MSC2/CHM/1976)</li>
                                <li>1994 - <a href="#">Prof. Ashok Sen</a> (MSC2/PHY/1978)</li>
                                <li>1994 - <a href="#">Prof. Eluvathingal D. Jemmis</a> (MSC2/CHM/1973)</li>
                                <li>1994 - <a href="#">Prof. Dipankar Das Sarma</a> (MSC5/PHY/1977)</li>
                                <li>1993 - <a href="#">Prof. Shridhar R. Gadre</a> (PhD/CHM/1977)</li>
                                <li>1993 - <a href="#">Prof. Suresh K. Bhatia</a> (BT/CHE/1974)</li>
                                <li>1992 - <a href="#">Prof. S. Ramasesha</a> (PhD/CHM/1977)</li>
                                <li>1991 - <a href="#">Prof. Deepak Dhar</a> (MSC2/PHY/1973)</li>
                                <li>1987 - <a href="#">Prof. Pramod Sadasheo Moharir</a> (BT/EE/1968)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- INAE Young Engineer Award -->
                    <div class="accordion">
                        <input type="checkbox" id="career42">
                        <label for="career42">INAE Young Engineer Award</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2020 - <a href="#">Prof. Rahul Mangal</a> (BT/CHE/2010)</li>
                                <li>2020 - <a href="#">Prof. Raghvendra Kumar Chaudhary</a> (PhD/EE/2014)</li>
                                <li>2016 - <a href="#">Dr. Manisha B. Padwal</a> (PhD/AE/2015)</li>
                                <li>2016 - <a href="#">Dr. Amartya Mukhopadhyay</a> (BT/MME/2006)</li>
                                <li>2016 - <a href="#">Dr. Chandan Saha</a> (BT/CSE/2006)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Infosys Prize -->
                    <div class="accordion">
                        <input type="checkbox" id="career43">
                        <label for="career43">Infosys Prize</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2021 - <a href="#">Dr. Neeraj Kayal</a> (BT/PhD/CSE/2002/2007)</li>
                                <li>2015 - <a href="#">Prof. G. Ravindra Kumar</a> (PhD/PHY/1990)</li>
                                <li>2015 - <a href="#">Prof. Mahan Mj</a> (MSC5/MTH/1992)</li>
                                <li>2013 - <a href="#">Prof. Shiraz Naval Minwallla</a> (MSC5/PHY/1995)</li>
                                <li>2010 - <a href="#">Prof. Sandip Trivedi</a> (MSC2/PHY/1985)</li>
                                <li>2010 - <a href="#">Prof. Ashutosh Sharma</a> (BT/CHE/1982)</li>
                                <li>2009 - <a href="#">Prof. Ashoke Sen</a> (MSC2/PHY/1978)</li>
                                <li>2009 - <a href="#">Prof. K. Vijay Raghavan</a> (BT/MT/CHE/1975/1977)</li>
                                <li>2008 - <a href="#">Prof. Manindra Agrawal</a> (BT/PhD/CSE/1986/1991)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- International Centre for Theoretical Physics Prize -->
                    <div class="accordion">
                        <input type="checkbox" id="career44">
                        <label for="career44">International Centre for Theoretical Physics Prize</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2010 - <a href="#">Prof. Shiraz Naval Minwalla</a> (MSC5/PHY/1995)</li>
                                <li>2006 - <a href="#">Prof. Rajesh Gopakumar</a> (MSC5/PHY/1992)</li>
                                <li>2003 - <a href="#">Prof. Manindra Agrawal</a> (BT/PhD/CSE/1986/1991)</li>
                                <li>1989 - <a href="#">Prof. Ashok Sen</a> (MSC2/PHY/1978)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Fundamental Physics Prize -->
                    <div class="accordion">
                        <input type="checkbox" id="career45">
                        <label for="career45">Fundamental Physics Prize</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2012 - <a href="#">Prof. Ashok Sen</a> (MSC2/PHY/1978)</li>
                                <li>2014 - <a href="#">Prof. Shiraz Naval Minwalla</a> (MSC5/PHY/1995)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Dirac Medal of the ICTP -->
                    <div class="accordion">
                        <input type="checkbox" id="career46">
                        <label for="career46">Dirac Medal of the ICTP</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2014 - <a href="#">Prof. Ashok Sen</a> (MSC2/PHY/1978)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Clay Research Award -->
                    <div class="accordion">
                        <input type="checkbox" id="career47">
                        <label for="career47">Clay Research Award</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2002 - <a href="#">Prof. Manindra Agrawal</a> (BT/PhD/CSE/1986/1991)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- TOKTEN Award -->
                    <div class="accordion">
                        <input type="checkbox" id="career48">
                        <label for="career48">TOKTEN Award</label>
                        <div class="accordion-content">
                            <ul>
                                <li>1991 - <a href="#">Prof. Mriganka Sur</a> (BT/EE/1974)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Indian Police Medal -->
                    <div class="accordion">
                        <input type="checkbox" id="career49">
                        <label for="career49">Indian Police Medal</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2016 - <a href="#">Mrs. Sonal V. Mishra</a></li>
                            </ul>
                        </div>
                    </div>

                    <!-- Alexander von Humboldt Fellowship -->
                    <div class="accordion">
                        <input type="checkbox" id="career50">
                        <label for="career50">Alexander von Humboldt Fellowship</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2021 - <a href="#">Dr. Manudeo Singh</a></li>
                            </ul>
                        </div>
                    </div>

                    <!-- Fellow of National Academy of Inventors -->
                    <div class="accordion">
                        <input type="checkbox" id="career51">
                        <label for="career51">Fellow of National Academy of Inventors</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2021 - <a href="#">Prof. Thirumalai Venkatesan</a></li>
                            </ul>
                        </div>
                    </div>

                    <!-- Longuet-Higgins Prize -->
                    <div class="accordion">
                        <input type="checkbox" id="career52">
                        <label for="career52">Longuet-Higgins Prize</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2007 - <a href="#">Prof. Jitendra Malik</a> (BT/EE/1980)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- B.M. Birla Science Prize in Physics -->
                    <div class="accordion">
                        <input type="checkbox" id="career53">
                        <label for="career53">B.M. Birla Science Prize in Physics</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2004 - <a href="#">Prof. Rajesh Gopakumar</a> (MSC5/PHY/1992)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- W. Wallace McDowell Award -->
                    <div class="accordion">
                        <input type="checkbox" id="career54">
                        <label for="career54">W. Wallace McDowell Award</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2007 - <a href="#">Prof. Anil K. Jain</a> (BT/EE/1969)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Heinrich Welker Award -->
                    <div class="accordion">
                        <input type="checkbox" id="career55">
                        <label for="career55">Heinrich Welker Award</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2012 - <a href="#">Prof. Umesh K. Mishra</a> (BT/EE/1979)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Globe Award -->
                    <div class="accordion">
                        <input type="checkbox" id="career56">
                        <label for="career56">Globe Award</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2009 - <a href="#">Dr. Anil K. Rajvanshi</a> (BT/MT/ME/1972/1974)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- GD Birla Award -->
                    <div class="accordion">
                        <input type="checkbox" id="career57">
                        <label for="career57">GD Birla Award</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2016 - <a href="#">Prof. Sanjay Mittal</a> (BT/AE/1988)</li>
                                <li>2013 - <a href="#">Prof. Rajesh Gopakumar</a> (MSC5/PHY/1992)</li>
                                <li>2009 - <a href="#">Prof. Manindra Agrawal</a> (BT/PhD/CSE/1986/1991)</li>
                                <li>2005 - <a href="#">Prof. Dipankar Das Sarma</a> (MSC5/PHY/1977)</li>
                                <li>1996 - <a href="#">Prof. Ashoke Sen</a> (MSC2/PHY/1978)</li>
                                <li>1994 - <a href="#">Prof. Padmanabhan Balaram</a> (MSC2/CHM/1969)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- SERB Power Fellowship -->
                    <div class="accordion">
                        <input type="checkbox" id="career58">
                        <label for="career58">SERB Power Fellowship</label>
                        <div class="accordion-content">
                            <ul>
                                <li>2022 - <a href="#">Dr. Jayanti Sengupta</a>(MSC2/CHM/1990)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            // Get references to the search bar and all accordion elements
            const searchBar = document.getElementById('awardSearch');
            const accordions = document.querySelectorAll('.accordion');

            // Function to remove all highlights
            function removeHighlights() {
                document.querySelectorAll('.highlight').forEach(span => {
                    span.outerHTML = span.innerHTML; // Replace the span with its content
                });
            }

            // Function to apply highlights
            function applyHighlights(element, searchTerm) {
                const innerHtml = element.innerHTML;
                const regex = new RegExp(`(${searchTerm})`, 'gi'); // Case-insensitive, global search
                element.innerHTML = innerHtml.replace(regex, '<span class="highlight">$1</span>');
            }

            // Add an event listener for input changes in the search bar
            searchBar.addEventListener('input', (e) => {
                removeHighlights(); // Always remove previous highlights before a new search

                // Get the search term and convert to lowercase for case-insensitive search, then trim whitespace
                const searchTerm = e.target.value.toLowerCase().trim();

                // If the search term is empty, show all accordions and close them.
                // This ensures a clean slate when the search bar is cleared.
                if (searchTerm === '') {
                    accordions.forEach(accordion => {
                        accordion.style.display = 'block'; // Make accordion visible
                        accordion.querySelector('input[type="checkbox"]').checked = false; // Ensure it's closed
                    });
                    return; // Exit the function early as no filtering is needed
                }

                // Iterate through each accordion to perform the search
                accordions.forEach(accordion => {
                    let foundMatch = false; // Flag to track if a match is found within this accordion
                    const label = accordion.querySelector('label');
                    const originalLabelText = label.textContent; // Store original text to reset
                    
                    // Reset label content before checking for a match
                    label.textContent = originalLabelText;

                    // Check if the search term is present in the accordion's heading
                    if (originalLabelText.toLowerCase().includes(searchTerm)) {
                        foundMatch = true;
                        applyHighlights(label, searchTerm); // Apply highlight to label
                    }

                    // Get all list items (awardee names) within the accordion's content
                    const listItems = accordion.querySelectorAll('.accordion-content li');
                    // Iterate through each list item to check for a match
                    listItems.forEach(item => {
                        const originalItemHtml = item.innerHTML; // Store original HTML to reset
                        
                        // Temporarily set innerHTML to textContent to avoid re-highlighting existing spans
                        item.innerHTML = item.textContent; 
                        
                        const itemText = item.textContent.toLowerCase();
                        if (itemText.includes(searchTerm)) {
                            foundMatch = true;
                            applyHighlights(item, searchTerm); // Apply highlight to list item
                        } else {
                            // If no match in this specific item, restore its original (unhighlighted) HTML
                            item.innerHTML = originalItemHtml;
                        }
                    });

                    // Based on whether a match was found, update the accordion's visibility and state
                    if (foundMatch) {
                        accordion.style.display = 'block'; // Show the entire accordion
                        // Automatically open the accordion if a match is found
                        accordion.querySelector('input[type="checkbox"]').checked = true;
                    } else {
                        accordion.style.display = 'none'; // Hide the entire accordion
                        // Ensure it's closed (though hidden)
                        accordion.querySelector('input[type="checkbox"]').checked = false;
                        // Also, restore the label content if the accordion is hidden
                        label.textContent = originalLabelText;
                    }
                });
            });
        });
    </script>
</body>
<?php include '../footer.php'; // Include your site's footer ?>
</html>