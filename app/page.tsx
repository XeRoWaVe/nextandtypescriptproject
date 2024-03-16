"use client";

import Image from "next/image";
import Navbar from "./Components/Navbar";
import { useEffect, useState } from "react";
import Forecast from "./Components/Forecast";
import { apiKey } from "./data";
import { geoOptions, geoUrl } from "./util";

export default function Home() {
  const [weather, setWeather] = useState<any>([]);
  const [cityApi, setcityApi] = useState<any>([]);
  const [location, setLocation] = useState<any>([]);
  const [state, setState] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [forecast, setForecast] = useState<any>([])
  const encodedCity = encodeURIComponent(city);



  const geoCities = async () => {
    const res = await fetch(
      `https://referential.p.rapidapi.com/v1/city?fields=iso_a2%2Cstate_code%2Cstate_hasc%2Ctimezone%2Ctimezone_offset&iso_a2=us&lang=en&state_code=US-${state}&limit=250`,
      geoOptions
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    setcityApi(data);
  };

  useEffect(() => {
    geoCities();
  }, [state]);

  const geoCoding = async () => {
    const res = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${encodedCity},${state},US&limit=5&appid=${apiKey}`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    setLocation(data[0]);
  };

  useEffect(() => {
    geoCoding();
  }, [city]);

  const getWeather = async () => {
    const { lat, lon } = location;
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    setWeather(data)
    setForecast(data.list)
    console.log(data);
  };

  useEffect(() => {
    getWeather();
  }, [city, state]);


  return (
    <>
      <Navbar
        setState={setState}
        setCity={setCity}
        state={state}
        cityApi={cityApi}
      />
      <Forecast />
    </>
  );
}
