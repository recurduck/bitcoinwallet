import axios from 'axios';
export const bitcoinService = {
    getRate,
    getMarcketPrice,
    getTradeVolume,
    getAvgBlockSize,
    getWalletUsers,
    // getConfirmedTransactions
}

async function getRate(coin) {
    const rate = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coin}`)
        .then(res => res.data)
        .catch(err => console.log('err: ', err))
    return +rate
}

async function getMarcketPrice(month) {
    const {data} = await axios.get(`https://api.blockchain.info/charts/market-price?timespan=${month}months&format=json&cors=true`)
    return data
}

async function getTradeVolume(month) {
    const {data} = await axios.get(`https://api.blockchain.info/charts/trade-volume?timespan=${month}months&format=json&cors=true`)
    return data
}

async function getAvgBlockSize(month) {
    const {data} = await axios.get(`https://api.blockchain.info/charts/avg-block-size?timespan=${month}months&format=json&cors=true`)
    return data
}

async function getWalletUsers(month) {
    const {data} = await axios.get(`https://api.blockchain.info/charts/my-wallet-n-users?timespan=${month}months&format=json&cors=true`)
    return data
}

