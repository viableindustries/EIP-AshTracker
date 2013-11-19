(function(jQuery) {

  "use strict";
  
  var map;
  
  var marker_color = function (grant_type) {
    
    var color = '60c2db';
    
    if (grant_type == "Abandoned Mine Drainage") {
      color = 'A66130';
    }
    else if (grant_type == "Capacity Building") {
      color = 'C7D0B8';
    }
    else if (grant_type == "Clean Water Policy") {
      color = '9E2EEB';
    }
    else if (grant_type == "Cold Water Heritage Fisheries") {
      color = '0BA8F9';
    }
    else if (grant_type == "Convening Grants") {
      color = '12028A';
    }
    else if (grant_type == "Land Protection and Acquisition") {
      color = '778A4D';
    }
    else if (grant_type == "New Technologies") {
      color = 'B60101';
    }
    else if (grant_type == "Nonpoint Source Pollution") {
      color = 'E9C777';
    }
    else if (grant_type == "Resource Recovery") {
      color = '984A65';
    }
    else if (grant_type == "Riparian Buffer Zones") {
      color = 'ADC838';
    }
    else if (grant_type == "Settlement") {
      color = 'E3D400';
    }
    else if (grant_type == "Watershed Preservation and Design") {
      color = '757D71';
    }
    
    return color
  }
  
  
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
    
    var markers = new L.MarkerClusterGroup();

    // for (var i = 0; i < data.features.length; i++) {
    // 
    //    var this_feature = data.features[i];
    //    var title = this_feature.properties.grant_name;
    //    var grant_payment_amount = this_feature.properties.grant_payment_amount;
    //    var grant_decision_date = this_feature.properties.grant_decision_date;
    // 
    //    if (this_feature.geometry.type == 'Point') {
    //      var marker = L.marker(new L.LatLng(this_feature.geometry.coordinates[1], this_feature.geometry.coordinates[0]), {
    //          icon: L.mapbox.marker.icon({
    //            'marker-size': 'large',
    //            'marker-color': marker_color(this_feature.properties.grant_type)
    //          })
    //      });
    //  
    //         var content = "<h5>" + title + "</h5><span><strong>Funding date:</strong> " + grant_decision_date + "</span><br /><strong>Funding amount:</strong> <span>$" + commaSeparateNumber(grant_payment_amount) + "</span>";
    // 
    //  
    //      marker.bindPopup(content);
    //      markers.addLayer(marker);
    //    }
    // }
    // 
    // map.addLayer(markers);
  }

  /**
   * Once the document is ready and jQuery is loaded, start
   * the application by running the initialization function
   */
  jQuery(document).ready(init_map);

})(jQuery);