import React, { Component } from 'react'
import MarkerManager from '../util/marker_manager';
import { withRouter } from 'react-router-dom';

class BenchMap extends Component {
    componentDidMount() {
        // set the map to show SF
        const mapOptions = {
          center: { lat: 37.7758, lng: -122.435 }, // this is SF
          zoom: 13
        };
    
        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);

        // # {
        //     #   "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
        //     #   "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
        //     # }
        google.maps.event.addListener(this.map, 'idle', () => {
            // console.log(this.map.getBounds());
            let bnd = this.map.getBounds();
            let bounds = {
                northEast: {
                    lat: bnd.getNorthEast().lat(), lng: bnd.getNorthEast().lng() 
                },
                southWest: {
                    lat: bnd.getSouthWest().lat(), lng: bnd.getSouthWest().lng() 
                }
            }
            this.props.updateFilter("bounds", bounds);
        });
        const that = this;
        google.maps.event.addListener(this.map, 'click', function(e) {
            // let latitude = event.latLng.lat();
            // let longitude = event.latLng.lng();
            // console.log(e)
            that._handleClick({lat: e.latLng.lat(), lng: e.latLng.lng()});
        });
        
        this._handleClick = this._handleClick.bind(this);
        this.MarkerManager.updateMarkers(this.props.benches);
    }

    componentDidUpdate() {
        this.MarkerManager.updateMarkers(this.props.benches);
    }
    _handleClick(coords){
        console.log(coords)
        this.props.history.push({
          pathname: "benches/new",
          search: `lat=${coords.lat}&lng=${coords.lng}`
        });
      }

    render() {
        return (
        <div id="map-container" ref={ map => this.mapNode = map }>
            
        </div>
        )
    }
}

export default withRouter(BenchMap);