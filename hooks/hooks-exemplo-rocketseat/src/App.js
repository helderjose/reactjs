/*
useState e useEffect são hooks.

useEffect -> tem o ciclo de vida como o antigo componentWillMount e etc.
Coloque a variável no array do final do useEffect e a função será chamada sempre
que houver alteração nessa variável.
useEffect com array vazio é executado apenas uma vez.

Posso ter vários useEffect em uma função.
*/

import React, { useState, useEffect } from "react";

export default function App() {
  const [location, setLocation] = useState({});

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(handlePositionReceived);

    // o return faz o papel do componentWillUnmount
    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  function handlePositionReceived({ coords }) {
    const { latitude, longitude } = coords;

    setLocation({ latitude, longitude });
  }

  return (
    // <> </> cria um "div invisível", não gera código html
    <>
      Latitude: {location.latitude} <br />
      Longitude: {location.longitude}
    </>
  );
}
