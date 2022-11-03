export const totalHashratesUrl = 'http://95.216.162.93:8000/hashrates';
export const allFarmsUrl = 'http://95.216.162.93:8000/farms';
export const farmsBySearchUrl = 'http://95.216.162.93:8000/farms?search_query=';
export const changeRigScriptStatus = 'http://95.216.162.93:8000/rig/changeScriptStatus';
export const configsUrl = 'http://95.216.162.93:8000/configs';

export const getData = async (query) => {
  const response = await fetch(query);
  return response.json();
};

export const applyConfigToFarm = async (farmId, configId) => {
  return await fetch(
    `${allFarmsUrl}/${farmId}/`,
    {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 'config_id': configId })
    }
  )
};

export const removeConfigFromFarm = async (farmId) => {
  return await fetch(
    `${allFarmsUrl}/${farmId}/`,
    {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 'config_id': null })
    }
  )
};

export const postConfig = async (data) => {
  return await fetch(
    configsUrl,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
  ).then(response => response.json());
};

export const removeConfig = async (configId) => {
  return await fetch(
    `${configsUrl}/${configId}/`,
    {
      method: 'DELETE',
      headers: {
        Accept: 'application/json'
      }
    }
  )
};

export const limitForAllFarms = '?limit=100';
export const limitForSearch = '&limit=10';
export const farmsWithProblemsParam = '&only_with_problems=true';