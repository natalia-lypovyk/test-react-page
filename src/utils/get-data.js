export const totalHashratesUrl = 'http://95.216.162.93:8000/getTotalHashrates';
export const allFarmsUrl = 'http://95.216.162.93:8000/getAllFarms';
export const farmsBySearchUrl = 'http://95.216.162.93:8000/getFarmsBySearch';

export const getData = async (query) => {
  const response = await fetch(query);
  return response.json();
};


