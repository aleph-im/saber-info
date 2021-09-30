import { get_token } from '../services/tokens'

export function get_token_price(symbol, coin_stats) {
  if (symbol.includes('USD'))
    return 1
  for (let token of Object.values(coin_stats)) {
    if (symbol.includes(token['symbol']))
      return token['current_price']
  }
  return null
}

export function prepare_pool(pool, coin_stats) {
  let usd_price = get_token_price(pool.pc.symbol, coin_stats)
  return {
    ...pool,
    coin: get_token(pool.coin.address, pool.coin),
    pc: get_token(pool.pc.address, pool.pc),
    price: pool.stats.price,
    price_usd: usd_price,
    tvl_usd: (pool.stats.tvl_coin + pool.stats.tvl_pc) * usd_price,
    vol24h_usd: pool.stats.vol24h * usd_price
  }
}