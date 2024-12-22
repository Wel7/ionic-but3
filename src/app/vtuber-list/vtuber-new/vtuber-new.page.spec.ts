import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VtuberNewPage } from './vtuber-new.page';

describe('VtuberNewPage', () => {
  let component: VtuberNewPage;
  let fixture: ComponentFixture<VtuberNewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VtuberNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
