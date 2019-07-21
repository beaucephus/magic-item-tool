import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicItemFormComponent } from './magic-item-form.component';

describe('MagicItemFormComponent', () => {
  let component: MagicItemFormComponent;
  let fixture: ComponentFixture<MagicItemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagicItemFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
