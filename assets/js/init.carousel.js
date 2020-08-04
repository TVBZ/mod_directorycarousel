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

        // Get responsive settings
        let responsive = {};
        if (params.isresponsive !== "0" && params.responsive !== "") {
            if (params.isresponsive === "json") { // parse settings as JSON
                responsive = JSON.parse(params.responsive);
            } else if (params.isresponsive === "simple") { // use simplified settings
                const settings = params.responsive.split("\n");
                for (const line of settings) {
                    const splitSettings = line.split(":"),
                        viewport = splitSettings[0],
                        value = Number(splitSettings[1]);
                    responsive[viewport] = {
                        items: value
                    };
                }
            }
        }

        // Initialize carousel
        const carouselSettings = {
            items: params.items,
            margin: params.margin,
            loop: (params.loop == 1),
            center: (params.center == 1),
            mouseDrag: (params.mousedrag == 1),
            touchDrag: (params.touchdrag == 1),
            stagePadding: params.stagepadding,
            autoWidht: (params.autowidht == 1),
            autoHeight: (params.autoheight == 1),
            startPosition: params.startposition - 1,
            nav: (params.nav == 1),
            rewind: (params.rewind == 1),
            slideBy: params.slideby,
            dots: (params.dots == 1),
            lazyLoad: (params.lazyload == 1),
            autoplay: (params.autoplay == 1),
            smartSpeed: params.smartspeed,
            autoplayTimeout: params.autoplaytimeout,
            autoplayHoverPause: (params.autoplayhoverpause == 1),
            responsive
        };

        // console.log(carouselSettings);
        jQuery(target).owlCarousel(carouselSettings);
        console.log(target + " initialized.");

    }

});