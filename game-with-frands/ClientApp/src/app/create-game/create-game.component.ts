import { Component, Inject, EventEmitter, OnInit } from '@angular/core';
import { GameModel } from 'src/shared/models/game/game.model';
import { GameType } from 'src/shared/models/game/game-type.model';
import { MatDialogRef } from '@angular/material';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create.game.component.css']
})
export class CreateGameComponent implements OnInit {
  public title = 'Create Game';
  public gameTypes: string[] = Object.keys(GameType).filter(x => isNaN(Number(x)) === true);
  public currentCount = 0;
  public event: EventEmitter<GameModel> = new EventEmitter();

  game: GameModel = {
    name: '',
    type: GameType.none,
    password: ''
  };

  constructor(
    private dialogRef: MatDialogRef<CreateGameComponent>,
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string) {
  }

  ngOnInit() {
    this.event.subscribe(this.createGame.bind(this), console.log, () => this.event.unsubscribe());
  }

  private createGame(newGame: GameModel) {
    this.http.post<GameModel[]>(this.baseUrl + 'game', [newGame]).subscribe(
      result => { },
      error => console.error(error));
  }

  public onSubmit() {
    console.log(this.game);
    this.event.emit(this.game);
    this.dialogRef.close();
  }
}
