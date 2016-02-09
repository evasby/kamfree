$(document).ready(function(){
  /***********************************/
  $(".menuRight_list__l2").each(function(){
    $(this).hide();
  });

  $(".menuRight_item").click(function(e) {
      e.preventDefault();
      $(".menuRight_item").removeClass("menuRight_item__open");
      $(".menuRight_list__l2:visible").slideUp("normal");
      if (($(this).find(".menuRight_link").next().is("ul")) && (!$(this).find(".menuRight_link").next().is(":visible"))) {
        $(this).addClass("menuRight_item__open").find(".menuRight_link").next().slideDown("normal");
      }
  });
  $(".slider_list").lightSlider({
    item: 1,
    loop:true,
    slideMargin: 0,
    pager: false
  });
  var reviewsList = $(".reviews_list").lightSlider({
    item: 3,
    loop:true,
    slideMargin: 65,
    pager: false,
    controls: false
  });
  $('.reviews_left').click(function(e){
    e.preventDefault();
    reviewsList.goToPrevSlide();
  });
  $('.reviews_right').click(function(e){
    e.preventDefault();
    reviewsList.goToNextSlide();
  });
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
  if($("#why").length) {
    var waypointUp = new Waypoint({
      element: document.getElementById('why'),
      handler: function(direction) {
        if (direction == 'down') {
           $('.up').addClass('up__show');
        } else {
           $('.up').removeClass('up__show');
        }
      }
    })
  }
  var waypointUp = new Waypoint({
    element: document.getElementById('menu'),
    handler: function(direction) {
      if (direction == 'down') {
         $('.headerFixed').addClass('headerFixed__show');
      } else {
         $('.headerFixed').removeClass('headerFixed__show');
      }
    },
    offset: -80
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
  //heightDetect();
  /*$(window).resize(function() {
    console.log('d');
    heightDetect();
  });*/
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
  if($("#map").length>0) {
    var map;
    var myLatlng = new google.maps.LatLng(53.8749103, 27.6714312);
    var myCenter = new google.maps.LatLng(53.8749103, 27.6714312);
    function initialize() {
      /*var styles = [
        {
          stylers: [
            { hue: "#cccccc" },
            { saturation: -120 }
          ]
        },{
          featureType: "road",
          elementType: "geometry",
          stylers: [
            { lightness: 100 },
            { visibility: "simplified" }
          ]
        },{
          featureType: "road",
          elementType: "labels",
          stylers: [
            { visibility: "off" }
          ]
        }
      ];*/
      /*var styledMap = new google.maps.StyledMapType(styles,
      {name: "Styled Map"});*/
      var mapOptions = {
        zoom: 17,
        center: myCenter,
        /*mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }*/
      };
      map = new google.maps.Map(document.getElementById('map'),
          mapOptions);
      var marker = new google.maps.Marker({
          position: myLatlng,
          title:"Webformat",
          //icon: '../images/footer-marker.png'
      });
      marker.setMap(map);
      var contentString = '<section class="location"><h1>ООО “КАМФРИ”</h1><p>+375 (29) <b>574 93 20</b>; +375 (29) <b>574 93 20</b></p><p>г. Минск, ул. Байкальская, 58/1</p></section>';
      var infowindow = new google.maps.InfoWindow({
          content: contentString
      });
      infowindow.open(map,marker);
      map.mapTypes.set('map_style', styledMap);
      map.setMapTypeId('map_style');
    }
    google.maps.event.addDomListener(window, 'load', initialize);
    /************************************************************************/
  }
});
/*
  By Osvaldas Valutis, www.osvaldas.info
  Available for use under the MIT License
*/

'use strict';

;( function( $, window, document, undefined )
{
  $( '.inputfile' ).each( function()
  {
    var $input   = $( this ),
      $label   = $input.next( 'label' ),
      labelVal = $label.html();

    $input.on( 'change', function( e )
    {
      var fileName = '';

      if( this.files && this.files.length > 1 )
        fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
      else if( e.target.value )
        fileName = e.target.value.split( '\\' ).pop();

      if( fileName )
        $label.find( 'span' ).html( fileName );
      else
        $label.html( labelVal );
    });

    // Firefox bug fix
    $input
    .on( 'focus', function(){ $input.addClass( 'has-focus' ); })
    .on( 'blur', function(){ $input.removeClass( 'has-focus' ); });
  });
})( jQuery, window, document );