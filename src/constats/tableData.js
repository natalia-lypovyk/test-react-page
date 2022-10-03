export const cutLogin = (login) => {
  return `${login.slice(0, 4)}...${login.slice(-4)}`;
}

export const accordionData = [
  {
    status: false,
    name : 'DavyCrokett farm',
    rates : ['[ETH] ethash 4.0 Gh','[MOAC] ethash 890.0 Mh']
  },
  {
    status: true,
    name : 'Vasyl farm',
    rates : ['[MOAC] ethash 890.0 Mh']
  },
  {
    status: false,
    name : 'Vadim farm',
    rates : ['[ETH] ethash 4.0 Gh']
  },
  {
    status: true,
    name : 'Yuriy farm',
    rates : ['[ETH] ethash 4.0 Gh','[MOAC] ethash 890.0 Mh']
  },
  {
    status: true,
    name : 'DavyCrokett farm',
    rates : ['[ETH] ethash 4.0 Gh','[MOAC] ethash 890.0 Mh']
  },
  {
    status: true,
    name : 'Vasyl farm',
    rates : ['[MOAC] ethash 890.0 Mh']
  },
  {
    status: false,
    name : 'Vadim farm',
    rates : ['[ETH] ethash 4.0 Gh']
  },
  {
    status: false,
    name : 'Yuriy farm',
    rates : ['[ETH] ethash 4.0 Gh','[MOAC] ethash 890.0 Mh']
  },

  {
    status: false,
    name : 'DavyCrokett farm',
    rates : ['[ETH] ethash 4.0 Gh','[MOAC] ethash 890.0 Mh']
  },
  {
    status: true,
    name : 'Vasyl farm',
    rates : ['[MOAC] ethash 890.0 Mh']
  },
  {
    status: false,
    name : 'Vadim farm',
    rates : ['[ETH] ethash 4.0 Gh']
  },
  {
    status: true,
    name : 'Yuriy farm',
    rates : ['[ETH] ethash 4.0 Gh','[MOAC] ethash 890.0 Mh']
  },
  {
    status: false,
    name : 'DavyCrokett farm',
    rates : ['[ETH] ethash 4.0 Gh','[MOAC] ethash 890.0 Mh']
  },
  {
    status: true,
    name : 'Vasyl farm',
    rates : ['[MOAC] ethash 890.0 Mh']
  },
  {
    status: false,
    name : 'Vadim farm',
    rates : ['[ETH] ethash 4.0 Gh']
  },
  {
    status: true,
    name : 'Yuriy farm',
    rates : ['[ETH] ethash 4.0 Gh','[MOAC] ethash 890.0 Mh']
  },
  {
    status: true,
    name : 'DavyCrokett farm',
    rates : ['[ETH] ethash 4.0 Gh','[MOAC] ethash 890.0 Mh']
  },
  {
    status: true,
    name : 'Vasyl farm',
    rates : ['[MOAC] ethash 890.0 Mh']
  },
  {
    status: false,
    name : 'Vadim farm',
    rates : ['[ETH] ethash 4.0 Gh']
  },
  {
    status: false,
    name : 'Yuriy farm',
    rates : ['[ETH] ethash 4.0 Gh','[MOAC] ethash 890.0 Mh']
  },
  {
    status: false,
    name : 'DavyCrokett farm',
    rates : ['[ETH] ethash 4.0 Gh','[MOAC] ethash 890.0 Mh']
  },
  {
    status: true,
    name : 'Vasyl farm',
    rates : ['[MOAC] ethash 890.0 Mh']
  },
  {
    status: false,
    name : 'Vadim farm',
    rates : ['[ETH] ethash 4.0 Gh']
  },
  {
    status: true,
    name : 'Yuriy farm',
    rates : ['[ETH] ethash 4.0 Gh','[MOAC] ethash 890.0 Mh']
  }
];

