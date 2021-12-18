import { AppContext } from 'app-context'
import type { NextPage } from 'next'
import { useContext, useEffect } from 'react'
import MapBox from 'components/mapbox'
import mapboxgl from 'mapbox-gl';

const Home: NextPage = () => {
  const { map } = useContext(AppContext)
  useEffect(() => {
    if (map) {
      const marker1 = new mapboxgl.Marker()
        .setLngLat([106.6297, 10.8231])
        .addTo(map);
  
      // Create a default Marker, colored black, rotated 45 degrees.
      const marker2 = new mapboxgl.Marker({ color: 'black', rotation: 45 })
        .setLngLat([105.6297, 10.8231])
        .addTo(map);
    }
  }, [map])

  return (
    <div>
      <main>
        <MapBox />
      </main>
    </div>
  )
}

export default Home
