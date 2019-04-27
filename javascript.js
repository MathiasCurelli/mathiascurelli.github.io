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


function clock() {

    //Save the times in variables

    var today = new Date();

    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();


    //Set the AM or PM time

    if (hours >= 12) {
        meridiem = " PM";
    }
    else {
        meridiem = " AM";
    }


    //convert hours to 12 hour format and put 0 in front
    if (hours > 12) {
        hours = hours - 12;
    }
    else if (hours === 0) {
        hours = 12;
    }

    //Put 0 in front of single digit minutes and seconds

    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    else {
        minutes = minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    else {
        seconds = seconds;
    }


    document.getElementById("clock").innerHTML = (hours + ":" + minutes + ":" + seconds + meridiem);

}


setInterval('clock()', 1000);