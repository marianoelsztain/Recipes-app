const fetchDrinkCategories = async () => {
  const url = 'https://www.thecocktaildb.com/api/';
  const endpoint = 'json/v1/1/list.php?c=list';
  const response = await fetch(`${url}${endpoint}`);
  const json = await response.json();

  return json.drinks;
};

export default fetchDrinkCategories;
