import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProvinceComponent } from './list-province.component';

describe('ListProvinceComponent', () => {
  let component: ListProvinceComponent;
  let fixture: ComponentFixture<ListProvinceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListProvinceComponent]
    });
    fixture = TestBed.createComponent(ListProvinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
