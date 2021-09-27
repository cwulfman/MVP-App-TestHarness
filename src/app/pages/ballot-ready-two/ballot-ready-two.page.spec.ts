import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { BallotReadyTwoPage } from './ballot-ready-two.page';

describe('BallotReadyTwoPage', () => {
  let component: BallotReadyTwoPage;
  let fixture: ComponentFixture<BallotReadyTwoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BallotReadyTwoPage ],
	imports: [IonicModule.forRoot(),
		 RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(BallotReadyTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
