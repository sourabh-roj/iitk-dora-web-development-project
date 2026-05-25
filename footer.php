<?php
// Function to get current year
function getCurrentYear() {
    return date('Y');
}
?>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<link rel="stylesheet" href="footer.css">
<footer>
    <div class="container">
        <div class="row">
            <div class="col-lg-4 mb-1">
                <h5>Dean of Resources and Alumni Office</h5>
                Room no. 269, Faculty Building<br>  
                IIT Kanpur - 208016
            </div>
            <div class="col-lg-4 mb-1">
                <div class="footer-col contact">
                    <h5>Contact us</h5>
                    <p><i class="fas fa-envelope"></i><a href="mailto:alumni@iitk.ac.in" class="footer-link">alumni@iitk.ac.in</a></p>
                    <p><i class="fas fa-phone"></i><a href="tel:+915122597289" class="footer-link">+91-512-259-7289</a></p>
                </div>
            </div>
            <div class="col-lg-4 mb-1">
                <h5>Quick Links</h5>
                <div class="footer-col others">
                    <a href="#">Office Orders</a><br>
                    <a href="#">Almaworld</a>
                </div>
            </div>
            <div class="col-lg-12 mb-1">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14276.540732226732!2da0.23016297542353!3d26.513114176889266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f11.1!3m3!1m2!1s0x399c37dd91f3776d%3A0xaba4141829a3538c!2sAlumni%20Association%20IIT%20Kanpur!5e0!3m2!1sen!2sin!4v1730112345678!5m2!1sen!2sin" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        <div class="bottom">
            <div class="col-12 text-center">
                <p>Copyright © <?php echo getCurrentYear(); ?> . All Rights Reserved.</p>
            </div>
        </div>
    </div>
</footer>