/**
 * Created by ohyeonsu on 2018. 9. 4..
 */

$(function(){

    //$('a').on('click', function(event){
    //    event.returnValue = false;
    //    event.preventDefault();
    //});

    //preventDefault IE 에서만작동

    $('.gnb-list-item-link').on('click', function(event){

        event.returnValue = false;

        var href = $(this).attr('href');
        var scrollPosition = $(href).offset().top;

        $('body, html').stop().animate({
            scrollTop : scrollPosition + -80 + 'px'
        }, 500);

        //-80 fixed nav height 만큼 내려줌

    });
    //------------------------------------

    //animation 종료 후 순서대로 test

    //var testtest = $('.skill >div');
    //
    //for ( var i= 0; i < testtest.length; i++ ){
    //    //$(testtest).eq(0).animate({opacity:1}, function(){
    //    //    $(testtest).eq(1).animate({opacity:1});
    //    //});
    //}


    $(window).scroll(function(){

        //console.log(scroll + 'px');
        console.log($(window).scrollTop() + 'px');

        var scroll = $(window).scrollTop();
        //var screenHeight = $(window).height();
        var max = 500;

        //element scroll height출력
        //console.log($(window).scrollTop() + 'px');

        //var tagName = $('.visual-text-item').parents('.visual').prop('tagName');
        //
        //var visualPrev = $('div .visual-text').prev().prop('className');

        $('.top-fix').on('click', function(){
            $('body, html').stop().animate({
                scrollTop : 0
            }, 500);
        });

        if( scroll < max ){

            $('.visual-text').css({"opacity":(max-scroll)/max});

        } else {

            $('.visual-text').css({"opacity":0});

        }

        if( scroll >= 80 ){

            $('.header-wrap').css({
                background:'#fff',
                height:'80px',
                'box-shadow':'0px 15px 10px -15px #888',
                transition:'all .5s ease'
            });

            $('.logo-link').css({
                color:'#054f5c',
                transition:'color .5s ease-out'
            });

            $('.gnb-list-item-link').css({
                color:'#0d8095',
                transition:'all .5s ease-out'
            });

            $('.gnb-button> span').css({
                background:'#666',
                transition:'all .5s ease-out'
            });

        } else if( scroll < 80 ){

            $('.header-wrap').css({
                //background:'none',
                height:0,
                'box-shadow':'none',
                transition:'all .5s ease'
            });

            $('.logo-link').css({
                color:'#fff',
                transition:'color .5s ease-out'
            });

            $('.gnb-list-item-link').css({
                color:'#fff',
                transition:'all .5s ease-out'
            });

            $('.gnb-button> span').css({
                background:'#fff',
                transition:'all .5s ease-out'
            });
        }

        if( scroll >= 200 ){

            $('.visual-shape').css({
                height:0,
                transition:'height .5s ease-out'
            });

            $('.about-shape').css({
                height:'80px',
                transition:'height .5s ease-out'
            });

            $('.mouse').css({
                opacity:0,
                transition:'opacity .5s ease-out'
            });

        } else if( scroll < 150 ){

            $('.visual-shape').css({
                height:'80px',
                transition:'height .5s ease-out'
            });

            $('.about-shape').css({
                height:0,
                transition:'height .5s ease-out'
            });

            $('.mouse').css({
                opacity:1,
                transition:'opacity .5s ease-out'
            });
        }

        if( scroll >= 220 ){

            $('.about-title').css({
                transform:'translate(0,0)',
                opacity:1,
                transition:'all 1s ease-in-out'
            });
        }

        if( scroll >= 800 ){
            $('.skill-title').css({
                transform:'translate(0,0)',
                opacity:.9,
                transition:'all 1s ease-out'
            });
        }

        if( scroll >= 900 ){

            $('.skill-left').addClass('box-move1');
            $('.skill-right').addClass('box-move2');
        }

        if( scroll >= 1700 ){

            $('.portfolio-title').css({
                transform:'translate(0,0)',
                opacity:1,
                transition:'all 1s ease-out'
            });

            var pli = $('.portfolio-list-item');

            setTimeout(function(){

                $(pli).eq(0).animate({
                    top:0,
                    opacity:1
                },400);
            }, 100);

            setTimeout(function(){

                $(pli).eq(1).animate({
                    top:0,
                    opacity:1
                },400);
            }, 300);

            setTimeout(function(){

                $(pli).eq(2).animate({
                    top:0,
                    opacity:1
                },400);
            }, 500);

            setTimeout(function(){

                $(pli).eq(3).animate({
                    top:0,
                    opacity:1
                },400);
            }, 700);

            //-----------------------------------

            //setTimeout(function(){
            //
            //    for( var i = 0; i< $(pli).length; i++ ){
            //
            //        $(pli).eq(i).animate({
            //            top:0,
            //            opacity:1
            //        });
            //    }
            //});
        }

        if( scroll >= 2000 ){

            $('.contact-wrap').css({
                opacity:1,
                transition:'opacity 1s ease-in-out'
            });

            $('.contact-title').css({
                transform:'translate(0,0)',
                opacity:1,
                transition:'all 1s ease-out'
            });
        }
    });

    //------------------------------------------------

    var portHover = $('.portfolio-list-item');

    $(portHover).on('mouseenter',function(){
        $(this).children('img').toggleClass('img-hover');
        $(this).children('.pt-btn').toggleClass('btn-hover');
        $('.pt-btn >a').toggleClass('link-hover');
    });

    $(portHover).on('mouseleave',function(){
        $(this).children('img').toggleClass('img-hover');
        $(this).children('.pt-btn').toggleClass('btn-hover');
        $('.pt-btn >a').toggleClass('link-hover');
    });
});