import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroDetailsDialogComponent } from './superhero-details-dialog.component';

describe('SuperheroDetailsDialogComponent', () => {
  let component: SuperheroDetailsDialogComponent;
  let fixture: ComponentFixture<SuperheroDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperheroDetailsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperheroDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
