import { GameType } from './game-type.model';

export interface GameModel {
  name: string;
  type: GameType;
  password: string;
}
