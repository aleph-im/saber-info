import axios from 'axios'

const market_ids = [
    'bitcoin',
    'terra-luna',
    'solana',
    'ftx-token',
    'serum',
    'ethereum',
    'bilira'
]

const coingecko_api_url = "https://api.coingecko.com/api/v3/coins/markets"

export async function get_coin_stats() {
  let result = await axios.get(coingecko_api_url, {
    params: {
      vs_currency: 'usd',
      ids: market_ids.join(',')
    }
  })
  let coin_stats = {}
  for (let token of result.data) {
    token['symbol'] = token['symbol'].toUpperCase()
    coin_stats[token['symbol']] = token
  }
  return coin_stats
}

