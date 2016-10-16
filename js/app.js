$('.parallax-window').parallax({ imageSrc: 'images/backpar.jpg' });


// $('.panel').on('shown.bs.collapse', function(e) {

//     console.log(e);


// });
$(function() {
    $('#accordion').on('shown.bs.collapse', function(e) {
        var offset = $(this).find('.collapse.in').prev('.panel-heading');
        if (offset) {
            $('html,body').animate({
                scrollTop: $(offset).offset().top - 50
            }, 500);
        }
    });
});

// $('body').parallax({ imageSrc: 'images/delf.png' });
