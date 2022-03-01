// 自行加入的JS請寫在這裡
$(function() {
    //sticky sidebar
    if ($('.stickySidebar').length > 0) {
        var stickySidebar = new StickySidebar('.stickySidebar', {
            containerSelector: '.main',
            topSpacing: 93,
            bottomSpacing: 0,
            minWidth: 768,
            resizeSensor: true,
        });
    }
    // 首頁輪播
    $('.mpSlider').slick({
        mobileFirst: true,
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        fade: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        customPaging: function(slider, i) {
            var title = $(slider.$slides[i]).find('img').attr('alt').trim();
            return $('<button type="button" aria-label="' + title + '"/>').text(title);
        },
    });
    // 廣告輪播
    $('.adSlider').slick({
        mobileFirst: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrow: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                arrows: true,
            },
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true,
            },
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true,
            },
        }, ],
    });
    //燈箱slick+lightBox組合
    $('.cp_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        pauseOnFocus: true,
        focusOnSelect: true,
        accessibility: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
            },
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            },
        }, ],
    });
    $('.cp_slider').slickLightbox({
        caption: 'caption',
        lazyLoad: 'ondemand',
        useHistoryApi: 'true',
        ease: 'ease',
        lazy: true,
    });
    //
    $('.cppic_slider').slick({
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        // pauseOnHover: true,
        // pauseOnFocus: true,
        // focusOnSelect: true,
        // accessibility: true,
        // lazyLoad: 'ondemand',
        // ease: 'ease',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
            },
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            },
        }, ],
    });
    // cp_photo
    $('.Slider-for').on('init reInit afterChange', function(event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.controls').html(i + '/' + slick.slideCount);
    });
    $('.Slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        swipe: false,
        swipeToSlide: false,
        lazyLoad: 'ondemand',
        asNavFor: '.Slider-nav',
        infinite: true,
    });
    $('.Slider-nav').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.Slider-for',
        dots: true,
        arrows: true,
        lazyLoad: 'ondemand',
        focusOnSelect: true,
        infinite: true,
    });
    // 圖片輪播圖變大
    var $carousel = $('.mpSlider2').slick({
        mobileFirst: true,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 0,
        autoplaySpeed: 8000,
        autoplay: true,
        fade: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        pauseOnHover: false
    });
    /* The first slide will not get the animation,
    therefore I add and remove a class that will trigger the css animation */
    $carousel.find('.slick-current').addClass('start');
    /* I use a set-timeoutfunction to hinder optimization
    of adding and removing classes */
    setTimeout(function() {
        $carousel.find('.start').removeClass('start');
    }, 0)
    // megamenu 各國合作計畫
    $('.megamenu .countrylist:nth-of-type(1)').show();
    $('.megamenu .countryarea li:first-child').mouseover(function() {
        $('.megamenu .countrylist').hide();
        $('.megamenu .countrylist:nth-of-type(1)').show();
    })
    $('.megamenu .countryarea li:nth-child(2)').mouseover(function() {
        $('.megamenu .countrylist').hide();
        $('.megamenu .countrylist:nth-of-type(2)').show();
    })
    $('.megamenu .countryarea li:nth-child(3)').mouseover(function() {
        $('.megamenu .countrylist').hide();
        $('.megamenu .countrylist:nth-of-type(3)').show();
    })
    $('.megamenu .countryarea li:nth-child(4)').mouseover(function() {
        $('.megamenu .countrylist').hide();
        $('.megamenu .countrylist:nth-of-type(4)').show();
    })
    $('.megamenu .countryarea li:nth-child(5)').mouseover(function() {
        $('.megamenu .countrylist').hide();
        $('.megamenu .countrylist:nth-of-type(5)').show();
    })
    $('.megamenu .countryarea li:nth-child(6)').mouseover(function() {
        $('.megamenu .countrylist').hide();
        $('.megamenu .countrylist:nth-of-type(6)').show();
    })
    $('.megamenu .countryarea li:nth-child(7)').mouseover(function() {
        $('.megamenu .countrylist').hide();
        $('.megamenu .countrylist:nth-of-type(7)').show();
    })
    // 首頁固定側邊區塊選單
    var _sidebargroup2 = $('.fixed_sidebar_group')
    _sidebargroup2.children('ul').children('li').find('a').each(function(index, el) {
        $(this).bind('click', function() {
            var num = $(this).parent('li').index() + 1;
            //先抓每一個li的序列，index從0開始，所以要+1
            $('body,html').stop(true, true).animate({
                scrollTop: $('.s_' + num).offset().top
            }, 0, 'easeOutExpo');
            //移動body scrollTop，做動畫，去取對應的section序列設定為offset=0，把該section推到最頂端
            return false;
        });
    });
    _sidebargroup2.children('ul').children('li').find('a').click(function() {
        $(this).addClass('active');
        $(this).parent().siblings('li').children('a').removeClass('active');
    })
    _sidebargroup2.children('ul').children('li').find('a').focus(function() {
        _sidebargroup2.addClass('open');
    });
    _sidebargroup2.mouseout(function() {
        _sidebargroup2.removeClass('open');
    });
    _sidebargroup2.children('ul').find('li:last>a').focusout(function() {
        _sidebargroup2.removeClass('open');
    });
    $(window).scroll(function() {
        $(".fixed_sidebar_group li a").removeClass("active");
        let indexObj = $(".mpblock[class*=s_]").filter((k, v) => {
            return $(window).scrollTop() >= $(v).offset().top;
        }).last();
        let index = $(".mpblock[class*=s_]").index(indexObj);
        if (index > -1) {
            $(".fixed_sidebar_group li").eq(index).find("a").addClass("active");
        }
    });
    // 優先領域
    $('.themes_slider_block').slick({
        centerMode: true,
        centerPadding: '350px',
        slidesToShow: 1,
        arrows: true,
        dots: true,
        autoplay: true, //自動播放
        infinite: true,
        autoplaySpeed: 8000,
        responsive: [{
            breakpoint: 1600,
            settings: {
                centerMode: true,
                centerPadding: '250px',
                slidesToShow: 1
            }
        }, {
            breakpoint: 1400,
            settings: {
                centerMode: true,
                centerPadding: '200px',
                slidesToShow: 1
            }
        }, {
            breakpoint: 1200,
            settings: {
                centerMode: true,
                centerPadding: '150px',
                slidesToShow: 1
            }
        }, {
            breakpoint: 992,
            settings: {
                centerMode: true,
                centerPadding: '80px',
                slidesToShow: 1
            }
        }, {
            breakpoint: 767,
            settings: {
                centerMode: true,
                centerPadding: '30px',
                slidesToShow: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                centerMode: true,
                centerPadding: '10px',
                slidesToShow: 1
            }
        }]
    });
    // 合作計畫
    var _optionsbtn = $('.exploremap_group .exploremap_btn .contentbtn');
    _optionsbtn.find('.partner').find('a').addClass('active');
    $('.tool').click(function() {
        $('.partner').find('a').removeClass('active');
        $(this).find('a').addClass('active');
        $('.switchbtn').addClass('right');
        $('.partner_block').hide();
        $('.tool_block').show();
    })
    $('.partner').click(function() {
        $('.tool').find('a').removeClass('active');
        $(this).find('a').addClass('active');
        $('.switchbtn').removeClass('right');
        $('.tool_block').hide();
        $('.partner_block').show();
    })
    // 夥伴區塊
    var _partnerbtn = $('.partner_block .partner_list button.select');
    _partnerbtn.click(function() {
        $(this).toggleClass('check');
        $(this).parent('.partner_list').toggleClass('active');
        //$(this).parent().siblings('.partner_list').find('button.select').removeClass('check');
        //$(this).parent().siblings('.partner_list').removeClass('active');
    })
    // 工具區塊
    var _partnerbtn = $('.tool_block .tool_list button.select');
    _partnerbtn.click(function() {
        $(this).toggleClass('check');
        $(this).parent('.tool_list').toggleClass('active');
        $(this).parent().siblings('.tool_list').find('button.select').removeClass('check');
        $(this).parent().siblings('.tool_list').removeClass('active');
        $('.worldmap > div').removeClass('hidden').toggleClass('hidden');
    })
    // 探索地圖中間鈕
    var _switchbtn = $('.exploremap_btn .contentbtn .switchbtn')
    _switchbtn.click(function() {
        var partnerbtn = $('.partner_block .partner_list button.select');
        partnerbtn.parent().siblings('.partner_list').find('button.select').removeClass('check');
        partnerbtn.parent().siblings('.partner_list').removeClass('active');
        partnerbtn = $('.tool_block .tool_list button.select');
        partnerbtn.parent().siblings('.tool_list').find('button.select').removeClass('check');
        partnerbtn.parent().siblings('.tool_list').removeClass('active');
        $('.worldmap > div').removeClass('hidden').toggleClass('hidden');
        if (_switchbtn.hasClass("right")) {
            $('.tool').find('a').removeClass('active');
            $('.partner').find('a').addClass('active');
            $('.switchbtn').removeClass('right');
            $('.tool_block').hide();
            $('.partner_block').show();
        } else {
            $('.partner').find('a').removeClass('active');
            $('.tool').find('a').addClass('active');
            $('.switchbtn').addClass('right');
            $('.partner_block').hide();
            $('.tool_block').show();
        }
    })
    // 工具區塊hover
    $('.tool_list').mouseover(function() {
        $(this).find('.introduction').stop().fadeIn();
    })
    $('.tool_list').mouseout(function() {
        $(this).find('.introduction').stop().fadeOut();
    })
    // link輪播
    $('.linksilder_list').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    // EXPLORE滑到新聞與活動區塊
    $('.explore_block').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $('.news_activities_block').offset().top }, 0, 'linear');
    });
    // 相關計畫區塊
    $('.plansilder').slick({
        dots: false,
        infinite: false,
        autoplay: false,
        arrows: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
    // 相關最新消息
    $('.relatednews_silder').slick({
        dots: false,
        infinite: false,
        autoplay: false,
        arrows: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    // 相關社群動態
    $('.social_networks_silder').slick({
        dots: false,
        infinite: false,
        autoplay: false,
        arrows: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    // 相關最新消息
    $('.relatedpic_silder').slick({
        dots: false,
        infinite: false,
        autoplay: false,
        arrows: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    // videos
    $('.videos_silder').slick({
        dots: false,
        infinite: false,
        autoplay: false,
        arrows: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    // 活動按鈕
    $('.activitybutton_list').slick({
        dots: false,
        infinite: false,
        autoplay: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
    // 主持人講者
    $('.speaker_silder').slick({
        dots: false,
        infinite: false,
        autoplay: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1250,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 850,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
    // 推動工具
    $('.toolsexplain_group').slick({
        autoplay: false,
        infinite: false,
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    $('.toolsexplain_group').on('afterChange', function(event, slick, currentSlide, nextSlide) {
        var currentSlide = $('.toolsexplain_group').slick('slickCurrentSlide');
        for (let i = 0; i < 4; i++) {
            var itemName = "#tool_" + i;
            if (i == Number(currentSlide)) {
                $(itemName).attr("class", "checked");
            } else {
                $(itemName).attr("class", "");
            }
        }
    });
    // 合作模式
    // 相關最新消息
    $('.cooperation_silder').slick({
        dots: false,
        infinite: false,
        autoplay: false,
        arrows: true,
        autoplaySpeed: 3000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1300,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
    //募款計畫
    $('.fundraising_plan_silder').slick({
        autoplay: false,
        infinite: false,
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    // svg
});
// 影片燈箱
$(function() {
    $('.mpSlider2 .img-container .movie').click(function() {
        $('.movie_lightbox').fadeIn();
        $('body').addClass('noscroll');
    })
    $('.movie_lightbox .close').click(function() {
        $('.movie_lightbox').fadeOut();
        $('body').removeClass('noscroll');
    })
    $('.movie_lightbox .overlay').click(function() {
        $('.movie_lightbox').fadeOut();
        $('body').removeClass('noscroll');
    })
})
// 影音專區燈箱
$(function() {
    $('.movie_block .movie_group .movie_list .image.movie').click(function() {
        $('.movie_lightbox').fadeIn();
        $('body').addClass('noscroll');
    })
    $('.movie_lightbox .close').click(function() {
        $('.movie_lightbox').fadeOut();
        $('body').removeClass('noscroll');
    })
    $('.movie_lightbox .overlay').click(function() {
        $('.movie_lightbox').fadeOut();
        $('body').removeClass('noscroll');
    })
})
// 國家頁面燈箱
$(function() {
    $('.community_block .youtube_block a.movie').click(function() {
        $('.movie_lightbox').fadeIn();
        $('body').addClass('noscroll');
    })
    $('.movie_lightbox .close').click(function() {
        $('.movie_lightbox').fadeOut();
        $('body').removeClass('noscroll');
    })
    $('.movie_lightbox .overlay').click(function() {
        $('.movie_lightbox').fadeOut();
        $('body').removeClass('noscroll');
    })
})
// 人才公告 videos燈箱
$(function() {
    $('.videos_block .videos_item a.movie').click(function() {
        $('.movie_lightbox').fadeIn();
        $('body').addClass('noscroll');
    })
    $('.movie_lightbox .close').click(function() {
        $('.movie_lightbox').fadeOut();
        $('body').removeClass('noscroll');
    })
    $('.movie_lightbox .overlay').click(function() {
        $('.movie_lightbox').fadeOut();
        $('body').removeClass('noscroll');
    })
})
// 條件查詢燈箱
$(function() {
    $('.function_panel a.condition_btn').click(function() {
        $('.search_lightbox').fadeIn();
        $('body').addClass('noscroll');
    })
    $('.search_lightbox .close').click(function() {
        $('.search_lightbox').fadeOut();
        $('body').removeClass('noscroll');
    })
    $('.search_lightbox .overlay').click(function() {
        $('.search_lightbox').fadeOut();
        $('body').removeClass('noscroll');
    })
})
// 條件查詢燈箱
$(function() {
    $('.calendar ').click(function() {
        $('.activitycalendar_lightbox').fadeIn();
        $('body').addClass('noscroll');
    })
    $('.activitycalendar_lightbox .close').click(function() {
        $('.activitycalendar_lightbox').fadeOut();
        $('body').removeClass('noscroll');
    })
    $('.activitycalendar_lightbox .overlay').click(function() {
        $('.activitycalendar_lightbox').fadeOut();
        $('body').removeClass('noscroll');
    })
})
// 活動資料按鈕
$(function() {
    $('.activitybutton ').click(function() {
        $('.activitydata_lightbox').fadeIn();
        $('body').addClass('noscroll');
    })
    $('.activitydata_lightbox .close').click(function() {
        $('.activitydata_lightbox').fadeOut();
        $('body').removeClass('noscroll');
    })
    $('.activitydata_lightbox .overlay').click(function() {
        $('.activitydata_lightbox').fadeOut();
        $('body').removeClass('noscroll');
    })
})
// 當內容頁上方沒有function_panel時
$(function() {
    $(".breadcrumb:only-child").css("margin-bottom", "3em");
})
// 招募流程
$(function() {
    $('.recruitment_list .jobprocess>a').click(function() {
        $(this).parents('.recruitment_list').addClass('open');
        $(this).parents('.recruitment_list').siblings('.recruitment_list').removeClass('open');
    })
})
// 優先領域介紹
$(function() {
    $('.priorityareas_list .jobprocess>a').click(function() {
        $(this).parents('.priorityareas_list').addClass('open');
        $(this).parents('.priorityareas_list').siblings('.priorityareas_list').removeClass('open');
    })
})
// 活動查詢區塊
$(function() {
    $('.activity_search_group .activity_search_btn>a').click(function() {
        $(this).stop().toggleClass('open');
        $('.activity_search_content').stop().slideToggle();
    })
})
// 讀者介紹連結
$(function() {
    $('.speaker_link').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $('.speaker_block').offset().top - 70 }, 0, 'easeOutExpo');
    });
})
// 各處室執掌
$(function() {
    var _inchargebtn = $('.incharge_group .incharge_list .incharge_title');
    _inchargebtn.click(function() {
        $(this).next('.content').stop().slideDown();
        $(this).addClass('open');
        $(this).parent().siblings().children('.incharge_title').removeClass('open');
        $(this).parent().siblings().find('.content').stop().slideUp();
    })
})
// 推動工具
$(function() {
    var _toolslistbtn = $('.business_tools_content .tools_leftblock .tools_list ul li a');
    _toolslistbtn.click(function() {
        $(this).stop().addClass('checked');
        $(this).parent().siblings('li').children('a').removeClass('checked');
    })
})
// 募款夥伴
$(function() {
    var _partnerbtn = $('.fundraising_partner_group .partner_list .years_title a');
    _partnerbtn.click(function() {
        $(this).stop().addClass('open');
        $(this).parent().siblings('.content').stop().slideDown();
        $(this).parents().siblings('.partner_list').children('.years_title').find('a').removeClass('open');
        $(this).parents().siblings('.partner_list').find('.content').stop().slideUp();
    })
})