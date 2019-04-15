$('#hamburger-menu').click(()=>{
    $("#hamburger-menu").css('color','transparent');
    $("#mobile-nav-expand-expand").css('display','flex');
});

$('#close-menu').click(()=>{
    $("#hamburger-menu").css('color','black');
    $("#mobile-nav-expand-expand").css('display','none');
});

$('#mobile-nav-expand-expand').click(()=>{
    $("#hamburger-menu").css('color','black');
    $("#mobile-nav-expand-expand").css('display','none');
});

$(window).scroll(()=>{
    let height = $(window).scrollTop();
    if(height>300){
        $("#go-top").css('display','block');
    }else{
        $("#go-top").css('display','none');
    }
});

$(document).ready(()=> {
    $("#go-top").click((e)=> {
        e.preventDefault();
        //How to jump to top of browser page (https://stackoverflow.com/a/4147118)
        $('html, body').animate({ scrollTop: 0 }, 'fast'); 
        return false;
    });
});
