var HomeController = new function () {

    var navbarControl = new function () {
        $(window).scroll(function () {
            var screenHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 60;
            if ($(window).scrollTop() >= screenHeight) {
                $('.navbarBar').css({
                    'background-color': 'rgba(170, 0, 0, 0.9)',
                    'transition': '0.3s',
                });

                $('.navbarNavigationList').css({
                    'padding': '8px'
                });

                $('.site-logo').css({
                    'margin-top': '5px'
                });

            } else {
                $('.navbarBar, .navbarNavigationList, .site-logo').attr('style', '');
            }
        });
    }

    var closeMobileNavbar = function () {
        $('.navbarNavigation').attr('style', '');
    }

    var openMobileNavbar = function () {
        $('.navbarNavigation').css({
            'display': 'block'
        });
    }

    var mobileNavbarControl = function () {
        if ($('.navbarNavigation').css('display') == 'none') {
            openMobileNavbar();
        }
        else {
            closeMobileNavbar();
        }
    }

    var smoothScroll = function () {
        console.log(this);
        console.log(event);
        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                window.location.hash = hash;
            });
        }
    }

    var isElementOnScreen = function (element) {
        var pageTop = $(window).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).height();

        return (elementTop <= pageBottom);
    }

    var init = new function () {
        navbarControl;
        $('#menuBtn').click(mobileNavbarControl);
        $('.navigationLink').click(closeMobileNavbar);

        $('.prelegentModal').on('show.bs.modal', function (e) {
            $('#modalName').text($(e.relatedTarget).attr('data-name'));
            $('#modalDesc').text($(e.relatedTarget).attr('data-desc'));
        });

        $(".navbarNavigationList a").on('click', smoothScroll);

        // $(window).scroll(function() {
        //     var className = "animated slideInUp";
        //     if(isElementOnScreen($('section')) && !$('section').hasClass(className))
        //     {
        //         $('section').toggleClass(className);
        //     }
        // });
        
    }

    return {
        init: init
    }
}()