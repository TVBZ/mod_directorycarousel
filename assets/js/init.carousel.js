/**
 * mod_directorycarousel
 * Copyright 2020 Tom F. Vanbrabant
 * Licensed under: SEE LICENSE IN https://github.com/TVBZ/mod_directorycarousel/blob/master/LICENSE
 */


// Get module params
const dcModuleSettings = Joomla.getOptions('mod_directorycarousel');

jQuery(document).ready(function () {

    // Loop over each module
    const dcModules = Object.keys(dcModuleSettings);
    for (const id of dcModules) {

        const params = dcModuleSettings[id];
        const target = "#owl-carousel-" + id;

        // Callback to evaluate true/false params
        function check(parameter) {
            return params[parameter] === "1";
        };

        // Get responsive settings
        let responsive = {};
        if (params["isresponsive"] === "1" && params["responsive"] !== "") {
            if (true) { // parse settings as JSON
                responsive = JSON.parse(params["responsive"]);
            } else { // use simplified settings
                const settings = params["responsive"].split("\n");
                for (line of settings) {
                    const splitSettings = line.split(":"),
                        viewport = splitSettings[0],
                        value = Number(splitSettings[1]);
                    responsive[viewport] = {items: value};
                };
            };
        };

        // Initialize carousel
        const carouselSettings = {
            items: params.items,
            margin: params.margin,
            loop: check("loop"),
            center: check("center"),
            mouseDrag: check("mousedrag"),
            touchDrag: check("touchdrag"),
            stagePadding: params.stagepadding,
            autoWidht: check("autowidht"),
            autoHeight: check("autoheight"),
            startPosition: params.startposition - 1,
            nav: check("nav"),
            rewind: check("rewind"),
            slideBy: params.slideby,
            dots: check("dots"),
            lazyLoad: check("lazyload"),
            autoplay: check("autoplay"),
            smartSpeed: params.smartspeed,
            autoplayTimeout: params.autoplaytimeout,
            autoplayHoverPause: check("autoplayhoverpause"),
            responsive
        };

        // console.log(carouselSettings);
        jQuery(target).owlCarousel(carouselSettings);
        console.log(target + " initialized.")

    };

});