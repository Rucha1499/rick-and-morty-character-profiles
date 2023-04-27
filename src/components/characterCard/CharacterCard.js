
import React from 'react';
import SentimentSatisfiedAltRoundedIcon from '@mui/icons-material/SentimentSatisfiedAltRounded';
import SentimentDissatisfiedRoundedIcon from '@mui/icons-material/SentimentDissatisfiedRounded';
import SentimentVeryDissatisfiedRoundedIcon from '@mui/icons-material/SentimentVeryDissatisfiedRounded';
import Man2RoundedIcon from '@mui/icons-material/Man2Rounded';
import Woman2RoundedIcon from '@mui/icons-material/Woman2Rounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import styles from './CharacterCard.module.css';

const CharacterCard = (props) => {
  const {
    name, status, species, type, gender, location, image,
  } = props;

  return (
    <div className={styles.card}>
      <img src={image} alt="character" className={styles.profileImage} />

      <div>
        <p className={styles.name}>{name}</p>
        <p className={styles.species}>{species}</p>
        <p className={styles.type}>{type || 'Unknown'}</p>
      </div>

      <div className={styles.divider} />

      <div className={styles.information}>
        {status === 'Alive'
          ? <SentimentSatisfiedAltRoundedIcon fontSize="small" sx={{ color: '#03C988' }} />
          : status === 'Dead' ? <SentimentDissatisfiedRoundedIcon fontSize="small" sx={{ color: '#FF0032' }} />
            : <SentimentVeryDissatisfiedRoundedIcon fontSize="small" sx={{ color: '#FFB100' }} />}
        <p>{status}</p>
      </div>

      <div className={styles.information}>
        {gender === 'Male' ? <Man2RoundedIcon fontSize="small" sx={{ color: '#009EFF' }} />
          : gender === 'Female' ? <Woman2RoundedIcon fontSize="small" sx={{ color: '#F56EB3' }} />
            : <PersonRoundedIcon fontSize="small" sx={{ color: '#FFB100' }} />}
        <p>{gender}</p>
      </div>

      <div className={styles.information}>
        <LocationOnRoundedIcon fontSize="small" sx={{ color: '#FFFFFF' }} />
        <p>{location}</p>
      </div>

      <button type="button">
        View Details
        {' '}
        <span><ArrowForwardRoundedIcon fontSize="small" sx={{ color: '#FFFFFF' }} /></span>
      </button>
    </div>
  );
};

export default CharacterCard;
