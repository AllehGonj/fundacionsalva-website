window.onload = function(){
    var loading_container_aux = document.getElementById('loading_container');
    loading_container_aux.style.visibility = 'hidden';
    loading_container_aux.style.opacity = '0';    
}

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

var myIndex = 0;
carousel();

function carousel() {
    var i;
    const slide = document.getElementsByClassName("mySlides");
    for (i = 0; i < slide.length; i++) {
       slide[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > slide.length) {myIndex = 1}    
    slide[myIndex-1].style.display = "block";  
    setTimeout(carousel, 1000); 
}
