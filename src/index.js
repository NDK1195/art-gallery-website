var map = L.map("map", { zoomControl: false }).setView(
  [41.48146901689518, -71.3104354018476],
  16,
);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var icon = L.icon({
  iconUrl: "../assets/icon-location.svg",
  shadowUrl: "../assets/icon-location.svg",
  iconSize: [66, 88], // size of the icon
  shadowSize: [0, 0], // size of the shadow
  iconAnchor: [33, 88], // point of the icon which will correspond to marker's location
  shadowAnchor: [0, 0], // the same for the shadow
  popupAnchor: [0, 0], // point from which the popup should open relative to the iconAnchor
});

var marker = L.marker([41.48146901689518, -71.3104354018476], {
  icon: icon,
}).addTo(map);
