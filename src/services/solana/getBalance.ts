const multichainWallet = require('multichain-crypto-wallet');


export class SOLBalance {


    public getSolBalance = async (address: any) => {

        let result = { 'data': "dee" };
        // Get the SOL balance of an address.
        const data = await multichainWallet.getBalance({
            address: address,
            network: 'solana',
            rpcUrl: 'https://api.devnet.solana.com',
        });

        const wallets = Promise.resolve(data)
        wallets.then((value) => {

            return result['data'] = value;


        })
        console.log(result)
        return result;
    }



}