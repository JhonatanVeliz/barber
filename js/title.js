$(window).on('load', function () {
    // Referencia del titulo en el DOM
    let title = $('#title');
    title.text('');

    const cadenaTitle = 'BarberShopDeluxe'.split("");
    let timer = 0;

    const intervalo = setInterval(function() {
        title.text(title.text() + cadenaTitle[timer]);
        timer++;

        if (timer >= cadenaTitle.length) {
            clearInterval(intervalo);
        }
    }, 100);
    
});