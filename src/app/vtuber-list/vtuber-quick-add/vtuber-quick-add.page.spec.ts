import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VtuberQuickAddPage } from './vtuber-quick-add.page';

describe('VtuberQuickAddPage', () => {
  let component: VtuberQuickAddPage;
  let fixture: ComponentFixture<VtuberQuickAddPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VtuberQuickAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
