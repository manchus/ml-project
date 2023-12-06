import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LstProduitsComponent } from './lst-produits.component';

describe('LstProduitsComponent', () => {
  let component: LstProduitsComponent;
  let fixture: ComponentFixture<LstProduitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LstProduitsComponent]
    });
    fixture = TestBed.createComponent(LstProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
