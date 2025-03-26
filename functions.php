<?php
// Enqueue styles and scripts
function ictng_scripts() {
    // Bootstrap CSS
    wp_enqueue_style('bootstrap', 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css');
    
    // Theme stylesheet
    wp_enqueue_style('ictng-style', get_stylesheet_uri());
    
    // jQuery and Bootstrap JS
    wp_enqueue_script('jquery');
    wp_enqueue_script('bootstrap-js', 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js');
    
    // Custom JS
    wp_enqueue_script('ictng-script', get_template_directory_uri() . '/assets/js/main.js');
}
add_action('wp_enqueue_scripts', 'ictng_scripts');

// Theme setup
function ictng_setup() {
    // Register menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'ictng'),
        'footer' => __('Footer Menu', 'ictng')
    ));
    
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('comment-list', 'comment-form', 'search-form', 'gallery', 'caption'));
}
add_action('after_setup_theme', 'ictng_setup');

// Custom Post Types
require get_template_directory() . '/inc/custom-post-types.php';
?>