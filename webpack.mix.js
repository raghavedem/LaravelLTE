const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react(['resources/js/app.js',
		   'public/admin-lte/js/adminlte.min.js'
			], 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .css(['public/admin-lte/css/AdminLTE.css',
   		  'public/admin-lte/css/skins/_all-skins.min.css']
   		  ,'public/css');
