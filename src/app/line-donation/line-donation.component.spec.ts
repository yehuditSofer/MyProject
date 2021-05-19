import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineDonationComponent } from './line-donation.component';

describe('LineDonationComponent', () => {
  let component: LineDonationComponent;
  let fixture: ComponentFixture<LineDonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineDonationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
