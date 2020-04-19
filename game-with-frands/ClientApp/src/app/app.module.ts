import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatSelectModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatDividerModule,
  MatButtonModule,
  MatPaginatorModule
} from '@angular/material';

/**
 * Components
 */
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { GameMenuComponent } from './game-menu/game-menu.component';
import { CreateGameComponent } from './create-game/create-game.component';

/**
 * Services
 */
import { LoggerService } from '../shared/services/logger/logger.service';
import { GameService } from '../shared/services/game/game.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    GameMenuComponent,
    CreateGameComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'game-menu', component: GameMenuComponent },
    ]),
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatDividerModule,
    MatButtonModule,
    MatPaginatorModule
  ],
  providers: [
    LoggerService,
    GameService
  ],
  bootstrap: [AppComponent],
  entryComponents: [CreateGameComponent]
})
export class AppModule { }
