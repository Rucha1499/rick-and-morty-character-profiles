import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import MovieCreationRoundedIcon from '@mui/icons-material/MovieCreationRounded';
import { getCharacterInfo } from '../../utils/api';
import styles from './CharacterInfo.module.css';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const CharacterInfo = () => {
  const { id } = useParams();

  // eslint-disable-next-line no-unused-vars
  const [characterInfo, setCharacterInfo] = useState();
  const [loading, setIsloading] = useState(true);

  const getCharacterInformation = async () => {
    const data = await getCharacterInfo(id);
    setCharacterInfo(data);
    setIsloading(false);
  };

  useEffect(() => {
    getCharacterInformation();
  }, [id]);

  return (
    <>
      <Navbar />
      <Container fixed>
        {loading ? '' : (
          <div className={styles.detailsPage}>
            <div className={styles.personalInfo}>
              <div className={styles.displayPicture}>
                <img src={characterInfo.image} alt="display" />
                <p>{characterInfo.name}</p>
              </div>
              <div className={styles.divider} />
              <p>DETAILS</p>
              <ul>
                <li>
                  Status :
                  {' '}
                  {characterInfo.status}
                  {' '}
                </li>
                <li>
                  Gender :
                  {' '}
                  {characterInfo.gender}
                  {' '}
                </li>
                <li>
                  Species :
                  {' '}
                  {characterInfo.species}
                  {' '}
                </li>
                <li>
                  Type :
                  {' '}
                  {characterInfo.Type || 'Unknown'}
                  {' '}
                </li>
                <li>
                  Origin :
                  {' '}
                  {characterInfo.origin.name}
                  {' '}
                </li>
                <li>
                  Location :
                  {' '}
                  {characterInfo.location.name}
                  {' '}
                </li>
              </ul>
            </div>
            <div className={styles.episodes}>
              <div className={styles.episodeHeader}>FEATURED IN</div>
              {characterInfo.episode && characterInfo.episode.length > 0
                ? characterInfo.episode.map((episode) => (
                  <div className={styles.episodeContainer}>
                    <MovieCreationRoundedIcon fontSize="small" sx={{ color: '#57C5B6' }} />
                    <p key={episode}>
                      {episode}
                    </p>
                  </div>
                )) : ''}
            </div>
          </div>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default CharacterInfo;
