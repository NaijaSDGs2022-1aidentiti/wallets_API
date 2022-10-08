const multichainWallet = require('multichain-crypto-wallet');


export class BTCBalance {
    public getbicoinbalance = async (address: any) => {
        let result = { 'data': "dee" };
        // Get the BTC balance of an address.
        const data = await multichainWallet.getBalance({
            address: address,
            network: 'bitcoin-testnet', // 'bitcoin' or 'bitcoin-testnet'
        });
        const wallets = Promise.resolve(data)
        wallets.then((value) => {
            return result['data'] = value;
        })
        return result;
    }


}