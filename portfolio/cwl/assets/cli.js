// FADE FUNCTION FOR idTabs
var fade = function(id,s){
  s.tabs.removeClass(s.selected);
  s.tab(id).addClass(s.selected);
  s.items.hide();
  s.item(id).fadeToggle();
  return false;
};

$.fn.fadeTab = $.idTabs.extend(fade);

// FUNCTION FOR MAKING ELEMENTS "ACTIVE" & "INACTIVE"
var toggleActive = function(id, classOn, classOff) {
    $(id).click(function() {
        $(id).removeClass(classOn).addClass(classOff);
        $(this).removeClass(classOff).addClass(classOn);
    });
};

///////////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function () {
    $("header").animate({ opacity: 0.0 }, 0).delay(250).animate({ opacity: 1.0 }, 250);
    $("nav").animate({ opacity: 0.0 }, 0).delay(500).animate({ opacity: 1.0 }, 250);
    $("main").animate({ opacity: 0.0 }, 0).delay(750).animate({ opacity: 1.0 }, 250);
    $("footer").animate({ opacity: 0.0 }, 0).delay(1000).animate({ opacity: 1.0 }, 250);

    //$(".spine").toggleClass("debug");
    //$(".rib").toggleClass("debug");

    $('#vid_header').videoBG({
      mp4: 'assets/vid_header.mp4',
      ogv: 'assets/vid_header.ogv',
      webm: 'assets/vid_header.webm',
      poster: 'assets/vid_header.png',
      position: 'relative',
      loop: true,
      scale: false,
      zIndex: -1
    });

    $("#debug-button").click(function() {
        $(".spine").toggleClass("debug");
        $(".rib").toggleClass("debug");
    });

    toggleActive("nav ul li a", "active", "inactive");
});

// EOF ////////////////////////////////////////////////////////////////////////////////////////////