import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomemAranhaComponent } from './homem-aranha.component';

describe('HomemAranhaComponent', () => {
  let component: HomemAranhaComponent;
  let fixture: ComponentFixture<HomemAranhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomemAranhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomemAranhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
