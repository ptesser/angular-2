import { TravelDashboardPage } from './app.po';

describe('travel-dashboard App', function() {
  let page: TravelDashboardPage;

  beforeEach(() => {
    page = new TravelDashboardPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('travel-dashboard works!');
  });
});
