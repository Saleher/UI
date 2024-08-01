$('.navBtn').on('click', function(){
    $(this).toggleClass('btn_clicked');
    $(this).parents('.mainWrapper').toggleClass('nav_clicked');
});