(function () {
  
  'use strict';
  
  var map;

  /**
   * Initialize the search utility
   */
  var init_search = function () {    
    jQuery('body').toggleClass('searchtools-enabled')
  };


  /**
   * Initialize the application
   */
  var init_app = function () {
        
    // Enable users to show/hide the search tools that appear on
    // the left side of the application
    jQuery('#search_activate').click(init_search);
        
  };
  

  /**
   * Once the document is ready and jQuery is loaded, start
   * the application by running the initialization function
   */
  jQuery(document).ready(init_app);

})();