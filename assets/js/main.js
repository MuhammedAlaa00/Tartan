$(function() {
    $('header').height($(window).height());
    $(window).scroll(function() {
        if ($(this).scrollTop() > 70) {
            $('.navbar').addClass('fixed');
        } else {
            $('.navbar').removeClass('fixed')
        }
    });
    $('.navbar .nav-link').click(function() {
        $('html , body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 60
        }, 1000);
    });
    if ($('.navbar').length) {
        $(window).on('scroll', function() {
            var scrollPos = $(window).scrollTop();
            $('.navbar .nav-link').each(function() {
                var currLink = $(this);
                var refElement = $(currLink.attr('href'));
                if (refElement.offset().top - 90 <= scrollPos) {
                    $('.navbar .nav-item').removeClass('active');
                    currLink.closest('.navbar .nav-item').addClass("active");
                }
            });
        });
    };
    $('.dropDown').click(function() {
        $('.drop').slideToggle(500)
    });
    $('.drop_slide').click(function() {
        $('.drop').slideUp(500)
    });
    $('.navbar .nav-item').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
    });
    $('.header_head').each(function() {
        $(this).css('padding-top', ($('header').height() - $('.header_head').height()) / 6);
    });
    /* rating function */
    $(function() {
        var rateYo = $(".rate_stars").rateYo({
            starWidth: "35px",
            normalFill: "#0000009e",
            ratedFill: "#27AE60",
            readOnly: true
        });
        $(".rate_stars").click(function() {
            /* get rating */
            var rating = rateYo.rateYo("rating");
            $('.hidden_box').val(rating);
            console.log(rating);

        });
    });
    /* rating function */
    /* gallery images filter function */
    $(".Show").click(function(e) {
        e.preventDefault();
        var item = $('.list-stadium ul .active').attr('data-filter');
        if (item == "all") {
            $(".mix:hidden").slice(0, 3).slideDown();
            $('html,body').animate({
                scrollTop: $(this).offset().top - 400
            }, 1000);
        } else {
            $("." + item + ":hidden").slice(0, 3).slideDown();
            $('html,body').animate({
                scrollTop: $(this).offset().top - 400
            }, 1000);
        }
    });
    $(".list-stadium ul .filter").click(function() {
        $('.list-stadium ul li').removeClass('active');
        $(this).addClass('active');
        var value = $(this).attr('data-filter');
        if (value == "all") {
            $(".mix").hide();
            $(".mix").slice(0, 6).fadeToggle(1000);
        } else {
            $(".mix").hide();
            $('.mix').filter('.' + value).slice(0, 6).fadeToggle(1000);
            if ($('.mix').filter('.' + value).length <= 5) {
                $(".Show").hide(1000);
            } else {
                $(".Show").show(1000);
            }
        }
    });
    /* gallery images filter function */
    $('.search_btn').click(function() {
        // get the time picker format
        console.log($('.datepicker-here').val());
        // get the city value
        $('select.city').children('option').attr('selected')
        var selectedCity = $('select.city').children("option:selected").val();
        console.log(`you have selected ${selectedCity}`)
            // get the hours value
        $('select.hours').children('option').attr('selected')
        var selectedHours = $('select.hours').children("option:selected").val();
        console.log(`you have selected ${selectedHours}`)
    });
    /*
    $("select.hours , select.city").change(function() {
        $(this).children('option').attr('selected')
        var selectedCountry = $(this).children("option:selected").val();
        console.log(`you have selected ${selectedCountry}`)
    });
*/
});
/*
// Initialize and add the map
function initMap() {
    // The location of Uluru
    var uluru = {
        lat: -25.344,
        lng: 131.036
    };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 4,
            center: uluru
        });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
*/