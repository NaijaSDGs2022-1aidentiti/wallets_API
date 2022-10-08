

const multichainWallet = require('multichain-crypto-wallet');


export class BTCTransfers {




    public transferBTC = async (address: any, amount: number, mprivateKey: string) => {
        let result = { 'data': "dee" };
        // Transferring SOL from one address to another.
        // Transferring BTC from one address to another.
        const transfer = await multichainWallet.transfer({
            privateKey: mprivateKey,
            recipientAddress: address,
            amount: amount,
            network: 'bitcoin-testnet', // 'bitcoin' or 'bitcoin-testnet'
            fee: 10000, // Optional param default value is 10000
            subtractFee: false // Optional param default value is false
        });

        const wallets = Promise.resolve(transfer)
        wallets.then((value) => {
            return result['data'] = value;
        })
        return result;
    }






}