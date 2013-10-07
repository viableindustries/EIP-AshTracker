(function () {
  
  
  
  /**
   * Global application variables
   */
  var map_id = 'developedsimple.map-hhhs56tu';
  
  
  /**
   * Setup MapBox Functionality for use within our application
   */  
  var initialize_map = function (mapbox_map_id) {
    
    var map = L.mapbox.map('map', mapbox_map_id);
    
    return map;
  };
  
  var initialize_application = function (map_id) {
    
    // Initialize the mapping functionality
    initialize_map(map_id);
    
  };
  
  initialize_application(map_id);
  
  
})();