import { Component, OnInit } from '@angular/core';
import { MatDialog, PageEvent } from '@angular/material';

import { CreateGameComponent } from '../create-game/create-game.component';
import { GameModel } from '../../shared/models/game/game.model';
import { GameType } from 'src/shared/models/game/game-type.model';

@Component({
  selector: 'app-game-menu',
  templateUrl: './game-menu.component.html',
  styleUrls: ['./game-menu.component.css']
})
export class GameMenuComponent implements OnInit {
  public title = 'Game Menu';
  public displayedColumns = ['name', 'password', 'type'];
  public pageSize = 10;
  public pageEvent: PageEvent;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  onNewGameClick() {
    const dialogRef = this.dialog.open(CreateGameComponent, {
      width: '75%',
      data: 'Create Game'
    });

    dialogRef.componentInstance.event.subscribe((result) => {
    });
  }

  getActiveGames(): GameModel[] {
    return [
      { name: 'name1', password: 'password1', type: GameType.catan },
      { name: 'name2', password: 'password2', type: GameType.pandemic }
    ];
  }

}
