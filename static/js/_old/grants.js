function GrantsViewController($scope, $http) {
  
  console.log('Grants Controller Started')

  $http({cache: true, method: 'GET', url: 'http://127.0.0.1:5000/api/grants/?limit=1200'}).success(function (data, status, headers, config) {

    $scope.grants = data;
  
    var GrantsFeatureCollection = {
      "type": "FeatureCollection",
      "features": data
    }

    /**
     * Setup MapBox and load our default map so that we can begin
     * placing the pins we need to display search results
     */
    var cc_mapboxid   = "developedsimple.g7pfo3pa",
        cc_mapid      = "map",
        cc_mapextent  = [41, -77.5],
        cc_mapzoom    = 8;

    map = L.mapbox.map(cc_mapid, cc_mapboxid).setView(cc_mapextent, cc_mapzoom);

        // Remove the "scroll to zoom feature" because it makes it 
        // impossible to ever see our footer.
        map.scrollWheelZoom.disable();

        var markers = mapbox.markers.layer().url('http://127.0.0.1:5000/api/grants/?limit=10');
        mapbox.markers.interaction(markers);
        map.addLayer(markers);


        var source   = $("#grants").html();
        var template = Handlebars.compile(source);
        $("#content").html(template(GrantsFeatureCollection));      
  });

}