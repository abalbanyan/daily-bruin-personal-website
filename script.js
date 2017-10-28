$('.enter-button').on('click', function() {
    $('.landing').css('opacity', 0);
    setTimeout(function(){
        $(".landing").remove(); 
    }, 1400);
});