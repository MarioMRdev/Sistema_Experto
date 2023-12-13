import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FallosPage } from './fallos.page';

describe('FallosPage', () => {
  let component: FallosPage;
  let fixture: ComponentFixture<FallosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FallosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
