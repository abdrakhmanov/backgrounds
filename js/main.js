(function (w, $) {

    const queryString = w.location.search;
    const urlParams = new URLSearchParams(queryString);

    /**
     *   Green A700 - 0x00c853
     *   Blue A700 - 0x1976d2
     *   Light blue A700 - 0x0288d1
     */

    let effectOptions = {
        el: "#net",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 72.00,
        minWidth: 128.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x1976d2,
        backgroundColor: 0x212121, //Grey 900
        points: 10.00,
        maxDistance: 23.00,
        spacing: 15.00
    }

    const effect = VANTA.NET(effectOptions);

    $(w).on('resize', function () {
        console.log('win.resize', effect);
        var win_w = $(w).width(),
            win_h = $(w).height(),
            square = win_w * win_h;

        $('#net').css({
            'width': win_w,
            'height': win_h
        });

        $('#ug-logo').css({
            'width': square / 6000,
            'height': square / 6000
        }).show();

        effect.resize();

        $('body').css({
            'font-size': square / 140000 + 'px'
        })
    });

    $(w).trigger('resize');
})(window, jQuery);