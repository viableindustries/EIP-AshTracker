(function(angular) {

  "use strict";

  /**
   * The name of our module
   */
  var module_name = "CommonsCloudSearch.controllers";


  /**
   * Module Dependencies often consist of things like controllers,
   * services, and directives that enable our module to operate.
   */
  var module_dependencies = [
    'CommonsCloudSearch.controllers.grants.Main'
  ];


  /**
   * Start the module using the information we've defined above
   */
  var mod = angular.module(module_name, module_dependencies);

})(angular);