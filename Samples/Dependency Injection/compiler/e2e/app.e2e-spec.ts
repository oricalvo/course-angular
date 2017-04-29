import { OverrideBuiltinServicePage } from './app.po';

describe('override-builtin-service App', () => {
  let page: OverrideBuiltinServicePage;

  beforeEach(() => {
    page = new OverrideBuiltinServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
