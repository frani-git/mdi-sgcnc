$(document).ready(function () {


    try {



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




        // 팝업 닫기
        $('.pop button.close').click(function () {
            $('#pop').fadeOut(200);
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


        // 햄버거 버튼 토글
        $('.hamburger').click(function () {
            $(this).toggleClass('active');
            $('.mnb').toggleClass('active');
        });


        // 공지사항 토글
        $('.notice button').click(function () {
            $(this).next('p').slideDown(200);
            $(this).parent().siblings().find('p').slideUp(200);
        });

        $('.notice p').click(function () {
            $(this).slideUp(200);
        });


        // 위험단계 팝업
        $('#danger button').click(function () {
            $('#danger').fadeOut(200);
        });


        // 최 상단으로 이동
        $(".scrollTop").click(function (event) {
            event.preventDefault();

            $('html, body').animate({ scrollTop: 0}, 500);
        });




    } catch (e) {
        console.error("Error : " + e.stack);
    }



});