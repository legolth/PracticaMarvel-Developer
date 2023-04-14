import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableMarvelComponent } from './data-table-marvel.component';

describe('DataTableMarvelComponent', () => {
  let component: DataTableMarvelComponent;
  let fixture: ComponentFixture<DataTableMarvelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTableMarvelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataTableMarvelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
