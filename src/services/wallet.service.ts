import { Request, Response } from 'express';
const multichainWallet = require('multichain-crypto-wallet');
import { Pokemon } from '../model/pokeApi.model';
import { ETHBalance } from './ethereum/getBalance'; 
import { ETHTransfers } from './ethereum/transfers'; 
import {bnbImage,ethImage,btcImage,solImage,wavImage,maticImage } from'../constants/constants'


export class WalletService {
 
  public ETHTransfer=async(req: Request, res: Response)=> {
    var pk = req.body.privateKey;
    var chain:number = req.body.chain;
    var result:any;
    var address = req.body.address;
    var amount = req.body.amount;
    if (chain==1) {
 
      result= await new ETHTransfers().transferBNB(address,amount,pk)
     
    } else if (chain==2) {
      result= await new ETHTransfers().transferETH(address,amount,pk)
   
     
    } else if (chain==3) {
     
      result= await new ETHTransfers().transferPOL(address,amount,pk)
     
    }else{

    }
  
 

    res.send(result)
    console.log(result['data']['hash'])
  }

  
  

  public getETHBalance=async(req: Request, res: Response)=> {
    var chain = req.body.getChain;
    var result:any;
    var address = req.body.address;

    if (chain==1) {
 
      result= await new ETHBalance().getETHbalance(address)
     
    } else if (chain==2) {
      result= await new ETHBalance().getBNBbalance(address)
   
     
    } else if (chain==3) {
     
      result= await new ETHBalance().getpolygonbalance(address)
     
    }else{

    }
  
    res.send(result)
    console.log(result)
  }








  public createwallet = async (req: Request, res: Response) => {

    // Creating an Ethereum wallet.
    const ethWallet = await multichainWallet.createWallet({
      derivationPath: "m/44'/60'/0'/0/0", // Leave empty to use default derivation path
      network: 'ethereum',
    }); // NOTE - Address generated will work for EVM compatible blockchains E.g. Binance smart chain, Polygon etc
    let eth = {"wallet": "Ethereum",account: ethWallet,
    "img":ethImage
    ,"note": "this address is compatible with all EVM compatible blockchains eg.BSC, Polygon" }
    let bnb = {"wallet": "BNB",account: ethWallet,img:bnbImage, "note": "this address is compatible with all EVM compatible blockchains eg.BSC, Polygon" }
    let mtc = {"wallet": "MATIC",account: ethWallet,img:maticImage, "note": "this address is compatible with all EVM compatible blockchains eg.BSC, Polygon" }

    // Creating a Bitcoin wallet.
    const btcWallet = await multichainWallet.createWallet({
      derivationPath: "m/44'/0'/0'/0/0", // Leave empty to use default derivation path
      network: 'bitcoin', // 'bitcoin' or 'bitcoin-testnet'
    });

    let btc = {"wallet": "Bitcoin", account: btcWallet,img:btcImage, "note": "this address is compatible for BTC nets" }


    // Creating a Solana wallet.
    const solWallet = await multichainWallet.createWallet({
      derivationPath: "m/44'/501'/0'/0'", // Leave empty to use default derivation path
      network: 'solana',
    });

    let sol = {"wallet": "Solana",account: solWallet,img:solImage, "note": "this address is compatible for all Solana nets" }


    // Creating a Waves wallet.
    const wavesWallet = await multichainWallet.createWallet({
      cluster: 'testnet', // Can also be mainnet,
      network: 'waves',
    });

    let wav = {"wallet": "Waves",account: wavesWallet,img:wavImage, "note": "this address is for waves" }

    const arr = [];
    arr.push(eth,bnb,mtc, btc, sol, wav)
    const wallets = Promise.resolve(arr)
    wallets.then((value) => {
      res.send(value)
    })

  }







  public deletePokemon(req: Request, res: Response) {
    const pokemonID = req.params.id;
    Pokemon.findByIdAndDelete(pokemonID, (error: Error, deleted: any) => {
      if (error) {
        res.send(error);
      }
      const message = deleted ? 'Deleted successfully' : 'Pokemon not found :(';
      res.send(message);
    });
  }

  //Updating a pokemon






  public updatePokemon(req: Request, res: Response) {
    const pokemonId = req.params.id;
    Pokemon.findByIdAndUpdate(
      pokemonId,
      req.body,
      (error: Error, pokemon: any) => {
        if (error) {
          res.send(error);
        }
        const message = pokemon
          ? 'Updated successfully'
          : 'Pokemon not found :(';
        res.send(message);
      }
    );
  }
}






// {
//   "data": {
//     "blockTime": 1664601441,
//     "meta": {
//       "err": null,
//       "fee": 5000,
//       "innerInstructions": [],
//       "loadedAddresses": {
//         "readonly": [],
//         "writable": []
//       },
//       "logMessages": [
//         "Program 11111111111111111111111111111111 invoke [1]",
//         "Program 11111111111111111111111111111111 success"
//       ],
//       "postBalances": [
//         399990000,
//         600000000,
//         1
//       ],
//       "postTokenBalances": [],
//       "preBalances": [
//         499995000,
//         500000000,
//         1
//       ],
//       "preTokenBalances": [],
//       "rewards": [],
//       "status": {
//         "Ok": null
//       }
//     },
//     "slot": 165747404,
//     "transaction": {
//       "message": {
//         "header": {
//           "numReadonlySignedAccounts": 0,
//           "numReadonlyUnsignedAccounts": 1,
//           "numRequiredSignatures": 1
//         },
//         "accountKeys": [
//           "3hfiMFXUcxhh8n3udTMEJ4jakoVMdS4u1eWLUmeSk41p",
//           "Ff7hZR8E4cg3MxonWxE2JezGS6d89w5X6HCHKmW632TW",
//           "11111111111111111111111111111111"
//         ],
//         "recentBlockhash": "Cdx1zFaE15ZbNtUF51GmXJpz8uusPxYkdrdWA27UL8ww",
//         "instructions": [
//           {
//             "accounts": [
//               0,
//               1
//             ],
//             "data": "3Bxs411Dtc7pkFQj",
//             "programIdIndex": 2
//           }
//         ],
//         "indexToProgramIds": {}
//       },
//       "signatures": [
//         "YLZ3sxMwhSw8dKhM4vvSfuNRMmeA4TJHHRUMRxCB2XNERAzPR9ojWU7XZQ4NJWvfiXRBWsYQWPNda8DgpBQtKad"
//       ]
//     }
//   }
// }