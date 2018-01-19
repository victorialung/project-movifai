// cargando todo el árbol de nodos del DOM
$(document).ready(function() {
// activando barra lateral de peril de usuario
  $('.show-user-perfil').sideNav();
// Cambiamos los datos por default por los datos del usuario
$('#btn-nav').on('click', function(){
  var user = firebase.auth().currentUser;
  $('#user-avatar').attr('src', user.photoURL);
  $('#name-user').text(user.displayName);
})

// slider 
function HorizontalScroller(elem) {
  this.scrollbox = elem; // The scrollers viewable area
  this.scrollImages = this.scrollbox.find("img");
  this.leftScrollControl = this.scrollbox.siblings(".left-scroll");
  this.rightScrollControl = this.scrollbox.siblings(".right-scroll");

  // left and right controls
  // when at scroll extremes
  this.scrollbox.on("scroll", this.evaluateControlVisibility.bind(this));
};

HorizontalScroller.prototype = {
  
  scrollboxWidth: function() {
    return this.scrollbox.outerWidth(true);
  },
  currentScrollPosition: function() {
    return this.scrollbox.scrollLeft();
  },
  currentRightPosition: function() {
    return this.currentScrollPosition() + this.scrollboxWidth() - this.totalWidths();
  },
  // Maps the image width of each image in the scroller
  imageWidths: function() {
    return $.map(this.scrollImages, function(img) { 
      return $(img).outerWidth(true);
    })
  },
  totalWidths: function() {
    return this.imageWidths().reduce(function(a,b) { return a+b});
  },
  avgWidth: function() {
    return this.totalWidths() / this.imageWidths().length;
  },
  // Determines the number of images in view area.
  // Number of images changes with responsive CSS
  imagesAcross: function() {
    return Math.round( this.scrollboxWidth() / this.avgWidth() );
  },
  imageOffsets: function() {
    return $.map(this.scrollImages, function(img) { 
      return Math.round($(img).position().left);
    }); 
  },
  indexOfFirst: function(array, value) {
    value = value || 0;
    var firstIndex;
    var i = 0;
    while (firstIndex === undefined && array.length > i) {
      if (array[i] >= value)
        firstIndex = i; 
      i += 1;
    }
    return firstIndex; 
  },
  firstVisibleImageIndex: function() {
    return this.indexOfFirst(this.imageOffsets());
  },
  firstVisibleImage: function() {
    return this.scrollImages[this.firstVisibleImageIndex()];
  },
  lastVisibleImageIndex: function() {
    return this.firstVisibleImageIndex() + this.imagesAcross();
  },
  lastVisibleImage: function() {
    return this.scrollImages[this.lastVisibleImageIndex()];
  },
  offset: function() {
    var offset = $(this.firstVisibleImage()).position().left;
    return Math.round(offset);
  },
  
  nextScrollPosition: function(direction) {
    var nextScrollPosition = this.currentScrollPosition() + this.offset();

    switch(direction) {
      case "left":
        nextScrollPosition -= this.scrollboxWidth();
        if (($(this.firstVisibleImage()).outerWidth(true) - this.offset()) < 0) {
          nextScrollPosition -= $(this.firstVisibleImage()).outerWidth(true);
        }
        break;
      case "right":
        nextScrollPosition += this.scrollboxWidth();
        if (this.offset() > 0) {
          nextScrollPosition -= $(this.firstVisibleImage()).outerWidth(true);
        }
        break;
    }
    return nextScrollPosition;
  },
  // Triggers the animation
  animateScroll: function(direction) {
    resetFocusedImg();
    var scroller = this;
    setTimeout(function() {
      scroller.scrollbox.animate({
        scrollLeft: scroller.nextScrollPosition(direction)
      }, this.scrollboxWidth())
    }.bind(this), 100);
  },

  hideScrollControl: function(control) {
    control.addClass("invisible");
  },
  showScrollControl: function(control) {
    control.removeClass("invisible");
  },
  scrollControlVisibility: function(control) {
    return control.hasClass("invisible");
  },
  scrollAtZero: function() {
    return this.currentScrollPosition() == 0;
  },
  scrollAtMax: function() {
    return this.currentRightPosition() >= -1;
  },

  evaluateControlVisibility: function() {
    var left = this.leftScrollControl;
    var right = this.rightScrollControl;
    var leftIsInvisible = this.scrollControlVisibility(left);
    var rightIsInvisible = this.scrollControlVisibility(right);

    if (this.scrollAtZero()) this.hideScrollControl(left);
    if (this.scrollAtMax()) this.hideScrollControl(right);
    if (!this.scrollAtZero() && leftIsInvisible) this.showScrollControl(left);
    if (!this.scrollAtMax() && rightIsInvisible) this.showScrollControl(right);
  }
};

var scrollers = {};

// Detecta scroll en el DOM
function detectScrollers() {
  return $.map($(".horiz-scroll"), function(scroller) {
    return $(scroller).attr("id");
  });
}
function mapScrollers(scrollerIds) {
  scrollerIds.forEach(function(elem, i , arr) {
    var scroller = "#" + elem + " .scroll-images";
    scrollers[elem] = new HorizontalScroller( $(scroller) );
  });
}
function getScrollDirection(button) {
  return (button.hasClass("left-scroll")) ? "left" : "right"
}
function triggerAnimation(button) {
  var scrollId = button.closest(".horiz-scroll").attr("id");
  var scrollDirection = getScrollDirection(button);
  scrollers[scrollId].animateScroll(scrollDirection);
}
function listenForScroll() {
  $(".left-scroll, .right-scroll").on("click", function() {
    var button = $(this);
    triggerAnimation(button);
  });
}
function resetFocusedImg() {
  $(".focused").removeClass("focused");
}
// var horizontalScrollImg = $(".horiz-scroll .scroll-images img");
// horizontalScrollImg.on("click", function() {
//   if (!$(this).hasClass("focused"))
//     resetFocusedImg();
//   $(this).toggleClass("focused");
// });

// Inicia eventos escuchas 
function scrollerInit() {
  var scrollerIds = detectScrollers();
  mapScrollers(scrollerIds);
  listenForScroll();
}

scrollerInit();
});
