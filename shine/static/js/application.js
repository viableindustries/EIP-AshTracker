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

    latitude = d3.select('#map').attr('data-latitude');
    longitude = d3.select('#map').attr('data-longitude');
    
    if (latitude && longitude) {
      map.setView([latitude, longitude], 13);    
    }
                
    return map;
  };
  
  var initialize_application = function (map_id) {
    
    // Initialize the mapping functionality
    initialize_map(map_id);
        
  };  
  
  initialize_application(map_id);
  
})();