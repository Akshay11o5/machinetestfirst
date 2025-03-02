import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketerTableComponent } from './cricketer-table.component';

describe('CricketerTableComponent', () => {
  let component: CricketerTableComponent;
  let fixture: ComponentFixture<CricketerTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CricketerTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CricketerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
