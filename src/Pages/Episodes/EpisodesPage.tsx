import React, { useEffect, useState } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import { Episodes } from '../../components/Models/CharacterModel';
import './episodesPage.scss';

const EpisodesPage = () => {
  const [episode, setEpisode] = useState<Episodes[]>();
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const getEpisode = async () => {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/episode');
      setEpisode(response.data.results);
    } catch (error) {
      navigate('/');
    } finally {
      console.log('');
    }
  };

  useEffect(() => {
    getEpisode().then();
  }, []);

  return (
    <div className="container">
      <div className="episode-search">
        <div className="episode-search__box center-md">
          <input
            onChange={(e) => setInputValue(e.target.value)}
            className="episode-search__input"
            placeholder="Search episode..."
            type="text"
          />
          <button onClick={() => setEpisode(
            episode?.filter((episodes) => (episodes.name.toLocaleLowerCase().includes(
              inputValue.toLowerCase(),
            ) && episode)),
          )}
          >
            Search
          </button>
        </div>
      </div>
      {episode && episode.map((epi) => (
        <div key={Math.random()} className="row">
          <div className="col-md-12">
            <div className="episode-card">
              <div className="episode-card__image">
                <img src="https://images6.alphacoders.com/909/thumb-1920-909641.png" alt="" />
              </div>
              <div className="episode-card__details">
                <p>{epi.name}</p>
                <p>{epi.episode}</p>
                <p>{epi.air_date}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EpisodesPage;
