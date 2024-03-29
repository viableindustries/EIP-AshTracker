(function(jQuery) {

  "use strict";
  
  var init_app = function () {
    
    jQuery('.element-clickable, .close-element').each(function () {
      jQuery(this).click(function () {
        console.log(jQuery(this).data('toggle'), ' was clicked');
        jQuery('#' + jQuery(this).data('toggle')).toggleClass('visible');
        jQuery('html,body').animate({scrollTop: 0}, 100);
      });
    });
    
    //jQuery('.element.not-tracked, .element.exceeded, .element.compliant').tooltip();
    
    //jQuery('.element.element-clickable.violation').hover(function () {
      //jQuery(this).tooltip('toggle');
    //});
    
    jQuery('.map-area').click(function() {
      
      // Hide the site content so that we can show the map
      jQuery(".site-content").hide();
      
      // Since we just clicked the "map-area button" we should hide it
      // and then display the info button so we can go back
      jQuery(".map-area").hide();
      
      jQuery(".info_area").show();
    });
    
    jQuery('.toggle-legend').prependTo('.leaflet-bar');
    jQuery('.toggle-legend').click(function () {
      jQuery('.site-legend').toggleClass('element-invisible');
    });


    jQuery('.info_area').click(function() {
      
      // Show the site content and hide the map
      jQuery(".site-content").show();
      
      // Since we just clicked the "map-area button" we should hide it
      // and then display the info button so we can go back
      jQuery(".map-area").show();
      
      jQuery(".info_area").hide();
    });

    jQuery('.wells').DataTable({
        searching: false,
        info: false,
        order: [[1, "desc"]]
    });
    
  };
  
  jQuery(document).ready(init_app);

})(jQuery);