import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveDesignationComponent } from './save-designation.component';

describe('SaveDesignationComponent', () => {
  let component: SaveDesignationComponent;
  let fixture: ComponentFixture<SaveDesignationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveDesignationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveDesignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
