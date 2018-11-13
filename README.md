```js
/*
 *                                                                                       
 *     _ _____                     _ _     _ _   _____             _ _             _     
 *    |_|     |_ _ ___ ___ _ _   _| |_|___|_| |_|   __|___ ___ ___| | |___ ___    |_|___ 
 *    | |  |  | | | -_|  _| | |_| . | | . | |  _|__   |  _|  _| . | | | -_|  _|_  | |_ -|
 *   _| |__  _|___|___|_| |_  |_|___|_|_  |_|_| |_____|___|_| |___|_|_|___|_| |_|_| |___|
 *  |___|  |__|           |___|       |___|                                     |___|    
 *                                                                          Version 1.0.0
 *  
 *                                                  Stefanos Vichas <stefanos@vichas.org>
 *  
 */
```


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
      scrollTo: 49, // number to scroll to
      changeDur: 150 // duration between number change
    });

  });
</script>

<div class="digit_scroll_container">00</div>
```
