import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalListMarvelComponent } from './modal-list-marvel.component';

describe('ModalListMarvelComponent', () => {
  let component: ModalListMarvelComponent;
  let fixture: ComponentFixture<ModalListMarvelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalListMarvelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalListMarvelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
