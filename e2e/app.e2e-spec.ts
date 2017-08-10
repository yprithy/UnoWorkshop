import { AngularTrialPage } from './app.po';

describe('angular-trial App', () => {
  let page: AngularTrialPage;

  beforeEach(() => {
    page = new AngularTrialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
