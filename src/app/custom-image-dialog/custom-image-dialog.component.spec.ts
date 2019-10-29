import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomImageDialogComponent } from './custom-image-dialog.component';

describe('CustomImageDialogComponent', () => {
  let component: CustomImageDialogComponent;
  let fixture: ComponentFixture<CustomImageDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomImageDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomImageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
