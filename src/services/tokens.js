// import { TokenListProvider, TokenInfo } from '@solana/spl-token-registry';
import axios from 'axios'

const pools = [{ "id": "usdc_usdt", "name": "USDT-USDC", "tokenIcons": [{ "name": "USDT", "symbol": "USDT", "address": "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB", "decimals": 6, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB.svg" }, { "name": "USD Coin", "symbol": "USDC", "address": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", "decimals": 6, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v.png" }], "underlyingIcons": [{ "name": "USDT", "symbol": "USDT", "address": "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB", "decimals": 6, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB.svg" }, { "name": "USD Coin", "symbol": "USDC", "address": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", "decimals": 6, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v.png" }], "currency": "USD", "dailyRewardsRateUSD": "54093.5590", "tvl": "535882053.87019600", "tvlUSD": "535882053.87019600", "dpyUSD": "0.01009430", "apyUSD": "3.75510102" }, { "id": "usdc_pai", "name": "PAI-USDC", "tokenIcons": [{ "name": "PAI (Parrot USD)", "symbol": "PAI", "address": "Ea5SjE2Y6yvCeW5dYTn7PYMuW5ikXkvbGdcmSnXeaLjS", "decimals": 6, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/Ea5SjE2Y6yvCeW5dYTn7PYMuW5ikXkvbGdcmSnXeaLjS.svg" }, { "name": "USD Coin", "symbol": "USDC", "address": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", "decimals": 6, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v.png" }], "underlyingIcons": [{ "name": "PAI (Parrot USD)", "symbol": "PAI", "address": "Ea5SjE2Y6yvCeW5dYTn7PYMuW5ikXkvbGdcmSnXeaLjS", "decimals": 6, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/Ea5SjE2Y6yvCeW5dYTn7PYMuW5ikXkvbGdcmSnXeaLjS.svg" }, { "name": "USD Coin", "symbol": "USDC", "address": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", "decimals": 6, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v.png" }], "currency": "USD", "dailyRewardsRateUSD": "13523.3897", "tvl": "66337450.17993300", "tvlUSD": "66337450.17993300", "dpyUSD": "0.02038575", "apyUSD": "7.72940696" }, { "id": "btc", "name": "BTC-renBTC", "tokenIcons": [{ "name": "Saber Wrapped Wrapped Bitcoin (Sollet) (8 decimals)", "symbol": "sBTC-8", "address": "SBTCB6pWqeDo6zGi9WVRMLCsKsN6JiR1RMUqvLtgSRv", "decimals": 8, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E.png" }, { "name": "renBTC", "symbol": "renBTC", "address": "CDJWUqTcYTVAKXAVXoQZFes5JUFc7owSeq7eMQcDSbo5", "decimals": 8, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/CDJWUqTcYTVAKXAVXoQZFes5JUFc7owSeq7eMQcDSbo5.png" }], "underlyingIcons": [{ "name": "Wrapped Bitcoin (Sollet)", "symbol": "BTC", "address": "9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E", "decimals": 6, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E.png" }, { "name": "renBTC", "symbol": "renBTC", "address": "CDJWUqTcYTVAKXAVXoQZFes5JUFc7owSeq7eMQcDSbo5", "decimals": 8, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/CDJWUqTcYTVAKXAVXoQZFes5JUFc7owSeq7eMQcDSbo5.png" }], "currency": "BTC", "dailyRewardsRateUSD": "40570.1692", "tvl": "6658.60728941", "tvlUSD": "289935737.20277963", "dpyUSD": "0.01399281", "apyUSD": "5.24243666" }, { "id": "pbtc", "name": "pBTC-renBTC", "tokenIcons": [{ "name": "pBTC (Parrot BTC)", "symbol": "pBTC", "address": "DYDWu4hE4MN3aH897xQ3sRTs5EAjJDmQsKLNhbpUiKun", "decimals": 8, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/DYDWu4hE4MN3aH897xQ3sRTs5EAjJDmQsKLNhbpUiKun.svg" }, { "name": "renBTC", "symbol": "renBTC", "address": "CDJWUqTcYTVAKXAVXoQZFes5JUFc7owSeq7eMQcDSbo5", "decimals": 8, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/CDJWUqTcYTVAKXAVXoQZFes5JUFc7owSeq7eMQcDSbo5.png" }], "underlyingIcons": [{ "name": "pBTC (Parrot BTC)", "symbol": "pBTC", "address": "DYDWu4hE4MN3aH897xQ3sRTs5EAjJDmQsKLNhbpUiKun", "decimals": 8, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/DYDWu4hE4MN3aH897xQ3sRTs5EAjJDmQsKLNhbpUiKun.svg" }, { "name": "renBTC", "symbol": "renBTC", "address": "CDJWUqTcYTVAKXAVXoQZFes5JUFc7owSeq7eMQcDSbo5", "decimals": 8, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/CDJWUqTcYTVAKXAVXoQZFes5JUFc7owSeq7eMQcDSbo5.png" }], "currency": "BTC", "dailyRewardsRateUSD": "13523.3897", "tvl": "1060.76541925", "tvlUSD": "46188908.65040275", "dpyUSD": "0.02927844", "apyUSD": "11.28556124" }, { "id": "ust", "name": "UST-USDC", "tokenIcons": [{ "name": "Wrapped UST (Wormhole)", "symbol": "wUST", "address": "CXLBjMMcwkc17GfJtBos6rQCo1ypeH6eDbB82Kby4MRm", "decimals": 9, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/CXLBjMMcwkc17GfJtBos6rQCo1ypeH6eDbB82Kby4MRm.png" }, { "name": "Saber Wrapped USD Coin (9 decimals)", "symbol": "sUSDC-9", "address": "JEFFSQ3s8T3wKsvp4tnRAsUBW7Cqgnf8ukBZC4C8XBm1", "decimals": 9, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v.png" }], "underlyingIcons": [{ "name": "Wrapped UST (Wormhole)", "symbol": "wUST", "address": "CXLBjMMcwkc17GfJtBos6rQCo1ypeH6eDbB82Kby4MRm", "decimals": 9, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/CXLBjMMcwkc17GfJtBos6rQCo1ypeH6eDbB82Kby4MRm.png" }, { "name": "USD Coin", "symbol": "USDC", "address": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", "decimals": 6, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v.png" }], "currency": "USD", "dailyRewardsRateUSD": "67616.9487", "tvl": "298092299.91387074", "tvlUSD": "298092299.91387074", "dpyUSD": "0.02268323", "apyUSD": "8.63740565" }, { "id": "dai", "name": "wDAI-USDC", "tokenIcons": [{ "name": "Dai Stablecoin (Wormhole)", "symbol": "wDAI", "address": "FYpdBuyAHSbdaAyD1sKkxyLWbAP8uUW9h6uvdhK74ij1", "decimals": 9, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/FYpdBuyAHSbdaAyD1sKkxyLWbAP8uUW9h6uvdhK74ij1.png" }, { "name": "Saber Wrapped USD Coin (9 decimals)", "symbol": "sUSDC-9", "address": "JEFFSQ3s8T3wKsvp4tnRAsUBW7Cqgnf8ukBZC4C8XBm1", "decimals": 9, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v.png" }], "underlyingIcons": [{ "name": "Dai Stablecoin (Wormhole)", "symbol": "wDAI", "address": "FYpdBuyAHSbdaAyD1sKkxyLWbAP8uUW9h6uvdhK74ij1", "decimals": 9, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/FYpdBuyAHSbdaAyD1sKkxyLWbAP8uUW9h6uvdhK74ij1.png" }, { "name": "USD Coin", "symbol": "USDC", "address": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", "decimals": 6, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v.png" }], "currency": "USD", "dailyRewardsRateUSD": "13523.3897", "tvl": "22012103.05460483", "tvlUSD": "22012103.05460483", "dpyUSD": "0.06143615", "apyUSD": "25.11225976" }, { "id": "busd", "name": "wBUSD-USDC", "tokenIcons": [{ "name": "Binance USD (Wormhole)", "symbol": "wBUSD", "address": "AJ1W9A9N9dEMdVyoDiam2rV44gnBm2csrPDP7xqcapgX", "decimals": 9, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/AJ1W9A9N9dEMdVyoDiam2rV44gnBm2csrPDP7xqcapgX.png" }, { "name": "Saber Wrapped USD Coin (9 decimals)", "symbol": "sUSDC-9", "address": "JEFFSQ3s8T3wKsvp4tnRAsUBW7Cqgnf8ukBZC4C8XBm1", "decimals": 9, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v.png" }], "underlyingIcons": [{ "name": "Binance USD (Wormhole)", "symbol": "wBUSD", "address": "AJ1W9A9N9dEMdVyoDiam2rV44gnBm2csrPDP7xqcapgX", "decimals": 9, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/AJ1W9A9N9dEMdVyoDiam2rV44gnBm2csrPDP7xqcapgX.png" }, { "name": "USD Coin", "symbol": "USDC", "address": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", "decimals": 6, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v.png" }], "currency": "USD", "dailyRewardsRateUSD": "13523.3897", "tvl": "35094083.25333938", "tvlUSD": "35094083.25333938", "dpyUSD": "0.03853467", "apyUSD": "15.08467270" }, { "id": "luna", "name": "wLUNA-renLUNA", "tokenIcons": [{ "name": "Wrapped LUNA Token (Wormhole)", "symbol": "wLUNA", "address": "2Xf2yAXJfg82sWwdLUo2x9mZXy6JCdszdMZkcF1Hf4KV", "decimals": 9, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/2Xf2yAXJfg82sWwdLUo2x9mZXy6JCdszdMZkcF1Hf4KV.png" }, { "name": "Saber Wrapped renLUNA (9 decimals)", "symbol": "srenLUNA-9", "address": "KUANeD8EQvwpT1W7QZDtDqctLEh2FfSTy5pThE9CogT", "decimals": 9, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/8wv2KAykQstNAj2oW6AHANGBiFKVFhvMiyyzzjhkmGvE.png" }], "underlyingIcons": [{ "name": "Wrapped LUNA Token (Wormhole)", "symbol": "wLUNA", "address": "2Xf2yAXJfg82sWwdLUo2x9mZXy6JCdszdMZkcF1Hf4KV", "decimals": 9, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/2Xf2yAXJfg82sWwdLUo2x9mZXy6JCdszdMZkcF1Hf4KV.png" }, { "name": "renLUNA", "symbol": "renLUNA", "address": "8wv2KAykQstNAj2oW6AHANGBiFKVFhvMiyyzzjhkmGvE", "decimals": 6, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/8wv2KAykQstNAj2oW6AHANGBiFKVFhvMiyyzzjhkmGvE.png" }], "currency": "LUNA", "dailyRewardsRateUSD": "13523.3897", "tvl": "1256080.20627174", "tvlUSD": "41098944.34921123", "dpyUSD": "0.03290447", "apyUSD": "12.75704235" }, { "id": "frax", "name": "wFRAX-USDC", "tokenIcons": [{ "name": "Frax (Wormhole)", "symbol": "wFRAX", "address": "8L8pDf3jutdpdr4m3np68CL9ZroLActrqwxi6s9Ah5xU", "decimals": 9, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/8L8pDf3jutdpdr4m3np68CL9ZroLActrqwxi6s9Ah5xU.png" }, { "name": "Saber Wrapped USD Coin (9 decimals)", "symbol": "sUSDC-9", "address": "JEFFSQ3s8T3wKsvp4tnRAsUBW7Cqgnf8ukBZC4C8XBm1", "decimals": 9, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v.png" }], "underlyingIcons": [{ "name": "Frax (Wormhole)", "symbol": "wFRAX", "address": "8L8pDf3jutdpdr4m3np68CL9ZroLActrqwxi6s9Ah5xU", "decimals": 9, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/8L8pDf3jutdpdr4m3np68CL9ZroLActrqwxi6s9Ah5xU.png" }, { "name": "USD Coin", "symbol": "USDC", "address": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", "decimals": 6, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v.png" }], "currency": "USD", "dailyRewardsRateUSD": "13523.3897", "tvl": "27849008.58565546", "tvlUSD": "27849008.58565546", "dpyUSD": "0.04855968", "apyUSD": "19.40452453" }, { "id": "hbtc", "name": "HBTC-renBTC", "tokenIcons": [{ "name": "HBTC (Wormhole)", "symbol": "wHBTC", "address": "8pBc4v9GAwCBNWPB5XKA93APexMGAS4qMr37vNke9Ref", "decimals": 9, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/8pBc4v9GAwCBNWPB5XKA93APexMGAS4qMr37vNke9Ref.png" }, { "name": "Saber Wrapped renBTC (9 decimals)", "symbol": "srenBTC-9", "address": "FACTQhZBfRzC7A76antnpAoZtiwYmUfdAN8wz7e8rxC5", "decimals": 9, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/CDJWUqTcYTVAKXAVXoQZFes5JUFc7owSeq7eMQcDSbo5.png" }], "underlyingIcons": [{ "name": "HBTC (Wormhole)", "symbol": "wHBTC", "address": "8pBc4v9GAwCBNWPB5XKA93APexMGAS4qMr37vNke9Ref", "decimals": 9, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/8pBc4v9GAwCBNWPB5XKA93APexMGAS4qMr37vNke9Ref.png" }, { "name": "renBTC", "symbol": "renBTC", "address": "CDJWUqTcYTVAKXAVXoQZFes5JUFc7owSeq7eMQcDSbo5", "decimals": 8, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/CDJWUqTcYTVAKXAVXoQZFes5JUFc7owSeq7eMQcDSbo5.png" }], "currency": "BTC", "dailyRewardsRateUSD": "13523.3897", "tvl": "752.29352538", "tvlUSD": "32757116.97566488", "dpyUSD": "0.04128382", "apyUSD": "16.26639487" }, { "id": "husd", "name": "HUSD-USDC", "tokenIcons": [{ "name": "HUSD Stablecoin (Wormhole)", "symbol": "wHUSD", "address": "BybpSTBoZHsmKnfxYG47GDhVPKrnEKX31CScShbrzUhX", "decimals": 8, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/BybpSTBoZHsmKnfxYG47GDhVPKrnEKX31CScShbrzUhX.png" }, { "name": "Saber Wrapped USD Coin (8 decimals)", "symbol": "sUSDC-8", "address": "88881Hu2jGMfCs9tMu5Rr7Ah7WBNBuXqde4nR5ZmKYYy", "decimals": 8, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v.png" }], "underlyingIcons": [{ "name": "HUSD Stablecoin (Wormhole)", "symbol": "wHUSD", "address": "BybpSTBoZHsmKnfxYG47GDhVPKrnEKX31CScShbrzUhX", "decimals": 8, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/BybpSTBoZHsmKnfxYG47GDhVPKrnEKX31CScShbrzUhX.png" }, { "name": "USD Coin", "symbol": "USDC", "address": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", "decimals": 6, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v.png" }], "currency": "USD", "dailyRewardsRateUSD": "13523.3897", "tvl": "56258283.14269428", "tvlUSD": "56258283.14269428", "dpyUSD": "0.02403804", "apyUSD": "9.15399416" }, { "id": "usdk", "name": "USDK-USDC", "tokenIcons": [{ "name": "USDK", "symbol": "USDK", "address": "2kycGCD8tJbrjJJqWN2Qz5ysN9iB4Bth3Uic4mSB7uak", "decimals": 9, "chainId": 101, "logoURI": "https://registry.saber.so/token-icons/usdk.png" }, { "name": "Saber Wrapped USD Coin (9 decimals)", "symbol": "sUSDC-9", "address": "JEFFSQ3s8T3wKsvp4tnRAsUBW7Cqgnf8ukBZC4C8XBm1", "decimals": 9, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v.png" }], "underlyingIcons": [{ "name": "USDK", "symbol": "USDK", "address": "2kycGCD8tJbrjJJqWN2Qz5ysN9iB4Bth3Uic4mSB7uak", "decimals": 9, "chainId": 101, "logoURI": "https://registry.saber.so/token-icons/usdk.png" }, { "name": "USD Coin", "symbol": "USDC", "address": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", "decimals": 6, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v.png" }], "currency": "USD", "dailyRewardsRateUSD": "13523.3897", "tvl": "20521640.98285162", "tvlUSD": "20521640.98285162", "dpyUSD": "0.06589819", "apyUSD": "27.18286904" }, { "id": "ftt", "name": "wFTT-FTT", "tokenIcons": [{ "name": "Wrapped FTT (Wormhole)", "symbol": "wFTT", "address": "GbBWwtYTMPis4VHb8MrBbdibPhn28TSrLB53KvUmb7Gi", "decimals": 9, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/GbBWwtYTMPis4VHb8MrBbdibPhn28TSrLB53KvUmb7Gi.png" }, { "name": "Saber Wrapped Wrapped FTT (Sollet) (9 decimals)", "symbol": "sFTT-9", "address": "FTT9rBBrYwcHam4qLvkzzzhrsihYMbZ3k6wJbdoahxAt", "decimals": 9, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/AGFEad2et2ZJif9jaGpdMixQqvW5i81aBdvKe7PHNfz3.png" }], "underlyingIcons": [{ "name": "Wrapped FTT (Wormhole)", "symbol": "wFTT", "address": "GbBWwtYTMPis4VHb8MrBbdibPhn28TSrLB53KvUmb7Gi", "decimals": 9, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/GbBWwtYTMPis4VHb8MrBbdibPhn28TSrLB53KvUmb7Gi.png" }, { "name": "Wrapped FTT (Sollet)", "symbol": "FTT", "address": "AGFEad2et2ZJif9jaGpdMixQqvW5i81aBdvKe7PHNfz3", "decimals": 6, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/AGFEad2et2ZJif9jaGpdMixQqvW5i81aBdvKe7PHNfz3.png" }], "currency": "FTT", "dailyRewardsRateUSD": "13523.3897", "tvl": "2551440.48558210", "tvlUSD": "144360502.67423527", "dpyUSD": "0.00936779", "apyUSD": "3.49037089" }, { "id": "srm", "name": "wSRM-SRM", "tokenIcons": [{ "name": "Serum (Wormhole)", "symbol": "wSRM", "address": "2jXy799YnEcRXneFo2GEAB6SDRsAa767HpWmktRr1DaP", "decimals": 6, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt.png" }, { "name": "Serum", "symbol": "SRM", "address": "SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt", "decimals": 6, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt.png" }], "underlyingIcons": [{ "name": "Serum (Wormhole)", "symbol": "wSRM", "address": "2jXy799YnEcRXneFo2GEAB6SDRsAa767HpWmktRr1DaP", "decimals": 6, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt.png" }, { "name": "Serum", "symbol": "SRM", "address": "SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt", "decimals": 6, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt.png" }], "currency": "SRM", "dailyRewardsRateUSD": "13523.3897", "tvl": "8495909.06308600", "tvlUSD": "69666454.31730520", "dpyUSD": "0.01941162", "apyUSD": "7.33698932" }, { "id": "ibbtc", "name": "ibBTC-BTC", "tokenIcons": [{ "name": "ibBTC (Wormhole)", "symbol": "ibBTC", "address": "66CgfJQoZkpkrEgC1z4vFJcSFc4V6T5HqbjSSNuqcNJz", "decimals": 9, "chainId": 101, "logoURI": "https://registry.saber.so/token-icons/ibbtc.svg" }, { "name": "Saber Wrapped Wrapped Bitcoin (Sollet) (9 decimals)", "symbol": "sBTC-9", "address": "9999j2A8sXUtHtDoQdk528oVzhaKBsXyRGZ67FKGoi7H", "decimals": 9, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E.png" }], "underlyingIcons": [{ "name": "ibBTC (Wormhole)", "symbol": "ibBTC", "address": "66CgfJQoZkpkrEgC1z4vFJcSFc4V6T5HqbjSSNuqcNJz", "decimals": 9, "chainId": 101, "logoURI": "https://registry.saber.so/token-icons/ibbtc.svg" }, { "name": "Wrapped Bitcoin (Sollet)", "symbol": "BTC", "address": "9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E", "decimals": 6, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E.png" }], "currency": "BTC", "dailyRewardsRateUSD": null, "tvl": "0.00110706", "tvlUSD": "48.20449587", "dpyUSD": null, "apyUSD": null }, { "id": "ibbtc_ren", "name": "ibBTC-renBTC", "tokenIcons": [{ "name": "ibBTC (Wormhole)", "symbol": "ibBTC", "address": "66CgfJQoZkpkrEgC1z4vFJcSFc4V6T5HqbjSSNuqcNJz", "decimals": 9, "chainId": 101, "logoURI": "https://registry.saber.so/token-icons/ibbtc.svg" }, { "name": "Saber Wrapped renBTC (9 decimals)", "symbol": "srenBTC-9", "address": "FACTQhZBfRzC7A76antnpAoZtiwYmUfdAN8wz7e8rxC5", "decimals": 9, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/CDJWUqTcYTVAKXAVXoQZFes5JUFc7owSeq7eMQcDSbo5.png" }], "underlyingIcons": [{ "name": "ibBTC (Wormhole)", "symbol": "ibBTC", "address": "66CgfJQoZkpkrEgC1z4vFJcSFc4V6T5HqbjSSNuqcNJz", "decimals": 9, "chainId": 101, "logoURI": "https://registry.saber.so/token-icons/ibbtc.svg" }, { "name": "renBTC", "symbol": "renBTC", "address": "CDJWUqTcYTVAKXAVXoQZFes5JUFc7owSeq7eMQcDSbo5", "decimals": 8, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/CDJWUqTcYTVAKXAVXoQZFes5JUFc7owSeq7eMQcDSbo5.png" }], "currency": "BTC", "dailyRewardsRateUSD": "13523.3897", "tvl": "480.76014451", "tvlUSD": "20933738.97257310", "dpyUSD": "0.06460093", "apyUSD": "26.58120748" }, { "id": "msol_sol", "name": "mSOL-SOL", "tokenIcons": [{ "name": "Marinade staked SOL (mSOL)", "symbol": "mSOL", "address": "mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So", "decimals": 9, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So.png" }, { "name": "Wrapped SOL", "symbol": "SOL", "address": "So11111111111111111111111111111111111111112", "decimals": 9, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/So11111111111111111111111111111111111111112.png" }], "underlyingIcons": [{ "name": "Marinade staked SOL (mSOL)", "symbol": "mSOL", "address": "mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So", "decimals": 9, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So.png" }, { "name": "Wrapped SOL", "symbol": "SOL", "address": "So11111111111111111111111111111111111111112", "decimals": 9, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/So11111111111111111111111111111111111111112.png" }], "currency": "SOL", "dailyRewardsRateUSD": "27046.7795", "tvl": "3860402.89908200", "tvlUSD": "574505159.44138294", "dpyUSD": "0.00470784", "apyUSD": "1.73025819" }, { "id": "apusdt", "name": "apUSDT-USDT", "tokenIcons": [{ "name": "Wrapped USDT (Allbridge from Polygon)", "symbol": "apUSDT", "address": "DNhZkUaxHXYvpxZ7LNnHtss8sQgdAfd1ZYS1fB7LKWUZ", "decimals": 6, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/DNhZkUaxHXYvpxZ7LNnHtss8sQgdAfd1ZYS1fB7LKWUZ.png" }, { "name": "USDT", "symbol": "USDT", "address": "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB", "decimals": 6, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB.svg" }], "underlyingIcons": [{ "name": "Wrapped USDT (Allbridge from Polygon)", "symbol": "apUSDT", "address": "DNhZkUaxHXYvpxZ7LNnHtss8sQgdAfd1ZYS1fB7LKWUZ", "decimals": 6, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/DNhZkUaxHXYvpxZ7LNnHtss8sQgdAfd1ZYS1fB7LKWUZ.png" }, { "name": "USDT", "symbol": "USDT", "address": "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB", "decimals": 6, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB.svg" }], "currency": "USD", "dailyRewardsRateUSD": "13523.3897", "tvl": "71171515.00854100", "tvlUSD": "71171515.00854100", "dpyUSD": "0.01900113", "apyUSD": "7.18042170" }, { "id": "apusdc", "name": "apUSDC-USDC", "tokenIcons": [{ "name": "Wrapped USDC (Allbridge from Polygon)", "symbol": "apUSDC", "address": "eqKJTf1Do4MDPyKisMYqVaUFpkEFAs3riGF3ceDH2Ca", "decimals": 6, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/eqKJTf1Do4MDPyKisMYqVaUFpkEFAs3riGF3ceDH2Ca.png" }, { "name": "USD Coin", "symbol": "USDC", "address": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", "decimals": 6, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v.png" }], "underlyingIcons": [{ "name": "Wrapped USDC (Allbridge from Polygon)", "symbol": "apUSDC", "address": "eqKJTf1Do4MDPyKisMYqVaUFpkEFAs3riGF3ceDH2Ca", "decimals": 6, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/eqKJTf1Do4MDPyKisMYqVaUFpkEFAs3riGF3ceDH2Ca.png" }, { "name": "USD Coin", "symbol": "USDC", "address": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", "decimals": 6, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v.png" }], "currency": "USD", "dailyRewardsRateUSD": "13523.3897", "tvl": "87271810.82232800", "tvlUSD": "87271810.82232800", "dpyUSD": "0.01549571", "apyUSD": "5.82013379" }, { "id": "mai", "name": "MAI-USDC", "tokenIcons": [{ "name": "MAI (miMATIC)", "symbol": "MAI", "address": "9mWRABuz2x6koTPCWiCPM49WUbcrNqGTHBV9T9k7y1o7", "decimals": 9, "chainId": 101, "logoURI": "https://registry.saber.so/token-icons/mai.svg" }, { "name": "Saber Wrapped USD Coin (9 decimals)", "symbol": "sUSDC-9", "address": "JEFFSQ3s8T3wKsvp4tnRAsUBW7Cqgnf8ukBZC4C8XBm1", "decimals": 9, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v.png" }], "underlyingIcons": [{ "name": "MAI (miMATIC)", "symbol": "MAI", "address": "9mWRABuz2x6koTPCWiCPM49WUbcrNqGTHBV9T9k7y1o7", "decimals": 9, "chainId": 101, "logoURI": "https://registry.saber.so/token-icons/mai.svg" }, { "name": "USD Coin", "symbol": "USDC", "address": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", "decimals": 6, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v.png" }], "currency": "USD", "dailyRewardsRateUSD": "13523.3897", "tvl": "31976660.91451035", "tvlUSD": "31976660.91451035", "dpyUSD": "0.04229144", "apyUSD": "16.69136467" }, { "id": "psol", "name": "pSOL-prtSOL", "tokenIcons": [{ "name": "pSOL (Parrot SOL)", "symbol": "pSOL", "address": "9EaLkQrbjmbbuZG9Wdpo8qfNUEjHATJFSycEmw6f1rGX", "decimals": 9, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/9EaLkQrbjmbbuZG9Wdpo8qfNUEjHATJFSycEmw6f1rGX.svg" }, { "name": "Parrot Stake Pool SOL", "symbol": "prtSOL", "address": "BdZPG9xWrG3uFrx2KrUW1jT4tZ9VKPDWknYihzoPRJS3", "decimals": 9, "chainId": 101, "logoURI": "https://registry.saber.so/token-icons/prtsol.svg" }], "underlyingIcons": [{ "name": "pSOL (Parrot SOL)", "symbol": "pSOL", "address": "9EaLkQrbjmbbuZG9Wdpo8qfNUEjHATJFSycEmw6f1rGX", "decimals": 9, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/9EaLkQrbjmbbuZG9Wdpo8qfNUEjHATJFSycEmw6f1rGX.svg" }, { "name": "Parrot Stake Pool SOL", "symbol": "prtSOL", "address": "BdZPG9xWrG3uFrx2KrUW1jT4tZ9VKPDWknYihzoPRJS3", "decimals": 9, "chainId": 101, "logoURI": "https://registry.saber.so/token-icons/prtsol.svg" }], "currency": "SOL", "dailyRewardsRateUSD": "13523.3897", "tvl": "606390.71483710", "tvlUSD": "90243066.18205737", "dpyUSD": "0.01498552", "apyUSD": "5.62721756" }, { "id": "prtsol", "name": "prtSOL-SOL", "tokenIcons": [{ "name": "Parrot Stake Pool SOL", "symbol": "prtSOL", "address": "BdZPG9xWrG3uFrx2KrUW1jT4tZ9VKPDWknYihzoPRJS3", "decimals": 9, "chainId": 101, "logoURI": "https://registry.saber.so/token-icons/prtsol.svg" }, { "name": "Wrapped SOL", "symbol": "SOL", "address": "So11111111111111111111111111111111111111112", "decimals": 9, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/So11111111111111111111111111111111111111112.png" }], "underlyingIcons": [{ "name": "Parrot Stake Pool SOL", "symbol": "prtSOL", "address": "BdZPG9xWrG3uFrx2KrUW1jT4tZ9VKPDWknYihzoPRJS3", "decimals": 9, "chainId": 101, "logoURI": "https://registry.saber.so/token-icons/prtsol.svg" }, { "name": "Wrapped SOL", "symbol": "SOL", "address": "So11111111111111111111111111111111111111112", "decimals": 9, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/So11111111111111111111111111111111111111112.png" }], "currency": "SOL", "dailyRewardsRateUSD": "13523.3897", "tvl": "1116419.86239643", "tvlUSD": "166145603.92183716", "dpyUSD": "0.00813948", "apyUSD": "3.00051504" }, { "id": "stsol", "name": "stSOL-SOL", "tokenIcons": [{ "name": "Lido Staked SOL", "symbol": "stSOL", "address": "7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj", "decimals": 9, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj.png" }, { "name": "Wrapped SOL", "symbol": "SOL", "address": "So11111111111111111111111111111111111111112", "decimals": 9, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/So11111111111111111111111111111111111111112.png" }], "underlyingIcons": [{ "name": "Lido Staked SOL", "symbol": "stSOL", "address": "7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj", "decimals": 9, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj.png" }, { "name": "Wrapped SOL", "symbol": "SOL", "address": "So11111111111111111111111111111111111111112", "decimals": 9, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/So11111111111111111111111111111111111111112.png" }], "currency": "SOL", "dailyRewardsRateUSD": "13523.3897", "tvl": "953570.39355991", "tvlUSD": "141910345.96958536", "dpyUSD": "0.00952953", "apyUSD": "3.52814820" }, { "id": "abbusd", "name": "abBUSD-USDC", "tokenIcons": [{ "name": "Wrapped BUSD (Allbridge from BSC)", "symbol": "abBUSD", "address": "6nuaX3ogrr2CaoAPjtaKHAoBNWok32BMcRozuf32s2QF", "decimals": 9, "chainId": 101, "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/AJ1W9A9N9dEMdVyoDiam2rV44gnBm2csrPDP7xqcapgX/logo.png" }, { "name": "Saber Wrapped USD Coin (9 decimals)", "symbol": "sUSDC-9", "address": "JEFFSQ3s8T3wKsvp4tnRAsUBW7Cqgnf8ukBZC4C8XBm1", "decimals": 9, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v.png" }], "underlyingIcons": [{ "name": "Wrapped BUSD (Allbridge from BSC)", "symbol": "abBUSD", "address": "6nuaX3ogrr2CaoAPjtaKHAoBNWok32BMcRozuf32s2QF", "decimals": 9, "chainId": 101, "logoURI": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/AJ1W9A9N9dEMdVyoDiam2rV44gnBm2csrPDP7xqcapgX/logo.png" }, { "name": "USD Coin", "symbol": "USDC", "address": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", "decimals": 6, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v.png" }], "currency": "USD", "dailyRewardsRateUSD": "13523.3897", "tvl": "17470208.45455629", "tvlUSD": "17470208.45455629", "dpyUSD": "0.07740829", "apyUSD": "32.63100991" }, { "id": "socn", "name": "SOCN-SOL", "tokenIcons": [{ "name": "Wrapped SOL", "symbol": "SOL", "address": "So11111111111111111111111111111111111111112", "decimals": 9, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/So11111111111111111111111111111111111111112.png" }, { "name": "Socean", "symbol": "SOCN", "address": "5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm", "decimals": 9, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm.png" }], "underlyingIcons": [{ "name": "Wrapped SOL", "symbol": "SOL", "address": "So11111111111111111111111111111111111111112", "decimals": 9, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/So11111111111111111111111111111111111111112.png" }, { "name": "Socean", "symbol": "SOCN", "address": "5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm", "decimals": 9, "chainId": 101, "logoURI": "https://cdn.jsdelivr.net/gh/saber-hq/spl-token-icons@master/icons/101/5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm.png" }], "currency": "SOL", "dailyRewardsRateUSD": "13523.3897", "tvl": "136039.13105839", "tvlUSD": "20245343.48410990", "dpyUSD": "0.06679753", "apyUSD": "27.60107381" }]

const UPSTREAM_URI = "https://api.saber.so/api/v1/poolRegistry"

const overlay = {
  "11111111111111111111111111111111": {
    "address": "11111111111111111111111111111111",
    "name": "Native Solana",
    "decimals": 9,
    "symbol": "SOL",
    "logoURI": "https://ipfs.io/ipfs/Qmf1ChZ6kfVuhQUXusSrSBoppkTYeisAXXdDFR15LAyBDw"
  },
  "CsZ5LZkDS7h9TDKjrbL7VAwQZ9nsRu8vJLhRYfmGaN8K": {
    "address": "CsZ5LZkDS7h9TDKjrbL7VAwQZ9nsRu8vJLhRYfmGaN8K",
    "name": "Wrapped ALEPH (Sollet)",
    "decimals": 6,
    "symbol": "ALEPH",
    "logoURI": "https://ipfs.io/ipfs/QmQxzDZzQJJ4Jb1npvLYbXZjHDCyqywHWBADcJbGWJGEqW/Aleph.im%20-%20Token/Aleph.im-Token-v1.1.png"
  }
}

function apply_underlying_meta(address, underlying) {
  overlay[address]['name'] = underlying['name']
  overlay[address]['logoURI'] = underlying['logoURI']
  overlay[address]['symbol'] = underlying['symbol']
}

function apply_pools(tpools) {
  for (let pool of tpools) {
    for (let token of pool.tokenIcons) {
      overlay[token['address']] = token
    }
    for (let token of pool.underlyingIcons) {
      overlay[token['address']] = token
    }
    apply_underlying_meta(pool.tokenIcons[0]['address'], pool.underlyingIcons[0])
    apply_underlying_meta(pool.tokenIcons[1]['address'], pool.underlyingIcons[1])
  }
}

apply_pools(pools)

export function get_token(address, def) {
  if (overlay[address] !== undefined)
    return overlay[address]
  else if (def !== undefined)
    return def
  else
    return {
      address: address,
      symbol: '???'
    }
}

async function fetch_upstream() {
  let result = await axios.get(UPSTREAM_URI)
  apply_pools(result.data.data.pools)
}
fetch_upstream()