import { Component, EventEmitter } from '@angular/core';
import { GameModel } from 'src/shared/models/game/game.model';
import { GameType } from 'src/shared/models/game/game-type.model';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create.game.component.css']
})
export class CreateGameComponent {
  public title = 'Create Game';
  public gameTypes: string[] = Object.keys(GameType).filter(x => isNaN(Number(x)) === true);
  public currentCount = 0;
  public event: EventEmitter<any> = new EventEmitter();

  game: GameModel = {
    name: '',
    type: GameType.none,
    password: ''
  };

  constructor(public dialogRef: MatDialogRef<CreateGameComponent>) {
  }

  public incrementCounter() {
    this.currentCount++;
  }

  public onSubmit() {
    this.event.emit({ date: this.game });
    this.dialogRef.close();
  }
}
