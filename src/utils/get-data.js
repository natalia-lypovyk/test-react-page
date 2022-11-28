import { useNavigate } from 'react-router-dom';

export const totalHashratesUrl = 'https://api.jethash.com/hashrates';
export const allFarmsUrl = 'https://api.jethash.com/farms';
export const farmsBySearchUrl = 'https://api.jethash.com/farms?search_query=';
export const changeRigScriptStatus = 'https://api.jethash.com/rig/changeScriptStatus';
export const configsUrl = 'https://api.jethash.com/configs';
export const loginUrl = 'https://api.jethash.com/login';
export const refreshUrl = 'https://api.jethash.com/refresh';

const navigate = useNavigate();

export const getData = async (query) => {
  const token = sessionStorage.getItem('access_token');

  return await fetch(
    query,
    {
      method: 'GET',
      credentials: 'include',
      headers: {
        Authorization: token ? `Bearer ${token}` : ''
      }
    }
  )
    .then((response) => response.json())
    .catch((error) => console.error(error));
};

export const applyConfigToFarm = async (farmId, configId) => {
  const token = sessionStorage.getItem('access_token');
  return await fetch(
    `${allFarmsUrl}/${farmId}/`,
    {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token ? `Bearer ${token}` : ''
      },
      body: JSON.stringify({ 'config_id': configId })
    }
  )
};

export const postConfig = async (data) => {
  const token = sessionStorage.getItem('access_token');

  return await fetch(
    configsUrl,
    {
      method: 'POST',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token ? `Bearer ${token}` : ''
      },
      body: JSON.stringify(data)
    }
  );
};

export const updateConfig = async (data, configId) => {
  const token = sessionStorage.getItem('access_token');
  return await fetch(
    `${configsUrl}/${configId}/`,
    {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token ? `Bearer ${token}` : ''
      },
      body: JSON.stringify(data)
    }
  )
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
  })
    .then(response => response.json())
    .then(res => res)
};

export const refreshToken = async () => {
  const token = checkToken();
  console.log('check token', token);

  if (token === 'refresh') {
    const data = await handleRefreshToken();
    if (data?.token) {
      sessionStorage.setItem('access_token', data?.token);
    }
  }

  if (token === 'expired') {
    sessionStorage.removeItem('access_token');
    navigate('/login');
  }
}

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
      credentials: 'include',
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