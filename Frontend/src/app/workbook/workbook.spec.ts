import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Workbook } from './workbook';

describe('Workbook', () => {
  let component: Workbook;
  let fixture: ComponentFixture<Workbook>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Workbook],
    }).compileComponents();

    fixture = TestBed.createComponent(Workbook);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
