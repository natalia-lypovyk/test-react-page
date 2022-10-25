export const totalHashratesUrl = 'http://95.216.162.93:8000/hashrates';
export const allFarmsUrl = 'http://95.216.162.93:8000/farms';
export const farmsBySearchUrl = 'http://95.216.162.93:8000/getFarmsBySearch';
export const allWhiteIps = 'http://95.216.162.93:8000/whiteIps';
export const changeRigScriptStatus = 'http://95.216.162.93:8000/rig/changeScriptStatus';
export const setWhiteIp = 'http://95.216.162.93:8000/whiteIp';
export const removeWhiteIp = 'http://95.216.162.93:8000/whiteIp';

export const getData = async (query) => {
  const response = await fetch(query);
  return response.json();
};

export const getIp = async ()=> {
  const res = await fetch('https://geolocation-db.com/json/');
  return res.json();
}
