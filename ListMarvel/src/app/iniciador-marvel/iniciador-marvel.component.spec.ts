import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciadorMarvelComponent } from './iniciador-marvel.component';

describe('IniciadorMarvelComponent', () => {
  let component: IniciadorMarvelComponent;
  let fixture: ComponentFixture<IniciadorMarvelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciadorMarvelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IniciadorMarvelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
