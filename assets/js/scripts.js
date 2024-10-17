	

$(document).ready(function() {
    $(".blogCommentsScroll").click(function(){
        $(this).toggleClass("blogCommentsScroll2");
        $(".show-hide-cmnt-box").slideToggle();
    })
    $(".accHdr").click(function(){
        $(this).toggleClass("active");
        $(this).nextAll(".accParaBox").eq(0).slideToggle();
    })
    $(".exprRow").click(function(){
        $(this).toggleClass("active");
        $(this).nextAll(".exprRow").removeClass("active");
        $(this).prevAll(".exprRow").removeClass("active");
        // $(this).nextAll(".whyAcc").eq(0).toggleClass("active");
    })
    $('.dark-btn').click(function() {
        $('body').addClass('dark');
        localStorage.setItem('darkClass', 'true');
    });
    $('.light-btn').click(function() {
        $('body').removeClass('dark');
        localStorage.removeItem('darkClass');
    });
	if (localStorage.getItem('darkClass') === 'true'){
		$('body').addClass('dark');
	}
	// language toggle
    if(document.dir == "ltr"){
        $('.language_toggle_en').addClass("d-none");
        $('.language_toggle_ar').addClass("d-flex");
    }
    if(document.dir == "rtl"){
        $('.language_toggle_ar').addClass("d-none");
        $('.language_toggle_en').addClass("d-flex");
    }
    $('.language_toggle_en').click(function () {
        $('html').attr('dir', 'ltr');
        $('body').addClass('ltr');
        $('body').removeClass('rtl');
        $('.language_toggle_ar').removeClass("d-none");
        $('.language_toggle_en').addClass("d-none");
		localStorage.setItem('ltr', 'true');
    })
    $('.language_toggle_ar').click(function () {
        $('html').attr('dir', 'rtl');
        $('body').addClass('rtl');
        $('body').removeClass('ltr');
        $('.language_toggle_en').removeClass("d-none");
        $('.language_toggle_ar').addClass("d-none");
        localStorage.removeItem('ltr');
    })
    if (localStorage.getItem('ltr') === 'true') {
        $('.language_toggle_en').addClass("d-none");
        $('.language_toggle_ar').removeClass("d-none");
        $('body').addClass('ltr');
        $('body').removeClass('rtl');
        $('html').attr('dir', 'ltr');
    }
    // language toggle
    $(".navlist_btn").click(function(){
        $(".navList").toggleClass("active")
    });
    $(".navClose").click(function(){
        $(".navList").toggleClass("active")
    });
    var swiper = new Swiper(".servicesSlider", {
        slidesPerView:5,
        navigation:true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints:{
            0: {
              slidesPerView: 2,
            },
            540: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            }
        }
    });
    var swiper1 = new Swiper(".lawyer-for-mobile", {
        slidesPerView:1,
        navigation:true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    var swiper2 = new Swiper(".newsWrapper-for-mobile", {
        slidesPerView:1,
        navigation:true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    var swiper3 = new Swiper(".blogSliderInner", {
        slidesPerView:5,
        navigation:false,
        pagination: {
            el: ".swiper-pagination",
            clickable:true
        },
        breakpoints:{
            0: {
            slidesPerView: 1,
            },
            540: {
            slidesPerView: 2,
            },
            768: {
            slidesPerView: 3,
            },
            1024: {
            slidesPerView: 2,
            },
            1400: {
                slidesPerView: 4,
            }
        }
    });
});


		