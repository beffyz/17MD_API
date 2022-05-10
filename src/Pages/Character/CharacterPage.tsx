import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { CharacterResults } from '../../components/Models/CharacterModel';
import './characterPage.scss';

const CharacterPage = () => {
  const [character, setCharacter] = useState<CharacterResults>();
  const { id } = useParams();
  const navigate = useNavigate();

  const getCharacter = async () => {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
      setCharacter(response.data);
    } catch (error) {
      navigate('/');
    } finally {
      console.log('');
    }
  };

  useEffect(() => {
    if (id) {
      getCharacter().then();
    }
  }, []);

  return (
    <div className="container">
      {character && (
      <div className="row">
        <div className="col-md-12 center-md">
          <div>
            <img className="character__image" src={character.image} alt="" />
            <h4>{character.name}</h4>
            <p>{`Species: ${character.species}`}</p>
            <p>{`Gender: ${character.gender}`}</p>
            <p>{character.type !== '' ? `Type: ${character.type}` : ''}</p>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default CharacterPage;
