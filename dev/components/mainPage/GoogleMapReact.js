/* global google */
import {
    default as React,
    Component,
} from "react";

import {
    withGoogleMap,
    GoogleMap,
    Marker,
} from "../../../node_modules/react-google-maps/lib";

import SearchBox from "../../../node_modules/react-google-maps/lib/places/SearchBox";
import CheckAdress from "./CheckAdress";

const INPUT_STYLE = {
    boxSizing: `border-box`,
    MozBoxSizing: `border-box`,
    border: `1px solid #1485CC`,
    padding: `0 12px`,
    borderRadius: `5px`,
    boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
    fontSize: `14px`,
    outline: `none`,
    textOverflow: `ellipses`,
    width: `350px`,
    height: `30px`,
    zindex:'0',
    position:'absolute',
    top:'32%',
    left:'33%',
    marginLeft:'20px'
};


const SearchBoxExampleGoogleMap = withGoogleMap(props => (
    <GoogleMap
        ref={props.onMapMounted}
        zoom={10}
        center={props.center}
        onBoundsChanged={props.onBoundsChanged}
        onClick={props.onMapClick}
        defaultOptions={{
            scrollwheel: false,

        }}

    >
        <SearchBox
            ref={props.onSearchBoxMounted}
            bounds={props.bounds}
            controlPosition={google.maps.ControlPosition.LEFT_TOP}
            onPlacesChanged={props.onPlacesChanged}
            inputPlaceholder="Введите свой адрес или выберите на карте"
            inputClassname="pac-input"
            inputStyle={INPUT_STYLE}
        />

        {props.markers.map((marker, index) => (
            <Marker position={marker.position} key={index}  />
        ))}
    </GoogleMap>
));

/*
 * https://developers.google.com/maps/documentation/javascript/examples/places-searchbox
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class GoogleMapReact extends React.Component {

    state = {
        bounds: null,
        center: {
            lat: 46.4598895,
            lng: 30.5717043,
        },
        markers: [],
        address: ''
    };

    handleMapMounted = this.handleMapMounted.bind(this);
    handleBoundsChanged = this.handleBoundsChanged.bind(this);
    handleSearchBoxMounted = this.handleSearchBoxMounted.bind(this);
    handlePlacesChanged = this.handlePlacesChanged.bind(this);
    handleMapClick = this.handleMapClick.bind(this);

    handleMapMounted(map) {
        this._map = map;
    }
    handleSearchBoxMounted(searchBox) {
        this._searchBox = searchBox
    }
    handleBoundsChanged() {
        this.setState({
            bounds: this._map.getBounds(),
            center: this._map.getCenter()
        });
    }
    handleMapClick(event, searchBox) {
        searchBox = this._searchBox;
        let geocoder = new google.maps.Geocoder;
        this.state.markers.length = 0;
        let nextMarkers = [
            ...this.state.markers,
            {
                position: event.latLng,
                defaultAnimation: 2,
                key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
            },
        ];

        geocodeMe(nextMarkers[0].position);
        
        function geocodeMe(markers) {
            let returnval;
            geocoder.geocode({'location': markers}, function(results, status) {
                if (status === 'OK') {
                    if (results[1]) {
                        callback(results[1].formatted_address);
                    } else {
                        console.log('No results found');
                    }
                } else {
                    console.log('Geocoder failed due to: ' + status);
                }
            });
        }
        this.setState({
            markers: nextMarkers,
        });
        
        function callback(addr) {
            searchBox._inputElement.placeholder = addr;
            console.log(searchBox._inputElement.placeholder);
        }
    }



    handlePlacesChanged() {
        const places = this._searchBox.getPlaces();
        console.log(places[0]["formatted_address"]);

        this.setState({
            address: places[0]["formatted_address"]
        })
        const bounds = new google.maps.LatLngBounds();

        places.map(place => {
            place.geometry.viewport ? bounds.union(place.geometry.viewport) : bounds.extend(place.geometry.location)
        });

        // Add a marker for each place returned from search bar
        const markers = places.map(place => ({
            position: place.geometry.location,
        }));

        // Set markers; set map center to first search result
        const mapCenter = markers.length > 0 ? markers[0].position : this.state.center;

        this.setState({
            center: mapCenter,
            markers,
        });

        this._map.fitBounds(bounds);

    }
    render() {
        return (
            <div className="container-search">
                <CheckAdress address={this.state.address} getAllForecastsRequest={this.props.getAllForecastsRequest} />
                <SearchBoxExampleGoogleMap
                    containerElement={
                        <div className="mainpagemap" style={{ height: `100vh`,margin:`50px 0 0`,width:`100%` }} />
                    }
                    mapElement={
                        <div style={{ height: `100%` }}/>
                    }
                    center={this.state.center}
                    onMapMounted={this.handleMapMounted}
                    onMapClick={this.handleMapClick}
                    onBoundsChanged={this.handleBoundsChanged}
                    onSearchBoxMounted={this.handleSearchBoxMounted}
                    bounds = {this.state.bounds}
                    zoom = {this.state.zoom}
                    onPlacesChanged={this.handlePlacesChanged}
                    markers={this.state.markers}
                />
            </div>
        );
    }
}

GoogleMapReact.propTypes = {
    getAllForecastsRequest: React.PropTypes.func.isRequired
}