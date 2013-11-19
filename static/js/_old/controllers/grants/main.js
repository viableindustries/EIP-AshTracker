(function(angular) {

  "use strict";

  /**
   * The name of our module
   */
  var module_name = "CommonsCloudSearch.controllers.grants.Main";


  /**
   * Module Dependencies often consist of things like controllers,
   * services, and directives that enable our module to operate.
   */
  var module_dependencies = [];


  /**
   * The Main CommonsCloud Search view controller
   */
  var GrantsViewController = function($scope, $http) {

    $http({method: 'GET', url: 'static/data/grants.json'}).
      success(function(data, status, headers, config) {
        $scope.grants = data;
        console.log($scope.grants);
      
        grant_map = init_map($scope.grants);
      
      });

  };
  
  var init_map = function (data) {
  
    /**
     * Setup MapBox and load our default map so that we can begin
     * placing the pins we need to display search results
     */
    var cc_mapboxid   = "developedsimple.g7pfo3pa",
        cc_mapid      = "map",
        cc_mapextent  = [41, -77.5],
        cc_mapzoom    = 8;

    map = L.mapbox.map(cc_mapid, cc_mapboxid).setView(cc_mapextent, cc_mapzoom);

    map.scrollWheelZoom.disable();

    L.geoJson(data).addTo(map);

  }


  /**
   * Start the module using the information we've defined above
   */
  var CCGrantsViewController = angular.module(module_name, module_dependencies);
  CCGrantsViewController.controller('GrantsViewController', GrantsViewController);


})(angular);