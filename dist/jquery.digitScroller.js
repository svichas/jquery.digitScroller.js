

$.fn.digitScroll = function(options) {

  // set default options
  options.scrollTo = typeof options.scrollTo === "undefined" ? 0 : options.scrollTo;
  options.changeDurr = typeof options.changeDurr === "undefined" ? 0 : options.changeDurr;

  // get current value
  var $this = $(this);
  var tempString = $this.html();
  var tempElements = [];
  var digitScrollerLength = tempString.length;

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

    digitScrollEvent();

  function digitScrollEvent() {

    var currentValue = getCurrentValue();

    if (currentValue >= options.scrollTo)
      return clearInterval(digitScrollEventTimer);

    currentValue++;

    updateNextValue(currentValue);
  }

  function goUp(digitPos) {
    var _digit = $this.find(".__digit_scroller_digit").eq(digitPos);
    // _digit.css("transition", "transform "+options.changeDurr+"ms ease");
    _digit.css("transition", "transform " + options.changeDurr + "ms ease 0s").addClass("_digit_up");
  }

  function getCurrentValue() {
    var currentValueString = "";
    $this.find('.__digit_scroller_digit').each(function() {
      currentValueString += $(this).find(".__digit_scroller_current_digit").html();
    });
    return parseInt(currentValueString);
  }

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

    setTimeout(setNextToCurrent,  options.changeDurr - 20);
  }

  function setNextToCurrent() {

    $this.find('.__digit_scroller_digit').each(function() {
      $(this).find(".__digit_scroller_current_digit").html($(this).find(".__digit_scroller_next_digit").html());
    });

    $this.find(".__digit_scroller_digit").css("transition", "transform 0ms ease 0s").removeClass('_digit_up');

  }

  function bulkDigits(val) {
    val = String(val);
    if (val.length >= digitScrollerLength) return val;
    for (var i = val.length;i < digitScrollerLength;i++) {
      val = "0" + val;
    }
    return val;
  }

  var digitScrollEventTimer = setInterval(digitScrollEvent, options.changeDurr);
};
