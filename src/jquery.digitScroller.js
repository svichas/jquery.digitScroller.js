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


          /**
          * Core method that controls when to update digits
          */
          this.coreScroll = function() {
               var currentValue = getCurrentValue();

               if (currentValue == opts.scrollTo) {
                    scrolling = false;
                    clearInterval(digitScrollEventTimer) // clear interval
                    return;
               }

               if (opts.scrollTo > currentValue) {
                    currentValue++;
               } else {
                    currentValue--;
               }

               updateNextValue(currentValue);
          }


          this.getCurrentValue = function() {
               var currentValueString = 0;
               $this.find('.__digit_scroller_digit').each(function() {
                    currentValueString += $(this).find(".__digit_scroller_current_digit").html();
               });
               return parseInt(removeFrontZeros(currentValueString));
          }

          /**
          * Method to go to top with animation
          */
          this.transitionToUp = function(digitPos) {
               $this.find(".__digit_scroller_digit").eq(digitPos)
               .css("transition", "transform " + opts.scrollDuration + "ms ease")
               .addClass("_digit_up");
          }

          /**
          * Method to set next values to current values
          */
          this.setNextNumberToCurrent = function() {

               // setting next to current
               $this.find('.__digit_scroller_digit').each(function() {
                    $(this).find(".__digit_scroller_current_digit").html($(this).find(".__digit_scroller_next_digit").html());
               });

               // move current to show it and next to bottom without animating it
               $this.find(".__digit_scroller_digit")
               .css("transition", "transform 0ms ease 0s")
               .removeClass('_digit_up');

               return true;
          }


          this.addZeros = function(number, length) {
               number = String(number);
               if (number.length >= length) return number;
               for (var i=number.length;i<length;i++) {
                    number = "0" + number;
               }
               return number;
          }

          this.removeFrontZeros = function(currentValueString) {
               if (!currentValueString.includes("-")) return currentValueString;
               return currentValueString.replace(new RegExp("^[0]*"), '');
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
