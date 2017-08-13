import { Component, OnInit } from '@angular/core';
import {Card, Player, UnoDeck} from '../model/uno';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public static countPlayer: number = 2;
  public deck:UnoDeck = new UnoDeck();

  public players:Player[] = [];

  constructor() { }

  ngOnInit() {
  }


  public GetPlayersCount():number {
    return HeaderComponent.countPlayer;
  }

  public AddPlayer():number {
    if(HeaderComponent.countPlayer< 6) {
      HeaderComponent.countPlayer = HeaderComponent.countPlayer +1;
    }
    else {
      HeaderComponent.countPlayer = 7;
    }
    return HeaderComponent.countPlayer;
  }

  public RemovePlayer():number {
    if(HeaderComponent.countPlayer> 2) {
      HeaderComponent.countPlayer = HeaderComponent.countPlayer - 1;
    }
    else {
      HeaderComponent.countPlayer = 2;
    }
    return HeaderComponent.countPlayer;
  }

  public StartGame() {
    this.deck.Shuffle();
    this.players= [];
    for(let i = 0; i<HeaderComponent.countPlayer; i++) {
      let playerCards:Card[] = [];
      let nxtCard = 0;
      for(let num = 0; num<7; num++) {
        nxtCard = i + (num * 7 );
        playerCards.push(this.deck.Take(nxtCard));   
  }
      let playerNum:number = i+1;
      let player:Player = {name:"Player " + playerNum, cards:playerCards}
      this.players.push(player);
  }
  }

  public GetPlayers():Player[] {
    return this.players;
  }
    

}

