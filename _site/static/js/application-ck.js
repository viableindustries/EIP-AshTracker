(function(e){"use strict";var t,n="CommonsCloudSearch",r=["truncate"],i=function(e,t){e.when("/",{templateUrl:"static/partials/grants/list.html",controller:"GrantsViewController"});e.when("/fpw/",{templateUrl:"static/partials/grants/list.html",controller:"GrantsViewController"});e.otherwise({redirectTo:"/"});t.html5Mode(!0)},s=function(e){var n="developedsimple.g7pfo3pa",r="map",i=[41,-77.5],s=8;t=L.mapbox.map(r,n).setView(i,s);t.scrollWheelZoom.disable();var o=new L.MarkerClusterGroup;for(var u=0;u<e.features.length;u++){var a=e.features[u],f=a.properties.grant_name;if(a.geometry.type=="Point"){var l=L.marker(new L.LatLng(a.geometry.coordinates[1],a.geometry.coordinates[0]),{icon:L.mapbox.marker.icon({"marker-size":"large","marker-color":"60c2db"}),title:f});l.bindPopup(f);o.addLayer(l)}}t.addLayer(o)},o=function(e,t){e.grants=[];t({method:"GET",url:"static/data/grants.json"}).success(function(t,n,r,i){e.grants=t;console.log(e.grants);s(e.grants)})},u=e.module(n,r).config(i);u.controller("GrantsViewController",o)})(angular);