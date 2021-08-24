console.log('your index.js file is loadedcorrectly!');


$(document).ready(function () {
    $("#typewriter").typewriter({
        prefix: "I'm a ",
        text: ["Social Media Expert", "UI/UX Designer", "Front End Developer"],
        typeDelay: 100,
        waitingTime: 1500,
        blinkSpeed: 800
    });
});

$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.button3').fadeIn();
        } else {
            $('.button3').fadeOut();
        }
    });

    $(".button3").click(function () {
        $('html ,body').animate({ scrollTop: 0 }, 800);
    });
});

$(window).scroll(function () {
    parallax();
})

