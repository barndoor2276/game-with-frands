import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, PageEvent, MatTable } from '@angular/material';

import { CreateGameComponent } from '../create-game/create-game.component';
import { GameModel } from '@models/game/game.model';
import { LoggerService } from '@services/logger/logger.service';
import { GameService } from '@services/game/game.service';

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

  @ViewChild(MatTable, { static: true }) table: MatTable<GameModel>;

  constructor(
    private dialog: MatDialog,
    private gameService: GameService,
    private logger: LoggerService) { }

  ngOnInit() {
    this.gameService.getActiveGames();
  }

  public onNewGameClick() {
    const dialogRef = this.dialog.open(CreateGameComponent, {
      width: '75%',
      data: 'Create Game'
    });

    dialogRef.afterClosed().subscribe(
      () => { this.gameService.getActiveGames() },
      (err) => { this.logger.error(err) },
      () => { this.table.renderRows() });
  }

  public async getActiveGames(): Promise<GameModel[]> {
    return await this.gameService.getActiveGames();
  }

}
