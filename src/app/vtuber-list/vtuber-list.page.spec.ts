import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VtuberListPage } from './vtuber-list.page';

describe('VtuberListPage', () => {
  let component: VtuberListPage;
  let fixture: ComponentFixture<VtuberListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VtuberListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
