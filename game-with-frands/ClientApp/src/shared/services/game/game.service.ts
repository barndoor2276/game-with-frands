import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GameModel } from '@models/game/game.model';
import { LoggerService } from '@services/logger/logger.service';

@Injectable()
export class GameService {

  constructor(
    private http: HttpClient,
    private logger: LoggerService,
    @Inject('BASE_URL') private baseUrl: string
  ) { }

  public async getActiveGames(): Promise<GameModel[]> {
    try {
      this.logger.info('refreshing active games');
      return await this.http.get<GameModel[]>(this.baseUrl + 'game').toPromise();
    } catch (error) {
      this.logger.error(error);
      return [];
    }
  }

  public async createGame(game: GameModel | GameModel[]): Promise<void> {
    try {
      await this.http.post<GameModel[]>(this.baseUrl + 'game', Array.isArray(game) ? game : [game]).toPromise();
    } catch (error) {
      this.logger.error(error);
    }
  }
}
