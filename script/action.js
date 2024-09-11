$(window).scroll(function(){
    let scrT = $(this).scrollTop()
    $('.num').text(scrT)
})


$('#section2 .arrow').click(function(){
    $(this).hide();
    $('.info').fadeIn(500);
    $(this).siblings('img').attr('src','images/profile_img_o.png').hide().fadeIn(500)
    $(this).siblings('img').attr('src','images/profile_img_o.png')
    $(this).parent().siblings('.info_text').fadeIn(500);
    $('#section2 .content_box').addClass('on')
})