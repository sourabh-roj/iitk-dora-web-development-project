<?php include 'header.php'?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSR & Corporate Philanthropy - IIT Kanpur</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        :root {
            --primary-color: #003366;
            --accent-orange: #e2b347;
            --bg-light: #f8fafc;
            --secondary-blue: #4b6cb7;
            --text-dark: #1e293b;
            --text-light: #64748b;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            line-height: 1.6;
            color: var(--text-dark);
            overflow-x: hidden;
            background: #ffffff;
        }

        .container{
            max-width: 1350px;
        }

        .hero {
            position: relative;
            min-height: 80vh;
            display: flex;
            align-items: center;
            overflow: hidden;
        }

        /* Slideshow Styles */
        .hero-slideshow {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
        }

        .slide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            opacity: 0;
            transition: opacity 1s ease-in-out;
        }

        .slide.active {
            opacity: 1;
        }

        .slide:nth-child(1) {
            background-image: url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
        }

        .slide:nth-child(2) {
            background-image: url('https://t3.ftcdn.net/jpg/09/24/38/32/360_F_924383295_NsNZWyeurwexuW2Zhp67nLzHLDPAUdiI.jpg');
        }

        .slide:nth-child(3) {
            background-image: url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
        }

        .slide:nth-child(4) {
            background-image: url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
        }

        .slide:nth-child(5) {
            background-image: url('https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
        }

        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(0, 51, 102, 0.75), rgba(75, 108, 183, 0.7));
            z-index: 2;
        }

        .hero::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 30% 70%, rgba(226, 179, 71, 0.1) 0%, transparent 50%);
            z-index: 3;
        }

        .hero-content {
            position: relative;
            z-index: 4;
            animation: fadeInUp 1.2s ease-out;
        }

        .floating-elements {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: 3;
        }

        .floating-element {
            position: absolute;
            background: rgba(241, 245, 252, 0.05);
            border-radius: 50%;
            animation: float 8s ease-in-out infinite;
        }

        .floating-element:nth-child(1) { width: 80px; height: 80px; top: 20%; left: 10%; animation-delay: 0s; }
        .floating-element:nth-child(2) { width: 120px; height: 120px; top: 60%; right: 15%; animation-delay: 2s; }
        .floating-element:nth-child(3) { width: 64px; height: 64px; bottom: 30%; left: 20%; animation-delay: 4s; }
        .floating-element:nth-child(4) { width: 96px; height: 96px; top: 40%; right: 40%; animation-delay: 1s; }

        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
            50% { transform: translateY(-24px) rotate(180deg); opacity: 0.6; }
        }

        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .stats-section {
            background: linear-gradient(135deg, #ffffff 0%, var(--bg-light) 100%);
            position: relative;
        }

        .stat-card {
            background: white;
            border-radius: 16px;
            padding: 2rem 1.6rem;
            text-align: center;
            transition: all 0.3s ease;
            border: 1px solid rgba(148, 163, 184, 0.2);
            position: relative;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .stat-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
            border-color: var(--accent-orange);
        }

        /* Strategic Focus Section - Completely Redesigned */
        .strategic-section {
            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
            position: relative;
            overflow: hidden;
        }

        .strategic-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(75,108,183,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23dots)"/></svg>');
        }

        .strategic-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
            gap: 2rem;
            position: relative;
            z-index: 2;
        }

        .strategic-card {
            background: white;
            border-radius: 24px;
            overflow: hidden;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            border: 1px solid rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(10px);
        }

        .strategic-card:hover {
            transform: translateY(-12px) scale(1.02);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .strategic-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 6px;
            background: linear-gradient(90deg, var(--primary-color), var(--secondary-blue), var(--accent-orange));
            transform: scaleX(0);
            transition: transform 0.5s ease;
        }

        .strategic-card:hover::before {
            transform: scaleX(1);
        }

        .strategic-image-container {
            position: relative;
            height: 240px;
            overflow: hidden;
        }

        .strategic-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: all 0.5s ease;
        }

        .strategic-card:hover .strategic-image {
            transform: scale(1.1);
        }

        .strategic-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(0, 51, 102, 0.7), rgba(75, 108, 183, 0.5));
            opacity: 0;
            transition: opacity 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .strategic-card:hover .strategic-overlay {
            opacity: 1;
        }

        .strategic-content {
            padding: 2rem;
            position: relative;
        }

        .strategic-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--text-dark);
            margin-bottom: 1rem;
            line-height: 1.3;
        }

        .strategic-description {
            color: var(--text-light);
            font-size: 0.95rem;
            line-height: 1.6;
            margin-bottom: 1.5rem;
        }

        .strategic-btn {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-blue));
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 50px;
            font-size: 0.9rem;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0, 51, 102, 0.3);
            position: relative;
            overflow: hidden;
        }

        .strategic-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s ease;
        }

        .strategic-btn:hover::before {
            left: 100%;
        }

        .strategic-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0, 51, 102, 0.4);
        }

        .strategic-number {
            position: absolute;
            top: 1rem;
            right: 1rem;
            width: 40px;
            height: 40px;
            background: rgba(255, 255, 255, 0.9);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            color: var(--primary-color);
            font-size: 0.9rem;
            backdrop-filter: blur(10px);
        }

        .benefits-section {
            background: var(--bg-light);
            position: relative;
        }

        .benefit-card {
            background: white;
            border-radius: 16px;
            padding: 2rem 1.5rem;
            text-align: center;
            transition: all 0.3s ease;
            border: 1px solid rgba(148, 163, 184, 0.2);
            position: relative;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
            height: 100%;
        }

        .benefit-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
            border-color: var(--secondary-blue);
        }

        .benefit-number {
            width: 48px;
            height: 48px;
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-blue));
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.5rem;
            font-size: 1.2rem;
            font-weight: 700;
            color: white;
        }

        .about-section {
            background: white;
            position: relative;
        }

        .about-image {
            border-radius: 16px;
            overflow: hidden;
            position: relative;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }

        .about-image::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(0, 51, 102, 0.05), rgba(226, 179, 71, 0.05));
            z-index: 1;
        }

        .about-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
        }

        .about-image:hover img {
            transform: scale(1.02);
        }

        .companies-section {
            background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-blue) 100%);
            color: white;
            position: relative;
            overflow: hidden;
        }

        .companies-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
          
        }

        .companies-grid {
            position: relative;
            z-index: 2;
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }

        .slide-track {
            display: flex;
            width: calc(216px * 20);
            height: 140px;
            overflow: hidden;
            position: relative;
            gap: 1.5rem;
        }

        .slide-track:nth-child(odd) {
            animation: scroll-left 40s linear infinite;
        }

        .slide-track:nth-child(even) {
            animation: scroll-right 40s linear infinite;
        }

        @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-216px * 10)); }
        }

        @keyframes scroll-right {
            0% { transform: translateX(calc(-216px * 10)); }
            100% { transform: translateX(0); }
        }

        .slide-track::before,
        .slide-track::after {
            background: linear-gradient(to right, rgba(241, 245, 252, 0.1) 0%, rgba(241, 245, 252, 0) 100%);
            content: "";
            height: 140px;
            position: absolute;
            width: 200px;
            z-index: 2;
        }

        .slide-track::after {
            right: 0;
            top: 0;
            transform: rotateZ(180deg);
        }

        .slide-track::before {
            left: 0;
            top: 0;
        }

        .company-card {
            background: rgba(241, 245, 252, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(241, 245, 252, 0.2);
            border-radius: 12px;
            padding: 1.6rem 1.2rem;
            text-align: center;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            width: 216px;
            flex-shrink: 0;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .company-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(241, 245, 252, 0.2), transparent);
            transition: left 0.5s ease;
        }

        .company-card:hover::before {
            left: 100%;
        }

        .company-card:hover {
            background: rgba(241, 245, 252, 0.15);
            box-shadow: 0 12px 28px rgba(0, 0, 0, 0.2);
        }

        .company-logo {
            width: 72px;
            height: 72px;
            background: white;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 0.8rem;
            font-weight: bold;
            color: var(--primary-color);
            transition: all 0.3s ease;
        }

        .company-card:hover .company-logo {
            transform: scale(1.1);
        }

        /* Light Theme Impact Areas Section */
        .impact-section {
            background: linear-gradient(135deg, var(--bg-light) 0%, #e2e8f0 100%);
            color: var(--text-dark);
            position: relative;
        }

        .impact-bar {
            background: rgba(148, 163, 184, 0.2);
            border-radius: 8px;
            height: 12px;
            overflow: hidden;
            margin-top: 0.5rem;
        }

        .impact-fill {
            height: 100%;
            border-radius: 8px;
            transition: width 1.5s ease-out;
        }

        .impact-card {
            background: white;
            border-radius: 20px;
            padding: 2.5rem 2rem;
            text-align: center;
            border: 1px solid rgba(148, 163, 184, 0.2);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
            transition: all 0.3s ease;
        }

        .impact-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
        }

        /* Light Theme Testimonials Section */
        .testimonials-section {
            background: white;
            color: var(--text-dark);
            position: relative;
        }

        .testimonial-card {
            background: var(--bg-light);
            border-radius: 16px;
            padding: 2rem 1.5rem;
            border: 1px solid rgba(148, 163, 184, 0.2);
            transition: all 0.3s ease;
            height: 100%;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .testimonial-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
            border-color: var(--accent-orange);
        }

        .quote-mark {
            font-size: 2.5rem;
            color: var(--accent-orange);
            line-height: 1;
            margin-bottom: 1rem;
            font-family: serif;
            opacity: 0.7;
        }

        .rating-stars {
            display: flex;
            gap: 0.25rem;
            margin-top: 1rem;
            justify-content: flex-end;
        }

        .star {
            width: 16px;
            height: 16px;
            background: linear-gradient(45deg, #fbbf24, #f59e0b);
            clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
        }

        /* New Success Stories Section */
        .success-section {
            background: linear-gradient(135deg, #ffffff 0%, var(--bg-light) 100%);
            position: relative;
        }

        .success-card {
            background: white;
            border-radius: 16px;
            padding: 2rem;
            border: 1px solid rgba(148, 163, 184, 0.2);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
            transition: all 0.3s ease;
            height: 100%;
        }

        .success-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }

        .success-image {
            width: 100%;
            height: 200px;
            background: linear-gradient(135deg, var(--bg-light), #e2e8f0);
            border-radius: 12px;
            margin-bottom: 1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3rem;
            color: var(--secondary-blue);
            opacity: 0.6;
        }

        .metric-badge {
            display: inline-block;
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-blue));
            color: white;
            padding: 0.25rem 0.75rem;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 600;
            margin: 0.25rem;
        }

        /* Photo Gallery Section - New Simple Design */
        .gallery-section {
            background: linear-gradient(135deg, #ffffff 0%, var(--bg-light) 100%);
            position: relative;
        }

        .gallery-masonry {
            column-count: 1;
            column-gap: 1.5rem;
        }

        @media (min-width: 768px) {
            .gallery-masonry {
                column-count: 2;
            }
        }

        @media (min-width: 1024px) {
            .gallery-masonry {
                column-count: 3;
            }
        }

        @media (min-width: 1280px) {
            .gallery-masonry {
                column-count: 4;
            }
        }

        .gallery-item {
            break-inside: avoid;
            margin-bottom: 1.5rem;
            cursor: pointer;
            transform: scale(1);
            transition: all 0.3s ease;
        }

        .gallery-item:hover {
            transform: scale(1.05);
        }

        .gallery-card {
            position: relative;
            border-radius: 1rem;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
        }

        .gallery-card:hover {
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
        }

        .gallery-image {
            width: 100%;
            height: auto;
            object-fit: cover;
            transition: transform 0.5s ease;
        }

        .gallery-item:hover .gallery-image {
            transform: scale(1.1);
        }

        .gallery-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .gallery-item:hover .gallery-overlay {
            opacity: 1;
        }

        .gallery-content {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 1.5rem;
            color: white;
            transform: translateY(100%);
            transition: transform 0.3s ease;
        }

        .gallery-item:hover .gallery-content {
            transform: translateY(0);
        }

        .gallery-title {
            font-size: 1.125rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            line-height: 1.3;
        }

        .gallery-description {
            font-size: 0.875rem;
            opacity: 0.9;
            line-height: 1.4;
        }

        /* Lightbox Styles */
        .lightbox {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            z-index: 1000;
            display: none;
            align-items: center;
            justify-content: center;
            padding: 1rem;
        }

        .lightbox.active {
            display: flex;
        }

        .lightbox-content {
            position: relative;
            max-width: 90vw;
            max-height: 90vh;
        }

        .lightbox-image {
            max-width: 100%;
            max-height: 80vh;
            object-fit: contain;
            border-radius: 0.5rem;
        }

        .lightbox-info {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
            color: white;
            padding: 2rem;
            border-radius: 0 0 0.5rem 0.5rem;
        }

        .lightbox-title {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
        }

        .lightbox-description {
            font-size: 1rem;
            opacity: 0.9;
        }

        .lightbox-close {
            position: absolute;
            top: -3rem;
            right: 0;
            color: white;
            background: none;
            border: none;
            font-size: 2rem;
            cursor: pointer;
            transition: opacity 0.3s ease;
        }

        .lightbox-close:hover {
            opacity: 0.7;
        }

        .lightbox-nav {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(0, 0, 0, 0.3);
            color: white;
            border: none;
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            cursor: pointer;
            font-size: 1.5rem;
            transition: all 0.3s ease;
            backdrop-filter: blur(4px);
        }

        .lightbox-nav:hover {
            background: rgba(0, 0, 0, 0.7);
        }

        .lightbox-prev {
            left: 1rem;
        }

        .lightbox-next {
            right: 1rem;
        }

        .lightbox-counter {
            position: absolute;
            bottom: -3rem;
            left: 50%;
            transform: translateX(-50%);
            color: white;
            font-size: 0.875rem;
        }

        /* FAQ Section - Redesigned */
        .faq-section {
            background: white;
            position: relative;
        }

        .faq-container {
            max-width: 1300px;
            margin: 0 auto;
        }

        .faq-item {
            background: white;
            border-radius: 16px;
            margin-bottom: 1.5rem;
            border: 2px solid rgba(148, 163, 184, 0.1);
            transition: all 0.3s ease;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
            margin-bottom:20px;
        }

        .faq-item:hover {
            border-color: var(--secondary-blue);
            box-shadow: 0 8px 30px rgba(75, 108, 183, 0.1);
        }

        .faq-item.active {
            border-color: var(--primary-color);
            box-shadow: 0 8px 30px rgba(0, 51, 102, 0.15);
        }

        .faq-question {
            padding: 2rem;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-weight: 600;
            color: var(--text-dark);
            transition: all 0.3s ease;
            font-size: 1.1rem;
        }

        .faq-question:hover {
            background: linear-gradient(135deg, rgba(75, 108, 183, 0.05), rgba(0, 51, 102, 0.05));
        }

        .faq-toggle {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-blue));
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            transition: all 0.3s ease;
            flex-shrink: 0;
            margin-left: 1rem;
        }

        .faq-item.active .faq-toggle {
            transform: rotate(45deg);
            background: linear-gradient(135deg, var(--accent-orange), #d4a238);
        }

        .faq-answer {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.4s ease;
        }

        .faq-item.active .faq-answer {
            max-height: 300px;
        }

        .faq-answer-content {
            padding: 1rem 2rem 2rem;
            color: var(--text-light);
            line-height: 1.7;
            font-size: 1rem;
        }

        .reveal {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.6s ease;
        }

        .reveal.visible {
            opacity: 1;
            transform: translateY(0);
        }

        .stagger-1 { transition-delay: 0.1s; }
        .stagger-2 { transition-delay: 0.2s; }
        .stagger-3 { transition-delay: 0.3s; }
        .stagger-4 { transition-delay: 0.4s; }
        .stagger-5 { transition-delay: 0.5s; }
        .stagger-6 { transition-delay: 0.6s; }

        .btn-primary {
            background: linear-gradient(135deg, var(--accent-orange), #d4a238);
            color: white;
            padding: 0.8rem 2rem;
            border-radius: 40px;
            font-weight: 600;
            font-size: 0.9rem;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 0.4rem;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
            box-shadow: 0 2px 8px rgba(226, 179, 71, 0.3);
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(226, 179, 71, 0.4);
        }

        .btn-secondary {
            background: transparent;
            color: white;
            border: 2px solid white;
            padding: 0.8rem 2rem;
            border-radius: 40px;
            font-weight: 600;
            font-size: 0.9rem;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 0.4rem;
            transition: all 0.3s ease;
            cursor: pointer;
        }

        .btn-secondary:hover {
            background: white;
            color: var(--primary-color);
            transform: translateY(-2px);
        }

        @media (max-width: 768px) {
            .strategic-grid {
                grid-template-columns: 1fr;
                gap: 1.5rem;
            }

            .strategic-card {
                margin: 0 1rem;
            }

            .gallery-masonry {
                column-count: 1;
            }

            .companies-grid {
                gap: 1.5rem;
            }

            .slide-track {
                width: calc(216px * 20);
                height: 120px;
                gap: 1rem;
            }

            .slide-track::before,
            .slide-track::after {
                height: 120px;
                width: 150px;
            }

            .company-card {
                padding: 1.2rem 0.8rem;
                width: 180px;
            }

            .hero {
                background-attachment: scroll;
            }

            .slide {
                background-attachment: scroll;
            }

            .benefit-card, .stat-card {
                padding: 1.6rem 1.2rem;
            }

            .faq-question {
                padding: 1.5rem;
                font-size: 1rem;
            }

            .faq-answer-content {
                padding: 0 1.5rem 1.5rem;
            }
        }

        .scroll-indicator {
            position: absolute;
            bottom: 1.6rem;
            left: 50%;
            transform: translateX(-50%);
            width: 2px;
            height: 40px;
            background: rgba(241, 245, 252, 0.3);
            border-radius: 2px;
            z-index: 4;
        }

        .scroll-indicator::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 24px;
            background: white;
            border-radius: 2px;
            animation: scroll 2s infinite;
        }

        @keyframes scroll {
            0% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(16px); opacity: 0; }
        }
    </style>
