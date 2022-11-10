export const totalHashratesUrl = 'http://95.216.162.93:8000/hashrates';
export const allFarmsUrl = 'http://95.216.162.93:8000/farms';
export const farmsBySearchUrl = 'http://95.216.162.93:8000/farms?search_query=';
export const changeRigScriptStatus = 'http://95.216.162.93:8000/rig/changeScriptStatus';
export const configsUrl = 'http://95.216.162.93:8000/configs';
export const loginUrl = 'http://95.216.162.93:8000/login';
export const refreshUrl = 'http://95.216.162.93:8000/refresh';

export const getData = async (query) => {
  const token = sessionStorage.getItem('access_token');

  return await fetch(
    query,
    {
      method: 'GET',
      headers: {
        Authorization: token ? `Bearer ${token}` : ''
      }
    }
  ).then((response) => response.json());
};

export const applyConfigToFarm = async (farmId, configId) => {
  const token = sessionStorage.getItem('access_token');
  return await fetch(
    `${allFarmsUrl}/${farmId}/`,
    {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token ? `Bearer ${token}` : ''
      },
      body: JSON.stringify({ 'config_id': configId })
    }
  )
};

export const removeConfigFromFarm = async (farmId) => {
  const token = sessionStorage.getItem('access_token');
  return await fetch(
    `${allFarmsUrl}/${farmId}/`,
    {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token ? `Bearer ${token}` : ''
      },
      body: JSON.stringify({ 'config_id': null })
    }
  )
};

export const postConfig = async (data) => {
  const token = sessionStorage.getItem('access_token');

  return await fetch(
    configsUrl,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token ? `Bearer ${token}` : ''
      },
      body: JSON.stringify(data)
    }
  ).then(response => response.json());
};

export const handleRefreshToken = async () => {
  const token = sessionStorage.getItem('access_token');

  await fetch(refreshUrl, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : ''
    }
  }).then(response => sessionStorage.setItem('access_token', response?.token))
};

export const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return {};
  }
};

export const checkToken = () => {
  if (typeof window === 'undefined') {
    return null;
  }

  const token = sessionStorage.getItem('access_token');

  if (token) {
    const jwtPayload = parseJwt(token);

    if (Object.keys(jwtPayload).length > 0) {
      if (jwtPayload.exp * 1000 > new Date()) {
        return 'refresh';
      }

      if (jwtPayload.exp * 1000 < new Date()) {
        sessionStorage.removeItem('access_token');
        return 'expired';
      }
    }
  }
};

export const removeConfig = async (configId) => {
  const token = sessionStorage.getItem('access_token');
  return await fetch(
    `${configsUrl}/${configId}/`,
    {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        Authorization: token ? `Bearer ${token}` : ''
      }
    }
  )
};

export const limitForAllFarms = '?limit=100';
export const limitForSearch = '&limit=10';
export const farmsWithProblemsParam = '&only_with_problems=true';