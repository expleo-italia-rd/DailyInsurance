import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { useEffect, useState } from 'react'
import '../../node_modules/leaflet/dist/leaflet.css'
import L from 'leaflet'
import placeholder from '../IMG/placeholder.png'

const icon = L.icon({
  iconUrl: placeholder,
  iconSize: [38, 38],
})

const HomeMap = () => {
  const [position, setPosition] = useState([0, 0]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (location) => {
          const latitude = location.coords.latitude;
          const longitude = location.coords.longitude;
          setPosition([latitude, longitude]);
          setLoading(false); // Imposta loading su false quando le coordinate sono disponibili
        },
        (error) => {
          console.error('Error retrieving location:', error);
          setLoading(false); // Imposta loading su false anche in caso di errore
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      setLoading(false); // Imposta loading su false se la geolocalizzazione non è supportata
    }
  }, []);

  return (
    <div className="w-full h-full">
      {loading ? (
        // Visualizza un messaggio di caricamento o un indicatore di caricamento
        <p>Loading...</p>
      ) : (
        // Quando il caricamento è completato, visualizza la mappa con la posizione geolocalizzata
        <MapContainer
          className="w-full h-full"
          center={position}
          zoom={17}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">Expleo</a> contributors'
            url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}@2x.png?key=PWKfCjcmpxSis2zXWBK2"
          />
          <Marker position={position} icon={icon}>
            <Popup>
              Ti trovi qui !!! 
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
}

export default HomeMap;