export const allFarmsData = [
  {
    name: "York farm",
    totalHashrates: [
      {
        coinTag: "ETC",
        algorithm: "etchash",
        hashrate: "150.8Mh"
      },
      {
        coinTag: "MOAC",
        algorithm: "etchash",
        hashrate: "224.3Mh"
      },
      {
        coinTag: "KAS",
        algorithm: "kaspa",
        hashrate: "86.4Mh"
      }
    ],
    rigs: [
      {
        name: "Mclean",
        status: true,
        lastRequest: 1664382043,
        algorithms: [
          'etchash',
          'kaspa'
        ],
        coins: [
          "ETC",
          "KAS"
        ],
        pools: [
          "stratum2+tcp://49.12.5.183:8888",
          "49.12.5.183:8888"
        ],
        logins: [
          "0x111",
          "0x111"
        ],
        errCode: "NO_REQUESTS",
        hashrates: [
          {
            algorithm: "etchash",
            hashrate: "224.3Mh"
          },
          {
            algorithm: "kaspa",
            hashrate: "86.4Mh"
          }
        ],
        configName: "3% config"
      }
    ]
  },
  {
    name: "Pollard farm",
    totalHashrates: [
      {
        coinTag: "ETC",
        algorithm: "etchash",
        hashrate: "150.8Mh"
      },
      {
        coinTag: "MOAC",
        algorithm: "etchash",
        hashrate: "224.3Mh"
      },
      {
        coinTag: "KAS",
        algorithm: "kaspa",
        hashrate: "86.4Mh"
      }
    ],
    rigs: [
      {
        name: "Kirkland",
        status: true,
        lastRequest: 1664382043,
        algorithms: [
          "etchash",
          "kaspa"
        ],
        coins: [
          "ETC",
          "KAS"
        ],
        pools: [
          "stratum2+tcp://49.12.5.183:8888",
          "49.12.5.183:8888"
        ],
        logins: [
          "0x111",
          "0x111"
        ],
        errCode: "",
        hashrates: [
          {
            algorithm: "etchash",
            hashrate: "224.3Mh"
          },
          {
            algorithm: "kaspa",
            hashrate: "86.4Mh"
          }
        ],
        configName: "3% config"
      }
    ]
  },
  {
    name: "Beryl farm",
    totalHashrates: [
      {
        coinTag: "ETC",
        algorithm: "etchash",
        hashrate: "150.8Mh"
      },
      {
        coinTag: "MOAC",
        algorithm: "etchash",
        hashrate: "224.3Mh"
      },
      {
        coinTag: "KAS",
        algorithm: "kaspa",
        hashrate: "86.4Mh"
      }
    ],
    rigs: [
      {
        name: "Mcleod",
        status: true,
        lastRequest: 1664382043,
        algorithms: [
          "etchash",
          "kaspa"
        ],
        coins: [
          "ETC",
          "KAS"
        ],
        pools: [
          "stratum2+tcp://49.12.5.183:8888",
          "49.12.5.183:8888"
        ],
        logins: [
          "0x111",
          "0x111"
        ],
        errCode: "NO_REQUESTS",
        hashrates: [
          {
            algorithm: "etchash",
            hashrate: "224.3Mh"
          },
          {
            algorithm: "kaspa",
            hashrate: "86.4Mh"
          }
        ],
        configName: "3% config"
      }
    ]
  },
  {
    name: "Eve farm",
    totalHashrates: [
      {
        coinTag: "ETC",
        algorithm: "etchash",
        hashrate: "150.8Mh"
      },
      {
        coinTag: "MOAC",
        algorithm: "etchash",
        hashrate: "224.3Mh"
      },
      {
        coinTag: "KAS",
        algorithm: "kaspa",
        hashrate: "86.4Mh"
      }
    ],
    rigs: [
      {
        name: "Bowers",
        status: false,
        lastRequest: 1664382043,
        algorithms: [
          "etchash",
          "kaspa"
        ],
        coins: [
          "ETC",
          "KAS"
        ],
        pools: [
          "stratum2+tcp://49.12.5.183:8888",
          "49.12.5.183:8888"
        ],
        logins: [
          "0x111",
          "0x111"
        ],
        errCode: "",
        hashrates: [
          {
            algorithm: "etchash",
            hashrate: "224.3Mh"
          },
          {
            algorithm: "kaspa",
            hashrate: "86.4Mh"
          }
        ],
        configName: "3% config"
      }
    ]
  },
  {
    name: "Schroeder farm",
    totalHashrates: [
      {
        coinTag: "ETC",
        algorithm: "etchash",
        hashrate: "150.8Mh"
      },
      {
        coinTag: "MOAC",
        algorithm: "etchash",
        hashrate: "224.3Mh"
      },
      {
        coinTag: "KAS",
        algorithm: "kaspa",
        hashrate: "86.4Mh"
      }
    ],
    rigs: [
      {
        name: "Taylor",
        status: false,
        lastRequest: 1664382043,
        algorithms: [
          "etchash",
          "kaspa"
        ],
        coins: [
          "ETC",
          "KAS"
        ],
        pools: [
          "stratum2+tcp://49.12.5.183:8888",
          "49.12.5.183:8888"
        ],
        logins: [
          "0x111",
          "0x111"
        ],
        errCode: "",
        hashrates: [
          {
            algorithm: "etchash",
            hashrate: "224.3Mh"
          },
          {
            algorithm: "kaspa",
            hashrate: "86.4Mh"
          }
        ],
        configName: "3% config"
      }
    ]
  },
  {
    name: "Marina farm",
    totalHashrates: [
      {
        coinTag: "ETC",
        algorithm: "etchash",
        hashrate: "150.8Mh"
      },
      {
        coinTag: "MOAC",
        algorithm: "etchash",
        hashrate: "224.3Mh"
      },
      {
        coinTag: "KAS",
        algorithm: "kaspa",
        hashrate: "86.4Mh"
      }
    ],
    rigs: [
      {
        name: "Hunter",
        status: true,
        lastRequest: 1664382043,
        algorithms: [
          "etchash",
          "kaspa"
        ],
        coins: [
          "ETC",
          "KAS"
        ],
        pools: [
          "stratum2+tcp://49.12.5.183:8888",
          "49.12.5.183:8888"
        ],
        logins: [
          "0x111",
          "0x111"
        ],
        errCode: "NO_REQUESTS",
        hashrates: [
          {
            algorithm: "etchash",
            hashrate: "224.3Mh"
          },
          {
            algorithm: "kaspa",
            hashrate: "86.4Mh"
          }
        ],
        configName: "3% config"
      }
    ]
  },
  {
    name: "Robert farm",
    totalHashrates: [
      {
        coinTag: "ETC",
        algorithm: "etchash",
        hashrate: "150.8Mh"
      },
      {
        coinTag: "MOAC",
        algorithm: "etchash",
        hashrate: "224.3Mh"
      },
      {
        coinTag: "KAS",
        algorithm: "kaspa",
        hashrate: "86.4Mh"
      }
    ],
    rigs: [
      {
        name: "Brooks",
        status: false,
        lastRequest: 1664382043,
        algorithms: [
          "etchash",
          "kaspa"
        ],
        coins: [
          "ETC",
          "KAS"
        ],
        pools: [
          "stratum2+tcp://49.12.5.183:8888",
          "49.12.5.183:8888"
        ],
        logins: [
          "0x111",
          "0x111"
        ],
        errCode: "",
        hashrates: [
          {
            algorithm: "etchash",
            hashrate: "224.3Mh"
          },
          {
            algorithm: "kaspa",
            hashrate: "86.4Mh"
          }
        ],
        configName: "3% config"
      }
    ]
  },
  {
    name: "Tonia farm",
    totalHashrates: [
      {
        coinTag: "ETC",
        algorithm: "etchash",
        hashrate: "150.8Mh"
      },
      {
        coinTag: "MOAC",
        algorithm: "etchash",
        hashrate: "224.3Mh"
      },
      {
        coinTag: "KAS",
        algorithm: "kaspa",
        hashrate: "86.4Mh"
      }
    ],
    rigs: [
      {
        name: "Burris",
        status: false,
        lastRequest: 1664382043,
        algorithms: [
          "etchash",
          "kaspa"
        ],
        coins: [
          "ETC",
          "KAS"
        ],
        pools: [
          "stratum2+tcp://49.12.5.183:8888",
          "49.12.5.183:8888"
        ],
        logins: [
          "0x111",
          "0x111"
        ],
        errCode: "NO_REQUESTS",
        hashrates: [
          {
            algorithm: "etchash",
            hashrate: "224.3Mh"
          },
          {
            algorithm: "kaspa",
            hashrate: "86.4Mh"
          }
        ],
        configName: "3% config"
      }
    ]
  },
  {
    name: "Johns farm",
    totalHashrates: [
      {
        coinTag: "ETC",
        algorithm: "etchash",
        hashrate: "150.8Mh"
      },
      {
        coinTag: "MOAC",
        algorithm: "etchash",
        hashrate: "224.3Mh"
      },
      {
        coinTag: "KAS",
        algorithm: "kaspa",
        hashrate: "86.4Mh"
      }
    ],
    rigs: [
      {
        name: "Macdonald",
        status: true,
        lastRequest: 1664382043,
        algorithms: [
          "etchash",
          "kaspa"
        ],
        coins: [
          "ETC",
          "KAS"
        ],
        pools: [
          "stratum2+tcp://49.12.5.183:8888",
          "49.12.5.183:8888"
        ],
        logins: [
          "0x111",
          "0x111"
        ],
        errCode: "",
        hashrates: [
          {
            algorithm: "etchash",
            hashrate: "224.3Mh"
          },
          {
            algorithm: "kaspa",
            hashrate: "86.4Mh"
          }
        ],
        configName: "3% config"
      }
    ]
  },
  {
    name: "Janie farm",
    totalHashrates: [
      {
        coinTag: "ETC",
        algorithm: "etchash",
        hashrate: "150.8Mh"
      },
      {
        coinTag: "MOAC",
        algorithm: "etchash",
        hashrate: "224.3Mh"
      },
      {
        coinTag: "KAS",
        algorithm: "kaspa",
        hashrate: "86.4Mh"
      }
    ],
    rigs: [
      {
        name: "Ray",
        status: false,
        lastRequest: 1664382043,
        algorithms: [
          "etchash",
          "kaspa"
        ],
        coins: [
          "ETC",
          "KAS"
        ],
        pools: [
          "stratum2+tcp://49.12.5.183:8888",
          "49.12.5.183:8888"
        ],
        logins: [
          "0x111",
          "0x111"
        ],
        errCode: "NO_REQUESTS",
        hashrates: [
          {
            algorithm: "etchash",
            hashrate: "224.3Mh"
          },
          {
            algorithm: "kaspa",
            hashrate: "86.4Mh"
          }
        ],
        configName: "3% config"
      }
    ]
  }
];


