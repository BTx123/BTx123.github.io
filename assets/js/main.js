const NAV_HTML = "nav.html";
const FOOTER_HTML = "footer.html";
const TIME_TO_SCROLL = 500;
const RGB_START = 25;
const DIFF = 5;

// Navigation injection
$("#top").load(NAV_HTML);

// Footer injection
$("#footer").load(FOOTER_HTML);

// Stuff to to when document is ready
$(document).ready(function () {
    // Auto-collapse navbar
    $(".navbar-collapse a").click(collapseNavbar);
    // Gradient background
    gradientize($(".section").toArray());
    // Smooth scrolling
    $(".smooth-scroll").click(smoothScroll);
});

// Change display status of back to top button
// when scrolling
$(window).scroll(function () {
    updateBackToTop();
});

// Collapse Navbar
function collapseNavbar() {
    $(".navbar-collapse").collapse("hide");
};

// Gradient background
function gradientize(sections) {
    sections.forEach(function (section, index) {
        var gray = RGB_START + index * DIFF;
        var rgb = "rgb(" + gray + ", " + gray + ", " + gray + ")";
        $(section).css("background-color", rgb);
    });
};

// Smooth scrolling
function smoothScroll(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
        // Store hash, ex. #about
        var hash = this.hash;
        // Using jQuery"s animate() method to add smooth page scroll
        // TIME_TO_SCROLL specifies the number of milliseconds it takes to scroll to the specified area
        $("html, body").animate({
            scrollTop: $(hash).offset().top
        }, TIME_TO_SCROLL, function () {
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
    }
}

function updateBackToTop() {
    var maxScrollDistance = $(window).height() / 4;
    if ($("body").scrollTop() > maxScrollDistance || $(document.documentElement).scrollTop() > maxScrollDistance) {
        $("#back-to-top").css("display", "block");
    } else {
        $("#back-to-top").css("display", "none");
    }
}
