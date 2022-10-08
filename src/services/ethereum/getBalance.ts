const multichainWallet = require('multichain-crypto-wallet');


export class ETHBalance {




    public getETHbalance = async (address: any) => {
        let result = { 'data': "dee" };
        // Get the ETH balance of an address.
        const data = await multichainWallet.getBalance({
            address: address,
            network: 'ethereum',
            rpcUrl: 'https://rinkeby-light.eth.linkpool.io',
        });  // NOTE - For otherEVM compatible blockchains all you have to do is change the rpcUrl.

        const wallets = Promise.resolve(data)
        wallets.then((value) => {
            return result['data'] = value;
        })
        return result;
    }




    
    public getBNBbalance = async (address: any) => {
        let result = { 'data': "dee" };
        // Get the ETH balance of an address.
        const data = await multichainWallet.getBalance({
            address: address,
            network: 'ethereum',
            rpcUrl: 'https://bsc-dataseed1.binance.org/',
        });  // NOTE - For otherEVM compatible blockchains all you have to do is change the rpcUrl.

        const wallets = Promise.resolve(data)
        wallets.then((value) => {
            return result['data'] = value;
        })
        return result;
    }





    public getpolygonbalance = async (address: any) => {
        let result = { 'data': "dee" };
        // Get the ETH balance of an address.
        const data = await multichainWallet.getBalance({
            address: address,
            network: 'ethereum',
            rpcUrl: 'https://rpc-mumbai.maticvigil.com/',
        });  // NOTE - For otherEVM compatible blockchains all you have to do is change the rpcUrl.

        const wallets = Promise.resolve(data)
        wallets.then((value) => {
            return result['data'] = value;
        })
        return result;
    }









}