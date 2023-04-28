import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import { getRickAndMortyCharacters } from '../../utils/api';
import theme from '../../theme';
import CharacterCard from '../characterCard/CharacterCard';
import CardSkeleton from '../skeleton/CardSkeleton';
import './Profiles.css';

const Profiles = () => {
  const [totalCharacters, setTotalCharacters] = useState(826);
  const [visibleCharactersCount, setVisibleCharactersCount] = useState(20);
  const [page, setPage] = useState(1);
  const [charactersData, setCharactersData] = useState();

  const skeletonArray = new Array(20).fill(0);

  const fetchCharactersData = async () => {
    const data = await getRickAndMortyCharacters(page);
    if (data) {
      setCharactersData(data.results);
      setVisibleCharactersCount(data.results.length);
      setTotalCharacters(data.info.count);
    }
  };
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    setCharactersData([]);
    fetchCharactersData();
  }, [page]);

  return (
    <Container fixed>
      <div className="header">
        <p>
          Showing
          {' '}
          {visibleCharactersCount}
          {' '}
          out of
          {' '}
          {totalCharacters}
          {' '}
          total characters

        </p>
        <p className="pageCount">
          Page
          {' '}
          {page}
          {' '}
          / 42
        </p>
      </div>
      <Box sx={{ flexGrow: 1, margin: '60px 0px' }}>
        <Grid
          container
          rowSpacing={4}
          columnSpacing={{ xs: 1, sm: 2, md: 4 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {charactersData && charactersData.length > 0 ? charactersData.map((character) => {
            const {
              name, status, species, type, gender, location, image,
            } = character;

            return (
              <Grid item xs={12} sm={4} md={3} key={`${character.id}-${character.name}`}>
                <Link to={`/character/${character.id}`}>
                  <CharacterCard
                    name={name}
                    status={status}
                    species={species}
                    type={type}
                    gender={gender}
                    location={location.name}
                    image={image}
                  />
                </Link>
              </Grid>
            );
          }) : (
            <>
              {skeletonArray.map((_, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <Grid item xs={12} sm={4} md={3} key={`key - ${index}`}>
                  <CardSkeleton />
                </Grid>
              ))}
            </>
          )}
        </Grid>
      </Box>
      <ThemeProvider theme={theme}>
        <Pagination count={42} shape="rounded" size="large" color="secondary" page={page} onChange={handleChange} />
      </ThemeProvider>
    </Container>
  );
};

export default Profiles;
