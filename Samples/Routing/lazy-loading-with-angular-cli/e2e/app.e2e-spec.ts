import { LazyLoadingWithAngularCliPage } from './app.po';

describe('lazy-loading-with-angular-cli App', () => {
  let page: LazyLoadingWithAngularCliPage;

  beforeEach(() => {
    page = new LazyLoadingWithAngularCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
