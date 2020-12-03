(function (w, $) {

    const effect = VANTA.NET({
        el: "#net",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x00c853, //Green A700
        backgroundColor: 0x212121, //Grey 900
        points: 10.00,
        maxDistance: 23.00,
        spacing: 15.00
    });

    $(w).on('resize', function () {
        console.log('win.resize', effect);
        var win_w = $(w).width(),
            win_h = $(w).height();

        $('#net').css({
            'width': win_w,
            'height': win_h
        });

        $('#ug-logo').css({
            'width': win_w / 8,
            'height': win_w / 8
        });

        effect.resize();

        $('body').css({
            'font-size': (win_w * win_h) / 140000 + 'px'
        })
    });

    $(w).trigger('resize');
})(window, jQuery);