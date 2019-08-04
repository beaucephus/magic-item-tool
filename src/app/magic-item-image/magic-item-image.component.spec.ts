import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicItemImageComponent } from './magic-item-image.component';

describe('MagicItemImageComponent', () => {
  let component: MagicItemImageComponent;
  let fixture: ComponentFixture<MagicItemImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagicItemImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicItemImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