</head>
<body>
    <section class="hero">
        <!-- Hero Slideshow -->
        <div class="hero-slideshow">
            <div class="slide active"></div>
            <div class="slide"></div>
            <div class="slide"></div>
            <div class="slide"></div>
            <div class="slide"></div>
        </div>

        <div class="floating-elements">
            <div class="floating-element"></div>
            <div class="floating-element"></div>
            <div class="floating-element"></div>
            <div class="floating-element"></div>
        </div>
        
        <div class="container mx-auto px-4">
            <div class="hero-content max-w-3xl">
                <h1 class="text-4xl md:text-6xl font-bold mb-5 text-white leading-tight">
                    Driving Impact Through
                    <span class="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                        CSR Excellence
                    </span>
                </h1>
                <p class="text-lg md:text-xl mb-6 text-white opacity-90 leading-relaxed max-w-2xl">
                    Partnering with IIT Kanpur to foster innovation, research, and sustainable development for a better future
                </p>
                <div class="flex flex-col sm:flex-row gap-3">
                    <a href="#benefits" class="btn-primary">
                        Explore Benefits <i class="fas fa-arrow-right"></i>
                    </a>
                    <a href="#companies" class="btn-secondary">
                        View Partners <i class="fas fa-users"></i>
                    </a>
                </div>
            </div>
        </div>
        
        <div class="scroll-indicator"></div>
    </section>

    <section class="stats-section py-16">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                <div class="stat-card reveal stagger-1">
                    <h3 class="text-3xl font-bold text-gray-800 mb-2">175+</h3>
                    <p class="text-sm text-gray-600 font-medium">CSR Initiatives</p>
                </div>
                <div class="stat-card reveal stagger-2">
                    <h3 class="text-3xl font-bold text-gray-800 mb-2">130+</h3>
                    <p class="text-sm text-gray-600 font-medium">Industry Partners</p>
                </div>
                <div class="stat-card reveal stagger-3">
                    <h3 class="text-3xl font-bold text-gray-800 mb-2">24</h3>
                    <p class="text-sm text-gray-600 font-medium">Research Hubs</p>
                </div>
                <div class="stat-card reveal stagger-4">
                    <h3 class="text-3xl font-bold text-gray-800 mb-2">2000+</h3>
                    <p class="text-sm text-gray-600 font-medium">Lives Impacted</p>
                </div>
                <div class="stat-card reveal stagger-5">
                    <h3 class="text-3xl font-bold text-gray-800 mb-2">16</h3>
                    <p class="text-sm text-gray-600 font-medium">SDGs Addressed</p>
                </div>
            </div>
        </div>
    </section>

    <section class="about-section py-16">
        <div class="container mx-auto px-4">
            <div class="grid lg:grid-cols-2 gap-10 items-center">
                <div class="reveal">
                    <div class="about-image">
                        <img src='imag/Img-2.jpg'
                             alt="IIT Kanpur Campus" class="w-full h-80 object-cover">
                    </div>
                </div>
                <div class="reveal">
                    <h2 class="text-3xl font-bold text-gray-800 mb-3">About Our CSR Initiative</h2>
                    <div class="w-20 h-1 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full mb-5"></div>
                    
                    <p class="text-base text-gray-600 mb-5 leading-relaxed">
                        At IIT Kanpur, we believe in the power of collaboration to drive meaningful change. Our Corporate 
                        Social Responsibility initiatives are designed to bridge the gap between academic excellence and 
                        societal impact.
                    </p>
                    
                    <p class="text-base text-gray-600 mb-6 leading-relaxed">
                        Through strategic partnerships with industry leaders, we focus on sustainable development, innovation 
                        in education, research advancement, and community empowerment.
                    </p>
                    <a href="#contact" class="btn-primary">
                        Learn More <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Strategic Focus Section - Completely Redesigned -->
    <section class="strategic-section py-10">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16 reveal">
                <h2 class="text-4xl font-bold text-gray-800 mb-4">Strategic Focus Areas</h2>
                <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto rounded-full mt-6"></div>
            </div>
            <div class="strategic-grid">
                <div class="strategic-card reveal stagger-1">
                    <div class="strategic-number">01</div>
                    <div class="strategic-image-container">
                        <img src="https://media.licdn.com/dms/image/v2/D5622AQGbk2OD85zSgw/feedshare-shrink_800/B56ZexduCtG0Ak-/0/1751029049820?e=2147483647&v=beta&t=oomaPxrZOYqxwsNCxyVZ7ULV3bVXdwBt4RH84g0ywZM" alt="Healthcare" class="strategic-image">
                    </div>
                    <div class="strategic-content">
                        <h3 class="strategic-title">Healthcare & Medical Research</h3>
                        <p class="strategic-description">
                            Improving healthcare and quality of life in underserved communities through research, infrastructure, and initiatives.
                        </p>
                        <a href="/catalogues/healthcare.pdf" target="_blank" class="strategic-btn">
                            View Catalogue <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>

                <div class="strategic-card reveal stagger-2">
                    <div class="strategic-number">02</div>
                    <div class="strategic-image-container">
                        <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Environment" class="strategic-image">
                        
                    </div>
                    <div class="strategic-content">
                        <h3 class="strategic-title">Environment & Sustainability</h3>
                        <p class="strategic-description">
                            Advancing green technologies, renewable energy, and conservation to fight climate change and ensure a sustainable future.
                        </p>
                        <a href="/catalogues/environment.pdf" target="_blank" class="strategic-btn">
                            View Catalogue <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>

                <div class="strategic-card reveal stagger-3">
                    <div class="strategic-number">03</div>
                    <div class="strategic-image-container">
                        <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Education" class="strategic-image">
                        
                    </div>
                    <div class="strategic-content">
                        <h3 class="strategic-title">Education & Skill Development</h3>
                        <p class="strategic-description">
                            Boosting education, digital literacy, and skill development to empower communities and bridge the digital divide.       
                        </p>
                        <a href="/catalogues/education.pdf" target="_blank" class="strategic-btn">
                            View Catalogue <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>

                <div class="strategic-card reveal stagger-4">
                    <div class="strategic-number">04</div>
                    <div class="strategic-image-container">
                        <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Research" class="strategic-image">
                       
                    </div>
                    <div class="strategic-content">
                        <h3 class="strategic-title">Research & Innovation</h3>
                        <p class="strategic-description">
                            Fostering research, innovation, and technology transfer to tackle global challenges and drive societal progress.
                        </p>
                        <a href="/catalogues/research.pdf" target="_blank" class="strategic-btn">
                            View Catalogue <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>

                <div class="strategic-card reveal stagger-5">
                    <div class="strategic-number">05</div>
                    <div class="strategic-image-container">
                        <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Community" class="strategic-image">
                       
                    </div>
                    <div class="strategic-content">
                        <h3 class="strategic-title">Community Welfare</h3>
                        <p class="strategic-description">
                            Empowering communities with social programs and inclusive development for lasting societal impact.
                        </p>
                        <a href="/catalogues/community.pdf" target="_blank" class="strategic-btn">
                            View Catalogue <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>

                <div class="strategic-card reveal stagger-6">
                    <div class="strategic-number">06</div>
                    <div class="strategic-image-container">
                        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Infrastructure" class="strategic-image">
                        
                    </div>
                    <div class="strategic-content">
                        <h3 class="strategic-title">Infrastructure Development</h3>
                        <p class="strategic-description">
                            Developing sustainable infrastructure and smart cities to enhance connectivity and create efficient, accessible communities.
                        </p>
                        <a href="/catalogues/infrastructure.pdf" target="_blank" class="strategic-btn">
                            View Catalogue <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>

