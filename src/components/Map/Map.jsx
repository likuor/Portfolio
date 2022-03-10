import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  const API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

  const containerStyle = {
    height: '70vh',
    width: '100%',
  };

  const center = {
    lat: 49.281766034355286,
    lng: -123.11977167855632,
  };

  const positionCanada = {
    lat: 49.281766034355286,
    lng: -123.11977167855632,
  };

  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={11}>
        <Marker position={positionCanada} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
