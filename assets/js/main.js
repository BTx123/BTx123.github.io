const NAV_HTML = "nav.html";
const FOOTER_HTML = "footer.html";
const TIME_TO_SCROLL = 500;
const RGB_START = 25;
const DIFF = 5;
const MAX_SCROLL_DISTANCE = $(window).height() / 2;

// Navigation injection
$("#top").load(NAV_HTML);

// Footer injection
$("#footer").load(FOOTER_HTML);

// Stuff to to when document is ready
$(document).ready(function () {
    // Auto-collapse navbar
    $(".navbar-collapse a").click(collapseNavbar);
    // Gradient background
    // gradientize($(".section").toArray());
    // Smooth scrolling
    $(".smooth-scroll").click(smoothScroll);
    // Navbar background
    updateNavbarBackground();
    // Back to top button
    updateBackToTop();
});

// Change display status of back to top button
// when scrolling
$(window).scroll(function () {
    updateNavbarBackground();
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

// Update navbar background
function updateNavbarBackground() {
    if ($("body").scrollTop() > MAX_SCROLL_DISTANCE || $(document.documentElement).scrollTop() > MAX_SCROLL_DISTANCE) {
        $(".navbar").css("background-color", "rgba(0, 0, 0, 0.5)");
    } else {
        $(".navbar").css("background-color", "rgba(0, 0, 0, 0)");
    }
}

// Update back to top button
function updateBackToTop() {
    if ($("body").scrollTop() > MAX_SCROLL_DISTANCE || $(document.documentElement).scrollTop() > MAX_SCROLL_DISTANCE) {
        $("#back-to-top").css("display", "block");
    } else {
        $("#back-to-top").css("display", "none");
    }
}
