var HomeController = new function () {

    var navbarControl = new function(){
        $(window).scroll(function () {
            var screenHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 60;
            if ($(window).scrollTop() >= screenHeight) {
                $('.navbarBar').css({
                    'background-color': 'rgba(26, 26, 255, 0.9)',
                    'transition' : '0.3s',       
                });

                $('.navbarNavigation').css({
                     'padding' : '8px'
                });

                $('.site-logo').css({
                     'margin-top' : '8px'
                });

            } else {
                $('.navbarBar, .navbarNavigation, .site-logo').attr('style', '');
            }
        });
    }

    
    var init = new function () {
        navbarControl;
        $(window).resize(function() {
            $('.entry-page').height($(window).height() + 60)
        });
    }

    return {
        init: init
    }
}