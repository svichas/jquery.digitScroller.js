/**
* Project: https://github.com/svichas/jquery.digitScroller.js
* Author: Stefanos Vichas
* License: MIT
*/

(function($) {

     $.fn.digitScroller = function(opts) {

          var $this = $(this),
               opts = $.extend({}, {
                    "scrollTo": 0,
                    "scrollDuration": 0
               }, opts),
               scrollerContent = $this.html() == "" ? "0" : $this.html();

          this.digitScroller = function() {
               alert(1);
          }

          this.init = function() {
               alert(1);
               this.initDom();

          }

          /**
          * Method to format digitScroller
          */
          this.initDom = function() {

               if ($this.hasClass("__digit_scroller_wrap")) {
                    return false;
               }
               alert(1);

               $this.addClass("__digit_scroller_wrap");
               $this.html(""); // clear element wrap content.

               for (var i = 0; i < scrollerContent.length; i++) {
                    $this.append(this.cunstuctDigit(scrollerContent[i]));
               }

          }

          this.cunstuctDigit = function(num) {

               return $("<span/>", {
                    "class": "__digit_scroller_digit"
               })
               .append($("<span/>", {
                    "class": "__digit_scroller_current_digit",
                    "html": num
               }))
               .append($("<span/>", {
                    "class": "__digit_scroller_next_digit",
                    "html": num
               }));

          }



          // public methods
          this.scrollTo = function(number) {

          }

          this.jumpTo = function() {

          }

          return this;
     }


})(jQuery);
