mapboxgl.accessToken = 'pk.eyJ1IjoiZW1pbHlodSIsImEiOiJjanRraXBjYjAwMDZiNDRxbHg3cDlwbHA5In0.Z8oZamlBpJF4Sv58aC1c_A';
var beforeMap = new mapboxgl.Map({
  container: 'before',
  style: 'mapbox://styles/mapbox/satellite-v9',
  center: [23.7220485, 37.975264],
  zoom: 16
});

var afterMap = new mapboxgl.Map({
  container: 'after',
  style: {
    "version": 8,
    "sources": {
      "raster-tiles": {
        "type": "raster",
        "url": "mapbox://emilyhu.7w3gxksb"
      }
    },
    "layers": [{
      "id": "simple-tiles",
      "type": "raster",
      "source": "raster-tiles",
      "minzoom": 0,
      "maxzoom": 22
    }]
  },
  center: [23.7220485, 37.975264],
  zoom: 16
});

var map = new mapboxgl.Compare(beforeMap, afterMap, {
  // Set this to enable comparing two maps by mouse movement:
  // mousemove: true
});