<!-- UN SDG Alignment Section -->
            <div class="mt-20 reveal">
                <div class="max-w-7xl mx-auto">
                    <div class="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <blockquote class="text-2xl font-semibold text-gray-700 leading-relaxed italic border-l-4 border-blue-600 pl-6">
                                "Our key focus areas are thoughtfully aligned with the United Nations Sustainable Development Goals, reflecting our commitment to inclusive and societal impacts."
                            </blockquote>
                        </div>
                        <div class="reveal stagger-2">
                            <img src="https://uwaterloo.ca/sustainable-development-solutions-network-canada/sites/default/files/uploads/images/global-goals-full-icons.png_2318x1180_q85_crop_subsampling-2_upscale.jpg"
                                alt="UN Sustainable Development Goals"
                                class="w-full h-auto object-contain rounded-lg shadow-lg">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- BENEFITS -->
    <section id="benefits" class="benefits-section py-16">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12 reveal">
                <h2 class="text-3xl font-bold text-gray-800 mb-3">Benefits of CSR Collaboration @ IIT Kanpur</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                    Partner with us to unlock exceptional opportunities and create lasting impact
                </p>
                <div class="w-20 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto rounded-full mt-3"></div>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="benefit-card reveal stagger-1">
                    <div class="benefit-number">01</div>
                    <h3 class="text-lg font-bold text-gray-800 mb-3">Cutting Edge Research </h3>
                    <p class="text-sm text-gray-600 leading-relaxed">IIT Kanpur offers cutting edge research & development opportunities across disciplines</p>
                </div>
                <div class="benefit-card reveal stagger-2">
                    <div class="benefit-number">02</div>
                    <h3 class="text-lg font-bold text-gray-800 mb-3">100% CSR Taxation Benefits</h3>
                    <p class="text-sm text-gray-600 leading-relaxed">Partnering Corporates get 100% CSR Taxation Benefits by contributing to IIT Kanpur</p>
                </div>
                <div class="benefit-card reveal stagger-3">
                    <div class="benefit-number">03</div>
                    <h3 class="text-lg font-bold text-gray-800 mb-3">Robust Infrastructure</h3>
                    <p class="text-sm text-gray-600 leading-relaxed">IIT Kanpur campus nurtures class-leading research and academic infrastructure</p>
                </div>
                <div class="benefit-card reveal stagger-4">
                    <div class="benefit-number">04</div>
                    <h3 class="text-lg font-bold text-gray-800 mb-3"> The Brand IIT-K</h3>
                    <p class="text-sm text-gray-600 leading-relaxed">An opportunity to collaborate with an institute of Eminence, with great global equity</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Impact Areas Section -->
    <section class="impact-section py-16">
        <div class="container mx-auto px-4">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                <div class="reveal">
                    <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Our Impact Areas</h2>
                    <p class="text-lg mb-8 text-gray-600 leading-relaxed">
                        We focus our CSR efforts across key areas that drive meaningful change and sustainable development in communities.
                    </p>
                    <div class="space-y-6">
                        <div class="impact-area">
                            <div class="flex justify-between items-center mb-2">
                                <span class="font-semibold text-gray-700">Education & Skill Development</span>
                                <span class="font-bold text-gray-800">75%</span>
                            </div>
                            <div class="impact-bar">
                                <div class="impact-fill" style="width: 75%; background: linear-gradient(90deg, #3b82f6, #1d4ed8);"></div>
                            </div>
                        </div>
                        
                        <div class="impact-area">
                            <div class="flex justify-between items-center mb-2">
                                <span class="font-semibold text-gray-700">Healthcare & Wellness</span>
                                <span class="font-bold text-gray-800">75%</span>
                            </div>
                            <div class="impact-bar">
                                <div class="impact-fill" style="width: 75%; background: linear-gradient(90deg, #10b981, #047857);"></div>
                            </div>
                        </div>
                        
                        <div class="impact-area">
                            <div class="flex justify-between items-center mb-2">
                                <span class="font-semibold text-gray-700">Environmental Sustainability</span>
                                <span class="font-bold text-gray-800">80%</span>
                            </div>
                            <div class="impact-bar">
                                <div class="impact-fill" style="width: 80%; background: linear-gradient(90deg, #059669, #065f46);"></div>
                            </div>
                        </div>
                        
                        <div class="impact-area">
                            <div class="flex justify-between items-center mb-2">
                                <span class="font-semibold text-gray-700">Rural Development</span>
                                <span class="font-bold text-gray-800">60%</span>
                            </div>
                            <div class="impact-bar">
                                <div class="impact-fill" style="width: 60%; background: linear-gradient(90deg, #f59e0b, #d97706);"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="reveal">
                    <div class="impact-card">
                        <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span class="text-2xl font-bold text-white">₹</span>
                        </div>
                        <h3 class="text-2xl font-bold mb-3 text-gray-800">Total CSR Investment</h3>
                        <p class="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                            ₹550+ Crores
                        </p>
                        <p class="text-gray-600 leading-relaxed">
                            Successfully invested across various sectors including education, healthcare, environmental sustainability, and rural development initiatives
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="companies" class="companies-section py-16">
        <div class="container mx-auto px-4">
            <div class="text-center mb-10 reveal">
                <h2 class="text-3xl font-bold mb-2">Our Trusted Partners</h2>
                <div class="w-20 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full mt-3"></div>
            </div>
            <div class="companies-grid">
                <div class="slide-track">
                    <div class="company-card">
                        <div class="company-logo">TCS</div>
                        <h4 class="font-semibold text-sm">TCS</h4>
                    </div>
                    <div class="company-card">
                        <div class="company-logo">Inf</div>
                        <h4 class="font-semibold text-sm">Infosys</h4>
                    </div>
                    <div class="company-card">
                        <div class="company-logo">Wip</div>
                        <h4 class="font-semibold text-sm">Wipro</h4>
                    </div>
                    <div class="company-card">
                        <div class="company-logo">HCL</div>
                        <h4 class="font-semibold text-sm">HCL Tech</h4>
                    </div>
                    <div class="company-card">
                        <div class="company-logo">Tec</div>
                        <h4 class="font-semibold text-sm">Tech Mahindra</h4>
                    </div>
                    <div class="company-card">
                        <div class="company-logo">L&T</div>
                        <h4 class="font-semibold text-sm">L&T</h4>
                    </div>
                    <div class="company-card">
                        <div class="company-logo">Rel</div>
                        <h4 class="font-semibold text-sm">Reliance</h4>
                    </div>
                    <div class="company-card">
                        <div class="company-logo">ONG</div>
                        <h4 class="font-semibold text-sm">ONGC</h4>
                    </div>
                    <div class="company-card">
                        <div class="company-logo">ISR</div>
                        <h4 class="font-semibold text-sm">ISRO</h4>
                    </div>
                    <div class="company-card">
                        <div class="company-logo">DRD</div>
                        <h4 class="font-semibold text-sm">DRDO</h4>
                    </div>
                    <div class="company-card">
                        <div class="company-logo">TCS</div>
                        <h4 class="font-semibold text-sm">TCS</h4>
                    </div>
                    <div class="company-card">
                        <div class="company-logo">Inf</div>
                        <h4 class="font-semibold text-sm">Infosys</h4>
                    </div>
                    <div class="company-card">
                        <div class="company-logo">Wip</div>
                        <h4 class="font-semibold text-sm">Wipro</h4>
                    </div>
                    <div class="company-card">
                        <div class="company-logo">HCL</div>
                        <h4 class="font-semibold text-sm">HCL Tech</h4>
                    </div>
                    <div class="company-card">
                        <div class="company-logo">Tec</div>
                        <h4 class="font-semibold text-sm">Tech Mahindra</h4>
                    </div>
                    <div class="company-card">
                        <div class="company-logo">L&T</div>
                        <h4 class="font-semibold text-sm">L&T</h4>
                    </div>
                    <div class="company-card">
                        <div class="company-logo">Rel</div>
                        <h4 class="font-semibold text-sm">Reliance</h4>
                    </div>
                    <div class="company-card">
                        <div class="company-logo">ONG</div>
                        <h4 class="font-semibold text-sm">ONGC</h4>
                    </div>
                    <div class="company-card">
                        <div class="company-logo">ISR</div>
                        <h4 class="font-semibold text-sm">ISRO</h4>
                    </div>
                    <div class="company-card">
                        <div class="company-logo">DRD</div>
                        <h4 class="font-semibold text-sm">DRDO</h4>
                    </div>
                </div>
                <div class="slide-track">
                     <div class="company-card">
                        <div class="company-logo">SBI</div>
                        <h4 class="font-semibold text-sm">SBI</h4>
                    </div>
                    <div class="company-card">
                        <div class="company-logo">Axis</div>
                        <h4 class="font-semibold text-sm">Axis Bank</h4>
                    </div>
                    <div class="company-card">
                        <div class="company-logo">HDFC</div>
                        <h4 class="font-semibold text-sm">HDFC Bank</h4>
                    </div>
                    <div class="company-card">
                        <div class="company-logo">P&G</div>
                        <h4 class="font-semibold text-sm">P&G</h4>
                    </div>
                    <div class="company-card">
                        <div class="company-logo">HUL</div>
                        <h4 class="font-semibold text-sm">HUL</h4>
                    </div>
                    <div class="company-card">
                        <div class="company-logo">Tata</div>
                        <h4 class="font-semibold text-sm">Tata Motors</h4>
                    </div>
                    <div class="company-card">
                        <div class="company-logo">Mah</div>
                        <h4 class="font-semibold text-sm">Mahindra</h4>
                    </div>
                    <div class="company-card">
                        <div class="company-logo">Adn</div>
                        <h4 class="font-semibold text-sm">Adani Group</h4>
                    </div>
                    <div class="company-card">
                        <div class="company-logo">Bir</div>
                        <h4 class="font-semibold text-sm">Birla Group</h4>
                    </div>
                    <div class="company-card">
                        <div class="company-logo">Airt</div>
                        <h4 class="font-semibold text-sm">Airtel</h4>
                    </div>
                    <div class="company-card">
                        <div class="company-logo">SBI</div>
                        <h4 class="font-semibold text-sm">SBI</h4>
                    </div>
                    <div class="company-card">
                        <div class="company-logo">Axis</div>
                        <h4 class="font-semibold text-sm">Axis Bank</h4>
                    </div>
                    <div class="company-card">
                        <div class="company-logo">HDFC</div>
                        <h4 class="font-semibold text-sm">HDFC Bank</h4>
                    </div>
                    <div class="company-card">
                        <div class="company-logo">P&G</div>
                        <h4 class="font-semibold text-sm">P&G</h4>
                    </div>
                    <div class="company-card">
                        <div class="company-logo">HUL</div>
                        <h4 class="font-semibold text-sm">HUL</h4>
                    </div>
                    <div class="company-card">
                        <div class="company-logo">Tata</div>
                        <h4 class="font-semibold text-sm">Tata Motors</h4>
                    </div>
                    <div class="company-card">
                        <div class="company-logo">Mah</div>
                        <h4 class="font-semibold text-sm">Mahindra</h4>
                    </div>
                    <div class="company-card">
                        <div class="company-logo">Adn</div>
                        <h4 class="font-semibold text-sm">Adani Group</h4>
                    </div>
                    <div class="company-card">
                        <div class="company-logo">Bir</div>
                        <h4 class="font-semibold text-sm">Birla Group</h4>
                    </div>
                    <div class="company-card">
                        <div class="company-logo">Airt</div>
                        <h4 class="font-semibold text-sm">Airtel</h4>
                    </div>
                </div>
                <div class="text-center mt-10 reveal">
                <a href="#partnership" class="btn-secondary">
                    View all partners<i class="fas fa-handshake"></i>
                </a>
            </div>
            </div>
        </div>
    </section>

    <section class="testimonials-section py-16">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12 reveal">
                <h2 class="text-3xl font-bold text-gray-800 mb-3">What Our Partners Say</h2>
                <div class="w-20 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto rounded-full mt-3"></div>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="testimonial-card reveal stagger-1">
                    <p class="quote-mark">"</p>
                    <p class="text-gray-700 leading-relaxed mb-4">
                        "Partnering with IIT Kanpur has been a game-changer for our CSR efforts. Their expertise and dedication to social impact are truly inspiring. We've seen tangible results in the communities we've touched."
                    </p>
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="font-bold text-gray-800">Ms. Anjali Sharma</p>
                            <p class="text-sm text-gray-500">Head of CSR, TechCorp Solutions</p>
                        </div>
                        <div class="rating-stars">
                            <div class="star"></div>
                            <div class="star"></div>
                            <div class="star"></div>
                            <div class="star"></div>
                            <div class="star"></div>
                        </div>
                    </div>
                </div>
                <div class="testimonial-card reveal stagger-2">
                    <p class="quote-mark">"</p>
                    <p class="text-gray-700 leading-relaxed mb-4">
                        "The collaboration with IIT Kanpur allowed us to invest in cutting-edge research that directly benefits society. Their transparent and efficient execution makes them an ideal partner for corporate philanthropy."
                    </p>
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="font-bold text-gray-800">Mr. Rajesh Gupta</p>
                            <p class="text-sm text-gray-500">Director, Green Future Foundation</p>
                        </div>
                        <div class="rating-stars">
                            <div class="star"></div>
                            <div class="star"></div>
                            <div class="star"></div>
                            <div class="star"></div>
                            <div class="star"></div>
                        </div>
                    </div>
                </div>
                <div class="testimonial-card reveal stagger-3">
                    <p class="quote-mark">"</p>
                    <p class="text-gray-700 leading-relaxed mb-4">
                        "IIT Kanpur's commitment to education and skill development aligns perfectly with our vision. Their well-structured programs ensure that our contributions are utilized effectively for maximum reach and impact."
                    </p>
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="font-bold text-gray-800">Dr. Priya Singh</p>
                            <p class="text-sm text-gray-500">CEO, InnovateEDU</p>
                        </div>
                        <div class="rating-stars">
                            <div class="star"></div>
                            <div class="star"></div>
                            <div class="star"></div>
                            <div class="star"></div>
                            <div class="star"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="success-section py-16">
    <div class="container mx-auto px-4">
        <div class="text-center mb-12 reveal">
            <h2 class="text-3xl font-bold text-gray-800 mb-3">Our Success Stories</h2>
            <p class="text-lg text-gray-600 max-w-4xl mx-auto">
                Highlighting key projects and the positive outcomes achieved through our CSR partnerships.
            </p>
            <div class="w-20 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto rounded-full mt-3"></div>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="success-card reveal stagger-1">
                <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                     alt="Advanced Materials Research" 
                     class="w-full h-48 object-cover rounded-lg mb-4">
                <h3 class="text-xl font-bold text-gray-800 mb-3">Advanced Materials Research Center</h3>
                <p class="text-base text-gray-700 mb-4 leading-relaxed">
                    Funded by XYZ Corp, this center has led to breakthroughs in sustainable materials, reducing environmental impact and fostering new industries.
                </p>
                <div class="flex flex-wrap gap-2 justify-center">
                    <span class="metric-badge">Innovation</span>
                    <span class="metric-badge">Sustainability</span>
                    <span class="metric-badge">20+ Patents</span>
                </div>
            </div>
            <div class="success-card reveal stagger-2">
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                     alt="Rural Digital Literacy" 
                     class="w-full h-48 object-cover rounded-lg mb-4">
                <h3 class="text-xl font-bold text-gray-800 mb-3">Rural Digital Literacy Program</h3>
                <p class="text-base text-gray-700 mb-4 leading-relaxed">
                    A partnership with ABC Foundation brought digital literacy to 15 rural villages, empowering over 500 individuals with essential computer skills.
                </p>
                <div class="flex flex-wrap gap-2 justify-center">
                    <span class="metric-badge">Community Empowerment</span>
                    <span class="metric-badge">Digital Inclusion</span>
                    <span class="metric-badge">500+ Beneficiaries</span>
                </div>
            </div>
            <div class="success-card reveal stagger-3">
                <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                     alt="Clean Water Initiative" 
                     class="w-full h-48 object-cover rounded-lg mb-4">
                <h3 class="text-xl font-bold text-gray-800 mb-3">Clean Water Initiative</h3>
                <p class="text-base text-gray-700 mb-4 leading-relaxed">
                    Supported by WaterPure Inc., this project implemented advanced water purification systems, providing clean drinking water to over 10,000 people.
                </p>
                <div class="flex flex-wrap gap-2 justify-center">
                    <span class="metric-badge">Public Health</span>
                    <span class="metric-badge">Environmental Impact</span>
                    <span class="metric-badge">10,000+ Lives</span>
                </div>
            </div>
        </div>
    </div>
