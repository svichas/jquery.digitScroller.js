/**
* Project: https://github.com/svichas/jquery.digitScroller.js
* Author: Stefanos Vichas
* License: MIT
*/

<<<<<<< HEAD
(function($) {

     $.fn.digitScroller = function(opts) {

          var $this = $(this),
               opts = $.extend({}, {
                    "scrollTo": 0,
                    "scrollDuration": 0
               }, opts),
               scrollerContent = $this.html() == "" ? "0" : $this.html(),
               scrolling = false,
               digitScrollEventTimer;


          this.init = function() {
               this.initDom();
               return this;
          }

          this.getCurrentValue = function() {
               var currentValueString = 0;
               $this.find('.__digit_scroller_digit').each(function() {
                    currentValueString += $(this).find(".__digit_scroller_current_digit").html();
               });
               return parseInt(this.removeFrontZeros(currentValueString));
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



          /**
          * Method to update next values
          */
          this.updateNextValue = function(newValue) {

               var _this = this,
                    count = 0;

               newValue = this.addZeros(newValue, scrollerContent.length);

               // create digit
               for (i=$this.find(".__digit_scroller_digit").length;i<newValue.length;i++) {
                    $this.append(this.cunstuctDigit('0'));
               }

               $this.find('.__digit_scroller_digit').each(function() {
                    // change if need to change
                    if ($(this).find(".__digit_scroller_next_digit").html() != newValue.charAt(count)) {
                         $(this).find(".__digit_scroller_next_digit").html(newValue.charAt(count));
                         _this.transitionToUp(count, true);
                    }
                    count++;
               });

               setTimeout(this.setNextNumberToCurrent, opts.scrollDuration-25);
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
               // return if number is negative
               if (!currentValueString.includes("-")) {
                    return currentValueString;
               }

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


          /**
          * Core method that controls when to update digits
          */
          this.coreScroll = function() {
               var currentValue = this.getCurrentValue();

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

               this.updateNextValue(currentValue);
          }


          // public methods

          /**
          * Method to scroll to a number
          */
          this.scrollTo = function(number) {
               if (!scrolling) {
                    var _this = this;
                    scrolling = true;
                    opts.scrollTo = number;
                    this.coreScroll();
                    digitScrollEventTimer = setInterval(function() {
                         _this.coreScroll();
                    }, opts.scrollDuration);
               }
               return this;
          }

          /**
          * Method to jump to directly to a number
          */
          this.jumpTo = function(value) {
               this.updateNextValue(value);
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
=======
$.fn.digitScroller = function(options) {

  // set default options
  options.scrollTo = typeof options.scrollTo === "undefined" ? 0 : options.scrollTo;
  options.scrollDuration = typeof options.scrollDuration === "undefined" ? 0 : options.scrollDuration;

  // inits variables
  var $this = $(this),
      tempString = $this.html(),
      tempElements = [],
      digitScrollerLength = tempString.length,
      scrolling = false,
      digitScrollEventTimer;

  // set zero when empty
  if (digitScrollerLength == 0) {
    tempString = "0";
    $this.html("0")
    digitScrollerLength = 1;
  }

  if (!$this.hasClass('__digit_scroller_wrap')) {

    // format element stracture
    $this.addClass("__digit_scroller_wrap");

    $this.html(""); // clear element wrap content.
    for (var i = 0; i < tempString.length; i++) {
      var tempElement = $("<span/>", {
        class: "__digit_scroller_digit"
      });

      $("<span/>", {
        class: "__digit_scroller_current_digit",
        html: tempString.charAt(i)
      }).appendTo(tempElement);

      $("<span/>", {
        class: "__digit_scroller_next_digit",
        html: tempString.charAt(i)
      }).appendTo(tempElement);

      tempElement.appendTo($this);
    }

  }

  /**
  * Core method that controls when to update digits
  */
  function digitScrollEvent() {

    var currentValue = getCurrentValue();

    if (currentValue == options.scrollTo) {
      scrolling = false;
      clearInterval(digitScrollEventTimer) // clear interval
      return;
    }

    if (options.scrollTo > currentValue) {
      currentValue++;
    } else {
      currentValue--;
    }

    updateNextValue(currentValue);
  }

  /**
  * Methos to go to top with animation
  */
  function goUp(digitPos) {
    $this.find(".__digit_scroller_digit").eq(digitPos)
    .css("transition", "transform " + options.scrollDuration + "ms ease")
    .addClass("_digit_up");
  }

  /**
  * Methos to get current digit value
  */
  function getCurrentValue() {
    var currentValueString = 0;
    $this.find('.__digit_scroller_digit').each(function() {
      currentValueString += $(this).find(".__digit_scroller_current_digit").html();
    });
    return parseInt(removeFrontZeros(currentValueString));
  }

  function removeFrontZeros(currentValueString) {
    if (!currentValueString.includes("-")) return currentValueString;
    return currentValueString.replace(new RegExp("^[0]*"), '');
  }

  /**
  * Methos to update next values
  */
  function updateNextValue(newValue) {
    newValue = bulkDigits(newValue);

    // create digit
    for (i=$this.find(".__digit_scroller_digit").length;i<newValue.length;i++) {
      var _digit_scroller = $("<span/>", {
        class: "__digit_scroller_digit"
      });

      $("<span/>", {
        class: "__digit_scroller_current_digit",
        html: "0"
      }).appendTo(_digit_scroller);

      $("<span/>", {
        class: "__digit_scroller_next_digit",
        html: "0"
      }).appendTo(_digit_scroller);

      _digit_scroller.appendTo($this);
    }

    var count = 0;

    $this.find('.__digit_scroller_digit').each(function() {
      // change if need to change
      if ($(this).find(".__digit_scroller_next_digit").html() != newValue.charAt(count)) {
        $(this).find(".__digit_scroller_next_digit").html(newValue.charAt(count));
        goUp(count, true);
      }
      count++;
    });

    setTimeout(setNextToCurrent, options.scrollDuration-25);
  }

  /**
  * Method to set next values to current values
  */
  function setNextToCurrent() {

    // setting next to current
    $this.find('.__digit_scroller_digit').each(function() {
      $(this).find(".__digit_scroller_current_digit").html($(this).find(".__digit_scroller_next_digit").html());
    });

    // move current to show it and next to bottom without animating it
    $this.find(".__digit_scroller_digit")
    .css("transition", "transform 0ms ease 0s")
    .removeClass('_digit_up');

  }

  /**
  * Method to fill gaps in a number by adding zeros
  */
  function bulkDigits(val) {
    val = String(val);
    if (val.length >= digitScrollerLength) return val;
    for (var i = val.length;i < digitScrollerLength;i++) {
      val = "0" + val;
    }
    return val;
  }


  /**
  * Method to scroll to a number
  */
  this.scrollTo = function(scroll_to) {
    if (!scrolling) {
          scrolling = true;
          options.scrollTo = scroll_to;
          digitScrollEvent();
          digitScrollEventTimer = setInterval(digitScrollEvent, options.scrollDuration);
    }
    return this;
  }

  /**
  * Method to jump to directly to a number
  */
  this.jumpTo = function(value) {
      updateNextValue(value);
      return this;
  }

  /**
  * Method to change scroll duration animation
  */
  this.scrollDuration = function(durr) {
    options.scrollDuration = durr;
    return this;
  }

  return this;

};
>>>>>>> 3b615ca96c62664f13701c88c3be08370bddb498
