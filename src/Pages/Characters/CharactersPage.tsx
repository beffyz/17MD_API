import React, { useEffect, useState } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import { CharacterResults } from '../../components/Models/CharacterModel';
import './charactersPage.scss';

const CharactersPage = () => {
  const [characters, setCharacters] = useState<[...CharacterResults]>();
  const [errorMessage, setErrorMessage] = useState<string>();

  const navigate = useNavigate();

  const getCharacters = async () => {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/character');
      setCharacters(response.data.results);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.status === 404 ? 'Nothing to show' : error.message;
        setErrorMessage(message);
      }
    } finally {
      console.log('end');
    }
  };

  useEffect(() => {
    getCharacters().then();
  }, []);

  return (
    <div className="container">
      <div className="sort center-md">
        <button className="sort__button">All</button>
        <button className="sort__button sort__button--alive">Alive</button>
        <button className="sort__button sort__button--dead">Dead</button>
        <button className="sort__button sort__button--unknown">Unknown</button>
      </div>
      <div className="characters center-md">
        {characters && characters.map(({
          id, name, image, status,
        }) => (
          <div key={Math.random()} className="character__card">
            <div className="character__info">
              <div className="character-card__avatar">
                <img src={image} alt="" />
              </div>
              <div className="character__details">
                <p>{name}</p>
                <p>{status}</p>
                <button
                  className="character__details--btn"
                  onClick={() => navigate(`/characters/${id}`)}
                >
                  Character Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharactersPage;
