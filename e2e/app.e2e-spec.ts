import { TestFMIPage } from './app.po';

describe('test-fmi App', () => {
  let page: TestFMIPage;

  beforeEach(() => {
    page = new TestFMIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
