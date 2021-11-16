/****** FILE: themes/granvue/js/home-page.js *****/
(function() {
    var bannerVideo = $('.banner-video');
    var init = function() {
        var sources = bannerVideo.data('sources');
        if (typeof sources === 'object' && sources.constructor === Array && sources.length) {
            var createSource = function(src, type) {
                var source = document.createElement('source');
                source.src = src;
                source.type = type;
                return source;
            };
            for (var i = 0, l = sources.length; i < l; ++i) {
                var item = sources[i];
                bannerVideo.append(createSource(item.src, item.type));
            }
        }
    };
    var checkScreen = function() {
        var mediaQuery = window.matchMedia('(min-width:1024px)');
        if (mediaQuery.matches) {
            init();
            return true;
        }
        return false;
    };
    if (!checkScreen()) {
        var $window = $(window);
        $window.on('resize.banner-video', function() {
            if (checkScreen()) {
                $window.off('resize.banner-video');
            }
        });
    }
})();;