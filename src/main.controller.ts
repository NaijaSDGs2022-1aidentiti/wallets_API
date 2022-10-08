//src/main.controller.ts

import { WalletService } from "./services/wallet.service";
import { Application } from "express";

export class Controller {
  private walletService: WalletService;

  constructor(private app: Application) {
    this.walletService = new WalletService();
    this.routes();
  }

  public routes() {
   // this.app.route("/").get(this.pokeService.welcomeMessage);
    this.app.route("/eth/balance").post(this.walletService.getETHBalance);
    this.app.route("/create").get(this.walletService.createwallet);
    this.app.route("/eth/transfer").post(this.walletService.ETHTransfer);
  

    //Chaining our route

    this.app
      .route("/pokemon/:id")
      .delete(this.walletService.deletePokemon)
      .put(this.walletService.updatePokemon);
  }
}