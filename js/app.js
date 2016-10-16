$('.parallax-window').parallax({ imageSrc: 'images/backpar.jpg' });


$('.panel').on('shown.bs.collapse', function(e) {
    $('body').scrollspy({ target: '#panel01' })

    console.log(e);


})

// $('body').parallax({ imageSrc: 'images/delf.png' });
