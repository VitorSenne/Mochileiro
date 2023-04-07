import './Map.css'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

// Initialize and add the map
export function InitMap() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "API_KEY"
    })
    return (
        <div id="map">
            {isLoaded ? (
                <GoogleMap
                    mapContainerStyle={{ width: '100%', height: '100%' }}
                    center={{
                        lat: -23.59293036313097,
                        lng: -46.659798720975495
                    }}
                    zoom={15}
                ></GoogleMap>
            ) : (
                <></>
            )}
        </div>
    )
}