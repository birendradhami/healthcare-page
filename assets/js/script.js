
$(document).ready(function () {

    // Healthcare Counter


    $(".counter").each(function() {
        var t = $(this);
        var a = $(this).attr("number_sign");
        jQuery({
            Counter: 0
        }).animate({
            Counter: t.attr("number")
        }, {
            duration: 600,
            easing: "swing",
            step: function() {
                t.find("h3").text(Math.ceil(this.Counter).toLocaleString("en") + a)
            }
        })
    });

    // Healthcare Premium

    $('#techno_tab[data-mouse="hover"] .nav-link').hover(function(t) {
        $(this).tab("show");
        var a = $(this).attr("data-target");
        $(a).addClass("active");
        $("#techno_tab .nav-link").removeClass("active");
        $(this).addClass("active")
    });
    $('button[data-toggle="pill"]').on("shown.bs.tab", function(t) {
        var a = $(t.relatedTarget).attr("data-target");
        $(a).removeClass("active")
    });

    jQuery("#techno_tab .nav-link").mouseenter(function() {
        jQuery(this).removeClass("hovercolor");
        jQuery(this).prevAll().addClass("hovercolor");
        jQuery(this).nextAll().removeClass("hovercolor")
    });

    if ($(window).width() <= 768) {
        $(".hlth_prm_sec .tab-content").slick({
            dots: true,
            infinite: true,
            arrows: false,
            autoplay: true,
            autoplayspeed: 1e3,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        })}


        // Healthcare Feature

        $('#techno_tab2[data-mouse="hover"] .nav-link').hover(function(t) {
            $(this).tab("show");
            var a = $(this).attr("data-target");
            $(a).addClass("active");
            $("#techno_tab2 .nav-link").removeClass("active");
            $(this).addClass("active")
        });

        $(".buty_solu_li").each(function() {
            $(this).click(function() {
                $(".buty_solu_li").removeClass("active");
                $(this).toggleClass("active").parent().siblings().removeClass("active");
                $(this).find(".buty_solu_cnt").slideToggle().parents(".buty_solu_li").siblings().find(".buty_solu_cnt").slideUp()
            })
        });

        // Healthcare Process

        if ($(window).width() < 1201) {
            $(".buty_salon_mn").slick({
                slidesToScroll: 1,
                arrows: false,
                dots: true,
                autoplay: true,
                autoplaySpeed: 2e3,
                infinite: true,
                loop: true,
                slidesToShow: 2,
                pauseOnHover: true,
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
            })
        }

});
