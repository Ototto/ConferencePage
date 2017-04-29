var HomeController = new function () {

    var navbarControl = new function () {
        $(window).scroll(function () {
            var screenHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 60;
            if ($(window).scrollTop() >= screenHeight) {
                $('.navbarBar').css({
                    'background-color': 'rgba(26, 26, 255, 0.9)',
                    'transition': '0.3s',
                });

                $('.navbarNavigationList').css({
                    'padding': '8px'
                });

                $('.site-logo').css({
                    'margin-top': '8px'
                });

            } else {
                $('.navbarBar, .navbarNavigationList, .site-logo').attr('style', '');
            }
        });
    }

    var closeMobileNavbar = function(){
        $('.navbarNavigation').attr('style', '');
    }

    var openMobileNavbar = function(){
        $('.navbarNavigation').css({
            'display': 'block'
        });
    }

    var mobileNavbarControl = function(){
        if ($('.navbarNavigation').css('display') == 'none') {
            openMobileNavbar();
        }
        else {
            closeMobileNavbar();
        }
    }

    var init = new function () {
        navbarControl;
        $('#menuBtn').click(mobileNavbarControl);
        $('.navigationLink').click(closeMobileNavbar);
    }

    return {
        init: init
    }
}()