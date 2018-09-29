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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9oc18wLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ25iLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IG9oeWVvbnN1IG9uIDIwMTguIDkuIDQuLlxuICovXG5cbiQoZnVuY3Rpb24oKXtcblxuICAgIC8vJCgnYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAvLyAgICBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgIC8vICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy99KTtcblxuICAgIC8vcHJldmVudERlZmF1bHQgSUUg7JeQ7ISc66eM7J6R64+ZXG5cbiAgICAkKCcuZ25iLWxpc3QtaXRlbS1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xuXG4gICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XG5cbiAgICAgICAgdmFyIGhyZWYgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcbiAgICAgICAgdmFyIHNjcm9sbFBvc2l0aW9uID0gJChocmVmKS5vZmZzZXQoKS50b3A7XG5cbiAgICAgICAgJCgnYm9keSwgaHRtbCcpLnN0b3AoKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcCA6IHNjcm9sbFBvc2l0aW9uICsgLTgwICsgJ3B4J1xuICAgICAgICB9LCA1MDApO1xuXG4gICAgICAgIC8vLTgwIGZpeGVkIG5hdiBoZWlnaHQg66eM7YG8IOuCtOugpOykjFxuXG4gICAgfSk7XG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8vYW5pbWF0aW9uIOyiheujjCDtm4Qg7Iic7ISc64yA66GcIHRlc3RcblxuICAgIC8vdmFyIHRlc3R0ZXN0ID0gJCgnLnNraWxsID5kaXYnKTtcbiAgICAvL1xuICAgIC8vZm9yICggdmFyIGk9IDA7IGkgPCB0ZXN0dGVzdC5sZW5ndGg7IGkrKyApe1xuICAgIC8vICAgIC8vJCh0ZXN0dGVzdCkuZXEoMCkuYW5pbWF0ZSh7b3BhY2l0eToxfSwgZnVuY3Rpb24oKXtcbiAgICAvLyAgICAvLyAgICAkKHRlc3R0ZXN0KS5lcSgxKS5hbmltYXRlKHtvcGFjaXR5OjF9KTtcbiAgICAvLyAgICAvL30pO1xuICAgIC8vfVxuXG5cbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgLy9jb25zb2xlLmxvZyhzY3JvbGwgKyAncHgnKTtcbiAgICAgICAgY29uc29sZS5sb2coJCh3aW5kb3cpLnNjcm9sbFRvcCgpICsgJ3B4Jyk7XG5cbiAgICAgICAgdmFyIHNjcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAgICAgLy92YXIgc2NyZWVuSGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuICAgICAgICB2YXIgbWF4ID0gNTAwO1xuXG4gICAgICAgIC8vZWxlbWVudCBzY3JvbGwgaGVpZ2h07Lac66ClXG4gICAgICAgIC8vY29uc29sZS5sb2coJCh3aW5kb3cpLnNjcm9sbFRvcCgpICsgJ3B4Jyk7XG5cbiAgICAgICAgLy92YXIgdGFnTmFtZSA9ICQoJy52aXN1YWwtdGV4dC1pdGVtJykucGFyZW50cygnLnZpc3VhbCcpLnByb3AoJ3RhZ05hbWUnKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy92YXIgdmlzdWFsUHJldiA9ICQoJ2RpdiAudmlzdWFsLXRleHQnKS5wcmV2KCkucHJvcCgnY2xhc3NOYW1lJyk7XG5cbiAgICAgICAgJCgnLnRvcC1maXgnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgJCgnYm9keSwgaHRtbCcpLnN0b3AoKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3AgOiAwXG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiggc2Nyb2xsIDwgbWF4ICl7XG5cbiAgICAgICAgICAgICQoJy52aXN1YWwtdGV4dCcpLmNzcyh7XCJvcGFjaXR5XCI6KG1heC1zY3JvbGwpL21heH0pO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICQoJy52aXN1YWwtdGV4dCcpLmNzcyh7XCJvcGFjaXR5XCI6MH0pO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiggc2Nyb2xsID49IDgwICl7XG5cbiAgICAgICAgICAgICQoJy5oZWFkZXItd3JhcCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDonI2ZmZicsXG4gICAgICAgICAgICAgICAgaGVpZ2h0Oic4MHB4JyxcbiAgICAgICAgICAgICAgICAnYm94LXNoYWRvdyc6JzBweCAxNXB4IDEwcHggLTE1cHggIzg4OCcsXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjonYWxsIC41cyBlYXNlJ1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJy5sb2dvLWxpbmsnKS5jc3Moe1xuICAgICAgICAgICAgICAgIGNvbG9yOicjMDU0ZjVjJyxcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOidjb2xvciAuNXMgZWFzZS1vdXQnXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCgnLmduYi1saXN0LWl0ZW0tbGluaycpLmNzcyh7XG4gICAgICAgICAgICAgICAgY29sb3I6JyMwZDgwOTUnLFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246J2FsbCAuNXMgZWFzZS1vdXQnXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCgnLmduYi1idXR0b24+IHNwYW4nKS5jc3Moe1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6JyM2NjYnLFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246J2FsbCAuNXMgZWFzZS1vdXQnXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9IGVsc2UgaWYoIHNjcm9sbCA8IDgwICl7XG5cbiAgICAgICAgICAgICQoJy5oZWFkZXItd3JhcCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgLy9iYWNrZ3JvdW5kOidub25lJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MCxcbiAgICAgICAgICAgICAgICAnYm94LXNoYWRvdyc6J25vbmUnLFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246J2FsbCAuNXMgZWFzZSdcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCcubG9nby1saW5rJykuY3NzKHtcbiAgICAgICAgICAgICAgICBjb2xvcjonI2ZmZicsXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjonY29sb3IgLjVzIGVhc2Utb3V0J1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJy5nbmItbGlzdC1pdGVtLWxpbmsnKS5jc3Moe1xuICAgICAgICAgICAgICAgIGNvbG9yOicjZmZmJyxcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOidhbGwgLjVzIGVhc2Utb3V0J1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJy5nbmItYnV0dG9uPiBzcGFuJykuY3NzKHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOicjZmZmJyxcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOidhbGwgLjVzIGVhc2Utb3V0J1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiggc2Nyb2xsID49IDIwMCApe1xuXG4gICAgICAgICAgICAkKCcudmlzdWFsLXNoYXBlJykuY3NzKHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MCxcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOidoZWlnaHQgLjVzIGVhc2Utb3V0J1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJy5hYm91dC1zaGFwZScpLmNzcyh7XG4gICAgICAgICAgICAgICAgaGVpZ2h0Oic4MHB4JyxcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOidoZWlnaHQgLjVzIGVhc2Utb3V0J1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJy5tb3VzZScpLmNzcyh7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTowLFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246J29wYWNpdHkgLjVzIGVhc2Utb3V0J1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSBlbHNlIGlmKCBzY3JvbGwgPCAxNTAgKXtcblxuICAgICAgICAgICAgJCgnLnZpc3VhbC1zaGFwZScpLmNzcyh7XG4gICAgICAgICAgICAgICAgaGVpZ2h0Oic4MHB4JyxcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOidoZWlnaHQgLjVzIGVhc2Utb3V0J1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJy5hYm91dC1zaGFwZScpLmNzcyh7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OjAsXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjonaGVpZ2h0IC41cyBlYXNlLW91dCdcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCcubW91c2UnKS5jc3Moe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6MSxcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOidvcGFjaXR5IC41cyBlYXNlLW91dCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIHNjcm9sbCA+PSAyMjAgKXtcblxuICAgICAgICAgICAgJCgnLmFib3V0LXRpdGxlJykuY3NzKHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06J3RyYW5zbGF0ZSgwLDApJyxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OjEsXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjonYWxsIDFzIGVhc2UtaW4tb3V0J1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiggc2Nyb2xsID49IDgwMCApe1xuICAgICAgICAgICAgJCgnLnNraWxsLXRpdGxlJykuY3NzKHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06J3RyYW5zbGF0ZSgwLDApJyxcbiAgICAgICAgICAgICAgICBvcGFjaXR5Oi45LFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246J2FsbCAxcyBlYXNlLW91dCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIHNjcm9sbCA+PSA5MDAgKXtcblxuICAgICAgICAgICAgJCgnLnNraWxsLWxlZnQnKS5hZGRDbGFzcygnYm94LW1vdmUxJyk7XG4gICAgICAgICAgICAkKCcuc2tpbGwtcmlnaHQnKS5hZGRDbGFzcygnYm94LW1vdmUyJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiggc2Nyb2xsID49IDE3MDAgKXtcblxuICAgICAgICAgICAgJCgnLnBvcnRmb2xpby10aXRsZScpLmNzcyh7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOid0cmFuc2xhdGUoMCwwKScsXG4gICAgICAgICAgICAgICAgb3BhY2l0eToxLFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246J2FsbCAxcyBlYXNlLW91dCdcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2YXIgcGxpID0gJCgnLnBvcnRmb2xpby1saXN0LWl0ZW0nKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICAgICAgJChwbGkpLmVxKDApLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICB0b3A6MCxcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eToxXG4gICAgICAgICAgICAgICAgfSw0MDApO1xuICAgICAgICAgICAgfSwgMTAwKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICAgICAgJChwbGkpLmVxKDEpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICB0b3A6MCxcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eToxXG4gICAgICAgICAgICAgICAgfSw0MDApO1xuICAgICAgICAgICAgfSwgMzAwKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICAgICAgJChwbGkpLmVxKDIpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICB0b3A6MCxcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eToxXG4gICAgICAgICAgICAgICAgfSw0MDApO1xuICAgICAgICAgICAgfSwgNTAwKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICAgICAgJChwbGkpLmVxKDMpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICB0b3A6MCxcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eToxXG4gICAgICAgICAgICAgICAgfSw0MDApO1xuICAgICAgICAgICAgfSwgNzAwKTtcblxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICAgICAgICAvL3NldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICBmb3IoIHZhciBpID0gMDsgaTwgJChwbGkpLmxlbmd0aDsgaSsrICl7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgICAgICQocGxpKS5lcShpKS5hbmltYXRlKHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgdG9wOjAsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgIG9wYWNpdHk6MVxuICAgICAgICAgICAgLy8gICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gICAgfVxuICAgICAgICAgICAgLy99KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCBzY3JvbGwgPj0gMjAwMCApe1xuXG4gICAgICAgICAgICAkKCcuY29udGFjdC13cmFwJykuY3NzKHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OjEsXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjonb3BhY2l0eSAxcyBlYXNlLWluLW91dCdcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCcuY29udGFjdC10aXRsZScpLmNzcyh7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOid0cmFuc2xhdGUoMCwwKScsXG4gICAgICAgICAgICAgICAgb3BhY2l0eToxLFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246J2FsbCAxcyBlYXNlLW91dCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgdmFyIHBvcnRIb3ZlciA9ICQoJy5wb3J0Zm9saW8tbGlzdC1pdGVtJyk7XG5cbiAgICAkKHBvcnRIb3Zlcikub24oJ21vdXNlZW50ZXInLGZ1bmN0aW9uKCl7XG4gICAgICAgICQodGhpcykuY2hpbGRyZW4oJ2ltZycpLnRvZ2dsZUNsYXNzKCdpbWctaG92ZXInKTtcbiAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignLnB0LWJ0bicpLnRvZ2dsZUNsYXNzKCdidG4taG92ZXInKTtcbiAgICAgICAgJCgnLnB0LWJ0biA+YScpLnRvZ2dsZUNsYXNzKCdsaW5rLWhvdmVyJyk7XG4gICAgfSk7XG5cbiAgICAkKHBvcnRIb3Zlcikub24oJ21vdXNlbGVhdmUnLGZ1bmN0aW9uKCl7XG4gICAgICAgICQodGhpcykuY2hpbGRyZW4oJ2ltZycpLnRvZ2dsZUNsYXNzKCdpbWctaG92ZXInKTtcbiAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignLnB0LWJ0bicpLnRvZ2dsZUNsYXNzKCdidG4taG92ZXInKTtcbiAgICAgICAgJCgnLnB0LWJ0biA+YScpLnRvZ2dsZUNsYXNzKCdsaW5rLWhvdmVyJyk7XG4gICAgfSk7XG59KTsiXX0=
