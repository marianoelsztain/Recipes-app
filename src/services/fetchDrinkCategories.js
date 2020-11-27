const fetchDrinkCategories = async (type) => {
  let endpoint;
  const url = 'https://www.thecocktaildb.com/api/';

  if (type === 'category-list') {
    endpoint = 'json/v1/1/list.php?c=list';
  } else if (type === 'ingredient-list') {
    endpoint = 'json/v1/1/list.php?i=list';
  }

  const response = await fetch(`${url}${endpoint}`);
  const json = await response.json();

  return json.drinks;
};

export default fetchDrinkCategories;
