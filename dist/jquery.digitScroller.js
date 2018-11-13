

$.fn.digitScroll = function(options) {

  // set default options
  options.scrollTo = typeof options.scrollTo === "undefined" ? 0 : options.scrollTo;
  options.changeDur = typeof options.changeDur === "undefined" ? 0 : options.changeDur;

  // inits variables
  var $this = $(this);
  var tempString = $this.html();
  var tempElements = [];
  var digitScrollerLength = tempString.length;


  if (!$this.hasClass('__digit_scroller_wrap')) {

    // format element stracture
    $this.addClass("__digit_scroller_wrap");
    $this.html("");

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

    if (currentValue >= options.scrollTo)
      return clearInterval(digitScrollEventTimer);

    currentValue++;

    updateNextValue(currentValue);
  }

  /**
  * Methos to go to top with animation
  */
  function goUp(digitPos) {
    var _digit = $this.find(".__digit_scroller_digit").eq(digitPos);
    // _digit.css("transition", "transform "+changeDur+"ms ease");
    _digit.css("transition", "transform " + options.changeDur + "ms ease 0s").addClass("_digit_up");
  }

  /**
  * Methos to get current digit value
  */
  function getCurrentValue() {
    var currentValueString = "";
    $this.find('.__digit_scroller_digit').each(function() {
      currentValueString += $(this).find(".__digit_scroller_current_digit").html();
    });
    return parseInt(currentValueString);
  }


  /**
  * Methos to update next values
  */
  function updateNextValue(newValue) {
    newValue = bulkDigits(newValue);
    var count = 0;
    $this.find('.__digit_scroller_digit').each(function() {

      // change if need to change
      if ($(this).find(".__digit_scroller_next_digit").html() != newValue.charAt(count)) {
        $(this).find(".__digit_scroller_next_digit").html(newValue.charAt(count));
        goUp(count, true);
      }

      count++;
    });

    setTimeout(setNextToCurrent,  options.changeDur - 20);
  }

  /**
  * Methos to set next values to current digits
  */
  function setNextToCurrent() {

    // setting next to current
    $this.find('.__digit_scroller_digit').each(function() {
      $(this).find(".__digit_scroller_current_digit").html($(this).find(".__digit_scroller_next_digit").html());
    });

    // move current to show it and next to bottom without animating it
    $this.find(".__digit_scroller_digit").css("transition", "transform 0ms ease 0s").removeClass('_digit_up');

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

  var digitScrollEventTimer = setInterval(digitScrollEvent, options.changeDur);
};
