<?php include '../header.php'; ?>


<div class="latest">
    <a href="newsletter.php">&lt;&lt; View Latest Newsletter</a>
</div>

<div class="newsletter-archive-container">
    <div class="newsletter-heading-section">
        <h1 class="newsletter-main-heading">DoRA Newsletter</h1>
        <div class="newsletter-heading-underline"></div>
        <p class="newsletter-heading-desc">
            DoRA Newsletter brings you information about our alumni's recent awards and achievements in their respective fields.
        </p>
    </div>
    <div class="newsletter-card-grid">
        <?php
        // Edition data (1 to 12)
        for ($i = 1; $i <= 12; $i++) {
            $img = "https://www.iitk.ac.in/dora/imag/bt-img/Alumni-Newsletter-$i.jpg";
            // Fix for Edition 1's image name
            if ($i == 1) $img = "https://www.iitk.ac.in/dora/imag/bt-img/Alumni%20Newsletter%201.jpg";
            $link = "https://iitk.ac.in/dora/wp/edition$i/";
            echo '
            <a class="newsletter-card" href="' . $link . '" target="_blank" rel="noopener">
                <img src="' . $img . '" alt="Edition ' . $i . ' Cover">
                <div class="newsletter-card-title">Edition ' . $i . '</div>
            </a>
            ';
        }
        ?>
    </div>
</div>
<?php include '../footer.php'; ?>
