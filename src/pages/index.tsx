import { AppContext } from 'app-context'
import type { NextPage } from 'next'
import { useContext, useEffect } from 'react'
import MapBox from 'components/mapbox'
import mapboxgl from 'mapbox-gl';
import { getData } from 'fetcher';


const getPopup = ({ imgUrl, address, price }: {
  imgUrl: string;
  address: string;
  price: string;
}): string => {

  return `
  <div>
    <div>
      <img style='margin: auto;' width='200' src=${imgUrl} alt="" />
    </div>
    <p>${address}</p>
    <p style='color: #ef7733;'>${price}/tháng</p>
  </div>
`
}

const Home: NextPage = () => {
  const { map } = useContext(AppContext)
  useEffect(() => {
    if (map) {
      getData().then(res => {
        if (res) {
          res.forEach(r => {
            const popup = new mapboxgl.Popup({ closeOnClick: false })
              .setLngLat(r.center)
              .setHTML(getPopup({ address: r.address, imgUrl: r.imgUrl, price: r.price }))
              .addTo(map);
            const marker1 = new mapboxgl.Marker()
              .setLngLat(r.center)
              .setPopup(popup)
              .togglePopup()
              .addTo(map);
          })
        }
      })
    }
  }, [map])

  return (
    <MapBox />
  )
}

export default Home
