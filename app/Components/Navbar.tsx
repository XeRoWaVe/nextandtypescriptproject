import { cityNames, stateCodes } from "../data";

import React, { useCallback, useState } from "react";

type Props = {
  setState: (val: string) => void;
  setCity: (val: string) => void;
  state: any;
  cityApi: [{ value: string, key: string }];
};

export default function Navbar({ setState, setCity, state, cityApi }: Props) {
  const handleCityChange = (e: any) => {
    setCity(e.target.value);
  };

  const handleStateChange = (e: any) => {
    setState(e.target.value);
  };

  return (
    <>
      <div className="flex justify-center bg-blue-300">
        <div>
          <span className="text-2xl">🌧</span>
        </div>
        {state ? (
          <select onChange={handleCityChange}>
            <option value="Select a city">Select a city</option>
            {cityApi.map((city) => (
              <option key={city.key} value={city.value}>{city.value}</option>
            ))}
          </select>
        ) : (
          ""
        )}
        <select onChange={handleStateChange}>
          <option value="Select a state">Select a state</option>
          {stateCodes.map((state) => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>
        <div>Login</div>
        <button>Menu button</button>
      </div>
    </>
  );
}
