

const multichainWallet = require('multichain-crypto-wallet');


export class ETHTransfers {




    public transferETH = async (address: any, amount: number, mprivateKey: string) => {
        let result = { 'data': "dee" };
        // Transferring ETH from one address to another.
        const transfer = await multichainWallet.transfer({
            recipientAddress: address,
            amount: amount,
            network: 'ethereum',
            rpcUrl: 'https://rinkeby-light.eth.linkpool.io',
            privateKey:
                mprivateKey,
            gasPrice: '10', // Gas price is in Gwei. Leave empty to use default gas price
            data: 'Money for transportation', // Send a message
        }); // NOTE - For other EVM compatible blockchains all you have to do is change the rpcUrl.


        const wallets = Promise.resolve(transfer)
        wallets.then((value) => {
            return result['data'] = value;
        })
        return result;
    }



    public transferBNB = async (address: any, amount: number, mprivateKey: string) => {
        let result = { 'data': "dee" };
        // Transferring ETH from one address to another.
        const transfer = await multichainWallet.transfer({
            recipientAddress: address,
            amount: amount,
            network: 'ethereum',
            rpcUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
            privateKey:
                mprivateKey,
            gasPrice: '10', // Gas price is in Gwei. Leave empty to use default gas price
            data: 'Money for transportation', // Send a message
        }); // NOTE - For other EVM compatible blockchains all you have to do is change the rpcUrl.


        const wallets = Promise.resolve(transfer)
        wallets.then((value) => {
            return result['data'] = value;
        })
        return result;
    }




    public transferPOL = async (address: any, amount: number, mprivateKey: string) => {
        let result = { 'data': "dee" };
        // Transferring ETH from one address to another.
        const transfer = await multichainWallet.transfer({
            recipientAddress: address,
            amount: amount,
            network: 'ethereum',
            rpcUrl: 'https://rpc-mumbai.maticvigil.com/',
            privateKey:
                mprivateKey,
            gasPrice: '10', // Gas price is in Gwei. Leave empty to use default gas price
            data: 'Money for transportation', // Send a message
        }); // NOTE - For other EVM compatible blockchains all you have to do is change the rpcUrl.


        const wallets = Promise.resolve(transfer)
        wallets.then((value) => {
            return result['data'] = value;
        })
        return result;
    }




}