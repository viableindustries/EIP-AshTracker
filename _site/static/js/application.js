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
    
    jQuery('.element.not-tracked, .element.exceeded').tooltip();
    
    jQuery('.element.element-clickable.violation').hover(function () {
      jQuery(this).tooltip('toggle');
    });
    
  };
  
  jQuery(document).ready(init_app);

})(jQuery);