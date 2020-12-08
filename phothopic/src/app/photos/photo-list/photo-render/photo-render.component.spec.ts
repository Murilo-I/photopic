import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoRenderComponent } from './photo-render.component';

describe('PhotoRenderComponent', () => {
  let component: PhotoRenderComponent;
  let fixture: ComponentFixture<PhotoRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoRenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
