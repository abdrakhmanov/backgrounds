ymaps.ready(init);

function init() {


    var myMap = new ymaps.Map("map", {
        center: [55.235263, 51.220997],
        zoom: 3.5
    }, {
        searchControlProvider: 'yandex#search'
    }),

        // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.8, 37.8]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'Я тащусь',
                hintContent: 'Ну давай уже тащи'
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: true
        });
       

    //myMap.geoObjects.add(myGeoObject);
    for(var i=0; i < points.length; i++){
        //myMap.geoObjects.add(new ymaps.Placemark([55.684758, 37.738521], {}, {}));
        
        //По умолчанию красим синим
        var iconColor = "#0000FF"; 

        if ( $.inArray(points.ip, ip_2020) ) {
            // Если адрес засветился в 2020, то красим красным
            iconColor = "#FF0000";

            // Если адрес был и в 2019, то красим зеленым
            if ($.inArray(points.ip, ip_2019) ) { iconColor = "#00FF00"; }
        }

        myMap.geoObjects.add(new ymaps.Placemark(points[i].coordinates, {}, {
            iconColor: iconColor
        }));
    }
    
}