const headerItems = [
  { headerText: 'etchash', bodyText: '13.5 Gh' },
  { headerText: 'etchash', bodyText: '192.3 Gh' },
  { headerText: 'firopow', bodyText: '243.4 Mh' },
  { headerText: 'kaspa', bodyText: '492.5 Mh' },
  { headerText: 'x17', bodyText: '195.6 Mh' },
  { headerText: 'sha256', bodyText: '17.8 Th' },
  { headerText: 'autolykos2', bodyText: '234.4 Mh' }
];

export const tableData = [
  {
    status: true,
    name: '01-Dom34-green5',
    last: '17.07.22/18:17',
    algo: 'ethash',
    coin: 'ETC',
    pool: 'eu1.ethermine.org:4444',
    login: '0xcdd47e77F642690E50d929641F0f78E3414e0D7E',
    troubles: '–',
    hashrate: 'ethash: 329.9 Mh',
    conf_name: '3% Config'

  },
  {
    status: false,
    name: '01-Dom34-green5',
    last: '17.07.22/18:17',
    algo: 'ethash',
    coin: 'ETH, ETC',
    pool: 'eu1.ethermine.org:4444; eu1.ethermine.org:5555',
    login: '0xcdd47e77F642690E50d929641F0f78E3414e0D7E; 0xcdd47e77F642690E50d929641F0f78E3414e0D7R',
    troubles: 'NO_REQUESTS',
    hashrate: '-',
    conf_name: '3% Config'
  },
  {
    status: false,
    name: '01-Dom34-green5',
    last: '17.07.22/18:17',
    algo: 'ethash',
    coin: 'ETC',
    pool: 'eu1.ethermine.org:4444',
    login: '0xcdd47e77F642690E50d929641F0f78E3414e0D7E',
    troubles:`NO_REQUESTS; Miner Off`,
    hashrate: 'ethash: 329.9 Mh',
    conf_name: '3% Config' 
  },
  {
    status: true,
    name: '01-Dom34-green5',
    last: '17.07.22/18:17',
    algo: 'ethash',
    coin: 'ETC',
    pool: 'eu1.ethermine.org:4444',
    login: '0xcdd47e77F642690E50d929641F0f78E3414e0D7E',
    troubles: '–',
    hashrate: 'ethash: 329.9 Mh',
    conf_name: '3% Config'
  },
  {
    status: true,
    name: '01-Dom34-green5',
    last: '17.07.22/18:17',
    algo: 'ethash',
    coin: 'ETC',
    pool: 'eu1.ethermine.org:4444',
    login: '0xcdd47e77F642690E50d929641F0f78E3414e0D7E',
    troubles: '–',
    hashrate: 'ethash: 329.9 Mh',
    conf_name: '3% Config'
  },
  {
    status: true,
    name: '01-Dom34-green5',
    last: '17.07.22/18:17',
    algo: 'ethash',
    coin: 'ETC',
    pool: 'eu1.ethermine.org:4444',
    login: '0xcdd47e77F642690E50d929641F0f78E3414e0D7E',
    troubles: '–',
    hashrate: 'ethash: 329.9 Mh',
    conf_name: '3% Config'
  }
];

export const tableHeaderText = {
  name: 'Rig Name',
  last: 'Last request',
  algo: 'Algo',
  coin: 'Coin',
  pool: 'Pool',
  login: 'Login\\Wallet',
  troubles: 'Troubles',
  hashrate: 'Hashrate',
  conf_name: 'Conf_name'
};
