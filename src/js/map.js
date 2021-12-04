/* eslint-disable no-undef */
/* eslint-disable no-new */

const infowindow = document.getElementsByClassName('info-window')

const maps = [
  {
    el: 'uber-map',
    center: [46.75430758, 36.7842595],
    markers: [
      [{ lat: 46.7543075, lng: 36.7844595 }, infowindow[0]],
    ],
  },
]

function initMap({ el, center, markers }) {
  const elem = document.getElementById(el);

  if (elem) {
    const map = new google.maps.Map(elem, {
      center: new google.maps.LatLng(...center),
      zoom: 18,
    });
    markers.forEach(([position, info]) => {
      const marker = new google.maps.Marker({
        position,
        map,
        optimized: false,
      });
      const infoWindow = new google.maps.InfoWindow({
        content: info,
      });
      marker.addListener('click', () => {
        info.classList.remove('is-active');
        info.classList.add('is-active');
        infoWindow.close();
        infoWindow.open(marker.getMap(), marker);
      });
    });
  }
}

maps.forEach(initMap)

window.initMap = initMap
