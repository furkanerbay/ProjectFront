import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProvinceComponent } from './create-province.component';

describe('CreateProvinceComponent', () => {
  let component: CreateProvinceComponent;
  let fixture: ComponentFixture<CreateProvinceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateProvinceComponent]
    });
    fixture = TestBed.createComponent(CreateProvinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
