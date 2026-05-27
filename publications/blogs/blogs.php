<?php include 'header.php'?>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IITK Blog</title>
    <link rel="stylesheet" href="../../assets/CSS/blog.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>

    <section id="recent-post-section">
        <div class="recent-post-container"></div>
    </section>

    <div class="main-content">
        <aside class="sticky-sidebar">
            <h3>Blog Categories</h3>
            <hr>
            <ul>
                <li><a href="#" data-category="all" class="sidebar-link active">All</a></li>
                <li><a href="#" data-category="alumni-interview" class="sidebar-link">Alumni Interview</a></li>
                <li><a href="#" data-category="offbeat" class="sidebar-link">Offbeat</a></li>
                <li><a href="#" data-category="giving-back" class="sidebar-link">Giving Back</a></li>
                <li><a href="#" data-category="mental-wellbeing" class="sidebar-link">Mental Well-being & Covid-19</a></li>
                <li><a href="#" data-category="in-leisure-time" class="sidebar-link">In Leisure Time</a></li>
                <li><a href="#" data-category="inspiration" class="sidebar-link">Inspiration</a></li>
                <li><a href="#" data-category="student-diary" class="sidebar-link">Student Diary</a></li>
                <li><a href="#" data-category="distinguished-alumni" class="sidebar-link">Distinguished Alumni Interviews</a></li>
                <li><a href="#" data-category="travelogue" class="sidebar-link">Travelogue</a></li>
                <li><a href="#" data-category="destiny-her-own" class="sidebar-link">Destiny of Her Own</a></li>
                <li><a href="#" data-category="memories" class="sidebar-link">Memories</a></li>
            </ul>
        </aside>

        <section class="blog-posts"></section>
    </div>

<script src="blog.js"></script>
<?php include 'blog_footer.php'?>