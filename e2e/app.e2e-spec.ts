import { GomakeUiPage } from './app.po';

describe('gomake-ui App', () => {
  let page: GomakeUiPage;

  beforeEach(() => {
    page = new GomakeUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
