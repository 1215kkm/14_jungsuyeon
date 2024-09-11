$(window).scroll(function(){
    let scrT = $(this).scrollTop()
    $('.num').text(scrT)
})