import { ModelDemoPage } from './app.po';

describe('model-demo App', function() {
  let page: ModelDemoPage;

  beforeEach(() => {
    page = new ModelDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
