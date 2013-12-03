(function(jQuery) {

  "use strict";
  
  var init_app = function () {
    
    jQuery('.element, .close-element').each(function () {
      jQuery(this).click(function () {
        console.log(jQuery(this).data('toggle'), ' was clicked');
        jQuery('#' + jQuery(this).data('toggle')).toggleClass('visible');
        jQuery('html,body').animate({scrollTop: 0}, 100);
      });
    });
    
  };
  
  jQuery(document).ready(init_app);

})(jQuery);