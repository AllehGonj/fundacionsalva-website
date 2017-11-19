$(function(){
    var header = document.getElementById('header');
    var headroom = new Headroom(header);
    headroom.init();

    var width = $(window).width(),
        links = $('#links'),
        btnMenu = $('#btn-menu'),
        icon = $('#btn-menu .icon');

        if(width < 725){
            links.hide();
            icon.addClass('fa-bars');
        }
        else{
            links.show();
           
        }

        btnMenu.on('click', function(){
            links.slideToggle();
            icon.toggleClass('fa-bars');
            icon.toggleClass('fa-times');
        });

        $(window).on('resize', function(){
            if ($(this).width > 725) {
                links.show();
                icon.addClass('fa-times');
                icon.removeClass('fa-bars');
            } else{
                links.hide();
                icon.addClass('fa-bars');
                icon.removeClass('fa-times');
            }
        });
});
