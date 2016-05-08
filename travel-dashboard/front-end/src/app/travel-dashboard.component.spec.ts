import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { TravelDashboardAppComponent } from '../app/travel-dashboard.component';

beforeEachProviders(() => [TravelDashboardAppComponent]);

describe('App: TravelDashboard', () => {
  it('should create the app',
      inject([TravelDashboardAppComponent], (app: TravelDashboardAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'travel-dashboard works!\'',
      inject([TravelDashboardAppComponent], (app: TravelDashboardAppComponent) => {
    expect(app.title).toEqual('travel-dashboard works!');
  }));
});
