import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SuperHeroListComponent } from './superHeroList/superHeroList.component';
import { FormsModule } from '@angular/forms';
import {MatListModule    } from '@angular/material/list';
import {MatButtonModule } from '@angular/material/button';
import {MatIconModule  } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import { MatDialogModule} from '@angular/material/dialog';
import { SuperheroDetailsDialogComponent } from './superhero-details-dialog/superhero-details-dialog.component';
 
@NgModule({
  declarations: [
    AppComponent,
    SuperHeroListComponent,
    SuperheroDetailsDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
