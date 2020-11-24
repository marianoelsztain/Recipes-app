const fetchFoodCategories = async () => {
  const url = 'https://www.themealdb.com/api/';
  const endpoint = 'json/v1/1/categories.php';
  const response = await fetch(`${url}${endpoint}`);
  const json = await response.json();

  return json.categories;
};

export default fetchFoodCategories;
