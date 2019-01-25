# jquery.digitScroller.js

![Showcase countdown](countdown.gif)

A jquery plugin for digit scrolling.

---

### Installation

This Plugin requires jQuery.

```html
<link rel="stylesheet" href="../dist/jquery.digitScroller.css">
<script src="../dist/jquery.digitScroller.js"></script>
```

### Example
```html
<script>
  $(function() {

    var scroller = $(".digit_scroll_container").digitScroller({
      scrollDuration: 500 // duration between number change
    });

    // Method to set scroll duration
    scroller.scrollDuration(200);

    // Method to scroll to a number one by one.
    scroller.scrollTo(99);

    // Method to jump directly to a number
    scroller.jumpTo(99);

  });
</script>

<div class="digit_scroll_container">00</div>
```
