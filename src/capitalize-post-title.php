<?php

/*
Plugin Name: Capitalize Post Title
Plugin URI: https://github.com/rileysun/capitalize-post-title/
Description: Capitalize post titles with the click of a button
Version: 1.0
Author: Riley Lesser
Author URI: https://sun-sys.tk/
*/

class Capitalize {

	public static function init() {
		add_action('admin_enqueue_scripts', array(__CLASS__, 'capitalizeEnqueAdminScripts'));
		add_action('post_submitbox_misc_actions', array(__CLASS__, 'capitalizeButton'));
	}
	
	public static function capitalizeButton() {
		wp_enqueue_script('capitalize-post-title');
		echo '
			<div style="display: block; width: 92%; margin: 1% auto 4%;">
				<input type="button" id="Capitalize" class="button button-primary button-large" value="Capitalize" />
			</div>
		';
	}
	
	public static function capitalizeEnqueAdminScripts($hook) {
		if ($hook == 'post.php' || $hook == 'post-new.php') {		
			wp_register_script('capitalize-post-title', plugin_dir_url( __FILE__ ) . 'capitalize-post-title.js', array(), '1.0.0', 'all' );
		}
	}
	
}

Capitalize::init();