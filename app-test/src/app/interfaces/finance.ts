export interface Finance {
  by: string;
    valid_key: any;
    results: {
      currencies: {
      source: string,
      USD: {
        name: string,
        buy: number,
        sell: number,
        variation: number
      },
      EUR: {
      name: string,
      buy: number,
      sell: number,
      variation: number
      },
      GBP: {
      name: string,
      buy: number,
      sell: any,
      variation: number
      },
      ARS: {
      name: string,
      buy: number,
      sell: any,
      variation: number
      },
      BTC: {
      name: string,
      buy: number,
      sell: any,
      variation: number
      }
    },
    stocks: {
      IBOVESPA: {
      name: string,
      location: string,
      points: number,
      variation: number
      },
      NASDAQ: {
      name: string,
      location: string,
      points: number,
      variation: number
      },
      CAC: {
      name: string,
      location: string,
      variation: number
      },
      NIKKEI: {
      name: string,
      location: string,
      variation: number
      }
      },
      available_sources: [
      string
    ],
      bitcoin: {
      blockchain_info: {
      name: string,
      format: [
      string,
      string
    ],
    last: number,
    buy: number,
    sell: number,
    variation: number
  },
    coinbase: {
    name: string,
    format: [
      string,
      string
    ],
      last: number,
      variation: number
    },
      bitstamp: {
      name: string,
      format: [
        string,
        string
      ],
      last: number,
      buy: number,
      sell: number,
      variation: number
    },
    foxbit: {
      name: string,
      format: [
        string,
        string
      ],
      last: number,
      variation: number
    },
    mercadobitcoin: {
      name: string,
      format: [
        string,
        string
      ],
      last: number,
      buy: number,
      sell: number,
      variation: number
    },
    omnitrade: {
    name: string,
    format: [
    string,
    string
    ],
    last: number,
    buy: number,
    sell: number,
    variation: number
    },
    xdex: {
    name: string,
    format: [
      string,
      string
    ],
    last: number,
    variation: number
    }
  },
    taxes: [
    {
      date: any,
      cdi: number,
      selic: number,
      daily_factor: number
    }
    ]
};
execution_time: number;
from_cache: any;
}
