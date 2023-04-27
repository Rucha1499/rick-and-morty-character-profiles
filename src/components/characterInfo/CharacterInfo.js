import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacterInfo } from '../../utils/api';

const CharacterInfo = () => {
  const { id } = useParams();

  const [characterInfo, setCharacterInfo] = useState();

  const getCharacterInformation = async () => {
    const data = await getCharacterInfo(id);
    setCharacterInfo(data);
  };

  useEffect(() => {
    if (id) {
      getCharacterInformation();
    }
  }, [id]);

  return (
    <div>
      {characterInfo ? (
        <>
          Character Information :
          {' '}
          -
          {' '}
          {characterInfo.species}
          {' '}
          -
          {' '}
          {characterInfo.name}
          {' '}
          -
          {' '}
          {characterInfo.id}
        </>
      ) : ''}
    </div>
  );
};

export default CharacterInfo;
