import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveSalaryRuleComponent } from './save-salary-rule.component';

describe('SaveSalaryRuleComponent', () => {
  let component: SaveSalaryRuleComponent;
  let fixture: ComponentFixture<SaveSalaryRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveSalaryRuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveSalaryRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
