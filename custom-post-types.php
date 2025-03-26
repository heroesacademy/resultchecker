<?php
// Events Post Type
function ictng_register_event_post_type() {
    $labels = array(
        'name' => __('Events', 'ictng'),
        'singular_name' => __('Event', 'ictng')
    );
    
    $args = array(
        'labels' => $labels,
        'public' => true,
        'has_archive' => true,
        'rewrite' => array('slug' => 'events'),
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-calendar'
    );
    
    register_post_type('event', $args);
}
add_action('init', 'ictng_register_event_post_type');

// Members Post Type
function ictng_register_member_post_type() {
    $labels = array(
        'name' => __('Members', 'ictng'),
        'singular_name' => __('Member', 'ictng')
    );
    
    $args = array(
        'labels' => $labels,
        'public' => true,
        'has_archive' => true,
        'rewrite' => array('slug' => 'members'),
        'supports' => array('title', 'editor', 'thumbnail'),
        'menu_icon' => 'dashicons-groups'
    );
    
    register_post_type('member', $args);
}
add_action('init', 'ictng_register_member_post_type');
?>