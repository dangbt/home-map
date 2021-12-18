import React, { useState } from "react";
import mapboxgl from 'mapbox-gl';

interface Context {
  map: null | mapboxgl.Map;
  setMap: (map: mapboxgl.Map) => void;
}

const defaultValue = {
  map: null,
  setMap: (map: mapboxgl.Map) => {},
}
export const AppContext = React.createContext<Context>(defaultValue);

export default function ContextProvider({ children }: { children: JSX.Element }): JSX.Element {

  const setMap = (map: mapboxgl.Map) => {
    setContextValue(prev => ({...prev, map }))
  }

  const [contextValue, setContextValue] = useState<Context>({
    ...defaultValue,
    setMap,
  });

  return <AppContext.Provider value={contextValue}>
    {children}
  </AppContext.Provider>
}