"use client";

import React, { useEffect, useState } from "react";
import Card from "@/components/Card/Card";
import InputGroup from "@/components/Filter/category/InputGroup";
import { Character } from "@/shared/types/characters.type";
import { Episode } from "@/shared/types/episode.type";
import Loader from "@/components/Loader/Loader";

const EpisodesPage = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [episode, setEpisode] = useState<Episode | null>(null);
  const [id, setID] = useState(1);

  const api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then((res) => res.json());
      setEpisode(data);

      const a = await Promise.all(
        data.characters.map((x: string) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setCharacters(a);
    })();
  }, [api]);

  if (!characters || !episode) return <Loader />;

  const { air_date, name } = episode;

  return (
    <div className="container">
      <div className="row mb-3">
        <h1 className="text-center mb-3">
          Episode name :{" "}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center">
          Air Date: {air_date === "" ? "Unknown" : air_date}
        </h5>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          <h4 className="text-center mb-4">Pick Episode</h4>
          <InputGroup name="Episode" changeID={setID} total={51} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Card page="/episodes/" results={characters} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpisodesPage;
