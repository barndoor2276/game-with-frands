import { GameType } from './game-type.model';
import { PlayerModel } from '@models/player/player.model';

export interface GameModel {
  name: string;
  type: GameType;
  password: string;
  players: PlayerModel[];
  minPlayers: number;
  maxPlayers: number;
  turn: number;
  playTime: number;
}
