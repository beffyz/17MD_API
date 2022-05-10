import React, { useEffect, useState } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import { CharacterResults } from '../../components/Models/CharacterModel';
import './charactersPage.scss';

const CharactersPage = () => {
  const [characters, setCharacters] = useState<CharacterResults[]>();
  const [errorMessage, setErrorMessage] = useState<string>();

  const navigate = useNavigate();

  const getAliveCharacters = async () => {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/character/?status=alive');
      setCharacters(response.data.results);
    } catch (error) {
      navigate('/');
    } finally {
      console.log('end');
    }
  };

  useEffect(() => {
    getAliveCharacters().then();
  }, []);

  const getDeadCharacters = async () => {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/character/?status=dead');
      setCharacters(response.data.results);
    } catch (error) {
      navigate('/');
    } finally {
      console.log('end');
    }
  };

  useEffect(() => {
    getDeadCharacters().then();
  }, []);

  const getUnknownCharacters = async () => {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/character/?status=unknown');
      setCharacters(response.data.results);
    } catch (error) {
      navigate('/');
    } finally {
      console.log('end');
    }
  };

  useEffect(() => {
    getUnknownCharacters().then();
  }, []);

  const getCharacters = async () => {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/character');
      setCharacters(response.data.results);
    } catch (error) {
      navigate('/');
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
        <button onClick={getCharacters} className="sort__button">All</button>
        <button onClick={getAliveCharacters} className="sort__button sort__button--alive">Alive</button>
        <button onClick={getDeadCharacters} className="sort__button sort__button--dead">Dead</button>
        <button onClick={getUnknownCharacters} className="sort__button sort__button--unknown">Unknown</button>
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
