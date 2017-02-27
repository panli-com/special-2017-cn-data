;
(function() {



    $(function() {

        $(".floor-nav-u li").on("click", function() {
            var _t = $(this),
                _tf = _t.attr("floor");
            var _afloTop = $("#floor-" + _tf).offset().top;
            $('body,html').animate({ scrollTop: _afloTop -90 }, 300);
        });

        // $(".back-top").on("click", function() {
        //     $('body,html').animate({ scrollTop: 0 }, 300);
        // });

        floorNnav();
        

        //  $(".gotofloor").on("click", function() {
        //     var _t = $(this),
        //         _tf = _t.attr("data-el");
        //     var _afloTop = $("#" + _tf).offset().top;
        //     $('body,html').animate({ scrollTop: _afloTop }, 300);
        // });




    });


    $(window).resize(function() {
        floorNnav();
    })


    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        $('.floor-nav')[scrollTop > 400 ? 'show' : 'hide']();

    });


})();
function floorNnav() {
    var winW = $(window).width(),
        mainOfL = $(".sp-header").offset().left;
    var navW = $('.floor-nav').width();
    if (winW >= 1444) {
        var oFright = mainOfL - navW - 15;

        $('.floor-nav').css("left", oFright)
    } else {
        $('.floor-nav').css({ "left": '10px', right: '' });
    }
}