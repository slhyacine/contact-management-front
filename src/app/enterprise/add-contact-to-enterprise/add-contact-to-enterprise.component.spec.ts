import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContactToEnterpriseComponent } from './add-contact-to-enterprise.component';

describe('AddContactToEnterpriseComponent', () => {
  let component: AddContactToEnterpriseComponent;
  let fixture: ComponentFixture<AddContactToEnterpriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddContactToEnterpriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddContactToEnterpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
