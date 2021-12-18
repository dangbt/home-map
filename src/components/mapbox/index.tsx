import mapboxgl from 'mapbox-gl';
import { useEffect, useContext } from 'react';
import { AppContext } from 'app-context';

export default function Mapbox(): JSX.Element {
  const { setMap, map } = useContext(AppContext)
  
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoidGFuZGFuZzk2IiwiYSI6ImNrZjQxY2J2NTA4bHkydHZ3emxhZXZydm0ifQ.N6MHV5z3H7EIRmjXuN5yBw';
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [106.6297, 10.8231], // starting position [lng, lat]
      zoom: 9 // starting zoom
    });
    map.addControl(new mapboxgl.NavigationControl());
    map.addControl(new mapboxgl.ScaleControl());
    map.addControl(new mapboxgl.GeolocateControl());
    map.addControl(new mapboxgl.FullscreenControl());
  
    setMap(map);
  }, [setMap])

  return (
    <div id='map' style={{ width: '100vw', height: '100vh', }}></div>
  )
}