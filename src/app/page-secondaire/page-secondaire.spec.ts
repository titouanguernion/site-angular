import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSecondaire } from './page-secondaire';

describe('PageSecondaire', () => {
  let component: PageSecondaire;
  let fixture: ComponentFixture<PageSecondaire>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageSecondaire]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageSecondaire);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
