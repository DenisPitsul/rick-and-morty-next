"use client";

import React, { useEffect, useState } from "react";
import Card from "@/components/Card/Card";
import InputGroup from "@/components/Filter/category/InputGroup";
import { Character } from "@/shared/types/characters.type";
import { Location } from "@/shared/types/location.type";
import Loader from "@/components/Loader/Loader";

const LocationPage = () => {
  const [location, setLocation] = useState<Location | null>(null);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [number, setNumber] = useState(1);

  const api = `https://rickandmortyapi.com/api/location/${number}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then((res) => res.json());
      setLocation(data);

      const a = await Promise.all(
        data.residents.map((x: string) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setCharacters(a);
    })();
  }, [api]);

  if (!location || !characters) return <Loader />;

  const { dimension, type, name } = location;

  return (
    <div className="container">
      <div className="row mb-3">
        <h1 className="text-center mb-3">
          Location :
          <span className="text-primary">
            {" "}
            {name === "" ? "Unknown" : name}
          </span>
        </h1>
        <h5 className="text-center">
          Dimension: {dimension === "" ? "Unknown" : dimension}
        </h5>
        <h6 className="text-center">Type: {type === "" ? "Unknown" : type}</h6>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          <h4 className="text-center mb-4">Pick Location</h4>
          <InputGroup name="Location" changeID={setNumber} total={126} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Card page="/location/" results={characters} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationPage;
