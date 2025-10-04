import { useEffect, useState } from "react";

type Character = {
  id: number;
  name: string;
  species: string;
  gender: string;
  image: string;
};

const CardCharacter = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  const getCharacters = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setCharacters(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className="card-content">
      {characters.map((char) => (
        <div key={char.id}>
          <div className="card-img">
            <img src={char.image} alt={char.name} />
          </div>
          <div className="card-text">nombre: {char.name}</div>
        </div>
      ))}
    </div>
  );
};

export default CardCharacter;
