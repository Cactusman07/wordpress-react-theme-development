<?php 
  function theme_enqueue_scripts()
  {

    $version = '1.1.0';

    wp_enqueue_script('theme-script', get_stylesheet_directory_uri() . '/dist/main.js', array('jquery'), $version, true );
    wp_enqueue_style('theme-style', get_stylesheet_directory_uri() . '/dist/main.css', array(), $version);

    $config = array(
      // Add theme variables later that are needed in react
    );

    wp_localize_script('theme', 'wp_config', $config);
  }
  
  add_action('wp_enqueue_scripts', 'theme_enqueue_scripts');

    /* Add custom post type 'Attributes' to Theme */
    function create_postTypeAttributes() {
		
      $labels = array(
        'name'					      => _x( 'Attribute', 'Post Type General Name', "New Theme"),
        'singular name'			  => _x( 'Attribute', 'Singular Name', "New Theme"),
        'menu_name'				    => __( 'Attributes', "New Theme"),
        'all_items'         	=> __( 'All Attributes', "New Theme" ),
        'view_item'         	=> __( 'View Attributes', "New Theme" ),
        'add_new_item'      	=> __( 'Add New Attribute', "New Theme" ),
        'add_new'           	=> __( 'Add Attribute', "New Theme" ),
        'edit_item'         	=> __( 'Edit Attribute', "New Theme" ),
        'update_item'       	=> __( 'Update Attributes', "New Theme" ),
        'search_items'      	=> __( 'Search for Attribute', "New Theme" ),
        'not_found'         	=> __( 'Not Found', "New Theme" ),
        'not_found_in_trash'	=> __( 'Not found in Trash', "New Theme" ),
      );
      
      $args = array(
        'label'				        => __('Attributes', "New Theme"),
        'description'		      => __('A list of Attributes.', "New Theme"),
        'labels'			        => $labels,
        'supports'			      => array( 'title' ),
        'hierarchical' 		    => true,
        'public'			        => true,
        'publicly_queryable'  => true,
        'query_var'           => true,
        'show_in_rest'        => true,
        'rest_base'           => 'attributes',
        'rest_controller_class' => 'WP_REST_Posts_Controller',
        'show_ui'			        => true,
        'show_in_menu'        => true,
        'show_in_nav_menus'   => true,
        'show_in_admin_bar'   => true,
        'menu_position'       => 5,
        'can_export'          => true,
        'has_archive'         => false,
        'exclude_from_search' => false,
        'publicly_queryable'  => true,
        'capability_type'     => 'page',
        'menu_icon'           => 'dashicons-star-filled',
      );
      register_post_type('Attributes', $args );
    }
    add_action('init', 'create_postTypeAttributes', 0 );

?>