</section>

    <!-- Photo Gallery Section - New Simple Design -->
    <section class="gallery-section py-20">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Photo Gallery</h2>
                <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto rounded-full mb-6"></div>
            </div>

            <!-- Simple Masonry Gallery -->
            <div class="max-w-7xl mx-auto">
                <div class="gallery-masonry">
                    <div class="gallery-item" onclick="openLightbox(0)">
                        <div class="gallery-card">
                            <img src="https://www.iitk.ac.in/dora/imag/news/influential.jpg" alt="Digital Education Program" class="gallery-image">
                            <div class="gallery-overlay"></div>
                            <div class="gallery-content">
                                <h4 class="gallery-title">Digital Education Program</h4>
                                <p class="gallery-description">Empowering rural students with technology and digital literacy skills for a brighter future</p>
                            </div>
                        </div>
                    </div>

                    <div class="gallery-item" onclick="openLightbox(1)">
                        <div class="gallery-card">
                            <img src="https://media.licdn.com/dms/image/v2/D5622AQGbk2OD85zSgw/feedshare-shrink_800/B56ZexduCtG0Ak-/0/1751029049820?e=2147483647&v=beta&t=oomaPxrZOYqxwsNCxyVZ7ULV3bVXdwBt4RH84g0ywZM" alt="Healthcare Outreach" class="gallery-image">
                            <div class="gallery-overlay"></div>
                            <div class="gallery-content">
                                <h4 class="gallery-title">Healthcare Outreach</h4>
                                <p class="gallery-description">Mobile health camps bringing medical care to underserved communities</p>
                            </div>
                        </div>
                    </div>

                    <div class="gallery-item" onclick="openLightbox(2)">
                        <div class="gallery-card">
                            <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Green Initiative" class="gallery-image">
                            <div class="gallery-overlay"></div>
                            <div class="gallery-content">
                                <h4 class="gallery-title">Green Initiative</h4>
                                <p class="gallery-description">Environmental conservation and tree plantation drives</p>
                            </div>
                        </div>
                    </div>

                    <div class="gallery-item" onclick="openLightbox(3)">
                        <div class="gallery-card">
                            <img src="https://www.iitk.ac.in/dora/imag/news/concation-25.jpg" alt="Research Excellence" class="gallery-image">
                            <div class="gallery-overlay"></div>
                            <div class="gallery-content">
                                <h4 class="gallery-title">Research Excellence</h4>
                                <p class="gallery-description">State-of-the-art research facilities driving innovation</p>
                            </div>
                        </div>
                    </div>

                    <div class="gallery-item" onclick="openLightbox(4)">
                        <div class="gallery-card">
                            <img src="https://media.licdn.com/dms/image/v2/D5622AQHsrkJQu1tpZA/feedshare-shrink_800/B56Zeli8PbHEAg-/0/1750829107790?e=2147483647&v=beta&t=9XPkSTiIhM59tliYUddj4wICxbjENbIvwjwBwfjfXIE" alt="Skill Development" class="gallery-image">
                            <div class="gallery-overlay"></div>
                            <div class="gallery-content">
                                <h4 class="gallery-title">Skill Development</h4>
                                <p class="gallery-description">Community workshops building practical skills and livelihoods</p>
                            </div>
                        </div>
                    </div>

                    <div class="gallery-item" onclick="openLightbox(5)">
                        <div class="gallery-card">
                            <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Smart Infrastructure" class="gallery-image">
                            <div class="gallery-overlay"></div>
                            <div class="gallery-content">
                                <h4 class="gallery-title">Smart Infrastructure</h4>
                                <p class="gallery-description">Modern infrastructure development for sustainable communities</p>
                            </div>
                        </div>
                    </div>

                    <div class="gallery-item" onclick="openLightbox(6)">
                        <div class="gallery-card">
                            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Student Innovation Lab" class="gallery-image">
                            <div class="gallery-overlay"></div>
                            <div class="gallery-content">
                                <h4 class="gallery-title">Student Innovation Lab</h4>
                                <p class="gallery-description">Cutting-edge technology labs fostering student innovation</p>
                            </div>
                        </div>
                    </div>

                    <div class="gallery-item" onclick="openLightbox(7)">
                        <div class="gallery-card">
                            <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Community Outreach" class="gallery-image">
                            <div class="gallery-overlay"></div>
                            <div class="gallery-content">
                                <h4 class="gallery-title">Community Outreach</h4>
                                <p class="gallery-description">Engaging with local communities for sustainable development</p>
                            </div>
                        </div>
                    </div>

                    <div class="gallery-item" onclick="openLightbox(8)">
                        <div class="gallery-card">
                            <img src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Library & Learning Center" class="gallery-image">
                            <div class="gallery-overlay"></div>
                            <div class="gallery-content">
                                <h4 class="gallery-title">Library & Learning Center</h4>
                                <p class="gallery-description">Modern learning spaces equipped with latest technology</p>
                            </div>
                        </div>
                    </div>

                    <div class="gallery-item" onclick="openLightbox(9)">
                        <div class="gallery-card">
                            <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Innovation Workshop" class="gallery-image">
                            <div class="gallery-overlay"></div>
                            <div class="gallery-content">
                                <h4 class="gallery-title">Innovation Workshop</h4>
                                <p class="gallery-description">Hands-on workshops driving technological innovation</p>
                            </div>
                        </div>
                    </div>

                    <div class="gallery-item" onclick="openLightbox(10)">
                        <div class="gallery-card">
                            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Technology Conference" class="gallery-image">
                            <div class="gallery-overlay"></div>
                            <div class="gallery-content">
                                <h4 class="gallery-title">Technology Conference</h4>
                                <p class="gallery-description">Annual conferences bringing together industry experts</p>
                            </div>
                        </div>
                    </div>

                    <div class="gallery-item" onclick="openLightbox(11)">
                        <div class="gallery-card">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Campus Sustainability" class="gallery-image">
                            <div class="gallery-overlay"></div>
                            <div class="gallery-content">
                                <h4 class="gallery-title">Campus Sustainability</h4>
                                <p class="gallery-description">Green campus initiatives promoting environmental awareness</p>
                            </div>
                        </div>
                    </div>

                    <div class="gallery-item" onclick="openLightbox(12)">
                        <div class="gallery-card">
                            <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Science Laboratory" class="gallery-image">
                            <div class="gallery-overlay"></div>
                            <div class="gallery-content">
                                <h4 class="gallery-title">Science Laboratory</h4>
                                <p class="gallery-description">State-of-the-art laboratories for scientific research</p>
                            </div>
                        </div>
                    </div>

                    <div class="gallery-item" onclick="openLightbox(13)">
                        <div class="gallery-card">
                            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Student Collaboration" class="gallery-image">
                            <div class="gallery-overlay"></div>
                            <div class="gallery-content">
                                <h4 class="gallery-title">Student Collaboration</h4>
                                <p class="gallery-description">Collaborative spaces fostering teamwork and innovation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Simple Lightbox Modal -->
        <div id="lightbox" class="lightbox">
            <div class="lightbox-content">
                <button class="lightbox-close" onclick="closeLightbox()">&times;</button>
                <button class="lightbox-nav lightbox-prev" onclick="prevImage()">&#8249;</button>
                <button class="lightbox-nav lightbox-next" onclick="nextImage()">&#8250;</button>
                <img id="lightbox-image" class="lightbox-image" src="/placeholder.svg" alt="">
                <div class="lightbox-info">
                    <h3 id="lightbox-title" class="lightbox-title"></h3>
                    <p id="lightbox-description" class="lightbox-description"></p>
                </div>
                <div id="lightbox-counter" class="lightbox-counter"></div>
            </div>
        </div>
    </section>

    <!-- FAQ Section - Redesigned -->
    <section class="faq-section py-10">
        <div class="container mx-auto px-4">
            <div class="text-center mb-8 reveal">
                <h2 class="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
                <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto rounded-full "></div>
            </div>
            <div class="faq-container">
                <div class="faq-item reveal stagger-1">
                    <div class="faq-question" onclick="toggleFAQ(this)">
                        <span>What are the minimum CSR contribution requirements for partnering with IIT Kanpur?</span>
                        <div class="faq-toggle">+</div>
                    </div>
                    <div class="faq-answer">
                        <div class="faq-answer-content">
                            There is no fixed minimum contribution requirement. We work with partners of all sizes to create meaningful impact. Our team will help you design CSR initiatives that align with your budget and objectives while maximizing social benefit.
                        </div>
                    </div>
                </div>

                <div class="faq-item reveal stagger-2">
                    <div class="faq-question" onclick="toggleFAQ(this)">
                        <span>How does IIT Kanpur ensure transparency in CSR fund utilization?</span>
                        <div class="faq-toggle">+</div>
                    </div>
                    <div class="faq-answer">
                        <div class="faq-answer-content">
                            We maintain complete transparency through regular progress reports, financial audits, and impact assessments. Partners receive detailed quarterly reports with measurable outcomes, photographs, and testimonials from beneficiaries.
                        </div>
                    </div>
                </div>

                <div class="faq-item reveal stagger-3">
                    <div class="faq-question" onclick="toggleFAQ(this)">
                        <span>What tax benefits can companies expect from CSR contributions to IIT Kanpur?</span>
                        <div class="faq-toggle">+</div>
                    </div>
                    <div class="faq-answer">
                        <div class="faq-answer-content">
                            Companies can claim 100% tax deduction under Section 80G of the Income Tax Act. As a recognized educational institution, IIT Kanpur provides eligible tax certificates for all CSR contributions, ensuring maximum tax benefits for corporate partners.
                        </div>
                    </div>
                </div>

                <div class="faq-item reveal stagger-4">
                    <div class="faq-question" onclick="toggleFAQ(this)">
                        <span>Can companies choose specific areas or projects for their CSR contributions?</span>
                        <div class="faq-toggle">+</div>
                    </div>
                    <div class="faq-answer">
                        <div class="faq-answer-content">
                            We offer flexible CSR partnerships where companies can select from our six strategic focus areas: Healthcare, Environment & Sustainability, Education, Research & Innovation, Community Welfare, and Infrastructure. Custom projects can also be designed based on your company's CSR priorities.
                        </div>
                    </div>
                </div>

                <div class="faq-item reveal stagger-5">
                    <div class="faq-question" onclick="toggleFAQ(this)">
                        <span>How long does it typically take to see measurable impact from CSR initiatives?</span>
                        <div class="faq-toggle">+</div>
                    </div>
                    <div class="faq-answer">
                        <div class="faq-answer-content">
                            Impact timelines vary by project type. Short-term initiatives like skill development programs show results within 3-6 months, while research and infrastructure projects may take 1-3 years. We provide milestone-based reporting to track progress throughout the project lifecycle.
                        </div>
                    </div>
                </div>

                <div class="faq-item reveal stagger-6">
                    <div class="faq-question" onclick="toggleFAQ(this)">
                        <span>Does IIT Kanpur provide employee engagement opportunities for corporate partners?</span>
                        <div class="faq-toggle">+</div>
                    </div>
                    <div class="faq-answer">
                        <div class="faq-answer-content">
                            Yes! We offer various employee engagement programs including volunteering opportunities, mentorship programs, guest lectures, and hands-on participation in community initiatives. This helps companies build stronger employee engagement while contributing to social causes.
                        </div>
                    </div>
                </div>

                <div class="faq-item reveal">
                    <div class="faq-question" onclick="toggleFAQ(this)">
                        <span>What recognition and branding opportunities are available for CSR partners?</span>
                        <div class="faq-toggle">+</div>
                    </div>
                    <div class="faq-answer">
                        <div class="faq-answer-content">
                            Partners receive appropriate recognition through naming rights for facilities, inclusion in annual reports, website features, press releases, and participation in award ceremonies. The level of recognition is commensurate with the contribution and impact created.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section  -->
    <section class="py-9 bg-blue-50">
        <div class="container mx-auto px-4">
            <div class="max-w-6xl mx-auto">
                <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-7">
                    <div class="grid md:grid-cols-3 gap-8 items-center">
                        <!-- Title -->
                        <div class="md:col-span-1">
                            <h3 class="text-2xl font-bold text-gray-800">Get in Touch</h3>
                            <p class="text-base text-gray-600 mt-1">Ready to partner with us?</p>
                        </div>
                        <!-- Email -->
                        <div class="flex items-center gap-4">
                            <i class="fas fa-envelope w-6 h-6 text-blue-600 flex-shrink-0 text-2xl"></i>
                            <div>
                                <p class="text-base font-medium text-gray-700">Email</p>
                                <a href="mailto:csr@iitk.ac.in" class="text-blue-600 hover:underline text-base">
                                    csr@iitk.ac.in
                                </a>
                            </div>
                        </div>
                        <!-- Phone -->
                        <div class="flex items-center gap-4">
                            <i class="fas fa-phone w-6 h-6 text-blue-600 flex-shrink-0 text-2xl"></i>
                            <div>
                                <p class="text-base font-medium text-gray-700">Phone</p>
                                <a href="tel:+915122597000" class="text-blue-600 hover:underline text-base">
                                    +91-512-259-7000
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <?php include 'footer.php'?>

    <script>
        // Hero Slideshow
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        }

        // Auto-advance slideshow every 2 seconds
        setInterval(nextSlide, 2000);

        // Gallery data
        const galleryItems = [
            {
                src: "https://www.iitk.ac.in/dora/imag/news/influential.jpg",
                title: "Digital Education Program",
                description: "Empowering rural students with technology and digital literacy skills for a brighter future"
            },
            {
                src: "https://media.licdn.com/dms/image/v2/D5622AQGbk2OD85zSgw/feedshare-shrink_800/B56ZexduCtG0Ak-/0/1751029049820?e=2147483647&v=beta&t=oomaPxrZOYqxwsNCxyVZ7ULV3bVXdwBt4RH84g0ywZM",
                title: "Healthcare Outreach",
                description: "Mobile health camps bringing medical care to underserved communities"
            },
            {
                src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                title: "Green Initiative",
                description: "Environmental conservation and tree plantation drives"
            },
            {
                src: "https://www.iitk.ac.in/dora/imag/news/concation-25.jpg",
                title: "Research Excellence",
                description: "State-of-the-art research facilities driving innovation"
            },
            {
                src: "https://media.licdn.com/dms/image/v2/D5622AQHsrkJQu1tpZA/feedshare-shrink_800/B56Zeli8PbHEAg-/0/1750829107790?e=2147483647&v=beta&t=9XPkSTiIhM59tliYUddj4wICxbjENbIvwjwBwfjfXIE",
                title: "Skill Development",
                description: "Community workshops building practical skills and livelihoods"
            },
            {
                src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                title: "Smart Infrastructure",
                description: "Modern infrastructure development for sustainable communities"
            },
            {
                src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                title: "Student Innovation Lab",
                description: "Cutting-edge technology labs fostering student innovation"
            },
            {
                src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                title: "Community Outreach",
                description: "Engaging with local communities for sustainable development"
            },
            {
                src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                title: "Library & Learning Center",
                description: "Modern learning spaces equipped with latest technology"
            },
            {
                src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                title: "Innovation Workshop",
                description: "Hands-on workshops driving technological innovation"
            },
            {
                src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                title: "Technology Conference",
                description: "Annual conferences bringing together industry experts"
            },
            {
                src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                title: "Campus Sustainability",
                description: "Green campus initiatives promoting environmental awareness"
            },
            {
                src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                title: "Science Laboratory",
                description: "State-of-the-art laboratories for scientific research"
            },
            {
                src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                title: "Student Collaboration",
                description: "Collaborative spaces fostering teamwork and innovation"
            }
        ];

        let currentImageIndex = 0;

        // Lightbox functions
        function openLightbox(index) {
            currentImageIndex = index;
            const lightbox = document.getElementById('lightbox');
            const image = document.getElementById('lightbox-image');
            const title = document.getElementById('lightbox-title');
            const description = document.getElementById('lightbox-description');
            const counter = document.getElementById('lightbox-counter');

            image.src = galleryItems[index].src;
            image.alt = galleryItems[index].title;
            title.textContent = galleryItems[index].title;
            description.textContent = galleryItems[index].description;
            counter.textContent = `${index + 1} / ${galleryItems.length}`;

            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            const lightbox = document.getElementById('lightbox');
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        function nextImage() {
            currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
            openLightbox(currentImageIndex);
        }

        function prevImage() {
            currentImageIndex = currentImageIndex === 0 ? galleryItems.length - 1 : currentImageIndex - 1;
            openLightbox(currentImageIndex);
        }

        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            const lightbox = document.getElementById('lightbox');
            if (lightbox.classList.contains('active')) {
                if (e.key === 'Escape') closeLightbox();
                if (e.key === 'ArrowRight') nextImage();
                if (e.key === 'ArrowLeft') prevImage();
            }
        });

        // Close lightbox when clicking outside image
        document.getElementById('lightbox').addEventListener('click', function(e) {
            if (e.target === this) {
                closeLightbox();
            }
        });

        // Reveal animation observer
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(element => {
                observer.observe(element);
            });
        });

        // FAQ toggle function
        function toggleFAQ(element) {
            const faqItem = element.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                faqItem.classList.add('active');
            }
        }
    </script>
</body>
</html>