import { Component } from '@angular/core';
import { GameModel } from 'src/shared/models/game/game.model';
import { GameType } from 'src/shared/models/game/game-type.model';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create.game.component.css']
})
export class CreateGameComponent {
  public title = 'Create Game';
  public gameTypes: string[] = Object.keys(GameType).filter(x => isNaN(Number(x)) === true);
  public currentCount = 0;

  game: GameModel = {
    name: '',
    type: GameType.none,
    password: ''
  };

  public incrementCounter() {
    this.currentCount++;
  }

  public onSubmit() {

  }
}
