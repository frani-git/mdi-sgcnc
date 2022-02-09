$(document).ready(function () {


    try {

        // 통계 슬라이드 옵션
        var statisticsSwiperOptions = {
            loop: true,
            slidesPerView: 1,
            speed: 750,
            observer: true,
            observeParents: true,
            simulateTouch: false,
            spaceBetween: 100,
            autoplay: {
                delay: 3000,
            },
            navigation: {
                nextEl: '.next',
                prevEl: '.prev'
            },
            pagination: {
                el: '.pagination',
                clickable: true,
                bulletClass: 'custom-bullets',
                bulletActiveClass: 'custom-bullets-active'
            }
        };

        // 통계 슬라이드 스와이퍼 슬라이드
        var statisticsSwiper = new Swiper('.statistics-swiper', statisticsSwiperOptions);


         // 메인 응급상황 슬라이드
         var emergencySwiperOptions = {
            //loop: true,
            direction: 'vertical',
            slidesPerView: 1,
            speed: 350,
            observer: true,
            observeParents: true,
            simulateTouch: false,
            spaceBetween: 15,
            autoplay: {
                delay: 3000,
            },
            navigation: {
                nextEl: '.next',
                prevEl: '.prev'
            }
        };

        var emergencySwiper = new Swiper('.emergency-swiper', emergencySwiperOptions);



        // 기본 탭
        $('.tab button').click(function (e) {

            var tab = $(this).attr('data-tab');

            $('#' + tab).siblings('.tab-contents').hide();
            $('#' + tab).show();

            $(this).addClass('active').siblings('button').removeClass('active');
        });



        // 서브 메뉴 토글
        $('.nav button').click(function () {
            $(this).parent().addClass('active').siblings('li').removeClass('active');
            $(this).parent().siblings('li').find('ul').slideUp(200);
            $(this).next('ul').slideDown(200);
        });


        // 팝업 닫기
        $('.pop button.close').click(function () {
            $('#pop').fadeOut(200);
        });

        // 팝업 닫기
        $('.danger button.close').click(function () {
            $('.danger').fadeOut(200);
        });



        // tbody의 높이값 셋팅
        $('.sticky').each(function () {
            var $this = $(this);
            var $height = $(this).attr('data-height');

            $this.css('height', $height + 'rem');
        });

        // thead 고정형 테이블
        $('table.thead').fixedHeaderTable({
            themeClass: 'thead',
        });


        // 선택 모니터릥의 게이지
        $(".dial").knob({
            'release': function () { }
        });

      


    } catch (e) {
        console.error("Error : " + e.stack);
    }



});