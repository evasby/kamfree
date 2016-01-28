$(document).ready(function(){
  /***********************************/
  $('.up').click(function(e){
    e.preventDefault();
    $.scrollTo($(this).attr('href'), 400);
  });
  /***********************************/
  $('.menu_link').each(function(){
    $(this).click(function(e){
      e.preventDefault();
      $.scrollTo('#' + $(this).attr('href'), 400);
    });
  });
  /***********************************/
  /***********************************/
  var waypointUp = new Waypoint({
    element: document.getElementById('about'),
    handler: function(direction) {
      if (direction == 'down') {
         $('.up').addClass('up__show');
      } else {
         $('.up').removeClass('up__show');
      }
    }
  })
  /*imagesLoaded******************************/ 
  // $('#container').imagesLoaded( { background: true }, function() {
  //   console.log('#container background image loaded');
  // });
  /***********************************/
  $(".menu_toggle").click(function() {
    $(this).toggleClass("menu_toggle__on");
    //$(".main-mnu").slideToggle();
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
      var $bgobj = $(this);
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
        icon: '../images/footer-marker.png'
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
});