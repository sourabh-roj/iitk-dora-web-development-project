<?php
// Function to get current year
function getCurrentYear() {
    return date('Y');
}
?>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<link rel="stylesheet" href="blog_footer.css">
<footer>
    <div class="container">
        <div class="row footer-content-row">
            <div class="col-md-3 footer-column contact-us-address">
                <h5>Contact Us</h5>
                <p>Office of <br>Dean of Resources and Alumni</p>
                <p>Room no. 269, Faculty Building<br>IIT Kanpur- 208016</p>
            </div>
            <div class="col-md-3 footer-column contact-details">
                <div class="footer-col contact">
                    <h5>Contact Info</h5>
                    <p><i class="fas fa-envelope"></i><a href="mailto:dora_desk@iitk.ac.in" class="footer-link">dora_desk@iitk.ac.in</a></p>
                    <p><i class="fas fa-phone"></i><a href="tel:+915122597289" class="footer-link">+91-512-259-7289</a></p>
                </div>
            </div>
            <div class="col-md-3 footer-column other-links">
                <h5>Other links</h5>
                <div class="footer-col others">
                    <a href="https://www.iitk.ac.in/dora">www.iitk.ac.in/dora</a>
                    <a href="https://www.iitk.ac.in/givingback">www.iitk.ac.in/givingback</a>
                    <a href="https://www.students.iitk.ac.in/outreach-cell/">www.students.iitk.ac.in/outreach-cell/</a>
                </div>
            </div>
            <div class="col-md-3 footer-column subscribe-section">
                <h5>Subscribe Our Blog</h5>
                <form class="subscribe-form">
                    <input type="email" placeholder="Your email address" class="email-input">
                    <button type="submit" class="submit-button">Submit</button>
                </form>
            </div>
        </div>
        <div class="row bottom-row">
            <div class="col-12 text-center">
                <p>Copyright © <?php echo getCurrentYear(); ?>. All Rights Reserved.</p>
            </div>
        </div>
    </div>
</footer>