<?php 
  function theme_enqueue_scripts()
  {

    $version = '1.1.0';

    wp_enqueue_script('theme-script', get_stylesheet_directory_uri() . '/dist/main.js', array('jquery'), $version, true );
    wp_enqueue_style('theme-style', get_stylesheet_directory_uri() . '/dist/style.bundle.css', array(), $version);

    $config = array(
      // Add theme variables later that are needed in react
    );

    wp_localize_script('theme', 'wp_config', $config);
  }
  
  add_action('wp_enqueue_scripts', 'theme_enqueue_scripts');

?>