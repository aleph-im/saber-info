import { get_token } from '../services/tokens'

const StableCoin = ["USD", "CASH", "PAI", "UST"]
//let has_usd = USDs.some(symbol => this.pool.pc.symbol.includes(symbol))

export function get_token_price(symbol, coin_stats) {
  if (StableCoin.some(usdLike => symbol.includes(usdLike)))
    return 1
  for (let token of Object.values(coin_stats)) {
    if (symbol.includes(token['symbol']))
      return token['current_price']
  }
  return null
}

export function prepare_pool(pool, coin_stats) {
  let price_usd = pool.stats?.price_usd
  let vol24h_usd = pool.stats?.vol24_usd
  let tvl_usd = pool.stats?.tvl_usd
  if(pool.stats?.price_usd || pool.stats?.price_usd == undefined) {
    price_usd = get_token_price(pool.pc.symbol, coin_stats)
    vol24h_usd = pool.stats.vol24h * price_usd
    tvl_usd = (pool.stats.tvl_pc*2) * price_usd
  }

  return {
    ...pool,
    coin: get_token(pool.coin.address, pool.coin),
    pc: get_token(pool.pc.address, pool.pc),
    price: pool.stats.price,
    price_usd: price_usd,
    tvl_usd: tvl_usd,
    vol24h_usd: vol24h_usd
  }
}
