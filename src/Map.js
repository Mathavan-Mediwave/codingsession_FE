import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import data from "./data";
// import axios from "axios";

const CityMarker = ({ position, name, state }) => (
  <Marker position={position}>
    <Popup>
      {name}, {state}
    </Popup>
  </Marker>
);

const CityMap = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    setCities(data);

    // Fetch city details from the server
    // const fetchCities = async () => {
    //   try {
    //     const response = await axios.get("http://localhost:3001/api/cities");
    //     setCities(response.data);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    // fetchCities();
  }, []);

  return (
    <MapContainer
      center={[18, 79]}
      zoom={5}
      style={{ height: "600px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {cities.map((city, i) => (
        <CityMarker
          key={i}
          position={[city.lat, city.lon]}
          name={city.name}
          state={city.state}
        />
      ))}
    </MapContainer>
  );
};

export default CityMap;
