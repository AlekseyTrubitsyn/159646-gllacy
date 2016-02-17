ymaps.ready(init);
var myMap;
function init() {
    myMap = new ymaps.Map('map', {
          center: [59.939341,30.329336],
    zoom: [16],
    controls: []
      }),
      myMap.behaviors.disable('scrollZoom'); 
      myMap.controls.add('zoomControl');

    myPlacemark = new ymaps.Placemark([59.938688,30.323035], {
    hintContent: '',
    balloonContent: ''
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'img/pin.png',
    iconImageSize: [218, 142],
    iconImageOffset: [-39, -140]
  });

  myMap.geoObjects.add(myPlacemark);
}
