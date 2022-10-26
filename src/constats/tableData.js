export const cutLogin = (login) => {
  return `${login.slice(0, 4)}...${login.slice(-4)}`;
}

export const tableHeaderText = {
  name: 'Rig Name',
  lastRequest: 'Last request',
  algorithms: 'Algo',
  coins: 'Coin',
  pools: 'Pool',
  logins: 'Login\\Wallet',
  trouble: 'Troubles',
  hashrates: 'Hashrate',
  configName: 'Conf_name'
};
