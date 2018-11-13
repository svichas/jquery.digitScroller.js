# jquery.digitScroller.js
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

    $(".digit_scroll_container").digitScroll({
      scrollTo: 63, // number to scroll to
      changeDur: 150 // duration between number change
    });

  });
</script>

<div class="digit_scroll_container">00</div>
```
