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
               scrollerContent = $this.html() == "" ? "0" : $this.html(),
               scrolling = false;


          this.init = function() {
               this.initDom();
               return this;
          }


          this.addZeros = function(number, length) {

          }


          /**
          * Method to format digitScroller
          */
          this.initDom = function() {
               if ($this.hasClass("__digit_scroller_wrap")) return false;

               $this.addClass("__digit_scroller_wrap");
               $this.html(""); // clear element wrap content.

               for (var i = 0; i < scrollerContent.length; i++) {
                    $this.append(this.cunstuctDigit(scrollerContent[i]));
               }

               return true;
          }

          /**
          * Method to cunstruct stracture for a digit
          */
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

          /**
          * Method to scroll to a number
          */
          this.scrollTo = function(number) {

               return this;
          }

          /**
          * Method to jump to directly to a number
          */
          this.jumpTo = function() {

               return this;
          }


          /**
          * Method to change scroll duration animation
          */
          this.scrollDuration = function(durration) {
               opts.scrollDuration = durration;
               return this;
          }

          return this.init();
     }


})(jQuery);
