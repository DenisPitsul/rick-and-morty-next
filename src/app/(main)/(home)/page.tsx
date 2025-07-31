"use client";

import { useEffect, useState } from "react";
import { Characters } from "@/shared/types/characters.type";
import Search from "@/components/Search/Search";
import Filter from "@/components/Filter/Filter";
import Card from "@/components/Card/Card";
import Pagination from "@/components/Pagination/Pagination";
import Loader from "@/components/Loader/Loader";

const HomePage = () => {
  const [pageNumber, updatePageNumber] = useState(1);
  const [status, updateStatus] = useState("");
  const [gender, updateGender] = useState("");
  const [species, updateSpecies] = useState("");
  const [characters, updateCharacters] = useState<Characters | null>(null);
  const [search, setSearch] = useState("");

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then((res) => res.json());
      updateCharacters(data);
    })();
  }, [api]);

  if (!characters) return <Loader />;

  const { info, results } = characters;

  return (
    <div className="App">
      <h1 className="text-center mb-3">Characters</h1>
      <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
      <div className="container">
        <div className="row">
          <Filter
            updateStatus={updateStatus}
            updateGender={updateGender}
            updateSpecies={updateSpecies}
            updatePageNumber={updatePageNumber}
          />
          <div className="col-lg-8 col-12">
            <div className="row">
              <Card page="/" results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber}
      />
    </div>
  );
};

export default HomePage;
