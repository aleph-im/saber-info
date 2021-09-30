import axios from 'axios'

const market_ids = [
    'bitcoin',
    'terra-luna',
    'solana',
    'ftx-token',
    'serum'
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

export function get_token_price(symbol, coin_stats) {
  if (symbol.includes('USD'))
    return 1
  for (let token of Object.values(coin_stats)) {
    if (symbol.includes(token['symbol']))
      return token['current_price']
  }
  return null
}