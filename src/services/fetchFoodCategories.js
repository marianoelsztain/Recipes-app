const fetchFoodCategories = async () => {
  const url = 'https://www.themealdb.com/api/';
  const endpoint = 'json/v1/1/list.php?c=list';
  const response = await fetch(`${url}${endpoint}`);
  const json = await response.json();

  return json.meals;
};

export default fetchFoodCategories;
