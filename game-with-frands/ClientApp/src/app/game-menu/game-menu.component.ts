import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, PageEvent } from '@angular/material';
import { HttpClient } from '@angular/common/http';

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
  private activeGames: GameModel[] = [];

  constructor(
    private dialog: MatDialog,
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string) { }

  ngOnInit() {
    this.http.get<GameModel[]>(this.baseUrl + 'game').subscribe(result => {
      this.activeGames = result;
    }, error => { console.log(error) });
  }

  onNewGameClick() {
    const dialogRef = this.dialog.open(CreateGameComponent, {
      width: '75%',
      data: 'Create Game'
    });

    dialogRef.componentInstance.event.subscribe((result) => {
    });
  }

  public getActiveGames() {
    return this.activeGames;
  }

}
