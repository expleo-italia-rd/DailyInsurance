import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import '../../node_modules/leaflet/dist/leaflet.css'
import L from 'leaflet'
import placeholder from '../IMG/placeholder.png'
import { useEffect } from 'react'
const icon = L.icon({
  iconUrl: placeholder,
  iconSize: [38, 38],
})

const Map = (props) => {
  const { selectPosition } = props
  const latitude = selectPosition.lat
  const longitude = selectPosition.lon
  const location = [latitude, longitude]

  function ResetCenterView(props) {
    const { selectPosition } = props
    const map = useMap()

    useEffect(() => {
      if (selectPosition) {
        map.setView(L.latLng(latitude, longitude), map.getZoom(), {
          animate: true,
        })
      }
    }, [selectPosition, map])

    return null
  }

  return (
    <div className="w-full h-screen">
      {selectPosition && (
        <MapContainer
          className="w-screen h-full block "
          center={location}
          zoom={13}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=PWKfCjcmpxSis2zXWBK2"
          />
          <Marker position={location} icon={icon}>
            <Popup>
              You are here!!! <br /> Easily customizable.
            </Popup>
          </Marker>
          <ResetCenterView selectPosition={selectPosition} />
        </MapContainer>
      )}
    </div>
  )
}

export default Map
