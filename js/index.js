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


$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $("nav").addClass("blue");
    }
    else {
        $("nav").removeClass("blue");
    }
});