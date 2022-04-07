// function myFunction(x) {
    //   if (x.matches) { // If media query matches
    //     var prevScrollpos = window.pageYOffset;
    //     window.onscroll = function () {
    //       var currentScrollPos = window.pageYOffset;
    //       if (prevScrollpos > currentScrollPos) {
    //         document.getElementById("navv").style.top = "0";
    //       } else {
    //         document.getElementById("navv").style.top = "-100px";
    //       }
    //       prevScrollpos = currentScrollPos;
    //     }
    //   }
    // }
    // var x = window.matchMedia("(max-width: 600px) and (orientation: portrait)")
    // myFunction(x) // Call listener function at run time
    // x.addListener(myFunction) // Attach listener function on state changes

    (function($) {
      // Begin jQuery
      $(function() {
        // DOM ready
        // If a link has a dropdown, add sub menu toggle.
        $("nav ul li a:not(:only-child)").hover(function(e) {
          $(this)
            .siblings(".nav-dropdown")
            .toggle();
          // Close one dropdown when selecting another
          $(".nav-dropdown")
            .not($(this).siblings())
            .hide();
          e.stopPropagation();
        });
        // Clicking away from dropdown will remove the dropdown class
        $("html").click(function() {
          $(".nav-dropdown").hide();
        });
        // Toggle open and close nav styles on click
        $("#nav-toggle").click(function() {
          $("nav ul").slideToggle();
        });
        // Hamburger to X toggle
        $("#nav-toggle").on("click", function() {
          this.classList.toggle("active");
        });
      }); // end DOM ready
    })(jQuery); // end jQuery