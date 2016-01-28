<?php
function kamfree_process_html(&$variables) {
  // The JavaScript file to load.
  $js = 'http://html5shim.googlecode.com/svn/trunk/html5.js';

  // Compile the necessary HTML code.
  $output = "\n";
  $output .= "<!--[if lt IE 9]>\n";
  $output .= "<script src=\"{$js}\"></script>\n";
  $output .= "<![endif]-->\n";

  // Add the code after the other scripts.
  $variables['scripts'] .= $output;
  $variables['head_scripts'] = drupal_get_js('head_scripts');
}
function kamfree_preprocess_html(&$variables) {	
  // Задаём JS-скрипты, которые останутся в head страницы.
  // Обратите внимание: эти скрипты должны работать БЕЗ библиотеки jQuery,
  // так как, из-за переноса всех скриптов в конец файла html.tpl.php, она будет вызвана позже.
  /*drupal_add_js('/sites/all/THEME_NAME/js/script-1.js', array('scope' => 'head_scripts', 'weight' => -1, 'preprocess' => FALSE));
  drupal_add_js('/sites/all/THEME_NAME/js/script-2.js', array('scope' => 'head_scripts', 'weight' => -1, 'preprocess' => FALSE));*/
}