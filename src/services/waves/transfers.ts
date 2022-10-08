

const multichainWallet = require('multichain-crypto-wallet');


export class WAVESTransfers {





    public transferWAVES = async (address: any, amount: number, mprivateKey: string) => {
        let result = { 'data': "dee" };
        const transfer = await multichainWallet.transfer({
            recipientAddress: address,
            amount: amount,
            network: 'waves',
            rpcUrl: 'https://nodes-testnet.wavesnodes.com',
            privateKey:
                mprivateKey,
        });

        const wallets = Promise.resolve(transfer)
        wallets.then((value) => {
            return result['data'] = value;
        })
        return result;
    }





}