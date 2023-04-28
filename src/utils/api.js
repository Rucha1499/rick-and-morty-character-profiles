import { CHARACTER_API_BASE_URL } from '../constants';

// Fetching characters per page
const getRickAndMortyCharacters = async (page) => {
  try {
    const response = await fetch(`${CHARACTER_API_BASE_URL}/?page=${page}`);
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

// Fetching the details of individual characters
const getCharacterInfo = async (id) => {
  try {
    const response = await fetch(`${CHARACTER_API_BASE_URL}/${id}`);
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

export { getRickAndMortyCharacters, getCharacterInfo };
