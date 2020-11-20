export const fetchWithName = async (query) => {
  const endpoint = 'json/v1/1/search.php?s=';
  const url = 'https://www.thecocktaildb.com/api';
  const response = await fetch(`${url}${endpoint}${query}`);
  const json = await response.json();

  return json.drinks;
};

export const fetchWithLetter = async (query) => {
  const endpoint = 'json/v1/1/search.php?f=';
  const url = 'https://www.thecocktaildb.com/api';
  const response = await fetch(`${url}${endpoint}${query}`);
  const json = await response.json();

  return json.drinks;
};

export const fetchWithIngredient = async (query) => {
  const endpoint = 'json/v1/1/filter.php?i=';
  const url = 'https://www.thecocktaildb.com/api';
  const response = await fetch(`${url}${endpoint}${query}`);
  const json = await response.json();

  return json.drinks;
};
