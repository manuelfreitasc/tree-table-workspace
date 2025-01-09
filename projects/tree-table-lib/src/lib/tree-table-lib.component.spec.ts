import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeTableLibComponent } from './tree-table-lib.component';

describe('TreeTableLibComponent', () => {
  let component: TreeTableLibComponent;
  let fixture: ComponentFixture<TreeTableLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeTableLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeTableLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
