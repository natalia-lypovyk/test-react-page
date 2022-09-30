export const getTotalUrl = 'http://95.216.162.93:8000/getTotalHashrates';
export const getAllFarmsUrl = 'http://95.216.162.93:8000/getAllFarms';
export const getFarmsUrl = 'http://95.216.162.93:8000/getFarmsBySearch';

export const getData = async (query) => {
  const response = await fetch(query);
  return response.json();
};


