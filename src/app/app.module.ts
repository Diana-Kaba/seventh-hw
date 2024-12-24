import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { provideHttpClient } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { GetExercisesService } from './shared/get-exercises.service';
import { ListOfExercisesComponent } from './components/list-of-exercises/list-of-exercises.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    ListOfExercisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(GetExercisesService, { delay: 500 })
  ],
  providers: [ provideHttpClient() ],
  bootstrap: [AppComponent]
})
export class AppModule { }
