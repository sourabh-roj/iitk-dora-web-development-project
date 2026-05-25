# Use the official PHP image with Apache
FROM php:8.2-apache

# Enable Apache mod_rewrite (useful for PHP routing and clean URLs)
RUN a2enmod rewrite

# Copy your website files into the default Apache public directory
COPY . /var/www/html/

# Expose port 80 (Render detects this and automatically routes web traffic to it)
EXPOSE 80