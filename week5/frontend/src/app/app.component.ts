import {Component, ChangeDetectorRef, Provider} from '@angular/core';
import {metaMaskModule} from "./app.metamask";
import { BigNumber, Contract, ethers, providers, utils, Wallet } from 'ethers';

import tokenJson from '../assets/LotteryToken.json';
import lotteryJson from '../assets/LotteryContract.json';

const LOTTERY_TOKEN_ADDRESS = '';
const LOTTERY_CONTRACT_ADDRESS = '';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  metaMask: metaMaskModule;
  userWallet: Wallet;
  defaultProvider:providers.Provider; // TODO change
  tokenContractAddress: string;
  tokenContract: Contract | undefined;
  lotteryContractAddress: string;
  lotteryContract: Contract | undefined;

  lotteryStatus: any


  /**
   * App Component Constructor
   * @param http
   * @param cdr
   */
  constructor(private cdr: ChangeDetectorRef) {
    // Define our MetaMask Wallet Provider with angular view updater as callback
    this.metaMask = new metaMaskModule(() => cdr.detectChanges());
    // TODO fix and connect with MetaMask Wallet
    this.userWallet = ethers.Wallet.createRandom();
    // Setup a default provider - TODO connect with metamask
    this.defaultProvider = ethers.getDefaultProvider('goerli');

    // Set Contract Addresses
    this.tokenContractAddress = LOTTERY_TOKEN_ADDRESS;
    this.lotteryContractAddress = LOTTERY_CONTRACT_ADDRESS;

    // Set Token Contract Object
    /*this.tokenContract = new Contract(
      this.tokenContractAddress,
      tokenJson.abi,
      this.userWallet
    );

    // Set Lottery Contract Object
    this.lotteryContract = new Contract(
      this.lotteryContractAddress,
      lotteryJson.abi,
      this.userWallet
    );*/

    this.lotteryStatus = {
      state: 'Unknown',
      currentBlockDate: 'N/A',
      closingTimeDate: 'N/A'
    }

  }

  /**
   * Get Lottery Status and closing date/time
   */
  async checkStatus(){
    alert('Not yet deployed');
    //const state = await this.lotteryContract.betsOpen();
    //if (!state) return;
    //const currentBlock = await this.defaultProvider.getBlock("latest");
    //const closingTime = await this.lotteryContract.betsClosingTime();
    //this.lotteryStatus.state = state;
    //this.lotteryStatus.currentBlockDate = new Date(currentBlock.timestamp * 1000);
    //this.lotteryStatus.closingTimeDate = new Date(closingTime.toNumber() * 1000);
  }

  openbets(){
    alert('Open bets');
  }

  topupaccount(){
    alert('Topup yer account');
  }

  betwithaccount(){
    alert('Place yer bets');
  }

  closebets(){
    alert('Close bets');
  }

  checkplayprize(){
    alert('Check prize');
  }


  showmethemoney(){
    alert('Show me the Money!!!');
  }

  burnbabyburn(){
    alert('Burn baby burn!!!');
  }
}
