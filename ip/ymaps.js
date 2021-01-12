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
        myMap.geoObjects.add(new ymaps.Placemark(points[i].coordinates, {}, {}));
    }
    
}
