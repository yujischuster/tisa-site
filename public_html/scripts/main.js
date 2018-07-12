//remove fade

$(function() {
    $('body').removeClass('fade-out');
});

//mobile menu

function openNav() {
    document.getElementById("mySidenav").style.width = "240px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

//carousel blur on scroll

$(window).on("scroll", function() {
    var pixs = $(document).scrollTop()
	pixs = pixs / 16;
    $(".carousel").css({"-webkit-filter": "blur("+pixs+"px)","filter": "blur("+pixs+"px)" }) 
});

//change color of header below carousel

if(screen.width < 1024) {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var os = $('.carousel').offset().top;
        var ht = $('.carousel').height();
        if(scroll > os + ht - 75) {
            $('header').addClass('white');
            $('#title-white').css('display','none');
            $('#title-navy').css('display','block');
            $('#logo-white').css('display','none');
            $('#logo-navy').css('display','block');
            $('#menu-icon').css('display','none');
            $('#menu-icon-navy').css('display','block');
        }
        if(scroll < os + ht - 75) {
            $('header').removeClass('white');
            $('#title-white').css('display', 'block');
            $('#title-navy').css('display', 'none');
            $('#logo-white').css('display','block');
            $('#logo-navy').css('display','none');
            $('#menu-icon').css('display','block');
            $('#menu-icon-navy').css('display','none');
        }
    }
)};

if(screen.width >= 1024) {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var os = $('.carousel').offset().top;
        var ht = $('.carousel').height();
        if(scroll > os + ht - 115) {
            $('header').addClass('white');
            $('#title-white').css('display','none');
            $('#title-navy').css('display','block');
            $('.nav-list').addClass('navy');
            $('#logo-white').css('display','none');
            $('#logo-navy').css('display','block');
        }
        if(scroll < os + ht - 115) {
            $('header').removeClass('white');
            $('#title-white').css('display','block');
            $('#title-navy').css('display','none');
            $('.nav-list').removeClass('navy');
            $('#logo-white').css('display','block');
            $('#logo-navy').css('display','none');
        }
    }
)};