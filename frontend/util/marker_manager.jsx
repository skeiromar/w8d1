
export default class MarkerManager {
    constructor(map) {
      this.map = map;
      this.markers = {};
    }

    updateMarkers(benches) {
        console.log('time to update');
        benches.map(el => this.createMarkerFromBench(el))
        let newBenches = {};
        benches.forEach(el => newBenches[el.id] = el);
        Object.keys(this.markers).map(k => {
          if (!(newBenches[k])) {
            this.removeMarker(this.markers[k]);
          }
        });
    }

    removeMarker(marker) {
      delete this.markers[marker.benchId];
      marker.setMap(null);
    }

    createMarkerFromBench(bench) {
      // console.log(this.map)
      if (this.markers[bench.id] === undefined) {
        let marker = new google.maps.Marker({
          position: {lat: bench.lat, lng: bench.lng},
          title: `${bench.description}`,
          benchId: bench.id
        });
        this.markers[bench.id] = marker;
        marker.setMap(this.map);
      }
    }
    //...
  }