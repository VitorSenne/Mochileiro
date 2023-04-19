import './Map.css'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';


const API_KEY = 'API_KEY';
// Initialize and add the map
export function InitMap() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY || ''
    })
    return (
        <div id="map">
            {isLoaded ? (
                <GoogleMap
                    mapContainerStyle={{ width: '100%', height: '100%' }}
                    center={{
                        lat: -8.411525783621295,
                        lng: -55.81026011320462
                    }}
                    zoom={4}
                ></GoogleMap>
            ) : (
                <></>
            )}
        </div>
    )
}