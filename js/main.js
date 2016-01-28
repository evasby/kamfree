(function ($, Drupal, window, document, undefined) {
  Drupal.behaviors.myscriptfront = {
    attach: function(context, settings) { 
      if (typeof(checkmyscriptfront) == "undefined") {
      	$('.up').click(function(e){
			    e.preventDefault();
			    $.scrollTo($(this).attr('href'), 400);
			  });
			  $('.menu_link').each(function(){
			    $(this).click(function(e){
			      e.preventDefault();
			      $.scrollTo($(this).attr('href'), 400);
			    });
			  });		 
			  $(".menu_toggle").click(function() {
			    $(this).toggleClass("menu_toggle__on");
			    $(".menu").toggleClass("menu__on");
			    return false;
			  });
			  function heightDetect() {
			    $(".header").css("height", $(window).height());
			  };
			  heightDetect();
			  $(window).resize(function() {
			    heightDetect();
			  });
			  /***********************************/
			  $('[data-type="background"]').each(function(){
			      var $bgobj = $(this); // создаем объект
			      $(window).scroll(function() {
			          var yPos = -($(window).scrollTop() / $bgobj.data('speed')); // вычисляем коэффициент 
			          var coords = 'center '+ yPos + 'px';
			          $bgobj.css({ backgroundPosition: coords });
			      });
			  });
			  /************************************************************************/
			  var map;
			  var myLatlng = new google.maps.LatLng(53.907179, 27.484561);
			  var myCenter = new google.maps.LatLng(53.911500, 27.484561);
			  function initialize() {
			    var styles = [
			      // {
			      //   stylers: [
			      //     { hue: "#cccccc" },
			      //     { saturation: -120 }
			      //   ]
			      // },{
			      //   featureType: "road",
			      //   elementType: "geometry",
			      //   stylers: [
			      //     { lightness: 100 },
			      //     { visibility: "simplified" }
			      //   ]
			      // },{
			      //   featureType: "road",
			      //   elementType: "labels",
			      //   stylers: [
			      //     { visibility: "off" }
			      //   ]
			      // }
			    ];
			    var styledMap = new google.maps.StyledMapType(styles,
			    {name: "Styled Map"});
			    var mapOptions = {
			      zoom: 15,
			      center: myCenter,
			      mapTypeControlOptions: {
			        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
			      }
			    };
			    map = new google.maps.Map(document.getElementById('footer'),
			        mapOptions);
			    var marker = new google.maps.Marker({
			        position: myLatlng,
			        title:"Webformat",
			        icon: 'sites/all/themes/landingNew/images/footer-marker.png'
			    });
			    marker.setMap(map);
			    var contentString = '';
			    var infowindow = new google.maps.InfoWindow({
			        content: contentString
			    });
			    infowindow.open(map,marker);
			    map.mapTypes.set('map_style', styledMap);
			    map.setMapTypeId('map_style');
			  }
			  google.maps.event.addDomListener(window, 'load', initialize);
			  /************************************************************************/
			  /***********************************/
      	/*ANIMATION*************************/
      	/***********************************/
      	var visible = '95%';
        var hidden = 50;
        var waypointUp = new Waypoint({
			    element: document.getElementById('about'),
			    handler: function(direction) {
			      if (direction == 'down') {
			         $('.up').addClass('up__show');
			      } else {
			         $('.up').removeClass('up__show');
			      }
			    }
			  });
			   // var waypoint_header = new Waypoint({
         //      element: document.getElementById('header'),
         //      handler: function(dir) {
         //        if (dir === 'down') {
         //          $('.slider_item').bgLoaded({
         //            afterLoaded : function(){
         //              $('.slider').removeClass('fadeOut').addClass('fadeIn');
         //            }
         //          });
         //          $('.slider').removeClass('fadeOut').addClass('fadeIn');
         //        } else{
         //          $('.slider').removeClass('fadeIn').addClass('fadeOut');
         //        }
         //      },
         //      offset: visible
         //    });
      	/***********************************/
      	/***********************************/
      }
      checkmyscriptfront = true;
    }
  };
})(jQuery, Drupal, this, this.document);