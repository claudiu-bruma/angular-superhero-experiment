import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperHeroListComponent } from './superHeroList.component';

describe('SuperHeroListComponent', () => {
  let component: SuperHeroListComponent;
  let fixture: ComponentFixture<SuperHeroListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperHeroListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperHeroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
