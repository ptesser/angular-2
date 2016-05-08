export class TravelDashboardPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('travel-dashboard-app h1')).getText();
  }
}
