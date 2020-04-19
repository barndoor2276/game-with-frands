import { Component, Inject, EventEmitter, OnInit } from '@angular/core';
import { GameModel } from '@models/game/game.model'
import { GameType } from '@models/game/game-type.model';
import { MatDialogRef } from '@angular/material';
import { LoggerService } from '@services/logger/logger.service';
import { GameService } from '@services/game/game.service';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create.game.component.css']
})
export class CreateGameComponent implements OnInit {
  public title = 'Create Game';
  public gameTypes: string[] = Object.keys(GameType).filter(x => isNaN(Number(x)) === true);
  public event: EventEmitter<GameModel> = new EventEmitter();
  public game: GameModel = {
    name: '',
    type: GameType.none,
    password: ''
  } as GameModel;

  constructor(
    private dialogRef: MatDialogRef<CreateGameComponent>,
    private logger: LoggerService,
    private gameService: GameService,
    @Inject('BASE_URL') private baseUrl: string) {
  }

  ngOnInit(): void {
    this.event.subscribe(this.gameService.createGame.bind(this.gameService), this.logger.error, () => this.event.unsubscribe());
  }

  public onSubmit(): void {
    this.event.emit(this.game);
    this.dialogRef.close();
  }
}
