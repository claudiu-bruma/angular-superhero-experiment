import { Component,  EventEmitter, Input, Output,AfterViewInit, ViewChild   } from '@angular/core';
import { SuperHeroListComponent } from './superHeroList/superHeroList.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchValue = '';
  title = 'angular-experimental-app';

  @ViewChild(SuperHeroListComponent)
  private superHeroComponent: SuperHeroListComponent;

  ngAfterViewInit(): void {
   
    this.superHeroComponent.loadInitialSuperheroes();
  }

  search() {
    this.superHeroComponent.searchSuperHeros(this.searchValue);
  }
}
