import { CHARACTER_API_BASE_URL } from '../constants';

const getRickAndMortyCharacters = async (page) => {
  try {
    const response = await fetch(`${CHARACTER_API_BASE_URL}/?page=${page}`);
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

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
