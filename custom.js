//라이트박스, 썸네일 설정, 3초마다 이미지가 자동으로 바뀌도록 설정함
$(".lightbox").lightGallery({
    thumbnail: true,
    autoplay: true,
    pause: 3000,
    progressBar: true
}); 

//윈도우 팝업
$(".window").click(function(e){
    e.preventDefault();
    //window.open("파일명", "팝업이름", "옵션설정");
    //옵션 : left, top, width, height, status, toolbor, location, menubar, scrollbars, fullscreen, channelmode
    window.open('sample_popup.html', 'popup01', 'width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=no');
});

//레이어 팝업
$(".layer").click(function(e){
    e.preventDefault();
    $("#layer").css("display","block");
});
$("#layer .close").click(function(e){
    e.preventDefault();
    $("#layer").css("display","none");
});

//탭 메뉴
var $tab_list = $('.tab_menu');

$tab_list.find('ul ul').hide();
$tab_list.find('li.active>ul').show();

function tabMenu(e){
    e.preventDefault();
    var $this = $(this);
    $this.next('ul').show().parent('li').addClass('active').siblings('li').removeClass('active').find('>ul').hide();
}

$tab_list.find('>ul>li>a').click(tabMenu).focus(tabMenu);

//배너, 3초마다 자동으로 바뀌도록 설정함, 3개의 슬라이드가 보이도록 함 
$('.ban').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true
});

//갤러리
$('.gallery_img').slick({
    dots: true,
    fade: true,
    pauseOnHover: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 1
});

$('.pause').on('click', function(){
    $('.gallery_img').slick('slickPause');
});

$('.play').on('click', function(){
    $('.gallery_img').slick('slickPlay');
});

//이전 이미지로 가도록 동작
$('.prev').on('click', function(){
    $('.gallery_img').slick('slickPrev');
});

// 다음 이미지로 넘어가도록 동작
$('.next').on('click', function(){
    $('.gallery_img').slick('slickNext');
});

//전체 메뉴
$(".tit .btn").click(function(){
    $("#cont_nav").slideToggle();
    $(this).toggleClass("on");
});