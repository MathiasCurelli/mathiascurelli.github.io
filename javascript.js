$(document).ready(function () {
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

$(document).ready(function () {
    $('a[href^="#backTop"]').click(function () {
        var the_id = $(this).attr("href");           /*va permettre à mon bouton en bas à droite de l'écran de revenir au début en smooth scroll*/
        $('html, body').animate({
            scrollTop: $(the_id).offset().top
        }, 'slow');
        return false;
    });
});

$(document).ready(function () {
    $('#nav li a').click(function () {
        if ($("#pull").is(":visible")) {            /* Permet, lorsque l'on clique sur un lien dans la navbar, de la fermer après avoir cliqué */
            $("#pull").click();
        }
    });
});

