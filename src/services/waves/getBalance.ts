const multichainWallet = require('multichain-crypto-wallet');


export class WAVESBalance {


    public getwavesbalance = async (address: any) => {
        let result = { 'data': "dee" };
        // Get the WAVES balance of an address.
        const data = await multichainWallet.getBalance({
            network: 'waves',
            address: '3NBE5tjbQn9BHczjD6NSSuFDKVHKsBRzTv9',
            rpcUrl: 'https://nodes-testnet.wavesnodes.com',
        });
        const wallets = Promise.resolve(data)
        wallets.then((value) => {
            return result['data'] = value;
        })
        return result;
    }
}