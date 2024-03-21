import React, { useEffect, useState } from "react";
import valorantApi from "../../services/apiServices";

import "./index.css";

function Home() {
  const [characters, setCharacters] = useState(null);

  async function getAgents() {
    const response = await valorantApi.getAllAgents();
    setCharacters(response.data);
  }

  useEffect(() => {
    getAgents();
  }, []);

  return (
    <div className="home">
      <header className="home-header">
        <h1 className="home-title">Guia Valorant Agents</h1>
      </header>
      <div className="home-characters">
        {characters &&
          characters.map((element, id) => {
            return (
              element.isPlayableCharacter && (
                <div key={id} className="home-character">
                  <h2>{element.displayName}</h2>
                </div>
              )
            );
          })}
      </div>
    </div>
  );
}

export default Home;
