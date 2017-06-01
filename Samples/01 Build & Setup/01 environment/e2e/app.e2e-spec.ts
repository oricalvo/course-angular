import { EnvironmentPage } from './app.po';

describe('environment App', () => {
  let page: EnvironmentPage;

  beforeEach(() => {
    page = new EnvironmentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
