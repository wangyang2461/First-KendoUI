import { MyFirstKendoProjectPage } from './app.po';

describe('my-first-kendo-project App', () => {
  let page: MyFirstKendoProjectPage;

  beforeEach(() => {
    page = new MyFirstKendoProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
